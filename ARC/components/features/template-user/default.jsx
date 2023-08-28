import React from 'react'
import { useAppContext } from 'fusion:context'
import { useContent } from 'fusion:content'

const  TemplateUser = (props) => {
  const { globalContent } = useAppContext()
  console.log(globalContent);

  // const response = useContent({
  //   source: 'content-nota',
  //   query: {
  //     website_url: '/Sobre-mi-yc/perfil-yc/yessicach/',
  //   },
  // })
  // console.log(response);
  //const response = {};

  return (
    <div className="about-container">
      <div className="about-header text-center">
        <h1 className="about-title display-4">{globalContent?.headlines?.basic}</h1>
        <h3 >{globalContent?.taxonomy?.primary_section?.path}</h3> 
        <strong>{globalContent?.publish_date}</strong> 
      </div>
      <div className="about-content">
        {globalContent?.content_elements.map((element, index) => {
          if (element.type === 'text') {
            return <p key={index} className="about-text lead">{element.content}</p>;
          } else if (element.type === 'image') {
            return <img key={index} src={element.url} alt="" className="about-image img-fluid" />;
          }
          return null; // Otra opción o tipo de contenido no manejado
        })}
      </div>
    </div>
  );
};

TemplateUser.label = {
  en: 'Template User',
  es: 'Plantilla de usuario',
};

export default TemplateUser;