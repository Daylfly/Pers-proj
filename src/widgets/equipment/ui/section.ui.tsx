import { equipmentData } from "./equipment";
import Container from "@/components/shared/container";
import right from "../../../../public/statics/eqip/r.png";
import left from "../../../../public/statics/eqip/l.png";


const EquipmentCard = ({ title, model, description, features }: any) => (
    <div className="bg-white rounded-xl  p-4 border border-2">
        <h3 className="text-xl  text-gray-900 mb-2">{title}</h3>
        <p className="text-lg text-gray-600 mb-3">{model}</p>
        <p className="text-gray-600 mb-3">{description}</p>

    </div>
);

export const EquipmentSectionUI = () => {
    const { title, subtitle, images, diagnostics, laboratory, rehabilitation } = equipmentData;

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

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mb-16 lg:mb-20">
                        <div className="rounded-3xl overflow-hidden">
                            <img
                                src="/statics/eqip/l.png"
                                alt="МРТ аппарат"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-3xl overflow-hidden ">
                            <img
                                src="/statics/eqip/r.png"
                                alt="Операционная с С-дугой"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Карточки */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
                        {/* Диагностика */}
                        <div>
                            <h3 className="text-2xl lg:text-3xl  text-start mb-10 text-gray-800">
                                Диагностика
                            </h3>
                            <div className="space-y-8">
                                {diagnostics.map((item, i) => (
                                    <EquipmentCard key={i} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Лаборатория */}
                        <div>
                            <h3 className="text-2xl lg:text-3xl  text-start mb-10 text-gray-800">
                                Лаборатория
                            </h3>
                            <div className="space-y-8">
                                {laboratory.map((item, i) => (
                                    <EquipmentCard key={i} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Реабилитация */}
                        <div>
                            <h3 className="text-2xl lg:text-3xl  text-srart mb-10 text-gray-800">
                                Реабилитация
                            </h3>
                            <div className="space-y-8">
                                {rehabilitation.map((item, i) => (
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