
import {HeroSection} from "@/widgets/hero";
import {FooterSection} from "@/widgets/footer";
import {ServiceSection} from "@/widgets/service";
import {DoctorsSection} from "@/widgets/doctors";
import {EquipmentSection} from "@/widgets/equipment";
import {PricesSection} from "@/widgets/price";
import {PromotionsSection} from "@/widgets/promotions";

export default function Home() {
  return (
      <div className="scroll-smooth">
          <HeroSection/>
          <ServiceSection/>
          <DoctorsSection/>
          <EquipmentSection/>
          <PricesSection/>
          <PromotionsSection/>
          <FooterSection/>
      </div>
  );
}