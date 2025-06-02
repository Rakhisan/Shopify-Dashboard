"use client";
import { useState } from "react";
import styles from "./Password.module.css";
import { Eye, EyeOff, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SignUp from "../../images/Sign_Up.png";
import { HiLockClosed } from "react-icons/hi2";

export default function Password() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({}); // Added missing errors state

  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePassword = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
      console.error("API Error:", error);
      setErrors({ password: "Something went wrong. Please try again." });
    }
  };

  const inputClass = (field) =>
    `${styles.input} ${errors[field] ? styles.inputError : ""}`;

  return (
    <div className={styles.PasswordContainer}>
      {/* Left Side - Image */}
      <div className={styles.leftSide}>
        <div className={styles.imageContainer}>
          <Image
            src={SignUp} // Replace with your image path
            alt="Team collaboration"
            fill
            className={styles.PasswordImage}
          />
        </div>
      </div>

      {/* Right Side - Password Form */}
      <div className={styles.rightSide}>
        <div className={styles.formContainer}>
          {/* Title */}
          <h1 className={styles.title}>Please log in to your account first.</h1>

          {/* Password Form */}
          <form onSubmit={handlePassword} className={styles.form}>
            {/* Password Field */}
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

            {/* Password Button */}
            <button type="submit" className={styles.PasswordButton}>
              LogIn
            </button>
          </form>

          {/* Sign Up Link */}
          <div className={styles.signupSection}>
            <span className={styles.newHereText}>New here? </span>
            <Link href="/auth/sign-up" className={styles.signupLink}>
              Sign Up
            </Link>
          </div>

          {/* Footer */}
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
