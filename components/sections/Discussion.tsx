import CustomButton from "../CustomButton";
import { GrSend } from "react-icons/gr";
import { FaBrain, FaHandshake, FaRegSmile } from "react-icons/fa";

export default function Discussion() {
  return (
    <div className="bg-[#0F0F2D] text-white font-sans py-20 relative">
      {/* Floating orange box */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center bg-[#FF6A3D] rounded-xl px-8 py-6 gap-6">
          {/* Text Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white">
              Let’s discuss your idea
            </h3>
            <span className="text-sm block mt-2 font-normal">
              Have a thought about your future website? Share it with me!
            </span>
          </div>

          {/* Button */}
          <div className="flex justify-center items-center ">
            <CustomButton
              text="Get in Touch"
              variant="success"
              icon={<GrSend />}
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-between items-center px-20 pb-10 gap-10 pt-32 bg-gray-700 ">
        <div className="flex items-center gap-4">
          <FaBrain className="text-4xl text-[#FF6A3D]" />
          <div>
            <p className="text-lg font-semibold">8+ Projects</p>
            <span className="text-sm text-gray-300">Completed Successfully</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaHandshake className="text-4xl text-[#FF6A3D]" />
          <div>
            <p className="text-lg font-semibold">6 Clients</p>
            <span className="text-sm text-gray-300">Satisfied Partnerships</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaRegSmile className="text-4xl text-[#FF6A3D]" />
          <div>
            <p className="text-lg font-semibold">97% Positive</p>
            <span className="text-sm text-gray-300">Client Feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
}
