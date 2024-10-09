'use client'

import React,{ useState, useRef } from 'react';
import * as motion from "framer-motion/client";
import Image from 'next/image';
import { ShirtIcon, Wind, Scissors, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Wash & Fold",
    description: "Experience the convenience of our premium wash and fold service. We use top-quality detergents and fabric softeners to ensure your clothes are clean, fresh, and neatly folded.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    icon: ShirtIcon,
    features: ["24-hour turnaround", "Eco-friendly options", "Customized care"]
  },
  {
    title: "Dry Cleaning",
    description: "Trust our expert dry cleaning service for your delicate and special garments. We use advanced techniques to clean and preserve the quality of your valuable clothes.",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    icon: Wind,
    features: ["Stain removal expertise", "Gentle on fabrics", "Preserve color and texture"]
  },
  {
    title: "Alterations",
    description: "Get the perfect fit with our professional alteration service. From simple hemming to complex resizing, our skilled tailors ensure your clothes look and feel great.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    icon: Scissors,
    features: ["Experienced tailors", "Quick turnaround", "Wide range of alterations"]
  }
];

export default function OurServices() {
  const [activeService, setActiveService] = useState(0);
  const ref = useRef(null);

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



  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <motion.section 
      id="laundryservice" 
      className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-100"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center text-[#206d73] mb-8 md:mb-12"
          variants={itemVariants}
        >
          Our Premium Services
        </motion.h2>
        
        <motion.div 
          className="flex justify-center mb-8"
          variants={itemVariants}
        >
          <div className="bg-white rounded-full p-1 shadow-md">
            {services.map((service, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeService === index
                    ? 'bg-[#206d73] text-white'
                    : 'bg-transparent text-[#206d73] hover:bg-gray-100'
                }`}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={activeService}
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-48 md:h-full">
                <Image 
                  src={services[activeService].image} 
                  alt={services[activeService].title} 
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
            </div>
            <div className="md:w-1/2 p-6">
              <div className="flex items-center space-x-4 mb-4">
                {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-[#206d73]" })}
                <h3 className="text-2xl font-bold text-[#206d73]">{services[activeService].title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{services[activeService].description}</p>
              <h4 className="text-lg font-semibold mb-2 text-[#206d73]">Key Features:</h4>
              <ul className="space-y-2 mb-6">
                {services[activeService].features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#206d73]" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                className="w-full md:w-auto bg-[#206d73] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}