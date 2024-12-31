import React from 'react';
import img1 from "../../assets/places/belmond.jpg";
import img2 from "../../assets/places/island.webp";

const Offer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      {/* Title */}
      <h2 className="text-4xl font-semibold text-center mb-8">News & Exclusive Offers</h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Offer Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
          <div className="overflow-hidden">
            <img
              src={img1}
              alt="Belmond Orient Express"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              The Belmond Orient Express Is Launching New December Routes to Europe’s Most Magical Winter Cities
            </h3>
            <p className="text-gray-500 mb-2 text-sm">20 Sep 2022</p>
            <p className="text-gray-700 mb-4">
              Passengers will be able to soak in Europe’s festive holiday charm on board the decadent train...
            </p>
            <a href="https://www.cntraveler.com/story/belmond-orient-express-winter-journeys-2022" className="text-blue-600 font-medium hover:underline">Read More</a>
          </div>
        </div>

        {/* Second Offer Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
          <div className="overflow-hidden">
            <img
              src={img2}
              alt="Islands of Croatia"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              MOST BEAUTIFUL ISLANDS OF CROATIA
            </h3>
            <p className="text-gray-500 mb-2 text-sm">18 Aug 2022</p>
            <p className="text-gray-700 mb-4">
              The Most Beautiful Islands in Croatia, from Hvar to Vis. From the big-hitting names to lesser-known...
            </p>
            <a href="https://link-to-the-article.com" className="text-blue-600 font-medium hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
