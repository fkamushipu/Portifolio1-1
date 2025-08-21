import { IoEyeOutline } from "react-icons/io5";
import CustomButton from "../CustomButton";
import SectionHeader from "../SectionHeader";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="p-20">
      <SectionHeader
        title="My"
        highlight="Portfolio"
        subtitle="Take a look at the featured projects that I have completed"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Three images in a grid  */}
        <div className="relative">
          <Image
            src="/portfolio/project1.jpg"
            alt="Project 1"
            className="w-full h-48 object-cover rounded-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="relative">
          <Image
            src="/portfolio/project2.jpg"
            alt="Project 2"
            className="w-full h-48 object-cover rounded-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="relative">
          <Image
            src="/portfolio/project3.jpg"
            alt="Project 3"
            className="w-full h-48 object-cover rounded-lg"
            width={500}
            height={300}
          />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <CustomButton
          text="Show more"
          variant="primary"
          icon={<IoEyeOutline />}
        />
      </div>
    </div>
  );
}
