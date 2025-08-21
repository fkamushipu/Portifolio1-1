import Image from "next/image";
import { LiaComments } from "react-icons/lia";
import { FiShare2 } from "react-icons/fi";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import SectionHeader from "@/components/SectionHeader"


export default function MyBlogs() {
  return (
    <div className="bg-[#0F0F2D] text-white font-sans py-20">
       <SectionHeader 
        title="My" 
        highlight="Blogs" 
        subtitle="Here are some of my latest blog posts." 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {/* First Blog Post Card */}
        <div className="bg-[#1F1F3D] rounded-lg shadow-md flex flex-col">
          <div className="relative">
            <Image
              src="/blog/blog1.jpg"
              alt="Blog Post 1"
              className="w-full h-48 object-cover rounded-t-lg"
              width={500}
              height={300}
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#FF6A3D] text-white py-1 px-3 rounded-md text-xs">
                Next JS
              </span>
            </div>
          </div>
          <div className="px-4 py-6 flex flex-col flex-grow">
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <HiOutlineCalendarDateRange />
                March 10, 2025
              </span>
              <span className="flex items-center gap-2">
                <FiShare2 /> 8 Shares
              </span>
            </div>
            <h4 className="text-lg font-semibold pt-6 text-justify flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor varius nibh eget ...
            </h4>
            <div className="flex justify-between items-center pt-6">
              <button
                type="button"
                className="bg-[#FF6A3D] text-white py-2 px-4 rounded-full text-xs uppercase w-2/5"
              >
                Read more
              </button>
              <div className="text-sm flex items-center gap-2">
                <LiaComments />
                <span className="italic text-gray-400">5 Comments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Blog Post Card */}
        <div className="bg-[#1F1F3D] rounded-lg shadow-md flex flex-col">
          <div className="relative">
            <Image
              src="/blog/blog2.jpg"
              alt="Blog Post 2"
              className="w-full h-48 object-cover rounded-t-lg"
              width={500}
              height={300}
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#FF6A3D] text-white py-1 px-3 rounded-md text-xs">
                AI
              </span>
            </div>
          </div>
          <div className="px-4 py-6 flex flex-col flex-grow">
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <HiOutlineCalendarDateRange />
                May 4, 2021
              </span>
              <span className="flex items-center gap-2">
                <FiShare2 /> 20 Shares
              </span>
            </div>
            <h4 className="text-lg font-semibold pt-6 text-justify flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              pharetra mauris ...
            </h4>
            <div className="flex justify-between items-center pt-6">
              <button
                type="button"
                className="bg-[#FF6A3D] text-white py-2 px-4 rounded-full text-xs uppercase w-2/5"
              >
                Read more
              </button>
              <div className="text-sm flex items-center gap-2">
                <LiaComments />
                <span className="italic text-gray-400">26 Comments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Third Column with 3 Mini Blog Posts */}
        <div className="flex flex-col justify-between gap-4">
          {/* Blog Post 3.1 */}
          <div className="flex gap-4 bg-[#1F1F3D] rounded-lg p-3">
            <Image
              src="/blog/blog3.jpg"
              alt="Blog Post 3"
              className="w-24 h-24 object-cover rounded-md"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-between">
              <h4 className="text-sm font-semibold text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </h4>
              <span className="text-xs text-gray-400 flex items-center gap-2">
                <HiOutlineCalendarDateRange />
                March 10, 2025
              </span>
            </div>
          </div>

          {/* Blog Post 3.2 */}
          <div className="flex gap-4 bg-[#1F1F3D] rounded-lg p-3">
            <Image
              src="/blog/blog4.jpg"
              alt="Blog Post 4"
              className="w-24 h-24 object-cover rounded-md"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-between">
              <h4 className="text-sm font-semibold text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </h4>
              <span className="text-xs text-gray-400 flex items-center gap-2">
                <HiOutlineCalendarDateRange />
                March 10, 2025
              </span>
            </div>
          </div>

          {/* Blog Post 3.3 */}
          <div className="flex gap-4 bg-[#1F1F3D] rounded-lg p-3">
            <Image
              src="/blog/blog5.jpg"
              alt="Blog Post 5"
              className="w-24 h-24 object-cover rounded-md"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-between">
              <h4 className="text-sm font-semibold text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </h4>
              <span className="text-xs text-gray-400 flex items-center gap-2">
                <HiOutlineCalendarDateRange />
                March 10, 2025
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-16">
        <button
          type="button"
          className="bg-[#FF6A3D] text-white py-2 px-4 rounded-full text-md uppercase flex items-center justify-center gap-2"
        >
          <IoEyeOutline />
          Show more
        </button>
      </div>
    </div>
  );
}
