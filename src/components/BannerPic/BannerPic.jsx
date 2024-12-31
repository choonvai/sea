import React from 'react';
import ImageGrid from './ImageGrid'; // Import the ImageGrid component

const images = [
  { src: 'path/to/image1.jpg', alt: 'Society Islands & Tuamotus' },
  { src: 'path/to/image2.jpg', alt: 'Antarctica & The Ross Sea' },
  { src: 'path/to/image3.jpg', alt: 'Baltic' },
  { src: 'path/to/image4.jpg', alt: 'Galapagos' },
  { src: 'path/to/image5.jpg', alt: 'Easter Island' },
  { src: 'path/to/image6.jpg', alt: 'Mediterranean' },
];

const ImageGridExample = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <ImageGrid key={index} img={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default ImageGridExample;