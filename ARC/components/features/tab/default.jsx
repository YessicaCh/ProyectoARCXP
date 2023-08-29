import React, { useState } from "react";
import PropTypes from "prop-types";
// import './TabComponent.css'; // Agrega tus estilos CSS aquí

const TabComponent = (props) => {
    const { customFields } = props;
    const { tab01, tab02, contentTab01, contentTab02 } = customFields;
    const [activeTab, setActiveTab] = useState("perfil"); // Estado para controlar la pestaña activa
    // const tabs = ["perfil", "experiencia"]; // Nombres de las pestañas
    const tabs = [
        { name: tab01 || "Tab 01", content: contentTab01 },
        { name: tab02 || "Tab 02", content: contentTab02 },
    ];
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tab-component px-5">
            <ul className="nav nav-tabs">
                {tabs?.length &&
                    tabs?.map((tab) => (
                        <li className="nav-item" key={tab?.name}>
                            <a
                                className={`nav-link ${
                                    activeTab === tab?.name ? "active" : ""
                                }`}
                                onClick={() => handleTabClick(tab?.name)}
                                href="#"
                            >
                                {tab?.name?.charAt(0).toUpperCase() +
                                    tab?.name?.slice(1)}
                            </a>
                        </li>
                    ))}
            </ul>
            <div className="tab-content">
                {/* {activeTab === "perfil" && (
                    <div className="tab-pane active">
                        <h3>Información de Perfil</h3>
                    </div>
                )}
                {activeTab === "experiencia" && (
                    <div className="tab-pane">
                        <h3>Experiencia Laboral</h3>
                    </div>
                )} */}
                {tabs?.length &&
                    tabs?.map(
                        (tab) =>
                            activeTab === tab.name && (
                                <div className="tab-pane active">
                                    <h3>{tab.content}</h3>
                                </div>
                            )
                    )}
            </div>
        </div>
    );
};

TabComponent.label = {
    en: "TabComponent",
    es: "Tab component",
};

TabComponent.propTypes = {
    customFields: PropTypes.shape({
        tab01: PropTypes.string.tag({
            name: "Nombre del tab 01",
            group: "Tab 01",
        }),
        contentTab01: PropTypes.text.tag({
            name: "Contenido del tab 01",
            group: "Tab 01",
        }),
        tab02: PropTypes.string.tag({
            name: "Nombre del tab 02",
            group: "Tab 02",
        }),
        contentTab02: PropTypes.text.tag({
            name: "Contenido del tab 02",
            group: "Tab 02",
        }),
    }),
};
export default TabComponent;
