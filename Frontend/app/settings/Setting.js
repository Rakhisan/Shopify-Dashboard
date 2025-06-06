"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./Setting.module.css";
import Link from "next/link";

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("security");
  const [selectedRole, setSelectedRole] = useState("");

  const [showProfile, setShowProfile] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "Shreyash",
    email: "Testing@gmail.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [notifications, setNotifications] = useState({
    inventory: false,
    priceChanges: false,
    sslChanges: true,
  });
  const [permissions, setPermissions] = useState({
    Catalog: {
      view: true,
      edit: false,
      create: true,
      delete: true,
      privilege: true,
    },
    product: {
      view: true,
      edit: false,
      create: false,
      delete: false,
      privilege: false,
    },
    order: {
      view: true,
      edit: true,
      create: true,
      delete: true,
      privilege: false,
    },
  });

  // SVG Icons
  const SecurityIcon = () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          d="M21.6667 13.0003C21.6667 11.8054 20.6949 10.8337 19.5 10.8337H18.4167V7.58366C18.4167 4.59691 15.9868 2.16699 13 2.16699C10.0133 2.16699 7.58334 4.59691 7.58334 7.58366V10.8337H6.50001C5.30509 10.8337 4.33334 11.8054 4.33334 13.0003V21.667C4.33334 22.8619 5.30509 23.8337 6.50001 23.8337H19.5C20.6949 23.8337 21.6667 22.8619 21.6667 21.667V13.0003ZM9.75001 7.58366C9.75001 5.79183 11.2082 4.33366 13 4.33366C14.7918 4.33366 16.25 5.79183 16.25 7.58366V10.8337H9.75001V7.58366Z"
          fill="black"
        />
      </g>
    </svg>
  );

  const NotificationIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          d="M17.3333 4.33301C19.3667 4.33301 21.3167 5.14074 22.7545 6.57852C24.1923 8.0163 25 9.96635 25 11.9997V19.9997C25 20.9721 24.6137 21.9048 23.9261 22.5924C23.2384 23.28 22.3058 23.6663 21.3333 23.6663H10.6667C9.69421 23.6663 8.76157 23.28 8.07394 22.5924C7.38631 21.9048 7 20.9721 7 19.9997V11.9997C7 9.96635 7.80774 8.0163 9.24551 6.57852C10.6833 5.14074 12.6333 4.33301 14.6667 4.33301H17.3333ZM17.3333 6.33301H14.6667C13.1638 6.33301 11.7224 6.93003 10.6597 7.99274C9.59702 9.05544 9 10.4968 9 11.9997V19.9997C9 20.4417 9.17559 20.8656 9.48816 21.1782C9.80072 21.4907 10.2246 21.6663 10.6667 21.6663H21.3333C21.7754 21.6663 22.1993 21.4907 22.5118 21.1782C22.8244 20.8656 23 20.4417 23 19.9997V11.9997C23 10.4968 22.403 9.05544 21.3403 7.99274C20.2776 6.93003 18.8362 6.33301 17.3333 6.33301ZM18.6667 25.6663C18.9319 25.6663 19.1862 25.7717 19.3738 25.9592C19.5613 26.1468 19.6667 26.4011 19.6667 26.6663C19.6667 26.9316 19.5613 27.1859 19.3738 27.3734C19.1862 27.561 18.9319 27.6663 18.6667 27.6663H13.3333C13.0681 27.6663 12.8138 27.561 12.6262 27.3734C12.4387 27.1859 12.3333 26.9316 12.3333 26.6663C12.3333 26.4011 12.4387 26.1468 12.6262 25.9592C12.8138 25.7717 13.0681 25.6663 13.3333 25.6663H18.6667Z"
          fill="black"
        />
      </g>
    </svg>
  );

  const RolesIcon = () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" clipPath="url(#clipath0_939_13948)">
        <path
          d="M16.8936 2.80833C16.7582 2.22369 16.4205 1.70569 15.9403 1.34574C15.4601 0.985788 14.8682 0.807027 14.269 0.840999C13.6698 0.874971 13.1019 1.11949 12.6654 1.53141C12.229 1.94333 11.9521 2.49618 11.8835 3.09239C11.815 3.68861 11.9593 4.28987 12.2909 4.79008C12.6225 5.29028 13.1201 5.65729 13.6959 5.82633C14.2718 5.99536 14.8888 5.95557 15.4382 5.71397C15.9875 5.47237 16.4339 5.04449 16.6985 4.50583C18.3093 4.87264 19.8068 5.6258 21.0616 6.70033C22.3165 7.77487 23.2911 9.13853 23.9015 10.6737L25.4546 10.063C24.7357 8.24208 23.578 6.62704 22.0844 5.36141C20.5909 4.09578 18.8078 3.21876 16.8936 2.80833ZM14.4244 4.24158C14.3107 4.24524 14.1974 4.226 14.0913 4.18501C13.9852 4.14402 13.8884 4.08212 13.8067 4.00299C13.725 3.92385 13.66 3.8291 13.6156 3.72436C13.5713 3.61962 13.5484 3.50702 13.5484 3.39327C13.5484 3.27952 13.5713 3.16693 13.6156 3.06218C13.66 2.95744 13.725 2.86269 13.8067 2.78356C13.8884 2.70442 13.9852 2.64252 14.0913 2.60153C14.1974 2.56055 14.3107 2.54131 14.4244 2.54496C14.6495 2.54496 14.8654 2.63438 15.0245 2.79355C15.1837 2.95272 15.2731 3.16861 15.2731 3.39371C15.2731 3.61881 15.1837 3.83469 15.0245 3.99387C14.8654 4.15304 14.6495 4.24158 14.4244 4.24158ZM10.6908 4.94683L10.0634 3.39458C8.24251 4.11353 6.62747 5.27123 5.36184 6.76477C4.0962 8.25831 3.21919 10.0414 2.80876 11.9556C2.22411 12.0911 1.70611 12.4287 1.34616 12.9089C0.986215 13.3891 0.807454 13.9811 0.841426 14.5802C0.875398 15.1794 1.11992 15.7473 1.53184 16.1838C1.94376 16.6202 2.49661 16.8972 3.09282 16.9657C3.68903 17.0342 4.2903 16.89 4.7905 16.5584C5.29071 16.2268 5.65771 15.7291 5.82675 15.1533C5.99579 14.5774 5.956 13.9604 5.7144 13.411C5.4728 12.8617 5.04492 12.4153 4.50626 12.1507C4.87458 10.538 5.63019 9.03922 6.70775 7.78405C7.7853 6.52888 9.15238 5.55508 10.6908 4.94683ZM3.39326 15.2736C3.2818 15.2736 3.17143 15.2516 3.06846 15.209C2.96548 15.1663 2.87192 15.1038 2.7931 15.025C2.71429 14.9462 2.65177 14.8526 2.60912 14.7496C2.56646 14.6467 2.54451 14.5363 2.54451 14.4248C2.54451 14.3134 2.56646 14.203 2.60912 14.1C2.65177 13.9971 2.71429 13.9035 2.7931 13.8247C2.87192 13.7459 2.96548 13.6833 3.06846 13.6407C3.17143 13.598 3.2818 13.5761 3.39326 13.5761C3.61836 13.5761 3.83425 13.6655 3.99342 13.8247C4.15259 13.9838 4.24201 14.1997 4.24201 14.4248C4.24201 14.6499 4.15259 14.8658 3.99342 15.025C3.83425 15.1842 3.61836 15.2736 3.39326 15.2736ZM14.4244 22.9097C13.951 22.9112 13.4875 23.0447 13.0858 23.2951C12.6841 23.5455 12.3601 23.9029 12.1503 24.3272C10.5392 23.9604 9.04152 23.2072 7.78648 22.1325C6.53145 21.0578 5.55672 19.6939 4.94639 18.1585L3.39414 18.7858C4.11542 20.6098 5.277 22.2268 6.77523 23.4927C8.27345 24.7585 10.0617 25.6338 11.9805 26.0405C12.0907 26.5076 12.3307 26.9341 12.6729 27.2707C13.015 27.6073 13.4453 27.8404 13.9141 27.9431C14.383 28.0457 14.8713 28.0138 15.3228 27.8509C15.7743 27.688 16.1705 27.4008 16.4658 27.0225C16.7612 26.6442 16.9436 26.1901 16.992 25.7125C17.0404 25.235 16.9528 24.7536 16.7395 24.3236C16.5261 23.8937 16.1955 23.5329 15.7859 23.2827C15.3763 23.0325 14.9043 22.9032 14.4244 22.9097ZM14.4244 26.3038C14.1993 26.3038 13.9834 26.2144 13.8242 26.0552C13.6651 25.8961 13.5756 25.6802 13.5756 25.4551C13.5756 25.23 13.6651 25.0141 13.8242 24.8549C13.9834 24.6958 14.1993 24.6063 14.4244 24.6063C14.6495 24.6063 14.8654 24.6958 15.0245 24.8549C15.1837 25.0141 15.2731 25.23 15.2731 25.4551C15.2731 25.6802 15.1837 25.8961 15.0245 26.0552C14.8654 26.2144 14.6495 26.3038 14.4244 26.3038ZM28 14.424C28.0016 13.9696 27.8815 13.5232 27.6524 13.1309C27.4232 12.7386 27.0933 12.4148 26.6968 12.193C26.3003 11.9712 25.8516 11.8596 25.3974 11.8696C24.9432 11.8797 24.5 12.0111 24.1137 12.2502C23.7274 12.4893 23.4121 12.8274 23.2005 13.2294C22.9889 13.6315 22.8888 14.0828 22.9104 14.5366C22.9321 14.9904 23.0747 15.4301 23.3236 15.8102C23.5725 16.1903 23.9186 16.4968 24.3259 16.6981C23.959 18.309 23.2057 19.8065 22.131 21.0614C21.0563 22.3162 19.6925 23.2908 18.1571 23.9011L18.7854 25.4542C20.6093 24.7329 22.2264 23.5713 23.4922 22.0731C24.7581 20.5749 25.6334 18.7866 26.04 16.8678C26.5924 16.7372 27.0852 16.4258 27.4403 15.983C27.7954 15.5402 27.9924 14.9915 28 14.424ZM25.4538 15.2727C25.2287 15.2727 25.0128 15.1833 24.8536 15.0241C24.6944 14.8649 24.605 14.6491 24.605 14.424C24.605 14.1989 24.6944 13.983 24.8536 13.8238C25.0128 13.6646 25.2287 13.5752 25.4538 13.5752C25.6789 13.5752 25.8947 13.6646 26.0539 13.8238C26.2131 13.983 26.3025 14.1989 26.3025 14.424C26.3025 14.6491 26.2131 14.8649 26.0539 15.0241C25.8947 15.1833 25.6789 15.2727 25.4538 15.2727Z"
          fill="black"
        />
        <path
          d="M16.7912 14.306C17.274 13.8346 17.6053 13.23 17.7428 12.5694C17.8804 11.9088 17.8179 11.2223 17.5634 10.5973C17.3089 9.97244 16.874 9.43757 16.3141 9.06104C15.7542 8.68451 15.0947 8.4834 14.42 8.4834C13.7452 8.4834 13.0858 8.68451 12.5259 9.06104C11.966 9.43757 11.531 9.97244 11.2765 10.5973C11.0221 11.2223 10.9596 11.9088 11.0971 12.5694C11.2347 13.23 11.566 13.8346 12.0487 14.306C11.4742 14.6943 11.0036 15.2175 10.6781 15.8298C10.3526 16.442 10.1821 17.1248 10.1815 17.8182V19.5148H18.6664V17.8173C18.6649 17.1232 18.4932 16.44 18.1663 15.8277C17.8393 15.2153 17.3672 14.6934 16.7912 14.306ZM12.7269 11.8778C12.7269 11.6549 12.7708 11.4342 12.8561 11.2282C12.9414 11.0223 13.0664 10.8351 13.224 10.6775C13.3817 10.5199 13.5688 10.3948 13.7748 10.3095C13.9807 10.2242 14.2014 10.1803 14.4244 10.1803C14.6473 10.1803 14.868 10.2242 15.074 10.3095C15.2799 10.3948 15.467 10.5199 15.6247 10.6775C15.7823 10.8351 15.9073 11.0223 15.9926 11.2282C16.078 11.4342 16.1219 11.6549 16.1219 11.8778C16.1219 12.328 15.943 12.7598 15.6247 13.0781C15.3063 13.3965 14.8746 13.5753 14.4244 13.5753C13.9742 13.5753 13.5424 13.3965 13.224 13.0781C12.9057 12.7598 12.7269 12.328 12.7269 11.8778ZM11.8781 17.8173C11.8718 17.479 11.9331 17.1429 12.0582 16.8285C12.1833 16.5142 12.3698 16.2279 12.6068 15.9864C12.8439 15.745 13.1266 15.5532 13.4386 15.4222C13.7506 15.2913 14.0856 15.2239 14.4239 15.2239C14.7623 15.2239 15.0972 15.2913 15.4092 15.4222C15.7212 15.5532 16.004 15.745 16.241 15.9864C16.478 16.2279 16.6646 16.5142 16.7897 16.8285C16.9148 17.1429 16.976 17.479 16.9697 17.8173H11.8781Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_939_13948">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const PermissionsIcon = () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          d="M10.8333 5.41699H3.24999C2.96267 5.41699 2.68712 5.53113 2.48396 5.73429C2.28079 5.93746 2.16666 6.21301 2.16666 6.50033V20.5837C2.16666 20.871 2.28079 21.1465 2.48396 21.3497C2.68712 21.5529 2.96267 21.667 3.24999 21.667H22.75C23.0373 21.667 23.3129 21.5529 23.516 21.3497C23.7192 21.1465 23.8333 20.871 23.8333 20.5837V19.2295"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.41666 12.459H9.74999M5.41666 16.7923H18.4167"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18.4167 11.917C20.2116 11.917 21.6667 10.4619 21.6667 8.66699C21.6667 6.87207 20.2116 5.41699 18.4167 5.41699C16.6217 5.41699 15.1667 6.87207 15.1667 8.66699C15.1667 10.4619 16.6217 11.917 18.4167 11.917Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.8333 15.394C22.7755 13.3264 20.5833 11.917 18.4167 11.917C16.25 11.917 15.1705 12.5307 14.0562 13.542"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  const sidebarItems = [
    {
      id: "security",
      icon: <SecurityIcon />,
      label: "Security",
      desc: "Change Password",
    },
    {
      id: "notifications",
      icon: <NotificationIcon />,
      label: "Notifications",
      desc: "Change the way you receive notifications",
    },
    {
      id: "roles",
      icon: <RolesIcon />,
      label: "Roles",
      desc: "Manage user roles",
    },
    {
      id: "permissions",
      icon: <PermissionsIcon />,
      label: "Permissions",
      desc: "Manage user permissions",
    },
  ];

  const roles = [
    { id: 6641, role: "Role Name", description: "Description" },
    { id: 6642, role: "Admin", description: "Full System Access" },
    { id: 6643, role: "Executive", description: "Full System Access" },
    { id: 6644, role: "General Manager", description: "Management+Inventory" },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNotificationChange = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const handlePermissionChange = (role, permission) => {
    setPermissions({
      ...permissions,
      [role]: {
        ...permissions[role],
        [permission]: !permissions[role][permission],
      },
    });
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setShowProfile(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleUserClick = () => {
    setShowProfile(true);
    setActiveSection("");
    setTimeout(() => {
      const element = document.getElementById("profile");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  // Fixed intersection observer - removed problematic rootMargin
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "profile") {
              setShowProfile(true);
              setActiveSection("");
            } else {
              setShowProfile(false);
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        // Fixed: Better rootMargin for proper last element detection
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.3,
      }
    );

    // Observe profile section
    const profileElement = document.getElementById("profile");
    if (profileElement) {
      observer.observe(profileElement);
    }

    // Observe other sections
    sidebarItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const renderProfileSection = () => (
    <div
      id="profile"
      className={`${styles.section} ${showProfile ? styles.highlighted : ""}`}
    >
      <h2>Profile Information</h2>
      <p>
        Update your photo by dragging this mouse around, and your personal
        details.
      </p>

      <div className={styles.formGroup}>
        <label>Display Name</label>
        <input
          name="displayName"
          value={formData.displayName}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );

  const renderSecuritySection = () => (
    <div
      id="security"
      className={`${styles.section} ${
        activeSection === "security" ? styles.highlighted : ""
      }`}
    >
      <h2>Password</h2>

      <div className={styles.passwordSection}>
        <div className={styles.passwordHeader}>
          <Link href="#" className={styles.forgotPassword}>
            Forgot Password?
          </Link>
        </div>

        <div className={styles.formGroup}>
          <label>Current Password</label>

          <input
            type="password"
            value=""
            readOnly
            className={styles.passwordInput}
          />
        </div>

        <div className={styles.passwordRow}>
          <div className={styles.formGroup}>
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder=""
            />
          </div>
          <div className={styles.formGroup}>
            <label>Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder=""
            />
          </div>
        </div>

        <button className={styles.updateButton}>Update Password</button>
      </div>
    </div>
  );

  const renderNotificationsSection = () => (
    <div
      id="notifications"
      className={`${styles.section} ${
        activeSection === "notifications" ? styles.highlighted : ""
      }`}
    >
      <h2>Notifications</h2>

      <div className={styles.notificationItem}>
        <div className={styles.notificationIcon}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M28.4167 36.5288L20.625 28.7372L23.1917 26.1705L28.4167 31.3955L38.775 21.0372L41.3417 23.6038L28.4167 36.5288ZM38.5 18.333H34.8333V9.16634H31.1667V14.6663H12.8333V9.16634H9.16667V34.833H20.1667V38.4997H9.16667C8.15833 38.4997 7.29544 38.141 6.578 37.4235C5.86056 36.7061 5.50122 35.8426 5.5 34.833V9.16634C5.5 8.15801 5.85933 7.29512 6.578 6.57767C7.29667 5.86023 8.15956 5.5009 9.16667 5.49967H16.8208C17.1569 4.43023 17.8139 3.55206 18.7917 2.86517C19.7694 2.17829 20.8389 1.83423 22 1.83301C23.2222 1.83301 24.3149 2.17706 25.278 2.86517C26.2411 3.55329 26.8901 4.43145 27.225 5.49967H34.8333C35.8417 5.49967 36.7052 5.85901 37.4238 6.57767C38.1425 7.29634 38.5012 8.15923 38.5 9.16634V18.333ZM22 9.16634C22.5194 9.16634 22.9552 8.99034 23.3072 8.63834C23.6592 8.28634 23.8346 7.85123 23.8333 7.33301C23.8321 6.81479 23.6561 6.37967 23.3053 6.02767C22.9546 5.67567 22.5194 5.49967 22 5.49967C21.4806 5.49967 21.0454 5.67567 20.6947 6.02767C20.3439 6.37967 20.1679 6.81479 20.1667 7.33301C20.1654 7.85123 20.3414 8.28695 20.6947 8.64017C21.0479 8.9934 21.483 9.16879 22 9.16634Z"
                fill="black"
              />
            </g>
          </svg>
        </div>
        <div className={styles.notificationContent}>
          <h4>Inventory Change</h4>
          <p>
            We will notify you when a supplier product you are mapping has the
            status "Product not found", "Product out of stock", or "Variants out
            of stock".
          </p>
        </div>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={notifications.inventory}
            onChange={() => handleNotificationChange("inventory")}
          />
          <span className={styles.slider}></span>
        </label>
      </div>

      <div className={styles.notificationItem}>
        <div className={styles.notificationIcon}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M7.88 26.8951C5.305 24.3184 4.01667 23.0318 3.53833 21.3601C3.05833 19.6884 3.46833 17.9134 4.28833 14.3651L4.76 12.3184C5.44833 9.33175 5.79333 7.83842 6.815 6.81508C7.83667 5.79175 9.33167 5.44842 12.3183 4.76008L14.365 4.28675C17.915 3.46842 19.6883 3.05842 21.36 3.53675C23.0317 4.01675 24.3183 5.30508 26.8933 7.88008L29.9433 10.9301C34.4283 15.4134 36.6667 17.6534 36.6667 20.4368C36.6667 23.2218 34.4267 25.4618 29.945 29.9434C25.4617 34.4268 23.2217 36.6668 20.4367 36.6668C17.6533 36.6668 15.4117 34.4267 10.93 29.9451L7.88 26.8951Z"
                stroke="black"
                strokeWidth="1.5"
              />
              <path
                d="M25.65 25.6504C26.625 24.6721 26.7567 23.2221 25.9433 22.4071C25.13 21.5921 23.6783 21.7254 22.7017 22.7021C21.7267 23.6788 20.275 23.8104 19.4617 22.9971C18.6483 22.1838 18.78 20.7321 19.7567 19.7571M19.7567 19.7571L19.1667 19.1671M19.7567 19.7571C20.3083 19.2038 21.0117 18.9238 21.6667 18.9288M26.2383 26.2388L25.6483 25.6488C24.9817 26.3171 24.09 26.5904 23.3333 26.4338"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16.702 17.1558C18.0038 15.8541 18.0038 13.7436 16.702 12.4418C15.4003 11.1401 13.2898 11.1401 11.988 12.4418C10.6863 13.7436 10.6863 15.8541 11.988 17.1559C13.2898 18.4576 15.4003 18.4576 16.702 17.1558Z"
                stroke="black"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>
        <div className={styles.notificationContent}>
          <h4>Price Changes</h4>
          <p>
            When the product cost of the supplier you mapped has changed, We
            will notify you.
          </p>
        </div>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={notifications.priceChanges}
            onChange={() => handleNotificationChange("priceChanges")}
          />
          <span className={styles.slider}></span>
        </label>
      </div>

      <div className={styles.notificationItem}>
        <div className={styles.notificationIcon}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M15 1.875L28 8.375V24.625L15 31.1094L2 24.625V8.375L15 1.875ZM24.7656 9L15 4.125L11.2344 6L20.9375 10.9062L24.7656 9ZM15 13.875L18.7188 12.0312L9 7.125L5.23438 9L15 13.875ZM4 10.625V23.375L14 28.375V15.625L4 10.625ZM16 28.375L26 23.375V10.625L16 15.625V28.375Z"
                fill="black"
              />
            </g>
          </svg>
        </div>
        <div className={styles.notificationContent}>
          <h4>SSL Changes</h4>
          <p>
            We will notify you when the supplier's product SKU name you are
            mapping changes or when an option is added, causing the mapping to
            fail.
          </p>
        </div>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={notifications.sslChanges}
            onChange={() => handleNotificationChange("sslChanges")}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
  const renderRolesSection = () => (
    <div
      id="roles"
      className={`${styles.section} ${
        activeSection === "roles" ? styles.highlighted : ""
      }`}
    >
      <div className={styles.roleHeader}>
        <h2>Roles</h2>
        <button className={styles.addRoleButton}>Add Role</button>
      </div>

      <div className={styles.roleTable}>
        <div className={styles.roleTableHeader}>
          <span className={styles.checkboxWithIdHeader}>
            <input type="checkbox" className={styles.checkbox} />
            <span>ID</span>
          </span>
          <span>Role Name</span>
          <span>Description</span>
          <span>Actions</span>
        </div>

        {roles.map((role) => (
          <div key={role.id} className={styles.roleTableRow}>
            <span className={styles.checkboxWithId}>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.roleId}>{role.id}</span>
            </span>
            <span>{role.role}</span>
            <span>{role.description}</span>
            <span className={styles.actionsColumn}>
              <button className={styles.threeDots}>⋮</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPermissionsSection = () => (
    <div
      id="permissions"
      className={`${styles.section} ${
        activeSection === "permissions" ? styles.highlighted : ""
      }`}
    >
      <div className={styles.permissionHeader}>
        <h2>Permissions</h2>

        <select
          className={styles.savePermissionButton}
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="" disabled>
            Select Role Name
          </option>
          <option value="admin">Catlog Manger</option>
          <option value="editor">Admin</option>
          <option value="viewer">Executive</option>
        </select>
      </div>

      <div className={styles.permissionTable}>
        <div className={styles.permissionTableHeader}>
          <span>Module Name</span>
          <span>View</span>
          <span>Create</span>
          <span>Edit</span>
          <span>Delete</span>
          <span>Privilege</span>
        </div>

        {Object.entries(permissions).map(([moduleName, perms]) => (
          <div key={moduleName} className={styles.permissionTableRow}>
            <span className={styles.moduleName}>
              {moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}
            </span>
            {Object.entries(perms).map(([permission, value]) => (
              <label key={permission} className={styles.switch}>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() =>
                    handlePermissionChange(moduleName, permission)
                  }
                />
                <span className={styles.slider}></span>
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Profile Settings</title>
        <meta name="description" content="User profile settings page" />
      </Head>

      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div
            className={`${styles.userInfo} ${showProfile ? styles.active : ""}`}
            onClick={handleUserClick}
          >
            <div className={styles.avatar}>S</div>
            <div className={styles.userDetails}>
              <h3>Shreyash</h3>
              <p>Testing@gmail.com</p>
            </div>
          </div>

          <nav className={styles.navigation}>
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.navItem} ${
                  activeSection === item.id ? styles.active : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <div className={styles.navContent}>
                  <span className={styles.navLabel}>{item.label}</span>
                  <span className={styles.navDesc}>{item.desc}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>

        <div className={styles.mainContent}>
          {renderProfileSection()}
          {renderSecuritySection()}
          {renderNotificationsSection()}
          {renderRolesSection()}
          {renderPermissionsSection()}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
