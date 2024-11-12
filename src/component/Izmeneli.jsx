import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const App = () => {
    const [dotPosition, setDotPosition] = useState('top');
    const handlePositionChange = ({ target: { value } }) => {
        setDotPosition(value);
    };
    return (
        <>
            {/* <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group> */}
            <Carousel dotPosition={dotPosition}>
                <div className='bg-black py-32 px-10'>
                    <div className="div">
                        <h1 className='text-white text-3xl font-bold'>Люди, которые изменили
                            жизнь благодаря Skillbox</h1>
                        <p className='text-white py-10'>Пользователи Skillbox осваивают новые профессии.
                            Строят карьеру, меняют жизнь и обретают себя. У вас
                            тоже получится.</p>
                        <div className="">
                            <button className='text-white border-white rounded-2xl  '>Читать истории </button>
                        </div>
                    </div>
                </div>
                <div className='bg-black py-32 px-10'>
                    <div className="div">
                        <h1 className='text-white text-3xl font-bold'>Люди, которые изменили
                            жизнь благодаря Skillbox</h1>
                        <p className='text-white py-10'>Пользователи Skillbox осваивают новые профессии.
                            Строят карьеру, меняют жизнь и обретают себя. У вас
                            тоже получится.</p>
                        <div className="">
                            <button className='text-white border-white rounded-2xl  '>Читать истории </button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    );
};
export default App;