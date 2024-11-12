import React from 'react';
import image1 from "../assats/div.ui-text-review-header__avatar-wrapper.png";
import image2 from "../assats/SVG (4).png";
import image3 from "../assats/SVG (4).png";
import image4 from "../assats/SVG (4).png";
import image5 from "../assats/SVG (4).png";
import image6 from "../assats/SVG (5).png";
import image7 from "../assats/23a5949ead4cb1b9fa26c96392005eaccf34fa4a-webp.webp.png";
import image8 from "../assats/SVG (4).png";
import image9 from "../assats/SVG (4).png";
import image10 from "../assats/SVG (4).png";
import image11 from "../assats/SVG (4).png";

import { Carousel } from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const App = () => (
    <Carousel autoplay>
        <div className='mt-[23%] px-20 '>
            <h1 className='text-5xl font-bold'>Отзывы участников</h1>
            <div className="bg-gray-200 rounded-2xl px-4 mt-10 flex h-72">
                <div className="w-[52%] ">
                    <img className='' src={image1} alt="" />
                </div>
                <div className="-mx-32">
                    <h7 className='font-bold text-1xl'>Никита Пак</h7>
                    <p>Курс «Профессия Python-разработчик» <hr className='w-52 bg-black h-[2px] mx-10 ' /></p>
                    <div className="flex py-1">
                        <img className='' src={image2} alt="" />
                        <img className='' src={image3} alt="" />
                        <img className='' src={image4} alt="" />
                        <img className='' src={image5} alt="" />
                    </div>
                    <div className="w-[100%]">
                        <p>Нравится постоянная обратная связь от платформы и куратора. Большое количество
                            практических работ, позволяющих моментально применить полученные знания. Изобилие
                            бонусных курсов, дающих возможность самостоятельно развиваться не только по программе,
                            выбранной для изучения, но и в других аспектах.</p>
                        <p className='py-1'>Процесс проверки практических заданий порой занимает время, однако это не минус: пока
                            ждёшь, можно закрепить пройденный материал и запомнить важные формулировки и понятия.</p>
                    </div>
                    <div className="py-3 bg-gray-300 rounded-2xl w-32 h-10 px-3 flex items-center gap-3">
                        <img className='' src={image6} alt="" />
                        <h1>ВКонтакте</h1>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-sm flex  ">
                    <div className="w-[72%]">
                        <img className='rounded-2xl px-10' src={image7} alt="" />
                    </div>
                    <div className=" ">
                        <h7 className='font-bold text-1xl'>Иван Медведев, г. Ивантеевка</h7>
                        <p>Курс «Профессия Инженер по тестированию»<hr className='w-52 bg-black h-[2px] mx-10 ' /></p>
                        <div className="flex py-1">
                            <img className='' src={image8} alt="" />
                            <img className='' src={image9} alt="" />
                            <img className='' src={image10} alt="" />
                            <img className='' src={image11} alt="" />
                        </div>
                        <div className="w-[100%]">
                            <p>Если какой-то материал тяжело даётся, есть вопрос по ДЗ, достаточно написать
                                преподавателю, который поможет разобраться с информацией и подскажет, как решить задачу.
                                По итогу 9-месячной учёбы стал по-другому смотреть на сайты. Замечаю баги, разбираюсь в
                                вёрстке, веду репорты. Узнал, как работать со специфическим ПО.
                                Уже сейчас нисколько не жалею, что выбрал Skillbox. Спасибо!!!</p>
                        </div>
                        <div className="py-3 bg-gray-300 rounded-2xl w-32 h-10 px-3 flex items-center gap-3">
                            <img className='' src={image6} alt="" />
                            <h1>ВКонтакте</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-[23%] px-20 '>
            <h1 className='text-5xl font-bold'>Отзывы участников</h1>
            <div className="bg-gray-200 rounded-2xl px-4 mt-10 flex ">
                <div className="w-[52%] ">
                    <img className='' src={image1} alt="" />
                </div>
                <div className="-mx-32">
                    <h7 className='font-bold text-1xl'>Никита Пак</h7>
                    <p>Курс «Профессия Python-разработчик» <hr className='w-52 bg-black h-[2px] mx-10 ' /></p>
                    <div className="flex py-1">
                        <img className='' src={image2} alt="" />
                        <img className='' src={image3} alt="" />
                        <img className='' src={image4} alt="" />
                        <img className='' src={image5} alt="" />
                    </div>
                    <div className="w-[100%]">
                        <p>Нравится постоянная обратная связь от платформы и куратора. Большое количество
                            практических работ, позволяющих моментально применить полученные знания. Изобилие
                            бонусных курсов, дающих возможность самостоятельно развиваться не только по программе,
                            выбранной для изучения, но и в других аспектах.</p>
                        <p className='py-1'>Процесс проверки практических заданий порой занимает время, однако это не минус: пока
                            ждёшь, можно закрепить пройденный материал и запомнить важные формулировки и понятия.</p>
                    </div>
                    <div className="py-3 bg-gray-300 rounded-2xl w-32 h-10 px-3 flex items-center gap-3">
                        <img className='' src={image6} alt="" />
                        <h1>ВКонтакте</h1>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-sm flex  ">
                    <div className="w-[72%]">
                        <img className='rounded-2xl px-10' src={image7} alt="" />
                    </div>
                    <div className=" ">
                        <h7 className='font-bold text-1xl'>Иван Медведев, г. Ивантеевка</h7>
                        <p>Курс «Профессия Инженер по тестированию»<hr className='w-52 bg-black h-[2px] mx-10 ' /></p>
                        <div className="flex py-1">
                            <img className='' src={image8} alt="" />
                            <img className='' src={image9} alt="" />
                            <img className='' src={image10} alt="" />
                            <img className='' src={image11} alt="" />
                        </div>
                        <div className="w-[100%]">
                            <p>Если какой-то материал тяжело даётся, есть вопрос по ДЗ, достаточно написать
                                преподавателю, который поможет разобраться с информацией и подскажет, как решить задачу.
                                По итогу 9-месячной учёбы стал по-другому смотреть на сайты. Замечаю баги, разбираюсь в
                                вёрстке, веду репорты. Узнал, как работать со специфическим ПО.
                                Уже сейчас нисколько не жалею, что выбрал Skillbox. Спасибо!!!</p>
                        </div>
                        <div className="py-3 bg-gray-300 rounded-2xl w-32 h-10 px-3 flex items-center gap-3">
                            <img className='' src={image6} alt="" />
                            <h1>ВКонтакте</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Carousel>
);
export default App;