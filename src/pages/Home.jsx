import React from "react";
import Hero from "../components/Hero/Hero";
import seaVid from "../assets/video/sea.mp4";
import Places from "../components/Places/Places";
import PartnerCard from "../components/partner_card/PartnerCard";
import Offer from "../components/offer/offer";
import Sign_up from "../components/sign_up_and_sign_in/Sign_up";
import Info from "../components/info/Info";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div>
        <div className="relative h-screen">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover z-[-1]"
          >
            <source src={seaVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <PartnerCard></PartnerCard>
        <Offer></Offer>
        <Sign_up></Sign_up>
        <Info></Info>
      </div>
    </>
  );
};

export default Home;
