
import Feedback from "@/components/sections/Feedback";
import Footer from "@/components/sections/Footer";
import Blogs from "@/components/sections/Myblogs";
import Quote from "@/components/sections/Quote";
import FAQs from "@/components/sections/FAQs";
import Pricing from "@/components/sections/Pricing";
import Skills from "@/components/sections/Skills";
import Discussion from "@/components/sections/Discussion";
export default function Home() {
  return (
    <div className="bg-[#0F0F2D] text-white ">
      
      <Skills />
      <Discussion />
      <Pricing />
      <FAQs />
      <Quote />
      <Blogs />
      <Feedback />
      <Footer />

    </div>
  );
}
