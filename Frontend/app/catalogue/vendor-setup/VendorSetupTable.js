"use client";
import { useState } from "react";
import styles from "./VendorSetupTable.module.css";
import { Search, Plus } from "lucide-react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function VendorSetup() {
  const [showActionMenu, setShowActionMenu] = useState(null);
  const [showPageSizeDropdown, setShowPageSizeDropdown] = useState(false);
  const [selectedPageSize, setSelectedPageSize] = useState(10);

  const pageSizeOptions = [10, 20, 50];

  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: "Acme Corp",
      initial: "A",
      avatarClass: styles.acmeAvatar,
      connectionType: "FTP",
      progressValue: 1500,
      progressPercent: 70,
      progressClass: styles.greenProgress,
      progressBarClass: styles.progressBarAcmeContainer,
      lastSync: "2025-05-13, 8:00 AM",
      status: "Active",
      statusClass: styles.activeBadge,
    },
    {
      id: 2,
      name: "Beta Innovations",
      initial: "B",
      avatarClass: styles.betaAvatar,
      connectionType: "SFTP",
      progressValue: 1200,
      progressPercent: 65,
      progressClass: styles.redProgress,
      progressBarClass: styles.progressBarBetaContainer,
      lastSync: "2025-05-15, 8:00 AM",
      status: "Active",
      statusClass: styles.activeBadge,
    },
    {
      id: 3,
      name: "Gamma Solutions",
      initial: "G",
      avatarClass: styles.gammaAvatar,
      connectionType: "FTP",
      progressValue: 200,
      progressPercent: 80,
      progressClass: styles.orangeProgress,
      progressBarClass: styles.progressBarGammaContainer,
      lastSync: "2025-05-18, 8:00 AM",
      status: "Inactive",
      statusClass: styles.inactiveBadge,
    },
    {
      id: 4,
      name: "Delta Technologies",
      initial: "D",
      avatarClass: styles.deltaAvatar,
      connectionType: "FTP",
      progressValue: 1800,
      progressPercent: 30,
      progressClass: styles.blueYellowProgress,
      progressBarClass: styles.progressBarDeltaContainer,
      lastSync: "2025-05-10, 8:00 AM",
      status: "Inactive",
      statusClass: styles.inactiveBadge,
    },
  ]);

  const router = useRouter();
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleAddUser = () => {
    router.push("/catalogue/vendor-setup/addvendor");
  };

  const handleEditUser = () => {
    router.push("/catalogue/vendor-setup/editvendor");
  };

  const toggleActionMenu = (index) => {
    setShowActionMenu(showActionMenu === index ? null : index);
  };

  const togglePageSizeDropdown = () => {
    setShowPageSizeDropdown(!showPageSizeDropdown);
  };

  const handlePageSizeSelect = (size) => {
    setSelectedPageSize(size);
    setShowPageSizeDropdown(false);
  };

  const handleStatusToggle = (vendorId) => {
    setVendors(
      vendors.map((vendor) =>
        vendor.id === vendorId
          ? {
              ...vendor,
              status: vendor.status === "Active" ? "Inactive" : "Active",
              statusClass:
                vendor.status === "Active"
                  ? styles.inactiveBadge
                  : styles.activeBadge,
            }
          : vendor
      )
    );
    setShowActionMenu(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Vendor Setup</h2>
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} size={20} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search Vendor Name"
          />
        </div>
        <button className={styles.addButton} onClick={handleAddUser}>
          <Plus size={20} />
          Add Vendor
        </button>

        <div className={styles.filterOptions}>
          <div className={styles.showOptions}>
            <span>Show</span>
            <select
              className={styles.showSelect}
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.columnHead}>Vendor Name</th>
              <th className={styles.columnHeader}>Connection Type</th>
              <th className={styles.columnHeader}>Progress</th>
              <th className={styles.columnHeader}>Last Sync</th>
              <th className={styles.columnHeader}>Status</th>
              <th className={styles.columnHeader}></th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={vendor.id} className={styles.tableRow}>
                <td className={styles.vendorCell}>
                  <div className={styles.vendorInfo}>
                    <div
                      className={`${styles.vendorAvatar} ${vendor.avatarClass}`}
                    >
                      <span>{vendor.initial}</span>
                    </div>
                    <span className={styles.vendorName}>{vendor.name}</span>
                  </div>
                </td>
                <td className={styles.connectionCell}>
                  <div className={styles.connectionType}>
                    <span>{vendor.connectionType}</span>
                    {/* <span className={styles.dropdownArrow}>
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
                    </span> */}
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
                        onClick={() => handleStatusToggle(vendor.id)}
                      >
                        {vendor.status === "Active" ? "Inactive" : "Active"}
                      </div>
                      <div
                        className={styles.actionMenuItem}
                        onClick={handleEditUser}
                      >
                        Edit
                      </div>
                      
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
