import React from 'react'
import BlogCard from '../components/Blogs/BlogCard'
import img1 from "../assets/places/Angkor_Wat.jpg"
import forest from "../assets/video/footer.mp4";
import img from "../assets/places/boat.jpg";
import img2 from "../assets/places/belmond.jpg";
import img3 from "../assets/places/place4.jpg";
import img4 from "../assets/places/tajmahal.jpg";
import img5 from "../assets/places/water.jpg";
import img6 from "../assets/places/place5.jpg";
import img7 from "../assets/places/island.webp";
import Sign_up from '../components/sign_up_and_sign_in/Sign_up';
import Info from '../components/info/Info';




const Inbound = () => {

    


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
                <p className='h-full flex justify-center items-center p-4 bg-primary/10 text-white text-4xl'>INBOUND</p>
        </div>
        <div class="text-center pt-10 pb-5">
        <h1 class="font-serif text-blue-700 text-6xl">Explore</h1>
        <hr class="border-red-500 w-1/4 mx-auto" />
        </div>

        <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2">
                <img src={img1} alt="Sightseeing" class="w-full h-auto"></img>
            </div>
            <div class="lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 text-center lg:text-left">
                <h2 class="text-2xl font-bold mb-4">Sightseeing and Tailor-Made Itinerary</h2>
                <p class="text-gray-700">Our travel consultants are specialized in hand-picked and craft your unforgettable experiences in Thailand.</p>
            </div>
        </div>
        </div>

        <div class="text-center pt-10 pb-10">
        <h1 class="font-serif text-blue-700 text-6xl">Destinations in Cambodia</h1>
        <hr class="border-red-500 w-1/4 mx-auto" />
        </div>


        <div className='grid grid-cols-12 md:grid-cols-12 grid-rows-2 gap-2 md:gap-0'>
        <img src={img1} className='col-span-12 md:col-span-6'></img>
        <img src={img1} className='col-span-12 md:col-span-6'></img>
        <img src={img1} className='col-span-12 md:col-span-4'></img>
        <img src={img1} className='col-span-12 md:col-span-4'></img>
        <img src={img1} className='col-span-12 md:col-span-4'></img>
        </div>

        

        <div>
        <div class="text-center md:pt-0 pt-8">
            <h1 class="font-serif text-blue-700 text-6xl">Our Services</h1>
            <hr class="border-red-500 w-1/4 mx-auto" />
        </div>

            <div class="flex flex-col-reverse md:flex-row items-center justify-center relative md:md:space-x-2 md:py-80 py-10">
                <div class="w-[500px] h-[150px] md:h-[350px] bg-gray-500 md:absolute md:translate-x-52 md:translate-y-10 md:p-10">
                    <h1 class="p-5 text-white text-2xl font-bold">Sightseeing and Tailor-Made Itinerary</h1>
                    <p class="pl-5 pr-5 flex">Our travel consultants are specialized in hand-picked and craft your unforgettable experiences in Cambodia</p>
                </div>
                <div class="w-[500px] h-[350px] bg-purple-500 md:absolute md:-translate-x-1/2 md:-translate-y-10 bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}></div>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-center relative md:md:space-x-2 md:py-60 py-10">
                <div class="w-[500px] h-[350px] bg-purple-500 md:absolute md:-translate-x-1/2 md:-translate-y-10 bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}></div>
                <div class="w-[500px] h-[150px] md:h-[350px] bg-gray-500 md:absolute md:translate-x-52 md:translate-y-10 md:p-10">
                    <h1 class="p-5 text-white text-2xl font-bold">Sightseeing and Tailor-Made Itinerary</h1>
                    <p class="pl-5 pr-5 flex">Our travel consultants are specialized in hand-picked and craft your unforgettable experiences in Cambodia</p>
                </div>
            </div>

            <div class=" flex flex-col-reverse md:flex-row items-center justify-center relative md:md:space-x-2 md:py-60 py-10">
                <div class="w-[500px] h-[150px] md:h-[350px] bg-gray-500 md:absolute md:translate-x-52 md:translate-y-10 md:p-10">
                    <h1 class="p-5 text-white text-2xl font-bold">Sightseeing and Tailor-Made Itinerary</h1>
                    <p class="pl-5 pr-5 flex">Our travel consultants are specialized in hand-picked and craft your unforgettable experiences in Cambodia</p>
                </div>
                <div class="w-[500px] h-[350px] bg-purple-500 md:absolute md:-translate-x-1/2 md:-translate-y-10 bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}></div>
            </div>

            <div class=" flex flex-col md:flex-row items-center justify-center relative md:md:space-x-2 md:py-60 py-10">
                <div class="w-[500px] h-[350px] bg-purple-500 md:absolute md:-translate-x-1/2 md:-translate-y-10 bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}></div>
                <div class="w-[500px] h-[150px] md:h-[350px] bg-gray-500 md:absolute md:translate-x-52 md:translate-y-10 md:p-10">
                    <h1 class="p-5 text-white text-2xl font-bold">Sightseeing and Tailor-Made Itinerary</h1>
                    <p class="pl-5 pr-5 flex">Our travel consultants are specialized in hand-picked and craft your unforgettable experiences in Cambodia</p>
                </div>
            </div>

            <div class=" flex flex-col-reverse md:flex-row items-center justify-center relative md:md:space-x-2 md:py-60 py-10">
                <div class="w-[500px] h-[150px] md:h-[350px] bg-gray-500 md:absolute md:translate-x-52 md:translate-y-10 md:p-10">
                    <h1 class="p-5 text-white text-2xl font-bold">Sightseeing and Tailor-Made Itinerary</h1>
                    <p class="pl-5 pr-5 flex">Our travel consultants are specialized in hand-picked and craft your unforgettable experiences in Cambodia</p>
                </div>
                <div class="w-[500px] h-[350px] bg-purple-500 md:absolute md:-translate-x-1/2 md:-translate-y-10 bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}></div>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-center relative md:md:space-x-2 md:py-60 py-10">
                <div class="w-[500px] h-[350px] bg-purple-500 md:absolute md:-translate-x-1/2 md:-translate-y-10 bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}></div>
                <div class="w-[500px] h-[150px] md:h-[350px] bg-gray-500 md:absolute md:translate-x-52 md:translate-y-10 md:p-10">
                    <h1 class="p-5 text-white text-2xl font-bold">Sightseeing and Tailor-Made Itinerary</h1>
                    <p class="pl-5 pr-5 flex">Our travel consultants are specialized in hand-picked and craft your unforgettable experiences in Cambodia</p>
                </div>
            </div>

            <div class="flex flex-col-reverse md:flex-row items-center justify-center relative md:md:space-x-2 md:py-60 py-10">
                <div class="w-[500px] h-[150px] md:h-[350px] bg-gray-500 md:absolute md:translate-x-52 md:translate-y-10 md:p-10">
                    <h1 class="p-5 text-white text-2xl font-bold">Sightseeing and Tailor-Made Itinerary</h1>
                    <p class="pl-5 pr-5 flex">Our travel consultants are specialized in hand-picked and craft your unforgettable experiences in Cambodia</p>
                </div>
                <div class="w-[500px] h-[350px] bg-purple-500 md:absolute md:-translate-x-1/2 md:-translate-y-10 bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}></div>
            </div>
        </div>
       

        <Sign_up></Sign_up>   
        <Info></Info>
        
        
            
        

        



    </>
  )
}

export default Inbound