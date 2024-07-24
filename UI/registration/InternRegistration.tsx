"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function InternRegistration() {
  const [formData, setFormData] = useState({
    photo: null as File | null,
    firstName: "",
    lastName: "",
    addressLine1: "",
    state: "",
    city: "",
    pinCode: "",
    gender: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    mobileOtp: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, photo: e.target.files![0] }));
    }
  };

  const handleSendOTP = async () => {
    // Implement OTP sending logic here
    setOtpSent(true);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        if (key === "secondaryAreaOfPractices") {
          data.append(key, JSON.stringify(value));
        } else if (key === "photo" && value instanceof File) {
          data.append(key, value);
        } else {
          data.append(key, value.toString());
        }
      }
    });

    try {
      const response = await fetch("/api/register-lawyer", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        console.log("Registration successful");
        // Handle successful registration (e.g., redirect or show success message)
      } else {
        console.error("Registration failed");
        // Handle errors
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="registration-container mx-auto py-12 flex flex-col md:flex-row items-center">
        <div className="company-info md:w-1/3 p-8">
          <h1 className="text-3xl font-bold mb-2">LegalBooks</h1>
          <p className="text-lg">India's Largest Legal Platform</p>
          <br />
          <div className="flex justify-left mb-4" id="continue-with-google">
            <a
              href="#"
              className="text-black px-10 py-2 rounded flex items-center justify-center border-2 border-black"
            >
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                alt="Google Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              Login with Google
            </a>
          </div>
        </div>

        <div className="registration-form md:w-2/3 bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Register as Intern
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Photo upload section */}
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <img
                  src={
                    formData.photo
                      ? URL.createObjectURL(formData.photo)
                      : "https://via.placeholder.com/150"
                  }
                  alt="Profile Photo"
                  width={128}
                  height={128}
                  className="rounded-full"
                />
                <button
                  type="button"
                  onClick={() => document.getElementById("photoInput")?.click()}
                  className="absolute bottom-0 right-0 bg-green-100 text-green-600 p-2 rounded-full"
                >
                  Upload Photo
                </button>
                <input
                  type="file"
                  id="photoInput"
                  className="hidden"
                  onChange={handlePhotoUpload}
                  accept="image/*"
                />
              </div>
            </div>

            {/* Name fields */}
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-input bg-gray-50 flex-1"
                  placeholder="First Name"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-input bg-gray-50 flex-1"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Address fields */}
            <div className="mb-4">
              <label
                htmlFor="addressLine1"
                className="block text-sm font-medium text-gray-700"
              >
                Address*
              </label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                className="form-input bg-gray-50 w-full mb-2"
                placeholder="Address Line 1"
                onChange={handleInputChange}
              />
              <div className="flex space-x-2 mb-2">
                <select
                  id="state"
                  name="state"
                  className="form-input bg-gray-50 flex-1"
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Select State
                  </option>
                  {/* Add state options */}
                </select>
                <select
                  id="city"
                  name="city"
                  className="form-input bg-gray-50 flex-1"
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Select City
                  </option>
                  {/* Add city options */}
                </select>
              </div>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                className="form-input bg-gray-50 w-full"
                placeholder="Pin Code"
                onChange={handleInputChange}
              />
            </div>

            {/* Gender field */}
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender*
              </label>
              <select
                id="gender"
                name="gender"
                className="form-select w-full"
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Password fields */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password*
              </label>
              <div className="flex space-x-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input flex-1"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-input flex-1"
                  placeholder="Confirm Password"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Mobile Number and OTP */}
            <div className="mb-4">
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number*
              </label>
              <div className="flex space-x-2">
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  className="form-input flex-1"
                  placeholder="Mobile Number"
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  onClick={handleSendOTP}
                  className="bg-green-600 text-white p-2 rounded"
                >
                  Send OTP
                </button>
              </div>
            </div>

            {otpSent && (
              <div className="mb-4">
                <label
                  htmlFor="mobileOtp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter OTP
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4].map((index) => (
                    <input
                      key={index}
                      type="text"
                      id={`mobileOtp${index}`}
                      name="mobileOtp"
                      className="form-input w-12 text-center"
                      maxLength={1}
                      pattern="\d*"
                      onChange={(e) => {
                        handleInputChange(e);
                        if (e.target.value && e.target.nextElementSibling) {
                          (
                            e.target.nextElementSibling as HTMLInputElement
                          ).focus();
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Submit button */}
            <div className="text-center mb-4">
              <button
                type="submit"
                className="bg-green-600 text-white p-2 rounded w-full"
              >
                Register
              </button>
            </div>

            {/* Other registration options link */}
            <div className="text-center">
              <a
                href="../Registration"
                className="text-gray-600 hover:underline"
              >
                Other registration options
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
