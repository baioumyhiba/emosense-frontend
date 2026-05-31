// src/pages/Dashboard.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import UploadZone from "../components/UploadZone";
import EmotionResult from "../components/EmotionResult";
import FloatingBlobs from "../components/FloatingBlobs";

export default function Dashboard({ onHistoryUpdate }) {
  const { t }    = useTranslation();
  const { user } = useAuth();
  const [result,    setResult]    = useState(null);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const handleResult = (data, audioUrl, fileName) => {
    setResult(data);
    if (onHistoryUpdate) onHistoryUpdate({
      id: Date.now(), emotion: data.emotion, fileName,
      audioUrl, agreement: data.agreement,
      confidence: data.confidence, votes: data.votes,
      timestamp: new Date().toLocaleTimeString("fr-FR",
        { hour:"2-digit", minute:"2-digit" }),
    });
  };

  return (
    <div className="app-layout">
      <FloatingBlobs />
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(v => !v)} />

      <div className="main-wrapper">
        {/* ── Top bar ── */}
        <header className="topbar">
          <div className="topbar-left">
            <h2 className="topbar-title">{t("tagline")}</h2>
          </div>
        </header>

        {/* ── Centered content ── */}
        <main className="main-center">
          <div className="greeting-block">
            <h1 className="main-greeting">
              {t("greeting")}, <strong>{user?.user_name}</strong> 
            </h1>
            <p className="main-greeting-sub">{t("dashSub")}</p>
          </div>

          <div className="content-card">
            <UploadZone
              onResult={handleResult}
              loading={loading}
              setLoading={setLoading}
              setError={setError}
              setResult={setResult}
            />
            {error && (
              <div className="error-toast">
                <span>⚠️</span> {error}
              </div>
            )}
            {result && <EmotionResult result={result} />}
          </div>
        </main>
      </div>
    </div>
  );
}