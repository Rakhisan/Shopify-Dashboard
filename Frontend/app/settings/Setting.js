'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './Setting.module.css';

export default function Setting() {
    const [activeTab, setActiveTab] = useState('security');
    const [profileData, setProfileData] = useState({
        displayName: 'Shreyash',
        email: 'testing@gmail.com',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [notifications, setNotifications] = useState({
        inventoryChange: true,
        priceChanges: false,
        skuChanges: true,
        cancelledOrder: true
    });

    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false
    });

    const profileRef = useRef(null);
    const passwordRef = useRef(null);
    const notificationsRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNotificationToggle = (key) => {
        setNotifications(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleUpdatePassword = () => {
        if (profileData.newPassword !== profileData.confirmPassword) {
            alert('New passwords do not match!');
            return;
        }
        console.log('Password updated successfully');
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('Image uploaded:', file);
        }
    };

    const scrollToSection = (section) => {
        setActiveTab(section);
        const refs = {
            profile: profileRef,
            security: passwordRef,
            notifications: notificationsRef
        };

        if (refs[section]?.current) {
            refs[section].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Handle scroll spy to update active tab
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { ref: profileRef, id: 'profile' },
                { ref: passwordRef, id: 'security' },
                { ref: notificationsRef, id: 'notifications' }
            ];

            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
                    setActiveTab(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div
                    className={`${styles.userInfo} ${activeTab === 'profile' ? styles.active : ''}`}
                    onClick={() => scrollToSection('profile')}
                >
                    <div className={styles.avatar}>
                        <img src="/api/placeholder/40/40" alt="User Avatar" />
                    </div>
                    <div className={styles.userDetails}>
                        <h3>Shreyash</h3>
                        <p>test@gmail.com</p>
                    </div>
                </div>

                <div className={styles.menuItems}>
                    <div
                        className={`${styles.menuItem} ${activeTab === 'security' ? styles.active : ''}`}
                        onClick={() => scrollToSection('security')}
                    >
                        <div className={styles.menuIcon}><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <path d="M21.6667 13.0003C21.6667 11.8054 20.6949 10.8337 19.5 10.8337H18.4167V7.58366C18.4167 4.59691 15.9868 2.16699 13 2.16699C10.0133 2.16699 7.58334 4.59691 7.58334 7.58366V10.8337H6.50001C5.30509 10.8337 4.33334 11.8054 4.33334 13.0003V21.667C4.33334 22.8619 5.30509 23.8337 6.50001 23.8337H19.5C20.6949 23.8337 21.6667 22.8619 21.6667 21.667V13.0003ZM9.75001 7.58366C9.75001 5.79183 11.2082 4.33366 13 4.33366C14.7918 4.33366 16.25 5.79183 16.25 7.58366V10.8337H9.75001V7.58366Z" fill="black" />
                            </g>
                        </svg>
                        </div>
                        <div>
                            <div className={styles.menuTitle}>Security</div>
                            <div className={styles.menuSubtitle}>Change Password</div>
                        </div>
                    </div>

                    <div
                        className={`${styles.menuItem} ${activeTab === 'notifications' ? styles.active : ''}`}
                        onClick={() => scrollToSection('notifications')}
                    >
                        <div className={styles.menuIcon}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <path d="M17.3333 4.33301C19.3667 4.33301 21.3167 5.14074 22.7545 6.57852C24.1923 8.0163 25 9.96635 25 11.9997V19.9997C25 20.9721 24.6137 21.9048 23.9261 22.5924C23.2384 23.28 22.3058 23.6663 21.3333 23.6663H10.6667C9.69421 23.6663 8.76157 23.28 8.07394 22.5924C7.38631 21.9048 7 20.9721 7 19.9997V11.9997C7 9.96635 7.80774 8.0163 9.24551 6.57852C10.6833 5.14074 12.6333 4.33301 14.6667 4.33301H17.3333ZM17.3333 6.33301H14.6667C13.1638 6.33301 11.7224 6.93003 10.6597 7.99274C9.59702 9.05544 9 10.4968 9 11.9997V19.9997C9 20.4417 9.17559 20.8656 9.48816 21.1782C9.80072 21.4907 10.2246 21.6663 10.6667 21.6663H21.3333C21.7754 21.6663 22.1993 21.4907 22.5118 21.1782C22.8244 20.8656 23 20.4417 23 19.9997V11.9997C23 10.4968 22.403 9.05544 21.3403 7.99274C20.2776 6.93003 18.8362 6.33301 17.3333 6.33301ZM18.6667 25.6663C18.9319 25.6663 19.1862 25.7717 19.3738 25.9592C19.5613 26.1468 19.6667 26.4011 19.6667 26.6663C19.6667 26.9316 19.5613 27.1859 19.3738 27.3734C19.1862 27.561 18.9319 27.6663 18.6667 27.6663H13.3333C13.0681 27.6663 12.8138 27.561 12.6262 27.3734C12.4387 27.1859 12.3333 26.9316 12.3333 26.6663C12.3333 26.4011 12.4387 26.1468 12.6262 25.9592C12.8138 25.7717 13.0681 25.6663 13.3333 25.6663H18.6667Z" fill="black" />
                                </g>
                            </svg>

                        </div>
                        <div>
                            <div className={styles.menuTitle}>Notification</div>
                            <div className={styles.menuSubtitle}>Change the way you receive notifications</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
                {/* Profile Section */}
                <div ref={profileRef} className={styles.profileSection}>
                    <div className={styles.sectionHeader}>
                        <h2>Profile Information</h2>
                        <div className={styles.profileImageSection}>
                            <div className={styles.profileImage}>
                                <img src="/api/placeholder/80/80" alt="Profile" />
                            </div>
                            <div className={styles.imageUploadText}>
                                <p>Update your avatar by clicking the image beside. (350x350 or 400x400 recommended as PNG or JPG format only.)</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className={styles.hiddenFileInput}
                                    id="imageUpload"
                                />

                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Display Name</label>
                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                name="displayName"
                                value={profileData.displayName}
                                onChange={handleInputChange}
                                className={styles.input}
                            />
                            <span className={styles.inputIcon}>✓</span>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Email</label>
                        <div className={styles.inputWrapper}>
                            <input
                                type="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleInputChange}
                                className={styles.input}
                            />
                            <span className={styles.inputIcon}>✓</span>
                        </div>
                    </div>
                </div>

                {/* Password Section */}
                <div ref={passwordRef} className={styles.passwordSection}>
                    <h3>Password</h3>

                    <div className={styles.passwordRow}>
                        <div className={styles.formGroup}>
                            <label>Password</label>
                            <div className={styles.passwordInputWrapper}>
                                <input
                                    type={showPasswords.current ? "text" : "password"}
                                    name="currentPassword"
                                    value={profileData.currentPassword}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    placeholder="••••••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility('current')}
                                    className={styles.passwordToggle}
                                >
                                    {showPasswords.current ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                        </div>
                        <div className={styles.forgotPassword}>
                            <a href="#">Forgot Password ?</a>
                        </div>
                    </div>

                    <div className={styles.passwordRow}>
                        <div className={styles.formGroup}>
                            <label>New Password</label>
                            <div className={styles.passwordInputWrapper}>
                                <input
                                    type={showPasswords.new ? "text" : "password"}
                                    name="newPassword"
                                    value={profileData.newPassword}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    placeholder="••••••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility('new')}
                                    className={styles.passwordToggle}
                                >
                                    {showPasswords.new ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Confirm New Password</label>
                            <div className={styles.passwordInputWrapper}>
                                <input
                                    type={showPasswords.confirm ? "text" : "password"}
                                    name="confirmPassword"
                                    value={profileData.confirmPassword}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    placeholder="••••••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility('confirm')}
                                    className={styles.passwordToggle}
                                >
                                    {showPasswords.confirm ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        className={styles.updateButton}
                        onClick={handleUpdatePassword}
                    >
                        Update Password
                    </button>
                </div>

                {/* Notifications Section */}
                <div ref={notificationsRef} className={styles.notificationSection}>
                    <h2>Notification</h2>

                    <div className={styles.notificationItem}>
                        <div className={styles.notificationIcon}>
                            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.4167 35.5288L15.625 27.7372L18.1917 25.1705L23.4167 30.3955L33.775 20.0372L36.3417 22.6038L23.4167 35.5288ZM33.5 17.333H29.8333V8.16634H26.1667V13.6663H7.83333V8.16634H4.16667V33.833H15.1667V37.4997H4.16667C3.15833 37.4997 2.29544 37.141 1.578 36.4235C0.860556 35.7061 0.501222 34.8426 0.5 33.833V8.16634C0.5 7.15801 0.859333 6.29512 1.578 5.57767C2.29667 4.86023 3.15956 4.5009 4.16667 4.49967H11.8208C12.1569 3.43023 12.8139 2.55206 13.7917 1.86517C14.7694 1.17829 15.8389 0.83423 17 0.833008C18.2222 0.833008 19.3149 1.17706 20.278 1.86517C21.2411 2.55329 21.8901 3.43145 22.225 4.49967H29.8333C30.8417 4.49967 31.7052 4.85901 32.4238 5.57767C33.1425 6.29634 33.5012 7.15923 33.5 8.16634V17.333ZM17 8.16634C17.5194 8.16634 17.9552 7.99034 18.3072 7.63834C18.6592 7.28634 18.8346 6.85123 18.8333 6.33301C18.8321 5.81479 18.6561 5.37967 18.3053 5.02767C17.9546 4.67567 17.5194 4.49967 17 4.49967C16.4806 4.49967 16.0454 4.67567 15.6947 5.02767C15.3439 5.37967 15.1679 5.81479 15.1667 6.33301C15.1654 6.85123 15.3414 7.28695 15.6947 7.64017C16.0479 7.9934 16.483 8.16879 17 8.16634Z" fill="black" />
                            </svg>

                        </div>
                        <div className={styles.notificationContent}>
                            <h4>Inventory Change</h4>
                            <p>We will notify you when a supplier product you are mapping has the status changed to "Cancelled", "Out of stock", or "Advance out of stock".</p>
                        </div>
                        <div className={styles.toggleSwitch}>
                            <input
                                type="checkbox"
                                id="inventoryChange"
                                checked={notifications.inventoryChange}
                                onChange={() => handleNotificationToggle('inventoryChange')}
                            />
                            <label htmlFor="inventoryChange" className={styles.switch}></label>
                        </div>
                    </div>

                    <div className={styles.notificationItem}>
                        <div className={styles.notificationIcon}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.88 24.8951C3.305 22.3184 2.01667 21.0318 1.53833 19.3601C1.05833 17.6884 1.46833 15.9134 2.28833 12.3651L2.76 10.3184C3.44833 7.33175 3.79333 5.83842 4.815 4.81508C5.83667 3.79175 7.33167 3.44842 10.3183 2.76008L12.365 2.28675C15.915 1.46842 17.6883 1.05842 19.36 1.53675C21.0317 2.01675 22.3183 3.30508 24.8933 5.88008L27.9433 8.93008C32.4283 13.4134 34.6667 15.6534 34.6667 18.4368C34.6667 21.2218 32.4267 23.4618 27.945 27.9434C23.4617 32.4268 21.2217 34.6668 18.4367 34.6668C15.6533 34.6668 13.4117 32.4267 8.93 27.9451L5.88 24.8951Z" stroke="black" strokeWidth="1.5" />
                                <path d="M23.65 23.6504C24.625 22.6721 24.7567 21.2221 23.9433 20.4071C23.13 19.5921 21.6783 19.7254 20.7017 20.7021C19.7267 21.6788 18.275 21.8104 17.4617 20.9971C16.6483 20.1838 16.78 18.7321 17.7567 17.7571M17.7567 17.7571L17.1667 17.1671M17.7567 17.7571C18.3083 17.2038 19.0117 16.9238 19.6667 16.9288M24.2383 24.2388L23.6483 23.6488C22.9817 24.3171 22.09 24.5904 21.3333 24.4338" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M14.702 15.1558C16.0038 13.8541 16.0038 11.7436 14.702 10.4418C13.4003 9.14006 11.2898 9.14006 9.988 10.4418C8.68626 11.7436 8.68626 13.8541 9.988 15.1559C11.2898 16.4576 13.4003 16.4576 14.702 15.1558Z" stroke="black" strokeWidth="1.5" />
                            </svg>

                        </div>
                        <div className={styles.notificationContent}>
                            <h4>Price changes</h4>
                            <p>When the product cost of the supplier you mapped has changed, We will notify you.</p>
                        </div>
                        <div className={styles.toggleSwitch}>
                            <input
                                type="checkbox"
                                id="priceChanges"
                                checked={notifications.priceChanges}
                                onChange={() => handleNotificationToggle('priceChanges')}
                            />
                            <label htmlFor="priceChanges" className={styles.switch}></label>
                        </div>
                    </div>

                    <div className={styles.notificationItem}>
                        <div className={styles.notificationIcon}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <path d="M15 1.875L28 8.375V24.625L15 31.1094L2 24.625V8.375L15 1.875ZM24.7656 9L15 4.125L11.2344 6L20.9375 10.9062L24.7656 9ZM15 13.875L18.7188 12.0312L9 7.125L5.23438 9L15 13.875ZM4 10.625V23.375L14 28.375V15.625L4 10.625ZM16 28.375L26 23.375V10.625L16 15.625V28.375Z" fill="black" />
                                </g>
                            </svg>

                        </div>
                        <div className={styles.notificationContent}>
                            <h4>SKU changes</h4>
                            <p>We will notify you when the supplier's product SKU name you are mapping changes or when an option is added, causing the mapping to fail.</p>
                        </div>
                        <div className={styles.toggleSwitch}>
                            <input
                                type="checkbox"
                                id="skuChanges"
                                checked={notifications.skuChanges}
                                onChange={() => handleNotificationToggle('skuChanges')}
                            />
                            <label htmlFor="skuChanges" className={styles.switch}></label>
                        </div>
                    </div>

                    <div className={styles.notificationItem}>
                        <div className={styles.notificationIcon}>
                            <svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7969 9.20312L9.20312 21.7969M9.20312 9.20312L21.7969 21.7969" stroke="black" strokeWidth="2.90625" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                        <div className={styles.notificationContent}>
                            <h4>Cancelled order</h4>
                            <p>We will notify you when your purchase order is cancelled.</p>
                        </div>
                        <div className={styles.toggleSwitch}>
                            <input
                                type="checkbox"
                                id="cancelledOrder"
                                checked={notifications.cancelledOrder}
                                onChange={() => handleNotificationToggle('cancelledOrder')}
                            />
                            <label htmlFor="cancelledOrder" className={styles.switch}></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}