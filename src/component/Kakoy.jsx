import React from 'react';

const CourseIntroduction = () => {
  return (
    <div className="">
      <hr className='bg-black h-[3px] mt-20'/>
      <div className="py-20 px-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Неважно, какой у вас уровень. Главное — начать
            </h2>
          </div>

          {/* Right Section */}
          <div className="text-left">
            <p className="text-gray-600 leading-relaxed">
              Цель этого курса — помочь вам сдвинуться с «мёртвой» точки и сделать
              первый шаг к востребованной IT-профессии. Вы получите готовый план
              развития в IT, а мы поможем вам пройти этот путь до конца.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Попробуйте себя в 4 направлениях, определите, в чём сильны, и
              выберите профессию на основе своих способностей. А если почувствуете,
              что ошиблись, — сможете поменять курс.
            </p>
          </div>
        </div>
      </div>
      <hr className='bg-black h-[3px] mt-10'/>
    </div>
  );
};

export default CourseIntroduction;
