// import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import OfficeFeatures from "../OfficeFeatures/OfficeFeatures";
import OfficeContactForm from "../OfficeContactForm/OfficeContactForm";
import HeroSection from "../Slider/HeroSection";
import OfficeSpacesList from "../OfficeSpacesList/OfficeSpacesList";

const Home = () => {
  const [text, setText] = useState("Welcome to Instant Office Fremantle ");
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    const texts = [
      "Welcome to Instant Office Fremantle ",
      "Contact Us and Get Space for Your Business 🚀",
      "Start Your Journey Today 🌟",
    ];

    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <HeroSection />
      <OfficeFeatures />
      <OfficeSpacesList />
      <OfficeContactForm />
    </>
  );
};

export default Home;
