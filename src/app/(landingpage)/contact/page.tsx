"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {motion} from "framer-motion"
import { FormInputs } from "@/lib/utils";


const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <>
      
      <div className="bg-pink-300 min-h-screen flex flex-col justify-between">
      <Header />
        <div className="flex-grow flex items-center justify-center px-4">
          <motion.div className="w-full max-w-lg p-6 bg-pink-200 rounded-lg shadow-md"  initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold text-center text-pink-600 mb-4 font-[cursive]">Contact Cherry Blossom Cafe</h2>
            <p className="text-center text-white mb-4 font-[cursive]">Located in Lambagar, Tarkeshwor, Kathmandu, Nepal</p>
            <p className="text-center text-white font-semibold font-[cursive]">Phone: +977-9800000000</p>
            <p className="text-center text-white font-semibold font-[cursive]">Email: cherryblossomcafe@gmail.com</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div>
                <label className="block text-white font-[cursive]">Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                {errors.name && <p className="text-red-500 text-sm font-[cursive]">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-white font-[cursive]">Email</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
                  className="w-full font-[cursive] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                {errors.email && <p className="text-red-500 text-sm font-[cursive]">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-white font-[cursive]">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                  rows={4}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm font-[cursive]">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full font-[cursive] bg-pink-500 cursor-pointer text-white py-2 rounded-md hover:bg-pink-600 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
