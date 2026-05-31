// src/components/Navbar.jsx
import { useTranslation } from "react-i18next";
import { useAuth }  from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const LANGS = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "ar", label: "AR", flag: "🇸🇦" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();
  const { dark, toggle } = useTheme();

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
  };

  return (
    <header className="navbar">
     <div className="navbar-logo">
  <img src="/logotitre.png" alt="EmoSense" className="navbar-logo-img" />
</div>

      <div className="navbar-right">
        {/* Language switcher */}
        <div className="lang-switcher">
          {LANGS.map(l => (
            <button
              key={l.code}
              className={`lang-btn ${i18n.language === l.code ? "active" : ""}`}
              onClick={() => changeLang(l.code)}
            >
              {l.flag} {l.label}
            </button>
          ))}
        </div>

        {/* Dark mode toggle */}
        <button className="icon-btn" onClick={toggle} title={dark ? t("lightMode") : t("darkMode")}>
          {dark ? "☀️" : "🌙"}
        </button>

        {/* User greeting + logout */}
        {user && (
          <div className="navbar-user">
            <span className="greeting">
              {t("greeting")}, <strong>{user.user_name}</strong> 👋
            </span>
            <button className="logout-btn" onClick={logout}>
              {t("logout")}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}