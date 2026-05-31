// src/pages/Verify.jsx
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import FloatingBlobs from "../components/FloatingBlobs";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function Verify() {
  const { t }    = useTranslation();
  const [params] = useSearchParams();
  const [status, setStatus] = useState("loading"); // loading | ok | error

  useEffect(() => {
    const token = params.get("token");
    if (!token) { setStatus("error"); return; }
    axios.get(`${API}/auth/verify?token=${token}`)
      .then(() => setStatus("ok"))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="auth-page">
      <FloatingBlobs />
      <div className="auth-card" style={{ textAlign: "center" }}>
        {status === "loading" && <div className="spinner" style={{ margin: "0 auto 16px" }} />}
        {status === "ok" && (
          <>
            <div style={{ fontSize: 64 }}>✅</div>
            <h2 className="auth-title" style={{ marginTop: 16 }}>{t("verifySuccess")}</h2>
            <Link to="/login" className="auth-btn" style={{ display:"inline-block", marginTop:24 }}>
              {t("loginBtn")}
            </Link>
          </>
        )}
        {status === "error" && (
          <>
            <div style={{ fontSize: 64 }}>❌</div>
            <h2 className="auth-title" style={{ marginTop: 16 }}>Invalid or expired link</h2>
            <Link to="/signup" className="auth-btn" style={{ display:"inline-block", marginTop:24 }}>
              {t("signupBtn")}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}