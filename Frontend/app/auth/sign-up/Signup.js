"use client";
import { useState } from "react";
import styles from "./SignUp.module.css";
import { Eye, EyeOff, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SignUp from "../../images/Sign_Up.png";
import { HiLockClosed } from "react-icons/hi2";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const [errors, setErrors] = useState({});

  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = "Invalid email format";

    const passwordRegex = /^(?=.*[0-9])(?=.*[@#$])[A-Za-z0-9@#$]{8,16}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be 8-16 characters and include a number and @#$";
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();
      console.log("Dummy API Response:", data);

      router.push("/auth/company-details");
    } catch (error) {
      console.error("Dummy API Error:", error);
    }
  };

  const inputClass = (field) =>
    `${styles.input} ${errors[field] ? styles.inputError : ""}`;

  return (
    <div className={styles.SignupContainer}>
      <div className={styles.leftSide}>
        <div className={styles.imageContainer}>
          <Image
            src={SignUp}
            alt="Team collaboration"
            fill
            className={styles.SignupImage}
          />
        </div>
      </div>

      {/* First Last Name */}
      <div className={styles.rightSide}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Sign Up</h1>
          <form onSubmit={handleSignup} className={styles.form}>
            <div className={styles.nameRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor="firstName" className={styles.label}>
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={inputClass("firstName")}
                />
                {errors.firstName && (
                  <span className={styles.error}>{errors.firstName}</span>
                )}
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="lastName" className={styles.label}>
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={inputClass("lastName")}
                />
                {errors.lastName && (
                  <span className={styles.error}>{errors.lastName}</span>
                )}
              </div>
            </div>

            {/* Email Address */}

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
                />
              </div>
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            {/* Password */}
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

            {/* Confirm Password */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Confirm Password*</label>
              <div className={styles.inputWrapper}>
                <div className={styles.lockIcon}>
                  <HiLockClosed />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={inputClass("confirmPassword")}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={styles.eyeButton}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className={styles.error}>{errors.confirmPassword}</span>
              )}
            </div>

            <div className={styles.optionsRow}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxText}>Keep me signed in</span>
              </label>
              <Link href="/reset-password" className={styles.resetLink}>
                Reset Password
              </Link>
            </div>

            <button type="submit" className={styles.SignupButton}>
              Sign Up
            </button>
          </form>

          <div className={styles.loginSection}>
            <span className={styles.newHereText}>
              Already have an account?{" "}
            </span>
            <Link href="/auth/email" className={styles.loginLink}>
              Login Here
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
