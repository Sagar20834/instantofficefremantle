import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import op1_image from "../../assets/Hallway_NightView.jpg";
import op2_image from "../../assets/GalleryHotelPt2-8.jpeg";
import op3_image from "../../assets/GalleryManjimup.png";
import of_1 from "../../assets/1.jpg";
import of_2 from "../../assets/2.jpg";
import of_3 from "../../assets/3.jpg";
import of_4 from "../../assets/4.jpg";
import of_5 from "../../assets/5.jpg";
import of_6 from "../../assets/6.jpg";
import of_7 from "../../assets/7.jpg";
import of_8 from "../../assets/8.jpg";
import of_9 from "../../assets/9.jpg";
import of_10 from "../../assets/10.jpg";

import Slider from "react-slick";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router";

const images = [of_1, of_2, of_3, of_4, of_5, of_6, of_7, of_8, of_9, of_10];

const HeroSection = () => {
  // const servicesRef = useRef<HTMLDivElement | null>(null);

  // const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  // const handleExploreServicesClick = () => {
  //   servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // const handleBookServiceClick = () => {
  //   navigate("/contact-us"); // ⬅️ Navigate to contact page
  // };

  return (
    <section className="relative z-10 flex flex-col justify-between h-[75vh] md:h-[92vh] bg-black/30">
      <div className="absolute top-0 left-0 w-full z-50">
        {/* Optional: NoticesMarquee */}
      </div>

      {/* Background Image Slider */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="w-full h-[75vh] md:h-[92vh]">
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Hero Content */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4">
        {/* <div className="flex flex-col sm:flex-row gap-4 ">
          <motion.button
            initial={{ opacity: 0 }}
            whileHover={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
            whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
            whileInView={{ opacity: 1 }}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-200 transition w-64"
            onClick={handleExploreServicesClick}
          >
            Explore Our Services
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            whileHover={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
            whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
            whileInView={{ opacity: 1 }}
            className="bg-gray-400 text-blue-600 px-4 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-200 transition w-64"
            onClick={handleBookServiceClick}
          >
            Book a Catering Service
          </motion.button>
        </div> */}
      </div>

      {/* Services Section */}

      {/* Booking Form Modal */}
    </section>
  );
};

export default HeroSection;
