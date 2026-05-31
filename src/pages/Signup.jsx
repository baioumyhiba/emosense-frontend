// src/pages/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import AuthCharacter from "../components/AuthCharacter";
import FloatingBlobs from "../components/FloatingBlobs";

export default function Signup() {
  const { t }      = useTranslation();
  const { signup } = useAuth();
  const navigate   = useNavigate();
  const [name, setName]             = useState("");
  const [email, setEmail]           = useState("");
  const [password, setPassword]     = useState("");
  const [confirm, setConfirm]       = useState("");
  const [error, setError]           = useState("");
  const [loading, setLoading]       = useState(false);
  const [done, setDone]             = useState(false);

  const pwStrength = () => {
    if (password.length === 0) return 0;
    if (password.length < 6)   return 1;
    if (password.length < 10)  return 2;
    return 3;
  };
  const strengthLabel = ["", t("pwWeak"), t("pwFair"), t("pwStrong")];
  const strengthColor = ["", "#ff6b6b", "#f8e4a0", "#b4ddd4"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) { setError(t("pwMinError")); return; }
    if (password !== confirm) { setError(t("pwMatchError")); return; }
    setLoading(true);
    try {
      await signup(name, email, password);
      setDone(true);
    } catch (err) {
      setError(err.response?.data?.detail || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  if (done) return (
    <div className="auth-page-new">
      <FloatingBlobs />
      <div className="auth-char-side">
        <AuthCharacter mood="signup" size={210} />
        <p className="auth-char-label">{t("verifyTitle")} </p>
      </div>
      <div className="auth-form-side">
        <div className="auth-card-new" style={{textAlign:"center"}}>
          <div style={{fontSize:64,marginBottom:16}}></div>
          <h2 className="auth-title">{t("verifyTitle")}</h2>
          <p className="auth-sub">{t("verifySub")}</p>
          <Link to="/login" className="auth-btn"
            style={{display:"block",marginTop:24,textDecoration:"none"}}>
            {t("loginBtn")}
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="auth-page-new">
      <FloatingBlobs />
      <div className="auth-char-side">
        <AuthCharacter mood="signup" size={210} />
        <p className="auth-char-label">{t("authJoin")}</p>
      </div>
      <div className="auth-form-side">
        <div className="auth-card-new">
          <h1 className="auth-title">{t("signupTitle")}</h1>
          <p className="auth-sub">{t("signupSub")}</p>
          {error && <div className="auth-error"> {error}</div>}
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-field">
              <label>{t("name")}</label>
              <input type="text" value={name} placeholder={t("namePlaceholder")}
                onChange={e => setName(e.target.value)} required />
            </div>
            <div className="auth-field">
              <label>{t("email")}</label>
              <input type="email" value={email} placeholder="vous@example.com"
                onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="auth-field">
              <label>{t("password")}</label>
              <input type="password" value={password} placeholder="••••••• (min 6)"
                onChange={e => setPassword(e.target.value)} required minLength={6} />
              {password.length > 0 && (
                <div className="pw-strength">
                  <div className="pw-bar">
                    <div style={{
                      width: `${(pwStrength()/3)*100}%`,
                      background: strengthColor[pwStrength()],
                      height: "100%", borderRadius: 100,
                      transition: "all .3s"
                    }}/>
                  </div>
                  <span style={{color: strengthColor[pwStrength()], fontSize:11, fontWeight:700}}>
                    {strengthLabel[pwStrength()]}
                  </span>
                </div>
              )}
            </div>
            <div className="auth-field">
              <label>{t("confirmPassword")}</label>
              <input type="password" value={confirm} placeholder="••••••••"
                onChange={e => setConfirm(e.target.value)} required />
              {confirm && confirm !== password && (
                <span className="field-hint error">{t("pwMatchError")}</span>
              )}
              {confirm && confirm === password && (
                <span className="field-hint success">✓ {t("pwMatch")}</span>
              )}
            </div>
            <button className="auth-btn" disabled={loading || (confirm && confirm !== password)}>
              {loading ? <span className="btn-spinner"/> : t("signupBtn")}
            </button>
          </form>
          <div className="auth-divider"><span>{t("orWith")}</span></div>
          <button className="google-btn"
            onClick={() => alert("Google OAuth — à configurer côté backend")}>
            <GoogleIcon /> {t("continueGoogle")}
          </button>
          <p className="auth-switch">
            {t("hasAccount")} <Link to="/login">{t("loginBtn")}</Link>
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