import { useState } from 'react';

const FAQ = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const faqs = [
    { question: "Я ничего не понимаю в IT. Этот курс поможет мне разобраться?", answer: "Да, курс разработан для начинающих и поможет вам освоить необходимые навыки." },
    { question: "На этом курсе будет практика?", answer: "Да, у нас много практических заданий, чтобы вы могли сразу применять свои знания." },
    { question: "Я смогу после прохождения курса сменить профессию?", answer: "Да, курс готовит вас к началу карьеры в IT." },
    { question: "Почему вы так уверены, что у меня получится найти работу?", answer: "Мы предоставляем актуальные знания и поддержку карьерных коучей." },
    { question: "Сомневаюсь, что смогу стать программистом. Есть ли какие-то ограничения?", answer: "Нет ограничений. Мы поможем вам справиться с трудностями." },
    { question: "Нужно ли знать математику?", answer: "Нет, знания математики не требуются для начала обучения." },
    { question: "Какой компьютер подходит для курса?", answer: "Подойдет любой современный компьютер с доступом в интернет." },
    { question: "Какой график обучения на платформе? Получится ли совмещать его с работой?", answer: "Обучение гибкое, вы можете учиться в любое время." },
    { question: "Сколько часов в неделю мне нужно будет уделять обучению на платформе?", answer: "Рекомендуем уделять от 10 до 15 часов в неделю." },
    { question: "Кто будет мне помогать в обучении на платформе?", answer: "У вас будет доступ к наставникам и службе поддержки." },
    { question: "Действуют ли какие-нибудь программы рассрочки?", answer: "Да, у нас есть программы рассрочки для удобства оплаты." },
  ];

  return (
    <div className="max-w-9xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-left">Часто задаваемые вопросы</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleQuestion(index)}
            className="border-b border-gray-300 py-2 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{faq.question}</p>
              <span className="text-gray-500">{openQuestionIndex === index ? '▲' : '▼'}</span>
            </div>
            {openQuestionIndex === index && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
