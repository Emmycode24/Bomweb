import React from "react";
import { Layers, ListTree, Database } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";

const features = [
  {
    name: "Hierarchical BOM View",
    description:
      "Visualize assemblies, subassemblies, and components in a clean, tree-structured layout.",
    icon: ListTree,
  },
  {
    name: "Version Control",
    description:
      "Keep track of design revisions, item changes, and updates with complete version history.",
    icon: Database,
  },
  {
    name: "Smart Import/Export",
    description:
      "Import BOM data from spreadsheets or export it to ERP systems with a single click.",
    icon: Layers,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15, // small staggered delay for each card
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  return (
    <motion.section
      id="features"
      className="py-24 sm:py-32 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Section Header */}
        <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
          Everything you need
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Powerful tools for structured BOM management
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          BOMify gives teams full visibility and control over product composition, revisions, and
          dependencies — all in one platform.
        </p>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start text-left p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-6">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;




