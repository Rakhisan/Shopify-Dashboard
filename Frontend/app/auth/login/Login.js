"use client";
import { useState } from "react";
import styles from "./Login.module.css";
import { Mail, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import SignUp from "../../images/Sign_Up.png";
import { HiLockClosed } from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const router = useRouter();

  // Email Validation
  const validateEmail = () => {
    const newErrors = {};
    if (!email.includes("@")) {
      newErrors.email = "Invalid email format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Password Validation
  const validatePassword = () => {
    const newErrors = {};
    if (!password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmail = async (e) => {
    e.preventDefault();
    if (!validateEmail()) return;

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setErrors({ email: data.error || "Wrong Email" });
      } else {
        setErrors({});
        setStep(2); // Move to password step without routing
      }
    } catch (error) {
      setErrors({ email: "Something went wrong. Please try again." });
    }
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    if (!validatePassword()) return;

    try {
      const res = await fetch("/api/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setErrors({ password: data.error || "Wrong Password" });
      } else {
        setErrors({});
        router.push("/dashboard");
      }
    } catch (error) {
      setErrors({ password: "Something went wrong. Please try again." });
    }
  };

  const inputClass = (field) =>
    `${styles.input} ${errors[field] ? styles.inputError : ""}`;

  return (
    <div className={styles.LoginContainer}>
      <div className={styles.leftSide}>
        <div className={styles.imageContainer}>
          <Image
            src={SignUp}
            alt="Team collaboration"
            fill
            className={styles.LoginImage}
          />
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Please log in to your account first.</h1>

          {step === 1 && (
            <form onSubmit={handleEmail} className={styles.form}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Email Address*</label>
                <div className={styles.inputWrapper}>
                  <Mail className={styles.inputIcon} size={20} />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass("email")}
                    required
                  />
                </div>
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>
              <button type="submit" className={styles.LoginButton}>
                Next
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handlePassword} className={styles.form}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Password*</label>
                <div className={styles.inputWrapper}>
                  <div className={styles.lockIcon}>
                    <HiLockClosed />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputClass("password")}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={styles.eyeButton}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <span className={styles.error}>{errors.password}</span>
                )}
              </div>
              <button type="submit" className={styles.LoginButton}>
                Log In
              </button>
            </form>
          )}

          <div className={styles.signupSection}>
            <span className={styles.newHereText}>New here? </span>
            <Link href="/auth/sign-up" className={styles.signupLink}>
              Sign Up
            </Link>
          </div>

          <div className={styles.footer}>
            <span className={styles.copyright}>
              © 2025 · Shopify Dashboard. All rights reserved.
            </span>
            <div className={styles.footerLinks}>
              <Link href="/terms" className={styles.footerLink}>
                Terms & Conditions
              </Link>
              <span> and </span>
              <Link href="/privacy" className={styles.footerLink}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
