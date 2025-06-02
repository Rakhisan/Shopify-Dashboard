"use client";
import { useState } from "react";
import Head from "next/head";
import styles from "./AddVendor.module.css";

export default function AddVendor() {
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
      <h1 className={styles.title}>Add Vendor</h1>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <div className={styles.formGrid}>
          {[
            {
              id: "companyId",
              label: "Company-id",
              type: "text",
              placeholder: "Company-id",
            },
            {
              id: "phone",
              label: "Phone No",
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
              placeholder: "21 for FTP,22 for SFTP",
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
              label: "Postal Code",
              type: "text",
              placeholder: "Postal Code",
            },
          ].map((field) => (
            <div className={styles.formGroup} key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                value={formData[field.id]}
                onChange={handleChange}
                className={styles.formInput}
              />
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
                  d="M6.25812 8.45361H15.7418C15.9097 8.45365 16.0738 8.50345 16.2133 8.59673C16.3529 8.69001 16.4617 8.82258 16.5259 8.97767C16.5901 9.13276 16.607 9.30341 16.5742 9.46805C16.5415 9.63269 16.4607 9.78393 16.342 9.90265L11.6001 14.6445C11.4409 14.8036 11.2251 14.893 11 14.893C10.7749 14.893 10.559 14.8036 10.3998 14.6445L5.65796 9.90265C5.53928 9.78393 5.45846 9.63269 5.42573 9.46805C5.39299 9.30341 5.4098 9.13276 5.47403 8.97767C5.53827 8.82258 5.64704 8.69001 5.78661 8.59673C5.92617 8.50345 6.09026 8.45365 6.25812 8.45361Z"
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
          <button type="submit" className={styles.addButton}>
            Add
          </button>
        </div>
      </form>
       
    </div>
  );
}
