import React from "react";
import "./Contentone.css"
import image281 from "../img/281.png";
import image2186 from "../img/2186_logo.jpg";

function Contentone () {
    return(
        <div className="content-block">
            <h1 className="content-title">Руководство УГИБДД по Нижеородской области.</h1>
  
            <div className="squares-container">
                <div className="square">
                    <h2>Начальник УГИБДД по Нижегородской области</h2>
                    <h2>Гуров Иван Алексеевич </h2> 
                    <h2>Полковник полиции</h2>
                    <img src={image281}></img>
                </div>
                <div className="square">
                    <h2>Заместитель начальника УГИБДД по Нижегородской области</h2>
                    <h2>ВАКАНТНО</h2> 
                    <h2>ВАКАНТНО</h2>
                    <img src={image2186}></img>
                </div>
                <div className="square">
                    <h2>Командир отдельного батальона</h2>
                    <h2>ВАКАНТНО</h2> 
                    <h2>ВАКАНТНО</h2>
                    <img src={image2186}></img>
                </div>
                <div className="square">
                    <h2>Заместитель командира отдельного батальона</h2>
                    <h2>ВАКАНТНО</h2> 
                    <h2>ВАКАНТНО</h2>
                    <img src={image2186}></img>
                </div>
                <div className="square">
                    <h2>Командир отдельной роты</h2>
                    <h2>ВАКАНТНО</h2> 
                    <h2>ВАКАНТНО</h2>
                    <img src={image2186}></img>
                </div>
                <div className="square">
                    <h2>Заместитель командира отдельной роты</h2>
                    <h2>ВАКАНТНО</h2> 
                    <h2>ВАКАНТНО</h2>
                    <img src={image2186}></img>
                </div>
                <div className="square">
                    <h2>Командир специализированной роты</h2>
                    <h2>ВАКАНТНО</h2> 
                    <h2>ВАКАНТНО</h2>
                    <img src={image2186}></img>
                </div>
                <div className="square">
                    <h2>Заместитель командира специализированной роты</h2>
                    <h2>ВАКАНТНО</h2> 
                    <h2>ВАКАНТНО</h2>
                    <img src={image2186}></img>
                </div>
            </div>
        </div>
    )
}

export default Contentone
