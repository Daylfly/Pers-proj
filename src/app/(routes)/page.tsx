
import {HeroSection} from "@/widgets/hero";
import {FooterSection} from "@/widgets/footer";
import {ServiceSection} from "@/widgets/service";
import {DoctorsSection} from "@/widgets/doctors";
import {EquipmentSection} from "@/widgets/equipment";
import {PricesSection} from "@/widgets/price";
import {PromotionsSection} from "@/widgets/promotions";
import {ReviewsSection} from "@/widgets/reviews";
import ContactSection from "@/widgets/contact";
import {BlogSection} from "@/widgets/blog";
import {RecordSection} from "@/widgets/record";

export default function Home() {
  return (
      <div className="scroll-smooth">
          <HeroSection/>
          <ServiceSection/>
          <PricesSection/>
          <DoctorsSection/>
          <EquipmentSection/>
          <PromotionsSection/>
          <ReviewsSection/>
<ContactSection/>
          <BlogSection/>
          <RecordSection/>тзь
          <FooterSection/>
      </div>
  );
}