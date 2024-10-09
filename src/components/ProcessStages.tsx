'use client'

import { useState, useRef } from 'react';
import * as motion from "framer-motion/client";
import { Layers, SprayCan, Droplets, Shirt, ClipboardCheck, Package } from 'lucide-react';
import Image from 'next/image';

const stages = [
  {
    icon: Layers,
    title: "Sorting & Inspection",
    description: "Careful segregation based on care label, fabric type, and color",
    color: "bg-blue-100",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    icon: SprayCan,
    title: "Stain Treatment",
    description: "Advanced spotting machines & eco-friendly stain removing solutions",
    color: "bg-green-100",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  },
  {
    icon: Droplets,
    title: "Processing",
    description: "State-of-the-art dry cleaning machines & environmentally friendly cleaning solutions",
    color: "bg-yellow-100",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    icon: Shirt,
    title: "Finishing",
    description: "Specialized steam ironing equipment for each garment type",
    color: "bg-purple-100",
    image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80"
  },
  {
    icon: ClipboardCheck,
    title: "Quality Check",
    description: "Thorough inspection of each item by our expert team",
    color: "bg-pink-100",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    icon: Package,
    title: "Packing",
    description: "Custom packing options: Folded, Hanger, or Vacuum-sealed as per your preference",
    color: "bg-indigo-100",
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  }
];

export default function ProcessStages() {
  const [activeStage, setActiveStage] = useState(0);
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

  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#206d73] mb-4"
            variants={itemVariants}
          >
            Our 6-Stage Process
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#206d73] mx-auto mb-8"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Experience the difference with our specialized machinery and skilled experts at every stage.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-8">
          <motion.div 
            className="w-full lg:w-1/3 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 space-x-4 lg:space-x-0 lg:space-y-4">
              {stages.map((stage, index) => (
                <motion.div 
                  key={index}
                  className={`flex-shrink-0 w-48 lg:w-full flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeStage === index ? `${stage.color} shadow-lg` : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveStage(index)}
                  variants={itemVariants}
                >
                  <div className={`p-3 rounded-full ${activeStage === index ? 'bg-white' : stage.color}`}>
                    <stage.icon className={`w-6 h-6 ${activeStage === index ? 'text-[#206d73]' : 'text-gray-600'}`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${activeStage === index ? 'text-[#206d73]' : 'text-gray-800'}`}>{stage.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-xl overflow-hidden"
              key={activeStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 md:h-96">
                <Image 
                  src={stages[activeStage].image} 
                  alt={stages[activeStage].title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#206d73] to-transparent opacity-70"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{stages[activeStage].title}</h3>
                  <p className="text-lg">Step {activeStage + 1} of 6</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-lg md:text-xl text-gray-700 mb-6">{stages[activeStage].description}</p>
                <motion.button 
                  className="w-full md:w-auto bg-[#206d73] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}