"use client";
import { useState } from "react";
import styles from "./ImportPlatforms.module.css";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import amazonLogo from "../images/logo_amazon.png";
import googleLogo from "../images/logo_google.png";
import walmartLogo from "../images/logo_walmart.png";
import ebayLogo from "../images/logo_ebay.png";

export default function Dashboard() {
  const platformData = [
    {
      id: 1,
      name: "amazon",
      logo: amazonLogo,
      totalSent: 3000,
      percentage: 60,
    },
    {
      id: 2,
      name: "google",
      logo: googleLogo,
      totalSent: 2000,
      percentage: 70,
    },
    {
      id: 3,
      name: "walmart",
      logo: walmartLogo,
      totalSent: 5000,
      percentage: 80,
    },
    {
      id: 4,
      name: "ebay",
      logo: ebayLogo,
      totalSent: 1000,
      percentage: 30,
    },
    {
      id: 5,
      name: "google",
      logo: googleLogo,
      totalSent: 3000,
      percentage: 60,
    },
    {
      id: 6,
      name: "amazon",
      logo: amazonLogo,
      totalSent: 4000,
      percentage: 90,
    },
  ];

  const pendingActions = [
    {
      title: "Feed Authentication Error",
      count: 5,
    },
    {
      title: "Vendor File not parsed",
      count: 3,
    },
    {
      title: "Channel Export Failed",
      count: 4,
    },
    {
      title: "Product Mapping Required",
      count: 8,
    },
  ];

  return (
    <div className={styles.dashboard}>
      {/* Import from Platforms Card */}
      <div className={styles.card}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.title}>Import from Platforms</h2>
          <button className={styles.menuButton}>
            <MoreVertical size={20} />
          </button>
        </div>

        <p className={styles.subtitle}>Based on Import</p>

        {/* Border Line */}
        <div className={styles.borderLine}></div>

        {/* Platform List */}
        <div className={styles.platformList}>
          {platformData.map((platform) => (
            <div key={platform.id} className={styles.platformItem}>
              {/* Logo Section */}
              <div className={styles.logoSection}>
                <div>
                  <Image
                    src={platform.logo}
                    alt="Vendor Logo"
                    className={styles.vendorLogo}
                    // width={0}
                    // height={0}
                    style={{ width: 80, height: 28 }}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className={styles.contentSection}>
                <div className={styles.topRow}>
                  <span className={styles.label}>Total Product Sent</span>
                  <span className={styles.number}>{platform.totalSent}</span>
                </div>

                <div className={styles.progressSection}>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${platform.percentage}%` }}
                    ></div>
                  </div>
                  <span className={styles.percentage}>
                    {platform.percentage}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Change Summary Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.cardTitle}>Product Change Summary</h3>
            <p className={styles.cardSubtitle}>Overall Product Summary</p>
          </div>
          <button className={styles.menuButton}>
            <MoreVertical size={20} />
          </button>
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.donutChart}>
            <svg width="200" height="200" viewBox="0 0 200 200">
              {/* Background circles */}
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="12"
              />
              <circle
                cx="100"
                cy="100"
                r="65"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="12"
              />
              <circle
                cx="100"
                cy="100"
                r="45"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="12"
              />

              {/* Outer Circle - New Product (Blue) */}
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="#0073D5"
                strokeWidth="12"
                strokeDasharray="584.07"
                strokeDashoffset="133.52"
                transform="rotate(-90 100 100)"
                strokeLinecap="round"
              />

              {/* Middle Circle - Updated Product (Red) */}
              <circle
                cx="100"
                cy="100"
                r="65"
                fill="none"
                stroke="#FF302F"
                strokeWidth="12"
                strokeDasharray="418.41"
                strokeDashoffset="122.52"
                transform="rotate(-90 100 100)"
                strokeLinecap="round"
              />

              {/* Inner Circle - Discontinued (Light Blue) */}
              <circle
                cx="100"
                cy="100"
                r="45"
                fill="none"
                stroke="#2FB4FF"
                strokeWidth="12"
                strokeDasharray="382.74"
                strokeDashoffset="226.19"
                transform="rotate(-70 100 100)"
                strokeLinecap="round"
              />

              <text
                x="100"
                y="105"
                textAnchor="middle"
                className={styles.chartCenterText}
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  fill: "#1f2937",
                }}
              >
                72%
              </text>
            </svg>
          </div>
          <div className={styles.chartLegend}>
            <div className={styles.legendRow}>
              <div className={styles.legendItem}>
                <div
                  className={`${styles.legendColor} ${styles.blueColor}`}
                ></div>
                <span>New Product</span>
              </div>
              <div className={styles.legendItem}>
                <div
                  className={`${styles.legendColor} ${styles.redColor}`}
                ></div>
                <span>Updated Product</span>
              </div>
            </div>
            <div className={styles.legendRowCenter}>
              <div className={styles.legendItem}>
                <div
                  className={`${styles.legendColor} ${styles.lightBlueColor}`}
                ></div>
                <span>Discontinued</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Actions Card */}
      <div className={styles.cards}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Pending Actions</h3>
          {/* <button className={styles.menuButton}>
            <MoreVertical size={20} />
          </button> */}
        </div>
        <div className={styles.actionsList}>
          {pendingActions.map((action, index) => (
            <div key={index} className={styles.actionItem}>
              <span className={styles.actionTitle}>{action.title}</span>
              <span className={styles.actionCount}>{action.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
