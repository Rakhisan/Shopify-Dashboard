"use client";
import { useState } from "react";
import Head from "next/head";
import styles from "./EditVendor.module.css";

export default function EditVendor() {
  const [formData, setFormData] = useState({
    companyId: "",
    name: "",
    email: "",
    email2: "",
    address: "",
    country: "",
    phone: "",
    website: "",
    taxId: "",
    city: "",
    state: "",
    postalCode: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Add Vendor</title>
        <meta name="description" content="Add a new vendor" />
      </Head>
      <h1 className={styles.title}>Edit Vendor</h1>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <div className={styles.formGrid}>
          {[
            {
              id: "companyId",
              label: "Company-id",
              type: "text",
              placeholder: "Company-id",
              icon: true,
            },
            {
              id: "phone",
              label: "Phone no",
              type: "text",
              placeholder: "Phone Number",
            },
            {
              id: "name",
              label: "Name",
              type: "text",
              placeholder: "Name",
            },
            {
              id: "website",
              label: "Website",
              type: "text",
              placeholder: "e.g. example.com",
            },
            {
              id: "email",
              label: "Email",
              type: "email",
              placeholder: "text@gmail.com",
            },
            {
              id: "taxId",
              label: "Tax-id",
              type: "text",
              placeholder: "Tax-id",
            },
            {
              id: "email2",
              label: "Email",
              type: "email",
              placeholder: "21 for FTP,22 for SFTP",
            },
            {
              id: "city",
              label: "City",
              type: "text",
              placeholder: "City Name",
            },
            {
              id: "address",
              label: "Address",
              type: "text",
              placeholder: "Address",
            },
            {
              id: "state",
              label: "State",
              type: "text",
              placeholder: "State Name",
            },
            {
              id: "country",
              label: "Country",
              type: "text",
              placeholder: "Country",
            },
            {
              id: "postalCode",
              label: "Postal-code",
              type: "text",
              placeholder: "Postal-code",
            },
          ].map((field) => (
            <div className={styles.formGroup} key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              {field.icon ? (
                <div className={styles.formGroup} key={field.id}>
                  <div className={styles.inputWrapper}>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                    <span className={styles.inputIcon}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
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
                    </span>
                  </div>
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              )}
            </div>
          ))}
        </div>

        <div className={styles.statusContainer}>
          <div className={styles.selectWrapper}>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={styles.statusSelect}
            >
              <option value="" disabled>
                Status
              </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
            <div className={styles.selectArrow}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.25837 8.45361H15.7421C15.9099 8.45365 16.074 8.50345 16.2136 8.59673C16.3531 8.69001 16.4619 8.82258 16.5262 8.97767C16.5904 9.13276 16.6072 9.30341 16.5745 9.46805C16.5417 9.63269 16.4609 9.78393 16.3422 9.90265L11.6004 14.6445C11.4412 14.8036 11.2253 14.893 11.0002 14.893C10.7751 14.893 10.5592 14.8036 10.4001 14.6445L5.65821 9.90265C5.53953 9.78393 5.45871 9.63269 5.42597 9.46805C5.39323 9.30341 5.41004 9.13276 5.47428 8.97767C5.53851 8.82258 5.64729 8.69001 5.78685 8.59673C5.92641 8.50345 6.0905 8.45365 6.25837 8.45361Z"
                  fill="#3D3C3C"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button type="button" className={styles.cancelButton}>
            Cancel
          </button>
          <button type="submit" className={styles.saveButton}>
            Save
          </button>
        </div>
      </form>
       
    </div>
  );
}
