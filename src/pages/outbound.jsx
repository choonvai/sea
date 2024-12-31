import React from 'react';
import forest from "../assets/video/footer.mp4";
import img1 from "../assets/places/boat.jpg";
import img2 from "../assets/places/belmond.jpg";
import img3 from "../assets/places/place4.jpg";
import img4 from "../assets/places/tajmahal.jpg";
import img5 from "../assets/places/water.jpg";
import img6 from "../assets/places/place5.jpg";
import img7 from "../assets/places/island.webp";
import Products_card from '../components/products/Products_card';
import logo from "../assets/logo.jpg";
import Sign_up from '../components/sign_up_and_sign_in/Sign_up';
import Info from '../components/info/Info';

const images = [
  { src: img1, alt: 'Society Islands & Tuamotus' },
  { src: img2, alt: 'Belmond' },
  { src: img3, alt: 'Baltic' },
  { src: img4, alt: 'tajmahal' },
  { src: img5, alt: 'Galapagos' },
  { src: img6, alt: 'Easter Island' },
  { src: img7, alt: 'Mediterranean' },
];

const Outbound = () => {
  const logos = [
    { src:logo },
    { src:logo },
    { src:logo },
    { src:logo },
    { src:logo },
    { src:logo },
    { src:logo },
    { src:logo },
    { src:logo },
    { src:logo },
    { src:logo },
    { src:logo },
    { src:logo },
  ];
  const river_cruises = [
    {src:img2},{src:img2},{src:img2},
    {src:img2},{src:img2},{src:img2},{src:img2},
  ]
  return (
    <>
      <div className="relative h-screen">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover z-[-1]" 
        >
          <source src={forest} type="video/mp4" />
        </video>
        <p className='h-full flex justify-center items-center p-4 bg-primary/10 text-white text-4xl'>OUTBOUND</p>
      </div>
      <div class="text-center py-40">
        <h1 class="font-serif text-blue-700 text-6xl">Your Dream Destinations</h1>
        <hr class="border-red-500 w-1/4 mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"> {/* Removed gap-y-4 */}
        {images.slice(0, 3).map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden aspect-square" 
          > 
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
            />
            <div className="absolute bottom-0 left-0 p-2 bg-gray-900/50 text-white">
              {image.alt} 
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"> {/* Removed gap-y-4 */}
        {images.slice(3).map((image, index) => (
          <div 
            key={index + 3} 
            className="relative overflow-hidden aspect-square" 
          > 
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
            />
            <div className="absolute bottom-0 left-0 p-2 bg-gray-900/50 text-white">
              {image.alt} 
            </div>
          </div>
        ))}
      </div>
        <div class="text-center py-40">
          <h1 class="font-serif text-blue-700 text-6xl">Our Products</h1>
          <hr class="border-red-500 w-1/4 mx-auto" />

          <div className='flex flex-col px-10 py-10 justify-center items-center sm:flex-row'>           
            <div className="w-full sm:w-1/2">
              <img src={img1} className="object-cover w-full"></img>
            </div>
            <div className="w-full sm:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Ocean Cruises</h2>
              <p>Finest Selections of the World’s Best </p>
              <div>
                <Products_card logos={logos} />
              </div>
            </div>
          </div>

          <div className='flex flex-col px-10 py-10 justify-center items-center sm:flex-row'>           
            <div className="w-full sm:w-1/2">
              <h2 className="text-2xl font-bold mb-2">River Cruises</h2>
              <p>Six-Star River Cruises for Discerning Travelers </p>
              <div>
                <Products_card logos={river_cruises} />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <img src={img1} className="object-cover w-full"></img>
            </div>
          </div>

          <div className='flex flex-col px-10 py-10 justify-center items-center sm:flex-row'>           
            <div className="w-full sm:w-1/2">
              <img src={img1} className="object-cover w-full"></img>
            </div>
            <div className="w-full sm:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Motor Coaches</h2>
              <p>Traveling in Luxury</p>
              <div>
                <Products_card logos={river_cruises} />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col px-10 py-10 justify-center items-center sm:flex-row'>           
            <div className="w-full sm:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Rails</h2>
              <p>Traveling in Style to Far-Flung Destinations</p>
              <div>
                <Products_card logos={river_cruises} />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <img src={img1} className="object-cover w-full"></img>
            </div>
        </div>

        <div className='flex flex-col px-10 py-10 justify-center items-center sm:flex-row'>           
            <div className="w-full sm:w-1/2">
              <img src={img1} className="object-cover w-full"></img>
            </div>
            <div className="w-full sm:w-1/2 pl-20">
              <h2 className="text-2xl font-bold mb-2">Air Tickets, Hotels & Transfers,
              Sightseeing Tours</h2>
            </div>
          </div>

        <Sign_up></Sign_up>   
        <Info></Info>
    </>
  )
}

export default Outbound;