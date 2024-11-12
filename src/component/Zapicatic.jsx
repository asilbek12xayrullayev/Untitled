import React from 'react';

const CourseInfo = () => {
  return (
    <div style={styles.container}>
      {/* Course Cost Section */}
      <div style={styles.costSection}>
        <h2 style={styles.heading}>Стоимость курса</h2>
        <div style={styles.discountBox}>
          <span style={styles.discountText}>Скидка действует</span>
          <span style={styles.discountAmount}>-60%</span>
        </div>
        <p style={styles.price}>
          <s>2,206,960</s> сум/мес
        </p>
        <p style={styles.discountedPrice}>882,384 сум/мес</p>
        <p style={styles.installmentText}>В рассрочку на 12 мес</p>
        <ul style={styles.featuresList}>
          <li>Курс в подарок</li>
          <li>Длительность рассрочки — 12 месяцев</li>
          <li>Год английского бесплатно</li>
        </ul>
      </div>

      {/* Course Registration Section */}
      <div style={styles.registrationSection}>
        <h2 style={styles.heading}>Записаться на курс или получить бесплатную консультацию</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Имя" style={styles.input} />
          <input type="tel" placeholder="Телефон" style={styles.input} />
          <input type="email" placeholder="Электронная почта" style={styles.input} />
          <label style={styles.checkboxLabel}>
            <input type="checkbox" style={styles.checkbox} />
            Я юридическое лицо
          </label>
          <button type="submit" style={styles.button}>Записаться на курс</button>
        </form>
        <p style={styles.privacyText}>
          Отправляя заявку, вы даёте согласие на обработку своих персональных данных в соответствии с
          <a href="#" style={styles.link}> политикой конфиденциальности</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    backgroundColor: '#f0f9ff', // Light blue background
    padding: '20px',
    borderRadius: '8px',
    justifyContent: 'center'
  },
  costSection: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  discountBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffd700',
    padding: '10px',
    borderRadius: '8px',
    color: '#000',
    marginBottom: '10px'
  },
  discountText: {
    marginRight: 'auto'
  },
  discountAmount: {
    fontWeight: 'bold',
    fontSize: '20px'
  },
  price: {
    fontSize: '16px',
    color: '#aaa',
    textDecoration: 'line-through'
  },
  discountedPrice: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000'
  },
  installmentText: {
    fontSize: '14px',
    color: '#aaa'
  },
  featuresList: {
    marginTop: '20px',
    lineHeight: '1.6'
  },
  registrationSection: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px'
  },
  checkbox: {
    width: '16px',
    height: '16px'
  },
  button: {
    backgroundColor: '#6200ee', // Purple background
    color: '#fff',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px'
  },
  privacyText: {
    fontSize: '12px',
    marginTop: '10px',
    color: '#777'
  },
  link: {
    color: '#6200ee',
    textDecoration: 'none'
  }
};

export default CourseInfo;
