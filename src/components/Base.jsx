import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, set, onValue, remove } from 'firebase/database';
import './Base.css';

function Base() {
  const [violations, setViolations] = useState([]);
  const [formData, setFormData] = useState({
    inspector: '',
    violator: '',
    article: '',
    carInfo: '',
    evidence: ''
  });

   const [expandedId, setExpandedId] = useState(null);
    const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Загрузка данных из Firebase
  useEffect(() => {
    const violationsRef = ref(db, 'violations');
    onValue(violationsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const violationsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setViolations(violationsArray);
      }
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Добавление нарушения
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.inspector || !formData.violator) return;

    const newViolation = {
      ...formData,
      date: new Date().toLocaleString()
    };

    // Сохраняем в Firebase
    const newViolationRef = ref(db, `violations/${Date.now()}`);
    set(newViolationRef, newViolation)
      .then(() => {
        setFormData({
          inspector: '',
          violator: '',
          article: '',
          carInfo: '',
          evidence: ''
        });
      })
      .catch((error) => {
        console.error("Ошибка сохранения:", error);
      });
  };

  // Удаление нарушения
  const deleteRecord = (id) => {
    const violationRef = ref(db, `violations/${id}`);
    remove(violationRef)
      .catch((error) => {
        console.error("Ошибка удаления:", error);
      });
  };


  return (
    <div className="base-container">
      <h2>База данных нарушений ГИБДД</h2>
      
      <form onSubmit={handleSubmit} className="violation-form">
        <h3>Добавить новое нарушение</h3>
        <div className="form-group">
          <label>Инспектор:</label>
          <input
            type="text"
            name="inspector"
            value={formData.inspector}
            onChange={handleInputChange}
            required
            placeholder="ФИО инспектора"
          />
        </div>
        
        <div className="form-group">
          <label>Нарушитель (Nick_Name):</label>
          <input
            type="text"
            name="violator"
            value={formData.violator}
            onChange={handleInputChange}
            required
            placeholder="Никнейм нарушителя"
          />
        </div>
        
        <div className="form-group">
          <label>Нарушенная статья:</label>
          <input
            type="text"
            name="article"
            value={formData.article}
            onChange={handleInputChange}
            placeholder="Статья КоАП"
          />
        </div>
        
        <div className="form-group">
          <label>Марка и ГРЗ машины:</label>
          <input
            type="text"
            name="carInfo"
            value={formData.carInfo}
            onChange={handleInputChange}
            placeholder="Например: Toyota Camry A123BC77"
          />
        </div>
        
        <div className="form-group">
          <label>Доказательства (/ticket):</label>
          <input
            type="text"
            name="evidence"
            value={formData.evidence}
            onChange={handleInputChange}
            placeholder="Ссылка на доказательства"
          />
        </div>
        
        <button type="submit" className="submit-btn">Добавить нарушение</button>
      </form>
      
      <div className="violations-list">
        <h3>Зарегистрированные нарушения ({violations.length})</h3>
        {violations.length === 0 ? (
          <p className="no-records">Нет записей о нарушениях</p>
        ) : (
          <div className="records-container">
            {violations.map(violation => (
              <div 
                key={violation.id} 
                className={`violation-record ${expandedId === violation.id ? 'expanded' : ''}`}
              >
                <div 
                  className="record-header"
                  onClick={() => toggleExpand(violation.id)}
                >
                  <span className="record-date">{violation.date}</span>
                  <span className="record-inspector">{violation.inspector}</span>
                  <span className="record-violator">{violation.violator}</span>
                  <span className="expand-icon">
                    {expandedId === violation.id ? '▲' : '▼'}
                  </span>
                </div>
                
                {expandedId === violation.id && (
                  <div className="record-details">
                    <div className="detail-row">
                      <span className="detail-label">Нарушенная статья:</span>
                      <span className="detail-value">{violation.article || 'Не указана'}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Автомобиль:</span>
                      <span className="detail-value">{violation.carInfo || 'Не указан'}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Доказательства:</span>
                      <span className="detail-value">
                        {violation.evidence ? (
                          <a href={violation.evidence} target="_blank" rel="noopener noreferrer">
                            Посмотреть доказательства
                          </a>
                        ) : 'Не приложены'}
                      </span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteRecord(violation.id);
                      }}
                      className="delete-btn"
                    >
                      Удалить запись
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Base;