"use client";

import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import Image from "next/image";

export default function AndroidDownloadPage() {
  const [isDownloading, setIsDownloading] = useState(true);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Start download immediately
    const downloadFile = () => {
      const link = document.createElement("a");
      link.href =
        "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/MP3-Drive-Player-Android.apk";
      link.download = "MP3-Drive-Player-Android.apk";
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
      // Redirect to homepage since window.close() doesn't work for direct navigation
      window.location.href = "/";
    }
    return () => clearTimeout(timer);
  }, [isDownloading, countdown]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Android Icon */}
        <div className="mb-8">
          <svg
            className="w-16 h-16 mx-auto text-green-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
          </svg>
        </div>

        {/* MP3 Drive Player Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/LanguagesChannelImage.png"
            alt="MP3 Drive Player Icon"
            width={256}
            height={256}
            className="rounded-lg"
          />
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
            <span className="bg-gradient-to-b from-green-400 to-green-700 bg-clip-text text-transparent">
              Android
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
            <Loader className="w-16 h-16 mx-auto text-green-500 animate-spin" />
            <div className="mt-4 text-white/70">
              Please wait while your download starts...
            </div>
          </div>
        ) : (
          <div className="mt-4 text-xl">
            <span className="bg-gradient-to-b dark:from-white dark:to-gray-400 from-gray-400 to-black bg-clip-text text-transparent">
              Redirecting to homepage in{" "}
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
