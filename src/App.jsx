// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import Login          from "./pages/Login";
import Signup         from "./pages/Signup";
import Verify         from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
import LogoutBye      from "./pages/LogoutBye";
import Dashboard      from "./pages/Dashboard";
import HistoryPage    from "./pages/HistoryPage";
import "./App.css";

function PrivateRoute({ children }) {
  const { user, ready } = useAuth();
  if (!ready) return null;
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const [history, setHistory] = useState([]);

  const addToHistory = (item) =>
    setHistory(prev => [item, ...prev.slice(0, 49)]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login"           element={<Login />} />
        <Route path="/signup"          element={<Signup />} />
        <Route path="/verify"          element={<Verify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/logout-bye"      element={<LogoutBye />} />
        <Route path="/" element={
          <PrivateRoute>
            <Dashboard onHistoryUpdate={addToHistory} />
          </PrivateRoute>
        }/>
        <Route path="/history" element={
          <PrivateRoute>
            <HistoryPage history={history} />
          </PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
}