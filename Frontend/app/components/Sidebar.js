"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import { RxDashboard } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";
import { IoWalletOutline } from "react-icons/io5";
import { MdShowChart } from "react-icons/md";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
  const [expandedMenus, setExpandedMenus] = useState({
    admin: true,
    company: true,
    users: false,
    catalogue: false,
    export: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Enhanced dark mode effect
  useEffect(() => {
    const applyDarkMode = () => {
      const elementsToStyle = [
        document.documentElement,
        document.body,
        ...document.querySelectorAll("*"),
      ];

      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode-active");
        document.body.classList.add("dark-mode-active");

        // Apply dark styles to html and body
        // document.documentElement.style.backgroundColor = '#121212';
        // document.documentElement.style.color = '#ffffff';
        // document.body.style.backgroundColor = '#121212';
        // document.body.style.color = '#ffffff';

        // Store dark mode preference
        // localStorage.setItem('isDarkMode', 'true');
      } else {
        // Remove dark mode class
        // document.documentElement.classList.remove('dark-mode-active');
        // document.body.classList.remove('dark-mode-active');

        // // Apply light styles to html and body
        // document.documentElement.style.backgroundColor = '#ffffff';
        // document.documentElement.style.color = '#000000';
        // document.body.style.backgroundColor = '#ffffff';
        // document.body.style.color = '#000000';

        // Store light mode preference
        localStorage.setItem("isDarkMode", "false");
      }
    };

    applyDarkMode();

    // Cleanup function
    return () => {
      document.documentElement.classList.remove("dark-mode-active");
      document.body.classList.remove("dark-mode-active");
      document.documentElement.style.backgroundColor = "";
      document.documentElement.style.color = "";
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDarkMode]);

  // Load saved theme preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme === "true") {
      setIsDarkMode(true);
    }
  }, []);

  const toggleMenu = (menu) => {
    setExpandedMenus({
      ...expandedMenus,
      [menu]: !expandedMenus[menu],
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuButton}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <div
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""
            }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={closeMobileMenu}></div>
      )}
      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${isMobileMenuOpen ? styles.mobileOpen : ""
          } ${isDarkMode ? styles.dark : styles.light}`}
      >
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/dashboard" onClick={closeMobileMenu}>
                <div className={styles.navItem}>
                  <div className={styles.icon}>
                    <RxDashboard />
                  </div>
                  <span>Dashboard</span>
                </div>
              </Link>
            </li>

            <li>
              <div
                className={styles.navItem}
                onClick={() => toggleMenu("admin")}
              >
                <div className={styles.icon}>
                  <BsPerson />
                </div>
                <span>Admin</span>
                <div
                  className={`${styles.chevron} ${expandedMenus.admin ? styles.expanded : ""
                    }`}
                >
                  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {expandedMenus.admin && (
                <ul className={`${styles.submenu} ${styles.submenuWithLines}`}>
                  <li className={styles.subItemWithLine}>
                    <Link href="/admin/company" onClick={closeMobileMenu}>
                      <div
                        className={`${styles.navItem} ${styles.subItem}`}
                        onClick={() => toggleMenu("company")}
                      >
                        <span>Company Profile</span>
                        <div
                          className={`${styles.chevron} ${expandedMenus.company ? styles.expanded : ""
                            }`}
                        ></div>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.subItemWithLine}>
                    <Link href="/admin/user" onClick={closeMobileMenu}>
                      <div
                        className={`${styles.navItem} ${styles.subItem} ${styles.active}`}
                        onClick={() => toggleMenu("users")}
                      >
                        <span>Users</span>
                        <div
                          className={`${styles.chevron} ${expandedMenus.users ? styles.expanded : ""
                            }`}
                        ></div>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.subItemWithLine}>
                    <Link href="/admin/user-roles" onClick={closeMobileMenu}>
                      <div
                        className={`${styles.navItem} ${styles.subItem} ${styles.active}`}
                        onClick={() => toggleMenu("user-roles")}
                      >
                        <span>User Roles</span>
                        <div
                          className={`${styles.chevron} ${expandedMenus.users ? styles.expanded : ""
                            }`}
                        ></div>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <div
                className={styles.navItem}
                onClick={() => toggleMenu("catalogue")}
              >
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.25 7.47202C18.2446 7.47202 19.1984 7.86711 19.9017 8.57037C20.6049 9.27363 21 10.2275 21 11.222V16.222C21 17.2166 20.6049 18.1704 19.9017 18.8737C19.1984 19.5769 18.2446 19.972 17.25 19.972H6.75C5.75544 19.972 4.80161 19.5769 4.09835 18.8737C3.39509 18.1704 3 17.2166 3 16.222V11.222C3 10.2275 3.39509 9.27363 4.09835 8.57037C4.80161 7.86711 5.75544 7.47202 6.75 7.47202H17.25ZM17.25 8.97202H6.75C6.15326 8.97202 5.58097 9.20907 5.15901 9.63103C4.73705 10.053 4.5 10.6253 4.5 11.222V16.222C4.5 16.8188 4.73705 17.3911 5.15901 17.813C5.58097 18.235 6.15326 18.472 6.75 18.472H17.25C17.8467 18.472 18.419 18.235 18.841 17.813C19.2629 17.3911 19.5 16.8188 19.5 16.222V11.222C19.5 10.6253 19.2629 10.053 18.841 9.63103C18.419 9.20907 17.8467 8.97202 17.25 8.97202ZM15.25 4.02002C15.4489 4.02002 15.6397 4.09904 15.7803 4.23969C15.921 4.38034 16 4.57111 16 4.77002C16 4.96893 15.921 5.1597 15.7803 5.30035C15.6397 5.441 15.4489 5.52002 15.25 5.52002H8.75C8.55109 5.52002 8.36032 5.441 8.21967 5.30035C8.07902 5.1597 8 4.96893 8 4.77002C8 4.57111 8.07902 4.38034 8.21967 4.23969C8.36032 4.09904 8.55109 4.02002 8.75 4.02002H15.25Z" fill="#727272" />
                  </svg>

                </div>
                <span>Catalog</span>
                <div
                  className={`${styles.chevron} ${expandedMenus.catalogue ? styles.expanded : ""
                    }`}
                >
                  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {expandedMenus.catalogue && (
                <ul className={`${styles.submenu} ${styles.submenuWithLines}`}>
                  <li className={styles.subItemWithLine}>
                    <Link
                      href="/catalogue/vendor-setup"
                      onClick={closeMobileMenu}
                    >
                      <div
                        className={`${styles.navItem} ${styles.subItem} ${expandedMenus.vendorsetup ? styles.active : ""
                          }`}
                        onClick={() => toggleMenu("vendor-setup")}
                      >
                        <span>Vendor Setup</span>
                        <div
                          className={`${styles.chevron} ${expandedMenus.vendorsetup ? styles.expanded : ""
                            }`}
                        ></div>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.subItemWithLine}>
                    <Link
                      href="/catalogue/your-catalog"
                      onClick={closeMobileMenu}
                    >
                      <div
                        className={`${styles.navItem} ${styles.subItem}`}
                        onClick={() => toggleMenu("your-catalog")}
                      >
                        <span> Catalog</span>
                        <div
                          className={`${styles.chevron} ${expandedMenus.yourcatalog ? styles.expanded : ""
                            }`}
                        ></div>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.subItemWithLine}>
                    <Link
                      href="/catalogue/export-filter"
                      onClick={closeMobileMenu}
                    >
                      <div
                        className={`${styles.navItem} ${styles.subItem}`}
                        onClick={() => toggleMenu("export-filter")}
                      >
                        <span>Export Filters</span>
                        <div
                          className={`${styles.chevron} ${expandedMenus.exportfilter ? styles.expanded : ""
                            }`}
                        ></div>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div
                className={styles.navItem}
                onClick={() => toggleMenu("price")}
              >
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.935 7.58891L20.773 10.8209C20.919 11.2549 21 11.7199 21 12.2039V15.7169C21 16.275 20.8901 16.8277 20.6765 17.3433C20.4629 17.859 20.1499 18.3275 19.7552 18.7221C19.3606 19.1168 18.892 19.4298 18.3764 19.6434C17.8608 19.857 17.3081 19.9669 16.75 19.9669H7.25C6.12283 19.9669 5.04183 19.5191 4.2448 18.7221C3.44777 17.9251 3 16.8441 3 15.7169V12.2039C3 11.9479 3.023 11.6979 3.066 11.4549H3.01V10.1369C3.01 9.31805 3.27803 8.52169 3.77315 7.86947C4.26827 7.21725 4.96327 6.74502 5.752 6.52491L14.06 4.20491C14.6679 4.03522 15.3036 3.98839 15.9298 4.06717C16.5561 4.14594 17.1604 4.34874 17.7073 4.6637C18.2543 4.97867 18.733 5.39949 19.1155 5.90157C19.498 6.40366 19.7766 6.97693 19.935 7.58791V7.58891ZM16.75 9.45491H7.25C6.52065 9.45491 5.82118 9.74464 5.30546 10.2604C4.78973 10.7761 4.5 11.4756 4.5 12.2049V15.7179C4.5 16.4473 4.78973 17.1467 5.30546 17.6625C5.82118 18.1782 6.52065 18.4679 7.25 18.4679H16.75C17.4793 18.4679 18.1788 18.1782 18.6945 17.6625C19.2103 17.1467 19.5 16.4473 19.5 15.7179V12.2049C19.5 11.4756 19.2103 10.7761 18.6945 10.2604C18.1788 9.74464 17.4793 9.45491 16.75 9.45491ZM14.463 5.65091L6.155 7.97091C5.829 8.06191 5.537 8.22191 5.292 8.43291C5.89648 8.11777 6.56831 7.95376 7.25 7.95491H16.75C17.409 7.95491 18.033 8.10491 18.59 8.37291L18.483 7.96591C18.3747 7.54782 18.1841 7.15551 17.9223 6.81193C17.6606 6.46834 17.3331 6.18036 16.9588 5.96482C16.5845 5.74929 16.171 5.61051 15.7425 5.55661C15.314 5.50272 14.879 5.53477 14.463 5.65091Z" fill="#727272" />
                  </svg>

                </div>
                <span>Price</span>
                <div
                  className={`${styles.chevron} ${expandedMenus.price ? styles.expanded : ""
                    }`}
                >
                  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {expandedMenus.price && (
                <ul className={`${styles.submenu} ${styles.submenuWithLines}`}>
                  <li className={styles.subItemWithLine}>
                    <Link href="/price/profile" onClick={closeMobileMenu}>
                      <div
                        className={`${styles.navItem} ${styles.subItem} ${expandedMenus.profile ? styles.active : ""
                          }`}
                        onClick={() => toggleMenu("profile")}
                      >
                        <span>Price Profile</span>
                        <div
                          className={`${styles.chevron} ${expandedMenus.profile ? styles.expanded : ""
                            }`}
                        ></div>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.subItemWithLine}>
                    <Link href="/price/rule" onClick={closeMobileMenu}>
                      <div
                        className={`${styles.navItem} ${styles.subItem}`}
                        onClick={() => toggleMenu("rule")}
                      >
                        <span> Price Rule</span>
                        <div
                          className={`${styles.chevron} ${expandedMenus.rule ? styles.expanded : ""
                            }`}
                        ></div>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* <li>
              <Link href="/price" onClick={closeMobileMenu}>
                <div className={styles.navItem}>
                  <div className={styles.icon}>
                    <IoWalletOutline />
                  </div>
                  <span>Price</span>
                </div>
              </Link>
            </li> */}

            <li>
              <div
                className={styles.navItem}
                onClick={() => toggleMenu("export")}
              >
                <div className={styles.icon}>
                  <MdShowChart />
                </div>
                <span>Export</span>
                <div
                  className={`${styles.chevron} ${expandedMenus.export ? styles.expanded : ""
                    }`}
                >
                  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {expandedMenus.export && (
                <ul className={`${styles.submenu} ${styles.submenuWithLines}`}>
                  <li className={styles.subItemWithLine}>
                    <Link
                      href="/export/export-dashboard"
                      onClick={closeMobileMenu}
                    >
                      <div
                        className={`${styles.navItem} ${styles.subItem} ${expandedMenus.exportdashboard ? styles.active : ""
                          }`}
                        onClick={() => toggleMenu("export-dashboard")}
                      >
                        <span>Dashboard</span>
                        <div
                          className={`${styles.chevron} ${expandedMenus.exportdashboard ? styles.expanded : ""
                            }`}
                        ></div>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.subItemWithLine}>
                    <Link
                      href="/export/export-to-channel"
                      onClick={closeMobileMenu}
                    >
                      <div
                        className={`${styles.navItem} ${styles.subItem}`}
                        onClick={() => toggleMenu("export-to-channel")}
                      >
                        <span>Export to Channels</span>
                        <div
                          className={`${styles.chevron} ${expandedMenus.exporttochannel ? styles.expanded : ""
                            }`}
                        ></div>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.subItemWithLine}>
                    <Link
                      href="/export/import-from-channel"
                      onClick={closeMobileMenu}
                    >
                      <div
                        className={`${styles.navItem} ${styles.subItem}`}
                        onClick={() => toggleMenu("import-from-channel")}
                      >
                        <span>Import from Channel</span>
                        <div
                          className={`${styles.chevron} ${expandedMenus.importfromchannel
                            ? styles.expanded
                            : ""
                            }`}
                        ></div>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/settings" onClick={closeMobileMenu}>
                <div className={styles.navItem}>
                  <div className={styles.icon}>
                    <SlSettings />
                  </div>
                  <span>Settings</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.bottomSection}>
          {/* Logout Button */}
          <div className={styles.logoutButton} onClick={handleLogout}>
            <div className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H8C8.28333 0 8.521 0.0960001 8.713 0.288C8.905 0.48 9.00067 0.717333 9 1C8.99933 1.28267 8.90333 1.52033 8.712 1.713C8.52067 1.90567 8.28333 2.00133 8 2H2V16H8C8.28333 16 8.521 16.096 8.713 16.288C8.905 16.48 9.00067 16.7173 9 17C8.99933 17.2827 8.90333 17.5203 8.712 17.713C8.52067 17.9057 8.28333 18.0013 8 18H2ZM14.175 10H7C6.71667 10 6.47933 9.904 6.288 9.712C6.09667 9.52 6.00067 9.28267 6 9C5.99933 8.71733 6.09533 8.48 6.288 8.288C6.48067 8.096 6.718 8 7 8H14.175L12.3 6.125C12.1167 5.94167 12.025 5.71667 12.025 5.45C12.025 5.18333 12.1167 4.95 12.3 4.75C12.4833 4.55 12.7167 4.44567 13 4.437C13.2833 4.42833 13.525 4.52433 13.725 4.725L17.3 8.3C17.5 8.5 17.6 8.73333 17.6 9C17.6 9.26667 17.5 9.5 17.3 9.7L13.725 13.275C13.525 13.475 13.2877 13.571 13.013 13.563C12.7383 13.555 12.5007 13.4507 12.3 13.25C12.1167 13.05 12.0293 12.8127 12.038 12.538C12.0467 12.2633 12.1423 12.034 12.325 11.85L14.175 10Z" fill="black" />
              </svg>



            </div>
            <span>Log Out</span>
          </div>
          {/* Theme Toggle Button */}

          <div
            onClick={toggleTheme}
            className="w-16 h-28 bg-white rounded-full flex flex-col items-center justify-around cursor-pointer p-2 mx-6"
          >
            {/* Moon SVG */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${!isDarkMode ? "bg-gray-100 shadow" : ""
                }`}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4387 11.3348C18.0634 11.2822 18.468 11.9795 18.112 12.4955C17.6665 13.141 17.4286 13.9072 17.43 14.6915C17.43 16.8315 19.1647 18.5668 21.3054 18.5668C22.0897 18.5683 22.8558 18.3304 23.5014 17.8848C24.0174 17.5288 24.7147 17.9342 24.662 18.5582C24.5007 20.2625 23.6912 21.8398 22.4005 22.9646C21.1099 24.0893 19.4368 24.6756 17.7264 24.6025C16.016 24.5294 14.399 23.8024 13.2091 22.5715C12.0192 21.3407 11.3473 19.7001 11.332 17.9882C11.3325 16.3161 11.9601 14.7051 13.0907 13.4732C14.2213 12.2414 15.7728 11.4784 17.4387 11.3348ZM16.1787 13.1262L16.0827 13.1635C14.1614 13.9308 12.816 15.8108 12.816 17.9882C12.816 19.3655 13.3632 20.6865 14.3371 21.6604C15.3111 22.6344 16.632 23.1815 18.0094 23.1815C20.1867 23.1815 22.0667 21.8362 22.834 19.9148L22.8707 19.8182L22.6474 19.8822C22.3007 19.9715 21.9434 20.0262 21.58 20.0448L21.306 20.0515C19.8847 20.0513 18.5216 19.4866 17.5166 18.4816C16.5116 17.4766 15.9469 16.1135 15.9467 14.6922C15.9467 14.2342 16.0047 13.7842 16.116 13.3508L16.1794 13.1268L16.1787 13.1262Z" fill="black" />
              </svg>

            </div>

            {/* Sun SVG */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${isDarkMode ? "bg-white shadow" : ""
                }`}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" fill="#F1F1F1" />
                <g clipPath="url(#clip0_208_1466)">
                  <path d="M17.9987 23.118C18.2 23.1182 18.3931 23.1983 18.5354 23.3406C18.6778 23.483 18.7579 23.676 18.758 23.8774V24.9054C18.758 25.1068 18.6781 25.3 18.5357 25.4425C18.3933 25.585 18.2001 25.6652 17.9987 25.6654C17.7974 25.6652 17.6043 25.5851 17.462 25.4428C17.3196 25.3004 17.2395 25.1074 17.2394 24.906V23.878C17.2394 23.6766 17.3193 23.4834 17.4617 23.3409C17.6041 23.1984 17.7972 23.1182 17.9987 23.118ZM13.3047 21.6187C13.4472 21.4764 13.6403 21.3965 13.8417 21.3965C14.0431 21.3965 14.2362 21.4764 14.3787 21.6187C14.521 21.7612 14.6009 21.9543 14.6009 22.1557C14.6009 22.3571 14.521 22.5502 14.3787 22.6927L13.6514 23.42C13.5089 23.5623 13.3157 23.6422 13.1144 23.6422C12.913 23.6422 12.7199 23.5623 12.5774 23.42C12.4351 23.2775 12.3552 23.0844 12.3552 22.883C12.3552 22.6817 12.4351 22.4885 12.5774 22.346L13.3047 21.6187ZM21.6187 21.6187C21.7612 21.4764 21.9543 21.3965 22.1557 21.3965C22.3571 21.3965 22.5502 21.4764 22.6927 21.6187L23.42 22.346C23.5623 22.4885 23.6422 22.6817 23.6422 22.883C23.6422 23.0844 23.5623 23.2775 23.42 23.42C23.2775 23.5623 23.0844 23.6422 22.883 23.6422C22.6817 23.6422 22.4885 23.5623 22.346 23.42L21.6187 22.6927C21.4764 22.5502 21.3965 22.3571 21.3965 22.1557C21.3965 21.9543 21.4764 21.7612 21.6187 21.6187ZM14.956 14.956C16.6367 13.2754 19.3614 13.2754 21.042 14.956C22.7227 16.6367 22.7227 19.3614 21.042 21.042C19.3614 22.7227 16.6367 22.7227 14.956 21.042C13.2754 19.3614 13.2754 16.6367 14.956 14.956ZM16.03 16.03C15.5083 16.5525 15.2153 17.2607 15.2153 17.999C15.2153 18.7374 15.5083 19.4456 16.03 19.968C16.5525 20.4897 17.2607 20.7828 17.999 20.7828C18.7374 20.7828 19.4456 20.4897 19.968 19.968C20.4897 19.4456 20.7828 18.7374 20.7828 17.999C20.7828 17.2607 20.4897 16.5525 19.968 16.03C19.4456 15.5083 18.7374 15.2153 17.999 15.2153C17.2607 15.2153 16.5525 15.5083 16.03 16.03ZM24.906 17.2394C25.1074 17.2395 25.3004 17.3196 25.4428 17.462C25.5851 17.6043 25.6652 17.7974 25.6654 17.9987C25.6652 18.2 25.5851 18.3931 25.4428 18.5354C25.3004 18.6778 25.1074 18.7579 24.906 18.758H23.878C23.6766 18.758 23.4834 18.6781 23.3409 18.5357C23.1984 18.3933 23.1182 18.2001 23.118 17.9987C23.1182 17.7974 23.1983 17.6043 23.3406 17.462C23.483 17.3196 23.676 17.2395 23.8774 17.2394H24.906ZM12.12 17.2394C12.3214 17.2395 12.5144 17.3196 12.6568 17.462C12.7991 17.6043 12.8792 17.7974 12.8794 17.9987C12.8792 18.2 12.7991 18.3931 12.6568 18.5354C12.5144 18.6778 12.3214 18.7579 12.12 18.758H11.0914C10.89 18.7579 10.697 18.6778 10.5546 18.5354C10.4123 18.3931 10.3322 18.2 10.332 17.9987C10.3322 17.7974 10.4123 17.6043 10.5546 17.462C10.697 17.3196 10.89 17.2395 11.0914 17.2394H12.12ZM22.346 12.5774C22.4885 12.4351 22.6817 12.3552 22.883 12.3552C23.0844 12.3552 23.2775 12.4351 23.42 12.5774C23.5623 12.7199 23.6422 12.913 23.6422 13.1144C23.6422 13.3157 23.5623 13.5089 23.42 13.6514L22.6927 14.3787C22.5502 14.521 22.3571 14.6009 22.1557 14.6009C21.9543 14.6009 21.7612 14.521 21.6187 14.3787C21.4764 14.2362 21.3965 14.0431 21.3965 13.8417C21.3965 13.6403 21.4764 13.4472 21.6187 13.3047L22.346 12.5774ZM12.578 12.5774C12.7205 12.4351 12.9137 12.3552 13.115 12.3552C13.3164 12.3552 13.5095 12.4351 13.652 12.5774L14.3787 13.3047C14.521 13.4472 14.6009 13.6403 14.6009 13.8417C14.6009 14.0431 14.521 14.2362 14.3787 14.3787C14.2362 14.521 14.0431 14.6009 13.8417 14.6009C13.6403 14.6009 13.4472 14.521 13.3047 14.3787L12.5774 13.6514C12.4351 13.5089 12.3552 13.3157 12.3552 13.1144C12.3552 12.913 12.4357 12.7199 12.578 12.5774ZM17.9987 10.332C18.2 10.3322 18.3931 10.4123 18.5354 10.5546C18.6778 10.697 18.7579 10.89 18.758 11.0914V12.1194C18.758 12.3208 18.6781 12.514 18.5357 12.6565C18.3933 12.799 18.2001 12.8792 17.9987 12.8794C17.7974 12.8792 17.6043 12.7991 17.462 12.6568C17.3196 12.5144 17.2395 12.3214 17.2394 12.12V11.0914C17.2395 10.89 17.3196 10.697 17.462 10.5546C17.6043 10.4123 17.7974 10.3322 17.9987 10.332Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_208_1466">
                    <rect width="16" height="16" fill="white" transform="translate(10 10)" />
                  </clipPath>
                </defs>
              </svg>

            </div>
          </div>



        </div>
      </div>

    </>
  );
}
