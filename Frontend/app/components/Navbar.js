"use client";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import logo from "../images/logo.png";
import icon from "../images/icon.jpg";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.leftSection}>
        <Image
          src={logo}
          alt="Shopify Logo"
          width={130}
          height={40}
          className={styles.logo}
        />
        <div className={styles.title}>Dashboard</div>
      </div>
      <div className={`${styles.searchContainer} ${styles.desktopSearch}`}>
        <div className={styles.searchIcon}>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search anything..."
        />
      </div>
      {showSearch && (
        <div className={`${styles.searchContainer} ${styles.mobileSearch}`}>
          <div className={styles.searchIcon}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            autoFocus
          />
          <button
            className={styles.closeSearch}
            onClick={() => setShowSearch(false)}
          >
            ×
          </button>
        </div>
      )}
      <div className={styles.right}>
        <div className={styles.rightSection}>
          {/* Mobile Search Toggle Button */}
          <button
            className={`${styles.iconButton} ${styles.mobileSearchToggle}`}
            onClick={() => setShowSearch(!showSearch)}
          >
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className={`${styles.iconButton} ${styles.hideOnMobile}`}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8438 3.25C15.3687 3.25 16.8313 3.8558 17.9096 4.93414C18.9879 6.01247 19.5938 7.47501 19.5938 9V15C19.5938 15.7293 19.304 16.4288 18.7883 16.9445C18.2726 17.4603 17.5731 17.75 16.8438 17.75H8.84375C8.1144 17.75 7.41493 17.4603 6.89921 16.9445C6.38348 16.4288 6.09375 15.7293 6.09375 15V9C6.09375 7.47501 6.69955 6.01247 7.77789 4.93414C8.85622 3.8558 10.3188 3.25 11.8438 3.25H13.8438ZM13.8438 4.75H11.8438C10.7166 4.75 9.63558 5.19777 8.83855 5.9948C8.04152 6.79183 7.59375 7.87283 7.59375 9V15C7.59375 15.3315 7.72545 15.6495 7.95987 15.8839C8.19429 16.1183 8.51223 16.25 8.84375 16.25H16.8438C17.1753 16.25 17.4932 16.1183 17.7276 15.8839C17.9621 15.6495 18.0938 15.3315 18.0938 15V9C18.0938 7.87283 17.646 6.79183 16.849 5.9948C16.0519 5.19777 14.9709 4.75 13.8438 4.75ZM14.8438 19.25C15.0427 19.25 15.2334 19.329 15.3741 19.4697C15.5147 19.6103 15.5938 19.8011 15.5938 20C15.5938 20.1989 15.5147 20.3897 15.3741 20.5303C15.2334 20.671 15.0427 20.75 14.8438 20.75H10.8438C10.6448 20.75 10.4541 20.671 10.3134 20.5303C10.1728 20.3897 10.0938 20.1989 10.0938 20C10.0938 19.8011 10.1728 19.6103 10.3134 19.4697C10.4541 19.329 10.6448 19.25 10.8438 19.25H14.8438Z"
                fill="black"
              />
            </svg>
          </div>

          <div className={`${styles.iconButton} ${styles.hideOnMobile}`}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8429 3.89844C17.6139 3.89844 21.5119 7.40644 21.5119 11.7754C21.5119 16.1444 17.6139 19.6524 12.8429 19.6524C11.582 19.6534 10.334 19.3993 9.17385 18.9054L9.41885 19.0034L5.47485 20.0614C5.35582 20.0934 5.23075 20.0954 5.11072 20.0675C4.99068 20.0396 4.87938 19.9826 4.78664 19.9014C4.69391 19.8202 4.6226 19.7175 4.57904 19.6022C4.53547 19.4869 4.52098 19.3627 4.53685 19.2404L4.55685 19.1424L5.43485 15.8644L5.28885 15.6404C4.61985 14.5634 4.23585 13.3534 4.17985 12.0914L4.17285 11.7754C4.17285 7.40644 8.07185 3.89844 12.8429 3.89844ZM12.8429 5.39844C8.86685 5.39844 5.67385 8.27144 5.67385 11.7754C5.67385 13.0344 6.08685 14.2404 6.85285 15.2754C6.92016 15.3662 6.96609 15.471 6.98721 15.582C7.00834 15.693 7.00411 15.8073 6.97485 15.9164L6.34085 18.2774L9.27385 17.4914C9.40293 17.4567 9.53895 17.457 9.66785 17.4924L9.76185 17.5254C10.7361 17.9401 11.7841 18.1534 12.8429 18.1524C16.8189 18.1524 20.0119 15.2794 20.0119 11.7754C20.0119 8.27144 16.8189 5.39844 12.8429 5.39844Z"
                fill="black"
              />
            </svg>
          </div>

          <div className={styles.profile}>
            <div className={styles.avatar}>
              <Image src={icon} alt="Shopify Logo" width={140} height={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
