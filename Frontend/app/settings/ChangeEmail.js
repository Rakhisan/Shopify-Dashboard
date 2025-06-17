'use client';

import { useState } from 'react';

export default function ChangeEmail() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('Testing@gmail.com');
    const [toggle, setToggle] = useState(false);

    const handleUpdate = () => {
        console.log('Updated Email:', email);
        setIsOpen(false);
    };

    return (
        <div>
            {/* Trigger button */}
            <button
                onClick={() => setIsOpen(true)}
                className="text-blue-600 underline text-sm font-medium"
            >
                Change Email Address
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    {/* Modal Content */}
                    <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Change Email Address</h2>

                        {/* Inventory Change Section */}
                        <div className="flex items-start gap-3 mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1828/1828940.png"
                                alt="icon"
                                className="w-6 h-6 mt-1"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-semibold">Inventory Change</p>
                                <p className="text-xs text-gray-500">
                                    We will notify you when a supplier product you are mapping has the status
                                    "Product not found", "Product out of stock", or "Variants out of stock".
                                </p>
                            </div>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={toggle}
                                    onChange={() => setToggle(!toggle)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 relative"></div>
                            </label>
                        </div>

                        {/* Email Input */}
                        <div className="mb-4 relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-blue-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute right-3 top-2.5 text-blue-400 text-xl">✔</div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center justify-between">
                            <button
                                onClick={handleUpdate}
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Update Email
                            </button>
                            <button
                                className="text-blue-600 text-sm font-medium underline"
                                onClick={() => alert('Add Email Address Clicked!')}
                            >
                                Add Email Address!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
