import React from 'react';

function CoursePricingForm() {
  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg">
        
        {/* Pricing Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Стоимость курса</h2>
          <p className="text-gray-500 mb-4">Старт курса: 8 июля<br />Осталось: 6 мест</p>
          
          <div className="bg-yellow-100 p-4 rounded-lg flex justify-between items-center mb-4">
            <span className="font-bold text-yellow-400">Скидка действует</span>
            <span className="bg-yellow-300 text-white text-lg font-semibold px-3 py-1 rounded-lg">-60%</span>
          </div>
          
          <div className="text-4xl font-bold text-gray-900 mb-2">
            882 384 сум/мес
          </div>
          <p className="text-gray-500 line-through mb-4">2 205 969 сум/мес</p>
          
          <ul className="text-gray-700 space-y-2">
            <li>Курс в подарок</li>
            <li>Длительность рассрочки — 12 месяцев</li>
            <li>Год английского бесплатно</li>
          </ul>
        </div>

        {/* Registration Form */}
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Записаться на курс или получить бесплатную консультацию</h2>
          
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Имя" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" 
              />
            </div>
            
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-lg px-4 py-2 w-1/3 focus:outline-none focus:border-blue-500">
                <option value="+998">+998</option>
                <option value="+7">+7</option>
                <option value="+1">+1</option>
              </select>
              <input 
                type="tel" 
                placeholder="Телефон" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" 
              />
            </div>
            
            <div>
              <input 
                type="email" 
                placeholder="Электронная почта" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" 
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="isLegalEntity" className="mr-2" />
              <label htmlFor="isLegalEntity" className="text-gray-700">Я юридическое лицо</label>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 transition">
              Записаться на курс
            </button>
            
            <p className="text-xs text-gray-500 mt-4">
              Отправляя заявку, вы даёте согласие на обработку своих персональных данных в соответствии с <a href="#" className="text-blue-600 underline">политикой конфиденциальности</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CoursePricingForm;
