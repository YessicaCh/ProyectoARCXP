import React from 'react';
import './style.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContainerInfo = () => {
  return (
    <div className="container-info container-fluid my-3"> 
      <div className="row align-items-center">
        <div className="col-lg-4 text-center">
          <div className="circle">
            Y {/* Puedes usar una imagen o la letra "Y" */}
            {/* <img src={yesitaImage} alt="Yessy programando" /> */}
          </div>
        </div>
        <div className="col-lg-8">
          <div className="text-container">
            <p className="mb-0 text">Me puedes contactarme a traves de  </p>
          </div>
          <ul className="social-list">
            <li>
              <a href="https://www.linkedin.com/in/yessica-zamata-4abb02aa/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/YessicaCh" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href="mailto:yessica.chuctaya@ucsp.edu.pe">
                <FaEnvelope /> Gmail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

ContainerInfo.label = {
  en: 'ContainerInfo',
  es: 'ContainerInfo'
};

export default ContainerInfo;


