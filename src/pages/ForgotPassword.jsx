// src/pages/ForgotPassword.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import FloatingBlobs from "../components/FloatingBlobs";
import AuthCharacter from "../components/AuthCharacter";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function ForgotPassword() {
  const { t }   = useTranslation();
  const [email, setEmail]   = useState("");
  const [sent, setSent]     = useState(false);
  const [error, setError]   = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      await axios.post(`${API}/auth/forgot-password`, { email });
      setSent(true);
    } catch (err) {
      // Show success anyway to not reveal if email exists
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-new">
      <FloatingBlobs />
      <div className="auth-char-side">
        <AuthCharacter mood="forgotpassword" size={210} />
        <p className="auth-char-label">{t("forgotCharMsg")}</p>
      </div>
      <div className="auth-form-side">
        <div className="auth-card-new">
          {sent ? (
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:56,marginBottom:16}}>📬</div>
              <h2 className="auth-title">{t("checkEmail")}</h2>
              <p className="auth-sub">{t("resetSent")}</p>
              <Link to="/login" className="auth-btn"
                style={{display:"block",marginTop:24,textDecoration:"none"}}>
                {t("backToLogin")}
              </Link>
            </div>
          ) : (
            <>
              <h1 className="auth-title">{t("forgotPassword")}</h1>
              <p className="auth-sub">{t("forgotSub")}</p>
              {error && <div className="auth-error">⚠️ {error}</div>}
              <form onSubmit={handleSubmit} className="auth-form">
                <div className="auth-field">
                  <label>{t("email")}</label>
                  <input type="email" value={email} placeholder="vous@example.com"
                    onChange={e => setEmail(e.target.value)} required />
                </div>
                <button className="auth-btn" disabled={loading}>
                  {loading ? <span className="btn-spinner"/> : t("sendReset")}
                </button>
              </form>
              <p className="auth-switch">
                <Link to="/login">← {t("backToLogin")}</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}