import React from "react";

const PlaceCard = ({
  img,
  index,
}) => {
  const isOutbound = index % 2 === 0; // Check if the index is even
  return (
    <div className="relative shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer">
  {/* Image Section with Overlay Text */}
  <div className="group relative items-center justify-start overflow-hidden cursor-pointer">
    <img
    src={img}
    alt="Zoom Test"
    className="h-full w-screen object-cover transition-transform duration-700 group-hover:rotate-1 group-hover:scale-125"
    />
    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
      <h1 className="font-bold text-xl">
        {isOutbound ? "OUTBOUND" : "INBOUND"}
      </h1>
      <p className="text-sm">Explore</p>
      <p className="mt-2 text-xs">
        {isOutbound
          ? "EUROPE, AMERICAS, AFRICA, ASIA, AUSTRALIA, ANTARCTICA"
          : "CAMBODIA"}
      </p>
    </div>
  </div>
</div>

  );
};

export default PlaceCard;
