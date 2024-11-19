import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {/* Feature 1 */}
        <div className="p-4 bg-white  rounded-lg">
          <h3 className="text-lg font-bold mb-2">Для новичков</h3>
          <p className="text-sm text-gray-600">
            Всё получится без знаний математики и опыта в IT
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-4 bg-white  rounded-lg">
          <h3 className="text-lg font-bold mb-2">4 профессии в IT</h3>
          <p className="text-sm text-gray-600">
            Выбирайте и не переживайте — если что, сможете поменять курс
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-4 bg-white  rounded-lg">
          <h3 className="text-lg font-bold mb-2">Работа или стажировка</h3>
          <p className="text-sm text-gray-600">Через 6 месяцев</p>
        </div>

        {/* Feature 4 */}
        <div className="p-4 bg-white  rounded-lg">
          <h3 className="text-lg font-bold mb-2">Помощь</h3>
          <p className="text-sm text-gray-600">В трудоустройстве</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
