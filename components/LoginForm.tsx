"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 rounded-lg ">
      <h1 className="text-2xl font-bold text-center mb-6">Log In</h1>

      <button className="w-full mb-3 py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50">
        <Image
          src="/google-icon.png"
          alt="Google"
          width={20}
          height={20}
          className="mr-2"
        />
        Continue with Google
      </button>

      <button className="w-full mb-6 py-2 px-4 bg-[#1e3a8a] text-white rounded-md flex items-center justify-center hover:bg-blue-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Continue with Mobile Number
      </button>

      <div className="flex items-center mb-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <form onSubmit={() => {}}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border border-gray-300 rounded-md"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-full mb-4 py-2 px-4 bg-[#10b981] text-white rounded-md hover:bg-green-600"
        >
          Log In
        </button>
      </form>

      <div className="text-center">
        <a href="#" className="text-sm text-gray-600 hover:underline">
          Forgot Password?
        </a>
        <div className="mt-2">
          <Link
            href="/registration"
            className="text-sm text-gray-600 underline"
          >
            Create new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
