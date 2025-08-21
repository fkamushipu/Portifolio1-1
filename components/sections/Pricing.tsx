"use client";
import CustomButton from "../CustomButton";
import SectionHeader from "../SectionHeader";
import { GrSend } from "react-icons/gr";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "N$1999",
      features: [
        "1 Page Website",
        "Responsive Design",
        "Contact Form",
        "Basic SEO Setup",
      ],
    },
    {
      name: "Standard",
      price: "N$4999",
      features: [
        "Up to 5 Pages",
        "Responsive Design",
        "Custom UI/UX",
        "SEO Optimization",
        "Integration with APIs",
      ],
      highlight: true, // middle plan highlighted
    },
    {
      name: "Premium",
      price: "N$9999+",
      features: [
        "Unlimited Pages",
        "Advanced Custom UI/UX",
        "E-Commerce / Blog Setup",
        "SEO + Performance Optimization",
        "Admin Dashboard (CMS)",
        "Ongoing Support",
      ],
    },
  ];

  return (
    <div className="bg-[#0F0F2D] text-white font-sans py-20">
      <SectionHeader
        title="Pricing"
        highlight="Plans"
        subtitle="Choose a plan that fits your needs."
      />

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-xl shadow-md p-8 flex flex-col justify-between hover:scale-105 transition-transform duration-500
            ${
              plan.highlight
                ? "bg-[#FF6A3D] text-white scale-105 hover:scale-115 transition-transform duration-500 z-10" // middle plan bigger and highlighted
                : "bg-[#1A1A3C] text-white"
            }`}
          >
            {/* Plan Name Bubble */}
            <h4
              className={`absolute -top-5 left-1/2 transform -translate-x-1/2 px-8 py-4 rounded-md font-bold text-center
                ${plan.highlight ? "bg-white text-[#FF6A3D]" : "bg-[#FF6A3D] text-white"}`}
            >
              {plan.name}
            </h4>

            <div className="mt-8 flex flex-col items-center">
              {/* Price */}
              <p className={`text-center font-semibold mb-4 ${plan.highlight ? "text-xl" : "text-lg"}`}>
                {plan.price}
              </p>

              {/* Features */}
              <ul className="space-y-4 border-t border-white pt-4 pl-8 list-disc list-outside">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-100 text-xs leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <CustomButton
              text="Purchase Plan"
              variant={plan.highlight ? "success" : "secondary"}
              icon={<GrSend />}
              onClick={() => alert(`Purchasing ${plan.name} plan`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
