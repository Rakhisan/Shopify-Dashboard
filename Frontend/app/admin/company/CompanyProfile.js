"use client";
import { useState, useRef } from "react";
import styles from "./CompanyProfile.module.css";

export default function CompanyProfile() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyId: "",
    address: "",
    phone: "",
    email: "",
    currencySymbol: "",
    domain: "",
    taxId: "",
    website: "",
    state: "",
    country: "",
    postalCode: "",
    industry: "",
    timezone: "",
    plan: "",
    roundingMultiple: "",
    city: "",
    distributorFeed: "",
  });
  const [logoFile, setLogoFile] = useState(null);
  const [documentFiles, setDocumentFiles] = useState([]);
  const [additionalFields, setAdditionalFields] = useState([]);

  const logoInputRef = useRef(null);
  const documentInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      ...formData,
      logoFile,
      documentFiles,
      additionalFields,
    });
  };

  const handleCancel = () => {
    console.log("Form cancelled");
  };

  const handleFileDrop = (e, setFile, isMultiple = false) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (isMultiple) {
      setFile((prev) => [...prev, ...files]);
    } else {
      setFile(files[0]);
    }
  };

  const handleFileSelect = (e, setFile, isMultiple = false) => {
    const files = Array.from(e.target.files);
    if (isMultiple) {
      setFile((prev) => [...prev, ...files]);
    } else {
      setFile(files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const openFileDialog = (inputRef) => {
    inputRef.current.click();
  };

  const addNewField = () => {
    setAdditionalFields((prev) => [...prev, { id: Date.now(), value: "" }]);
  };

  const handleAdditionalFieldChange = (id, value) => {
    setAdditionalFields((prev) =>
      prev.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Company Profile</h2>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Logo Upload */}
            <div className={styles.logoSection}>
              <div
                className={styles.logoUpload}
                onDragOver={handleDragOver}
                onDrop={(e) => handleFileDrop(e, setLogoFile)}
                onClick={() => openFileDialog(logoInputRef)}
              >
                <input
                  type="file"
                  ref={logoInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={(e) => handleFileSelect(e, setLogoFile)}
                />
                <div className={styles.uploadIcon}>
                  <svg
                    width="38"
                    height="37"
                    viewBox="0 0 38 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.0004 2.24954C19.1638 2.24944 19.3253 2.28473 19.4738 2.35298C19.6223 2.42123 19.7543 2.52083 19.8606 2.64493L24.388 7.92686C24.5833 8.155 24.68 8.45138 24.6568 8.75081C24.6336 9.05024 24.4923 9.32819 24.2642 9.52351C24.0361 9.71883 23.7397 9.81552 23.4403 9.79231C23.1408 9.7691 22.8629 9.6279 22.6676 9.39976L20.1322 6.44188V23C20.1322 23.3001 20.013 23.588 19.8007 23.8003C19.5885 24.0126 19.3006 24.1318 19.0004 24.1318C18.7002 24.1318 18.4123 24.0126 18.2001 23.8003C17.9878 23.588 17.8686 23.3001 17.8686 23V6.44037L15.3332 9.39976C15.2365 9.51272 15.1185 9.60553 14.9859 9.67288C14.8533 9.74024 14.7088 9.78082 14.5605 9.79231C14.4123 9.8038 14.2632 9.78598 14.1218 9.73986C13.9805 9.69373 13.8495 9.62022 13.7366 9.52351C13.6236 9.42679 13.5308 9.30878 13.4635 9.1762C13.3961 9.04362 13.3555 8.89907 13.344 8.75081C13.3325 8.60255 13.3504 8.45347 13.3965 8.3121C13.4426 8.17072 13.5161 8.03982 13.6128 7.92686L18.1402 2.64493C18.2465 2.52083 18.3785 2.42123 18.527 2.35298C18.6755 2.28473 18.837 2.24944 19.0004 2.24954ZM11.4488 12.8164C11.7489 12.8148 12.0375 12.9325 12.2509 13.1436C12.4642 13.3548 12.585 13.642 12.5866 13.9422C12.5882 14.2424 12.4705 14.5309 12.2594 14.7443C12.0483 14.9577 11.761 15.0785 11.4608 15.0801C9.81136 15.0891 8.64179 15.1314 7.75292 15.2944C6.89875 15.4528 6.40225 15.7049 6.03554 16.0716C5.61751 16.4896 5.34587 17.0767 5.19646 18.1844C5.04404 19.3237 5.04103 20.8344 5.04103 23V24.5091C5.04103 26.6762 5.04404 28.1868 5.19646 29.3262C5.34587 30.4339 5.61902 31.0194 6.03554 31.439C6.45356 31.8555 7.0391 32.1271 8.14831 32.2765C9.28618 32.4305 10.7983 32.432 12.9639 32.432H25.0369C27.2025 32.432 28.7131 32.4305 29.854 32.2765C30.9617 32.1271 31.5472 31.8555 31.9653 31.4375C32.3833 31.0194 32.6549 30.4339 32.8043 29.3262C32.9567 28.1868 32.9598 26.6762 32.9598 24.5091V23C32.9598 20.8344 32.9567 19.3237 32.8043 18.1828C32.6549 17.0767 32.3818 16.4896 31.9653 16.0716C31.597 15.7049 31.102 15.4528 30.2479 15.2944C29.359 15.1314 28.1894 15.0891 26.54 15.0801C26.3913 15.0793 26.2443 15.0492 26.1073 14.9916C25.9703 14.934 25.8459 14.85 25.7414 14.7443C25.6369 14.6387 25.5542 14.5134 25.498 14.3758C25.4419 14.2382 25.4134 14.0908 25.4142 13.9422C25.415 13.7936 25.445 13.6466 25.5026 13.5095C25.5602 13.3725 25.6443 13.2482 25.7499 13.1436C25.8556 13.0391 25.9808 12.9564 26.1184 12.9003C26.2561 12.8441 26.4034 12.8156 26.552 12.8164C28.1849 12.8255 29.5446 12.8647 30.6568 13.0684C31.8008 13.2797 32.7741 13.6796 33.5664 14.4719C34.4749 15.3789 34.8643 16.5243 35.0484 17.8825C35.2234 19.1894 35.2234 20.854 35.2234 22.917V24.5921C35.2234 26.6566 35.2234 28.3196 35.0484 29.628C34.8643 30.9862 34.4749 32.1301 33.5664 33.0386C32.6579 33.9471 31.514 34.3365 30.1558 34.5206C28.8474 34.6956 27.1829 34.6956 25.1199 34.6956H12.8809C10.8179 34.6956 9.15338 34.6956 7.84497 34.5206C6.48676 34.338 5.34285 33.9471 4.43436 33.0386C3.52587 32.1301 3.13651 30.9862 2.95391 29.628C2.77734 28.3196 2.77734 26.6551 2.77734 24.5921V22.917C2.77734 20.854 2.77734 19.1894 2.95391 17.881C3.13501 16.5228 3.52738 15.3789 4.43436 14.4704C5.22665 13.6796 6.20003 13.2782 7.34394 13.0684C8.45617 12.8647 9.81588 12.8255 11.4488 12.8164Z"
                      fill="#ABAFB1"
                    />
                  </svg>
                </div>
                <span className={styles.logoText}>
                  {logoFile ? logoFile.name : "logo"}
                </span>
              </div>
            </div>

            {/* Company Name */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            {/* Phone Number */}
            <div className={styles.phoneGroup}>
              <select
                name="countryCode"
                className={styles.countryCode}
                onChange={handleInputChange}
                value={formData.countryCode}
              >
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+81">🇯🇵 +81</option>
                <option value="+86">🇨🇳 +86</option>
                <option value="+33">🇫🇷 +33</option>
                <option value="+49">🇩🇪 +49</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+55">🇧🇷 +55</option>
                <option value="+7">🇷🇺 +7</option>
              </select>
              <input
                type="text"
                name="phone"
                placeholder="8023456789"
                value={formData.phone}
                onChange={handleInputChange}
                className={styles.phoneInput}
              />
            </div>

            {/* Currency Symbol */}
            <div className={styles.inputGroup}>
              <select
                name="currencySymbol"
                value={formData.currencySymbol}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">Currency Symbol</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="INR">INR (₹)</option>
                <option value="JPY">JPY (¥)</option>
                <option value="CNY">CNY (¥)</option>
                <option value="AUD">AUD ($)</option>
                <option value="BRL">BRL (R$)</option>
              </select>
            </div>

            {/* Domain */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="domain"
                placeholder="Domain"
                value={formData.domain}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            {/* Tax ID */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="taxId"
                placeholder="Tax-id"
                value={formData.taxId}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            {/* State */}
            <div className={styles.inputGroup}>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">State</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
                <option value="IL">Illinois</option>
              </select>
            </div>

            {/* Postal Code */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="postalCode"
                placeholder="Postal-code"
                value={formData.postalCode}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            {/* Timezone */}
            <div className={styles.inputGroup}>
              <select
                name="timezone"
                value={formData.timezone}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">Time-zone</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
                <option value="MST">Mountain Time</option>
                <option value="CST">Central Time</option>
                <option value="UTC">UTC</option>
              </select>
            </div>

            {/* Rounding Multiple */}
            <div className={styles.inputGroup}>
              <select
                name="roundingMultiple"
                value={formData.roundingMultiple}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">Rounding-multiple</option>
                <option value="0.01">0.01</option>
                <option value="0.05">0.05</option>
                <option value="0.10">0.10</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Company ID */}
            {/* <div className={styles.inputGroup}>
              <input
                type="text"
                name="companyId"
                placeholder="Company Id"
                value={formData.companyId}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div> */}

            {/* Address */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            {/* Distributor Feed */}
            <div className={styles.inputGroup}>
              <select
                name="distributorFeed"
                value={formData.distributorFeed}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">Distributor Feed Refresh Frequency</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            {/* Email */}
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            {/* Website */}
            <div className={styles.inputGroup}>
              <input
                type="url"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            {/* Country */}
            <div className={styles.inputGroup}>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">Country</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="IN">India</option>
                <option value="JP">Japan</option>
                <option value="CN">China</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="AU">Australia</option>
                <option value="BR">Brazil</option>
                <option value="RU">Russia</option>
                <option value="CA">Canada</option>
                <option value="IT">Italy</option>
                <option value="ES">Spain</option>
                <option value="MX">Mexico</option>
                <option value="ZA">South Africa</option>
              </select>
            </div>

            {/* Industry */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="industry"
                placeholder="Industry"
                value={formData.industry}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            {/* Plan */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="plan"
                placeholder="Plan"
                value={formData.plan}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            {/* City */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            {/* Document Upload */}
            <div className={styles.documentUpload}>
              <div
                className={styles.documentUpload}
                onDragOver={handleDragOver}
                onDrop={(e) => handleFileDrop(e, setDocumentFiles, true)}
                onClick={() => openFileDialog(documentInputRef)}
              >
                <input
                  type="file"
                  ref={documentInputRef}
                  style={{ display: "none" }}
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={(e) => handleFileSelect(e, setDocumentFiles, true)}
                />
                <div className={styles.uploadIcon}>
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.2231 0.313416C16.3865 0.313312 16.548 0.3486 16.6965 0.416853C16.845 0.485106 16.9769 0.584706 17.0833 0.708805L21.6106 5.99073C21.8059 6.21887 21.9026 6.51525 21.8794 6.81468C21.8562 7.11411 21.715 7.39206 21.4869 7.58738C21.2587 7.7827 20.9623 7.87939 20.6629 7.85618C20.3635 7.83298 20.0855 7.69177 19.8902 7.46363L17.3549 4.50575V21.0638C17.3549 21.364 17.2356 21.6519 17.0234 21.8642C16.8111 22.0764 16.5232 22.1957 16.2231 22.1957C15.9229 22.1957 15.635 22.0764 15.4227 21.8642C15.2105 21.6519 15.0912 21.364 15.0912 21.0638V4.50425L12.5559 7.46363C12.4592 7.57659 12.3412 7.6694 12.2086 7.73676C12.076 7.80411 11.9315 7.84469 11.7832 7.85618C11.6349 7.86767 11.4859 7.84985 11.3445 7.80373C11.2031 7.75761 11.0722 7.68409 10.9592 7.58738C10.8463 7.49067 10.7535 7.37265 10.6861 7.24007C10.6188 7.10749 10.5782 6.96295 10.5667 6.81468C10.5552 6.66642 10.573 6.51735 10.6191 6.37597C10.6653 6.2346 10.7388 6.10369 10.8355 5.99073L15.3629 0.708805C15.4692 0.584706 15.6011 0.485106 15.7496 0.416853C15.8981 0.3486 16.0596 0.313312 16.2231 0.313416ZM8.67141 10.8803C8.97159 10.8787 9.26012 10.9964 9.47351 11.2075C9.6869 11.4187 9.80769 11.7059 9.80929 12.0061C9.81089 12.3063 9.69318 12.5948 9.48205 12.8082C9.27092 13.0216 8.98367 13.1424 8.68348 13.144C7.03401 13.153 5.86444 13.1953 4.97557 13.3583C4.12141 13.5167 3.62491 13.7687 3.25819 14.1355C2.84017 14.5535 2.56852 15.1405 2.41912 16.2482C2.2667 17.3876 2.26368 18.8982 2.26368 21.0638V22.573C2.26368 24.7401 2.2667 26.2507 2.41912 27.3901C2.56852 28.4978 2.84168 29.0833 3.25819 29.5028C3.67622 29.9194 4.26176 30.191 5.37096 30.3404C6.50884 30.4943 8.02098 30.4958 10.1866 30.4958H22.2595C24.4251 30.4958 25.9358 30.4943 27.0767 30.3404C28.1843 30.191 28.7699 29.9194 29.1879 29.5013C29.6059 29.0833 29.8776 28.4978 30.027 27.3901C30.1794 26.2507 30.1824 24.7401 30.1824 22.573V21.0638C30.1824 18.8982 30.1794 17.3876 30.027 16.2467C29.8776 15.1405 29.6044 14.5535 29.1879 14.1355C28.8197 13.7687 28.3247 13.5167 27.4705 13.3583C26.5817 13.1953 25.4121 13.153 23.7626 13.144C23.614 13.1432 23.467 13.1131 23.3299 13.0555C23.1929 12.9979 23.0686 12.9138 22.9641 12.8082C22.8595 12.7025 22.7768 12.5773 22.7207 12.4397C22.6645 12.3021 22.636 12.1547 22.6368 12.0061C22.6376 11.8575 22.6677 11.7104 22.7253 11.5734C22.7829 11.4364 22.8669 11.3121 22.9726 11.2075C23.0783 11.103 23.2035 11.0203 23.3411 10.9641C23.4787 10.908 23.6261 10.8795 23.7747 10.8803C25.4076 10.8893 26.7673 10.9286 27.8795 11.1323C29.0234 11.3436 29.9968 11.7435 30.7891 12.5358C31.6976 13.4428 32.0869 14.5882 32.271 15.9464C32.4461 17.2533 32.4461 18.9179 32.4461 20.9808V22.656C32.4461 24.7204 32.4461 26.3835 32.271 27.6919C32.0869 29.0501 31.6976 30.194 30.7891 31.1025C29.8806 32.011 28.7367 32.4004 27.3785 32.5845C26.0701 32.7595 24.4055 32.7595 22.3425 32.7595H10.1036C8.0406 32.7595 6.37604 32.7595 5.06763 32.5845C3.70942 32.4019 2.56551 32.011 1.65702 31.1025C0.748524 30.194 0.359171 29.0501 0.176567 27.6919C-2.24877e-08 26.3835 0 24.7189 0 22.656V20.9808C0 18.9179 -2.24877e-08 17.2533 0.176567 15.9449C0.357662 14.5867 0.750033 13.4428 1.65702 12.5343C2.4493 11.7435 3.42269 11.3421 4.5666 11.1323C5.67882 10.9286 7.03854 10.8893 8.67141 10.8803Z"
                      fill="#ABAFB1"
                    />
                  </svg>
                </div>
                <span className={styles.uploadText}>
                  {documentFiles.length > 0
                    ? `${documentFiles.length} file(s) uploaded`
                    : "Upload Company Documents"}
                </span>
              </div>
            </div>

            {/* Additional Fields */}
            {additionalFields.map((field) => (
              <div key={field.id} className={styles.additionalField}>
                <input
                  type="text"
                  placeholder="Additional Field"
                  value={field.value}
                  onChange={(e) =>
                    handleAdditionalFieldChange(field.id, e.target.value)
                  }
                  className={styles.input}
                />
              </div>
            ))}

            {/* Add More Buttons */}
            <div className={styles.addMoreButtons}>
              <button
                type="button"
                onClick={addNewField}
                className={styles.addButton}
              >
                +
              </button>
              <button
                type="button"
                onClick={addNewField}
                className={styles.addButton}
              >
                +
              </button>
              <button
                type="button"
                onClick={addNewField}
                className={styles.addButton}
              >
                +
              </button>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <button
            type="button"
            onClick={handleCancel}
            className={styles.cancelButton}
          >
            Cancel
          </button>
          <button type="submit" className={styles.saveButton}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
