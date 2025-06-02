"use client";

import { useState } from "react";
import styles from "./EditUser.module.css";

export default function EditUser() {
    const [formData, setFormData] = useState({
        companyId: "",
        email: "",
        name: "",
        roleId: "",
        authSecret: "Prefilled",
        mfaEnabled: "",
        mfaSecret: "",
        updatedAt: "Prefilled",
        status: "",
        createdAt: "Prefilled",
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
                    <input
                        className={styles.input}
                        name="companyId"
                        value={formData.companyId}
                        onChange={handleChange}
                        placeholder="Company Id"
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
                        disabled
                        placeholder="Auth_secret - Prefilled"
                    />

                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.select}
                            name="mfaEnabled"
                            value={formData.mfaEnabled}
                            onChange={handleChange}
                        >
                            <option value="">mfa_enabled</option>
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
                        placeholder="mfa_secret"
                    />
                    <input
                        className={styles.input}
                        name="updatedAt"
                        value={formData.updatedAt}
                        disabled
                        placeholder="Updated_at - Prefilled"
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
                        disabled
                        placeholder="Created_at - Prefilled"
                    />
                </div>

                <div className={styles.buttons}>
                    <button type="button" className={styles.cancel}>
                        Cancel
                    </button>
                    <button type="submit" className={styles.submit}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
