"use client";

import { useState } from "react";

export default function AddUser() {
  const [formData, setFormData] = useState({
    userrole: "",
    email: "",
    firstname: "",
    lastname: "",
    mfaEnabled: "",
    phone: "",
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
      ...(name === "userrole" ? { mfaEnabled: false } : { userrole: false }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const SvgArrow = ({ isOpen }) => (
    <svg
      className={`absolute top-1/2 right-3 sm:right-4 lg:right-5 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 pointer-events-none transform -translate-y-1/2 transition-transform duration-200 ease-in-out ${isOpen ? "rotate-180" : ""
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
    label,
  }) => (
    <div className="flex flex-col w-full">
      <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
        {label}
      </label>
      <div className="relative w-full">
        <div
          onClick={() => onToggle(name)}
          className={`flex items-center w-full placeholder-gray-400 h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 pr-8 sm:pr-10 lg:pr-11 text-left text-sm sm:text-base bg-white border rounded-lg cursor-pointer transition-all duration-200 ease-in-out ${isOpen
            ? "border-2 border-[#30B4FF]"
            : "border border-[#CFD3D4] hover:border-[#CFD3D4]"
            } ${value ? "text-[#5E6366]" : "text-[#5E6366]"}`}
        >
          {value || placeholder}
        </div>
        <SvgArrow isOpen={isOpen} />

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-0.5 bg-white border border-[#CFD3D4] focus:border-[#30B4FF] rounded-lg shadow-lg z-50">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => onSelect(name, option.value)}
                className={`px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-base text-[#5E6366] cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[#30B4FF] hover:text-white ${index === 0 ? "rounded-t-lg" : ""
                  } ${index === options.length - 1 ? "rounded-b-lg" : ""}`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
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
    <div className="w-full mx-auto space-y-1">
      {/* Header Card */}
      <div className="bg-white p-2 sm:p-6 lg:p-4 lg:rounded-1xl w-full">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-left">
          Add User
        </h2>
      </div>

      {/* Form Card */}
      <div className="bg-white p-1 sm:p-5 lg:p-4  lg:rounded-1xl w-full">
        <div className="flex flex-col pt-1 sm:pt-2 lg:pt-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-3">

            <div className="flex flex-col w-full">
              <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                First Name
              </label>
              <input
                className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF] placeholder-gray-400"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Enter first name"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                Last Name
              </label>
              <input
                className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base  text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF] placeholder-gray-400"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Enter last name"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                Email Address
              </label>
              <input
                className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base  text-[#5E6366] bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF] placeholder-gray-400"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                Phone Number
              </label>
              <input
                className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF] placeholder-gray-400"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            <CustomDropdown
              name="userrole"
              value={formData.userrole}
              placeholder="Select user role"
              options={userRoleOptions}
              isOpen={dropdownStates.userrole}
              onToggle={toggleDropdown}
              onSelect={handleDropdownSelect}
              label="User Role"
            />

            <CustomDropdown
              name="mfaEnabled"
              value={formData.mfaEnabled}
              placeholder="Select MFA status"
              options={mfaOptions}
              isOpen={dropdownStates.mfaEnabled}
              onToggle={toggleDropdown}
              onSelect={handleDropdownSelect}
              label="MFA Enabled"
            />

          </div>

          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-5 mt-5 sm:mt-6 lg:mt-8 w-full">
            <button
              type="button"
              className="w-full sm:w-auto sm:min-w-40  md:min-w-40 h-9 sm:h-10 lg:h-10 text-sm sm:text-base lg:text-lg font-medium bg-white text-[#30B4FF] border border-[#30B4FF] rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#30B4FF] hover:text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full sm:w-auto  sm:min-w-40  md:min-w-40 h-9 sm:h-10 lg:h-10 text-sm sm:text-base lg:text-lg font-medium bg-[#30B4FF] text-white border-none rounded-lg cursor-pointer transition-all duration-200 ease-in-out "
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}