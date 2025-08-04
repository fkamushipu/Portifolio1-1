import Image from "next/image";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0F0F2D] text-white px-10">
    

      <Feedback />
      <Footer />
    </div>
  );
}
