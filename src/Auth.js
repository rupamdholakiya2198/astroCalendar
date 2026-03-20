import React, { useState } from "react";

const Auth = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const CORRECT_PASSWORD = "astro123"; // 🔐 change this

  const handleLogin = () => {
    if (password === CORRECT_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Wrong password ❌");
    }
  };

  // 🔐 Login Screen
  if (!authenticated) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <h2>🔐 Private Astro Calendar</h2>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            border: "none",
            background: "#1976d2",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Enter
        </button>
      </div>
    );
  }

  return children;
};

export default Auth;