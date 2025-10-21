import {HeroSection} from "@/widgets/hero";
import {AboutSection} from "@/widgets/about";
import {ChooseSection} from "@/widgets/choose";
import {DiscountSection} from "@/widgets/discount";
import {FaqSection} from "@/widgets/faq";
import Footer from "@/widgets/footer";
import { footerColumns , footerCopyright } from "@/widgets/footer/ui/footer.data";

export default function Home() {
  return (
      <div className="scroll-smooth">
        <HeroSection/>
        <AboutSection/><ChooseSection/>
          <DiscountSection/>
          <FaqSection/>
          <Footer/>
      </div>
  );
}