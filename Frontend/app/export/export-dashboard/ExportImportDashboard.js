// ExportImportDashboard.jsx
import React from "react";
import Image from "next/image";
import styles from "./ExportImportDashboard.module.css";
import amazon from "../../images/logo_amazon.png";
import google from "../../images/logo_google.png";
import walmart from "../../images/logo_walmart.png";
import shopify from "../../images/logo.png";

export default function ExportImportDashboard() {
  return (
    <div className={styles.container}>
      {/* Export Status Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Export Status</h2>
          <div className={styles.buttonGroup}>
            <button className={styles.configButton}>Configure Export</button>
            <button className={styles.logsButton}>View Logs</button>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          {/* Shopify Card */}
          <div className={styles.card}>
            <div className={styles.logoContainer}>
              <Image
                src={shopify}
                alt="Shopify"
                width={150}
                height={80}
                className={styles.logo}
              />
            </div>

            <div className={styles.statusDetails}>
              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Products Exported</span>
                <span className={styles.statusValue}>5,000 SKUs</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Last Export</span>
                <span className={styles.statusValue}>2025-05-13, 9:00 AM</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Status</span>
                <span className={`${styles.statusTag} ${styles.success}`}>
                  Success
                </span>
              </div>
            </div>

            <button className={styles.seeMoreButton}>See more</button>
          </div>

          {/* Google Card */}
          <div className={styles.card}>
            <div className={styles.logoContainer}>
              <Image
                src={google}
                alt="Google"
                width={150}
                height={80}
                className={styles.logo}
              />
            </div>

            <div className={styles.statusDetails}>
              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Products Exported</span>
                <span className={styles.statusValue}>2,000 SKUs</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Last Export</span>
                <span className={styles.statusValue}>2025-05-14, 10:30 AM</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Status</span>
                <span className={`${styles.statusTag} ${styles.pending}`}>
                  Pending
                </span>
              </div>
            </div>

            <button className={styles.seeMoreButton}>See more</button>
          </div>

          {/* Amazon Card */}
          <div className={styles.card}>
            <div className={styles.logoContainer}>
              <Image
                src={amazon}
                alt="Amazon"
                width={150}
                height={80}
                className={styles.logo}
              />
            </div>

            <div className={styles.statusDetails}>
              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Products Exported</span>
                <span className={styles.statusValue}>300 SKUs</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Last Export</span>
                <span className={styles.statusValue}>2025-05-12, 8:15 PM</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Status</span>
                <span className={`${styles.statusTag} ${styles.failed}`}>
                  Failed
                </span>
              </div>
            </div>

            <button className={styles.seeMoreButton}>See more</button>
          </div>

          {/* Walmart Card */}
          <div className={styles.card}>
            <div className={styles.logoContainer}>
              <Image
                src={walmart}
                alt="Walmart"
                width={150}
                height={80}
                className={styles.logo}
              />
            </div>

            <div className={styles.statusDetails}>
              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Products Exported</span>
                <span className={styles.statusValue}>3,500 SKUs</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Last Export</span>
                <span className={styles.statusValue}>2025-05-15, 1:45 PM</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Status</span>
                <span className={`${styles.statusTag} ${styles.inProgress}`}>
                  In Progress
                </span>
              </div>
            </div>

            <button className={styles.seeMoreButton}>See more</button>
          </div>
        </div>
      </div>

      {/* Import Status Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Import Status</h2>
          <div className={styles.buttonGroup}>
            <button className={styles.configButton}>Configure Import</button>
            <button className={styles.logsButton}>View Logs</button>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          {/* Acme Corp Card */}
          <div className={styles.card}>
            <div className={styles.companyName}>Acme Corp</div>

            <div className={styles.statusDetails}>
              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Products Exported</span>
                <span className={styles.statusValue}>5,000 SKUs</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Last Import</span>
                <span className={styles.statusValue}>2025-05-13, 9:00 AM</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Status</span>
                <span className={`${styles.statusTag} ${styles.success}`}>
                  Success
                </span>
              </div>
            </div>

            <button className={styles.seeMoreButton}>See more</button>
          </div>

          {/* Beta Innovations Card */}
          <div className={styles.card}>
            <div className={styles.companyName}>Beta Innovations</div>

            <div className={styles.statusDetails}>
              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Products Imported</span>
                <span className={styles.statusValue}>1,200 SKUs</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Review Process</span>
                <span className={styles.statusValue}>2025-05-14, 10:30 AM</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Status</span>
                <span className={`${styles.statusTag} ${styles.pending}`}>
                  Pending
                </span>
              </div>
            </div>

            <button className={styles.seeDetailsButton}>See details</button>
          </div>

          {/* Gamma Solutions Card */}
          <div className={styles.card}>
            <div className={styles.companyName}>Gamma Solutions</div>

            <div className={styles.statusDetails}>
              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Products Imported</span>
                <span className={styles.statusValue}>300 SKUs</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Error Log</span>
                <span className={styles.statusValue}>2025-05-12, 4:20 PM</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Status</span>
                <span className={`${styles.statusTag} ${styles.failed}`}>
                  Failed
                </span>
              </div>
            </div>

            <button className={styles.viewErrorsButton}>View errors</button>
          </div>

          {/* Delta Technologies Card */}
          <div className={styles.card}>
            <div className={styles.companyName}>Delta Technologies</div>

            <div className={styles.statusDetails}>
              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Products Imported</span>
                <span className={styles.statusValue}>2,500 SKUs</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Last Sync</span>
                <span className={styles.statusValue}>2025-05-15, 8:45 AM</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Status</span>
                <span className={`${styles.statusTag} ${styles.completed}`}>
                  Completed
                </span>
              </div>
            </div>

            <button className={styles.checkHistoryButton}>Check history</button>
          </div>
        </div>
      </div>
    </div>
  );
}
