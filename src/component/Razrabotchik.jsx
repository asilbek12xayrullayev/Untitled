import React from 'react';
import image1 from "../assats/728ba935-2609-40e4-acad-e8f84592ae51.webp.png";
import image2 from "../assats/july_percent_sign2.png.png";

const DeveloperCourseCard = () => {
    return (
        <div className="bg-blue-100 p-8 md:p-12 rounded-lg max-w-9xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
            <div className="flex-1 text-center md:text-left space-y-4">
                <p className="text-gray-500 text-sm md:text-base">ПЕРВЫЙ ПЛАТЕЖ НА 2-Й МЕСЯЦ</p>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Профессия Разработчик</h1>
                <p className="text-gray-700 text-base md:text-lg">
                    Курс для тех, кто мечтает о работе в IT, но не знает, с чего начать, или переживает, что ничего не получится. Мы поможем вам преодолеть все страхи и пройти весь путь к новой профессии: от выбора IT-направления до трудоустройства.
                </p>
                <button className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700">
                    Записаться на курс
                </button>
            </div>

            <div className="flex-1 flex flex-col items-center md:items-end space-y-4">
                <div className="bg-yellow-400 text-yellow-600 font-semibold px-4 py-2 rounded-full text-center text-sm flex">
                    <img className='' src={image2} alt="" />
                    <span>Летняя распродажа</span>
                    <span className="block ">Скидки до 60% действуют</span>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-2 gap-2 p-4  rounded-lg shadow-lg transform scale-95 hover:scale-100 transition-transform">
                        <div className=" text-white p-3 rounded w-[190%]">
                            <img className='' src={image1} alt="" />
                        </div>
                    </div>
                    <div className="absolute -top-6 -right-6 h-16 w-16 bg-gray-200 rounded-full opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperCourseCard;
