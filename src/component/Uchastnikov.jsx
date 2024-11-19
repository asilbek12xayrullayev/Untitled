import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Никита Пак",
      profession: "Курс «Профессия Python-разработчик»",
      review:
        "Нравится постоянная обратная связь от платформы и куратора. Большое количество практических работ, позволяющих моментально применять полученные знания.",
      rating: 5,
      link: "ВКонтакте",
    },
    {
      name: "Иван Медведев, г. Ивантеевка",
      profession: "Курс «Профессия Инженер по тестированию»",
      review:
        "Если какой-то материал тяжело даётся, есть вопрос по ДЗ, всегда есть преподаватели, которые помогут разобраться с информацией.",
      rating: 5,
      link: "ВКонтакте",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto px-6 py-10">
      <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-8">
        Отзывы участников
      </h2>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-xl p-8 space-y-4">
              <div className="flex items-center space-x-4">
                {/* Foydalanuvchi bosh harfi */}
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-semibold text-gray-700">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.profession}</p>
                </div>
              </div>
              <div className="text-yellow-400 text-lg">
                {"★".repeat(testimonial.rating)}{" "}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
              <p className="text-gray-700">{testimonial.review}</p>
              <a
                href="#"
                className="text-blue-600 underline font-medium text-sm"
              >
                {testimonial.link}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsCarousel;
