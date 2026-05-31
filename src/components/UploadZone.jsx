// src/components/UploadZone.jsx
import { useRef, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import RecordButton from "./RecordButton";
import LoadingAnimation from "./LoadingAnimation";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function UploadZone({ onResult, loading, setLoading, setError, setResult }) {
  const { t }          = useTranslation();
  const { authHeader } = useAuth();
  const inputRef       = useRef(null);
  const [drag, setDrag] = useState(false);

  const sendFile = async (file, audioUrl) => {
    if (!file) return;
    setError(null); setResult(null); setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const { data } = await axios.post(`${API}/predict`, formData, {
        headers: { ...authHeader(), "Content-Type": "multipart/form-data" },
      });
      onResult(data, audioUrl, file.name || "recording.webm");
    } catch (err) {
      setError(err.response?.data?.detail || "Prediction failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleFile  = (file) => file && sendFile(file, URL.createObjectURL(file));
  const handleRecorded = (blob, url) =>
    sendFile(new File([blob], "recording.webm", { type: "audio/webm" }), url);

  const onDrop = (e) => { e.preventDefault(); setDrag(false); handleFile(e.dataTransfer.files[0]); };

  if (loading) return <LoadingAnimation />;

  return (
    <div
      className={`upload-zone ${drag ? "drag-over" : ""}`}
      onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={onDrop}
    >
      <input ref={inputRef} type="file" accept="audio/*" style={{ display: "none" }}
        onChange={e => handleFile(e.target.files[0])} />
      <span className="upload-icon">🎵</span>
      <h2>{t("uploadTitle")}</h2>
      <p>{t("uploadSub")}</p>
      <div className="upload-actions">
        <button className="upload-btn" onClick={() => inputRef.current.click()}>
          {t("uploadBtn")}
        </button>
        <span className="or-divider">— or —</span>
        <RecordButton onRecorded={handleRecorded} disabled={loading} />
      </div>
    </div>
  );
}