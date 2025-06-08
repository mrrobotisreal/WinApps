'use client';

import React, { useEffect, useRef } from 'react';
import { trackAdInteraction } from '@/lib/analytics';

interface AdBannerProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'leaderboard' | 'banner';
  className?: string;
  adPosition: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
  }
}

const AdBanner: React.FC<AdBannerProps> = ({
  adSlot,
  adFormat = 'auto',
  className = '',
  adPosition,
  style = {}
}) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    const loadAd = () => {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle && adRef.current) {
          const existingAd = adRef.current.querySelector('.adsbygoogle');
          if (existingAd && existingAd.getAttribute('data-adsbygoogle-status')) {
            return;
          }

          (window.adsbygoogle = window.adsbygoogle || []).push({});

          trackAdInteraction('adsense_banner', adPosition, 'view');
        }
      } catch (error) {
        console.error('AdSense error:', error);
      }
    };

    const timer = setTimeout(loadAd, 100);

    return () => clearTimeout(timer);
  }, [adPosition, adSlot]);

  if (process.env.NODE_ENV === 'development' || adSlot.startsWith('123456')) {
    return (
      <div className={`bg-gray-200 border-2 border-dashed border-gray-400 p-4 text-center text-gray-600 rounded-lg ${className}`}>
        <p className="text-sm">Ad Placeholder - {adPosition}</p>
        <p className="text-xs">AdSense ads will appear here in production</p>
      </div>
    );
  }

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', minHeight: '50px', backgroundColor: 'transparent', ...style }}
        data-ad-client="ca-pub-3413790368941825"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
        onClick={() => trackAdInteraction('adsense_banner', adPosition, 'click')}
      />
    </div>
  );
};

export default AdBanner;
