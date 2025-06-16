'use client';

import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export default function UpdatePasswordPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const validations = {
        length: password.length >= 8,
        number: /\d/.test(password),
        lowercase: /[a-z]/.test(password),
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword && Object.values(validations).every(Boolean)) {
            console.log('Password updated:', password);
            setSubmitted(true);
        } else {
            alert("Passwords do not match or don't meet criteria");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-6">
                <div className="text-center">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://cdn.shopify.com/static/shopify-favicon.png"
                        alt="Shopify"
                    />
                    <h2 className="mt-6 text-2xl font-bold text-gray-900">Update your password</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Set your password with minimum 8 characters with a combination of letters and numbers
                    </p>
                </div>

                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                            New Password*
                        </label>
                        <input
                            id="new-password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                            placeholder="New password"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                            {validations.length ? (
                                <CheckCircle size={16} className="text-green-600" />
                            ) : (
                                <XCircle size={16} className="text-red-500" />
                            )}
                            <span className={validations.length ? 'text-green-600' : 'text-red-500'}>8 characters</span>
                        </div>
                        <div className="flex items-center gap-1">
                            {validations.number ? (
                                <CheckCircle size={16} className="text-green-600" />
                            ) : (
                                <XCircle size={16} className="text-red-500" />
                            )}
                            <span className={validations.number ? 'text-green-600' : 'text-red-500'}>Number(0-9)</span>
                        </div>
                        <div className="flex items-center gap-1 col-span-2">
                            {validations.lowercase ? (
                                <CheckCircle size={16} className="text-green-600" />
                            ) : (
                                <XCircle size={16} className="text-red-500" />
                            )}
                            <span className={validations.lowercase ? 'text-green-600' : 'text-red-500'}>
                                Lowercase letter(a-z)
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                            Confirmation New Password*
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                            placeholder="Re-type new password"
                        />
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
                    <a href="#" className="text-blue-500 underline">Terms & Conditions</a> and{' '}
                    <a href="#" className="text-blue-500 underline">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
}
