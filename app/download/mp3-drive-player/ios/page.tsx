"use client";

import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

export default function IOSDownloadPage() {
  const [isDownloading, setIsDownloading] = useState(true);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Start download immediately
    const downloadFile = () => {
      const link = document.createElement("a");
      link.href = "/mp3-drive-player/mobile/ios/build-1752218174811.ipa";
      link.download = "MP3-Drive-Player-iOS.ipa";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success state after a short delay
      setTimeout(() => {
        setIsDownloading(false);
      }, 2500);
    };

    downloadFile();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isDownloading && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      // Close the page
      window.close();
    }
    return () => clearTimeout(timer);
  }, [isDownloading, countdown]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Apple Logo */}
        <div className="mb-8">
          <svg
            className="w-16 h-16 mx-auto text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        </div>

        {/* Title Text */}
        {isDownloading ? (
          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-b dark:from-white dark:to-gray-400 from-gray-400 to-black bg-clip-text text-transparent">
              Downloading{" "}
            </span>
            <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
              MP3 Drive
            </span>
            <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
              {" "}
              Player
            </span>
            <span className="bg-gradient-to-b dark:from-white dark:to-gray-400 from-gray-400 to-black bg-clip-text text-transparent">
              {" "}
              for{" "}
            </span>
            <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
              iOS
            </span>
          </h1>
        ) : (
          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-b from-green-400 to-green-700 bg-clip-text text-transparent">
              Successfully
            </span>
            <span className="bg-gradient-to-b dark:from-white dark:to-gray-400 from-gray-400 to-black bg-clip-text text-transparent">
              {" "}
              downloaded!
            </span>
          </h1>
        )}

        {/* Loading Spinner or Countdown */}
        {isDownloading ? (
          <div className="relative">
            <Loader className="w-16 h-16 mx-auto text-blue-500 animate-spin" />
            <div className="mt-4 text-white/70">
              Please wait while your download starts...
            </div>
          </div>
        ) : (
          <div className="mt-4 text-xl">
            <span className="bg-gradient-to-b dark:from-white dark:to-gray-400 from-gray-400 to-black bg-clip-text text-transparent">
              This page will automatically close in{" "}
            </span>
            <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent font-bold">
              {countdown}
            </span>
            <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
              {countdown === 1 ? " second" : " seconds"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
