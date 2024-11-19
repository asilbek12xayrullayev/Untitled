import React from 'react';

const EmploymentAssurance = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-center items-start lg:items-center gap-[5%] p-6 lg:p-12 bg-black text-white">
      {/* Left Side */}
      <div className="flex flex-col items-center lg:items-start bg-white p-8 rounded-lg shadow-lg">
        <p className="text-4xl lg:text-5xl text-black font-bold">9000+</p>
        <p className="text-center lg:text-left mt-2 text-black">пользователей Skillbox достигли карьерных изменений</p>
        
        <div className="mt-6">
          <p className="text-2xl text-black font-bold">500+</p>
          <p className="text-black">пользователей меняют карьеру ежедневно</p>
        </div>

        <div className="mt-6">
          <p className="text-2xl text-black font-bold">600+</p>
          <p className="text-black">новых вакансий ежедневно публикуются работодателями на нашей площадке</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="max-w-5xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Почему мы уверены в вашем трудоустройстве?</h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Определяем потребности рынка</h3>
          <p className="text-gray-300 mt-2">
            Мы тщательно анализируем профессии, в которых помогаем с трудоустройством: определяем специализации, оцениваем знания,
            потребность в кандидате и доступность профессии для новичков.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Даём качественные знания</h3>
          <p className="text-gray-300 mt-2">
            Помогаем получить навыки, которые необходимы здесь и сейчас. Все ситуации — практическое обучение, исходя из знаний потребности на рынке.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Поддерживаем на старте карьеры</h3>
          <p className="text-gray-300 mt-2">
            Наши эксперты помогут пройти все этапы на пути к вашей карьере. Мы поможем избежать ошибок и спланировать профессиональный путь.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmploymentAssurance;
