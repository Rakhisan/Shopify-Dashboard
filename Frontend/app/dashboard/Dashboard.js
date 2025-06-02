// components/ProductDashboard.jsx
import React from "react";
import Image from "next/image";
import styles from "./Dashboard.module.css";

// Import images - Next.js recommended way
import amazonLogo from "../images/logo_amazon.png";
import googleLogo from "../images/logo_google.png";
import walmartLogo from "../images/logo_walmart.png";
import ebayLogo from "../images/logo_ebay.png";

export default function ProductDashboard() {
  return (
    <div className={styles.dashboardWrapper}>
      {/* Export to Channels Container */}
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Export to Channels</h2>
        </div>

        <div className={styles.channelsContainer}>
          {/* Amazon Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.logoContainer}>
                <Image
                  src={amazonLogo}
                  alt="Amazon logo"
                  className={styles.logo}
                  width={100}
                  height={30}
                />
              </div>
              <button className={styles.moreButton}>...</button>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>Total Product Sent</p>
                <p className={styles.metricLabel}>1200</p>
              </div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBarBg}>
                  <div
                    className={`${styles.progressBar} ${styles.blueBar}`}
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <div className={styles.sliderContainer} style={{ left: "50%" }}>
                  <div
                    className={`${styles.sliderDot} ${styles.blueDot}`}
                  ></div>
                </div>
              </div>
              <div className={styles.metricValues}>
                <p className={styles.metricValue}></p>
                <p className={styles.metricValue}>50%</p>
              </div>
            </div>
          </div>

          {/* Google Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.logoContainer}>
                <Image
                  src={googleLogo}
                  alt="Google logo"
                  className={styles.logo}
                  width={100}
                  height={30}
                />
              </div>
              <button className={styles.moreButton}>...</button>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>Total Product Sent</p>
                <p className={styles.metricLabel}>800</p>
              </div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBarRg}>
                  <div
                    className={`${styles.progressBar} ${styles.redBar}`}
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <div className={styles.sliderContainer} style={{ left: "30%" }}>
                  <div className={`${styles.sliderDot} ${styles.redDot}`}></div>
                </div>
              </div>
              <div className={styles.metricValues}>
                <p className={styles.metricValue}></p>
                <p className={styles.metricValue}>30%</p>
              </div>
            </div>
          </div>

          {/* Walmart Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.logoContainer}>
                <Image
                  src={walmartLogo}
                  alt="Walmart logo"
                  className={styles.logo}
                  width={100}
                  height={30}
                />
              </div>
              <button className={styles.moreButton}>...</button>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>Total Product Sent</p>
                <p className={styles.metricLabel}>400</p>
              </div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBarRg}>
                  <div
                    className={`${styles.progressBar} ${styles.redBar}`}
                    style={{ width: "20%" }}
                  ></div>
                </div>
                <div className={styles.sliderContainer} style={{ left: "20%" }}>
                  <div className={`${styles.sliderDot} ${styles.redDot}`}></div>
                </div>
              </div>
              <div className={styles.metricValues}>
                <p className={styles.metricValue}></p>
                <p className={styles.metricValue}>20%</p>
              </div>
            </div>
          </div>

          {/* eBay Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.logoContainer}>
                <Image
                  src={ebayLogo}
                  alt="eBay logo"
                  className={styles.logo}
                  width={90}
                  height={25}
                />
              </div>
              <button className={styles.moreButton}>...</button>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>Overall Items Delivered</p>
                <p className={styles.metricLabel}>350</p>
              </div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBarBg}>
                  <div
                    className={`${styles.progressBar} ${styles.blueBar}`}
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <div className={styles.sliderContainer} style={{ left: "15%" }}>
                  <div
                    className={`${styles.sliderDot} ${styles.blueDot}`}
                  ></div>
                </div>
              </div>
              <div className={styles.metricValues}>
                <p className={styles.metricValue}></p>
                <p className={styles.metricValue}>15%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Feed Status Container */}
      <div className={styles.containers}>
        <div className={styles.header}>
          <h2 className={styles.title}>Vendor Feed Status</h2>
        </div>

        <div className={styles.vendorsContainer}>
          {/* Acme Corp */}
          <div className={styles.cards}>
            <h3 className={`${styles.vendorName} ${styles.blueText}`}>
              Acme Corp
            </h3>
            <p className={styles.metricLabel}>Total Product Imported%</p>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBarBg}>
                <div
                  className={`${styles.progressBar} ${styles.blueBar}`}
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
            <div className={styles.metricValues}>
              <p className={styles.metricValue}>50%</p>
              <p className={styles.metricValue}>1200</p>
            </div>
          </div>

          {/* Beta Inc */}
          <div className={styles.cards}>
            <h3 className={`${styles.vendorName} ${styles.redText}`}>
              Beta Inc
            </h3>
            <p className={styles.metricLabel}>Total Product Imported%</p>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBarRg}>
                <div
                  className={`${styles.progressBar} ${styles.redBar}`}
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
            <div className={styles.metricValues}>
              <p className={styles.metricValue}>30%</p>
              <p className={styles.metricValue}>800</p>
            </div>
          </div>

          {/* Gamma LLC */}
          <div className={styles.cards}>
            <h3 className={`${styles.vendorName} ${styles.blueText}`}>
              Gamma LLC
            </h3>
            <p className={styles.metricLabel}>Total Product Imported%</p>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBarBg}>
                <div
                  className={`${styles.progressBar} ${styles.blueBar}`}
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
            <div className={styles.metricValues}>
              <p className={styles.metricValue}>20%</p>
              <p className={styles.metricValue}>600</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
