import Cases from "@/components/Cases";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Marquee />
      <Services />
      <CTA />
      <Cases />
    </div>
  );
};

export default HomePage;
