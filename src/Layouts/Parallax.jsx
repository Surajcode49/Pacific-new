import React from "react";
import Process from "./Process";
import BlogSection from "./BlogSection";
import AboutSection from "./AboutSection";
import Tackrecord from "./Tackrecord";
import Appointment from "./Appointment";
import FlagSection from "./FlagsSection";
import SucessSection from "./SucessSection";
import ScrollToTop from "react-scroll-to-top";
import Plane from "../Layouts/Plane";
import AnimatedGif from "./AnimatedGif";
import MountainParallax from "../Layouts/MountainParallax";
import WhatsappBot from "../Layouts/Whatsappbot";
import Unicard from "../Layouts/unicards";
import About from "./About";
import Universitiescard from "../Components/Cards/UniversitiesCard";
import PopularCourses from "./PopularCourses";
import Review from "./Review";
import RegisterComp from "./RegisterComp";
import VedioSlidder from "../Layouts/VedioSlidder";
import ProcessComp from "./ProcessComp";

const Parallaxcomp = () => {
  return (
    <div className="parallax-main">
      <MountainParallax />
      <About />
      {/* <ProcessComp /> */}
      <Tackrecord />
      {/* <Universitiescard /> */}
      <Plane/>
      <Unicard />
      <PopularCourses />
      <RegisterComp />
      <VedioSlidder />
      <AboutSection />
      <Process />
      <Review />
      <SucessSection />
      <Appointment />
      <BlogSection />
      <ScrollToTop color="#06a1ab" right="15px" />
      <WhatsappBot />
    </div>
  );
};

export default Parallaxcomp;
