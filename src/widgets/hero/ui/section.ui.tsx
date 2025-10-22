import {cn} from "@/lib/utils";
import Container from "@/components/shared/container";
import bgImage from "../../../../public/statics/bg-hero.png"


interface Props {
    className?: string;
}

export const SectionUi: React.FC<Props> = ({ className }) => {
    return (
        <section       style={{ backgroundImage: `url(${bgImage.src})` }} className={cn(className," items-center flex bg-cover bg-center bg-no-repeat min-h-[959px]" )}>
            <Container className="">
<div className="">
    <div className="flex flex-col items-center text-center gap-6">
        <h2 className="font-sans text-5xl text-white ">
            Middy — Premium Cyber Lounge
        </h2>
        <p className="text-white-80 max-w-2xl">
            Middy is a premium cyber lounge, upscale restaurant, and stylish hookah bar—all in one space. Game, connect, and unwind, all in ultimate style.
        </p>
    </div>
</div>
<div className="scroll-smooth  flex gap-6 mt-6 items-center justify-center justify-self-center">
    <a href={"#About"} className="h-14 px-10 text-lg scroll-smooth text-white border-primary bg-transparent border-3 rounded-none inline-flex items-center justify-center font-medium transition-all hover:bg-primary/10">
        About Us
    </a>

    <a href={"#Faq"} className="h-14 px-10 text-lg border-primary text-white bg-transparent border-3 rounded-none inline-flex items-center justify-center font-medium transition-all hover:bg-primary/10">
        Faq
    </a>
</div>
            </Container>
        </section>
    );
};










































