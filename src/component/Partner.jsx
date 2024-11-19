import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CareerCenterCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // O'rta ekranlarda
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Kichik ekranlarda
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {
      title: "Резюме",
      description: "Презентуем вас работодателям с выгодной стороны",
      bgColor: "bg-yellow-200",
    },
    {
      title: "Индивидуальный карьерный план",
      description: "Расскажем, как начать и развивать карьеру",
      bgColor: "bg-blue-100",
    },
    {
      title: "Партнерские вакансии",
      description: "Порекомендуем вашу кандидатуру партнёрам",
      bgColor: "bg-green-200",
    },
    {
      title: "Оформление портфолио",
      description: "Поможем эффективно представить ваши проекты",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <div className="w-full bg-gray-900 py-10 px-4">
      <h2 className="text-center text-white text-2xl font-bold mb-6">
        Чем вам поможет Наш партнер Центр развития карьеры:
      </h2>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-4">
              <div
                className={`h-60 rounded-lg shadow-lg flex flex-col justify-center p-6 ${card.bgColor}`}
              >
                <div className="w-5 h-5 bg-black rounded-full mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CareerCenterCarousel;
