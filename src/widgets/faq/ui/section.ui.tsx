import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import Image from "next/image";
import Link from "next/link";
import Accordion from './Accordion';


interface IFaqProps {
    className?: string;
}

export const SectionUi: React.FC<IFaqProps> = ({ className }) => {
    return (
        <section className={cn(className, "")}>
            <Container>
                    <div className="">
                        <Accordion  />
                    </div>

            </Container>
        </section>
    );
};