import React from "react";
import HeroSection from "../../subcomponents/HeroSection";
import TopVillas from "../../subcomponents/TopVillas";
import Regions from "../../subcomponents/Regions";
import OurSpecialities from "../../subcomponents/OurSpecialities";
import Host from "../../subcomponents/Host";
import About from "../../subcomponents/About";
import Contact from "../../subcomponents/Contact";


const Home = () => {
  return (
    <>
      <article className="page">
        <HeroSection/>
        <TopVillas/>
        <Regions/>
        <OurSpecialities/>
        <Host/>
        <About/>
        <Contact/>
      </article>
    </>
  );
};

export default Home;
