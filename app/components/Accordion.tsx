"use client";

import { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  items: string[];
}

const accordionData: AccordionItem[] = [
  {
    id: "01",
    title: "Mobile & Web Development",
    items: [
      "Scalable and Stable Web & Mobile Architecture",
      "API & CMS solutions that power dynamic content and integrations",
    ],
  },
  {
    id: "02",
    title: "Strategy",
    items: [
      "Product Consulting",
      "Idea Validation",
      "Product Discovery",
      "Business Strategy",
    ],
  },
  {
    id: "03",
    title: "Product design",
    items: [
      "User Research",
      "UX Design",
      "UI Design",
      "Prototyping and Testing",
      "Design Systems",
      "User Flows & Wireframing",
    ],
  },
  {
    id: "04",
    title: "Visual design",
    items: ["Brand Identity Design", "Illustration", "Motion design"],
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {accordionData.map((item, index) => (
        <div key={item.id} className="border-b border-gray-300 last:border-b-0">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between py-6 text-left group hover:opacity-70 transition-opacity"
          >
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-gray-800">
                {item.id}
              </span>
              <h3 className="text-xl md:text-2xl font-normal text-gray-900 group-hover:underline">
                {item.title}
              </h3>
            </div>
            <div
              className={`text-4xl font-light transition-transform duration-300 text-gray-900 ${
                openIndex === index ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-6 pl-12 space-y-3">
              {item.items.map((subItem, subIndex) => (
                <p
                  key={subIndex}
                  className="text-base text-gray-900 leading-relaxed"
                >
                  {subItem}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
