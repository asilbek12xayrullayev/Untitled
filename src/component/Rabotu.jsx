import React from "react";
import image from "../assats/div.work-v4__animation.png";

const TextWithImage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white p-8 space-y-8 md:space-y-0 md:space-x-8">
      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">
          Поможем найти работу или вернем деньги
        </h2>
        <p className="text-gray-300 mb-6">
          Вас ждет индивидуальная поддержка HR-специалиста. Вместе вы составите резюме,
          подготовите портфолио и разработаете карьерный план, который поможет найти работу
          быстрее. Сможете выбрать привлекательные вакансии и получите приоритет перед другими
          соискателями.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
          Получить консультацию
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image} // Replace with your image URL
          alt="Supportive HR Specialist"
          className="w-full h-auto max-w-sm rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default TextWithImage;
