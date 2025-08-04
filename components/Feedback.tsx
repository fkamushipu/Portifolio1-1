import Image from "next/image";
import { FaPhoneVolume, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Feedback() {
  return (
    <div className="bg-[#0F0F2D] text-white font-sans pt-20  ">
      <div className=" py-10">
        <h3 className="uppercase flex justify-center items-center text-md tracking-wider">
          Contact <span className="text-[#FF6A3D] px-2">Me</span>
        </h3>
        <div className="flex justify-center items-center text-2xl py-4 ">
          <p className="w-96 tracking-tight font-semibold text-center">
            I'm always open to discussing new projects and ideas.
          </p>
        </div>

        {/* Contact details */}
        <div className="flex justify-between items-center gap-4 py-4">
          {/* Phone */}
          <div className="w-1/3 text-center">
            <a
              href="#"
              className="flex justify-center items-center mx-auto rounded-full bg-gray-500 w-10 h-10"
            >
              <FaPhoneVolume className="text-white text-sm" />
            </a>
            <span className="font-semibold text-md block mt-2 py-2">Phone</span>
            <span className="text-sm block">(+ 264) 81 8220 330</span>
            <span className="text-sm block">(+ 264) 81 333 222 1</span>
          </div>

          {/* Email */}
          <div className="w-1/3 text-center">
            <a
              href="#"
              className="flex justify-center items-center mx-auto rounded-full bg-gray-500 w-10 h-10"
            >
              <FaEnvelope className="text-white text-sm" />
            </a>
            <span className="font-semibold text-md block mt-2 py-2">Email</span>
            <span className="text-sm block" >fkamushipu@example.com</span>
            <span className="text-sm block">secondarymail@example.com</span>
          </div>

          {/* Location */}
          <div className="w-1/3 text-center">
            <a
              href="#"
              className="flex justify-center items-center mx-auto rounded-full bg-gray-500 w-10 h-10"
            >
              <FaMapMarkerAlt className="text-white text-sm" />
            </a>
            <span className="font-semibold text-md block mt-2 py-2">Location</span>
            <span className="text-sm">Windhoek, Namibia</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-10">
        {/* Send a message Form */}
        <form className="flex flex-col">
          <div className="flex justify-between gap-4">
            <input
              placeholder="Name"
              type="text"
              id="name"
              className=" pl-4 flex items-center mb-4 p-2 bg-[#1F1F3D] border border-gray-700 rounded-full"
            />
            <input
              placeholder="Email"
              type="email"
              id="email"
              className=" pl-4 flex items-center mb-4 p-2 bg-[#1F1F3D] border border-gray-700 rounded-full"
            />
          </div>
          <input
            placeholder="Subject"
            type="text"
            id="subject"
            className=" pl-4 flex items-center mb-4 p-2 bg-[#1F1F3D] border border-gray-700 rounded-full"
          />
          <textarea
            placeholder="Message"
            id="message"
            className=" pl-4 flex items-center mb-4 p-2 bg-[#1F1F3D] border border-gray-700 rounded-xl"
            rows={5}
          ></textarea>

          <button
            type="submit"
            className="bg-[#FF6A3D] text-white py-2 px-4  rounded-xl text-uppercase w-2/5"
          >
            Send Message
          </button>
        </form>

        {/* Picture */}
        <div className="">
          <Image
            src="/postmail.jpg"
            alt="Feedback"
            className=""
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
