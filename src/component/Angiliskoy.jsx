import React from 'react';
import image1 from "../assats/Picture ⏵ kespa.webp.png";

const Angiliskoy = () => {
    return (
        <div className='bg-gray-200 px-40 py-20'>
            <div className="flex ">
                <img className='w-[52%]' src={image1} alt="" />
                <div className="px-20 py-4 w-[52%]">
                    <h1 className='font-bold text-3xl '>Год английского языка!</h1>
                    <p className='py-4'>Пройдите 3 модуля из первого курса и получите доступ
                        к урокам английского языка от Skillbox на год.</p>
                    <p >Предложение действует для пользователей Skillbox,
                        которые купили любую профессию с 1 августа
                        2021 года.</p>
                    <h1 className='font-bold text-2xl py-3'>Вас ждут:</h1>
                    <p>методика ускоренного запоминания слов и грамматики;</p>
                    <p className='py-4'>персональная программа обучения, которая поможет
                        заговорить по‑английски с нуля.</p>
                        <div className="py-5">
                            <button className='bg-blue-500 w-32 h-10 rounded-2xl'>Записаться</button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Angiliskoy;
