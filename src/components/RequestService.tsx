"use client";

import * as motion from "framer-motion/client";
import { Send, User, Mail, MessageSquare, Package } from "lucide-react";
import { useState } from "react";

export default function RequestService() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your backend
  };

  return (
    <section
      id="requestservice"
      className="py-24 bg-gradient-to-r from-[#091271] to-[#020808]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-[#31387c] p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Request a Service</h2>
              <p className="text-lg mb-8 opacity-90">
                Experience our premium laundry services. Fill out the form, and
                we&apos;ll get back to you promptly.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Quick Response</h3>
                  <p className="text-sm opacity-80">
                    We typically respond within 2 hours
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="flex items-center">
                  <User className="mr-2" /> Professional Staff
                </p>
                <p className="flex items-center">
                  <Package className="mr-2" /> Quality Service
                </p>
                <p className="flex items-center">
                  <MessageSquare className="mr-2" /> 24/7 Support
                </p>
              </div>
            </div>
            <motion.form
              className="md:w-1/2 p-12"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Name
                </label>
                <div className="relative">
                  <User className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-[#091271] focus:ring-1 focus:ring-[#091271]"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-[#091271] focus:ring-1 focus:ring-[#091271]"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="service"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Service
                </label>
                <div className="relative">
                  <Package className="absolute top-3 left-3 text-gray-400" />
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-[#091271] focus:ring-1 focus:ring-[#091271] appearance-none"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="wash-fold">Wash & Fold</option>
                    <option value="dry-cleaning">Dry Cleaning</option>
                    <option value="alterations">Alterations</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute top-3 left-3 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-10 pr-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-[#091271] focus:ring-1 focus:ring-[#091271]"
                    required
                  ></textarea>
                </div>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-[#091271] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Request
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
