import React from "react";
import ExampleImage from "../assats/Picture ⏵ 3cbc29413e244e56f03f6badd073ca67bcdecb0f.webp.png"; // Rasm manzilini bu yerda kiriting

const CourseIncludes = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-9xl px-[10%] mx-auto flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
      <img
        src={ExampleImage}
        alt="Course Icon"
        className="w-64 h-64 md:w-80 md:h-80" // Yana kattaroq rasm uchun o'lchamlar
      />
      <div>
        <h2 className="text-2xl font-semibold mb-4">В стоимость курса входит:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Бесконечный доступ к обновлениям курса — ваши знания никогда не устареют.</li>
          <li>Тест на профориентацию для самоопределения в IT.</li>
          <li>Возможность выбрать и освоить одну из востребованных IT-профессий.</li>
          <li>Право поменять направление в начале обучения.</li>
          <li>Доступ к комьюнити — познакомитесь с ребятами, которые выбрали такую же профессию, как и вы, будете помогать друг другу и обмениваться опытом.</li>
          <li>Поддержка от кураторов.</li>
          <li>Практика на реальных проектах и групповое стажировка.</li>
          <li>Проверка домашних практических работ и поддержка от проверяющих экспертов.</li>
          <li>Помощь в трудоустройстве от Центра карьеры.</li>
        </ul>
      </div>
    </div>
  );
};

export default CourseIncludes;
