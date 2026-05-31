// src/components/AudioHistory.jsx
import { useTranslation } from "react-i18next";

const BADGE = {
  Happy:   { style: { background:"#d4f0e8", color:"#2a6a5a" } },
  Sad:     { style: { background:"#d4e8f8", color:"#2a4a7a" } },
  Angry:   { style: { background:"#ffd4d4", color:"#cc3333" } },
  Neutral: { style: { background:"#e8d4f0", color:"#7a4a9a" } },
};

// Tiny inline SVG heads for history
function MiniChar({ emotion }) {
  const faces = {
    Happy: (
      <svg viewBox="0 0 40 40" width="36" height="36">
        <circle cx="20" cy="20" r="18" fill="#b4ddd4"/>
        <rect x="11" y="15" width="7" height="5" rx="2.5" fill="#1a3a30" opacity=".85"/>
        <rect x="22" y="15" width="7" height="5" rx="2.5" fill="#1a3a30" opacity=".85"/>
        <line x1="18" y1="18" x2="22" y2="18" stroke="#1a3a30" strokeWidth="1.2"/>
        <path d="M13 27 Q20 33 27 27" stroke="#2a6a5a" strokeWidth="2"
              fill="none" strokeLinecap="round"/>
      </svg>
    ),
    Sad: (
      <svg viewBox="0 0 40 40" width="36" height="36">
        <circle cx="20" cy="20" r="18" fill="#b4cce8"/>
        <ellipse cx="15" cy="18" rx="3" ry="3.5" fill="#2a4a7a"/>
        <ellipse cx="25" cy="18" rx="3" ry="3.5" fill="#2a4a7a"/>
        <path d="M13 22 Q16 19 19 21" stroke="#2a4a7a" strokeWidth="1.5"
              fill="none" strokeLinecap="round"/>
        <path d="M21 21 Q24 19 27 22" stroke="#2a4a7a" strokeWidth="1.5"
              fill="none" strokeLinecap="round"/>
        <path d="M14 29 Q20 24 26 29" stroke="#2a4a7a" strokeWidth="2"
              fill="none" strokeLinecap="round"/>
        <ellipse cx="15" cy="22" rx="1.5" ry="2" fill="#7aaad4" opacity=".7"/>
      </svg>
    ),
    Angry: (
      <svg viewBox="0 0 40 40" width="36" height="36">
        <circle cx="20" cy="20" r="18" fill="#ffb3b3"/>
        <path d="M11 14 L17 18" stroke="#cc3333" strokeWidth="2" strokeLinecap="round"/>
        <path d="M23 18 L29 14" stroke="#cc3333" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="15" cy="20" rx="3.5" ry="2.5" fill="#cc3333"/>
        <ellipse cx="25" cy="20" rx="3.5" ry="2.5" fill="#cc3333"/>
        <path d="M13 29 Q20 34 27 29" stroke="#cc3333" strokeWidth="2" fill="none"/>
        <rect x="14" y="28" width="4" height="3" rx=".5" fill="white"/>
        <rect x="19" y="28.5" width="4" height="3" rx=".5" fill="white"/>
        <rect x="24" y="28" width="4" height="3" rx=".5" fill="white"/>
      </svg>
    ),
    Neutral: (
      <svg viewBox="0 0 40 40" width="36" height="36">
        <circle cx="20" cy="20" r="18" fill="#d0b8e0"/>
        <rect x="11" y="15" width="8" height="6" rx="3" fill="#3a1a5a" opacity=".88"/>
        <rect x="21" y="15" width="8" height="6" rx="3" fill="#3a1a5a" opacity=".88"/>
        <line x1="19" y1="18" x2="21" y2="18" stroke="#3a1a5a" strokeWidth="1.5"/>
        <path d="M14 28 L26 28" stroke="#7a4a9a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  };
  return faces[emotion] || faces.Neutral;
}

export default function AudioHistory({ history }) {
  const { t } = useTranslation();

  return (
    <div className="history-card">
      <div className="history-header">
        <h3>🎧 {t("historyTitle")}</h3>
        {history.length > 0 && (
          <span className="history-count">
            {history.length} audio{history.length > 1 ? "s" : ""}
          </span>
        )}
      </div>

      <div className="history-list">
        {history.length === 0 ? (
          <div className="history-empty">
            <span className="empty-icon">🎵</span>
            <p>{t("historyEmpty")}</p>
          </div>
        ) : (
          history.map(item => {
            const badge = BADGE[item.emotion] || BADGE.Neutral;
            return (
              <div key={item.id} className="history-item">
                <div className="history-item-top">
                  <div className="history-char">
                    <MiniChar emotion={item.emotion} />
                  </div>
                  <div className="history-info">
                    <div className="history-filename" title={item.fileName}>
                      {item.fileName}
                    </div>
                    <div className="history-meta">
                      <span className="history-emotion-badge" style={badge.style}>
                        {t(`emotions.${item.emotion}`)}
                      </span>
                      <span className="history-agreement">{item.agreement}</span>
                      <span className="history-time">{item.timestamp}</span>
                    </div>
                  </div>
                </div>
                <div className="history-audio">
                  <audio controls src={item.audioUrl} preload="metadata" />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}