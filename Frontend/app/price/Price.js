"use client";
import React, { useState } from "react";
import styles from "./Price.module.css";
import { useRouter } from "next/navigation";

const statusColor = {
  Active: styles.active,
  Inactive: styles.inactive,
};

export default function Price() {
  const router = useRouter();

  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const [priceData, setPriceData] = useState([
    {
      id: "#302012",
      profilename: "Standard Pricing",
      rulescount: "4 Rules",
      status: "Active",
    },
    {
      id: "#302011",
      profilename: "Premium Pricing",
      rulescount: "8 Rules",
      status: "Active",
    },
    {
      id: "#302002",
      profilename: "Basic Pricing",
      rulescount: "12 Rules",
      status: "Inactive",
    },
    {
      id: "#301901",
      profilename: "Enterprise Pricing",
      rulescount: "10 Rules",
      status: "Inactive",
    },
    {
      id: "#301900",
      profilename: "Student Pricing",
      rulescount: "15 Rules",
      status: "Active",
    },
    {
      id: "#301800",
      profilename: "Family Plan",
      rulescount: "14 Rules",
      status: "Inactive",
    },
    {
      id: "#301701",
      profilename: "Seasonal Discount",
      rulescount: "12 Rules",
      status: "Inactive",
    },
    {
      id: "#301600",
      profilename: "Loyalty Program",
      rulescount: "20 Rules",
      status: "Inactive",
    },
    {
      id: "#301500",
      profilename: "Referral Pricing",
      rulescount: "8 Rules",
      status: "Active",
    },
    {
      id: "#301400",
      profilename: "Trial Offer",
      rulescount: "5 Rules",
      status: "Inactive",
    },
  ]);

  const handlePriceRule = () => {
    router.push("./price/price-rule");
  };
  const handleEditRule = () => {
    router.push("./price/edit-rule");
  };

  const handleStatusToggle = (itemId) => {
    setPriceData(
      priceData.map((item) =>
        item.id === itemId
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item
      )
    );
    setOpenMenuIndex(null); // Close the dropdown menu after status change
  };

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <h2 className={styles.title}>Price Profile</h2>

        <div className={styles.searchWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.searchIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Profile Name"
            className={styles.input}
          />
        </div>

        <button className={styles.button} onClick={handlePriceRule}>
          <span className={styles.plusIcon}>+</span>
          Price Rule
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeaderRow}>
              <th className={styles.checkboxColumn}>
                <input type="checkbox" />
              </th>
              <th className={styles.idHeader}>ID</th>
              <th className={styles.profilenameHeader}>Profile Name</th>
              <th className={styles.rulesCount}>Rules Count</th>
              <th className={styles.statusHeader}>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {priceData.map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td className={`${styles.idCell} ${styles.blackText}`}>
                  {item.id}
                </td>
                <td className={styles.nameCell}>{item.profilename}</td>
                <td className={styles.rulesCell}>{item.rulescount}</td>
                <td className={styles.statusCell}>
                  <span
                    className={`${styles.statusBadge} ${
                      statusColor[item.status] || ""
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className={styles.verticalDotsWrapper}>
                  <span
                    className={styles.verticalDots}
                    onClick={() =>
                      setOpenMenuIndex(openMenuIndex === index ? null : index)
                    }
                  >
                    &#x22EE;
                  </span>
                  {openMenuIndex === index && (
                    <div className={styles.dropdownMenu}>
                      <button onClick={handleEditRule}>Edit</button>
                      <button onClick={() => handleStatusToggle(item.id)}>
                        {item.status === "Active" ? "Inactive" : "Active"}
                      </button>
                      <button>Delete</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.footerRow}>
        <div className={styles.rowsPerPage}>
          <span>Show</span>
          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span className={styles.arrowIcon}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.27337 8H13.7267C13.8586 8.00055 13.9873 8.04019 14.0966 8.1139C14.2059 8.18761 14.2909 8.29208 14.3409 8.4141C14.3908 8.53612 14.4035 8.67021 14.3772 8.79942C14.351 8.92863 14.287 9.04715 14.1934 9.14L10.4734 12.86C10.4114 12.9225 10.3377 12.9721 10.2564 13.0059C10.1752 13.0398 10.088 13.0572 10 13.0572C9.91203 13.0572 9.82489 13.0398 9.74365 13.0059C9.66241 12.9721 9.58868 12.9225 9.5267 12.86L5.8067 9.14C5.71309 9.04715 5.64911 8.92863 5.62285 8.79942C5.59659 8.67021 5.60924 8.53612 5.65919 8.4141C5.70914 8.29208 5.79415 8.18761 5.90347 8.1139C6.0128 8.04019 6.14152 8.00055 6.27337 8Z"
                  fill="#727A90"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className={styles.pagination}>
          <div className={styles.paginationButtons}>
            <button className={styles.paginationButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className={styles.paginationButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
