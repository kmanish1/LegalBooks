"use client";
import React, { useState } from "react";
import Link from "next/link";

function NavLink({ label }: { label: string }) {
  return (
    <li className="py-2 cursor-pointer duration-700">
      <Link href={"#" + label}>
        <div className="px-2 hover:text-[#10b981]">{label}</div>
      </Link>
    </li>
  );
}

interface ButtonProps {
  label: string;
  primary?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, primary, className }) => {
  const baseClasses =
    "px-4 py-2 transition-colors duration-200";
  const styleClasses = primary
    ? "text-black"
    : "text-black";

  return (
    <button className={`${baseClasses} ${styleClasses} ${className}`}>
      {label}
    </button>
  );
};

function MobileMenu({ isOpen, links }: { isOpen: boolean; links: string[] }) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md z-10 text-center">
      <ul className="flex flex-col py-2 list-none">
        {links.map((link) => (
          <NavLink key={link} label={link} />
        ))}
        <li className="py-2">
          <Button
            label="Log in"
            primary
            className="mx-2  bg-white text-black border border-white hover:border-black rounded-lg"
          />
          <Button
            label="Sign up"
            primary
            className="mx-2 bg-[#10b981] text-white border border-white hover:border-black rounded-lg"
          />
        </li>
      </ul>
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-black shadow-sm relative z-20 mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2">
                <div className="flex flex-col items-center py-2">
                    <div className="flex">
                        <Link href="/">
                            <h3 className="md:text-3xl text-2xl font-bold text-black cursor-pointer">
                                LegalBooks
                            </h3>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-8">
                    <ul className="hidden md:flex space-x-8 list-none">
                    {["Lawyer Search", "Jobs", "Free Consultation"].map((link) => (
                        <NavLink key={link} label={link} />
                    ))}
                    </ul>
                    
                </div>
                <div>
                    <div className="flex items-center justify-center space-x-4">
                        <Button
                            label="Log in"
                            primary
                            className=" hidden md:block text-black"
                        />
                        <Button
                            label="Sign up"
                            primary
                            className="hidden md:block rounded-md bg-[#10b981] text-white"
                        />
                    </div>
                    <div>
                        <button
                            className="md:hidden flex p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset"
                            onClick={toggleMobileMenu}
                        >
                            <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <MobileMenu
            isOpen={isMobileMenuOpen}
            links={["Lawyer Search", "Jobs", "Free Consultation"]}
        />
    </nav>
  );
}
