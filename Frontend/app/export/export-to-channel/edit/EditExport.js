"use client";
import { useState } from "react";
import styles from "./EditExport.module.css";

export default function EditExport() {
  const [selectedField, setSelectedField] = useState("Title");

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Export to Channels</h2>
        <label className={styles.label}>API Key</label>

        <input
          className={styles.input}
          placeholder="for authentication, uses Shopify Admin API for Shopify"
        />

        <div className={styles.row}>
          <div className={styles.column}>
            <label>Platform</label>
            <div className={styles.selectWrapper}>
              <select>
                <option>Google</option>
                <option>Facebook</option>
                <option>Amazon</option>
              </select>
              <svg
                className={styles.arrowicon}
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75825 0.453125H11.2419C11.4098 0.453161 11.5739 0.502966 11.7135 0.596244C11.853 0.689523 11.9618 0.822087 12.026 0.977177C12.0903 1.13227 12.1071 1.30292 12.0743 1.46756C12.0416 1.6322 11.9608 1.78344 11.8421 1.90216L7.10025 6.644C6.94106 6.80314 6.72519 6.89254 6.50009 6.89254C6.275 6.89254 6.05912 6.80314 5.89993 6.644L1.15809 1.90216C1.03941 1.78344 0.958587 1.6322 0.925847 1.46756C0.893108 1.30292 0.909919 1.13227 0.974153 0.977177C1.03839 0.822087 1.14716 0.689523 1.28673 0.596244C1.42629 0.502966 1.59038 0.453161 1.75825 0.453125Z"
                  fill="#3D3C3C"
                />
              </svg>
            </div>
          </div>

          <div className={styles.column}>
            <label>Merge Rule</label>
            <div className={styles.selectWrapper}>
              <select>
                <option>Overwrite</option>
                <option>Append</option>
              </select>
              <svg
                className={styles.arrowicon}
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75825 0.453125H11.2419C11.4098 0.453161 11.5739 0.502966 11.7135 0.596244C11.853 0.689523 11.9618 0.822087 12.026 0.977177C12.0903 1.13227 12.1071 1.30292 12.0743 1.46756C12.0416 1.6322 11.9608 1.78344 11.8421 1.90216L7.10025 6.644C6.94106 6.80314 6.72519 6.89254 6.50009 6.89254C6.275 6.89254 6.05912 6.80314 5.89993 6.644L1.15809 1.90216C1.03941 1.78344 0.958587 1.6322 0.925847 1.46756C0.893108 1.30292 0.909919 1.13227 0.974153 0.977177C1.03839 0.822087 1.14716 0.689523 1.28673 0.596244C1.42629 0.502966 1.59038 0.453161 1.75825 0.453125Z"
                  fill="#3D3C3C"
                />
              </svg>
            </div>
          </div>

          <div className={styles.column}>
            <label>Import Frequency</label>
            <div className={styles.selectWrapper}>
              <select>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
              <svg
                className={styles.arrowicon}
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75825 0.453125H11.2419C11.4098 0.453161 11.5739 0.502966 11.7135 0.596244C11.853 0.689523 11.9618 0.822087 12.026 0.977177C12.0903 1.13227 12.1071 1.30292 12.0743 1.46756C12.0416 1.6322 11.9608 1.78344 11.8421 1.90216L7.10025 6.644C6.94106 6.80314 6.72519 6.89254 6.50009 6.89254C6.275 6.89254 6.05912 6.80314 5.89993 6.644L1.15809 1.90216C1.03941 1.78344 0.958587 1.6322 0.925847 1.46756C0.893108 1.30292 0.909919 1.13227 0.974153 0.977177C1.03839 0.822087 1.14716 0.689523 1.28673 0.596244C1.42629 0.502966 1.59038 0.453161 1.75825 0.453125Z"
                  fill="#3D3C3C"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.fields}>
          <label>Fields to Import</label>
          <div className={styles.tags}>
            {["Title", "SKU", "Price", "Stock"].map((field) => (
              <div
                key={field}
                className={`${styles.tag} ${
                  selectedField === field ? styles.active : ""
                }`}
                onClick={() => setSelectedField(field)}
              >
                {field}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.continue}>Continue</button>
        </div>
      </div>
       
    </div>
  );
}
