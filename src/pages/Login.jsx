// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import AuthCharacter from "../components/AuthCharacter";
import FloatingBlobs from "../components/FloatingBlobs";

export default function Login() {
  const { t }     = useTranslation();
  const { login } = useAuth();
  const navigate  = useNavigate();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [mood, setMood]         = useState("happy");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setMood("sad");
      setError(err.response?.data?.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-new">
      <FloatingBlobs />
      <div className="auth-char-side">
        <AuthCharacter mood={mood} size={210} />
        <p className="auth-char-label">
          {mood === "sad" ? t("authSadMsg") : t("authWelcome")}
        </p>
      </div>
      <div className="auth-form-side">
        <div className="auth-card-new">
          <h1 className="auth-title">{t("loginTitle")}</h1>
          <p className="auth-sub">{t("loginSub")}</p>
          {error && <div className="auth-error"> {error}</div>}
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-field">
              <label>{t("email")}</label>
              <input type="email" value={email} placeholder="vous@example.com"
                onChange={e => { setEmail(e.target.value); setMood("happy"); }} required />
            </div>
            <div className="auth-field">
              <label>{t("password")}</label>
              <input type="password" value={password} placeholder="••••••••"
                onChange={e => setPassword(e.target.value)} required />
            </div>
            <div className="auth-forgot">
              <Link to="/forgot-password">{t("forgotPassword")}</Link>
            </div>
            <button className="auth-btn" disabled={loading}>
              {loading ? <span className="btn-spinner"/> : t("loginBtn")}
            </button>
          </form>
          <div className="auth-divider"><span>{t("orWith")}</span></div>
          <button className="google-btn"
            onClick={() => alert("Google OAuth — à configurer côté backend")}>
            <GoogleIcon /> {t("continueGoogle")}
          </button>
          <p className="auth-switch">
            {t("noAccount")} <Link to="/signup">{t("signupBtn")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" style={{marginRight:8}}>
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"/>
      <path fill="#FBBC05" d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"/>
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"/>
    </svg>
  );
}