"use client";

import { useState } from "react";
import styles from "./EditUser.module.css";

export default function EditUser() {
  const [formData, setFormData] = useState({
    companyId: "",
    email: "",
    name: "",
    roleId: "",
    authSecret: "Auth secret",
    mfaEnabled: "",
    mfaSecret: "",
    updatedAt: "Updated at",
    status: "",
    createdAt: "Created at",
  });

  const [editableFields, setEditableFields] = useState({
    companyId: false,
    // You can add more: authSecret: false, updatedAt: false, etc.
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const SvgArrow = () => (
    <svg
      className={styles.selectIcon}
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

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Edit User</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              name="companyId"
              value={formData.companyId}
              onChange={handleChange}
              placeholder="Company Id"
            />
            <div
              className={styles.editIcon}
              onClick={() =>
                setEditableFields((prev) => ({
                  ...prev,
                  companyId: !prev.companyId,
                }))
              }
              role="button"
              tabIndex={0}
              style={{ cursor: "pointer" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M5 18.08V19H5.92L14.98 9.94002L14.06 9.02002L5 18.08Z"
                  fill="black"
                />
                <path
                  d="M20.71 7.04C20.8027 6.94749 20.8762 6.8376 20.9264 6.71662C20.9766 6.59565 21.0024 6.46597 21.0024 6.335C21.0024 6.20403 20.9766 6.07435 20.9264 5.95338C20.8762 5.8324 20.8027 5.72251 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04ZM3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM5.92 19H5V18.08L14.06 9.02L14.98 9.94L5.92 19Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <input
            className={styles.input}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
          />
          <input
            className={styles.input}
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            className={styles.input}
            name="roleId"
            value={formData.roleId}
            onChange={handleChange}
            placeholder="Role-id"
          />
          <input
            className={styles.input}
            name="authSecret"
            value={formData.authSecret}
            placeholder="Auth secret"
          />
          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              name="MFA"
              value={formData.mfaEnabled}
              onChange={handleChange}
            >
              <option value="">MFA</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            <SvgArrow />
          </div>
          <input
            className={styles.input}
            name="mfaSecret"
            value={formData.mfaSecret}
            onChange={handleChange}
            placeholder="MFA Secret"
          />
          <input
            className={styles.input}
            name="updatedAt"
            value={formData.updatedAt}
            placeholder="Updated at "
          />
          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <SvgArrow />
          </div>
          <input
            className={styles.input}
            name="createdAt"
            value={formData.createdAt}
            placeholder="Created at "
          />
        </div>

        <div className={styles.buttons}>
          <button type="button" className={styles.cancel}>
            Cancel
          </button>
          <button type="submit" className={styles.add}>
            Add
          </button>
        </div>
      </form>
       
    </div>
  );
}
