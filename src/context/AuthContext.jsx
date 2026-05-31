// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);
const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

export function AuthProvider({ children }) {
  const [user,  setUser]  = useState(null);   // { user_name, user_email, access_token }
  const [ready, setReady] = useState(false);  // finished checking localStorage

  useEffect(() => {
    const saved = localStorage.getItem("emo_user");
    if (saved) setUser(JSON.parse(saved));
    setReady(true);
  }, []);

  const login = async (email, password) => {
    const form = new URLSearchParams();
    form.append("username", email);
    form.append("password", password);
    const { data } = await axios.post(`${API}/auth/login`, form, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    const u = { user_name: data.user_name, user_email: data.user_email, access_token: data.access_token };
    setUser(u);
    localStorage.setItem("emo_user", JSON.stringify(u));
    return u;
  };

  const signup = async (name, email, password) => {
    const { data } = await axios.post(`${API}/auth/signup`, { name, email, password });
    return data;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("emo_user");
  };

  const authHeader = () => user ? { Authorization: `Bearer ${user.access_token}` } : {};

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, authHeader, ready }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);