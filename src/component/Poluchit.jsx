import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isAgreed, setIsAgreed] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAgreed) {
      const telegramLink = `https://t.me/asilbek2010_a12`;
      window.open(telegramLink, '_blank');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-blue-50 p-8 rounded-lg  space-y-6 md:space-y-0 md:space-x-8 max-w-8xl mx-auto">
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-2xl font-semibold w-[40%] mb-4">
          Получить презентацию курса и консультацию специалиста
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Электронная почта"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          className={`w-full sm:w-auto px-6 py-3 font-semibold rounded-lg ${
            isAgreed ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-400 text-gray-200 cursor-not-allowed'
          }`}
          disabled={!isAgreed}
        >
          Отправить
        </button>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <p className="text-sm text-gray-600">
            Отправляя заявку, вы даёте согласие на обработку своих персональных данных в соответствии с{' '}
            <a href="#" className="text-blue-500 underline">политикой конфиденциальности</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
