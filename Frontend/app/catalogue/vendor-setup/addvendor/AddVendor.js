"use client";
import { useState } from "react";
import Head from "next/head";
import styles from "./AddVendor.module.css";

export default function AddVendor() {
  const [formData, setFormData] = useState({
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
  });

  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCountrySelect = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      country: value,
    }));
    setIsCountryDropdownOpen(false);
  };

  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const SvgArrow = ({ isOpen }) => (
    <svg
      className={`${styles.selectIcon} ${isOpen ? styles.rotated : ""}`}
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
  );

  const CustomDropdown = ({
    value,
    placeholder,
    options,
    isOpen,
    onToggle,
    onSelect,
  }) => (
    <div className={styles.customDropdown}>
      <div
        onClick={onToggle}
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
              onClick={() => onSelect(option.value)}
              className={styles.dropdownOption}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const countryOptions = [
    { label: "United States", value: "US" },
    { label: "India", value: "IN" },
    { label: "United Kingdom", value: "UK" },
    { label: "Canada", value: "CA" },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Add Vendor</title>
        <meta name="description" content="Add a new vendor" />
      </Head>
      <h1 className={styles.title}>Add Vendor</h1>
      <div className={styles.formWrapper}>
        <div className={styles.formGrid}>
          {[
            {
              id: "name",
              label: "Name",
              type: "text",
              placeholder: "Name",
            },
            {
              id: "phone",
              label: "Phone no",
              type: "text",
              placeholder: "Phone Number",
            },
            {
              id: "email",
              label: "Email",
              type: "email",
              placeholder: "text@gmail.com",
            },

            {
              id: "website",
              label: "Website",
              type: "text",
              placeholder: "e.g. example.com",
            },
            {
              id: "address line",
              label: "Address Line1",
              type: "text",
              placeholder: "Address",
            },

            {
              id: "taxId",
              label: "Tax-id",
              type: "text",
              placeholder: "Tax-id",
            },
            {
              id: "address line 2",
              label: "Address Line2",
              type: "text",
              placeholder: "Address",
            },

            {
              id: "city",
              label: "City",
              type: "text",
              placeholder: "City Name",
            },

            {
              id: "state",
              label: "State",
              type: "text",
              placeholder: "State Name",
            },
          ].map((field) => (
            <div className={styles.formGroup} key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              {field.icon ? (
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

          <div className={styles.formGroup}>
            <label htmlFor="postalCode">Postal-code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Postal-code"
              value={formData.postalCode}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="country">Country</label>
            <CustomDropdown
              value={formData.country}
              placeholder="Country"
              options={countryOptions}
              isOpen={isCountryDropdownOpen}
              onToggle={toggleCountryDropdown}
              onSelect={handleCountrySelect}
            />
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button type="button" className={styles.cancelButton}>
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className={styles.addButton}
          >
            Add
          </button>
        </div>
      </div>
         
    </div>
  );
}
