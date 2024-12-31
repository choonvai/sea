import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"> 
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-md aspect-square">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
          <p className="absolute bottom-0 left-0 p-2 bg-gray-900/50 text-white font-bold">
            {image.alt}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;