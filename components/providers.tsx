"use client";

import { PostHogProvider } from "posthog-js/react";
import { ThemeProvider } from "@/components/theme-provider";
import { WinnyAssistant } from "@/components/assistant/winny-assistant";
import { Toaster } from "@/components/ui/sonner";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <PostHogProvider
      apiKey={process.env.NEXT_PUBLIC_POSTHOG_KEY || ""}
      options={{
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
        // Enable session recording (configured in loaded callback)
        // Enable autocapture for automatic event tracking
        autocapture: true,
        // Capture page views automatically
        capture_pageview: true,
        // Capture performance metrics
        capture_performance: true,
        // Enable cross-subdomain tracking
        cross_subdomain_cookie: true,
        // Persistence type
        persistence: "localStorage+cookie",
        // Advanced configuration
        loaded: (posthog) => {
          // Enable debugging in development
          if (process.env.NODE_ENV === "development") {
            posthog.debug();
          }

          // Set initial user properties
          posthog.register({
            website_version: "1.0.0",
            platform: "web",
            framework: "nextjs",
          });

          // Enable session recording for all users
          posthog.startSessionRecording();
        },
      }}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <WinnyAssistant />
        <Toaster
          position="top-right"
          expand={true}
          richColors={true}
          closeButton={true}
        />
      </ThemeProvider>
    </PostHogProvider>
  );
}
