import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function VerifyOtp() {
  const router = useRouter();
  const { email } = router.query;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = async () => {
    const finalOtp = otp.join("");

    try {
      await axios.post("http://localhost:5000/api/auth/verify-otp", {
        email,
        otp: finalOtp,
      });

      router.push("/login");
    } catch (err) {
      alert("Invalid OTP");
    }
  };
  const handleResend = async () => {
    if (timer > 0) return;

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/auth/send-otp", {
        email,
      });

      setTimer(20);
      setOtp(["", "", "", "", "", ""]);
      alert("OTP resent successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-wrapper">
      <div className="otp-card">
        <h1 className="otp-title">Enter Verification Code</h1>
        <p className="otp-subtitle">We sent a 6-digit code to your email</p>

        <div className="otp-code-row">
          <span>Code</span>
          <span className="otp-timer">{timer}s</span>
        </div>

        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="otp-input"
            />
          ))}
        </div>

        <button className="otp-button" onClick={handleVerify}>
          VERIFY
        </button>

        <div className="otp-footer">
          Didn’t get a code? <span>Click to Resend</span>
        </div>
      </div>
    </div>
  );
}
