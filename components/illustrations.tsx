// Custom line illustrations. Stroke-based — pick up brand color via stroke prop.

type IllustProps = {
  size?: number;
  stroke?: string;
  fill?: string;
  accent?: string;
};

export const Illust = {
  estateHouse: ({ size = 280, stroke = 'currentColor', fill = 'rgba(0,0,0,0.04)', accent }: IllustProps) => {
    const a = accent || stroke;
    return (
      <svg viewBox="0 0 280 200" width={size} height={(size * 200) / 280} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 175 H270" stroke={stroke} strokeWidth="1" opacity="0.4" />
        <path d="M40 175 V130" stroke={stroke} strokeWidth="1.2" />
        <circle cx="40" cy="120" r="22" stroke={stroke} strokeWidth="1.2" fill={fill} />
        <circle cx="32" cy="115" r="8" stroke={stroke} strokeWidth="1" />
        <circle cx="48" cy="118" r="7" stroke={stroke} strokeWidth="1" />
        <path d="M90 175 V100 L150 60 L210 100 V175 Z" stroke={stroke} strokeWidth="1.5" fill={fill} />
        <path d="M150 60 L150 50 M148 50 H156" stroke={stroke} strokeWidth="1.2" />
        <path d="M138 175 V135 a8 8 0 0 1 16 0 V175" stroke={stroke} strokeWidth="1.2" />
        <circle cx="148" cy="155" r="1" fill={stroke} />
        <rect x="100" y="115" width="22" height="22" stroke={stroke} strokeWidth="1.2" />
        <path d="M111 115 V137 M100 126 H122" stroke={stroke} strokeWidth="1" />
        <rect x="178" y="115" width="22" height="22" stroke={stroke} strokeWidth="1.2" />
        <path d="M189 115 V137 M178 126 H200" stroke={stroke} strokeWidth="1" />
        <path d="M225 60 a25 25 0 0 1 30 30" stroke={a} strokeWidth="1.5" />
        <path d="M240 45 v8 M260 60 h-8 M250 50 l-5 5 M225 75 l5-5" stroke={a} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  },

  willDocument: ({ size = 240, stroke = 'currentColor', fill = 'rgba(0,0,0,0.03)', accent }: IllustProps) => {
    const a = accent || stroke;
    return (
      <svg viewBox="0 0 240 200" width={size} height={(size * 200) / 240} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M70 30 h100 a4 4 0 0 1 4 4 V160 a4 4 0 0 1-4 4 H70 a4 4 0 0 1-4-4 V34 a4 4 0 0 1 4-4 z"
          stroke={stroke} strokeWidth="1.2" fill={fill} transform="rotate(-4 120 100)" />
        <path d="M60 40 h100 a4 4 0 0 1 4 4 V170 a4 4 0 0 1-4 4 H60 a4 4 0 0 1-4-4 V44 a4 4 0 0 1 4-4 z"
          stroke={stroke} strokeWidth="1.5" fill="white" />
        <path d="M70 60 h60 M70 72 h80 M70 84 h70 M70 96 h75 M70 108 h60 M70 120 h70 M70 132 h45" stroke={stroke} strokeWidth="1" opacity="0.5" />
        <circle cx="135" cy="155" r="14" stroke={a} strokeWidth="1.5" fill="none" />
        <circle cx="135" cy="155" r="9" stroke={a} strokeWidth="1" fill="none" />
        <path d="M132 152 l3 3 5-5" stroke={a} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M122 168 l-4 12 9-4 4 8 4-13" stroke={a} strokeWidth="1.2" fill="none" strokeLinejoin="round" />
      </svg>
    );
  },

  fundsForward: ({ size = 280, stroke = 'currentColor', fill = 'rgba(0,0,0,0.03)', accent }: IllustProps) => {
    const a = accent || stroke;
    return (
      <svg viewBox="0 0 280 200" width={size} height={(size * 200) / 280} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="62" cy="100" r="44" stroke={stroke} strokeWidth="1.5" fill={fill} />
        <circle cx="62" cy="100" r="2.5" fill={stroke} />
        <path d="M62 100 L62 70 M62 100 L86 100" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
          const ang = ((i * 30 - 90) * Math.PI) / 180;
          const r1 = 38, r2 = 42;
          return (
            <line
              key={i}
              x1={62 + Math.cos(ang) * r1}
              y1={100 + Math.sin(ang) * r1}
              x2={62 + Math.cos(ang) * r2}
              y2={100 + Math.sin(ang) * r2}
              stroke={stroke}
              strokeWidth="1"
              opacity="0.6"
            />
          );
        })}
        <path d="M118 100 H198" stroke={a} strokeWidth="2" strokeLinecap="round" />
        <path d="M188 92 L198 100 L188 108" stroke={a} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="158" y="92" textAnchor="middle" fontSize="11" fill={a} fontFamily="serif" fontStyle="italic" opacity="0.8">advance</text>
        <circle cx="232" cy="100" r="32" stroke={a} strokeWidth="1.5" fill="white" />
        <circle cx="232" cy="100" r="26" stroke={a} strokeWidth="1" opacity="0.5" />
        <text x="232" y="108" textAnchor="middle" fontSize="22" fill={a} fontFamily="serif" fontWeight="500">$</text>
      </svg>
    );
  },

  fairness: ({ size = 220, stroke = 'currentColor', accent }: IllustProps) => {
    const a = accent || stroke;
    return (
      <svg viewBox="0 0 220 200" width={size} height={(size * 200) / 220} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M110 30 V170 M50 170 H170" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M110 50 H50 M110 50 H170" stroke={stroke} strokeWidth="1.5" />
        <path d="M50 50 L36 90 L64 90 Z" stroke={stroke} strokeWidth="1.5" fill="white" />
        <path d="M170 50 L156 90 L184 90 Z" stroke={stroke} strokeWidth="1.5" fill="white" />
        <circle cx="110" cy="30" r="6" stroke={a} strokeWidth="1.5" fill="white" />
        <circle cx="110" cy="170" r="4" fill={stroke} />
      </svg>
    );
  },
};
