// import React from 'react'

// export default ({
//   children,
//   contextPath,
//   deployment,
//   CssLinks,
//   Fusion,
//   Libs,
//   MetaTags
// }) =>
//   <html>
//     <head>
//       <title>Fusion Article</title>
//       <MetaTags />
//       <Libs />
//       <CssLinks />
//       <link 
//         rel='icon' 
//         type='image/x-icon' 
//         href={deployment(`${contextPath}/resources/favicon.ico`)} />  
//     </head>
//     <body>
//       <div id='fusion-app'>
//         {children}
//       </div>
//       <Fusion />
//     </body>
//   </html>


import React from 'react';
import '../../src/style/index.css';

export default ({
  children,
  contextPath,
  deployment,
  CssLinks,
  Fusion,
  Libs,
  MetaTags
}) => (
  <html>
    <head>
      <title>Fusion Article</title>
      <MetaTags />
      <Libs />

      {/* Agregar los enlaces CSS de Bootstrap */}
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.5.2/dist/css/bootstrap.min.css'
      />

      {/* Agregar tus enlaces CSS personalizados si es necesario */}
      <CssLinks />

      <link
        rel='icon'
        type='image/x-icon'
        href={deployment(`${contextPath}/resources/favicon.ico`)}
      />
    </head>
    <body>
      <div id='fusion-app'>
        {children}
      </div>

      {/* Agregar el script de Bootstrap (al final del cuerpo del documento) */}
      <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.5.2/dist/js/bootstrap.min.js'></script>

      <Fusion />
    </body>
  </html>
);
