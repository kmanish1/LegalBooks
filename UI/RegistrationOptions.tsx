"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export function RegistrationOptions() {
  const [user, setUser] = useState("");
  const router = useRouter();

  function handleClick(path: string) {
    setUser(path);
  }

  function handleRegister() {
    if (user) {
      router.push(user);
    } else {
      alert("Please select an option");
    }
  }

  return (
    <div className="mt-4 bg-white mx-auto p-6">
      <div className="container mx-auto py-12">
        <div className="bg-white p-8 rounded shadow-lg max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">LegalBooks</h1>
          <p className="text-center mb-6">India's Largest Legal Platform</p>
          
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Register as</h2>
            <div className="flex justify-center mb-6">
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  name="register_as"
                  value="Lawyer"
                  className="mr-2"
                  onClick={() => handleClick("/Lawyer/Lawyer-Registration")}
                />
                Lawyer
              </label>
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  name="register_as"
                  value="Intern"
                  className="mr-2"
                  onClick={() => handleClick("/Intern/Intern-Registration")}
                />
                Intern
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="register_as"
                  value="Visitor"
                  className="mr-2"
                  onClick={() => handleClick("/Visitor/Visitor-Registration")}
                />
                Visitor
              </label>
            </div>
            <div className="text-center">
              <button
                id="registerButton"
                className="bg-green-600 text-white p-2 rounded w-full"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}