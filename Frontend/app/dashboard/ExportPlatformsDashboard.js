"use client";
import React from "react";

import Image from "next/image";
import styles from "./ExportPlatformDashboard.module.css";

// Import images - Next.js recommended way
import amazonLogo from "../images/logo_amazon.png";
import googleLogo from "../images/logo_google.png";
import walmartLogo from "../images/logo_walmart.png";
import ebayLogo from "../images/logo_ebay.png";

export default function ExportPlatformsDashboard() {
  const platformData = [
    {
      name: "Amazon",
      percentage: 45,
      totalProducts: 1200,
      productsExported: 500,
      color: "#00A8E1",
      logo: amazonLogo,
    },
    {
      name: "Google",
      percentage: 60,
      totalProducts: 1000,
      productsExported: 600,
      color: "#EA4335",
      logo: googleLogo,
    },
    {
      name: "Walmart",
      percentage: 70,
      totalProducts: 2000,
      productsExported: 1400,
      color: "#00A8E1",
      logo: walmartLogo,
    },
    {
      name: "eBay",
      percentage: 50,
      totalProducts: 1800,
      productsExported: 900,
      color: "#EA4335",
      logo: ebayLogo,
    },
  ];

  const CircularProgress = ({ percentage, color }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className={styles.circularProgress}>
        <svg width="120" height="120" className={styles.progressSvg}>
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke="#E5E7EB"
            strokeWidth="14"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke={color}
            strokeWidth="14"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={styles.progressCircle}
          />
        </svg>
        <div className={styles.percentageText}>{percentage}%</div>
      </div>
    );
  };

  return (
    <div className={styles.contain}>
      <h1 className={styles.header}>Export to platform</h1>
      <div className={styles.container}>
        {platformData.map((platform, index) => (
          <div key={index} className={styles.platformCard}>
            <div className={styles.chartContainer}>
              <CircularProgress
                percentage={platform.percentage}
                color={platform.color}
              />
            </div>

            <div className={styles.logoContainer}>
              <Image
                src={platform.logo}
                alt={`${platform.name} logo`}
                width={80}
                height={30}
                className={styles.logo}
              />
            </div>

            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <div className={styles.statDot}></div>
                <span className={styles.statLabel}>Total Product</span>
                <span className={styles.statValue}>
                  {platform.totalProducts}
                </span>
              </div>

              <div className={styles.statItem}>
                <div
                  className={styles.statDot}
                  style={{ backgroundColor: platform.color }}
                ></div>
                <span className={styles.statLabel}>Products Exported</span>
                <span className={styles.statValue}>
                  {platform.productsExported}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
