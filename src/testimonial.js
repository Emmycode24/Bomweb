import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Melvin Cambell",
    role: "Mechanical Engineer at AutoTech",
    quote:
      "BOMify has revolutionized how we handle our product structures. Managing subassemblies and updates is now effortless and transparent.",
    avatar:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Product Designer at InnovateX",
    quote:
      "Before BOMify, version control was a nightmare. Now our entire design team collaborates in one clean interface — it’s a lifesaver.",
    avatar:
      "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "James Smith",
    role: "Manufacturing Manager at TechBuild",
    quote:
      "The structured hierarchy and real-time updates helped us cut errors by 40%. I can’t imagine managing BOMs any other way.",
    avatar:
      "https://randomuser.me/api/portraits/men/28.jpg",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      className="py-24 sm:py-32 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-lg font-semibold text-blue-600">Loved by Engineers</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trusted by teams building real products
        </p>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md text-left">
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;

