"use client";
import { useState, useEffect, useRef } from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import Image from "next/image";

const quotes = [
  {
    text: "Outstanding I'm glad i have worked with her.",
    author: "John Doe",
    location: "Windhoek, Namibia",
    image: "/user/user1.jpg",
  },
  {
    text: "Exceptional service and support throughout the project.",
    author: "Jane Smith",
    location: "Cape Town, South Africa",
    image: "/user/user2.jpg",
  },
  {
    text: "A fantastic experience from start to finish.",
    author: "Aleta Johnson",
    location: "Nairobi, Kenya",
    image: "/user/user3.jpg",
  },
  {
    text: "A truly remarkable experience with outstanding results.",
    author: "Sarah Connor",
    location: "Los Angeles, USA",
    image: "/user/user4.jpg",
  },
  {
    text: "An unforgettable journey with exceptional outcomes.",
    author: "Michelle Brown",
    location: "Toronto, Canada",
    image: "/user/user5.jpg",
  },
];

// Clone first 3 cards for smooth infinite loop
const extendedQuotes = [...quotes, ...quotes.slice(0, 3)];

export default function Quote() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (index >= quotes.length) return; // avoid double trigger
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (index <= 0) {
      // jump to clones at the end instantly
      setIsTransitioning(false);
      setIndex(quotes.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setIndex((prev) => prev - 1);
        });
      });
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  // Reset instantly when reaching clones
  useEffect(() => {
    if (index === quotes.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 500); // match transition duration
      return () => clearTimeout(timeout);
    }
    if (index === 0) {
      // re-enable transition
      const id = requestAnimationFrame(() => setIsTransitioning(true));
      return () => cancelAnimationFrame(id);
    }
  }, [index]);

  return (
    <div className="bg-[#0F0F2D] text-white font-sans py-20">
      <h3 className="uppercase flex justify-center items-center text-md tracking-wider">
        CLIENTS <span className="text-[#FF6A3D] px-2"> QUOTE</span>
      </h3>

      {/* Carousel */}
      <div className="relative overflow-hidden max-w-6xl mx-auto mt-10">
        <div
          ref={trackRef}
          className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${index * (100 / 3)}%)`,
          }}
        >
          {extendedQuotes.map((q, i) => (
            <div
              key={i}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.3333%] px-4"
            >
              <div className="bg-[#1F1F3D] p-6 rounded-xl shadow-lg h-full flex flex-col justify-between">
                <p className="text-gray-300 text-center">"{q.text}"</p>
                <div className="pt-6 text-center">
                  <p className="text-sm">- {q.author}</p>
                  <p className="text-xs text-gray-400">{q.location}</p>
                </div>
                <div className="flex justify-center items-center mt-6">
                  <div className="border-2 p-1 border-[#FF6A3D] rounded-full">
                    <Image
                      src={q.image}
                      alt={q.author}
                      className="w-16 h-16 object-cover rounded-full"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#FF6A3D] p-2 w-10 h-10 flex justify-center items-center rounded-full text-white hover:bg-black/70"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF6A3D] p-2 w-10 h-10 flex justify-center items-center rounded-full text-white hover:bg-black/70"
        >
          ›
        </button>
      </div>

      {/* CTA */}
      <div className="flex justify-center items-center pt-12">
        <button
          type="button"
          className="bg-[#FF6A3D] text-white py-2 px-6 rounded-full text-md uppercase flex items-center justify-center gap-2 shadow-md hover:scale-105 transition"
        >
          <MdOutlineWaterDrop />
          Drop your quote
        </button>
      </div>
    </div>
  );
}
