import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleLogin = async () => {
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (remember) {
        localStorage.setItem("token", res.data.token);
      }

      router.push("/form");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="login-title">Welcome to Udyam IQ</div>
        <div className="login-subtitle">
          Login to continue to your dashboard
        </div>

        <div className="social-container">
          <div className="social-btn">
            <Image
              src="/icons/google.png"
              alt="Google"
              width={22}
              height={22}
            />
          </div>

          <div className="social-btn">
            <Image src="/icons/gmail.png" alt="Gmail" width={22} height={22} />
          </div>

          <div className="social-btn">
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              width={22}
              height={22}
            />
          </div>

          <div className="social-btn">
            <Image
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={22}
              height={22}
            />
          </div>
        </div>

        <div className="divider">
          <span>Or</span>
        </div>

        {error && <p className="error-text">{error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="remember-row">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          Remember Me
        </div>

        <button
          className="auth-button"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "GET STARTED"}
        </button>

        <div className="auths-terms">
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span>
              By continuing, you agree to our{" "}
              <span className="auth-link" onClick={() => router.push("/terms")}>
                Terms of Use
              </span>{" "}
              and{" "}
              <span
                className="auth-link"
                onClick={() => router.push("/privacy")}
              >
                Privacy Policy
              </span>
              .
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
