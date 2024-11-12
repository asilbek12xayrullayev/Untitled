import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const features = [
  "Поймите, что вам по силам научиться программировать",
  "Получите пошаговый план развития в новой сфере",
  "Разберётесь в разнообразии IT-направлений на практике и кейсах",
  "На практике освоите одну из 4 IT-профессий",
  "Поймите, какая IT-профессия вам действительно подходит",
  "Гарантированно найдёте работу после курса или прямо во время его прохождения",
];

const FeatureList = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">На курсе вы</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-6 h-6 flex-shrink-0">
              <FaCheckCircle className="text-black w-full h-full" />
            </div>
            <p className="text-gray-700">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
