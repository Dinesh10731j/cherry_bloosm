"use client";

import Header from "@/components/header";
import Cherry_Bloosm_Background from "../../../assets/images/cherry-blossom.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src={Cherry_Bloosm_Background}
          alt="Cherry Blossom Background"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        />
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center px-4"
        >
          <h1 className="text-4xl font-bold text-white mb-8">
            Welcome to Cherry Bloosm Cafe
          </h1>
          {/* Circular layout container */}
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Pizza Image (Top Center) */}
              <div
                className="absolute"
                style={{
                  transform: "rotate(90deg) translate(120px) rotate(-90deg)",
                }}
              >
             
              </div>
              {/* Burger Image (Bottom Left) */}
              <div
                className="absolute"
                style={{
                  transform: "rotate(210deg) translate(120px) rotate(-210deg)",
                }}
              >
                
              </div>
              {/* Coffee Image (Bottom Right) */}
              <div
                className="absolute"
                style={{
                  transform: "rotate(330deg) translate(120px) rotate(-330deg)",
                }}
              >
               
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
