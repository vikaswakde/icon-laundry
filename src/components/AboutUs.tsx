'use client'
import { useRef } from 'react';
import * as motion from "framer-motion/client";
import Image from 'next/image';
import { ArrowRight, Leaf, Sparkles, Clock, Shield } from 'lucide-react';

export default function AboutUs() {
  const ref = useRef(null);

  const features = [
    { icon: Sparkles, title: 'Expert Care', description: 'Our skilled professionals treat your garments with utmost care and precision.', highlight: '100% Satisfaction' },
    { icon: Leaf, title: 'Eco-Friendly Solutions', description: 'We use environmentally conscious cleaning methods and products.', highlight: 'Reduce Carbon Footprint' },
    { icon: Clock, title: 'Convenient Service', description: 'Flexible pickup and delivery options to fit your busy schedule.', highlight: '24/7 Availability' },
    { icon: Shield, title: 'Quality Guarantee', description: 'We stand behind our work with a 100% satisfaction guarantee.', highlight: 'Money-back Promise' },
  ];

  return (
    <motion.section 
      id="aboutus" 
      className="py-24 bg-gradient-to-b from-white to-gray-100"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#206d73] mb-6"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Icon Laundry
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#206d73] mx-auto mb-10"
            variants={{
              hidden: { width: 0 },
              visible: { width: 96 }
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Your trusted partner for premium laundry and dry cleaning services. We combine years of expertise with innovative technology to deliver exceptional results.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between space-y-16 lg:space-y-0 lg:space-x-16">
          <motion.div 
            className="lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image 
                src="https://iconlaundry.in/assets/img/laundry.png" 
                alt="About Icon Laundry" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div
                    className="mb-6 flex items-center justify-between"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="w-12 h-12 text-[#206d73]" />
                    <span className="text-sm font-semibold text-[#206d73] bg-[#e6f3f4] px-3 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-[#206d73] mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 text-center"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a 
                href="#" 
                className="inline-flex items-center text-lg text-[#206d73] font-semibold hover:underline"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Learn more about our process
                <ArrowRight className="ml-2 w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}