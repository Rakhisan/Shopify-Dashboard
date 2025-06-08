"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ExportChannel.module.css";
import { Search, Plus, ChevronDown, MoreVertical } from "lucide-react";
import amazonLogo from "../../images/logo_amazon.png";
import googleLogo from "../../images/logo_google.png";
import walmartLogo from "../../images/logo_walmart.png";
import shopifyLogo from "../../images/logo.png";
import { useRouter } from "next/navigation";

export default function VendorSetup() {
  const [showActionMenu, setShowActionMenu] = useState(null);

  const router = useRouter();

  const handleEditExport = () => {
    router.push("/export/export-to-channel/edit");
  };

  const toggleActionMenu = (index) => {
    setShowActionMenu(showActionMenu === index ? null : index);
  };

  // Sample vendor data for cleaner rendering
  const vendors = [
    {
      id: 1,
      logo: shopifyLogo,
      filterApplied: "Electronics In-Stock",
      progressValue: 1500,
      progressPercent: 70,
      progressClass: styles.greenProgress,
      progressBarClass: styles.progressBarAcmeContainer,
      lastSync: "2025-05-12 , 8:15 PM",
      status: "Connected",
      statusClass: styles.activeBadge,
    },
    {
      id: 2,
      logo: googleLogo,
      filterApplied: "Trial Offer",
      progressValue: 1200,
      progressPercent: 65,
      progressClass: styles.redProgress,
      progressBarClass: styles.progressBarBetaContainer,
      lastSync: "2025-04-20 , 8:10 PM",
      status: "Setup Required",
      statusClass: styles.nonactiveBadge,
    },
    {
      id: 3,
      logo: amazonLogo,
      filterApplied: "Student Pricing",
      progressValue: 200,
      progressPercent: 80,
      progressClass: styles.orangeProgress,
      progressBarClass: styles.progressBarGammaContainer,
      lastSync: "2025-02-12 , 10:15 PM",
      status: "Error",
      statusClass: styles.inactiveBadge,
    },
    {
      id: 4,
      logo: walmartLogo,
      filterApplied: "Sectional Discount",
      progressValue: 1800,
      progressPercent: 30,
      progressClass: styles.blueYellowProgress,
      progressBarClass: styles.progressBarDeltaContainer,
      lastSync: "2025-01-07 , 11:15 PM",
      status: "Error",
      statusClass: styles.inactiveBadge,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Export to Channels</h2>

        <button className={styles.button}>
          {/* <span className={styles.plusIcon}>+</span> */}
          Add Channel
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.columnHeader}>Icon</th>
              <th className={styles.columnHeader}>Filter Applied </th>
              <th className={styles.columnHeader}>Progress</th>
              <th className={styles.columnHeader}>Last Export</th>
              <th className={styles.columnHeader}>Status</th>
              <th className={styles.columnHeader}></th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={vendor.id} className={styles.tableRow}>
                <td className={styles.vendorCell}>
                  <div className={styles.vendorInfo}>
                    <Image
                      src={vendor.logo}
                      alt="Vendor Logo"
                      className={styles.vendorLogo}
                      style={{ width: 100, height: 30 }}
                    />
                  </div>
                </td>
                <td className={styles.connectionCell}>
                  <div className={styles.filterApplied}>
                    <span>{vendor.filterApplied}</span>
                  </div>
                </td>
                <td className={styles.progressCell}>
                  <div className={styles.progressInfo}>
                    <span className={styles.progressLabel}>
                      Total Product Imported
                    </span>
                    <span className={styles.progressValue}>
                      {vendor.progressValue}
                    </span>
                  </div>
                  <div className={vendor.progressBarClass}>
                    <div
                      className={`${styles.progressBar} ${vendor.progressClass}`}
                      style={{ width: `${vendor.progressPercent}%` }}
                    ></div>
                  </div>
                  <div className={styles.progressPercentage}>
                    {vendor.progressPercent}%
                  </div>
                </td>
                <td className={styles.syncCell}>{vendor.lastSync}</td>
                <td className={styles.statusCell}>
                  <div
                    className={`${styles.statusBadge} ${vendor.statusClass}`}
                  >
                    {vendor.status}
                  </div>
                </td>
                <td className={styles.actionColumn}>
                  <button
                    className={styles.menuButton}
                    onClick={() => toggleActionMenu(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="6" r="1" />
                      <circle cx="12" cy="18" r="1" />
                    </svg>
                  </button>

                  {showActionMenu === index && (
                    <div className={styles.actionMenu}>
                      <div
                        className={styles.actionMenuItem}
                        onClick={handleEditExport}
                      >
                        Edit
                      </div>
                      <div className={styles.actionMenuItem}>Update</div>
                      <div
                        className={`${styles.actionMenuItem} ${styles.deleteAction}`}
                      >
                        Delete
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
