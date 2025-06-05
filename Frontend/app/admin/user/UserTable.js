// Users.jsx
"use client";
import { useState } from "react";
import styles from "./UsersTable.module.css";
import { useRouter } from "next/navigation";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function Users() {
  const router = useRouter();
  const [users, setUsers] = useState([
    {
      id: "#302012",
      name: "John Doe",
      email: "john@company.com",
      role: "1",
      status: "Active",
    },
    {
      id: "#302011",
      name: "Alice Smith",
      email: "jane@company.com",
      role: "3",
      status: "Active",
    },
    {
      id: "#302002",
      name: "Bob Johnson",
      email: "mike@company.com",
      role: "4",
      status: "Inactive",
    },
    {
      id: "#301901",
      name: "Carol Williams",
      email: "sara@company.com",
      role: "2",
      status: "Inactive",
    },
    {
      id: "#301900",
      name: "David Brown",
      email: "david@company.com",
      role: "5",
      status: "Active",
    },
    {
      id: "#301800",
      name: "Eve Davis",
      email: "emma@company.com",
      role: "6",
      status: "Active",
    },
    {
      id: "#301701",
      name: "Frank Miller",
      email: "chris@company.com",
      role: "1",
      status: "Active",
    },
    {
      id: "#301600",
      name: "Grace Wilson",
      email: "lisa@company.com",
      role: "2",
      status: "Inactive",
    },
    {
      id: "#301500",
      name: "Hannah Moore",
      email: "tom@company.com",
      role: "4",
      status: "Inactive",
    },
    {
      id: "#301400",
      name: "Ian Taylor",
      email: "nina@company.com",
      role: "6",
      status: "Active",
    },
  ]);

  const [showActionMenu, setShowActionMenu] = useState(null);
  const [showPageSizeDropdown, setShowPageSizeDropdown] = useState(false);
  const [selectedPageSize, setSelectedPageSize] = useState(10);

  const pageSizeOptions = [10, 20, 50];

  const handleAddUser = () => {
    router.push("/admin/user/adduser");
  };

  const handleEditUser = () => {
    router.push("/admin/user/edituser");
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

  const handleStatusToggle = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
              statusClass:
                user.status === "Active"
                  ? styles.inactiveBadge
                  : styles.activeBadge,
            }
          : user
      )
    );
    setShowActionMenu(null); // Close the action menu after status change
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Users</h2>
        <div className={styles.actions}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search"
              className={styles.searchInput}
            />
            <span className={styles.searchIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
          <button className={styles.addButton} onClick={handleAddUser}>
            <span>+</span> Add User
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.checkboxColumn}>
                <input type="checkbox" />
              </th>
              <th className={styles.idColumn}>Company ID</th>
              <th className={styles.nameColumn}>Name</th>
              <th className={styles.email}>Email</th>
              <th className={styles.role}>Role-id</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className={styles.checkboxColumn}>
                  <input type="checkbox" />
                </td>
                <td className={styles.idColumn}>{user.id}</td>
                <td className={styles.nameColumn}>{user.name}</td>
                <td className={styles.emailid}>{user.email}</td>
                <td className={styles.userid}>{user.role}</td>
                <td>
                  <span
                    className={`${styles.statusBadge} ${
                      styles[user.status.toLowerCase()]
                    }`}
                  >
                    {user.status}
                  </span>
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
                        onClick={handleEditUser}
                      >
                        Edit
                      </div>
                      <div
                        className={styles.actionMenuItem}
                        onClick={() => handleStatusToggle(user.id)}
                      >
                        {user.status === "Active" ? "Inactive" : "Active"}
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
          <div className={styles.paginationInfo}>
            <span>Show</span>
            <div className={styles.customDropdown}>
              <button
                className={styles.dropdownButton}
                onClick={togglePageSizeDropdown}
              >
                {selectedPageSize}
                <AiOutlineCaretDown
                  className={`${styles.dropdownIcon} ${
                    showPageSizeDropdown ? styles.rotated : ""
                  }`}
                />
              </button>

              {showPageSizeDropdown && (
                <div className={styles.dropdownMenu}>
                  {pageSizeOptions.map((option) => (
                    <div
                      key={option}
                      className={`${styles.dropdownItem} ${
                        selectedPageSize === option ? styles.selected : ""
                      }`}
                      onClick={() => handlePageSizeSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
