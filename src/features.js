import React, { useId, useState } from "react";
import clsx from "clsx";
import inventoryImg from "./invent.jpg";
import contactsImg from "./contact.jpg";
import profitLossImg from "./profitloss.jpg";

const features = [
  {
    name: "Reporting",
    summary: "Stay on top of things with up-to-date reports.",
    description:
      "Track all your BOM data effortlessly. View progress, performance, and costs in real-time with powerful analytics.",
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
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#3B82F6" />
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
      "Monitor all components and materials with accuracy. Ensure every part is accounted for — from raw input to final assembly.",
    image: inventoryImg,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      );
    },
  },
  {
    name: "Contacts",
    summary: "Manage all your vendors and suppliers easily.",
    description:
      "Centralize your supplier network, purchase orders, and communications in one place for smooth collaboration.",
    image: contactsImg,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      );
    },
  },
];

const FeatureCard = ({ feature, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={clsx(
      "rounded-2xl p-6 text-left cursor-pointer transition-all duration-300",
      isActive
        ? "bg-blue-50 border border-blue-200 shadow-md"
        : "hover:bg-gray-50 border border-gray-100"
    )}
  >
    <div
      className={clsx(
        "w-10 h-10 rounded-xl flex items-center justify-center",
        isActive ? "bg-blue-600" : "bg-gray-400"
      )}
    >
      <svg aria-hidden="true" className="h-5 w-5" fill="none">
        <feature.icon />
      </svg>
    </div>
    <h3
      className={clsx(
        "mt-4 text-lg font-semibold tracking-tight",
        isActive ? "text-blue-600" : "text-slate-800"
      )}
    >
      {feature.name}
    </h3>
    <p className="mt-2 text-slate-700 text-[15px]">{feature.summary}</p>
    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
      {feature.description}
    </p>
  </div>
);

const Features = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section
      id="features"
      className="py-24 bg-white scroll-mt-20 border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-slate-900">
          Simplify your business workflows.
        </h2>
        <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
          Powerful tools to help you manage your BOM, teams, and suppliers —
          all in one simple platform.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 items-center">
        <div className="flex flex-col gap-6">
          {features.map((f, index) => (
            <FeatureCard
              key={f.name}
              feature={f}
              isActive={index === selected}
              onClick={() => setSelected(index)}
            />
          ))}
        </div>

        <div className="flex justify-center items-center">
          <img
            src={features[selected].image}
            alt={features[selected].name}
            className="rounded-2xl shadow-xl w-full max-w-md border border-slate-200 transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
