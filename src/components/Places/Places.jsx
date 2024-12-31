import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/Angkor_Wat.jpg";
const PlacesData = [
  {
    img: Img1,
  },
  {
    img: Img2,
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 py-2 text-3xl font-bold text-center underline">
          Destinations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-2 md:gap-4">
        {PlacesData.map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              index={index}
              {...item}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Places;
