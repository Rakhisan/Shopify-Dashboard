// components/CatalogueFilter.js

"use client";
import styles from "./ExportFilter.module.css";
import { FaSearch } from "react-icons/fa";
import { MdTune } from "react-icons/md";

import { useState } from "react";

export default function CatalogueFilter() {
  const [filters, setFilters] = useState([
    {
      id: "#302012",
      name: "My Catalog",
      createdBy: "Alex Johnson",

      productCount: "1900",
      rule: "Britways+10%",
      selected: false,
    },
    {
      id: "#302011",
      name: "GadgetHub",
      createdBy: "Emily Davis",
      productCount: "1600",
      rule: "Moduline +12%",
      selected: false,
    },
    {
      id: "#302002",
      name: "GizmoNest",
      createdBy: "Michael Brown",
      productCount: "1700",
      rule: "RackSpace +15%",
      selected: false,
    },
    {
      id: "#301901",
      name: "DeviceSphere",
      createdBy: "Sarah Wilson",
      productCount: "1800",
      rule: "UrbanGrid +18%",
      selected: false,
    },
    {
      id: "#301900",
      name: "TechHaven",
      createdBy: "David Lee",
      productCount: "1900",
      rule: "StoreCraft +20%",
      selected: false,
    },
    {
      id: "#301800",
      name: "GadgetNest",
      createdBy: "Jessica Taylor",
      productCount: "2000",
      rule: "ChillCore +16%",
      selected: false,
    },
    {
      id: "#301701",
      name: "SmartGadget",
      createdBy: "Daniel Martinez",
      productCount: "2100",
      rule: "DisplayNest +14%",
      selected: false,
    },
    {
      id: "#301600",
      name: "TechSphere",
      createdBy: "Laura Anderson",
      productCount: "2200",
      rule: "Shelvix +20%",
      selected: false,
    },
    {
      id: "#301500",
      name: "GizmoHub",
      createdBy: "James Thomas",
      productCount: "2300",
      rule: "Structura +14%",
      selected: false,
    },
    {
      id: "#301400",
      name: "DeviceNest",
      createdBy: "Sophia White",
      productCount: "2400",
      rule: "SpaceWell +12%",
      selected: false,
    },
  ]);

  const [activeMenu, setActiveMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleFilter = () => {
    router.push("/catalogue/your-catalog/filter");
  };

  const handleCheckboxChange = (id) => {
    setFilters(
      filters.map((filter) =>
        filter.id === id ? { ...filter, selected: !filter.selected } : filter
      )
    );
  };

  const toggleMenu = (id) => {
    if (activeMenu === id) {
      setActiveMenu(null);
    } else {
      setActiveMenu(id);
    }
  };

  const handleMenuAction = (action, id) => {
    console.log(`${action} action for filter ${id}`);
    setActiveMenu(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate pagination
  const totalPages = Math.ceil(filters.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filters.slice(indexOfFirstItem, indexOfLastItem);

  // Import font in the head section if using Next.js pages directory
  // const addPublicSansFont = () => {
  //   return (
  //     <style jsx global>{`
  //       @import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap");
  //     `}</style>
  //   );
  // };

  return (
    <div className={styles.container}>
      {/* <div className={styles.tableContainer}> */}
      {/* {addPublicSansFont()} */}
      <div className={styles.header}>
        <h2 className={styles.title}>Export Filters</h2>
        <div className={styles.searchContainer}>
          <div className={styles.inputWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by Created By..."
              className={styles.searchInput}
            />
          </div>

          <button className={styles.addButton} onClick={handleFilter}>
            <MdTune />
            Filter
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.filtersTable}>
          <thead>
            <tr>
              <th className={styles.checkboxColumn}>
                <input
                  type="checkbox"
                  onChange={() => {
                    const allSelected = filters.every(
                      (filter) => filter.selected
                    );
                    setFilters(
                      filters.map((filter) => ({
                        ...filter,
                        selected: !allSelected,
                      }))
                    );
                  }}
                  checked={
                    filters.length > 0 &&
                    filters.every((filter) => filter.selected)
                  }
                />
              </th>
              <th className={styles.idColumn}>ID</th>
              <th className={styles.nameColumn}>Saved Search Name</th>
              <th className={styles.createdByColumn}>Created By</th>
              <th className={styles.countColumn}>No. of Product</th>
              <th className={styles.ruleColumn}>Rule</th>
              <th className={styles.actionsColumn}></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((filter) => (
              <tr
                key={filter.id}
                className={filter.selected ? styles.selectedRow : ""}
              >
                <td className={styles.checkboxColumn}>
                  <input
                    type="checkbox"
                    checked={filter.selected}
                    onChange={() => handleCheckboxChange(filter.id)}
                  />
                </td>
                <td className={styles.idColumn}>{filter.id}</td>
                <td className={styles.nameColumn}>{filter.name}</td>
                <td className={styles.createdByColumn}>{filter.createdBy}</td>
                <td className={styles.countColumn}>{filter.productCount}</td>
                <td className={styles.ruleColumn}>{filter.rule}</td>
                <td className={styles.actionsColumn}>
                  <button
                    className={styles.menuButton}
                    onClick={() => toggleMenu(filter.id)}
                  >
                    <span className={styles.menuDots}>⋮</span>
                  </button>
                  {activeMenu === filter.id && (
                    <div className={styles.menuDropdown}>
                      <button
                        onClick={() => handleMenuAction("edit", filter.id)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleMenuAction("update", filter.id)}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleMenuAction("delete", filter.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
