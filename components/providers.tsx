"use client";

import { AnalyticsProvider } from "@/components/analytics-provider";
import { WinnyAssistant } from "@/components/assistant/winny-assistant";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AnalyticsProvider />
      {children}
      <WinnyAssistant />
      <Toaster position="top-right" expand={true} richColors={true} closeButton={true} />
    </ThemeProvider>
  );
}
