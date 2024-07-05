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
  return (
    <section className="text-center py-8 bg-white my-4">
      <h1 className="text-4xl font-bold mb-5">Search For Lawyers</h1>
      <div className="py-4" id="search-custom-lawyer-container">
        <div className="max-w-screen-md mx-auto px-4">
          <div id="search-custom-lawyer">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-xl mb-2 md:mb-0">
              Area Of Practice
            </button>
            <select className="p-3 mx-4 border border-gray-300 rounded-xl mb-2 md:mb-0 shadow-md outline-none">
              <option value="" disabled selected>
                Select City
              </option>
              <option value="hyderabad">Hyderabad</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
            </select>
            <button className="bg-green-500 mx-4 text-white p-3 rounded-xl shadow-md cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </div>

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
    </section>
  );
}