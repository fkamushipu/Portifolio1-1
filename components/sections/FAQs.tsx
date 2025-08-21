"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "../SectionHeader";

export default function FAQs() {

    // The questions and answers 
    const faqData = [
    {
      question: "What technologies do you use?",
      answer:
        "I work with Next.js, React, Tailwind CSS, and Prisma to build modern web applications.",
    },
    {
      question: "Can I collaborate with you?",
      answer:
        "Yes! I'm always open to collaborating on exciting projects. Feel free to reach out via my contact page.",
    },
    {
      question: "Do you offer freelance services?",
      answer:
        "Yes, I provide freelance web development services. You can contact me for more details.",
    },
    {
      question: "Where are you based?",
      answer:
        "I’m based in Namibia but I work remotely with clients worldwide.",
    },
  ];

  return (
    <div className="bg-[#0F0F2D] text-white font-sans pt-20">
       <SectionHeader 
        title="FAQ" 
        highlight="QUESTION" 
        subtitle="Here are some frequently asked questions." 
      />

       {/* FAQ Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

// This is called accordion-like component

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className=" border-x-1 rounded-xs border-[#FF6A3D] shadow-md p-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left  text-md"
      >
        {question}
        {open ? <ChevronUp size={20} color="#FF6A3D" /> : <ChevronDown size={20} color="#FF6A3D" />}
      </button>
      {open && (    
        <p className="mt-3 pt-6 border-t-1 border-gray-700 text-gray-300 text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}