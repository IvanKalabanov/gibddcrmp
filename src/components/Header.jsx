import React from "react";
import './Header.css'

function Header () {
    return(
        <header className="header">
            
            <nav className="top-nav">
                <div className="logo">ГОСАВТОИНСПЕКЦИЯ</div>

            </nav>
            <div className="header-content">
                <h1 className="header-title">Информация</h1>
                <p className="header-subtitle">
                    Данный сайт создан для ГОСАВТОИНСПЕКЦИИ в жанре игры CRMP! <br />
                    Здесь собрана вся основаная информация для сотрудников данной силовой структуры. <br />
                    Просьба ознакомиться с основной информацией представленной ниже.
                </p>
                <h1>НЕ ИМЕЕТ НИКАКОГО ОТНОШЕНИЯ К РЕАЛЬНОЙ ЖИЗНИ, ВСЕ СОВПАДЕНИЯ СЛУЧАЙНЫ!</h1>
                <button className="header-button">Перейти к ознакомлению</button>
            </div>
        </header>
    )
}

export default Header