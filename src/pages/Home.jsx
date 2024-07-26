import React from "react";
import Banner from "../Components/Banner/Banner";
import Heading from "../Components/SectionHeading/Heading";
import EducationCard from "../Components/EducationCard";
import Layout from "../Components/layout/Layout";
import AboutUs from "../Components/AboutUs";
import Gallery from "../Components/Gallery";
import Testimonials from "../Components/Testimonials";
import ContactUs from "../Components/ContactUs";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <div className="ourProgrammContainer mt-5" id="programm">
        <Heading heading={"our program"} subHeading={"what we offer"} textPosition={"textPosition"} />
        <div className="ourProgram">
          <EducationCard />
        </div>
      </div>
      <AboutUs />
      <Gallery />
      <Testimonials />
      <ContactUs />
    </Layout>
  );
};

export default Home;
