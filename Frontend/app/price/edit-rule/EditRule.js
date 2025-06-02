"use client";
import React, { useState } from "react";
import styles from "./EditRule.module.css";

export default function EditRule() {
  const [selectedApplyTo, setSelectedApplyTo] = useState("All Products");
  const [selectedDailyRefresh, setSelectedDailyRefresh] = useState(
    "Enable auto price update"
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Edit Price Profiles</h2>
      <div className={styles.row}>
        <div className={styles.field}>
          <label>Profile Name</label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.input}
              placeholder="Standard Pricing"
            />
            <svg
              className={styles.pencilIcon}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M5 18.0795V18.9995H5.92L14.98 9.93953L14.06 9.01953L5 18.0795Z"
                fill="black"
              />
              <path
                d="M20.71 7.04C20.8027 6.94749 20.8762 6.8376 20.9264 6.71662C20.9766 6.59565 21.0024 6.46597 21.0024 6.335C21.0024 6.20403 20.9766 6.07435 20.9264 5.95338C20.8762 5.8324 20.8027 5.72251 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04ZM3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM5.92 19H5V18.08L14.06 9.02L14.98 9.94L5.92 19Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <div className={styles.field}>
          <label>Priority</label>
          <input type="text" className={styles.input} placeholder="Priority" />
        </div>
      </div>
      <div className={styles.rulesCard}>
        <h3 className={styles.cardTitle}>Rules</h3>

        <div className={styles.criteria}>
          <label>Criteria</label>
          <div className={styles.criteriaSelects}>
            <div className={styles.selectContainer}>
              <select className={styles.select}>
                <option value="" disabled selected>
                  Category
                </option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
              </select>
              <div className={styles.arrow}>
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75812 8.45312H15.2418C15.4097 8.45316 15.5738 8.50297 15.7133 8.59624C15.8529 8.68952 15.9617 8.82209 16.0259 8.97718C16.0901 9.13227 16.107 9.30292 16.0742 9.46756C16.0415 9.6322 15.9607 9.78344 15.842 9.90216L11.1001 14.644C10.9409 14.8031 10.7251 14.8925 10.5 14.8925C10.2749 14.8925 10.059 14.8031 9.89981 14.644L5.15796 9.90216C5.03928 9.78344 4.95846 9.6322 4.92573 9.46756C4.89299 9.30292 4.9098 9.13227 4.97403 8.97718C5.03827 8.82209 5.14704 8.68952 5.28661 8.59624C5.42617 8.50297 5.59026 8.45316 5.75812 8.45312Z"
                    fill="#3D3C3C"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.selectContainer}>
              <select className={styles.select}>
                <option value="" disabled selected>
                  Sub Category
                </option>
                <option value="phones">Phones</option>
                <option value="laptops">Laptops</option>
              </select>
              <div className={styles.arrow}>
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75812 8.45312H15.2418C15.4097 8.45316 15.5738 8.50297 15.7133 8.59624C15.8529 8.68952 15.9617 8.82209 16.0259 8.97718C16.0901 9.13227 16.107 9.30292 16.0742 9.46756C16.0415 9.6322 15.9607 9.78344 15.842 9.90216L11.1001 14.644C10.9409 14.8031 10.7251 14.8925 10.5 14.8925C10.2749 14.8925 10.059 14.8031 9.89981 14.644L5.15796 9.90216C5.03928 9.78344 4.95846 9.6322 4.92573 9.46756C4.89299 9.30292 4.9098 9.13227 4.97403 8.97718C5.03827 8.82209 5.14704 8.68952 5.28661 8.59624C5.42617 8.50297 5.59026 8.45316 5.75812 8.45312Z"
                    fill="#3D3C3C"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.selectContainer}>
              <select className={styles.select}>
                <option value="" disabled selected>
                  Manufacturer
                </option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
              </select>
              <div className={styles.arrow}>
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75812 8.45312H15.2418C15.4097 8.45316 15.5738 8.50297 15.7133 8.59624C15.8529 8.68952 15.9617 8.82209 16.0259 8.97718C16.0901 9.13227 16.107 9.30292 16.0742 9.46756C16.0415 9.6322 15.9607 9.78344 15.842 9.90216L11.1001 14.644C10.9409 14.8031 10.7251 14.8925 10.5 14.8925C10.2749 14.8925 10.059 14.8031 9.89981 14.644L5.15796 9.90216C5.03928 9.78344 4.95846 9.6322 4.92573 9.46756C4.89299 9.30292 4.9098 9.13227 4.97403 8.97718C5.03827 8.82209 5.14704 8.68952 5.28661 8.59624C5.42617 8.50297 5.59026 8.45316 5.75812 8.45312Z"
                    fill="#3D3C3C"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.selectContainer}>
              <select className={styles.select}>
                <option value="" disabled selected>
                  Part #
                </option>
                <option value="001">001</option>
                <option value="002">002</option>
              </select>
              <div className={styles.arrow}>
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75812 8.45312H15.2418C15.4097 8.45316 15.5738 8.50297 15.7133 8.59624C15.8529 8.68952 15.9617 8.82209 16.0259 8.97718C16.0901 9.13227 16.107 9.30292 16.0742 9.46756C16.0415 9.6322 15.9607 9.78344 15.842 9.90216L11.1001 14.644C10.9409 14.8031 10.7251 14.8925 10.5 14.8925C10.2749 14.8925 10.059 14.8031 9.89981 14.644L5.15796 9.90216C5.03928 9.78344 4.95846 9.6322 4.92573 9.46756C4.89299 9.30292 4.9098 9.13227 4.97403 8.97718C5.03827 8.82209 5.14704 8.68952 5.28661 8.59624C5.42617 8.50297 5.59026 8.45316 5.75812 8.45312Z"
                    fill="#3D3C3C"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.selectContainer}>
              <select className={styles.select}>
                <option value="" disabled selected>
                  Product
                </option>
                <option value="iphone">iPhone</option>
                <option value="galaxy">Galaxy</option>
              </select>
              <div className={styles.arrow}>
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75812 8.45312H15.2418C15.4097 8.45316 15.5738 8.50297 15.7133 8.59624C15.8529 8.68952 15.9617 8.82209 16.0259 8.97718C16.0901 9.13227 16.107 9.30292 16.0742 9.46756C16.0415 9.6322 15.9607 9.78344 15.842 9.90216L11.1001 14.644C10.9409 14.8031 10.7251 14.8925 10.5 14.8925C10.2749 14.8925 10.059 14.8031 9.89981 14.644L5.15796 9.90216C5.03928 9.78344 4.95846 9.6322 4.92573 9.46756C4.89299 9.30292 4.9098 9.13227 4.97403 8.97718C5.03827 8.82209 5.14704 8.68952 5.28661 8.59624C5.42617 8.50297 5.59026 8.45316 5.75812 8.45312Z"
                    fill="#3D3C3C"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.costRange}>
          <label>Cost Range</label>
          <div className={styles.rangeSelects}>
            <div className={styles.selectContainer}>
              <select className={styles.select}>
                <option value="" disabled selected>
                  Min
                </option>
                <option value="100">100</option>
                <option value="200">200</option>
              </select>
              <div className={styles.arrow}>
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75812 8.45312H15.2418C15.4097 8.45316 15.5738 8.50297 15.7133 8.59624C15.8529 8.68952 15.9617 8.82209 16.0259 8.97718C16.0901 9.13227 16.107 9.30292 16.0742 9.46756C16.0415 9.6322 15.9607 9.78344 15.842 9.90216L11.1001 14.644C10.9409 14.8031 10.7251 14.8925 10.5 14.8925C10.2749 14.8925 10.059 14.8031 9.89981 14.644L5.15796 9.90216C5.03928 9.78344 4.95846 9.6322 4.92573 9.46756C4.89299 9.30292 4.9098 9.13227 4.97403 8.97718C5.03827 8.82209 5.14704 8.68952 5.28661 8.59624C5.42617 8.50297 5.59026 8.45316 5.75812 8.45312Z"
                    fill="#3D3C3C"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.selectContainer}>
              <select className={styles.select}>
                <option value="" disabled selected>
                  Max
                </option>
                <option value="1000">1000</option>
                <option value="2000">2000</option>
              </select>
              <div className={styles.arrow}>
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75812 8.45312H15.2418C15.4097 8.45316 15.5738 8.50297 15.7133 8.59624C15.8529 8.68952 15.9617 8.82209 16.0259 8.97718C16.0901 9.13227 16.107 9.30292 16.0742 9.46756C16.0415 9.6322 15.9607 9.78344 15.842 9.90216L11.1001 14.644C10.9409 14.8031 10.7251 14.8925 10.5 14.8925C10.2749 14.8925 10.059 14.8031 9.89981 14.644L5.15796 9.90216C5.03928 9.78344 4.95846 9.6322 4.92573 9.46756C4.89299 9.30292 4.9098 9.13227 4.97403 8.97718C5.03827 8.82209 5.14704 8.68952 5.28661 8.59624C5.42617 8.50297 5.59026 8.45316 5.75812 8.45312Z"
                    fill="#3D3C3C"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.horizontalLine}></div>

        <div className={styles.pricingSection}>
          <div className={styles.pricingMethod}>
            <label>Pricing Method</label>
            <div className={styles.selectContainer}>
              <select className={styles.select}>
                <option value="Price" selected>
                  Price
                </option>
                <option value="Margin">Margin</option>
                <option value="Markup">Markup</option>
              </select>
              <div className={styles.arrow}>
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75812 8.45312H15.2418C15.4097 8.45316 15.5738 8.50297 15.7133 8.59624C15.8529 8.68952 15.9617 8.82209 16.0259 8.97718C16.0901 9.13227 16.107 9.30292 16.0742 9.46756C16.0415 9.6322 15.9607 9.78344 15.842 9.90216L11.1001 14.644C10.9409 14.8031 10.7251 14.8925 10.5 14.8925C10.2749 14.8925 10.059 14.8031 9.89981 14.644L5.15796 9.90216C5.03928 9.78344 4.95846 9.6322 4.92573 9.46756C4.89299 9.30292 4.9098 9.13227 4.97403 8.97718C5.03827 8.82209 5.14704 8.68952 5.28661 8.59624C5.42617 8.50297 5.59026 8.45316 5.75812 8.45312Z"
                    fill="#3D3C3C"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.value}>
            <label>Value</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Auto Generated"
            />
          </div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.applyTo}>
          <label>Apply to</label>
          <div className={styles.radioOptions}>
            <div
              className={`${styles.radioOption} ${
                selectedApplyTo === "All Products" ? styles.selected : ""
              }`}
              onClick={() => setSelectedApplyTo("All Products")}
            >
              <span className={styles.radioCircle}></span>
              <span>All Products</span>
            </div>

            <div
              className={`${styles.radioOption} ${
                selectedApplyTo === "Specific Vendors" ? styles.selected : ""
              }`}
              onClick={() => setSelectedApplyTo("Specific Vendors")}
            >
              <span className={styles.radioCircle}></span>
              <span>Specific Vendors</span>
            </div>

            <div
              className={`${styles.radioOption} ${
                selectedApplyTo === "Categories" ? styles.selected : ""
              }`}
              onClick={() => setSelectedApplyTo("Categories")}
            >
              <span className={styles.radioCircle}></span>
              <span>Categories</span>
            </div>
          </div>
        </div>

        <div className={styles.dailyRefresh}>
          <label>Daily Refresh</label>
          <div className={styles.radioOptions}>
            <div
              className={`${styles.radioOption} ${
                selectedDailyRefresh === "Enable auto price update"
                  ? styles.selected
                  : ""
              }`}
              onClick={() =>
                setSelectedDailyRefresh("Enable auto price update")
              }
            >
              <span className={styles.radioCircle}></span>
              <span>Enable auto price update</span>
            </div>

            <div
              className={`${styles.radioOption} ${
                selectedDailyRefresh === "Disable auto price update"
                  ? styles.selected
                  : ""
              }`}
              onClick={() =>
                setSelectedDailyRefresh("Disable auto price update")
              }
            >
              <span>Disable auto price update</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.continueButton}>Continue</button>
      </div>
       
    </div>
  );
}
