"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Checkboxes from "@/components/Checkboxes";

export default function LawyerRegistration() {
  const [formData, setFormData] = useState({
    photo: null as File | null,
    firstName: "",
    lastName: "",
    addressLine1: "",
    state: "",
    city: "",
    pinCode: "",
    gender: "",
    primaryAreaOfPractice: "",
    secondaryAreaOfPractices: [] as string[],
    courtType: "",
    district: "",
    court: "",
    yearsOfPractice: "",
    monthsOfPractice: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    mobileOtp: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showArea,setShowArea]=useState(false);
  function handleAreaofPractice(){
    setShowArea(!showArea);
  }

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
    setOtpSent(true);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSecondaryAreaChange = (area: string) => {
    setFormData((prev) => {
      const updatedAreas = prev.secondaryAreaOfPractices.includes(area)
        ? prev.secondaryAreaOfPractices.filter((a) => a !== area)
        : [...prev.secondaryAreaOfPractices, area];
      return { ...prev, secondaryAreaOfPractices: updatedAreas };
    });
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
      } else {
        console.error("Registration failed");
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
            Register as Lawyer
          </h2>

          <form onSubmit={handleSubmit}>
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
                    Andhra Pradesh
                  </option>
                  <option value="State1">State1</option>
                  <option value="State2">State2</option>
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

            <div className="mb-4">
              <label
                htmlFor="primaryAreaOfPractice"
                className="block text-sm font-medium text-gray-700"
              >
                Primary Area Of Practice*
              </label>

              <select
                id="practiceAreaDropdown"
                name="city"
                className="form-select w-full"
                onChange={handleInputChange}
              >
                <option value="">---- select ----</option>
                <option value="adoption">Adoption</option>
                <option value="appeals">Appeals</option>
                <option value="banking">Banking & Insurance</option>
                <option value="business">Business & Commercial Law</option>
                <option value="constitution">
                  Constitution & Law Procedure
                </option>
                <option value="consumer">Consumer Rights</option>
                <option value="corporate">Corporate Law</option>
                <option value="criminal">Criminal Law</option>
                <option value="divorce">Divorce Laws in India</option>
                <option value="environmental">Environmental Law</option>
                <option value="government">Government Policies</option>
                <option value="inheritance">Inheritance</option>
                <option value="intellectual">Intellectual Property</option>
                <option value="labor">Labor Law</option>
                <option value="marriage">Marriage Law</option>
                <option value="personal">Personal Law</option>
                <option value="property">Property & Real Estate</option>
                <option value="tax">Tax Laws</option>
              </select>
            </div>

            <div className="mb-4" id="search-custom-lawyer-container">
              <label
                htmlFor="otherPracticeAreas"
                className="block text-sm font-medium text-gray-700"
              >
                Secondary Area Of Practices*
              </label>
              <button
                type="button"
                className="input-field mb-2 md:mb-0 bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={handleAreaofPractice}
              >
                select
              </button>
            </div>

            {showArea && (
              // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              //   <div className="bg-white p-6 rounded-lg max-w-5xl max-h-[80vh] overflow-y-auto">
              //     <h2 className="text-2xl font-bold mb-4">
              //       Select Area of Practice
              //     </h2>
              //     <Checkboxes/>
              //     <button
              //       type="button"
              //       onClick={togglePopup}
              //       className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              //     >
              //       Close
              //     </button>
              //   </div>
              // </div>
              <div className="bg-white z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[100vh] w-[80%]">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl p-2">Select area of Practice</h2>
                  <button className="bg-red-600 p-3 font-bold text-white" onClick={handleAreaofPractice}>X</button>
                </div>
                <div className="p-4 max-h-[70vh] overflow-y-scroll">
                  <Checkboxes />
                </div>
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="courtType"
                className="block text-sm font-medium text-gray-700"
              >
                Select Court Type*
              </label>
              <select
                id="courtType"
                name="courtType"
                className="form-select w-full"
                onChange={handleInputChange}
              >
                <option value="">Select Court Type</option>
                <option value="SUPREME_COURT">Supreme Court</option>
                <option value="HIGH_COURT">High Court</option>
                <option value="DISTRICT_COMMISSION">District Commission</option>
                <option value="DISTRICT_COURT">District Court</option>
                <option value="NCLT">NCLT</option>
                <option value="STATE_COMMISSION">State Commission</option>
              </select>
            </div>

            {formData.courtType && (
              <div className="flex mb-4 space-x-2">
                <select
                  id="stateDropdown"
                  name="state"
                  className="form-select w-full"
                  onChange={handleInputChange}
                >
                  <option value="">-- Select State --</option>
                </select>
                <select
                  id="districtDropdown"
                  name="district"
                  className="form-select w-full"
                  onChange={handleInputChange}
                >
                  <option value="">-- Select District --</option>
                </select>
                <select
                  id="courtDropdown"
                  name="court"
                  className="form-select w-full"
                  onChange={handleInputChange}
                >
                  <option value="">-- Select Court --</option>
                </select>
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="yearsOfPractice"
                className="block text-sm font-medium text-gray-700"
              >
                Years of Practice*
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  id="yearsOfPractice"
                  name="yearsOfPractice"
                  className="form-input flex-1"
                  placeholder="Years"
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  id="monthsOfPractice"
                  name="monthsOfPractice"
                  className="form-input flex-1"
                  placeholder="Months"
                  onChange={handleInputChange}
                />
              </div>
            </div>

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
                  className="bg-[#10b981] text-white p-2 rounded"
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

            <div className="text-center mb-4">
              <button
                type="submit"
                className="bg-[#10b981] text-white p-2 rounded w-full"
              >
                Register
              </button>
            </div>

            <div className="text-center">
              <a
                href="../registration"
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
