// src/components/EmotionResult.jsx
import { useTranslation } from "react-i18next";
import ConfidenceBar from "./ConfidenceBar";
import EmotionCharacter from "./EmotionCharacter";

const EMOTION_CONFIG = {
  Happy:   { className: "emotion-happy",   barClass: "bar-happy",   color: "#2a6a5a" },
  Sad:     { className: "emotion-sad",     barClass: "bar-sad",     color: "#2a4a7a" },
  Angry:   { className: "emotion-angry",   barClass: "bar-angry",   color: "#cc3333" },
  Neutral: { className: "emotion-neutral", barClass: "bar-neutral", color: "#7a4a9a" },
};

export default function EmotionResult({ result }) {
  const { t }   = useTranslation();
  const { emotion, votes, confidence, agreement } = result;
  const cfg     = EMOTION_CONFIG[emotion] || EMOTION_CONFIG.Neutral;
  const confData = confidence.MLP || confidence.BiLSTM || {};

  return (
    <div className="result-card">
      <div className="result-top">
        <EmotionCharacter emotion={emotion} />
        <div className="emotion-label">
          <h2 style={{ color: cfg.color }}>{t(`emotions.${emotion}`)}</h2>
          <span className="agreement">🗳️ {t("agreement")} {agreement}</span>
        </div>
      </div>

      <div className="votes-row">
        {Object.entries(votes).map(([model, pred]) => (
          <div key={model} className={`vote-chip ${pred === emotion ? "agree" : "disagree"}`}>
            <span className="vote-model">{model}</span>
            <span>{t(`emotions.${pred}`)}</span>
          </div>
        ))}
      </div>

      <div className="confidence-section">
        <h3>{t("confidence")} (MLP)</h3>
        {Object.entries(confData)
          .sort((a, b) => b[1] - a[1])
          .map(([emo, pct]) => (
            <ConfidenceBar key={emo} emotion={t(`emotions.${emo}`)}
              value={pct} barClass={EMOTION_CONFIG[emo]?.barClass || "bar-neutral"} />
          ))}
      </div>
    </div>
  );
}