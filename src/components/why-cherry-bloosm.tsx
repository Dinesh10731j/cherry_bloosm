import React from "react";
import { Coffee, Heart, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhyCherryBlossom = () => {
  return (
    <section className="py-16 bg-pink-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-bold text-white mb-8 font-[cursive]"
        >
          Why Cherry Blossom Cafe?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="p-6 bg-pink-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center text-pink-600 mb-4">
              <Coffee size={50} />
            </div>
            <h3 className="text-xl font-semibold text-pink-500 font-[cursive]">Freshly Brewed Coffee</h3>
            <p className="text-white mt-2">Enjoy the finest, freshly brewed coffee made from premium beans.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="p-6 bg-pink-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center text-pink-600 mb-4">
              <Heart size={50} />
            </div>
            <h3 className="text-xl font-semibold text-pink-500 font-[cursive]">Cozy Ambience</h3>
            <p className="text-white mt-2">Relax and unwind in a warm, cozy environment with a peaceful vibe.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="p-6 bg-pink-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center text-pink-600 mb-4">
              <Users size={50} />
            </div>
            <h3 className="text-xl font-semibold text-pink-500 font-[cursive]">Great Company</h3>
            <p className="text-white mt-2">Meet new people, connect with friends, or spend quality time with loved ones.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="p-6 bg-pink-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center text-pink-600 mb-4">
              <CheckCircle size={50} />
            </div>
            <h3 className="text-xl font-semibold text-pink-500 font-[cursive]">Quality Service</h3>
            <p className="text-white mt-2">We provide exceptional service to ensure you have a memorable experience.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyCherryBlossom;
