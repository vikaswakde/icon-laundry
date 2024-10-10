"use client";

import Image from "next/image";
import * as motion from "framer-motion/client";
import { Smartphone, Clock, Sparkles, ArrowRight } from "lucide-react";

export default function AppPromotion() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#091271]">
              Revolutionize Your <span className="text-[#060c4d]">Laundry</span>{" "}
              Experience
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Effortless cleaning, impeccable results. Download our app and
              transform your laundry routine today.
            </p>
            <ul className="space-y-6 mb-10">
              {[
                { icon: Smartphone, text: "User-Friendly Interface" },
                { icon: Clock, text: "24/7 Booking & Tracking" },
                { icon: Sparkles, text: "Premium Cleaning Service" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <item.icon className="w-6 h-6 text-[#091271] mr-3" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
            <div className="w-20 h-1 bg-[#091271] mb-8"></div>
            <p className="text-center mb-6">
              Available on Play Store and iOS App Store
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://play.google.com/store/apps/details?id=app.iawebtech.iconlaundry&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=app.iawebtech.iconlaundry&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#383b66] rounded-3xl transform rotate-3 opacity-90" />
              <Image
                src="https://iconlaundry.in/assets/img/banner_img.png"
                alt="Icon Laundry App"
                width={650}
                height={650}
                className="rounded-3xl shadow-2xl relative z-10 transform -rotate-3"
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-[#091271] text-white px-6 py-3 rounded-full font-semibold shadow-lg z-20"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://play.google.com/store/apps/details?id=app.iawebtech.iconlaundry&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Download Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full bg-[url('/laundry-pattern.png')] opacity-10" />
        </motion.div>
      </div>
    </section>
  );
}
