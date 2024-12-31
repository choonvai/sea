import React from 'react';

const Products_card = ({ logos }) => {
  return (
    <div className="text-center p-4">
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {logos.map((logo) => (
          <div key={logo.name} className="flex flex-col items-center bg-blue-100 rounded-lg shadow-md">
            <div className=" relative"> 
              <img src={logo.src} alt={logo.name} className="object-cover w-full h-full" /> 
            </div>
            <p className="text-center">{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products_card;