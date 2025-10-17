import React from "react";
import { Layers, ListTree, Database, Users } from "lucide-react";
import { motion } from "framer-motion";

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
    name: "Collaboration Tools",
    description:
      "Enable engineers, operators, and admins to work seamlessly on the same product structure.",
    icon: Users,
  },
  {
    name: "Smart Import/Export",
    description:
      "Import BOM data from spreadsheets or export it to ERP systems with a single click.",
    icon: Layers,
  },
];

const Features = () => {
  return (
    <motion.section
      id="features"
      className="py-24 sm:py-32 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-lg font-bold text-blue-600">Everything you need</h1>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Powerful tools for structured BOM management
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          BOMify gives teams full visibility and control over product composition, revisions, and
          dependencies — all in one platform.
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4 mx-auto">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;


