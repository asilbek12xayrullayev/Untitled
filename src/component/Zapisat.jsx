import React from 'react';
import image1 from "../assats/Picture ⏵ 2fe4ce6c7d2ee230858dc1de2e66ea4959ce31a6.webp.png";

const CourseDetails = () => {
    return (
        <div className="bg-gray-50 py-10 px-4 ">
            <div className="max-w-9xl  mx-auto bg-gray-200  rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
                <img className='' src={image1} alt="" />
                <div className="flex-grow text-center md:text-left ">
                    <h2 className="text-2xl font-bold mb-4 ">Этот курс для вас, если:</h2>
                    <ul className="text-gray-700 space-y-2">
                        <li>
                            Вы хотите с нуля освоить востребованную IT-профессию, но не готовы
                            тратить годы на обучение.
                        </li>
                        <li>
                            Вы не знаете, какое направление выбрать, и волнуетесь, что ошибётесь
                            с курсом.
                        </li>
                        <li>
                            Вы не до конца уверены в своих силах и сомневаетесь, что сможете
                            попасть в IT без опыта.
                        </li>
                        <li>Вам не хватает мотивации, чтобы начать.</li>
                    </ul>
                    <button className="mt-6 bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition">
                        Записаться на курс
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
