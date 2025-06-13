import React from 'react';
import './VehiclePark.css';
import gallery1png from './img/gallery1.png.png';
import gallery1jpg from './img/gallery1.png.jpg';
import gallery2 from './img/gallery2.png.jpg';
import gallery3 from './img/gallery3.png.jpg';
import gallery4 from './img/gallery4.png.jpg';
import gallery5 from './img/gallery5.png.jpg';

function VehiclePark() {
  return (
    <div className="vehicle-park-container">
      <h1 className="park-title">Автопарк ГИБДД</h1>
      
      <div className="vehicle-list">

        <div className="vehicle-card">
          <div className="vehicle-image">
            <img src={gallery1png} alt="Kia Rio" />
          </div>
          <div className="vehicle-info">
            <h2>Патрульный автомобиль</h2>
            <p><strong>Модель:</strong> Kia Rio</p>
            <p><strong>Гос. номер:</strong> Не имеется</p>
            <p><strong>Закреплён за:</strong> Отдельная рота ДПС</p>
            <p><strong>Статус:</strong> На службе</p>
          </div>
        </div>

        <div className="vehicle-card">
          <div className="vehicle-image">
            <img src={gallery1jpg} alt="Патрульный автомобиль" />
          </div>
          <div className="vehicle-info">
            <h2>Патрульный автомобиль</h2>
            <p><strong>Модель:</strong> Haval f7</p>
            <p><strong>Гос. номер:</strong> Не имеется</p>
            <p><strong>Закреплён за:</strong> Отдельная рота ДПС</p>
            <p><strong>Статус:</strong> На службе</p>
          </div>
        </div>

        <div className="vehicle-card">
          <div className="vehicle-image">
            <img src={gallery2} alt="Патрульный автомобиль" />
          </div>
          <div className="vehicle-info">
            <h2>Патрульный автомобиль</h2>
            <p><strong>Модель:</strong> Škoda Octavia</p>
            <p><strong>Гос. номер:</strong> Не имеется</p>
            <p><strong>Закреплён за:</strong> Отдельная рота ДПС / специализированная рота ДПС</p>
            <p><strong>Статус:</strong> На службе</p>
          </div>
        </div>

        <div className="vehicle-card">
          <div className="vehicle-image">
            <img src={gallery3} alt="Патрульный автомобиль" />
          </div>
          <div className="vehicle-info">
            <h2>Патрульный мотоцикл</h2>
            <p><strong>Модель:</strong> BMW R1150RT</p>
            <p><strong>Гос. номер:</strong> Не имеется</p>
            <p><strong>Закреплён за:</strong> Мотоциклетный взвод</p>
            <p><strong>Статус:</strong> На службе</p>
          </div>
        </div>

        <div className="vehicle-card">
          <div className="vehicle-image">
            <img src={gallery4} alt="Патрульный автомобиль" />
          </div>
          <div className="vehicle-info">
            <h2>Эвакуатор</h2>
            <p><strong>Модель:</strong> Газель Некст</p>
            <p><strong>Гос. номер:</strong> A7850, 52</p>
            <p><strong>Закреплён за:</strong> Служба эвакуации</p>
            <p><strong>Статус:</strong> На службе</p>
          </div>
        </div>

        <div className="vehicle-card">
          <div className="vehicle-image">
            <img src={gallery5} alt="Патрульный автомобиль" />
          </div>
          <div className="vehicle-info">
            <h2>Патрульный автомобиль</h2>
            <p><strong>Модель:</strong>Tayota Camry</p>
            <p><strong>Гос. номер:</strong> Не имеется</p>
            <p><strong>Закреплён за:</strong> специализированная рота ДПС</p>
            <p><strong>Статус:</strong> На службе</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehiclePark;