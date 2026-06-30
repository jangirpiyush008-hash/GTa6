import Image from 'next/image';

/** Bottom brand watermark applied to every card. */
export default function IGBrandMark({
  position = 'bottom',
}: {
  position?: 'bottom' | 'top';
}) {
  const cls =
    position === 'bottom'
      ? 'absolute bottom-8 left-8 right-8 flex items-center justify-between'
      : 'absolute top-8 left-8 right-8 flex items-center justify-between';
  return (
    <div className={`${cls} z-20`}>
      <div className="flex items-center gap-3">
        <Image
          src="/images/gta/gta-vi-logo.png"
          alt=""
          width={48}
          height={48}
          className="drop-shadow-[0_0_18px_rgba(255,0,110,0.65)]"
        />
        <div className="leading-tight">
          <div
            className="text-white/95 text-[22px] tracking-[0.18em]"
            style={{ fontFamily: 'var(--font-display), Bebas Neue, sans-serif' }}
          >
            GTAVI<span className="text-white/55">.GUIDE</span>
          </div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/45">
            Your daily GTA VI source
          </div>
        </div>
      </div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
        @gtavi.guide
      </div>
    </div>
  );
}
