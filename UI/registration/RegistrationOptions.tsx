"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const REGISTRATION_OPTIONS = [
  { label: "Intern", path: "registration/intern" },
  { label: "Lawyer", path: "registration/lawyer" },
  { label: "Visitor", path: "registration/visitor" },
];

export function RegistrationOptions() {
  const [selectedPath, setSelectedPath] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    if (selectedPath) {
      router.push(selectedPath);
    } else {
      alert("Please select an option");
    }
  };

  return (
    <div className="mt-4 bg-white mx-auto p-6">
      <div className="container mx-auto py-12">
        <div className="bg-white p-8 rounded shadow-lg max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">LegalBooks</h1>
          <p className="text-center mb-6">India's Largest Legal Platform</p>

          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Register as</h2>
            <div className="flex justify-center flex-wrap mb-6">
              {REGISTRATION_OPTIONS.map(({ label, path }) => (
                <label key={label} className="flex items-center mr-4">
                  <input
                    type="radio"
                    name="register_as"
                    value={label}
                    className="mr-2"
                    onClick={() => setSelectedPath(path)}
                  />
                  {label}
                </label>
              ))}
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
