import Image from 'next/image';
import * as motion from "framer-motion/client";

export default function Hero() {
  return (
    <section className="relative h-full flex items-center overflow-hidden pt-[12rem] md:h-screen ">
      <div className="absolute inset-0 z-0">
        {/* <Image 
          src="/assets/img/hero-bg.jpg" 
          alt="Laundry Service" 
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#206d73] to-[#020808] opacity-70"></div>
      </div>
      <div className="w-full">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 z-10 relative">
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                Premium <span className="text-yellow-400">Laundry</span> & <span className="text-yellow-400">Dry Cleaning</span> Excellence
              </h1>
              <div className="w-20 h-1 bg-white mb-6"></div>
              <p className="text-xl md:text-2xl mb-4 opacity-90 leading-relaxed">
                Cutting-edge Technology<br />
                Eco-friendly Cleaning Processes
              </p>
              <p className="text-2xl md:text-3xl font-bold mb-6">
                Enjoy 15% OFF Your First Service
              </p>
              <div className="w-20 h-1 bg-white mb-6"></div>
              <p className="text-xl mb-8">Experience the Icon Laundry difference</p>
              <motion.button 
                className="bg-white text-[#206d73] px-10 py-4 rounded-full text-xl font-semibold hover:bg-opacity-90 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Pickup
              </motion.button>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image 
                src="https://tumbledry.in/wp-content/uploads/2023/08/laundry-feature.webp" 
                alt="Laundry Service" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-sm"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}