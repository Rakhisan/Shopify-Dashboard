'use client';

import { useState } from 'react';
import { CheckCircle, Cancel, Visibility, VisibilityOff } from '@mui/icons-material';
import shopifyLogo from "../../images/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import OTP from "./OTP.js";

export default function UpdatePasswordPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showValidations, setShowValidations] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const [showOTP, setShowOTP] = useState(false);
    const [email, setEmail] = useState('abc@gmail.com');

    const validations = {
        length: password.length >= 8,
        number: /\d/.test(password),
        lowercase: /[a-z]/.test(password),
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setShowValidations(value.length > 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword && Object.values(validations).every(Boolean)) {
            console.log('Password updated:', password);
            setSubmitted(true);
            setShowOTP(true);
        } else {
            alert("Passwords do not match or don't meet criteria");
        }
    };


    if (showOTP) {
        return <OTP email={email} onBack={() => setShowOTP(false)} />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

            <div className="absolute inset-0 pointer-events-none">
                <svg width="1325" className="absolute top-0 left-12 w-full h-40" height="144" viewBox="0 0 1325 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.06162 -182.104C14.588 -64.4338 86.9763 94.1312 408.096 33.1302C526.663 10.6079 627.33 -19.6549 716.205 -46.3712C966.783 -121.698 1123.72 -168.825 1324.27 64.5934V65.8655C1123.73 -167.949 966.927 -120.865 716.425 -45.5626C627.539 -18.8428 526.858 11.4239 408.238 33.9566C89.5883 94.4859 15.2951 -60.7195 2.63345 -178.335L2.57825 -177.629C12.4896 -59.5058 82.2258 104.705 408.096 42.803C526.663 20.2804 627.33 -9.98206 716.205 -36.6983C966.783 -112.025 1123.72 -159.152 1324.27 74.2663V75.5384C1123.73 -158.276 966.927 -111.192 716.425 -35.8899C627.539 -9.17024 526.858 21.0966 408.238 43.6293C85.911 104.859 13.6047 -54.664 2.21057 -172.724L2.20721 -172.671C10.6671 -54.2655 77.8739 115.205 408.096 52.4755C526.663 29.9529 627.33 -0.309525 716.205 -27.0258C966.783 -102.352 1123.72 -149.479 1324.27 83.9388V85.2109C1123.73 -148.604 966.927 -101.52 716.425 -26.2172C627.539 0.502457 526.858 30.7693 408.238 53.3017C85.6435 114.582 13.4831 -45.2587 2.18082 -163.347C10.5347 -44.9252 77.5536 124.94 408.096 62.1482C526.663 39.6256 627.33 9.36316 716.205 -17.3531C966.783 -92.6796 1123.72 -139.807 1324.27 93.611V94.8835C1123.73 -138.931 966.927 -91.8469 716.425 -16.5446C627.539 10.1746 526.858 40.4418 408.238 62.9742C85.6381 124.255 13.4811 -35.5949 2.17969 -153.683C10.5307 -35.2638 77.5451 134.612 408.096 71.8209C526.663 49.2983 627.33 19.0359 716.205 -7.68039C966.783 -83.0073 1123.72 -130.134 1324.27 103.284V104.556C1123.73 -129.259 966.927 -82.1743 716.425 -6.87196C627.539 19.8473 526.858 50.1145 408.238 72.6469C85.6443 133.928 13.4842 -25.9145 2.18082 -144.001C10.5341 -25.5834 77.5525 144.284 408.096 81.4936C526.663 58.9708 627.33 28.7084 716.205 1.99196C966.783 -73.3346 1123.72 -120.462 1324.27 112.957V114.229C1123.73 -119.586 966.927 -72.5016 716.425 2.8004C627.539 29.52 526.858 59.7868 408.238 82.3195C85.6435 143.601 13.4842 -16.2423 2.18082 -134.33C10.5341 -15.9083 77.5507 153.958 408.096 91.166C526.663 68.6437 627.33 38.3809 716.205 11.6647C966.783 -63.6619 1123.72 -110.789 1324.27 122.629V123.901C1123.73 -109.913 966.927 -62.8294 716.425 12.4731C627.539 39.1927 526.858 69.4595 408.238 91.9922C85.6381 153.275 13.4811 -6.57735 2.17969 -124.665C10.5296 -6.24573 77.5432 163.631 408.096 100.839C526.663 78.3159 627.33 48.0534 716.205 21.3372C966.783 -53.9894 1123.72 -101.117 1324.27 132.302V133.574C1123.73 -100.24 966.927 -53.1567 716.425 22.1458C627.539 48.8654 526.858 79.1322 408.238 101.665C85.6402 162.946 13.4811 3.10072 2.17969 -114.987C10.533 3.43353 77.5485 173.304 408.096 110.511C526.663 87.9886 627.33 57.7261 716.205 31.0099C966.783 -44.3167 1123.72 -91.4438 1324.27 141.974V143.246C1123.73 -90.5679 966.927 -43.484 716.425 31.8183C627.539 58.5379 526.858 88.8047 408.238 111.337C44.0104 180.526 -0.987185 -32.1757 0.426255 -148.389C0.389295 -151.678 0.388175 -154.915 0.426255 -158.07C0.389295 -161.353 0.388175 -164.585 0.426255 -167.733C0.389295 -171.023 0.388175 -174.26 0.426255 -177.414C0.408335 -178.991 0.398736 -180.556 0.397456 -182.104H3.06162ZM4.14193 -182.104C18.7042 -65.6553 95.695 82.8023 408.096 23.458C526.663 0.935364 627.33 -29.3271 716.205 -56.0434C966.783 -131.37 1123.72 -178.497 1324.27 54.9209V56.1934C1123.73 -177.621 966.927 -130.537 716.425 -55.2352C627.539 -28.5156 526.858 1.75153 408.238 24.2839C94.8843 83.8094 17.8499 -65.2843 3.33538 -182.104H4.14193ZM5.49601 -182.104C23.1235 -67.322 104.281 71.4971 408.096 13.7853C526.663 -8.73734 627.33 -38.9998 716.205 -65.716C966.783 -141.043 1123.72 -188.17 1324.27 45.248V46.5205C1123.73 -187.294 966.927 -140.21 716.425 -64.9076C627.539 -38.1883 526.858 -7.92116 408.238 14.6112C103.469 72.5055 22.2581 -66.9386 4.68082 -182.104H5.49601ZM7.13538 -182.104C27.8403 -69.3874 112.765 60.2145 408.096 4.11258C526.663 -18.41 627.33 -48.6727 716.205 -75.3887C966.783 -150.715 1123.72 -197.842 1324.27 35.5755V36.848C1123.73 -196.967 966.927 -149.883 716.425 -74.5803C627.539 -47.861 526.858 -17.5939 408.238 4.93852C111.952 61.2193 26.9619 -68.9998 6.30897 -182.104H7.13538ZM9.07105 -182.104C32.8562 -71.8249 121.177 48.9424 408.096 -5.56012C526.663 -28.0827 627.33 -58.3452 716.205 -85.0614C966.783 -160.388 1123.72 -207.515 1324.27 25.9032V27.1753C1123.73 -206.639 966.927 -159.555 716.425 -84.253C627.539 -57.5334 526.858 -27.2665 408.238 -4.73416C120.365 49.9508 31.965 -71.4239 8.23585 -182.104H9.07105ZM11.3286 -182.104C38.187 -74.599 129.55 37.6806 408.096 -15.2328C526.663 -37.7554 627.33 -68.0179 716.205 -94.7341C966.783 -170.061 1123.72 -217.188 1324.27 16.2305V17.5026C1123.73 -216.312 966.927 -169.228 716.425 -93.9257C627.539 -67.2059 526.858 -36.9392 408.238 -14.4064C128.727 38.6878 37.2791 -74.1895 10.4789 -182.104H11.3286ZM13.925 -182.104C43.8341 -77.6949 137.895 26.4222 408.096 -24.905C526.663 -47.4276 627.33 -77.6906 716.205 -104.407C966.783 -179.733 1123.72 -226.86 1324.27 6.55794V7.83008C1123.73 -225.984 966.927 -178.9 716.425 -103.598C627.539 -76.8786 526.858 -46.6119 408.238 -24.079C137.075 27.4317 42.911 -77.2718 13.0594 -182.104H13.925ZM16.8882 -182.104C49.8171 -81.0798 146.241 15.1626 408.097 -34.5777C526.664 -57.1003 627.33 -87.3628 716.206 -114.079C966.783 -189.406 1123.72 -236.533 1324.27 -3.11476V-1.84229C1123.73 -235.657 966.927 -188.573 716.425 -113.271C627.539 -86.5513 526.858 -56.2841 408.238 -33.7517C145.421 16.1741 48.8784 -80.6501 16.0055 -182.104H16.8882ZM1056.69 -182.104C1145.73 -170.024 1230.21 -122.267 1324.27 -12.7874V-11.515C1227.67 -124.143 1141.21 -171.589 1049.55 -182.104H1056.69ZM20.2485 -182.104C56.1586 -84.7465 154.618 3.89941 408.096 -44.2504C526.663 -66.773 627.33 -97.0354 716.205 -123.752C805.496 -150.594 882.882 -173.842 954.603 -182.104H962.576C888.692 -174.725 808.953 -150.757 716.426 -122.943C627.539 -96.224 526.858 -65.9568 408.238 -43.4244C153.785 4.91211 55.1936 -84.3048 19.3406 -182.104H20.2485ZM1102.89 -182.104C1175.46 -161.206 1246.6 -112.865 1324.27 -22.4601V-21.1877C1245.38 -113.17 1173.25 -161.683 1099.52 -182.104H1102.89ZM24.0368 -182.104C62.8738 -88.6783 163.045 -7.37334 408.096 -53.9231C526.663 -76.4457 627.33 -106.708 716.205 -133.424C781.506 -153.055 840.441 -170.771 895.453 -182.104H899.769C843.594 -170.832 783.359 -152.737 716.425 -132.616C627.539 -105.897 526.858 -75.6295 408.238 -53.0971C162.208 -6.35963 61.8834 -88.2254 23.1016 -182.104H24.0368ZM1131.42 -182.104C1194.25 -157.477 1256.79 -110.669 1324.27 -32.1325V-30.8604C1255.87 -110.61 1192.55 -157.687 1128.87 -182.104H1131.42ZM28.3075 -182.104C69.985 -92.8632 171.517 -18.654 408.097 -63.5958C526.664 -86.1184 627.33 -116.381 716.206 -143.097C765.122 -157.801 810.461 -171.427 853.261 -182.104H856.788C813.019 -171.315 766.61 -157.374 716.426 -142.289C627.539 -115.569 526.858 -85.3022 408.238 -62.7693C170.713 -17.6504 68.9957 -92.4013 27.3458 -182.104H28.3075Z" fill="#ACBAC9" />
                </svg>
            </div>


            <div className="absolute inset-0 pointer-events-none">
                <svg
                    width="1440"
                    height="321"
                    viewBox="0 0 1440 321"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 left-0 w-full h-auto"
                    preserveAspectRatio="xMidYMax slice"
                >
                    <path
                        opacity="0.25"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M458.358 147.639C204.663 184.704 61.4981 69.5464 0 0V321H1440C1433.42 314.04 1426.86 306.777 1420.34 299.199C1171.55 10.2883 814.954 95.5417 458.358 147.639Z"
                        fill="#ACBAC9"
                    />
                </svg>
            </div>

            <div className="max-w-md w-full space-y-6">
                <div className="text-center">
                    <Image
                        src={shopifyLogo}
                        className="mx-auto h-10 sm:h-12 w-auto"
                        alt="Shopify"
                    />
                    <h2 className="mt-6 text-2xl font-bold text-[#101010]">Update your password</h2>
                    <p className="mt-2 text-sm text-[#333333]">
                        Set your password with minimum 8 characters with a combination of letters and numbers
                    </p>
                </div>

                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-[#333333]">
                            New Password*
                        </label>
                        <div className="relative">
                            <input
                                id="new-password"
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={handlePasswordChange}
                                className="w-full px-3 py-2 pr-10 border border-[#CECECE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                                placeholder="New password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? (
                                    <VisibilityOff className="h-5 w-5" />
                                ) : (
                                    <Visibility className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {showValidations && (
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-1">
                                {validations.length ? (
                                    <CheckCircle className="text-[#98C050]" style={{ fontSize: '16px' }} />
                                ) : (
                                    <Cancel className="text-[#E80054]" style={{ fontSize: '16px' }} />
                                )}
                                <span className={validations.length ? 'text-[#98C050]' : 'text-[#E80054]'}>8 characters</span>
                            </div>
                            <div className="flex items-center gap-1">
                                {validations.number ? (
                                    <CheckCircle className="text-[#98C050]" style={{ fontSize: '16px' }} />
                                ) : (
                                    <Cancel className="text-[#E80054]" style={{ fontSize: '16px' }} />
                                )}
                                <span className={validations.number ? 'text-[#98C050]' : 'text-[#E80054]'}>Number(0-9)</span>
                            </div>
                            <div className="flex items-center gap-1 col-span-2">
                                {validations.lowercase ? (
                                    <CheckCircle className="text-[#98C050]" style={{ fontSize: '16px' }} />
                                ) : (
                                    <Cancel className="text-[#E80054]" style={{ fontSize: '16px' }} />
                                )}
                                <span className={validations.lowercase ? 'text-[#98C050]' : 'text-[#E80054]'}>
                                    Lowercase letter(a-z)
                                </span>
                            </div>
                        </div>
                    )}

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-[#333333]">
                            Confirmation New Password*
                        </label>
                        <div className="relative">
                            <input
                                id="confirm-password"
                                type={showConfirmPassword ? "text" : "password"}
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-3 py-2 pr-10 border border-[#CECECE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                                placeholder="Re-type new password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                            >
                                {showConfirmPassword ? (
                                    <VisibilityOff className="h-5 w-5" />
                                ) : (
                                    <Visibility className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 rounded-md bg-[#2FB4FF] hover:bg-[#1DADEB] text-white font-medium"
                        >
                            {submitted ? 'Updated!' : 'Submit'}
                        </button>
                    </div>
                </form>

                <div className="text-center text-xs text-gray-500 mt-4">
                    © 2025 Shopify Dashboard. All rights reserved.{' '}
                    <Link href="#" className="text-blue-500 underline">Terms & Conditions</Link> and{' '}
                    <Link href="#" className="text-blue-500 underline">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
}