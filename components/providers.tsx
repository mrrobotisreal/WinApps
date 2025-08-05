"use client";

import { PostHogProvider } from "posthog-js/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 5 * 60 * 1000, // 5 minutes
          },
        },
      })
  );

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
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            expand={true}
            richColors={true}
            closeButton={true}
          />
        </ThemeProvider>
      </QueryClientProvider>
    </PostHogProvider>
  );
}
