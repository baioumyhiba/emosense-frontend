// src/components/AuthCharacter.jsx
// Animated blob character for auth pages — waves hand, shows emotion

export default function AuthCharacter({ mood = "happy", size = 200 }) {
  const chars = {
    happy:  <HappyWaving size={size} />,
    sad:    <SadWaving size={size} />,
    bye:    <ByeWaving size={size} />,
    signup: <SignupChar size={size} />,
    forgotpassword: <ForgotPasswordChar size={size} />
  };
  return (
    <div className="auth-character-wrap" style={{ width: size, height: size + 60 }}>
      {chars[mood] || chars.happy}
    </div>
  );
}

function HappyWaving({ size }) {
  return (
    <svg viewBox="0 0 160 200" width={size} height={size + 60}
         xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="80" cy="192" rx="40" ry="8" fill="#e8789a" opacity=".15"/>
      {/* Body */}
      <ellipse cx="80" cy="155" rx="45" ry="38" fill="#b4ddd4"/>
      {/* Head */}
      <circle cx="80" cy="90" r="52" fill="#b4ddd4"/>
      {/* Blush */}
      <ellipse cx="56" cy="102" rx="12" ry="7" fill="#7fbfaa" opacity=".5"/>
      <ellipse cx="104" cy="102" rx="12" ry="7" fill="#7fbfaa" opacity=".5"/>
      {/* Sunglasses left */}
      <rect x="52" y="78" width="20" height="13" rx="6.5" fill="#1a3a30" opacity=".88"/>
      <rect x="78" y="78" width="20" height="13" rx="6.5" fill="#1a3a30" opacity=".88"/>
      <line x1="72" y1="84" x2="78" y2="84" stroke="#1a3a30" strokeWidth="2.5"/>
      <path d="M49 82 Q51 78 52 80" stroke="#1a3a30" strokeWidth="2"
            fill="none" strokeLinecap="round"/>
      <path d="M111 82 Q109 78 98 80" stroke="#1a3a30" strokeWidth="2"
            fill="none" strokeLinecap="round"/>
      {/* Big smile */}
      <path d="M62 106 Q80 124 98 106" stroke="#2a6a5a" strokeWidth="3"
            fill="none" strokeLinecap="round"/>
      {/* Waving arm — animated */}
      <g className="waving-arm">
        <path d="M122 138 Q148 118 152 100 Q154 88 148 84"
              stroke="#b4ddd4" strokeWidth="14" fill="none"
              strokeLinecap="round"/>
        {/* Hand */}
        <circle cx="147" cy="82" r="10" fill="#b4ddd4"/>
        {/* Fingers */}
        <ellipse cx="147" cy="70" rx="4" ry="7" fill="#b4ddd4"
                 transform="rotate(-10 147 70)"/>
        <ellipse cx="156" cy="73" rx="4" ry="7" fill="#b4ddd4"
                 transform="rotate(15 156 73)"/>
        <ellipse cx="138" cy="73" rx="4" ry="7" fill="#b4ddd4"
                 transform="rotate(-25 138 73)"/>
      </g>
      {/* Other arm */}
      <path d="M38 138 Q18 155 14 162" stroke="#b4ddd4" strokeWidth="13"
            fill="none" strokeLinecap="round"/>
      {/* Salam text bubble */}
      <rect x="96" y="18" width="58" height="28" rx="14" fill="#e8789a"/>
      <path d="M102 44 L96 54 L114 44Z" fill="#e8789a"/>
      <text x="125" y="37" textAnchor="middle" fill="white"
            fontSize="13" fontWeight="bold" fontFamily="sans-serif">!سلام</text>
      {/* Star sparkle */}
      <path d="M32 42 L33.5 46.5 L38 46.5 L34.5 49.5 L36 54 L32 51 L28 54
               L29.5 49.5 L26 46.5 L30.5 46.5Z" fill="#f8e4a0" opacity=".9"/>
    </svg>
  );
}

function SignupChar({ size }) {
  return (
    <svg viewBox="0 0 160 200" width={size} height={size + 60}
         xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="80" cy="192" rx="40" ry="8" fill="#d8b4e2" opacity=".15"/>
      <ellipse cx="80" cy="155" rx="45" ry="38" fill="#d0b8e0"/>
      <circle cx="80" cy="90" r="52" fill="#d0b8e0"/>
      <ellipse cx="56" cy="102" rx="12" ry="7" fill="#b89acd" opacity=".5"/>
      <ellipse cx="104" cy="102" rx="12" ry="7" fill="#b89acd" opacity=".5"/>
      {/* Excited eyes */}
      <path d="M58 82 Q66 74 74 82" stroke="#3a1a5a" strokeWidth="2.5"
            fill="none" strokeLinecap="round"/>
      <path d="M86 82 Q94 74 102 82" stroke="#3a1a5a" strokeWidth="2.5"
            fill="none" strokeLinecap="round"/>
      {/* Big open smile */}
      <path d="M60 106 Q80 126 100 106" stroke="#3a1a5a" strokeWidth="3"
            fill="none" strokeLinecap="round"/>
      <ellipse cx="80" cy="112" rx="14" ry="8" fill="#3a1a5a" opacity=".15"/>
      {/* Both arms up — excited */}
      <g className="waving-arm">
        <path d="M122 138 Q148 115 150 95" stroke="#d0b8e0" strokeWidth="14"
              fill="none" strokeLinecap="round"/>
        <circle cx="150" cy="88" r="10" fill="#d0b8e0"/>
        <ellipse cx="150" cy="76" rx="4" ry="7" fill="#d0b8e0"
                 transform="rotate(10 150 76)"/>
        <ellipse cx="159" cy="80" rx="4" ry="7" fill="#d0b8e0"
                 transform="rotate(30 159 80)"/>
      </g>
      <path d="M38 138 Q12 115 10 95" stroke="#d0b8e0" strokeWidth="14"
            fill="none" strokeLinecap="round"/>
      {/* Speech bubble */}
      <rect x="4" y="18" width="68" height="28" rx="14" fill="#e8789a"/>
      <path d="M58 44 L64 54 L46 44Z" fill="#e8789a"/>
      <text x="38" y="37" textAnchor="middle" fill="white"
            fontSize="11" fontWeight="bold" fontFamily="sans-serif">! مرحبا بيييك</text>
      {/* Stars */}
      <path d="M130 30 L131 33.5 L134.5 33.5 L132 36 L133 39.5 L130 37.5
               L127 39.5 L128 36 L125.5 33.5 L129 33.5Z" fill="#f8e4a0"/>
      <path d="M20 60 L21 63 L24 63 L21.5 65 L22.5 68 L20 66.5
               L17.5 68 L18.5 65 L16 63 L19 63Z" fill="#f8e4a0" opacity=".7"/>
    </svg>
  );
}

function SadWaving({ size }) {
  return (
    <svg viewBox="0 0 160 200" width={size} height={size + 60}
         xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="80" cy="192" rx="40" ry="8" fill="#b4cce8" opacity=".15"/>
      <ellipse cx="80" cy="155" rx="45" ry="38" fill="#b4cce8"/>
      <circle cx="80" cy="90" r="52" fill="#b4cce8"/>
      <ellipse cx="56" cy="104" rx="12" ry="7" fill="#8aaad0" opacity=".45"/>
      <ellipse cx="104" cy="104" rx="12" ry="7" fill="#8aaad0" opacity=".45"/>
      {/* Sad eyes */}
      <ellipse cx="66" cy="86" rx="7" ry="8" fill="#2a4a7a"/>
      <ellipse cx="94" cy="86" rx="7" ry="8" fill="#2a4a7a"/>
      <ellipse cx="64" cy="84" rx="3" ry="3" fill="white"/>
      <ellipse cx="92" cy="84" rx="3" ry="3" fill="white"/>
      {/* Sad brows */}
      <path d="M56 74 Q66 69 74 75" stroke="#2a4a7a" strokeWidth="2.5"
            fill="none" strokeLinecap="round"/>
      <path d="M86 75 Q94 69 104 74" stroke="#2a4a7a" strokeWidth="2.5"
            fill="none" strokeLinecap="round"/>
      {/* Frown */}
      <path d="M62 110 Q80 102 98 110" stroke="#2a4a7a" strokeWidth="3"
            fill="none" strokeLinecap="round"/>
      {/* Tears */}
      <ellipse cx="66" cy="97" rx="3" ry="4.5" fill="#7aaad4" opacity=".8"/>
      <path d="M66 101 Q64 107 66 110" stroke="#7aaad4" strokeWidth="2"
            fill="none" strokeLinecap="round"/>
      {/* Small wave */}
      <g className="waving-arm-slow">
        <path d="M38 140 Q18 155 14 165" stroke="#b4cce8" strokeWidth="13"
              fill="none" strokeLinecap="round"/>
        <circle cx="12" cy="168" r="9" fill="#b4cce8"/>
      </g>
      <path d="M122 140 Q135 148 138 155" stroke="#b4cce8" strokeWidth="13"
            fill="none" strokeLinecap="round"/>
      {/* Sad bubble */}
      <rect x="88" y="20" width="66" height="28" rx="14" fill="#7aaad4"/>
      <path d="M94 46 L88 56 L106 46Z" fill="#7aaad4"/>
      <text x="121" y="39" textAnchor="middle" fill="white"
            fontSize="11" fontWeight="bold" fontFamily="sans-serif">حاول مرة أخرى</text>
    </svg>
  );
}

function ByeWaving({ size }) {
  return (
    <svg
      viewBox="0 0 160 200"
      width={size}
      height={size + 60}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="80" cy="192" rx="40" ry="8" fill="#e8789a" opacity=".15"/>

      {/* Body */}
      <ellipse cx="80" cy="155" rx="45" ry="38" fill="#f0a0bb"/>

      {/* Head */}
      <circle cx="80" cy="90" r="52" fill="#f0a0bb"/>

      {/* Blush */}
      <ellipse cx="56" cy="102" rx="12" ry="7" fill="#e8789a" opacity=".35"/>
      <ellipse cx="104" cy="102" rx="12" ry="7" fill="#e8789a" opacity=".35"/>

      {/* Eyes */}
      <ellipse cx="66" cy="86" rx="6" ry="7" fill="#7a3f5c"/>
      <ellipse cx="94" cy="86" rx="6" ry="7" fill="#7a3f5c"/>

      {/* Smile */}
      <path
        d="M62 108 Q80 122 98 108"
        stroke="#7a3f5c"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Waving hand */}
      <g className="waving-arm">
        <path
          d="M122 138 Q148 118 152 100"
          stroke="#f0a0bb"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="150" cy="96" r="10" fill="#f0a0bb"/>
      </g>

      {/* Left arm */}
      <path
        d="M38 138 Q18 155 14 162"
        stroke="#f0a0bb"
        strokeWidth="13"
        fill="none"
        strokeLinecap="round"
      />

      {/* Bye bubble */}
      <rect x="92" y="18" width="60" height="28" rx="14" fill="#e8789a"/>
      <path d="M98 44 L92 54 L110 44Z" fill="#e8789a"/>

      <text
        x="122"
        y="37"
        textAnchor="middle"
        fill="white"
        fontSize="13"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        بسلامة
      </text>

      {/* Sparkle */}
      <path
        d="M28 42 L30 47 L35 47 L31 50 L33 55 L28 52 L23 55
           L25 50 L21 47 L26 47Z"
        fill="#f8e4a0"
        opacity=".9"
      />
    </svg>
  );
}

function ForgotPasswordChar({ size }) {
  return (
    <svg viewBox="0 0 160 200" width={size} height={size + 60}
         xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="80" cy="155" rx="45" ry="38" fill="#F8E4A0"/>
<circle cx="80" cy="90" r="52" fill="#F8E4A0"/>

<ellipse cx="56" cy="102" rx="12" ry="7" fill="#F8E4A0" opacity=".5"/>
<ellipse cx="104" cy="102" rx="12" ry="7" fill="#F8E4A0" opacity=".5"/>
      {/* Excited eyes */}
      <path d="M58 82 Q66 74 74 82" stroke="#5a3a1a" strokeWidth="2.5"
            fill="none" strokeLinecap="round"/>
      <path d="M86 82 Q94 74 102 82" stroke="#5a3a1a" strokeWidth="2.5"
            fill="none" strokeLinecap="round"/>
      {/* Big open smile */}
      <path d="M60 106 Q80 126 100 106" stroke="#5a3a1a" strokeWidth="3"
            fill="none" strokeLinecap="round"/>
      <ellipse cx="80" cy="112" rx="14" ry="8" fill="#5a3a1a" opacity=".15"/>
      {/* Both arms up — excited */}
      
      {/* Right arm */}
<path
  d="M122 138 L150 95"
  stroke="#F8E4A0"
  strokeWidth="14"
  fill="none"
  strokeLinecap="round"
/>

{/* Left arm */}
<path
  d="M38 138 L10 95"
  stroke="#F8E4A0"
  strokeWidth="14"
  fill="none"
  strokeLinecap="round"
/>
      {/* Speech bubble */}
      <rect x="4" y="18" width="68" height="28" rx="14" fill="#e8789a"/>
      <path d="M58 44 L64 54 L46 44Z" fill="#e8789a"/>
      <text x="38" y="37" textAnchor="middle" fill="white"
            fontSize="11" fontWeight="bold" fontFamily="sans-serif">غادي نعونك</text>
      {/* Stars */}
      <path d="M130 30 L131 33.5 L134.5 33.5 L132 36 L133 39.5 L130 37.5
               L127 39.5 L128 36 L125.5 33.5 L129 33.5Z" fill="#f8e4a0"/>
      <path d="M20 60 L21 63 L24 63 L21.5 65 L22.5 68 L20 66.5
               L17.5 68 L18.5 65 L16 63 L19 63Z" fill="#f8e4a0" opacity=".7"/>
    </svg>
  );
}