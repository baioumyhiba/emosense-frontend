// src/components/Sidebar.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth }  from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const LANGS = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

/* ── Clean SVG Icons matching Canva style ── */
const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H3L12 3L21 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 12V19C5 19.5523 5.44772 20 6 20H9V16C9 15.4477 9.44772 15 10 15H14C14.5523 15 15 15.4477 15 16V20H18C18.5523 20 19 19.5523 19 19V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconHistory = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 8V12L14.5 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M3.05 11A9 9 0 1 0 4 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M3 4V8H7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconMic = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="2" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M5 10C5 13.866 8.13401 17 12 17C15.866 17 19 13.866 19 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconSun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 2V4M12 20V22M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M2 12H4M20 12H22M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconMoon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 3C9.5 6 8 9 8 12C8 15 9.5 18 12 21" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 3C14.5 6 16 9 16 12C16 15 14.5 18 12 21" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3.5 9H20.5M3.5 15H20.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconLogout = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16 17L21 12L16 7M21 12H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconChevron = ({ open }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
    style={{ transition:"transform .25s", transform: open ? "rotate(180deg)" : "rotate(0deg)", marginLeft:"auto" }}>
    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export default function Sidebar({ collapsed, onToggle }) {
  const { t, i18n }      = useTranslation();
  const { user, logout } = useAuth();
  const { dark, toggle } = useTheme();
  const navigate         = useNavigate();
  const location         = useLocation();
  const [showLang, setShowLang] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
    setShowLang(false);
  };

  const handleLogout = () => {
    setShowUser(false);
    navigate("/logout-bye");
  };

  const navItems = [
    { icon: <IconHome />,    label: t("navHome"),    path: "/" },
    { icon: <IconHistory />, label: t("navHistory"), path: "/history" },
    { icon: <IconMic />,     label: t("navRecord"),  path: "/record" },
  ];

  return (
    <aside className={`sidebar ${collapsed ? "sidebar-collapsed" : ""}`}>

      {/* ── Header: logo + toggle ── */}
      <div className="sidebar-header">
        {!collapsed && (
          <img src="/logotitre.png" alt="EmoSense" className="sidebar-logo-img" />
        )}
        <button className="sidebar-toggle-btn" onClick={onToggle} title="Toggle sidebar">
          <IconMenu />
        </button>
      </div>

      {/* ── Navigation ── */}
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <button key={item.path}
            className={`sidebar-nav-item ${location.pathname === item.path ? "active" : ""}`}
            onClick={() => navigate(item.path)}
            title={collapsed ? item.label : undefined}>
            <span className="nav-icon-wrap">{item.icon}</span>
            {!collapsed && <span className="nav-label">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* ── Bottom controls ── */}
      <div className="sidebar-bottom">

        {/* Language */}
        <div className="sidebar-control">
          <button className="sidebar-ctrl-btn" onClick={() => { setShowLang(v=>!v); setShowUser(false); }}
            title={collapsed ? "Language" : undefined}>
            <span className="ctrl-icon-wrap"><IconGlobe /></span>
            {!collapsed && (
              <>
                <span>{LANGS.find(l=>l.code===i18n.language)?.label || "Français"}</span>
                <IconChevron open={showLang} />
              </>
            )}
          </button>
          {showLang && (
            <div className="sidebar-dropdown">
              {LANGS.map(l => (
                <button key={l.code}
                  className={`dropdown-item ${i18n.language === l.code ? "active" : ""}`}
                  onClick={() => changeLang(l.code)}>
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dark/Light mode */}
        <button className="sidebar-ctrl-btn" onClick={toggle}
          title={collapsed ? (dark ? t("lightMode") : t("darkMode")) : undefined}>
          <span className="ctrl-icon-wrap">{dark ? <IconSun /> : <IconMoon />}</span>
          {!collapsed && <span>{dark ? t("lightMode") : t("darkMode")}</span>}
        </button>

        {/* Divider */}
        <div className="sidebar-divider" />

        {/* User */}
        {user && (
          <div className="sidebar-control">
            <button className="sidebar-user-btn"
              onClick={() => { setShowUser(v=>!v); setShowLang(false); }}>
              <div className="user-avatar">
                {user.user_name?.charAt(0).toUpperCase()}
              </div>
              {!collapsed && (
                <>
                  <span className="user-name-short">{user.user_name}</span>
                  <IconChevron open={showUser} />
                </>
              )}
            </button>
            {showUser && (
              <div className="sidebar-dropdown user-dropdown">
                <div className="dropdown-user-info">
                  <strong>{user.user_name}</strong>
                  <small>{user.user_email}</small>
                </div>
                <button className="dropdown-item logout-item" onClick={handleLogout}>
                  <IconLogout /> {t("logout")}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}