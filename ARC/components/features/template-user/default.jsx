import React from 'react';
import { useAppContext } from 'fusion:context';
import { useContent } from 'fusion:content';

const TemplateUser = (props) => {
  const { globalContent } = useAppContext();
  const formattedDate = globalContent?.publish_date 
        ? new Date(globalContent.publish_date).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        : '';
  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < globalContent.content_elements.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
      

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-10 offset-md-2">
          <div className="shadow-none border-none">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <button className="btn justify-content-start  btn-link " onClick={handlePreviousImage}>
                  Anterior
                </button>
                <button className="btn justify-content-end  btn-link" onClick={handleNextImage}>
                  Siguiente
                </button>
              </div>
              <h5 className="card-title">{globalContent?.headlines?.basic}</h5>
              <p className="card-text">
                <small className="text-muted text-primary ">Publicado {formattedDate}</small>
              </p>
              {globalContent?.content_elements.map((element, index) => {
                if (element.type === 'text') {
                  return <p key={index} className="card-text font-monospace ">{element.content}</p>;
                }
                return null;
              })}
            </div>
            
            {globalContent?.content_elements.map((element, index) => {
              if (element.type === 'image') {
                return <img key={index} src={element.url} alt="" className="card-img-top px-3" />;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

TemplateUser.label = {
  en: 'Template User',
  es: 'Plantilla de usuario',
};

export default TemplateUser;

