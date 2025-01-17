"use client"
import React from "react";
import { useState } from "react";
const LegalConsultationForm: React.FC = () => {
  const titles = ["Mr.", "Ms."];
  const states = ["Select your state"];
  const cities = ["Select your city"];
  const practiceAreas = ["Select the area where you think you need help"];
  const countryCodes = ["+91"];
  const [showMobileOTP, setShowMobileOTP] = useState(false);
  const [showEmailOTP, setShowEmailOTP] = useState(false);

  const handleSendOTP = (type: 'mobile' | 'email') => {
    if (type === 'mobile') {
      setShowMobileOTP(true);
    } else {
      setShowEmailOTP(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">
        Schedule Free Legal Consultation
      </h1>

      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name*
          </label>
          <div className="flex space-x-2">
            <select className="w-1/4 border border-gray-300 rounded-md p-2">
              {titles.map((title, index) => (
                <option key={index} value={title}>
                  {title}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="state-city"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            State/City*
          </label>
          <div className="flex space-x-2">
            <select className="w-1/2 border border-gray-300 rounded-md p-2">
              <option value="">Select your state</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <select className="w-1/2 border border-gray-300 rounded-md p-2">
              <option value="">Select your city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="practice-area"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Select Area of Practice
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option value="">
              Select the area where you think you need help
            </option>
            {practiceAreas.map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mobile Number*
          </label>
          <div className="flex space-x-2">
            <select className="w-1/4 border border-gray-300 rounded-md p-2">
              {countryCodes.map((code, index) => (
                <option key={index} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              placeholder="984803XXXX"
              className="w-1/2 border border-gray-300 rounded-md p-2"
            />
            <button
              type="button"
              className="bg-gray-800 text-white rounded-md px-4 py-2"
              onClick={() => handleSendOTP('mobile')}
            >
              Send OTP
            </button>
          </div>
          {showMobileOTP && (
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
              <div className="flex space-x-2">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="w-12 h-12 text-center border border-gray-300 rounded-md"
                  />
                ))}
                <button type="button" className="bg-green-600 text-white rounded-md px-4 py-2">Verify</button>
              </div>
              <button type="button" className="text-blue-600 text-sm mt-2">Resend OTP</button>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email (Optional)
          </label>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="example@example.com"
              className="w-3/4 border border-gray-300 rounded-md p-2"
            />
            <button
              type="button"
              className="bg-gray-800 text-white rounded-md px-4 py-2"
              onClick={() => handleSendOTP('email')}
            >
              Send OTP
            </button>
          </div>
          {showEmailOTP && (
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Enter Email OTP</label>
              <div className="flex space-x-2">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="w-12 h-12 text-center border border-gray-300 rounded-md"
                  />
                ))}
                <button type="button" className="bg-green-600 text-white rounded-md px-4 py-2">Verify</button>
              </div>
              <button type="button" className="text-blue-600 text-sm mt-2">Resend OTP</button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default LegalConsultationForm;
