import React from "react";

const CourseContent = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 sm:p-10">
      {/* Container */}
      <div className="max-w-9xl mx-auto bg-white  rounded-md overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center p-6 border-b">
          {/* Left Side: Title */}
          <div>
            <h1 className="text-3xl font-bold">Содержание курсов</h1>
            <p className="text-gray-600 mt-2">
              Вас ждут теоретические видео, практические работы и итоговые проекты на основе реальных кейсов.
            </p>
          </div>

          {/* Right Side: Metrics */}
          <div className="flex gap-4 mt-4 lg:mt-0 items-center">
            <div className="flex items-center justify-center bg-black text-white rounded-full w-14 h-14">
              <span className="text-lg font-bold">12</span>
            </div>
            <span className="text-sm">oйлик o'qish</span>
            <div className="flex items-center justify-center bg-black text-white rounded-full w-14 h-14">
              <span className="text-lg font-bold">82</span>
            </div>
            <span className="text-sm">практических задач</span>
          </div>
        </div>

        {/* Immersion in IT Section */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold mb-4">Погружение в IT</h2>
          <p className="text-gray-700 mb-6">
            Вы узнаете, какие есть языки программирования и профессии в сфере IT, подробно разберёте каждую строку кода
            и на реальных примерах убедитесь, что стать успешным программистом могут не только математики или выпускники
            технических вузов.
          </p>
          <div className="space-y-4">
            <details className="group">
              <summary className="cursor-pointer text-gray-800 font-medium flex justify-between items-center">
                Первый шаг к программированию
                <span className="text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
            </details>
            <details className="group">
              <summary className="cursor-pointer text-gray-800 font-medium flex justify-between items-center">
                От теории к практике
                <span className="text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
            </details>
            <details className="group">
              <summary className="cursor-pointer text-gray-800 font-medium flex justify-between items-center">
                Профориентация
                <span className="text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
            </details>
          </div>
        </div>

        {/* Courses Selection Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Курс с помощью в трудоустройстве на выбор</h2>
          <p className="text-gray-700 mb-6">
            Возможность трудоустройства через 6 месяцев. Развиваетесь в направлении, которое подошло вам по результатам
            профориентации, или ориентируетесь на свои желания. Если после начала обучения вы почувствуете, что
            поспешили с выбором, — сможете поменять курс.
          </p>
          <div className="space-y-4">
            <details className="group">
              <summary className="cursor-pointer text-gray-800 font-medium flex justify-between items-center">
                Python-разработчик
                <span className="text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
            </details>
            <details className="group">
              <summary className="cursor-pointer text-gray-800 font-medium flex justify-between items-center">
                Frontend-разработчик с нуля до PRO
                <span className="text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
            </details>
            <details className="group">
              <summary className="cursor-pointer text-gray-800 font-medium flex justify-between items-center">
                Frontend-разработчик с курса до PRO
                <span className="text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
            </details>
            <details className="group">
              <summary className="cursor-pointer text-gray-800 font-medium flex justify-between items-center">
                Java-разработчик
                <span className="text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
