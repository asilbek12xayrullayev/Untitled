import React from 'react';
import Slider from 'react-slick';
import image1 from '../assats/Picture ⏵ c327a71b570e945f4b1c2ec8aca6c559bc81b0d6.webp.png'; // Replace with actual paths
import image2 from '../assats/Picture ⏵ 3e574a760e482658dd9e52c39903f369233e0297.webp.png';
import image3 from '../assats/Picture ⏵ ae9a2170705a4b6510d8d02a43c811ce23d7191c.webp.png';

const testimonials = [
  {
    name: "Юлия Ильяева",
    title: "Директор по развитию Team for Dream",
    text: "Кандидаты из Skillbox всегда отличаются своей высокой мотивацией, потому что с радостью приглашаем их на стажировки и постоянную работу. Уже несколько раз мы принимали на работу выпускников частного курса «Профессия Event-менеджер».",
    img: image1
  },
  {
    name: "Максим Зубцов",
    title: "Директор по маркетингу в Sneaker",
    text: "Skillbox подбирает кандидатов с горящими глазами и желанием развиваться. Например, руководителя нашего SEO-отдела найти было непросто, и сегодня мы благодарим Центр карьеры.",
    img: image2
  },
  {
    name: "Роман Горбачёв",
    title: "Основатель агентства «ГлобалМедиа»",
    text: "Когда мы пригласили студентов из Skillbox, то поняли: это отличные люди с потенциалом, которым требуется лишь направление. Мы работаем исключительно с выпускниками и ими очень довольны.",
    img: image3
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black py-12 px-6">
      <h2 className="text-2xl font-bold text-white mb-6">Отзывы работодателей</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
