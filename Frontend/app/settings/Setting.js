'use client';

import { useState, useRef } from 'react';
import ChangeEmail from './ChangeEmail';

export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [notifications, setNotifications] = useState({
    inventoryChange: false,
    priceChanges: false,
    skuChanges: true,
    sendEmail: true
  });

  const [emailAddresses, setEmailAddresses] = useState({
    inventoryChange: '',
    priceChanges: '',
    skuChanges: '',
    sendEmail: ''
  });

  // Refs for sections
  const profileRef = useRef(null);
  const securityRef = useRef(null);
  const notificationRef = useRef(null);

  const toggleNotification = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEmailChange = (field, value) => {
    setEmailAddresses(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen">
      <div className="flex max-w-7xl mx-auto min-h-screen gap-6 p-6">
        {/* Sidebar - Fixed width and sticky */}
        <div className="w-80 flex-shrink-0">
          <div className="bg-white shadow-sm rounded-lg p-6 sticky top-6">
            {/* Profile Section */}
            <div className="flex items-center space-x-3 mb-8">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900">Shiv</h3>
                <p className="text-sm text-gray-500">Shivp@gmail.com</p>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="space-y-2">
              <div
                className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-100"
                onClick={() => scrollToSection(securityRef)}
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#EBEBEB]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M21.6667 13.0003C21.6667 11.8054 20.6949 10.8337 19.5 10.8337H18.4167V7.58366C18.4167 4.59691 15.9868 2.16699 13 2.16699C10.0133 2.16699 7.58334 4.59691 7.58334 7.58366V10.8337H6.50001C5.30509 10.8337 4.33334 11.8054 4.33334 13.0003V21.667C4.33334 22.8619 5.30509 23.8337 6.50001 23.8337H19.5C20.6949 23.8337 21.6667 22.8619 21.6667 21.667V13.0003ZM9.75001 7.58366C9.75001 5.79183 11.2082 4.33366 13 4.33366C14.7918 4.33366 16.25 5.79183 16.25 7.58366V10.8337H9.75001V7.58366Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Security</p>
                  <p className="text-xs text-gray-500">Change Password</p>
                </div>
              </div>

              <div
                className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-100"
                onClick={() => scrollToSection(notificationRef)}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M17.3333 4.33301C19.3667 4.33301 21.3167 5.14074 25 11.9997V19.9997C25 20.9721 24.6137 21.9048 23.9261 22.5924C23.2384 23.28 22.3058 23.6663 21.3333 23.6663H10.6667C9.69421 23.6663 8.76157 23.28 8.07394 22.5924C7.38631 21.9048 7 20.9721 7 19.9997V11.9997C7 9.96635 7.80774 8.0163 9.24551 6.57852C10.6833 5.14074 12.6333 4.33301 14.6667 4.33301H17.3333ZM17.3333 6.33301H14.6667C13.1638 6.33301 11.7224 6.93003 10.6597 7.99274C9.59702 9.05544 9 10.4968 9 11.9997V19.9997C9 20.4417 9.17559 20.8656 9.48816 21.1782C9.80072 21.4907 10.2246 21.6663 10.6667 21.6663H21.3333C21.7754 21.6663 22.1993 21.4907 22.5118 21.1782C22.8244 20.8656 23 20.4417 23 19.9997V11.9997C23 10.4968 22.403 9.05544 21.3403 7.99274C20.2776 6.93003 18.8362 6.33301 17.3333 6.33301ZM18.6667 25.6663C18.9319 25.6663 19.1862 25.7717 19.3738 25.9592C19.5613 26.1468 19.6667 26.4011 19.6667 26.6663C19.6667 26.9316 19.5613 27.1859 19.3738 27.3734C19.1862 27.561 18.9319 27.6663 18.6667 27.6663H13.3333C13.0681 27.6663 12.8138 27.561 12.6262 27.3734C12.4387 27.1859 12.3333 26.9316 12.3333 26.6663C12.3333 26.4011 12.4387 26.1468 12.6262 25.9592C12.8138 25.7717 13.0681 25.6663 13.3333 25.6663H18.6667Z" fill="black" />
                  </g>
                </svg>
                <div>
                  <p className="font-medium text-[#5E6366]">Notification</p>
                  <p className="text-xs text-gray-500">Choose how you receive notifications</p>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content - Flexible width with scroll */}
        <div className="flex-1 min-w-0">
          <div className="space-y-6 max-h-screen overflow-y-auto pr-2">
            {/* Profile Information */}
            <div ref={profileRef} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h2>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="text-sm text-gray-600">Update your avatar by clicking this image, supported .JPG or .PNG</p>
                  <p className="text-sm text-gray-600">file restricted to 2MB or 30% file size limit</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                  <input
                    type="text"
                    value={formData.displayName}
                    onChange={(e) => handleInputChange('displayName', e.target.value)}
                    className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Password Section */}
            <div ref={securityRef} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Password</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    value={formData.currentPassword}
                    onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                    placeholder="Enter current password"
                    className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                      type="password"
                      value={formData.newPassword}
                      onChange={(e) => handleInputChange('newPassword', e.target.value)}
                      placeholder="Enter new password"
                      className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      placeholder="Confirm new password"
                      className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <button className="bg-[#30B4FF] text-white px-4 py-2 rounded-md transition-colors">
                  Update Password
                </button>
              </div>
            </div>

            {/* Notification Section - Enhanced with email fields */}
            <div ref={notificationRef} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification</h2>

              <div className="space-y-8">
                {/* Inventory Change */}
                <div className=" pb-2">
                  <div className="flex items-start space-x-2 mb-2">
                    <div className="flex-shrink-0 mt-1">
                      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                          <path d="M28.4167 36.5288L20.625 28.7372L23.1917 26.1705L28.4167 31.3955L38.775 21.0372L41.3417 23.6038L28.4167 36.5288ZM38.5 18.333H34.8333V9.16634H31.1667V14.6663H12.8333V9.16634H9.16667V34.833H20.1667V38.4997H9.16667C8.15833 38.4997 7.29544 38.141 6.578 37.4235C5.86056 36.7061 5.50122 35.8426 5.5 34.833V9.16634C5.5 8.15801 5.85933 7.29512 6.578 6.57767C7.29667 5.86023 8.15956 5.5009 9.16667 5.49967H16.8208C17.1569 4.43023 17.8139 3.55206 18.7917 2.86517C19.7694 2.17829 20.8389 1.83423 22 1.83301C23.2222 1.83301 24.3149 2.17706 25.278 2.86517C26.2411 3.55329 26.8901 4.43145 27.225 5.49967H34.8333C35.8417 5.49967 36.7052 5.85901 37.4238 6.57767C38.1425 7.29634 38.5012 8.15923 38.5 9.16634V18.333ZM22 9.16634C22.5194 9.16634 22.9552 8.99034 23.3072 8.63834C23.6592 8.28634 23.8346 7.85123 23.8333 7.33301C23.8321 6.81479 23.6561 6.37967 23.3053 6.02767C22.9546 5.67567 22.5194 5.49967 22 5.49967C21.4806 5.49967 21.0454 5.67567 20.6947 6.02767C20.3439 6.37967 20.1679 6.81479 20.1667 7.33301C20.1654 7.85123 20.3414 8.28695 20.6947 8.64017C21.0479 8.9934 21.483 9.16879 22 9.16634Z" fill="black" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">Inventory Change</h3>
                      <p className="text-sm text-gray-600">
                        We will notify you when a supplier product you are mapping has the status "Product not found", "Product out of stock", or "Variants out of stock"
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => toggleNotification('inventoryChange')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications.inventoryChange ? 'bg-[#30B4FF]' : 'bg-gray-200'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.inventoryChange ? 'translate-x-6' : 'translate-x-1'}`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="ml-12">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={emailAddresses.inventoryChange}
                      onChange={(e) => handleEmailChange('inventoryChange', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="flex space-x-4 justify-between mt-2">
                      <button className="text-[#2FB4FF] font-medium text-sm hover:underline">Change Email Address!</button>
                      <button className="text-[#2FB4FF] font-medium text-sm justify-end hover:underline">Add Email Address!</button>
                    </div>
                  </div>
                </div>

                {/* Price Changes */}
                <div className=" pb-2">
                  <div className="flex items-start space-x-2 mb-2">
                    <div className="flex-shrink-0 mt-1">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                          <path d="M7.88 26.8951C5.305 24.3184 4.01667 23.0318 3.53833 21.3601C3.05833 19.6884 3.46833 17.9134 4.28833 14.3651L4.76 12.3184C5.44833 9.33175 5.79333 7.83842 6.815 6.81508C7.83667 5.79175 9.33167 5.44842 12.3183 4.76008L14.365 4.28675C17.915 3.46842 19.6883 3.05842 21.36 3.53675C23.0317 4.01675 24.3183 5.30508 26.8933 7.88008L29.9433 10.9301C34.4283 15.4134 36.6667 17.6534 36.6667 20.4368C36.6667 23.2218 34.4267 25.4618 29.945 29.9434C25.4617 34.4268 23.2217 36.6668 20.4367 36.6668C17.6533 36.6668 15.4117 34.4267 10.93 29.9451L7.88 26.8951Z" stroke="black" strokeWidth="1.5" />
                          <path d="M25.65 25.6504C26.625 24.6721 26.7567 23.2221 25.9433 22.4071C25.13 21.5921 23.6783 21.7254 22.7017 22.7021C21.7267 23.6788 20.275 23.8104 19.4617 22.9971C18.6483 22.1838 18.78 20.7321 19.7567 19.7571M19.7567 19.7571L19.1667 19.1671M19.7567 19.7571C20.3083 19.2038 21.0117 18.9238 21.6667 18.9288M26.2383 26.2388L25.6483 25.6488C24.9817 26.3171 24.09 26.5904 23.3333 26.4338" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M16.702 17.1558C18.0038 15.8541 18.0038 13.7436 16.702 12.4418C15.4003 11.1401 13.2898 11.1401 11.988 12.4418C10.6863 13.7436 10.6863 15.8541 11.988 17.1559C13.2898 18.4576 15.4003 18.4576 16.702 17.1558Z" stroke="black" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">Price changes</h3>
                      <p className="text-sm text-gray-600">
                        When the product cost of the supplier you mapped has changed, We will notify you.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => toggleNotification('priceChanges')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications.priceChanges ? 'bg-[#30B4FF]' : 'bg-gray-200'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.priceChanges ? 'translate-x-6' : 'translate-x-1'}`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="ml-12">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={emailAddresses.priceChanges}
                      onChange={(e) => handleEmailChange('priceChanges', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="flex space-x-4  justify-between mt-2">
                      <button className="text-[#2FB4FF] font-medium text-sm hover:underline">Change Email Address!</button>
                      <button className="text-[#2FB4FF] font-medium text-sm hover:underline">Add Email Address!</button>
                    </div>
                  </div>
                </div>

                {/* SKU Changes */}
                <div className="pb-2">
                  <div className="flex items-start space-x-2 mb-2">
                    <div className="flex-shrink-0 mt-1">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                          <path d="M15 1.875L28 8.375V24.625L15 31.1094L2 24.625V8.375L15 1.875ZM24.7656 9L15 4.125L11.2344 6L20.9375 10.9062L24.7656 9ZM15 13.875L18.7188 12.0312L9 7.125L5.23438 9L15 13.875ZM4 10.625V23.375L14 28.375V15.625L4 10.625ZM16 28.375L26 23.375V10.625L16 15.625V28.375Z" fill="black" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">SKU changes</h3>
                      <p className="text-sm text-gray-600">
                        We will notify you when the supplier's product SKU name you are mapping changes or when an option is added, causing the mapping to fail
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => toggleNotification('skuChanges')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications.skuChanges ? 'bg-[#30B4FF]' : 'bg-gray-200'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.skuChanges ? 'translate-x-6' : 'translate-x-1'}`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="ml-12">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={emailAddresses.skuChanges}
                      onChange={(e) => handleEmailChange('skuChanges', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="flex space-x-4   justify-between mt-2">
                      <button className="text-[#2FB4FF] font-medium text-sm hover:underline">Change Email Address!</button>
                      <button className="text-[#2FB4FF] font-medium text-sm hover:underline">Add Email Address!</button>
                    </div>
                  </div>
                </div>

                {/* Send Email */}
                <div>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                          <path d="M28 6H4C2.9 6 2 6.9 2 8V24C2 25.1 2.9 26 4 26H28C29.1 26 30 25.1 30 24V8C30 6.9 29.1 6 28 6ZM28 8L16 16L4 8H28ZM28 24H4V10L16 18L28 10V24Z" fill="black" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">Send Email</h3>
                      <p className="text-sm text-gray-600">
                        We will notify you when the products are available
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => toggleNotification('sendEmail')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications.sendEmail ? 'bg-[#30B4FF]' : 'bg-gray-200'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.sendEmail ? 'translate-x-6' : 'translate-x-1'}`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="ml-12">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={emailAddresses.sendEmail}
                      onChange={(e) => handleEmailChange('sendEmail', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="flex space-x-4 mt-2  justify-between">
                      <button className="text-[#2FB4FF] font-medium text-sm hover:underline">Change Email Address!</button>
                      <button className="text-[#2FB4FF]  font-medium text-sm hover:underline">Add Email Address!</button>
                    </div>
                    <ChangeEmail />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}