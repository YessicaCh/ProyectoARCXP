
  import React from 'react';
  import ItemNota from '../item-nota/default'; // Ajusta la ruta según sea necesario
  
  const ListNotas = () => {
    const items = [
      {
        heading: 'Introduccion a python',
        date: 'ahora',
        content: 'Probemos algunos comandos simples de Python',
        smallPrint: '',
        url: 'http://localhost/Sobre-mi-yc/experiencia-yc/inicios-en-python-yessicach/?_website=rpalatam',
      },
      {
        heading: 'Sobre Yessica',
        date: 'Hace 8 dias',
        content: 'Desarrollador Back-end con mas de 2 años de experiencia programando en python...',
        smallPrint: '',
        url: 'http://localhost/Sobre-mi-yc/perfil-yc/desarrollador-back-end-2-years-yessicach/?_website=rpalatam',
      },
      {
        heading: 'Experiencia en ARC xp',
        date: 'Hace 8 dias',
        content: 'Iniciar el proceso de aprender ARC XP ha sido un viaje emocionante ...',
        smallPrint: '',
        url: 'http://localhost/Sobre-mi-yc/experiencia-yc/mi-experiencia-en-arc-xp-yessicach/?_website=rpalatam',
      },
    ];
  
    return (
      <div className='container-fluid'>
        <p className='px-3'>Listas de notas </p>
        <ItemNota items={items} />
      </div>
    );
  };
  
  export default ListNotas;
  
  