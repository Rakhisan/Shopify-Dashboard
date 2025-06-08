"use client";

import { useState } from "react";

export default function AddUser() {
  const [formData, setFormData] = useState({
    userrole: "",
    email: "",
    firstname: "",
    lastname: "",
    mfaEnabled: "",
    mfaSecret: "",
  });

  const [dropdownStates, setDropdownStates] = useState({
    userrole: false,
    mfaEnabled: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDropdownSelect = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setDropdownStates({ ...dropdownStates, [name]: false });
  };

  const toggleDropdown = (name) => {
    setDropdownStates({
      ...dropdownStates,
      [name]: !dropdownStates[name],
      // Close other dropdowns
      ...(name === "userrole" ? { mfaEnabled: false } : { userrole: false }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const SvgArrow = ({ isOpen }) => (
    <svg
      className={`absolute top-1/2 right-4 sm:right-5 w-5 h-5 sm:w-6 sm:h-6 pointer-events-none transform -translate-y-1/2 transition-transform duration-200 ease-in-out ${
        isOpen ? "rotate-180" : ""
      }`}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.81794 8.06274H15.3016C15.4695 8.06278 15.6336 8.11259 15.7731 8.20586C15.9127 8.29914 16.0215 8.43171 16.0857 8.5868C16.15 8.74189 16.1668 8.91254 16.134 9.07718C16.1013 9.24182 16.0205 9.39306 15.9018 9.51178L11.1599 14.2536C11.0008 14.4128 10.7849 14.5022 10.5598 14.5022C10.3347 14.5022 10.1188 14.4128 9.95963 14.2536L5.21778 9.51178C5.0991 9.39306 5.01828 9.24182 4.98554 9.07718C4.9528 8.91254 4.96961 8.74189 5.03385 8.5868C5.09808 8.43171 5.20686 8.29914 5.34642 8.20586C5.48598 8.11259 5.65007 8.06278 5.81794 8.06274Z"
        fill="#8E95A6"
      />
    </svg>
  );

  const CustomDropdown = ({
    name,
    value,
    placeholder,
    options,
    isOpen,
    onToggle,
    onSelect,
  }) => (
    <div className="relative w-full max-w-full lg:max-w-[520px]">
      <div
        onClick={() => onToggle(name)}
        className={`flex items-center w-full h-11 lg:h-12 px-4 lg:px-5 pr-10 lg:pr-11 text-left text-sm lg:text-lg font-inter bg-white border rounded-lg cursor-pointer transition-all duration-200 ease-in-out ${
          isOpen
            ? "border-2 border-blue-400"
            : "border border-gray-300 hover:border-gray-400"
        } ${value ? "text-black" : "text-gray-400"}`}
      >
        {value || placeholder}
      </div>
      <SvgArrow isOpen={isOpen} />

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-0.5 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => onSelect(name, option.value)}
              className={`px-4 lg:px-5 py-3 text-sm lg:text-base font-inter text-gray-400 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:text-white ${
                index === 0 ? "rounded-t-lg" : ""
              } ${index === options.length - 1 ? "rounded-b-lg" : ""}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const userRoleOptions = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Manager", value: "manager" },
  ];

  const mfaOptions = [
    { label: "True", value: "true" },
    { label: "False", value: "false" },
  ];

  return (
    <div className="bg-white p-4 sm:p-5 lg:p-8 rounded-xl lg:rounded-1xl max-w-6xl w-full mx-auto">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-5 font-sans text-left">
        Add User
      </h2>
      <div className="flex flex-col pt-2 lg:pt-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-1 place-items-center">
          <CustomDropdown
            name="userrole"
            value={formData.userrole}
            placeholder="User role"
            options={userRoleOptions}
            isOpen={dropdownStates.userrole}
            onToggle={toggleDropdown}
            onSelect={handleDropdownSelect}
          />

          <input
            className="w-full max-w-full lg:max-w-[520px] h-11 lg:h-12 px-4 lg:px-5 text-sm lg:text-lg font-inter text-black bg-white border border-gray-300 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-blue-400 placeholder-gray-400"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
          />

          <input
            className="w-full max-w-full lg:max-w-[520px] h-11 lg:h-12 px-4 lg:px-5 text-sm lg:text-lg font-inter text-black bg-white border border-gray-300 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-blue-400 placeholder-gray-400"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First name"
          />

          <input
            className="w-full max-w-full lg:max-w-[520px] h-11 lg:h-12 px-4 lg:px-5 text-sm lg:text-lg font-inter text-black bg-white border border-gray-300 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-blue-400 placeholder-gray-400"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
          />

          <CustomDropdown
            name="mfaEnabled"
            value={formData.mfaEnabled}
            placeholder="mfa_enabled"
            options={mfaOptions}
            isOpen={dropdownStates.mfaEnabled}
            onToggle={toggleDropdown}
            onSelect={handleDropdownSelect}
          />

          <input
            className="w-full max-w-full lg:max-w-[520px] h-11 lg:h-12 px-4 lg:px-5 text-sm lg:text-lg font-inter text-black bg-white border border-gray-300 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-blue-400 placeholder-gray-400"
            name="mfaSecret"
            value={formData.mfaSecret}
            onChange={handleChange}
            placeholder="MFA"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 mt-5 lg:mt-5">
          <button
            type="button"
            className="w-full lg:w-44 h-11 lg:h-12 text-sm lg:text-lg font-medium font-inter bg-white text-blue-400 border border-blue-400 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full lg:w-44 h-11 lg:h-12 text-sm lg:text-lg font-medium font-inter bg-blue-400 text-white border-none rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue-500"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
