import React, { useState, useEffect } from "react";
import imge from "../assats/desktop.png.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Знакомитесь с платформой",
      description:
        "Платформа Skillbox — собственная разработка компании Skillbox, платформа постоянно улучшается. Вас ждут видео, практические задания и общение с кураторами. Доступ к материалам откроется сразу после покупки курса",
    },
    {
      title: "Регистрация",
      description:
        "После регистрации вы получите доступ к своей личной кабинету, где сможете отслеживать прогресс и управлять своими курсами.",
    },
    {
      title: "Практические задания",
      description:
        "В процессе обучения вас ждут практические задания для закрепления знаний, которые вы сможете выполнить и отправить на проверку.",
    },
    {
      title: "Общение с кураторами",
      description:
        "В любое время вы можете связаться с кураторами курса, чтобы получить поддержку и задать вопросы.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  // Automatic slide transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-2xl font-bold my-4">Как проходит обучение на платформе</h2>
      <div className="relative w-full max-w-lg p-4 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 ">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={imge} alt="Platform Preview" className="rounded-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <h3 className="text-lg font-semibold mb-2">{slides[currentIndex].title}</h3>
            <p className="text-gray-600">{slides[currentIndex].description}</p>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <button onClick={prevSlide} className="px-4 py-2 bg-gray-200 rounded-full">←</button>
            <button onClick={nextSlide} className="px-4 py-2 bg-gray-200 rounded-full">→</button>
          </div>
          <div className="flex justify-center mt-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`mx-1 h-2 w-2 rounded-full ${idx === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
