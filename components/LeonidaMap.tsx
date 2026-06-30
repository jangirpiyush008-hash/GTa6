'use client';

import { motion } from 'framer-motion';

/**
 * Stylized neon SVG map of the State of Leonida.
 * Coast lines + 6 region pins, no external image dependency.
 */
type Region = {
  id: string;
  name: string;
  short: string;
  x: number; // px on the 800x500 viewBox
  y: number;
  accent: 'pink' | 'cyan' | 'gold';
};

const regions: Region[] = [
  { id: 'vice-city', name: 'Vice City', short: 'VC', x: 360, y: 350, accent: 'pink' },
  { id: 'vice-dale', name: 'Vice-Dale County', short: 'VD', x: 430, y: 285, accent: 'cyan' },
  { id: 'keys', name: 'Leonida Keys', short: 'LK', x: 520, y: 430, accent: 'pink' },
  { id: 'port', name: 'Port Gellhorn', short: 'PG', x: 280, y: 215, accent: 'cyan' },
  { id: 'grass', name: 'Grassrivers', short: 'GR', x: 320, y: 300, accent: 'pink' },
  { id: 'kalaga', name: 'Mount Kalaga', short: 'MK', x: 215, y: 130, accent: 'cyan' },
];

const colorFor = (a: Region['accent']) =>
  a === 'pink' ? '#FF006E' : a === 'cyan' ? '#00F5FF' : '#FFD700';

export default function LeonidaMap() {
  return (
    <svg
      viewBox="0 0 800 500"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Map of the State of Leonida"
    >
      <defs>
        <radialGradient id="ocean" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0a0a25" />
          <stop offset="60%" stopColor="#06061a" />
          <stop offset="100%" stopColor="#020208" />
        </radialGradient>
        <linearGradient id="land" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a0033" />
          <stop offset="100%" stopColor="#0a0a14" />
        </linearGradient>
        <filter id="pinkGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M40 0 L0 0 0 40"
            fill="none"
            stroke="rgba(0,245,255,0.06)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>

      {/* Ocean */}
      <rect width="800" height="500" fill="url(#ocean)" />
      <rect width="800" height="500" fill="url(#grid)" />

      {/* Stylized Leonida landmass (loosely Florida-shaped) */}
      <path
        d="
          M 180 80
          Q 230 60 290 75
          Q 350 90 380 130
          Q 420 165 445 200
          Q 480 240 470 285
          Q 460 330 430 370
          Q 400 410 360 425
          Q 320 440 290 425
          Q 260 410 235 380
          Q 210 350 200 310
          Q 195 270 200 230
          Q 195 180 180 140
          Z
        "
        fill="url(#land)"
        stroke="#FF006E"
        strokeWidth="1.5"
        opacity="0.95"
        filter="url(#pinkGlow)"
      />

      {/* Keys archipelago */}
      <g filter="url(#pinkGlow)" fill="url(#land)" stroke="#FF006E" strokeWidth="1.2">
        <ellipse cx="480" cy="430" rx="20" ry="6" />
        <ellipse cx="510" cy="438" rx="16" ry="5" />
        <ellipse cx="540" cy="442" rx="14" ry="5" />
        <ellipse cx="566" cy="448" rx="12" ry="4" />
        <ellipse cx="590" cy="452" rx="10" ry="4" />
      </g>

      {/* Coastline secondary glow */}
      <path
        d="M 180 80 Q 230 60 290 75 Q 350 90 380 130 Q 420 165 445 200
           Q 480 240 470 285 Q 460 330 430 370 Q 400 410 360 425
           Q 320 440 290 425 Q 260 410 235 380 Q 210 350 200 310
           Q 195 270 200 230 Q 195 180 180 140 Z"
        fill="none"
        stroke="#00F5FF"
        strokeWidth="0.6"
        opacity="0.4"
      />

      {/* Rivers */}
      <path
        d="M 230 130 Q 280 200 310 280 Q 330 350 320 410"
        fill="none"
        stroke="#00F5FF"
        strokeWidth="1.2"
        opacity="0.55"
        strokeDasharray="2 3"
        filter="url(#cyanGlow)"
      />
      <path
        d="M 380 160 Q 400 220 410 280"
        fill="none"
        stroke="#00F5FF"
        strokeWidth="1"
        opacity="0.45"
        strokeDasharray="2 3"
      />

      {/* Compass */}
      <g transform="translate(710,80)" opacity="0.7">
        <circle r="22" fill="none" stroke="#00F5FF" strokeWidth="0.8" />
        <polygon points="0,-18 4,0 0,18 -4,0" fill="#FF006E" />
        <text y="-26" textAnchor="middle" fill="#fff" fontSize="9" fontFamily="monospace">
          N
        </text>
      </g>

      {/* Title plate */}
      <g transform="translate(50,55)" opacity="0.85">
        <text
          fill="#FF006E"
          fontFamily="'Bebas Neue', Impact, sans-serif"
          fontSize="22"
          letterSpacing="4"
          filter="url(#pinkGlow)"
        >
          STATE OF LEONIDA
        </text>
        <text
          y="18"
          fill="#fff"
          opacity="0.5"
          fontFamily="monospace"
          fontSize="9"
          letterSpacing="2"
        >
          GTA VI · COMMUNITY REFERENCE
        </text>
      </g>

      {/* Region pins */}
      {regions.map((r) => {
        const c = colorFor(r.accent);
        return (
          <g key={r.id} transform={`translate(${r.x},${r.y})`}>
            <circle r="10" fill={c} opacity="0.15" />
            <circle r="5" fill={c} filter="url(#pinkGlow)" />
            <circle r="2" fill="#fff" />
            <text
              x="12"
              y="-6"
              fill={c}
              fontFamily="'Bebas Neue', Impact, sans-serif"
              fontSize="13"
              letterSpacing="2"
              filter={r.accent === 'pink' ? 'url(#pinkGlow)' : 'url(#cyanGlow)'}
            >
              {r.name.toUpperCase()}
            </text>
            <text
              x="12"
              y="6"
              fill="rgba(255,255,255,0.5)"
              fontFamily="monospace"
              fontSize="8"
              letterSpacing="2"
            >
              REGION · {r.short}
            </text>
          </g>
        );
      })}

      {/* Scanline overlay */}
      <rect
        width="800"
        height="500"
        fill="url(#grid)"
        opacity="0.5"
        style={{ mixBlendMode: 'overlay' }}
      />
    </svg>
  );
}

export function MapWithFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="relative rounded-2xl overflow-hidden glass glass-cyan"
    >
      <div className="relative aspect-[16/10] w-full bg-[#050308]">
        <LeonidaMap />
      </div>
    </motion.div>
  );
}
