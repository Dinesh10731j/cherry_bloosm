"use client";
import Header from "@/components/header";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImages } from "@/lib/utils";
import WhatWeOffer from "@/components/what-we-offer";
import WhyCherryBlossom from "@/components/why-cherry-bloosm";
import WhatOurCustomerSays from "@/components/what-our-customer-says";
import Footer from "@/components/footer";
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
  customPaging: () => (
    <div className="w-3 h-3 bg-pink-100 rounded-full mt-4"></div>
  ),
};

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-pink-300">
    
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold font-[cursive] mb-8 flex items-center justify-center gap-2"
          >
            Welcome to Cherry Blossom Cafe
          </motion.h1>
        </motion.div>

        {/* Carousel Section */}
        <div className="max-w-5xl mx-auto px-10 md:px-40 mt-50">
          <Slider {...carouselSettings} pauseOnDotsHover>
            {sliderImages.map((data, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center items-center"
              >
                <Image
                  src={data.imagePath}
                  alt="Cafe Image"
                  height={200}
                  width={700}
                  className="rounded-lg object-cover"
                />
              </motion.div>
            ))}
          </Slider>
        </div>
        
      </div>

      <section>
      <WhatWeOffer/>

      </section>

      <section>

      <WhyCherryBlossom/>
      </section>


      <section>
        <WhatOurCustomerSays/>
      </section>


      <section>
<Footer/>

      </section>


      

     

    
    </>
  );
};

export default Home;
