import React, { useId } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";

import inventoryImg from "./inventory.jpg";
import contactsImg from "./contact.jpg";
import profitLossImg from "./profitloss.jpg";

const features = [
  {
    name: "Reporting",
    summary: "Stay on top of things with always up-to-date reporting.",
    description:
      "Generate reports and insights in real time. Analyze costs, materials, and supplier data in one clean dashboard.",
    image: profitLossImg,
    icon: function ReportingIcon() {
      const id = useId();
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#3B82F6" />
              <stop offset={1} stopColor="#60A5FA" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
    },
  },
  {
    name: "Inventory",
    summary: "Never lose track of your materials again.",
    description:
      "Monitor components and assemblies accurately. Know what’s available and what’s missing, instantly.",
    image: inventoryImg,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#3B82F6"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#3B82F6"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#3B82F6"
          />
        </>
      );
    },
  },
  {
    name: "Contacts",
    summary: "Manage all your vendors and suppliers easily.",
    description:
      "Keep your supplier and purchase order data organized. Collaborate smoothly with your entire network.",
    image: contactsImg,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#3B82F6"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#3B82F6"
          />
        </>
      );
    },
  },
];

function Feature({ feature, isActive, ...props }) {
  return (
    <div
      className={clsx(
        "cursor-pointer p-4 rounded-lg transition",
        isActive ? "bg-blue-50" : "hover:bg-slate-50"
      )}
      {...props}
    >
      <div
        className={clsx(
          "w-9 h-9 rounded-lg flex items-center justify-center",
          isActive ? "bg-blue-600" : "bg-slate-300"
        )}
      >
        <svg aria-hidden="true" className="h-5 w-5" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          "mt-4 text-lg font-semibold",
          isActive ? "text-blue-600" : "text-slate-800"
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 text-slate-600">{feature.summary}</p>
    </div>
  );
}

export default function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      className="py-24 bg-white border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Simplify your business operations
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Manage your BOM, suppliers, and costs with clarity and control.
        </p>

        {/* Feature Tabs */}
        <TabGroup>
          {({ selectedIndex }) => (
            <>
              <TabList className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {features.map((feature, featureIndex) => (
                  <Tab key={feature.name} className="focus:outline-none">
                    <Feature
                      feature={feature}
                      isActive={featureIndex === selectedIndex}
                    />
                  </Tab>
                ))}
              </TabList>

              <TabPanels className="mt-12">
                {features.map((feature, featureIndex) => (
                  <TabPanel key={feature.name}>
                    <div className="text-center max-w-3xl mx-auto">
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {feature.summary}
                      </h3>
                      <p className="mt-2 text-slate-600">{feature.description}</p>
                    </div>
                    <div className="mt-8 flex justify-center">
                      <img
                        src={feature.image}
                        alt={feature.name}
                        className="w-full max-w-4xl rounded-xl shadow-md border border-slate-200"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </div>
    </section>
  );
}



