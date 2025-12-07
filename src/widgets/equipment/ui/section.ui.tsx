import { equipmentData } from "./equipment";
import Container from "@/components/shared/container";
import Image from "next/image";
import equipmentLeft from "../../../../public/statics/eqip/l.png";
import equipmentRight from "../../../../public/statics/eqip/r.png";

// Интерфейс с readonly features — теперь типы совпадают на 100%
interface EquipmentItem {
    title: string;
    model: string;
    description: string;
}

interface EquipmentCardProps {
    title: string;
    model: string;
    description: string;
}

const EquipmentCard = ({ title, model, description }: EquipmentCardProps) => (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-lg text-gray-600 mb-3">{model}</p>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        
    </div>
);

export const EquipmentSectionUI = () => {
    const { title, subtitle, diagnostics, laboratory, rehabilitation } = equipmentData;

    return (
        <Container>
            <section className="py-16 lg:py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Заголовок */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-950 mb-4">
                            {title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                    </div>

                    {/* Большое фото слева/справа */}
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mb-16 lg:mb-20">
                        <div className="rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src={equipmentLeft}
                                alt="МРТ аппарат"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src={equipmentRight}
                                alt="Операционная с С-дугой"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Карточки оборудования */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                        {/* Диагностика */}
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-semibold text-start mb-10 text-gray-800">
                                Диагностика
                            </h3>
                            <div className="space-y-8">
                                {diagnostics.map((item: EquipmentItem, i: number) => (
                                    <EquipmentCard key={i} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Лаборатория */}
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-semibold text-start mb-10 text-gray-800">
                                Лаборатория
                            </h3>
                            <div className="space-y-8">
                                {laboratory.map((item: EquipmentItem, i: number) => (
                                    <EquipmentCard key={i} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Реабилитация */}
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-semibold text-start mb-10 text-gray-800">
                                Реабилитация
                            </h3>
                            <div className="space-y-8">
                                {rehabilitation.map((item: EquipmentItem, i: number) => (
                                    <EquipmentCard key={i} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};