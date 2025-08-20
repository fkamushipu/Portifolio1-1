import Image from "next/image";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Blogs from "@/components/Myblogs";
import Quote from "@/components/Quote";
export default function Home() {
  return (
    <div className="bg-[#0F0F2D] text-white px-20">
      <Quote />
      <Blogs/>
      <Feedback />
      <Footer />

    </div>
  );
}
