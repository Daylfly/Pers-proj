import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import { footerCopyright } from './footer';

interface IFooterProps {
    className?: string;
}

export const SectionUi: React.FC<IFooterProps> = ({ className }) => {
    return (
        <footer id={"Footer"} className={cn("w-full  text-white", className)}>
            <Container>
                <div className="pt-10 sm:pt-16 md:pt-24 lg:pt-32">

                        {/* Копирайт */}
                        <div className="pt-4 border-t border-white/10">
                            <p className="text-white/40 text-sm text-center">
                                {footerCopyright}
                            </p>
                        </div>
                    </div>

            </Container>
        </footer>
    );
};
