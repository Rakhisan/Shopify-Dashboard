'use client';

import { useState } from 'react';
import shopifyLogo from "../../images/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import NewPassword from './NewPassword.js';

export default function ResetPasswordPage() {
    const [email, setEmail] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setShowNewPassword(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <Image
                        src={shopifyLogo}
                        className="mx-auto h-12 w-auto"
                        alt="Shopify"
                    />

                    {!showNewPassword ? (
                        <>
                            <h2 className="mt-6 text-2xl font-bold text-gray-900">Reset Your Password</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Enter your email and we’ll send you password reset instructions.
                            </p>
                        </>
                    ) : (
                        <>
                            <h2 className="mt-6 text-2xl font-bold text-gray-900">Update Your Password</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Set your password with minimum 8 characters using a combination of letters and numbers.
                            </p>
                        </>
                    )}
                </div>

                {!showNewPassword ? (
                    <form className="mt-8 space-y-6" onSubmit={handleEmailSubmit}>
                        <div className="rounded-md shadow-sm">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Email Address*
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent sm:text-sm"
                                placeholder="Email Address"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2FB4FF] hover:bg-[#1DADEB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2FB4FF]"
                        >
                            Log In
                        </button>

                        <button
                            type="button"
                            className="w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                            onClick={() => window.location.href = '/auth/login'}
                        >
                            Back To Login
                        </button>
                    </form>
                ) : (
                    <NewPassword />
                )}

                <div className="text-center text-xs text-gray-500 mt-4">
                    © 2025 Shopify Dashboard. All rights reserved.{' '}
                    <Link href="#" className="text-blue-500 underline">
                        Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="#" className="text-blue-500 underline">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    );
}
