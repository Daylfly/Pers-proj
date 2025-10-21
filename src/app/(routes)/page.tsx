import {HeroSection} from "@/widgets/hero";
import {AboutSection} from "@/widgets/about";
import {ChooseSection} from "@/widgets/choose";
import {DiscountSection} from "@/widgets/discount";
import {FaqSection} from "@/widgets/faq";
import {FooterSection} from "@/widgets/footer";

export default function Home() {
  return (
      <div className="scroll-smooth">
        <HeroSection/>
        <AboutSection/><ChooseSection/>
          <DiscountSection/>
          <FaqSection/>
          <FooterSection/>
      </div>
  );
}