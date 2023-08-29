import React from 'react';


const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {/* <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            /> */}
            Yesita Dev 
          </a>
          <div className="navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href={`/pf/about-me/?_website=rpalatam`}>
                  Perfil
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={`/pf/comunidad-rpa-jg/?_website=rpalatam`}
                >
                  Experiencia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.label = {
  en: 'Header',
  es: 'Encabezado'
};

export default Header;
