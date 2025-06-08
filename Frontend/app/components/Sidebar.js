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
          className={`${styles.hamburger} ${
            isMobileMenuOpen ? styles.open : ""
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
        className={`${styles.sidebar} ${
          isMobileMenuOpen ? styles.mobileOpen : ""
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
                  className={`${styles.chevron} ${
                    expandedMenus.admin ? styles.expanded : ""
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
                          className={`${styles.chevron} ${
                            expandedMenus.company ? styles.expanded : ""
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
                          className={`${styles.chevron} ${
                            expandedMenus.users ? styles.expanded : ""
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
                  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 00-2 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 00-2-2H6z" />
                  </svg>
                </div>
                <span>Catalog</span>
                <div
                  className={`${styles.chevron} ${
                    expandedMenus.catalogue ? styles.expanded : ""
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
                        className={`${styles.navItem} ${styles.subItem} ${
                          expandedMenus.vendorsetup ? styles.active : ""
                        }`}
                        onClick={() => toggleMenu("vendor-setup")}
                      >
                        <span>Vendor Setup</span>
                        <div
                          className={`${styles.chevron} ${
                            expandedMenus.vendorsetup ? styles.expanded : ""
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
                          className={`${styles.chevron} ${
                            expandedMenus.yourcatalog ? styles.expanded : ""
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
                        <span>Catalog Filters</span>
                        <div
                          className={`${styles.chevron} ${
                            expandedMenus.exportfilter ? styles.expanded : ""
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
                  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 00-2 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 00-2-2H6z" />
                  </svg>
                </div>
                <span>Price</span>
                <div
                  className={`${styles.chevron} ${
                    expandedMenus.price ? styles.expanded : ""
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
                        className={`${styles.navItem} ${styles.subItem} ${
                          expandedMenus.profile ? styles.active : ""
                        }`}
                        onClick={() => toggleMenu("profile")}
                      >
                        <span>Price Profile</span>
                        <div
                          className={`${styles.chevron} ${
                            expandedMenus.profile ? styles.expanded : ""
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
                          className={`${styles.chevron} ${
                            expandedMenus.rule ? styles.expanded : ""
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
                  className={`${styles.chevron} ${
                    expandedMenus.export ? styles.expanded : ""
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
                        className={`${styles.navItem} ${styles.subItem} ${
                          expandedMenus.exportdashboard ? styles.active : ""
                        }`}
                        onClick={() => toggleMenu("export-dashboard")}
                      >
                        <span>Dashboard</span>
                        <div
                          className={`${styles.chevron} ${
                            expandedMenus.exportdashboard ? styles.expanded : ""
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
                          className={`${styles.chevron} ${
                            expandedMenus.exporttochannel ? styles.expanded : ""
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
                          className={`${styles.chevron} ${
                            expandedMenus.importfromchannel
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
          {/* Theme Toggle Button */}
          <div className={styles.themeToggle} onClick={toggleTheme}>
            <div className={styles.icon}>
              {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
            </div>
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </div>

          {/* Logout Button */}
          <div className={styles.logoutButton} onClick={handleLogout}>
            <div className={styles.icon}>
              <BiLogOut />
            </div>
            <span>Log Out</span>
          </div>
        </div>
      </div>
          
    </>
  );
}
