// src/components/LoadingAnimation.jsx
import { useTranslation } from "react-i18next";

export default function LoadingAnimation() {
  const { t } = useTranslation();
  return (
    <div className="loading-anim-wrap">
      {/* Listening blob character */}
      <div className="listening-character">
        <svg viewBox="0 0 120 120" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <ellipse cx="60" cy="72" rx="42" ry="38" fill="#f0a0bb" className="char-body"/>
          {/* Head */}
          <circle cx="60" cy="42" r="30" fill="#f0a0bb" className="char-head"/>
          {/* Eyes — closed/listening */}
          <ellipse cx="50" cy="40" rx="5" ry="3" fill="#e8789a"/>
          <ellipse cx="70" cy="40" rx="5" ry="3" fill="#e8789a"/>
          {/* Smile */}
          <path d="M50 52 Q60 60 70 52" stroke="#e8789a" strokeWidth="2.5"
                fill="none" strokeLinecap="round"/>
          {/* Ears / headphone hints */}
          <circle cx="30" cy="42" r="7" fill="#e8789a" opacity="0.6"/>
          <circle cx="90" cy="42" r="7" fill="#e8789a" opacity="0.6"/>
          {/* Sound waves left */}
          <path d="M18 38 Q12 42 18 46" stroke="#d8b4e2" strokeWidth="2.5"
                fill="none" strokeLinecap="round" className="wave wave-l1"/>
          <path d="M12 33 Q3 42 12 51"  stroke="#d8b4e2" strokeWidth="2"
                fill="none" strokeLinecap="round" className="wave wave-l2"/>
          {/* Sound waves right */}
          <path d="M102 38 Q108 42 102 46" stroke="#d8b4e2" strokeWidth="2.5"
                fill="none" strokeLinecap="round" className="wave wave-r1"/>
          <path d="M108 33 Q117 42 108 51" stroke="#d8b4e2" strokeWidth="2"
                fill="none" strokeLinecap="round" className="wave wave-r2"/>
          {/* Cheek blush */}
          <ellipse cx="44" cy="52" rx="7" ry="4" fill="#ffb3c6" opacity="0.5"/>
          <ellipse cx="76" cy="52" rx="7" ry="4" fill="#ffb3c6" opacity="0.5"/>
        </svg>
      </div>

      {/* Audio bars */}
      <div className="audio-bars">
        {[1,2,3,4,5,6,7].map(i => (
          <div key={i} className="bar" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>

      <p className="loading-label">{t("analyzing")}</p>
      <p className="loading-sub">{t("analyzingSub")}</p>
    </div>
  );
}