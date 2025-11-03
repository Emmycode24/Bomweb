import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import backgroundImg from "./background-features.jpg";
import inventoryImg from "./inventory.jpg";
import suppliersImg from "./suppliers.jpg";
import analyticsImg from "./analytics.jpg";
import reportingImg from "./reporting.jpg";

const features = [
  {
    title: "Inventory Management",
    description:
      "Track every part, component, and assembly in real time. Stay on top of stock levels and never face production delays again.",
    image: inventoryImg,
  },
  {
    title: "Vendor & Supplier Control",
    description:
      "Manage suppliers, purchase orders, and deliveries — all from one centralized, collaborative interface.",
    image: suppliersImg,
  },
  {
    title: "Cost Analysis",
    description:
      "Understand production costs across materials, labor, and overhead. Make smarter financial decisions effortlessly.",
    image: analyticsImg,
  },
  {
    title: "Smart Reporting",
    description:
      "Generate insightful BOM and production reports instantly — BOMify turns complex data into simple visuals.",
    image: reportingImg,
  },
];

export default function PrimaryFeatures() {
  const [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    const lgMediaQuery = window.matchMedia("(min-width: 1024px)");
    const onMediaQueryChange = ({ matches }) =>
      setTabOrientation(matches ? "vertical" : "horizontal");

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);
    return () =>
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
  }, []);

  return (
    <section
      id="features"
      aria-label="Product features"
      className="relative overflow-hidden bg-center bg-cover bg-no-repeat py-24 sm:py-32"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* darker overlay so white text is readable */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to manage your production
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-200">
            Connect your materials, suppliers, and costs in one intelligent
            system designed for accuracy and control.
          </p>
        </div>

        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-12"
          vertical={tabOrientation === "vertical"}
        >
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Tab.List className="flex flex-col gap-3">
              {features.map((feature, featureIndex) => (
                <Tab key={feature.title} as={React.Fragment}>
                  {({ selected }) => (
                    <div
                      className={clsx(
                        "rounded-lg p-4 cursor-pointer",
                        selected
                          ? "bg-blue-600 ring-1 ring-blue-400"
                          : "hover:bg-white/10"
                      )}
                    >
                      <h3
                        className={clsx(
                          "text-lg font-semibold",
                          selected ? "text-white" : "text-slate-200"
                        )}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={clsx(
                          "mt-2 text-sm",
                          selected ? "text-slate-100" : "text-slate-300"
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>

          <div className="lg:col-span-7">
            <Tab.Panels>
              {features.map((feature) => (
                <Tab.Panel key={feature.title} unmount={false}>
                  <div className="relative flex justify-center">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="rounded-xl w-full max-w-3xl shadow-md object-cover"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
}