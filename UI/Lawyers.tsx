"use client"
import { useState } from "react";
import Checkboxes from "@/components/Checkboxes";
const Lawyers_data = [
  {
    type: "Criminal Lawyer",
    img: "./Lawyer.jpeg",
    name: "Raghuvaran",
    place: "Hyderabad",
    Rating: "⭐⭐⭐⭐⭐",
    number_of_reviews: "9 Reviews",
  },
  {
    type: "Criminal Lawyer",
    img: "./Lawyer.jpeg",
    name: "Raghuvaran",
    place: "Hyderabad",
    Rating: "⭐⭐⭐⭐⭐",
    number_of_reviews: "9 Reviews",
  },
  {
    type: "Criminal Lawyer",
    img: "./Lawyer.jpeg",
    name: "Raghuvaran",
    place: "Hyderabad",
    Rating: "⭐⭐⭐⭐⭐",
    number_of_reviews: "9 Reviews",
  },
  {
    type: "Criminal Lawyer",
    img: "./Lawyer.jpeg",
    name: "Raghuvaran",
    place: "Hyderabad",
    Rating: "⭐⭐⭐⭐⭐",
    number_of_reviews: "9 Reviews",
  },
  {
    type: "Criminal Lawyer",
    img: "./Lawyer.jpeg",
    name: "Raghuvaran",
    place: "Hyderabad",
    Rating: "⭐⭐⭐⭐⭐",
    number_of_reviews: "9 Reviews",
  },
  {
    type: "Criminal Lawyer",
    img: "./Lawyer.jpeg",
    name: "Raghuvaran",
    place: "Hyderabad",
    Rating: "⭐⭐⭐⭐⭐",
    number_of_reviews: "9 Reviews",
  },
  {
    type: "Criminal Lawyer",
    img: "./Lawyer.jpeg",
    name: "Raghuvaran",
    place: "Hyderabad",
    Rating: "⭐⭐⭐⭐⭐",
    number_of_reviews: "9 Reviews",
  },
  {
    type: "Criminal Lawyer",
    img: "./Lawyer.jpeg",
    name: "Raghuvaran",
    place: "Hyderabad",
    Rating: "⭐⭐⭐⭐⭐",
    number_of_reviews: "9 Reviews",
  },
];

export default function Lawyer() {
  const [showArea,setShowArea]=useState(false);
  function handleAreaofPractice(){
    setShowArea(!showArea);
  }
  return (
    <section className="text-center py-8 bg-white my-4">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <h1 className="text-4xl font-bold mb-5">Search For Lawyers</h1>
        <div className="py-4" id="search-custom-lawyer-container">
          <div className="max-w-screen-md mx-auto px-4">
            <div id="search-custom-lawyer">
              <button className="shadow-md text-black bg-[#f3f4f6] p-3 px-4 py-2 rounded-xl mb-2 md:mb-0" onClick={() => handleAreaofPractice()}>
                Area Of Practice
              </button>
              <select className="p-3 mx-4 border border-gray-300 bg-[#f3f4f6] rounded-xl mb-2 md:mb-0 shadow-md outline-none">
                <option value="" disabled selected>
                  Select City
                </option>
                <option value="hyderabad">Hyderabad</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
              </select>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white  cursor-pointer shadow-lg hover:shadow-xl p-3 rounded-xl">
                Search
              </button>
            </div>
          </div>
        </div>
        {showArea && (
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

        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {Lawyers_data.map((item, idx) => (
            <div
              key={idx}
              className="border-2 text-center bg-white rounded-lg shadow-md flex flex-col items-center mb-4"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-400 w-full text-white p-4 rounded mb-2 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                {item.type}
              </div>
              <img
                src={item.img}
                alt="Raghavan"
                className="w-32 h-32 object-cover rounded-full mt-2"
              />
              <h3 className="text-lg font-semibold my-2">{item.name}</h3>
              <p className="mb-1">{item.place}</p>
              <div className="stars text-yellow-500">{item.Rating}</div>
              <p className="text-sm mb-2">{item.number_of_reviews}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
