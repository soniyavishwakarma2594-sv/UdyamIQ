import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false); 

  const handleSendOtp = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/send-otp", { email });

      alert("OTP sent to email");
      router.push(`/verify-otp?email=${email}`);
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">
          {" "}
          <Image src="/U.png" alt="U" width={25} height={30} />
          DYAMIQ
        </div>

        <h2 className="auth-title">Create your account</h2>

        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />

        <button onClick={handleSendOtp} className="auth-button">
          Get Started
        </button>

        <div className="divider">
          <span>or get started with</span>
        </div>
        <button className="googleButton">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            width="20"
          />
          Google
        </button>

        <div className="auth-terms">
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

        <p className="auth-bottom">
          Already a member?{" "}
          <span className="auth-link" onClick={() => router.push("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
