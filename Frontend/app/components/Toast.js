'use client';

export default function Toast({ show, type, onClose }) {
    if (!show) return null;

    const isError = type === 'error';

    return (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50">
            <div className="w-[320px] rounded-xl px-6 py-5 bg-white shadow-2xl relative border border-gray-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold focus:outline-none"
                >
                    &times;
                </button>

                {/* Icon */}
                <div className="mb-3">
                    {isError ? (
                        <div className="text-red-500 flex justify-center mb-2">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <path
                                    d="M25.0002 0.833008C11.6602 0.833008 0.833496 11.6597 0.833496 24.9997C0.833496 38.3397 11.6602 49.1663 25.0002 49.1663C38.3402 49.1663 49.1668 38.3397 49.1668 24.9997C49.1668 11.6597 38.3402 0.833008 25.0002 0.833008ZM27.4168 37.083H22.5835V32.2497H27.4168V37.083ZM27.4168 27.4163H22.5835V12.9163H27.4168V27.4163Z"
                                    fill="#F32E2E"
                                />
                            </svg>
                        </div>
                    ) : (
                        <div className="text-[#2FB4FF] flex justify-center mb-2">
                            <svg width="50" height="50" viewBox="0 0 51 51" fill="none">
                                <path
                                    d="M47.9674 27.9129C46.1688 36.9057 39.3882 45.3734 29.8738 47.2655C25.2334 48.1896 20.4198 47.6262 16.1183 45.6554C11.8168 43.6846 8.24669 40.407 5.91636 36.2891C3.58604 32.1713 2.61427 27.4232 3.13942 22.721C3.66457 18.0188 5.65988 13.6021 8.84122 10.0998C15.3665 2.91268 26.3845 0.934244 35.3774 4.53139"
                                    stroke="#2FB4FF"
                                    strokeWidth="5.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17.3916 24.3154L26.3845 33.3082L47.9674 9.92676"
                                    stroke="#2FB4FF"
                                    strokeWidth="5.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Title */}
                <h2 className={`font-bold text-center  text-lg ${isError ? 'text-red-600' : 'text-[#2FB4FF]'}`}>
                    {isError ? 'ERROR!' : 'SUCCESS'}
                </h2>

                {/* Message */}
                <p className="text-gray-600 text-center  text-sm mt-1">
                    {isError ? 'We are unable to continue the process.' : 'Successfully updated.'}
                </p>

                {/* Action Button */}
                <button
                    onClick={onClose}
                    className={`mt-4 w-full py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isError
                        ? 'bg-[#F32E2E] text-white hover:bg-red-600'
                        : 'bg-[#2FB4FF] text-white hover:bg-[#199cdf]'
                        }`}
                >
                    {isError ? 'Try Again' : 'Continue'}
                </button>
            </div>
        </div>
    );
}
