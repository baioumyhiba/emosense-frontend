// src/components/EmotionCharacter.jsx
// Custom SVG blob characters — Happy, Sad, Angry, Neutral

export default function EmotionCharacter({ emotion }) {
  const chars = {
    Happy: <HappyChar />,
    Sad:   <SadChar />,
    Angry: <AngryChar />,
    Neutral: <NeutralChar />,
  };
  return (
    <div className="emotion-char-wrap">
      {chars[emotion] || chars.Neutral}
    </div>
  );
}

function HappyChar() {
  return (
    <svg viewBox="0 0 100 110" width="100" height="110" xmlns="http://www.w3.org/2000/svg">
      {/* Body blob */}
      <ellipse cx="50" cy="78" rx="36" ry="28" fill="#b4ddd4"/>
      {/* Head */}
      <circle cx="50" cy="46" r="32" fill="#b4ddd4"/>
      {/* Blush */}
      <ellipse cx="34" cy="54" rx="8" ry="5" fill="#7fbfaa" opacity="0.5"/>
      <ellipse cx="66" cy="54" rx="8" ry="5" fill="#7fbfaa" opacity="0.5"/>
      {/* Eyes — happy arches */}
      <path d="M38 43 Q42 38 46 43" stroke="#2a6a5a" strokeWidth="2.5"
            fill="none" strokeLinecap="round"/>
      <path d="M54 43 Q58 38 62 43" stroke="#2a6a5a" strokeWidth="2.5"
            fill="none" strokeLinecap="round"/>
      {/* Big smile */}
      <path d="M36 54 Q50 68 64 54" stroke="#2a6a5a" strokeWidth="2.5"
            fill="none" strokeLinecap="round"/>
      {/* Sunglasses left */}
      <rect x="33" y="37" width="14" height="10" rx="5" fill="#1a3a30" opacity="0.85"/>
      <rect x="53" y="37" width="14" height="10" rx="5" fill="#1a3a30" opacity="0.85"/>
      <line x1="47" y1="42" x2="53" y2="42" stroke="#1a3a30" strokeWidth="2"/>
      {/* little star sparkle */}
      <path d="M78 28 L79.5 32 L83.5 32 L80.5 34.5 L81.5 38.5 L78 36 L74.5 38.5
               L75.5 34.5 L72.5 32 L76.5 32Z" fill="#f8e4a0"/>
    </svg>
  );
}

function SadChar() {
  return (
    <svg viewBox="0 0 100 110" width="100" height="110" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="78" rx="36" ry="28" fill="#b4cce8"/>
      <circle cx="50" cy="46" r="32" fill="#b4cce8"/>
      {/* Blush */}
      <ellipse cx="34" cy="56" rx="8" ry="5" fill="#8aaad0" opacity="0.45"/>
      <ellipse cx="66" cy="56" rx="8" ry="5" fill="#8aaad0" opacity="0.45"/>
      {/* Sad eyes — drooping */}
      <ellipse cx="41" cy="43" rx="5" ry="5.5" fill="#2a4a7a"/>
      <ellipse cx="59" cy="43" rx="5" ry="5.5" fill="#2a4a7a"/>
      <ellipse cx="40" cy="42" rx="2" ry="2" fill="white"/>
      <ellipse cx="58" cy="42" rx="2" ry="2" fill="white"/>
      {/* Sad brows */}
      <path d="M35 36 Q41 33 45 37" stroke="#2a4a7a" strokeWidth="2"
            fill="none" strokeLinecap="round"/>
      <path d="M55 37 Q59 33 65 36" stroke="#2a4a7a" strokeWidth="2"
            fill="none" strokeLinecap="round"/>
      {/* Frown */}
      <path d="M38 60 Q50 52 62 60" stroke="#2a4a7a" strokeWidth="2.5"
            fill="none" strokeLinecap="round"/>
      {/* Tear */}
      <ellipse cx="41" cy="52" rx="2" ry="3.5" fill="#7aaad4" opacity="0.8"/>
      <path d="M41 55 Q39 59 41 61" stroke="#7aaad4" strokeWidth="1.5"
            fill="none" strokeLinecap="round"/>
      {/* Little bird on head */}
      <ellipse cx="70" cy="18" rx="8" ry="6" fill="#f8e4a0"/>
      <circle  cx="74" cy="14" r="4"  fill="#f8e4a0"/>
      <path d="M77 13 L80 12 L78 15Z" fill="#e8c060"/>
      <circle cx="75" cy="13" r="1"   fill="#2a4a7a"/>
    </svg>
  );
}

function AngryChar() {
  return (
    <svg viewBox="0 0 100 110" width="100" height="110" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="78" rx="36" ry="28" fill="#ffb3b3"/>
      <circle cx="50" cy="46" r="32" fill="#ffb3b3"/>
      {/* Blush — deeper red */}
      <ellipse cx="34" cy="56" rx="9" ry="5" fill="#ff8080" opacity="0.45"/>
      <ellipse cx="66" cy="56" rx="9" ry="5" fill="#ff8080" opacity="0.45"/>
      {/* Angry brows — slanted */}
      <path d="M33 35 L45 40" stroke="#cc3333" strokeWidth="3"
            strokeLinecap="round"/>
      <path d="M55 40 L67 35" stroke="#cc3333" strokeWidth="3"
            strokeLinecap="round"/>
      {/* Eyes — squinting */}
      <ellipse cx="41" cy="44" rx="6" ry="4" fill="#cc3333"/>
      <ellipse cx="59" cy="44" rx="6" ry="4" fill="#cc3333"/>
      <ellipse cx="40" cy="43" rx="2.5" ry="1.5" fill="white"/>
      <ellipse cx="58" cy="43" rx="2.5" ry="1.5" fill="white"/>
      {/* Gritted teeth */}
      <path d="M36 58 Q50 66 64 58" stroke="#cc3333" strokeWidth="2" fill="none"/>
      <rect x="38" y="58" width="6" height="4" rx="1" fill="white"/>
      <rect x="45" y="59" width="6" height="4" rx="1" fill="white"/>
      <rect x="52" y="58" width="6" height="4" rx="1" fill="white"/>
      {/* Anger marks */}
      <path d="M76 24 L79 20 L79 24 L82 20" stroke="#ff6060" strokeWidth="2"
            fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 24 L19 20 L19 24 L16 20" stroke="#ff6060" strokeWidth="2"
            fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function NeutralChar() {
  return (
    <svg viewBox="0 0 100 110" width="100" height="110" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="78" rx="36" ry="28" fill="#d0b8e0"/>
      <circle cx="50" cy="46" r="32" fill="#d0b8e0"/>
      {/* Blush */}
      <ellipse cx="34" cy="56" rx="8" ry="5" fill="#b89acd" opacity="0.45"/>
      <ellipse cx="66" cy="56" rx="8" ry="5" fill="#b89acd" opacity="0.45"/>
      {/* Sunglasses */}
      <rect x="32" y="37" width="15" height="11" rx="5.5" fill="#3a1a5a" opacity="0.88"/>
      <rect x="53" y="37" width="15" height="11" rx="5.5" fill="#3a1a5a" opacity="0.88"/>
      <line x1="47" y1="42" x2="53" y2="42" stroke="#3a1a5a" strokeWidth="2.5"/>
      <path d="M29 40 Q30 37 32 38" stroke="#3a1a5a" strokeWidth="2"
            fill="none" strokeLinecap="round"/>
      <path d="M71 40 Q70 37 68 38" stroke="#3a1a5a" strokeWidth="2"
            fill="none" strokeLinecap="round"/>
      {/* Flat mouth */}
      <path d="M40 60 L60 60" stroke="#7a4a9a" strokeWidth="2.5"
            strokeLinecap="round"/>
      {/* Small duck/companion */}
      <ellipse cx="76" cy="22" rx="9"  ry="7"  fill="#f8e4a0"/>
      <circle  cx="80" cy="16" r="5"   fill="#f8e4a0"/>
      <path d="M84 15 L87 14 L85 17Z" fill="#e8b030"/>
      <circle cx="81" cy="15" r="1.2" fill="#2a2a2a"/>
    </svg>
  );
}