// src/pages/LogoutBye.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import AuthCharacter from "../components/AuthCharacter";
import FloatingBlobs from "../components/FloatingBlobs";

export default function LogoutBye() {
  const { t }     = useTranslation();
  const { logout } = useAuth();
  const navigate  = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
      navigate("/login");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="auth-page-new" style={{flexDirection:"column", gap:32}}>
      <FloatingBlobs />
      <div style={{textAlign:"center", position:"relative", zIndex:1}}>
        <AuthCharacter mood="bye" size={220} />
        <h2 style={{
          fontFamily:"'DM Serif Display',serif",
          fontSize:32, color:"var(--pink-deep)",
          marginTop:16
        }}>
          {t("byeMessage")} 
        </h2>
        <p style={{color:"var(--text-soft)", marginTop:8, fontSize:15}}>
          {t("byeSub")}
        </p>
        <div className="logout-dots">
          <span/><span/><span/>
        </div>
      </div>
    </div>
  );
}