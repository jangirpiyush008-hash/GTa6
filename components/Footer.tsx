import Image from 'next/image';
import NewsletterSignup from './NewsletterSignup';

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-10 overflow-hidden border-t border-white/5">
      {/* gradient sky */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(255,0,110,0.18) 50%, rgba(157,78,221,0.25) 100%)',
        }}
      />

      {/* Palm tree silhouette */}
      <svg
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 right-0 w-full h-44 pointer-events-none"
      >
        <defs>
          <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1a0033" stopOpacity="0" />
            <stop offset="100%" stopColor="#050308" />
          </linearGradient>
        </defs>
        {/* horizon */}
        <rect width="1200" height="220" fill="url(#sky)" />
        {/* sun */}
        <circle cx="900" cy="170" r="48" fill="#ff006e" opacity="0.55" />
        {/* palms */}
        <g fill="#000" stroke="#ff006e" strokeWidth="1.2">
          {/* palm 1 */}
          <path d="M150,220 Q145,150 152,90 Q155,60 158,55" fill="none" />
          <path d="M158,55 Q120,40 90,55 Q120,55 158,68 Z" />
          <path d="M158,55 Q190,30 230,55 Q200,55 158,68 Z" />
          <path d="M158,55 Q160,20 145,0 Q160,30 162,60 Z" />
          <path d="M158,55 Q210,75 245,110 Q200,80 162,68 Z" />
          <path d="M158,55 Q105,80 75,110 Q120,80 162,68 Z" />
          {/* palm 2 */}
          <path d="M1050,220 Q1058,150 1050,95 Q1048,60 1045,55" fill="none" />
          <path d="M1045,55 Q1080,30 1115,55 Q1080,55 1045,68 Z" />
          <path d="M1045,55 Q1010,40 980,55 Q1010,55 1045,68 Z" />
          <path d="M1045,55 Q1045,20 1060,0 Q1045,30 1042,60 Z" />
          <path d="M1045,55 Q1090,80 1125,110 Q1080,80 1042,68 Z" />
          <path d="M1045,55 Q995,80 965,110 Q1010,80 1042,68 Z" />
          {/* mid small palm */}
          <path d="M600,220 Q598,180 602,150 Q604,135 605,130" fill="none" />
          <path d="M605,130 Q580,118 560,130 Q585,128 608,138 Z" />
          <path d="M605,130 Q630,118 650,130 Q625,128 608,138 Z" />
          <path d="M605,130 Q605,110 595,98 Q608,115 610,132 Z" />
        </g>
      </svg>

      <div className="relative container-x text-center px-5">
        <div className="flex items-center justify-center gap-3 mb-5">
          <Image
            src="/images/gta/gta-vi-logo.png"
            alt="GTA VI"
            width={44}
            height={44}
            className="drop-shadow-[0_0_14px_rgba(255,0,110,0.55)]"
          />
          <span className="display text-2xl tracking-widest text-gradient-pink">
            GTAVI<span className="text-white/80">.GUIDE</span>
          </span>
        </div>

        {/* Newsletter capture — writes to Supabase newsletter_signups */}
        <div className="max-w-md mx-auto mb-7">
          <div className="text-xs uppercase tracking-[0.3em] text-neon-pink mb-2">
            Launch-day reminders + cheat drops
          </div>
          <NewsletterSignup source="footer" />
        </div>

        <p className="text-sm text-white/55 max-w-2xl mx-auto">
          GTAVI.GUIDE is a fan site. Not affiliated with Rockstar Games or
          Take-Two Interactive.
        </p>
        <p className="mt-3 text-xs text-white/40 max-w-2xl mx-auto">
          This site contains affiliate links. We may earn a commission if you
          purchase through our links at no extra cost to you.
        </p>

        <div className="neon-divider my-7 max-w-md mx-auto" />

        <div className="text-xs text-white/35">
          © 2026 GTAVI.GUIDE — Made for fans, by fans.
        </div>
      </div>
    </footer>
  );
}
