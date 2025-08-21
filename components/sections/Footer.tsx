import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-20 pt-20  bg-[#0F0F2D] text-white">
      <div className="text-[#FF6A3D] font-bold flex justify-center items-center text-4xl py-4">
        Jane Doe
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center items-center py-4">
        <a href="#" className="mx-2 rounded-full bg-gray-500 p-4">
          <FaFacebookF />
        </a>
        <a href="#" className="mx-2 rounded-full bg-gray-500 p-4">
          <FaTwitter />
        </a>
        <a href="#" className="mx-2 rounded-full bg-gray-500 p-4">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Copyright Information */}
      <span className="flex justify-center items-center py-4">
        <div className="flex">
          © <span className="text-[#FF6A3D] px-2"> 2025 </span> Tech Portfolio{" "}
          <div className="w-px h-4 bg-gray-300 mx-4" /> All rights reserved by{" "}
          <span className="text-[#FF6A3D] px-2"> Feni Kamushipu.</span>
        </div>
      </span>
    </footer>
  );
}
