module.exports = [
"[project]/pages/login.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/router";
// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [remember, setRemember] = useState(false);
//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });
//       if (remember) {
//         localStorage.setItem("token", res.data.token);
//       }
//       alert("Login successful");
//       router.push("/form");
//     } catch (err) {
//       alert(err.response?.data?.message);
//     }
//   };
//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className="login-title">Welcome to Udyam IQ</div>
//         <div className="login-subtitle">Lorem Ipsum is simply dummy</div>
//         {/* Social Buttons */}
//         <div className="social-container">
//           <div className="social-btn">G</div>
//           <div className="social-btn">M</div>
//           <div className="social-btn">f</div>
//           <div className="social-btn">in</div>
//         </div>
//         <div className="divider">
//           <span>Or</span>
//         </div>
//         <input
//           type="email"
//           placeholder="Enter Mobile Number or Email"
//           className="auth-input"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter Password"
//           className="auth-input"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Re-enter Password"
//           className="auth-input"
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <div className="remember-row">
//           <input
//             type="checkbox"
//             checked={remember}
//             onChange={() => setRemember(!remember)}
//           />
//           Remember Me
//         </div>
//         <button className="auth-button" onClick={handleLogin}>
//           GET STARTED
//         </button>
//         <div className="terms-text">
//           By continuing, you agree to our <span>Terms of Use</span> and{" "}
//           <span>Privacy Policy</span>.
//         </div>
//       </div>
//     </div>
//   );
// }
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a8ab9707._.js.map