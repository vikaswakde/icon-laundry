"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Busy Professional",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    quote:
      "Icon Laundry has been a lifesaver! Their service is impeccable, and I always get my clothes back fresh and perfectly pressed. It's freed up so much of my time.",
  },
  {
    name: "Michael Chen",
    role: "Student",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    quote:
      "As a student, I don't have much time for laundry. Icon Laundry's affordable prices and quick turnaround have made my life so much easier. Highly recommend!",
  },
  {
    name: "Emily Rodriguez",
    role: "Working Mom",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    quote:
      "I was skeptical at first, but Icon Laundry has exceeded my expectations. Their attention to detail is amazing, and their staff is always so friendly and helpful.",
  },
  {
    name: "David Thompson",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    quote:
      "As someone who's always on the go, Icon Laundry's service has been invaluable. Their app makes scheduling pickups a breeze, and the quality is consistently top-notch.",
  },
  {
    name: "Lisa Patel",
    role: "Healthcare Professional",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    quote:
      "With long shifts at the hospital, Icon Laundry has been a game-changer for me. Their hygienic practices give me peace of mind, and the convenience is unbeatable.",
  },
];

export default function Testimonials() {
  const [infiniteTestimonials, setInfiniteTestimonials] = useState<
    Testimonial[]
  >([]);

  useEffect(() => {
    // Create an infinite loop of testimonials
    setInfiniteTestimonials([
      ...testimonials,
      ...testimonials,
      ...testimonials,
    ]);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#091271] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <motion.div
            className="flex m-[4rem]"
            animate={{ x: [0, -2400] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative pt-10 bg-white p-6 rounded-lg shadow-lg">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <h3 className="text-xl font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{testimonial.role}</p>
                    <Quote className="w-8 h-8 text-[#091271] mx-auto mb-4" />
                    <p className="text-lg text-gray-700 italic">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
