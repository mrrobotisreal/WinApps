"use client";

import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import Image from "next/image";
import { trackRedirects } from "@/lib/analytics";

const REDIRECT_URL = "https://photos.app.goo.gl/dJfwHuEoAvnpkGao9";
const ALBUM_NAME = "Rome-stria";
const ALBUM_SLUG = "rome-stria";

export default function RomeStriaRedirectPage() {
  const [isPreparingRedirect, setIsPreparingRedirect] = useState(true);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Small pause to show the preparing state before the countdown begins
    const timer = setTimeout(() => {
      setIsPreparingRedirect(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    trackRedirects({
      albumName: ALBUM_NAME,
      albumSlug: ALBUM_SLUG,
      redirectUrl: REDIRECT_URL,
      action: "view_start",
    });
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isPreparingRedirect && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (!isPreparingRedirect && countdown === 0) {
      trackRedirects({
        albumName: ALBUM_NAME,
        albumSlug: ALBUM_SLUG,
        redirectUrl: REDIRECT_URL,
        action: "auto_redirect",
        countdownRemaining: countdown,
      });
      window.location.href = REDIRECT_URL;
    }

    return () => clearTimeout(timer);
  }, [isPreparingRedirect, countdown]);

  const handleImmediateRedirect = () => {
    trackRedirects({
      albumName: ALBUM_NAME,
      albumSlug: ALBUM_SLUG,
      redirectUrl: REDIRECT_URL,
      action: "cta_click",
      countdownRemaining: countdown,
    });
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="text-center w-full max-w-md">
        {/* Album Icon */}
        <div className="mb-8">
          <svg
            className="w-16 h-16 mx-auto text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 6h-3.586l-1.707-1.707A.997.997 0 0 0 15 4h-4a.997.997 0 0 0-.707.293L8.586 6H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm0 11H5V8h3.414l1.707-1.707L11.828 6h2.344l1.707 1.707L17.586 8H21v9z" />
            <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.5 2.5 0 1 1 12 9.5a2.5 2.5 0 0 1 0 5z" />
          </svg>
        </div>

        {/* Album Preview */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-yellow-600/30 via-black to-amber-900/40 shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(250,204,21,0.35),transparent_38%),radial-gradient(circle_at_70%_70%,rgba(234,179,8,0.35),transparent_35%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="https://pub-5e3f5f69f6bd4f2fb6bc741e03f34851.r2.dev/rome-stria.jpg"
                alt="Google Photos album preview"
                width={341}
                height={256}
                className="rounded-lg w-32 h-32 md:w-40 md:h-40 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Title Text */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-b dark:from-white dark:to-gray-400 from-gray-400 to-black bg-clip-text text-transparent">
            Redirecting to{" "}
          </span>
          <span className="bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-transparent">
            Rome-stria
          </span>
          <span className="bg-gradient-to-b dark:from-white dark:to-gray-400 from-gray-400 to-black bg-clip-text text-transparent">
            {" "}
            album in Mitch&apos;s Google Photos
          </span>
        </h1>

        {/* Loading Spinner or Countdown */}
        {isPreparingRedirect ? (
          <div className="relative">
            <Loader className="w-16 h-16 mx-auto text-yellow-400 animate-spin" />
            <div className="mt-4 text-white/70 text-base">
              Getting your album ready...
            </div>
          </div>
        ) : (
          <div className="mt-4 text-xl">
            <span className="bg-gradient-to-b dark:from-white dark:to-gray-400 from-gray-400 to-black bg-clip-text text-transparent">
              Opening album in{" "}
            </span>
            <span className="bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-transparent font-bold">
              {countdown}
            </span>
            <span className="bg-gradient-to-b from-amber-300 to-amber-700 bg-clip-text text-transparent">
              {countdown === 1 ? " second" : " seconds"}
            </span>
          </div>
        )}

        <button
          onClick={handleImmediateRedirect}
          className="mt-8 inline-flex w-full justify-center rounded-lg bg-gradient-to-br from-amber-200 to-amber-500 border border-amber-700 px-6 py-3 text-lg font-bold text-amber-950 shadow-lg shadow-amber-900/30 transition hover:scale-[1.02] hover:shadow-amber-800/40 focus:outline-none focus:ring-2 focus:ring-amber-700/60 cursor-pointer"
        >
          View Now
        </button>
      </div>
    </div>
  );
}
