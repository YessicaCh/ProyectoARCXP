import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContainerInfo = () => {
  return (
    <div className="container-fluid bg-light "> {/* Agregar la clase de container */}
       <div className="row justify-content-center">
        <div className="col-md-10 offset-md-2">
          <div className="row align-items-center ">
            <div className="col-lg-5 text-center">
              <div className="circle">
                <img
                  className="img-fluid rounded-circle my-3"
                  src="https://avatars.githubusercontent.com/u/29363370?s=400&u=c99cc21b24124176897f53ce4b8562f0e48042f0&v=4"
                  alt="Yessica Chuctaya"
                  width="100"
                  height="100"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="container-name">
                <a href="http://localhost/pf/?_website=rpalatam">Yessica Chuctaya</a>
              </div>
              <p className="mb-0 text">Desarrolladora Back-end</p>
              <ul className="social-list list-inline">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/yessica-zamata-4abb02aa/" target="" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/YessicaCh" target="" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="mailto:yessica.chuctaya@ucsp.edu.pe">
                    <FaEnvelope /> Gmail
                  </a>
                </li>
              </ul>
            </div>
          </div>
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

// import React from 'react';
// // import './style.css';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// const ContainerInfo = () => {
//   return (
//     <div className="container-info container-fluid bg-light ">
//       <div className="row align-items-center ">
//         <div className="col-lg-5 text-center ">
//           <div className="circle ">
//             <img
//               className="img-fluid rounded-circle my-3"
//               src="https://avatars.githubusercontent.com/u/29363370?s=400&u=c99cc21b24124176897f53ce4b8562f0e48042f0&v=4"
//               alt="Yessica Chuctaya"
//               width="100"
//               height="100"
//             />
//           </div>
//         </div>
//         <div className="col-lg-7 ">
//           <div className="container-name">
//               <a href="http://localhost/pf/?_website=rpalatam">Yessica Chuctaya</a>
//           </div>
//           <div className="container-info justify-content-around">
//               <p className="mb-0 text">Desarrolladora Back-end</p>
//               <ul className="social-list list-inline">
//                 <li className="list-inline-item">
//                   <a href="https://www.linkedin.com/in/yessica-zamata-4abb02aa/" target="_blank" rel="noopener noreferrer">
//                     <FaLinkedin /> LinkedIn
//                   </a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a href="https://github.com/YessicaCh" target="_blank" rel="noopener noreferrer">
//                     <FaGithub /> GitHub
//                   </a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a href="mailto:yessica.chuctaya@ucsp.edu.pe">
//                     <FaEnvelope /> Gmail
//                   </a>
//                 </li>
//               </ul>
//           </div>
//           {/* <div className="text-container">
//             <p className="mb-0 text">
//               <a href="http://localhost/pf/?_website=rpalatam">
//                 Yessica Chuctaya</a>
//             </p>
            
            
//           </div>
//           <div className="text-container">
//             <p className="mb-0 text">Desarrolladora Back-end</p>
//           </div> */}
          
//         </div>
//       </div>
//     </div>
//   );
// };

// ContainerInfo.label = {
//   en: 'ContainerInfo',
//   es: 'ContainerInfo'
// };

// export default ContainerInfo;


