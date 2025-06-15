import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../img/gallery7.jpg"; // Импорт первой картинки
import img2 from '../img/3Z5uCfjvTTc.jpg'; // Импорт второй картинки
import "./GibddNews.css";

function GibddNews() {
    const navigate = useNavigate();

    // Создаем объект для соответствия ID новости и изображения
    const newsImages = {
        1: img1, // Для новости с ID 1 используем img1
        3: img2  // Для новости с ID 3 используем img2
    };

    const newsData = [
        {
            id: 1,
            title: "Проведение операции 'Тоннель'",
            date: "2023-10-25",
            image: "gallery7.jpg",
            summary: "С 1 по 30 ноября ГИБДД проводит спецоперацию по выявлению нарушений в тоннелях Московской области.",
            details: "Операция направлена на контроль скорости и соблюдение дистанции. Нарушители будут привлечены к ответственности."
        },
        {
            id: 3,
            title: "Вакансия в ГИБДД",
            date: "2023-10-15",
            image: "3Z5uCfjvTTc.jpg",
            summary: "Требуется инспектор дорожного надзора (УГИБДД по Нижегородской области).",
            details: "Опыт работы от 3 лет, высшее образование. Полный соцпакет."
        }
    ];

    const handleReadMore = (newsId) => {
        navigate(`/news/${newsId}`);
    };

    return (
        <div className="gibdd-news">
            <h1 className="news-header">Новости ГИБДД</h1>
            
            {newsData.map((news) => (
                <article key={news.id} className={`news-card ${news.id === 3 ? 'news-card--vacancy' : ''}`}>
                    <h2>{news.title}</h2>
                    <time dateTime={news.date}>{new Date(news.date).toLocaleDateString('ru-RU')}</time>
                    {newsImages[news.id] && ( // Используем соответствующее изображение
                        <img 
                            src={newsImages[news.id]} 
                            alt={news.title} 
                            className="news-image"
                        />
                    )}
                    <p>{news.summary}</p>
                    <button 
                        onClick={() => handleReadMore(news.id)} 
                        className="news-button"
                    >
                        Подробнее
                    </button>
                </article>
            ))}
        </div>
    );
}

export default GibddNews;
