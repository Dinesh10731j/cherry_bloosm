'use client';

import React from 'react';
import cafeInterior from "@/assets/images/coffeehouse.jpg";
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {motion} from "framer-motion"

const About = () => {

  return (
    <>
      <div className="bg-pink-300 min-h-screen flex flex-col">
        <Header />
        <motion.div className="flex flex-col items-center justify-center flex-1 py-12 mt-20"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl bg-pink-200 shadow-lg rounded-2xl p-8 w-full mx-4">
            <h1 className="text-4xl font-bold text-pink-600 text-center font-[cursive]">About Cherry Blossom Cafe</h1>
            <p className="text-white mt-4 text-lg text-center font-[cursive]">
              Welcome to Cherry Blossom Cafe, a cozy haven for coffee lovers and food enthusiasts.
              Nestled in the heart of the city, our cafe is a place where flavors meet comfort.
            </p>
            <motion.div className="mt-6 grid md:grid-cols-2 gap-6 items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            >
              
              <Image
                src={cafeInterior}
                alt="Cafe Interior" 
                className="w-full rounded-lg shadow-md"

              />
              <div>
                <h2 className="text-2xl font-semibold text-pink-500 font-[cursive]">Our Story</h2>
                <p className="text-white mt-2 font-[cursive]">
                  Founded with love and passion, Cherry Blossom Cafe is dedicated to bringing you
                  the finest coffee and homemade delicacies. Whether you&apos;re here for a quick cup
                  of espresso or a leisurely brunch, we promise a delightful experience.
                </p>
              </div>
            </motion.div>
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-semibold text-pink-500 font-[cursive]">Our Mission</h2>
              <p className="text-white mt-2 font-[cursive]">
                We strive to create a warm and inviting space where people can connect, unwind,
                and savor delicious flavors. Sustainability and quality are at the heart of everything we do.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default About;