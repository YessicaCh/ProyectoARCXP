
  import React from 'react';
  import ItemNota from '../item-nota/default'; // Ajusta la ruta según sea necesario
  
  const ListNotas = () => {
    const items = [
      {
        heading: 'List group item 1 lalala',
        date: '3 days ago',
        content: 'Some content for item 1.',
        smallPrint: 'Small print for item 1.',
        url: 'https://www.google.com',
      },
      {
        heading: 'List group item 2',
        date: '5 days ago',
        content: 'Some content for item 2.',
        smallPrint: 'Small print for item 2.',
        url: 'http://localhost/Sobre-mi-yc/perfil-yc/desarrollador-back-end-2-years-yessicach/?_website=rpalatam',
      },
      {
        heading: 'List group item 3 cvvvc',
        date: '1 week ago',
        content: 'Some content for item 3.',
        smallPrint: 'Small print for item 3.',
        url: 'http://localhost/Sobre-mi-yc/experiencia-yc/mi-experiencia-en-arc-xp-yessicach/?_website=rpalatam',
      },
    ];
  
    return (
      <div className='container-fluid'>
        <p>Listas de notas </p>
        <ItemNota items={items} />
      </div>
    );
  };
  
  export default ListNotas;
  
  