"use client";
import { useState } from "react";
import styles from "./AddProfile.module.css";

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
    name: "Premium Price",
    description: "ABC",
    pricetype: "",
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

  const pricetypeOptions = [
    { value: "", label: "Pricetype" },
    { value: "fixed", label: "Fixed" },
    { value: "percentage", label: "Percentage" },
    { value: "dynamic", label: "Dynamic" },
  ];

  const priceRuleOptions = [
    { value: "", label: "Price Rule" },
    { value: "standard", label: "Standard" },
    { value: "premium", label: "Premium" },
    { value: "discount", label: "Discount" },
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
        <h2 className={styles.formTitle}>Add Profile Price</h2>
      </div>

      <div className={styles.formCard}>
        <div className={styles.formContent}>
          <div className={styles.topRow}>
            <div className={styles.nameGroup}>
              <label className={styles.formLabel}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`${styles.formInput} ${styles.nameInput}`}
                placeholder="Premium Price"
              />
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
                name="pricetype"
                value={formData.pricetype}
                onChange={handleInputChange}
                options={pricetypeOptions}
                placeholder="Pricetype"
              />
            </div>

            <div className={styles.smallSelectGroup}>
              <CustomDropdown
                name="priceRule"
                value={formData.priceRule}
                onChange={handleInputChange}
                options={priceRuleOptions}
                placeholder="Price Rule"
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
              className={styles.addButton}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
