"use client";

import { useState } from "react";
import styles from "./AddUser.module.css";

export default function AddUser() {
  const [formData, setFormData] = useState({
    userrole: "",
    email: "",
    firstname: "",
    lastname: "",
    mfaEnabled: "",
    mfaSecret: "",
  });

  const [dropdownStates, setDropdownStates] = useState({
    userrole: false,
    mfaEnabled: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDropdownSelect = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setDropdownStates({ ...dropdownStates, [name]: false });
  };

  const toggleDropdown = (name) => {
    setDropdownStates({
      ...dropdownStates,
      [name]: !dropdownStates[name],
      // Close other dropdowns
      ...(name === "userrole" ? { mfaEnabled: false } : { userrole: false }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const SvgArrow = ({ isOpen }) => (
    <svg
      className={`${styles.selectIcon} ${isOpen ? styles.rotated : ""}`}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.81794 8.06274H15.3016C15.4695 8.06278 15.6336 8.11259 15.7731 8.20586C15.9127 8.29914 16.0215 8.43171 16.0857 8.5868C16.15 8.74189 16.1668 8.91254 16.134 9.07718C16.1013 9.24182 16.0205 9.39306 15.9018 9.51178L11.1599 14.2536C11.0008 14.4128 10.7849 14.5022 10.5598 14.5022C10.3347 14.5022 10.1188 14.4128 9.95963 14.2536L5.21778 9.51178C5.0991 9.39306 5.01828 9.24182 4.98554 9.07718C4.9528 8.91254 4.96961 8.74189 5.03385 8.5868C5.09808 8.43171 5.20686 8.29914 5.34642 8.20586C5.48598 8.11259 5.65007 8.06278 5.81794 8.06274Z"
        fill="#8E95A6"
      />
    </svg>
  );

  const CustomDropdown = ({
    name,
    value,
    placeholder,
    options,
    isOpen,
    onToggle,
    onSelect,
  }) => (
    <div className={styles.customDropdown}>
      <div
        onClick={() => onToggle(name)}
        className={`${styles.dropdownButton} ${isOpen ? styles.focused : ""} ${
          value ? styles.hasValue : styles.placeholder
        }`}
      >
        {value || placeholder}
      </div>
      <SvgArrow isOpen={isOpen} />

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => onSelect(name, option.value)}
              className={styles.dropdownOption}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const userRoleOptions = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Manager", value: "manager" },
  ];

  const mfaOptions = [
    { label: "True", value: "true" },
    { label: "False", value: "false" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add User</h2>
      <div className={styles.form}>
        <div className={styles.grid}>
          <CustomDropdown
            name="userrole"
            value={formData.userrole}
            placeholder="User role"
            options={userRoleOptions}
            isOpen={dropdownStates.userrole}
            onToggle={toggleDropdown}
            onSelect={handleDropdownSelect}
          />

          <input
            className={styles.input}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
          />

          <input
            className={styles.input}
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First name"
          />

          <input
            className={styles.input}
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
          />

          <CustomDropdown
            name="mfaEnabled"
            value={formData.mfaEnabled}
            placeholder="mfa_enabled"
            options={mfaOptions}
            isOpen={dropdownStates.mfaEnabled}
            onToggle={toggleDropdown}
            onSelect={handleDropdownSelect}
          />

          <input
            className={styles.input}
            name="mfaSecret"
            value={formData.mfaSecret}
            onChange={handleChange}
            placeholder="MFA"
          />
        </div>

        <div className={styles.buttons}>
          <button type="button" className={styles.cancel}>
            Cancel
          </button>
          <button type="button" onClick={handleSubmit} className={styles.add}>
            Add
          </button>
        </div>
      </div>
       
    </div>
  );
}
