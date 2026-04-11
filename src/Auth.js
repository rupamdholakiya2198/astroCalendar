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
// import { auth } from "./firebase";
// import {
//   sendSignInLinkToEmail,
//   isSignInWithEmailLink,
//   signInWithEmailLink
// } from "firebase/auth";

// const Auth = ({ children }) => {
//   const [email, setEmail] = useState("");
//   const [authenticated, setAuthenticated] = useState(false);

//   // 🔐 Allowed Emails (ADD YOUR EMAILS HERE)
//   const allowedEmails = [
//     "rupamdholakiya@gmail.com",
//     "yourfriend@gmail.com"
//   ];

//   const actionCodeSettings = {
//     url: window.location.origin,
//     handleCodeInApp: true,
//   };

//   // 📧 SEND OTP
//   const handleSendOTP = async () => {
//     if (!email) {
//       alert("Please enter email");
//       return;
//     }

//     // 🔒 Restrict emails BEFORE sending OTP
//     if (!allowedEmails.includes(email.toLowerCase())) {
//       alert("Access Denied ❌ You are not authorized");
//       return;
//     }

//     try {
//       await sendSignInLinkToEmail(auth, email, actionCodeSettings);
//       localStorage.setItem("emailForSignIn", email);
//       alert("OTP link sent to your email 📩");
//     } catch (err) {
//       alert("Error sending OTP ❌");
//       console.error(err);
//     }
//   };

//   // 🔐 HANDLE LOGIN AFTER CLICKING EMAIL LINK
//   useEffect(() => {
//     if (isSignInWithEmailLink(auth, window.location.href)) {
//       let savedEmail = localStorage.getItem("emailForSignIn");

// if (!savedEmail) {
//   savedEmail = window.prompt("Enter your email again");

//   // 🔥 IMPORTANT: store again
//   localStorage.setItem("emailForSignIn", savedEmail);
// }

//       signInWithEmailLink(auth, savedEmail, window.location.href)
//         .then(() => {

//           // 🔒 SECOND SECURITY CHECK
//           if (!allowedEmails.includes(savedEmail.toLowerCase())) {
//             alert("Unauthorized access ❌");
//             return;
//           }

//           localStorage.removeItem("emailForSignIn");
//           setAuthenticated(true);
//         })
//         .catch((err) => {
//           alert("Login failed ❌");
//           console.error(err);
//         });
//     }
//   }, []);

//   // 🔐 LOGIN SCREEN
//   if (!authenticated) {
//     return (
//       <div
//         style={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column"
//         }}
//       >
//         <div className="header">
//           <img src={logo} alt="logo" className="logos" />
//         </div>

//         <h2>🔐 Private Astro Calendar</h2>

//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{
//             padding: "10px",
//             marginTop: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc"
//           }}
//         />

//         <button
//           onClick={handleSendOTP}
//           style={{
//             marginTop: "10px",
//             padding: "8px 16px",
//             border: "none",
//             background: "#1976d2",
//             color: "white",
//             borderRadius: "5px",
//             cursor: "pointer"
//           }}
//         >
//           Send OTP
//         </button>
//       </div>
//     );
//   }

//   return children;
// };

// export default Auth;