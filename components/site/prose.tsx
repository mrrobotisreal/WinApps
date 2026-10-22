import { tokenizeProse } from "@/lib/prose";

/** One paragraph of content prose, with **bold** and `code` rendered. */
export function Prose({ text }: { text: string }) {
  return (
    <>
      {tokenizeProse(text).map((token, i) => {
        if (token.kind === "bold") return <strong key={i}>{token.value}</strong>;
        if (token.kind === "code") {
          return (
            <code key={i} className="rounded bg-muted px-1 py-0.5 font-mono text-sm">
              {token.value}
            </code>
          );
        }
        return <span key={i}>{token.value}</span>;
      })}
    </>
  );
}
