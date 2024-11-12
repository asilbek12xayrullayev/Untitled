import React from "react";
import "./Footer.css"; // Create this file for styles and animations
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="contact">
          <p><FaPhoneAlt /> +998 71 205 80 60</p>
          <p><FaEnvelope /> <a href="mailto:hello@skillbox.uz">hello@skillbox.uz</a></p>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTelegram /></a>
          </div>
        </div>
        <div className="links">
          <a href="#">Публичный договор</a>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Условия акции</a>
        </div>
        <div className="categories">
          <p><strong>Все направления</strong></p>
          <p>Дизайн</p>
          <p>Маркетинг</p>
          <p>Финансы</p>
          <p>Кино и музыка</p>
          <p>Начать свое дело</p>
          <p>Общее образование</p>
        </div>
        <div className="extra">
          <p>ООО «UBRAINS», ИНН 3084332936</p>
          <p>Республика Узбекистан, г. Ташкент, Мирободский р-н, ул. Афросиаб 46, каб. 102</p>
          <p>Регистрационный номер 982705</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© UBRAINS, 2023</p>
        <p>Эксклюзивный партнер Skillbox в Узбекистане</p>
        <div className="language-options">
          <button>Русский</button>
          <button>O'zbek</button>
          <button>English</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
