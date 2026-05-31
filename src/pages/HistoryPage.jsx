// src/pages/HistoryPage.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import FloatingBlobs from "../components/FloatingBlobs";

const BADGE = {
  Happy:   { style: { background:"#d4f0e8", color:"#2a6a5a" } },
  Sad:     { style: { background:"#d4e8f8", color:"#2a4a7a" } },
  Angry:   { style: { background:"#ffd4d4", color:"#cc3333" } },
  Neutral: { style: { background:"#e8d4f0", color:"#7a4a9a" } },
};

function MiniChar({ emotion }) {
  const chars = {
    Happy: (
      <svg viewBox="0 0 40 40" width="40" height="40">
        <circle cx="20" cy="20" r="18" fill="#b4ddd4"/>
        <rect x="11" y="14" width="7" height="5" rx="2.5" fill="#1a3a30" opacity=".88"/>
        <rect x="22" y="14" width="7" height="5" rx="2.5" fill="#1a3a30" opacity=".88"/>
        <line x1="18" y1="17" x2="22" y2="17" stroke="#1a3a30" strokeWidth="1.2"/>
        <path d="M13 27 Q20 33 27 27" stroke="#2a6a5a" strokeWidth="2"
              fill="none" strokeLinecap="round"/>
        <ellipse cx="13" cy="25" rx="4" ry="2.5" fill="#7fbfaa" opacity=".4"/>
        <ellipse cx="27" cy="25" rx="4" ry="2.5" fill="#7fbfaa" opacity=".4"/>
      </svg>
    ),
    Sad: (
      <svg viewBox="0 0 40 40" width="40" height="40">
        <circle cx="20" cy="20" r="18" fill="#b4cce8"/>
        <ellipse cx="15" cy="18" rx="3" ry="3.5" fill="#2a4a7a"/>
        <ellipse cx="25" cy="18" rx="3" ry="3.5" fill="#2a4a7a"/>
        <ellipse cx="14" cy="17" rx="1.3" ry="1.3" fill="white"/>
        <ellipse cx="24" cy="17" rx="1.3" ry="1.3" fill="white"/>
        <path d="M13 14 Q15 11 18 13" stroke="#2a4a7a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M22 13 Q25 11 27 14" stroke="#2a4a7a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M14 29 Q20 23 26 29" stroke="#2a4a7a" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <ellipse cx="15" cy="23" rx="1.5" ry="2.2" fill="#7aaad4" opacity=".7"/>
      </svg>
    ),
    Angry: (
      <svg viewBox="0 0 40 40" width="40" height="40">
        <circle cx="20" cy="20" r="18" fill="#ffb3b3"/>
        <path d="M11 13 L18 17" stroke="#cc3333" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 17 L29 13" stroke="#cc3333" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="15" cy="19" rx="3.5" ry="2.5" fill="#cc3333"/>
        <ellipse cx="25" cy="19" rx="3.5" ry="2.5" fill="#cc3333"/>
        <ellipse cx="14" cy="18" rx="1.3" ry="1" fill="white"/>
        <ellipse cx="24" cy="18" rx="1.3" ry="1" fill="white"/>
        <path d="M13 29 Q20 34 27 29" stroke="#cc3333" strokeWidth="2" fill="none"/>
        <rect x="15" y="28" width="3.5" height="3" rx=".5" fill="white"/>
        <rect x="19.5" y="28.5" width="3.5" height="3" rx=".5" fill="white"/>
        <rect x="24" y="28" width="3.5" height="3" rx=".5" fill="white"/>
      </svg>
    ),
    Neutral: (
      <svg viewBox="0 0 40 40" width="40" height="40">
        <circle cx="20" cy="20" r="18" fill="#d0b8e0"/>
        <rect x="11" y="14" width="8" height="6" rx="3" fill="#3a1a5a" opacity=".88"/>
        <rect x="21" y="14" width="8" height="6" rx="3" fill="#3a1a5a" opacity=".88"/>
        <line x1="19" y1="17" x2="21" y2="17" stroke="#3a1a5a" strokeWidth="1.5"/>
        <path d="M28 14 Q30 17 28 17" stroke="#3a1a5a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M14 28 L26 28" stroke="#7a4a9a" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="13" cy="25" rx="4" ry="2.5" fill="#b89acd" opacity=".4"/>
        <ellipse cx="27" cy="25" rx="4" ry="2.5" fill="#b89acd" opacity=".4"/>
      </svg>
    ),
  };
  return chars[emotion] || chars.Neutral;
}

export default function HistoryPage({ history }) {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-layout">
      <FloatingBlobs />
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(v => !v)} />

      <div className="main-wrapper">
        <header className="topbar">
          <div className="topbar-left">
            <h2 className="topbar-title">{t("tagline")}</h2>
          </div>
        </header>

        <main className="main-center" style={{ alignItems:"flex-start", maxWidth:900, margin:"0 auto", width:"100%" }}>
          <div className="page-header">
            <h1 className="page-title">⏱ {t("navHistory")}</h1>
            <p className="page-sub">{t("historyPageSub")}</p>
          </div>

          {history.length === 0 ? (
            <div className="history-page-empty">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none"
                   style={{opacity:.3}}>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 8V12L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <p style={{fontSize:15, fontWeight:600}}>{t("historyEmpty")}</p>
            </div>
          ) : (
            <div className="history-grid" style={{width:"100%"}}>
              {history.map((item, idx) => {
                const badge = BADGE[item.emotion] || BADGE.Neutral;
                return (
                  <div key={item.id} className="history-card-big"
                       style={{animationDelay:`${idx*0.05}s`}}>
                    <div className="hcb-top">
                      <MiniChar emotion={item.emotion} />
                      <div className="hcb-info">
                        <div className="hcb-filename" title={item.fileName}>
                          {item.fileName}
                        </div>
                        <div className="hcb-meta">
                          <span className="history-emotion-badge" style={badge.style}>
                            {t(`emotions.${item.emotion}`)}
                          </span>
                          <span className="history-agreement">{item.agreement}</span>
                          <span className="history-time">{item.timestamp}</span>
                        </div>
                      </div>
                      <div className="hcb-number">#{history.length - idx}</div>
                    </div>
                    {item.confidence?.MLP && (
                      <div className="hcb-conf">
                        {Object.entries(item.confidence.MLP)
                          .sort((a,b) => b[1]-a[1]).slice(0,2)
                          .map(([emo, pct]) => (
                            <div key={emo} className="hcb-conf-row">
                              <span style={{width:60}}>{t(`emotions.${emo}`)}</span>
                              <div className="hcb-conf-bar">
                                <div style={{
                                  width:`${pct}%`,
                                  background:"linear-gradient(90deg,var(--pink-deep),var(--lavender))",
                                  height:"100%", borderRadius:100
                                }}/>
                              </div>
                              <span style={{width:36, textAlign:"right"}}>{pct}%</span>
                            </div>
                          ))}
                      </div>
                    )}
                    <div className="hcb-audio">
                      <audio controls src={item.audioUrl} preload="metadata"/>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}