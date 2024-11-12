import React from "react";

const CourseContent = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:flex md:items-start md:space-x-8 mt-20">
      {/* Chap tomondagi sarlavha */}
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <h2 className="text-3xl font-semibold text-gray-900">Содержание курсов</h2>
      </div>
      
      {/* O'ng tomondagi tavsif va statistikalar */}
      <div>
        <p className="text-gray-700 mb-6">
          Вас ждут теоретические видео, практические работы и итоговые проекты на основе реальных кейсов.
        </p>
        
        <div className="flex space-x-4">
          {/* Statistika kartochkalari */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full text-lg font-semibold">
              12
            </div>
            <span className="text-gray-700">месяцев обучения</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full text-lg font-semibold">
              82
            </div>
            <span className="text-gray-700">практических задачи</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
