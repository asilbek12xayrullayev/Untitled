import React from 'react';
import Image from '../assats/Picture ⏵ kespa.webp.png';

function EnglishYearPromo() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg  max-w-8xl mx-auto my-8">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image section */}
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <img 
            src={Image} 
            alt="Promo image" 
            className="w-full max-w-xs md:max-w-sm"
          />
        </div>

        {/* Text section */}
        <div className="w-full md:w-1/2 md:pl-6 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Год английского языка!</h2>
          <p className="mb-4 text-gray-700">
            Пройдите 3 модуля из первого курса и получите доступ к урокам английского языка от Skillbox на год.
          </p>
          <p className="text-gray-700 mb-4">
            Предложение действует для пользователей Skillbox, которые купили любую профессию с 1 августа 2021 года.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">Вас ждут:</h3>
          <ul className="text-gray-700 list-disc list-inside mb-4">
            <li>методика ускоренного запоминания слов и грамматики;</li>
            <li>персональная программа обучения, которая поможет заговорить по-английски с нуля.</li>
          </ul>
          
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Записаться
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnglishYearPromo;
