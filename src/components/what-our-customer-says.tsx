import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { customerReview } from "@/lib/utils"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "0px",
  customPaging: () => <div className="w-3 h-3 bg-pink-100 mt-4 rounded-full"></div>,
};

const WhatOurCustomerSays = () => {
  return (
    <section className="py-16 bg-pink-300">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-bold text-white mb-8 font-[cursive]"
        >
          What Our Customers Say
        </motion.h2>

        {/* Slick Carousel Section for Reviews */}
        <Slider {...carouselSettings}>
          {customerReview.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="p-6 bg-pink-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">
                {/* Render icon dynamically using React.createElement */}
                {React.createElement(review.image, {
                  size: 40,
                  className: "text-pink-500",
                })}
              </div>
              <h3 className="text-xl font-semibold text-pink-600 font-[cursive]">
                {review.name}
              </h3>
              <p className="text-white mt-2">{review.review}</p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhatOurCustomerSays;
