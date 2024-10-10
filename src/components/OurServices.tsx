'use client'
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import * as motion from "framer-motion/client";
import { ArrowRight, Shirt, Droplet, ShoppingBag, Gamepad } from 'lucide-react';


const services = [
  {
    title: "Dry Cleaning",
    icon: Shirt,
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    description: "Professional dry cleaning for your delicate garments.",
    features: ["Gentle on fabrics", "Stain removal", "Preserves color and texture"]
  },
  {
    title: "Laundry",
    icon: Droplet,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Thorough washing and drying for all your everyday clothes.",
    features: ["Customized wash cycles", "Fabric softener options", "Folding service"]
  },
  {
    title: "Bag Cleaning",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1438&q=80",
    description: "Specialized cleaning for all types of bags and purses.",
    features: ["Leather care", "Stain removal", "Hardware polishing"]
  },
  {
    title: "Steam Ironing",
    icon: '',
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Wrinkle-free garments with our professional steam ironing service.",
    features: ["Crisp finish", "Suitable for delicate fabrics", "Removes stubborn wrinkles"]
  },
  {
    title: "Shoe Cleaning",
    icon: '',
    image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1490&q=80",
    description: "Restore the shine to your footwear with our shoe cleaning service.",
    features: ["Leather conditioning", "Suede cleaning", "Odor removal"]
  },
  {
    title: "Curtain Cleaning",
    icon: '',
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    description: "Refresh your home with our professional curtain cleaning service.",
    features: ["Dust removal", "Stain treatment", "Careful handling of delicate fabrics"]
  },
  {
    title: "Carpet Cleaning",
    icon: '',
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Deep cleaning for carpets to remove dirt, stains, and allergens.",
    features: ["Deep stain removal", "Deodorizing", "Extends carpet life"]
  },
  {
    title: "Toy Cleaning",
    icon: Gamepad,
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Sanitize and clean your children's toys for a healthier play environment.",
    features: ["Safe cleaning solutions", "Disinfection", "Suitable for various toy materials"]
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const contentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

export default function OurServices() {
  const [activeService, setActiveService] = useState(0);

  return (
    <motion.section 
      id="laundryservice" 
      className="py-24 bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center text-[#091271] mb-8 md:mb-12"
          variants={itemVariants}
        >
          Our Services
        </motion.h2>
        
        <motion.div 
          className="flex justify-center mb-8 overflow-x-auto"
          variants={itemVariants}
        >
          <div className="bg-white rounded-full p-1 shadow-md flex flex-wrap justify-center">
            {services.map((service, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 m-1 ${
                  activeService === index
                    ? 'bg-[#091271] text-white'
                    : 'bg-transparent text-[#091271] hover:bg-gray-100'
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
                {services[activeService].icon !== '' && React.createElement(services[activeService].icon, { className: "w-8 h-8 text-[#091271]" })}
                <h3 className="text-2xl font-bold text-[#091271]">{services[activeService].title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{services[activeService].description}</p>
              <h4 className="text-lg font-semibold mb-2 text-[#091271]">Key Features:</h4>
              <ul className="space-y-2 mb-6">
                {services[activeService].features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#091271]" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                className="w-full md:w-auto bg-[#091271] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2"
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