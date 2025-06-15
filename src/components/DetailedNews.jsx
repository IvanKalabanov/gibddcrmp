import React from 'react';
import { useParams, Link } from 'react-router-dom';
import img1 from '../img/gallery7.jpg';
import img2 from '../img/3Z5uCfjvTTc.jpg'
import "./DetailedNews.css";

const newsDatabase = {
    1: {
        title: "Операция 'Тоннель'",
        date: "25 октября 2023",
        image: img1,
        fullText: "С 1 по 30 ноября 2023 года ГИБДД Московской области проводит масштабную операцию по контролю за соблюдением ПДД в тоннелях. Основные нарушения, на которые будет обращено внимание: превышение скорости, несоблюдение дистанции, выезд на встречную полосу. Для проведения операции задействованы 50 экипажей ДПС и системы автоматической фиксации. Штрафы за нарушения увеличены в 2 раза в зоне проведения операции.",
        vacancy: null
    },
    2: {
        title: "Изменения в ПДД 2024",
        date: "20 октября 2023",
        image: img1,
        fullText: "С 1 января 2024 года вступают в силу новые правила дорожного движения...",
        vacancy: null
    },
    3: {
        title: "Вакансия в ГИБДД",
        date: "15 октября 2023",
        image: img2,
        fullText: "ГИБДД объявляет конкурс на замещение должности инспектора...",
        vacancy: {
            position: "Инспектор дорожного надзора",
            requirements: "Высшее образование, возраст до 35 лет",
            salary: "от 70 000 руб.",
            contacts: "Отдел кадров: (495) 123-45-67"
        }
    }
};

function DetailedNews() {
    const { id } = useParams();
    const news = newsDatabase[id];

    if (!news) {
        return (
            <div className="full-width-news error-page">
                <div className="news-container">
                    <h1 className="news-title">Новость не найдена</h1>
                    <Link to="/" className="back-button">Вернуться к списку новостей</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="full-width-news">
            {/* Основной блок новости */}
            <div className="news-container">
                <h1 className="news-title">{news.title}</h1>
                <time className="news-date">{news.date}</time>
                
                {news.image && (
                    <img src={news.image} alt={news.title} className="news-image" />
                )}
                
                <div className="news-content">
                    <p>{news.fullText}</p>
                </div>
            </div>

            {/* Блок вакансии (только для новостей с vacancy) */}
            {news.vacancy && (
                <div className="news-container vacancy-container">
                    <h2 className="vacancy-title">Информация о вакансии</h2>
                    <div className="vacancy-details">
                        <p><strong>Должность:</strong> {news.vacancy.position}</p>
                        <p><strong>Требования:</strong> {news.vacancy.requirements}</p>
                        <p><strong>Зарплата:</strong> {news.vacancy.salary}</p>
                        <p><strong>Контакты:</strong> {news.vacancy.contacts}</p>
                    </div>
                </div>
            )}

            {/* Кнопка "Назад" */}
            <div className="news-container">
                <Link to="/" className="back-button">
                    ← Назад к новостям
                </Link>
            </div>
        </div>
    );
}

export default DetailedNews;
