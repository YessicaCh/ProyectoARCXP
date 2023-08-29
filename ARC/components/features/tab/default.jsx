import React, { useState } from 'react';
// import './TabComponent.css'; // Agrega tus estilos CSS aquí

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('perfil'); // Estado para controlar la pestaña activa
  const tabs = ['perfil', 'experiencia']; // Nombres de las pestañas

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-component px-5">
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab}>
            <a
              className={`nav-link ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
              href="#"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {activeTab === 'perfil' && (
          <div className="tab-pane active">
            {/* Contenido para la pestaña de perfil */}
            <h3>Información de Perfil</h3>
            {/* Agrega aquí la información de perfil */}
          </div>
        )}
        {activeTab === 'experiencia' && (
          <div className="tab-pane">
            {/* Contenido para la pestaña de experiencia */}
            <h3>Experiencia Laboral</h3>
            {/* Agrega aquí la información de experiencia laboral */}
          </div>
        )}
      </div>
    </div>
  );
};

TabComponent.label = {
    en: 'TabComponent',
    es: 'Tab component'
  };
  
export default TabComponent;
