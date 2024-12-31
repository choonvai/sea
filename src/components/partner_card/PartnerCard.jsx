import React, { useState } from "react";

const PartnerCard = () => {
  // Partner data
  const partners = [
    {
      category: "Ocean Cruises",
      items: [
        { name: "Crystal Cruises", img: "" },
        { name: "Regent Seven Seas", img: "" },
        { name: "Silversea", img: "" },
        { name: "Seabourn", img: "" },
        { name: "Ponant", img: "" },
        { name: "The Ritz-Carlton", img: "" },
        { name: "Paul Gauguin Cruises", img: "" },
      ],
    },
    {
      category: "River Cruises",
      items: [
        { name: "Sea Cloud Cruises", img: "" },
        { name: "SeaDream Yacht Club", img: "" },
        { name: "Oceania Cruises", img: "" },
      ],
    },
    {
      category: "Motor Coaches",
      items: [
        { name: "Scenic", img: "" },
        { name: "Hurtigruten", img: "" },
        { name: "Dream Cruises", img: "" },
      ],
    },
    {
      category: "Rails",
      items: [
        { name: "Holland America Line", img: "" },
        { name: "Norwegian Cruise Line", img: "" },
      ],
    },
  ];

  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("Ocean Cruises");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      {/* Main Header */}
      <h2 className="text-center text-5xl font-extrabold mb-8">
        Our Partners
      </h2>
      <div className="border-t-4 border-black w-40 mx-auto mb-10"></div>

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-8 mb-12">
        {partners.map((partner, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(partner.category)}
            className={`relative px-6 py-2 text-lg font-medium transition-all ${
              activeCategory === partner.category
                ? "text-blue-500 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-black"
                : "text-gray-400 hover:text-blue-400"
            }`}
          >
            {partner.category}
          </button>
        ))}
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-7xl bg-white p-10 rounded-lg shadow-lg">
        {/* Cards for Active Category */}
        <div>
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`${
                activeCategory === partner.category ? "block" : "hidden"
              }`}
            >
              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {partner.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center p-6 rounded-lg shadow-md transform transition-all hover:scale-105`}
                  >
                    {/* Image or Placeholder */}
                    <div
                      className={`w-64 h-64 rounded-lg ${
                        item.img ? "bg-cover bg-center" : "bg-gray-600"
                      } flex items-center justify-center`}
                      style={{
                        backgroundImage: item.img ? `url(${item.img})` : "",
                      }}
                    >
                      {!item.img && (
                        <p className="text-xl font-semibold text-gray-200">
                          {item.name}
                        </p>
                      )}
                    </div>

                    {/* Card Title */}
                    {item.img && (
                      <p className="mt-4 text-center text-lg font-medium">
                        {item.name}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
