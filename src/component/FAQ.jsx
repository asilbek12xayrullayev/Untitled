import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        { question: 'Я ничего не понимаю в IT. Этот курс поможет мне разобраться?', answer: 'Да, курс рассчитан на новичков в IT.' },
        { question: 'На этом курсе будет практика?', answer: 'Да, курс включает практические задания для закрепления знаний.' },
        { question: 'Я смогу после прохождения курса сменить профессию?', answer: 'Да, курс направлен на профессиональную переподготовку.' },
        { question: 'Почему вы так уверены, что у меня получится найти работу?', answer: 'Мы предоставляем актуальные знания и навыки, востребованные на рынке.' },
        { question: 'Сомневаюсь, что смогу стать программистом. Есть ли какие-то ограничения?', answer: 'Ограничений нет, курс подходит для всех.' },
        { question: 'Нужно ли знать математику?', answer: 'Нет, знания математики не обязательны.' },
        { question: 'Какой компьютер подходит для курса?', answer: 'Подойдет любой современный компьютер.' },
        { question: 'Какой график обучения на платформе? Получится ли совмещать его с работой?', answer: 'График гибкий, вы можете учиться в удобное время.' },
        { question: 'Сколько часов в неделю мне нужно будет уделять обучению на платформе?', answer: 'Рекомендуется уделять 5-10 часов в неделю.' },
        { question: 'Кто будет мне помогать в обучении на платформе?', answer: 'У вас будет наставник и поддержка сообщества.' },
        { question: 'Действуют ли какие-нибудь программы рассрочки?', answer: 'Да, мы предлагаем программы рассрочки.' },
    ];

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex ">
            <div className="w-[52%] py-32 px-20">
                <h1 className='font-bold text-6xl'>Часто задаваемые
                    вопросы</h1>
            </div>
            <div style={styles.container}>
                <div style={styles.faqList}>
                    {faqData.map((item, index) => (
                        <div key={index} style={styles.faqItem}>
                            <div style={styles.question} onClick={() => toggleAnswer(index)}>
                                {item.question}
                                <span style={styles.icon}>{openIndex === index ? '▲' : '▼'}</span>
                            </div>
                            {openIndex === index && <div style={styles.answer}>{item.answer}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f0f9ff', 
        borderRadius: '8px',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    faqList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    faqItem: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '10px 20px',
        cursor: 'pointer',
    },
    question: {
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        fontSize: '16px',
        color: '#6200ee',
    },
    answer: {
        marginTop: '10px',
        fontSize: '14px',
        color: '#555',
    },
};

export default FAQ;
