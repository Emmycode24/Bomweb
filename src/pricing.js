import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals testing or managing small BOMs.",
    features: ["1 Project", "Up to 100 components", "Community support"],
  },
  {
    name: "Pro",
    price: "$19",
    description: "For growing teams needing collaboration and version control.",
    features: [
      "Unlimited Projects",
      "Team Collaboration",
      "Version Tracking",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced solutions for large-scale manufacturers.",
    features: [
      "Custom integrations",
      "Dedicated support",
      "Role-based access control",
    ],
  },
];

const Pricing = () => {
  return (
    <motion.section
      id="pricing"
      className="py-24 sm:py-32 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-lg font-semibold text-blue-600">Pricing</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Simple, scalable plans for every team
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 shadow-sm border ${
                plan.highlight ? "bg-blue-600 text-white" : "bg-gray-50"
              }`}
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm opacity-80">{plan.description}</p>
              <p className="mt-6 text-4xl font-bold">{plan.price}</p>
              <ul className="mt-6 space-y-2 text-sm text-left">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span>✅</span> {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-block w-full rounded-md py-2 font-semibold ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;

