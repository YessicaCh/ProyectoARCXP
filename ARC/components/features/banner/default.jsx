import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <div className="banner bg-dark text-center py-5">
      <div className="container">
        <h1 className="display-4 text-white">
          Te explico cómo me hubiese gustado que me explicaran
        </h1>
      </div>
    </div>
  );
};

Banner.label = {
  en: 'Banner',
  es: 'Banner'
};

export default Banner;
