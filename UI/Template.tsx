"use client";
import TemplateCard from "@/components/TemplateCard";
import React, { useState } from "react";

const data = [
  {
    img: "./template_images/rental.png",
    text: "Rental Aggreement",
  },
  {
    img: "./template_images/Vrental.png",
    text: "Vechile Rentals",
  },
  {
    img: "./template_images/employee.png",
    text: "Employer",
  },
  {
    img: "./template_images/subcontractor.png",
    text: "Subcontractor",
  },
  {
    img: "./template_images/accounting.png",
    text: "Accouting",
  },
  {
    img: "./template_images/demandNote.png",
    text: "Demand Note",
  },
  {
    img: "./template_images/Elicense.png",
    text: "Equipment License",
  },
  {
    img: "./template_images/cofounder.png",
    text: "cofounder Aggrement",
  },
  {
    img: "./template_images/eviction_notice.png",
    text: "Eviction Notice",
  },
  {
    img: "./template_images/fund_raising.png",
    text: "Fund Raising",
  },
  {
    img: "./template_images/loan_agreement.png",
    text: "Loan Aggreement",
  },
  {
    img: "./template_images/partnership.png",
    text: "Patnership",
  },
];

const Template = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white p-8 my-4 text-center">
      <h1 className="text-3xl font-bold mb-8">
        Generate Documents From 10,000+ Templates
      </h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search for Editable documents such as Rental Agreements .... e.t.c."
          className="w-3/4 md:w-1/2 border rounded-lg shadow p-2"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-md ml-2">
          Search
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item, idx) => (
          <TemplateCard key={idx} img={item.img} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Template;
