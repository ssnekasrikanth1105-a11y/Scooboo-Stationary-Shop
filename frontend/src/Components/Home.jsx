import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import OfferBanner from "../Pages/Offerbanner";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OfferBanner />
      <Footer />
    </>
  );
};

export default Home;