import localFont from "next/font/local";

// Rubik Glitch is only used by the CreaTV wordmark on this page, so it loads
// here (woff2 via next/font) instead of globally.
const rubikGlitch = localFont({
  src: "../../../fonts/RubikGlitch-Regular.woff2",
  variable: "--font-rubik-glitch",
  display: "swap",
});

export default function CreaTVDownloadLayout({ children }: { children: React.ReactNode }) {
  return <div className={rubikGlitch.variable}>{children}</div>;
}
