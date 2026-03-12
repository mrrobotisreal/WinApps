"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BsRobot } from "react-icons/bs";
import { Loader2, SendHorizontal, Sparkles, Trash2, X } from "lucide-react";

import { AssistantMarkdown } from "@/components/assistant/assistant-markdown";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ChatRole = "assistant" | "user";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  thoughtDurationMs?: number;
};

type StreamEvent = {
  type: "meta" | "delta" | "done" | "error";
  assistant?: string;
  model?: string;
  delta?: string;
  error?: string;
};

const WINNY_API_BASE =
  process.env.NEXT_PUBLIC_WINNY_API_URL || "https://winny-ai.winapps.dev";

const WINNY_WELCOME =
  "Hi! I'm Winny. Ask me about anything on WinApps.io, Mitch's portfolio, project pages, product pages, blog content, downloads, or contact info.";

function createMessage(role: ChatRole, content: string): ChatMessage {
  return {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${role}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    role,
    content,
  };
}

function formatThoughtDuration(durationMs: number) {
  const totalSeconds = Math.max(0, Math.round(durationMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
}

async function extractErrorMessage(response: Response) {
  try {
    const payload = (await response.json()) as { error?: string };
    return payload.error || `Request failed with status ${response.status}`;
  } catch {
    return `Request failed with status ${response.status}`;
  }
}

export function WinnyAssistant() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage("assistant", WINNY_WELCOME),
  ]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [model, setModel] = useState("deepseek-r1:8b-llama-distill-q8_0");
  const [thinkingMessageId, setThinkingMessageId] = useState<string | null>(null);
  const [thinkingDots, setThinkingDots] = useState(1);

  const abortRef = useRef<AbortController | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const thinkingStartedAtRef = useRef<number | null>(null);

  const hintText = useMemo(
    () => "Tab-only memory. It survives page navigation, but disappears when you leave the site.",
    []
  );

  useEffect(() => {
    if (!messagesRef.current) {
      return;
    }
    messagesRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isOpen, isStreaming]);

  useEffect(() => {
    const handlePageHide = () => {
      abortRef.current?.abort();
      void resetRemoteSession(true);
    };

    window.addEventListener("pagehide", handlePageHide);
    return () => {
      window.removeEventListener("pagehide", handlePageHide);
      abortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (!isStreaming || !thinkingMessageId) {
      setThinkingDots(1);
      return;
    }

    const intervalId = window.setInterval(() => {
      setThinkingDots((current) => (current === 3 ? 1 : current + 1));
    }, 450);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isStreaming, thinkingMessageId]);

  const resetRemoteSession = async (keepalive = false) => {
    try {
      await fetch(`${WINNY_API_BASE}/api/v1/chat/reset`, {
        method: "POST",
        mode: "cors",
        keepalive,
      });
    } catch {
      // Best-effort only. The backend is stateless anyway.
    }
  };

  const stopStreaming = (shouldReset = true) => {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsStreaming(false);
    setThinkingMessageId(null);
    thinkingStartedAtRef.current = null;
    setThinkingDots(1);
    if (shouldReset) {
      void resetRemoteSession();
    }
  };

  const clearConversation = () => {
    stopStreaming();
    setMessages([createMessage("assistant", WINNY_WELCOME)]);
    setDraft("");
    setError(null);
  };

  const toggleOpen = () => {
    if (isOpen) {
      if (isStreaming) {
        stopStreaming();
      } else {
        void resetRemoteSession();
      }
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
    setError(null);
  };

  const finalizeThinking = (messageId: string) => {
    const startedAt = thinkingStartedAtRef.current;
    if (startedAt === null) {
      return;
    }

    thinkingStartedAtRef.current = null;
    const elapsed = Date.now() - startedAt;
    setThinkingMessageId((current) =>
      current === messageId ? null : current
    );
    setMessages((chatMessages) =>
      chatMessages.map((message) =>
        message.id === messageId && message.thoughtDurationMs === undefined
          ? { ...message, thoughtDurationMs: elapsed }
          : message
      )
    );
    setThinkingDots(1);
  };

  const sendMessage = async () => {
    const content = draft.trim();
    if (!content || isStreaming) {
      return;
    }

    const userMessage = createMessage("user", content);
    const assistantMessage = createMessage("assistant", "");
    const nextMessages = [...messages, userMessage];

    setDraft("");
    setError(null);
    setIsOpen(true);
    setIsStreaming(true);
    setMessages([...nextMessages, assistantMessage]);
    setThinkingMessageId(assistantMessage.id);
    thinkingStartedAtRef.current = Date.now();
    setThinkingDots(1);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch(`${WINNY_API_BASE}/api/v1/chat/stream`, {
        method: "POST",
        mode: "cors",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content: messageContent }) => ({
            role,
            content: messageContent,
          })),
          pageUrl: window.location.href,
          pageTitle: document.title,
          pagePath: pathname || "/",
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error(await extractErrorMessage(response));
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      const appendAssistantChunk = (chunk: string) => {
        if (!chunk) {
          return;
        }
        finalizeThinking(assistantMessage.id);
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantMessage.id
              ? { ...message, content: message.content + chunk }
              : message
          )
        );
      };

      const processLine = (line: string) => {
        if (!line.trim()) {
          return;
        }
        const event = JSON.parse(line) as StreamEvent;
        if (event.model) {
          setModel(event.model);
        }
        if (event.type === "delta" && event.delta) {
          appendAssistantChunk(event.delta);
        }
        if (event.type === "error") {
          throw new Error(event.error || "Winny hit an unexpected snag.");
        }
      };

      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          processLine(line);
        }
      }

      buffer += decoder.decode();
      if (buffer.trim()) {
        processLine(buffer);
      }

      finalizeThinking(assistantMessage.id);

      setMessages((current) =>
        current.map((message) =>
          message.id === assistantMessage.id && !message.content.trim()
            ? {
                ...message,
                content:
                  "I couldn't squeeze a useful answer out of the model that time. Please try asking that a slightly different way.",
              }
            : message
        )
      );
    } catch (err) {
      if ((err as Error).name === "AbortError") {
        return;
      }

      finalizeThinking(assistantMessage.id);

      const message =
        err instanceof Error
          ? err.message
          : "Winny ran into an unexpected error.";

      setError(message);
      setMessages((current) =>
        current.map((chatMessage) =>
          chatMessage.id === assistantMessage.id
            ? {
                ...chatMessage,
                content:
                  chatMessage.content ||
                  "Something went wrong while I was trying to answer that. Please try again in a moment.",
              }
            : chatMessage
        )
      );
    } finally {
      if (!controller.signal.aborted) {
        finalizeThinking(assistantMessage.id);
      }
      abortRef.current = null;
      setIsStreaming(false);
    }
  };

  return (
    <>
      <div
        className={cn(
          "fixed right-3 bottom-24 z-[70] w-[calc(100vw-1.5rem)] max-w-sm transition-all duration-200 sm:right-6 sm:w-[24rem]",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <div className="overflow-hidden rounded-3xl border bg-background/95 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/85">
          <div className="border-b bg-muted/40 px-4 py-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <BsRobot className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">Winny</p>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                      Website-only assistant
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Ask about anything on WinApps.io.
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Model: {model}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={toggleOpen}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close Winny"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-3 flex items-start gap-2 rounded-2xl bg-background/80 px-3 py-2 text-[11px] text-muted-foreground">
              <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              <span>{hintText}</span>
            </div>
          </div>

          <div
            ref={messagesRef}
            className="flex max-h-[26rem] min-h-[18rem] flex-col gap-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                )}
              >
                <p className="mb-1 text-[11px] font-medium uppercase tracking-wide opacity-70">
                  {message.role === "user" ? "You" : "Winny"}
                </p>

                {message.role === "assistant" &&
                message.id === thinkingMessageId ? (
                  <div className="mb-2 flex items-center gap-2 text-[11px] font-medium opacity-70">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    <span>{`Thinking${".".repeat(thinkingDots)}`}</span>
                  </div>
                ) : null}

                {message.role === "assistant" &&
                message.thoughtDurationMs !== undefined ? (
                  <p className="mb-2 text-[11px] font-medium opacity-70">
                    Thought for {formatThoughtDuration(message.thoughtDurationMs)}
                  </p>
                ) : null}

                {message.role === "assistant" ? (
                  message.content ? (
                    <AssistantMarkdown
                      content={message.content}
                      className="break-words"
                    />
                  ) : null
                ) : (
                  <p className="whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="border-t bg-background px-4 py-4">
            {error ? (
              <p className="mb-3 rounded-xl border border-destructive/20 bg-destructive/5 px-3 py-2 text-xs text-destructive">
                {error}
              </p>
            ) : null}

            <Textarea
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void sendMessage();
                }
              }}
              rows={3}
              placeholder="Ask Winny about this website..."
              className="min-h-24 resize-none"
            />

            <div className="mt-3 flex items-center justify-between gap-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={clearConversation}
                className="gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Clear
              </Button>

              <Button
                type="button"
                onClick={() => void sendMessage()}
                disabled={!draft.trim() || isStreaming}
                className="gap-2 rounded-full px-4"
              >
                {isStreaming ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <SendHorizontal className="h-4 w-4" />
                )}
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Button
        type="button"
        onClick={toggleOpen}
        aria-label={isOpen ? "Hide Winny assistant" : "Open Winny assistant"}
        aria-expanded={isOpen}
        className="fixed right-3 bottom-6 z-[75] h-14 rounded-full px-4 shadow-2xl sm:right-6"
      >
        <BsRobot className="h-5 w-5" />
        <span className="ml-1 hidden sm:inline">
          {isOpen ? "Hide Winny" : "Ask Winny"}
        </span>
      </Button>
    </>
  );
}
