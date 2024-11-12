import React, { useState } from 'react';
import image1 from "../assats/List.png";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            id: 1,
            title: "Я ничего не понимаю в IT, это не про меня",
            description:
                "Курс начинается с самых основ. Спикер чётко, просто и понятно расскажет, какие направления есть в IT и кто чем занимается в сфере...",
            imageUrl: "/path/to/image1.jpg",
        },
        {
            id: 2,
            title: "Я ничего не понимаю в IT, это не про меня",
            description:
                "Курс начинается с самых основ. Спикер чётко, просто и понятно расскажет, какие направления есть в IT и кто чем занимается в сфере...",
            imageUrl: "/path/to/image2.jpg",
        },
        {
            id: 3,
            title: "Я ничего не понимаю в IT, это не про меня",
            description:
                "Курс начинается с самых основ. Спикер чётко, просто и понятно расскажет, какие направления есть в IT и кто чем занимается в сфере...",
            imageUrl: "/path/to/image3.jpg",
        },
        {
            id: 4,
            title: "Я ничего не понимаю в IT, это не про меня",
            description:
                "Курс начинается с самых основ. Спикер чётко, просто и понятно расскажет, какие направления есть в IT и кто чем занимается в сфере...",
            imageUrl: "/path/to/image4.jpg",
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className='text-3xl font-bold py-3'>А что мешает вам войти в IT?</h1>
            <div className="relative">
                <div className="flex items-center justify-between">
                    {/* Image Section */}
                    <div className="flex-1 mr-4">
                        <img className='' src={image1} alt="" />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-2">
                            {slides[currentIndex].title}
                        </h2>
                        <p className="text-gray-700 mb-4">{slides[currentIndex].description}</p>
                        <div className="flex space-x-4">
                            <button
                                onClick={prevSlide}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Назад
                            </button>
                            <button
                                onClick={nextSlide}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Вперёд
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-800" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
