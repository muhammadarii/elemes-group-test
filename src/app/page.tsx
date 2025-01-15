import Navbar from "@/components/navbar";
import React from "react";
import Footer from "@/components/footer";
import BottomBar from "@/components/botomBar";
import Carousel from "@/components/carousel";
import Trending from "@/components/trending";
import Hero from "@/components/Hero";

const page = () => {
  return (
    <>
      <div>
        <Navbar />
        {/* Hero */}
        <Hero />
        {/* Carousel */}
        <div>
          <Carousel />
        </div>
        <div>
          <Trending />
        </div>
        {/* BottomBar */}
        <div>
          <BottomBar />
        </div>
        {/* Footer */}
        <div className="hidden md:block">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
