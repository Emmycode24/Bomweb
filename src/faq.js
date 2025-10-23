import React from "react";
import { motion } from "framer-motion";
import "./index.css"

const faqs = [
  {
    question: "What is a Bill of Materials (BOM)?",
    answer:
      "A Bill of Materials is a detailed list of raw materials, components, and subassemblies required to build a product. BOMify helps organize and track these items efficiently.",
  },
  {
    question: "Can I import existing BOM data?",
    answer:
      "Yes, you can easily import data from spreadsheets or export your BOM structure into CSV or Excel formats for compatibility with ERP systems.",
  },
  {
    question: "Does BOMify support multi-level BOMs?",
    answer:
      "Absolutely! BOMify supports hierarchical structures so you can manage assemblies and subassemblies with unlimited depth.",
  },
  {
    question: "Can my team collaborate in real-time?",
    answer:
      "Yes — invite your team members to work together, track changes, and manage approvals with version control built-in.",
  },
  {
    question: "Is there a free version?",
    answer:
      "Yes. Our Free plan allows small teams to explore core features with limited projects and components.",
  },
];

const FAQ = () => {
  return (
    <motion.section
      id="faq"
      className="py-24 sm:py-32 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-lg font-bold text-blue-600 text-center">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 text-center sm:text-4xl">
          Everything you need to know
        </p>

        <dl className="mt-16 space-y-8 font-inter">
          {faqs.map((faq, i) => (
            <div key={i}>
              <dt className="text-lg font-semibold text-gray-900">{faq.question}</dt>
              <dd className="mt-2 text-gray-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.section>
  );
};

export default FAQ;

