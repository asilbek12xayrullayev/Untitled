import Image from '../assats/div.ui-text-review-header__avatar-wrapper.png';
import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Никита Пак',
    course: 'Профессия Python-разработчик',
    rating: 5,
    feedback: `Нравится постоянная обратная связь от платформы и куратора. Большое количество практических работ, позволяющих моментально применять полученные знания.`,
    social: 'ВКонтакте',
    avatar: '/path/to/avatar1.png',
  },
  {
    id: 2,
    name: 'Иван Медведев, г. Ивантеевка',
    course: 'Профессия Инженер по тестированию',
    rating: 5,
    feedback: `Если какой-то материал тяжело даётся, есть вопросы к преподавателю, который поможет разобраться и ответить.`,
    social: 'ВКонтакте',
    avatar: '/path/to/avatar2.png',
  },
  // Add more testimonials as needed
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-5xl mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Отзывы участников</h2>
      
      <div className="flex items-center justify-center gap-4">
        <button onClick={handlePrev} className="text-2xl p-2">‹</button>
        
        <div className="flex flex-col md:flex-row gap-4 overflow-hidden">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-80">
            <div className="flex items-center gap-4">
              <img src={Image} alt={testimonials[current].name} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-semibold">{testimonials[current].name}</h3>
                <p className="text-sm text-gray-500">{testimonials[current].course}</p>
              </div>
            </div>
            <div className="mt-4 text-yellow-500">
              {'★'.repeat(testimonials[current].rating)}
            </div>
            <p className="mt-4 text-gray-700">{testimonials[current].feedback}</p>
            <div className="mt-4 text-blue-500">{testimonials[current].social}</div>
          </div>
        </div>

        <button onClick={handleNext} className="text-2xl p-2">›</button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer w-3 h-3 rounded-full ${current === index ? 'bg-black' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
