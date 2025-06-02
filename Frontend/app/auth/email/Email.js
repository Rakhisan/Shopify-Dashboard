"use client";
import { useState } from "react";
import styles from "./Email.module.css";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SignUp from "../../images/Sign_Up.png";

export default function Email() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};
    if (!email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmail = async (e) => {
    e.preventDefault();

    // ✅ Call validateForm and stop if it returns false
    if (!validateForm()) {
      return;
    }

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
        router.push("/auth/password");
      }
    } catch (error) {
      console.error("API Error:", error);
      setErrors({ email: "Something went wrong. Please try again." });
    }
  };

  const inputClass = (field) =>
    `${styles.input} ${errors[field] ? styles.inputError : ""}`;
  return (
    <div className={styles.EmailContainer}>
      {/* Left Side - Image */}
      <div className={styles.leftSide}>
        <div className={styles.imageContainer}>
          <Image
            src={SignUp}
            alt="Team collaboration"
            fill
            className={styles.EmailImage}
          />
        </div>
      </div>

      {/* Right Side - Email Form */}
      <div className={styles.rightSide}>
        <div className={styles.formContainer}>
          {/* Title */}
          <h1 className={styles.title}>Please log in to your account first.</h1>

          {/* Email Form */}
          <form onSubmit={handleEmail} className={styles.form}>
            {/* Email Field */}
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

            {/* Email Button */}
            <button type="submit" className={styles.EmailButton}>
              Next
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
