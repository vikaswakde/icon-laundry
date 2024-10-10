"use client";

import { motion, useInView } from "framer-motion";
import { Clock, Truck, ThumbsUp, Recycle } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const reasons = [
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Get your clothes back clean and fresh in no time.",
    color: "bg-blue-100",
  },
  {
    icon: Truck,
    title: "Free Pickup & Delivery",
    description: "We come to you for ultimate convenience.",
    color: "bg-green-100",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    description: "Your satisfaction is our top priority.",
    color: "bg-yellow-100",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Practices",
    description: "We use environmentally responsible cleaning methods.",
    color: "bg-purple-100",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="why_choose"
      className="py-24 bg-gradient-to-b from-white to-gray-100"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#091271] mb-8 md:mb-12">
            Why Choose Icon Laundry?
          </h2>
          <div className="w-24 h-1 bg-[#091271] mx-auto mb-10"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience the difference with our premium laundry services. We
            combine cutting-edge technology with eco-friendly practices to
            deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`${reason.color} rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="bg-white rounded-full p-4 mr-6">
                  <reason.icon className="w-10 h-10 text-[#091271]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#091271]">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-700 text-lg">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-24 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <h3 className="text-3xl font-bold text-[#091271] mb-10">
            Our Commitment to Excellence
          </h3>
          <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Modern Laundry Facility"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091271] to-transparent opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="bg-white bg-opacity-80 p-8 rounded-lg shadow-xl max-w-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <svg
                  className="w-12 h-12 text-[#091271] mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-2xl md:text-3xl font-semibold mb-6 text-[#091271] italic">
                  We&apos;re not just cleaning clothes; we&apos;re caring for
                  your wardrobe with precision and passion.
                </p>
                <motion.button
                  className="bg-[#091271] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#424674] transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Experience the Difference
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
