import React, { useState } from "react";
import logo from "./assets/logo.png";

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

          <div className="header">
          <img src={logo} alt="logo" className="logos" />
          
             </div>
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


// import React, { useState, useEffect } from "react";
// import logo from "./assets/logo.png";
// import { auth, provider } from "./firebase";
// import {
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged
// } from "firebase/auth";

// const SESSION_TIME = 15 * 60 * 1000; // ⏱ 15 minutes

// const Auth = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 🔐 Allowed Emails
//   const allowedEmails = [
//     "rupamdholakiya@gmail.com",
//     "rupamdholakiya023@gmail.com"
//   ];

//   // ✅ AUTO LOGIN + SESSION TRACK
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         if (allowedEmails.includes(currentUser.email.toLowerCase())) {
//           setUser(currentUser);

//           // 🔥 Save login time
//           localStorage.setItem("loginTime", Date.now());
//         } else {
//           alert("Access Denied ❌");
//           signOut(auth);
//         }
//       } else {
//         setUser(null);
//         localStorage.removeItem("loginTime");
//       }

//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   // ⏱ AUTO LOGOUT TIMER
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const loginTime = localStorage.getItem("loginTime");

//       if (loginTime) {
//         const currentTime = Date.now();

//         if (currentTime - loginTime > SESSION_TIME) {
//           alert("Session expired ⏰ Please login again");
//           signOut(auth);
//           localStorage.removeItem("loginTime");
//         }
//       }
//     }, 5000); // check every 5 sec

//     return () => clearInterval(interval);
//   }, []);

//   const handleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//     } catch (err) {
//       console.error(err);
//       alert("Login failed ❌");
//     }
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     localStorage.removeItem("loginTime");
//   };

//   // ⏳ LOADING
//   if (loading) {
//     return <h2 style={{ color: "white", textAlign: "center" }}>Loading...</h2>;
//   }

//   // 🔐 LOGIN SCREEN
//   if (!user) {
//     return (
//       <div style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column"
//       }}>
//         <div className="header">
//           <img src={logo} alt="logo" className="logos" />
//         </div>

//         <h2>🔐 Private Astro Calendar</h2>

//         <button
//           onClick={handleLogin}
//           style={{
//             marginTop: "20px",
//             padding: "10px 20px",
//             border: "none",
//             background: "#4285F4",
//             color: "white",
//             borderRadius: "5px",
//             cursor: "pointer"
//           }}
//         >
//           Login with Google
//         </button>
//       </div>
//     );
//   }

//   // 🔓 AFTER LOGIN
//   return (
//     <>
//       <div style={{
//         position: "absolute",
//         top: 15,
//         right: 20,
//         display: "flex",
//         alignItems: "center",
//         gap: "10px"
//       }}>
//         <span style={{ color: "white", fontSize: "12px" }}>
//           {/* {user.email} */}
//         </span>

//         <button
//           onClick={handleLogout}
//           style={{
//             padding: "6px 12px",
//             background: "#ff5252",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer"
//           }}
//         >
//           Logout
//         </button>
//       </div>

//       {children}
//     </>
//   );
// };

// export default Auth;