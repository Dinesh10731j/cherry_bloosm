"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { specials } from "@/lib/utils";
const Specials = () => {
  return (
    <>
    <div className="min-h-screen bg-pink-300 px-4 md:px-10 flex flex-col">
      <Header/>
      <h2 className="text-3xl font-bold text-pink-700 text-center mb-8 font-[cursive]">Today&apos;s Specials</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {specials.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-pink-200 mb-4 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {React.createElement(item.icon,{size:40,className:"text-pink-700"})}
            <h3 className="text-xl font-semibold mt-4 text-pink-700 font-[cursive]">{item.name}</h3>
            <p className="text-white mt-2 font-[cursive]">{item.description}</p>
            <span className="mt-4 text-lg font-bold text-pink-700 font-[cursive]">{item.price}</span>
          </motion.div>
        ))}
      </motion.div>

    </div>
    <Footer/>
    </>
  );
};

export default Specials;
