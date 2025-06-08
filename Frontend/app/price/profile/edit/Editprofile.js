"use client";
import { useState } from "react";
import styles from "./EditProfile.module.css";

const CustomDropdown = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div className={styles.customDropdown}>
      <label className={styles.formLabel}>{label}</label>
      <div className={styles.dropdownContainer}>
        <div
          className={styles.dropdownHeader}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={value ? styles.selectedText : styles.placeholderText}
          >
            {value || placeholder}
          </span>
          <span
            className={`${styles.dropdownArrow} ${
              isOpen ? styles.arrowUp : ""
            }`}
          >
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.44489 8.45312H14.9286C15.0965 8.45316 15.2605 8.50297 15.4001 8.59624C15.5397 8.68952 15.6484 8.82209 15.7127 8.97718C15.7769 9.13227 15.7937 9.30292 15.761 9.46756C15.7282 9.6322 15.6474 9.78344 15.5287 9.90216L10.7869 14.644C10.6277 14.8031 10.4118 14.8925 10.1867 14.8925C9.96165 14.8925 9.74577 14.8031 9.58658 14.644L4.84473 9.90216C4.72605 9.78344 4.64523 9.6322 4.61249 9.46756C4.57975 9.30292 4.59656 9.13227 4.6608 8.97718C4.72503 8.82209 4.83381 8.68952 4.97337 8.59624C5.11294 8.50297 5.27702 8.45316 5.44489 8.45312Z"
                fill="#3D3C3C"
              />
            </svg>
          </span>
        </div>
        {isOpen && (
          <div className={styles.dropdownOptions}>
            {options.map((option, index) => (
              <div
                key={index}
                className={`${styles.dropdownOption} ${
                  value === option.value ? styles.activeOption : ""
                }`}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function AddProfilePrice() {
  const [formData, setFormData] = useState({
    name: "Standard Price",
    description: "ABC",
    EDK: "",
    priceRule: "",
    excludeVendor: "Vendor 1,vendor 2,",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const handleAdd = () => {
    console.log("Add clicked", formData);
  };

  const EDKOptions = [
    { value: "", label: "EDK" },
    { value: "fixed", label: "Fixed" },
    { value: "percentage", label: "Percentage" },
    { value: "dynamic", label: "Dynamic" },
  ];

  const priceRuleOptions = [
    { value: "", label: "Price Rule" },
    { value: "standard", label: "3" },
    { value: "premium", label: "4" },
    { value: "discount", label: "1" },
  ];

  const vendorOptions = [
    {
      value: "for eg Vendor 1,vendor 2, vender 3",
      label: "for eg Vendor 1,vendor 2, vender 3",
    },
    { value: "vendor1", label: "Vendor 1" },
    { value: "vendor2", label: "Vendor 2" },
    { value: "vendor3", label: "Vendor 3" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <h2 className={styles.formTitle}>Edit Profile Price</h2>
      </div>

      <div className={styles.formCard}>
        <div className={styles.formContent}>
          <div className={styles.topRow}>
            <div className={styles.nameGroup}>
              <label className={styles.formLabel}>Name</label>
              <div className={styles.inputWithIcon}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`${styles.formInput} ${styles.nameInput}`}
                  placeholder="Standard Price"
                />
                <svg
                  className={styles.editIcon}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M5 18.0795V18.9995H5.92L14.98 9.93953L14.06 9.01953L5 18.0795Z"
                    fill="#30B4FF"
                  />
                  <path
                    d="M20.71 7.04C20.8027 6.94749 20.8762 6.8376 20.9264 6.71662C20.9766 6.59565 21.0024 6.46597 21.0024 6.335C21.0024 6.20403 20.9766 6.07435 20.9264 5.95338C20.8762 5.8324 20.8027 5.72251 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04ZM3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM5.92 19H5V18.08L14.06 9.02L14.98 9.94L5.92 19Z"
                    fill="#30B4FF"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.descriptionGroup}>
              <label className={styles.formLabel}>Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={`${styles.formInput} ${styles.nameInput}`}
                placeholder="ABC"
              />
            </div>
          </div>

          <div className={styles.middleRow}>
            <div className={styles.smallSelectGroup}>
              <CustomDropdown
                name="EDK"
                value={formData.EDK}
                onChange={handleInputChange}
                options={EDKOptions}
                placeholder="EDK"
              />
            </div>

            <div className={styles.smallSelectGroup}>
              <CustomDropdown
                name="priceRule"
                value={formData.priceRule}
                onChange={handleInputChange}
                options={priceRuleOptions}
                placeholder="4"
              />
            </div>

            <div className={styles.vendorGroup}>
              <CustomDropdown
                label="Exclude vendor"
                name="excludeVendor"
                value={formData.excludeVendor}
                onChange={handleInputChange}
                options={vendorOptions}
                placeholder="Select vendor"
              />
            </div>
          </div>

          <div className={styles.buttonRow}>
            <button
              type="button"
              onClick={handleCancel}
              className={styles.cancelButton}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAdd}
              className={styles.saveButton}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
