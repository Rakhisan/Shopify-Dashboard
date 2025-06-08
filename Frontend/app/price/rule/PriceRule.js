"use client";
import React, { useState } from "react";
import styles from "./PriceRule.module.css";

export default function PriceRule() {
  const [selectedApplyTo, setSelectedApplyTo] = useState("All Products");
  const [selectedDailyRefresh, setSelectedDailyRefresh] = useState(
    "Enable auto price update"
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Price Rule</h2>
      <div className={styles.row}>
        <div className={styles.field}>
          <label>Rule Name</label>
          <input type="text" className={styles.input} placeholder="Rule Name" />
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
        <button className={styles.addButton}>Add</button>
      </div>
       
    </div>
  );
}
