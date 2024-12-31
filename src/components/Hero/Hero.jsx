import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);
  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div
            className="text-white text-center relative"
            style={{ marginTop: '-50px' }} // Moves the text up
          >
            <p
              data-aos="fade"
              data-aos-delay="300"
              className="font-bold text-4xl"
            >
              EXPLORE THE WORLD WITH
            </p>
            <p data-aos="fade" className="text-3xl">
              SEA TOUR CAMBODIA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
