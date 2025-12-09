"use client";

import Link from "next/link";
import { promotionsData } from "./promotions";
import Container from "@/components/shared/container";

export const PromotionsSectionUI = () => {
    const { title, subtitle, items } = promotionsData;

    return (
            <Container className=" ">
                <div className="max-w-6xl mx-auto">
                    {/* Заголовок */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                    </div>

                    {/* Карточки акций*/}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white  rounded-xl border-2  p-5 "
              >
                {/* Бейдж */}
                    <div className="flex items-start justify-between mb-6 w-full">
                        <div className="bg-blue-600/70 text-black text-4xl font-medium w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                            {item.discount}
                        </div>
                        <span className=" bg-gray-200 text-gray-700 px-2 py-1  rounded-md text-sm font-medium">
                    {item.badge}
                  </span>
                    </div>

                    {/* Заголовок и описание */}
                    <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-3 w-full">
                        {item.title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        {item.description}
                    </p>

                    {/* Футер */}
                    <div className="flex items-center justify-between">
                  <span
                      className={item.permanent ? "text-gray-500" : "text-gray-600 font-medium"}
                  >
                    {item.footer}
                  </span>
                        <Link
                            href="#price"
                            className="text-gray-600 font-semibold hover:underline cursor-pointer"
                        >
                            Подробнее →
                        </Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
</Container>
);
};