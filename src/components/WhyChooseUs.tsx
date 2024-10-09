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
          <h2 className="text-4xl md:text-5xl font-bold text-[#206d73] mb-6">
            Why Choose Icon Laundry?
          </h2>
          <div className="w-24 h-1 bg-[#206d73] mx-auto mb-10"></div>
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
                  <reason.icon className="w-10 h-10 text-[#206d73]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#206d73]">
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
          <h3 className="text-3xl font-bold text-[#206d73] mb-10">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#206d73] to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-white bg-opacity-20 rounded-b-lg">
              <p className="text-2xl md:text-3xl font-semibold mb-6 text-[#131e1f]">
                &quot;We&apos;re not just cleaning clothes; we&apos;re caring for your wardrobe
                with precision and passion.&quot;
              </p>
              <button className="bg-[#206d73] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#184f54] transition-colors shadow-lg">
                Experience the Difference
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
