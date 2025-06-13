import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ГОСАВТОИНСПЕКЦИЯ</h3>
          <p>Официальный ресурс подразделения ГИБДД</p>
          <div className="footer-logo">
            {/* Здесь может быть логотип */}
            <span className="badge">CRMP v2.0</span>
          </div>
        </div>

        <div className="footer-section">
          <h4>Быстрые ссылки</h4>
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/staff">Сотрудники</a></li>
            <li><a href="/vehicles">Автопарк</a></li>
            <li><a href="/database">База данных</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Контакты</h4>
          <ul>
            <li><i className="icon radio"></i> Радиочастота: 121.5 MHz</li>
            <li><i className="icon phone"></i> Телефон: 102 (экстренный)</li>
            <li><i className="icon email"></i> Email: gibdd@example.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Полезная информация</h4>
          <ul>
            <li><a href="/laws">ПДД и законы</a></li>
            <li><a href="/penalties">Штрафы</a></li>
            <li><a href="/training">Обучение</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ГОСАВТОИНСПЕКЦИЯ. Все права защищены.</p>
        <p className="disclaimer">Данный сайт является имитацией и не имеет отношения к реальным органам правопорядка.</p>
      </div>
    </footer>
  );
}

export default Footer;