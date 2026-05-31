// src/components/RecordButton.jsx
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function RecordButton({ onRecorded, disabled }) {
  const { t }          = useTranslation();
  const [recording, setRecording] = useState(false);
  const mediaRef  = useRef(null);
  const chunksRef = useRef([]);

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr     = new MediaRecorder(stream, { mimeType: "audio/webm" });
      chunksRef.current = [];
      mr.ondataavailable = e => { if (e.data.size > 0) chunksRef.current.push(e.data); };
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const url  = URL.createObjectURL(blob);
        onRecorded(blob, url);
        stream.getTracks().forEach(t => t.stop());
      };
      mr.start();
      mediaRef.current = mr;
      setRecording(true);
    } catch {
      alert("Microphone access denied");
    }
  };

  const stop = () => {
    mediaRef.current?.stop();
    setRecording(false);
  };

  return (
    <button
      className={`record-btn ${recording ? "recording" : ""}`}
      onClick={recording ? stop : start}
      disabled={disabled}
    >
      {recording ? (
        <>
          {/* Animated ear / listening icon */}
          <span className="rec-icon">
            <svg viewBox="0 0 36 36" width="28" height="28">
              <circle cx="18" cy="18" r="16" fill="white" opacity="0.2"/>
              {/* Ear shape */}
              <path d="M13 14 Q11 18 13 22 Q14 26 17 26 Q20 26 21 23
                       Q22 21 20 20 Q19 18 20 17 Q22 13 18 11 Q14 9 13 14Z"
                    fill="white"/>
              {/* Inner ear */}
              <path d="M16 15 Q14 18 16 21 Q17 23 18 22 Q19 20 18 18 Q17 16 18 15"
                    fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
              {/* Sound waves */}
              <path d="M24 13 Q27 18 24 23" stroke="white" strokeWidth="1.5"
                    fill="none" strokeLinecap="round" className="rec-wave rec-wave1"/>
              <path d="M27 11 Q31 18 27 25" stroke="white" strokeWidth="1.2"
                    fill="none" strokeLinecap="round" className="rec-wave rec-wave2"/>
            </svg>
          </span>
          <span>{t("stopBtn")}</span>
          <span className="rec-dot" />
        </>
      ) : (
        <>
          <span>🎙️</span>
          <span>{t("recordBtn")}</span>
        </>
      )}
    </button>
  );
}