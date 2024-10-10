"use client";
import { useState } from "react";
import * as motion from "framer-motion/client";

import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does your laundry service work?",
    answer:
      "Our service is simple: schedule a pickup, we collect your clothes, clean them using our 6-stage process, and deliver them back to you fresh and clean. You can track your order status through our app or website.",
  },
  {
    question: "What types of garments do you clean?",
    answer:
      "We clean a wide range of garments including everyday wear, formal wear, bedding, and delicates. If you have any specific items you're unsure about, please contact our customer service.",
  },
  {
    question: "How long does the cleaning process take?",
    answer:
      "Our standard turnaround time is 48 hours. However, we also offer express services for an additional fee if you need your clothes back sooner.",
  },
  {
    question: "Do you offer dry cleaning services?",
    answer:
      "Yes, we offer both laundry and dry cleaning services. Our experts will choose the most appropriate cleaning method based on the care label and fabric type of your garments.",
  },
  {
    question: "How do I pay for the service?",
    answer:
      "We offer multiple payment options including credit/debit cards, digital wallets, and cash on delivery. You can securely save your payment method in our app for convenient future transactions.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="mb-4 overflow-hidden rounded-lg shadow-md"
      initial={false}
      animate={{ backgroundColor: isOpen ? "#f0f9fa" : "#ffffff" }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#091271]" />
        ) : (
          <Plus className="w-5 h-5 text-[#091271]" />
        )}
      </button>
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { opacity: 1, height: "auto", marginBottom: "1rem" },
          collapsed: { opacity: 0, height: 0, marginBottom: "0rem" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className="px-6 pb-6 text-gray-600">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-[#091271] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg mb-6 text-gray-700">Still have questions?</p>
          <button className="bg-[#091271] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
