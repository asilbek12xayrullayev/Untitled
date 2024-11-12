import React, { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full py-4 text-left text-lg font-medium text-gray-800 hover:text-gray-600"
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="py-2 text-gray-600">{children}</div>}
    </div>
  );
};

const ITCourses = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6 mt-10">
      {/* Погружение в IT Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Погружение в IT</h2>
        <p className="text-gray-600 mb-4">
          Вы узнаете, какие есть языки программирования и профессии в сфере IT, подробно разберёте каждую строчку кода и на реальных примерах
          убедитесь, что стать успешным программистом могут не только математики или выпускники технических вузов.
        </p>
        <AccordionItem title="Первый шаг к программированию">Content for Первый шаг к программированию</AccordionItem>
        <AccordionItem title="От теории к практике">Content for От теории к практике</AccordionItem>
        <AccordionItem title="Профориентация">Content for Профориентация</AccordionItem>
      </section>

      {/* Курс с помощью в трудоустройстве на выбор Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Курс с помощью в трудоустройстве на выбор</h2>
        <p className="text-gray-600 mb-4">
          Возможность трудоустройства через 6 месяцев. Развиваетесь в направлении, которое прошло вам по результатам профориентации, или
          ориентируетесь на свои желания. Если после начала обучения вы почувствуете, что поспешили с выбором, — сможете поменять курс.
        </p>
        <AccordionItem title="Python-разработчик">Content for Python-разработчик</AccordionItem>
        <AccordionItem title="Frontend-разработчик с нуля до PRO">Content for Frontend-разработчик с нуля до PRO</AccordionItem>
        <AccordionItem title="Frontend-разработчик с нуля до PRO">Content for Frontend-разработчик с нуля до PRO</AccordionItem>
        <AccordionItem title="Java-разработчик">Content for Java-разработчик</AccordionItem>
      </section>
    </div>
  );
};

export default ITCourses;
