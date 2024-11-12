import React, { useState } from "react";

const ResponsiveCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            title: "Резюме",
            description: "Представим вас работодателям с выгодной стороны",
            bgColor: "bg-yellow-300",
        },
        {
            title: "Индивидуальный карьерный план",
            description: "Расскажем, как начать и развивать карьеру",
            bgColor: "bg-blue-200",
        },
        {
            title: "Партнерские вакансии",
            description: "Порекомендуем вашу кандидатуру партнёрам",
            bgColor: "bg-green-300",
        },
        {
            title: "Оформление портфолио",
            description: "Поможем эффективно представить ваши проекты",
            bgColor: "bg-red-300",
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="bg-black min-h-[500px] flex flex-col items-center justify-center py-8 px-4">
            {/* Sarlavha */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
                Чем вам поможет Наш партнер Центр развития карьеры:
            </h2>

            {/* Karusel */}
            <div className="relative max-w-2xl w-full">
                {/* Kartalar */}
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`min-w-full h-[90%] flex-shrink-0 p-6 rounded-lg shadow-lg ${slide.bgColor}`}
                        >
                            {/* Karta ichidagi elementlar */}
                            <div className="flex flex-col items-start text-left">
                                {/* Dumaloq belgi */}
                                <div className="w-8 h-8 rounded-full bg-black mb-4"></div>
                                {/* Sarlavha va tavsif */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {slide.title}
                                </h3>
                                <p className="text-sm text-gray-700">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tugmalar */}
                <button
                    className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800"
                    onClick={prevSlide}
                >
                    {"<"}
                </button>
                <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800"
                    onClick={nextSlide}
                >
                    {">"}
                </button>
            </div>

            {/* Indikatorlar */}
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-300" : "bg-gray-500"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ResponsiveCarousel;
