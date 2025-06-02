"use client";
import { useState } from "react";
import styles from "./CompanyDetails.module.css";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useRouter } from "next/navigation";

export default function CompanyProfile() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyId: "",
    address: "",
    phone: "",
    email: "",
    domain: "",
    taxId: "",
    website: "",
    state: "",
    country: "",
    postalCode: "",
    industry: "",
    city: "",
    distributorFeed: "",
  });

  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validate = () => {
    const newErrors = {};

    if (!formData.companyName.trim())
      newErrors.companyName = "Company Name is required.";
    if (!formData.companyId.trim())
      newErrors.companyId = "Company ID is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.domain.trim()) newErrors.domain = "Domain is required.";
    if (!formData.taxId.trim()) newErrors.taxId = "Tax ID is required.";
    if (!formData.website.trim()) {
      newErrors.website = "Website is required.";
    } else if (!/^https?:\/\/\S+\.\S+/.test(formData.website)) {
      newErrors.website = "Invalid website URL.";
    }
    if (!formData.state) newErrors.state = "State is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.postalCode.trim())
      newErrors.postalCode = "Postal Code is required.";
    if (!formData.industry.trim()) newErrors.industry = "Industry is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.distributorFeed)
      newErrors.distributorFeed = "Please select distributor feed frequency.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("/api/company-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save company profile");
      }

      const result = await response.json();
      console.log("Company profile saved:", result);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error saving company profile:", error);
      alert("Something went wrong while saving the form.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleCancel = () => {
    console.log("Form cancelled");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Company Profile</h2>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGrid}>
          <div className={styles.leftColumn}>
            <InputField
              name="companyName"
              label="Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
              error={errors.companyName}
            />
            <div className={styles.phoneGroup}>
              <PhoneInput
                country={"us"}
                value={formData.phone}
                onChange={(phone) => {
                  setFormData({ ...formData, phone });
                  setErrors((prev) => ({ ...prev, phone: "" }));
                }}
                inputClass={`${styles.phoneInputFix} ${
                  errors.phone ? styles.errorInput : ""
                }`}
                buttonClass={styles.countryCodeFix}
                containerClass={styles.phoneContainerFix}
                dropdownClass={styles.dropdownFix}
              />
              {errors.phone && (
                <span className={styles.errorMsg}>{errors.phone}</span>
              )}
            </div>
            <InputField
              name="domain"
              label="Domain"
              value={formData.domain}
              onChange={handleInputChange}
              error={errors.domain}
            />
            <InputField
              name="taxId"
              label="Tax ID"
              value={formData.taxId}
              onChange={handleInputChange}
              error={errors.taxId}
            />
            <SelectField
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              error={errors.state}
              options={["California", "New York", "Texas"]}
              label="State"
            />
            <InputField
              name="postalCode"
              label="Postal Code"
              value={formData.postalCode}
              onChange={handleInputChange}
              error={errors.postalCode}
            />
            <InputField
              name="companyId"
              label="Company ID"
              value={formData.companyId}
              onChange={handleInputChange}
              error={errors.companyId}
            />
          </div>

          <div className={styles.rightColumn}>
            <InputField
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleInputChange}
              error={errors.address}
            />
            <SelectField
              name="distributorFeed"
              value={formData.distributorFeed}
              onChange={handleInputChange}
              error={errors.distributorFeed}
              options={["Daily", "Weekly", "Monthly"]}
              label="Distributor Feed Refresh Frequency"
            />
            <InputField
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              type="email"
            />
            <InputField
              name="website"
              label="Website"
              value={formData.website}
              onChange={handleInputChange}
              error={errors.website}
              type="url"
            />
            <SelectField
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              error={errors.country}
              options={["United States", "Canada", "United Kingdom"]}
              label="Country"
            />
            <InputField
              name="industry"
              label="Industry"
              value={formData.industry}
              onChange={handleInputChange}
              error={errors.industry}
            />
            <InputField
              name="city"
              label="City"
              value={formData.city}
              onChange={handleInputChange}
              error={errors.city}
            />
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button type="submit" className={styles.saveButton}>
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className={styles.cancelButton}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function InputField({ name, label, value, onChange, error, type = "text" }) {
  return (
    <div className={styles.inputGroup}>
      <input
        type={type}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
      />
      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  );
}

function SelectField({ name, value, onChange, error, options, label }) {
  return (
    <div className={styles.inputGroup}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.select} ${error ? styles.errorInput : ""}`}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  );
}
