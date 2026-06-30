import type { CardSize } from '@/lib/ig-cards';

/**
 * Outer 1080×1080 / 1080×1350 stage.
 * The Puppeteer export script screenshots `#ig-stage`.
 */
export default function IGFrame({
  size,
  children,
  className = '',
}: {
  size: CardSize;
  children: React.ReactNode;
  className?: string;
}) {
  const dims = size === 'portrait' ? { w: 1080, h: 1350 } : { w: 1080, h: 1080 };
  return (
    <div
      id="ig-stage"
      data-size={size}
      style={{
        width: `${dims.w}px`,
        height: `${dims.h}px`,
      }}
      className={`relative overflow-hidden text-white ${className}`}
    >
      {children}
    </div>
  );
}
