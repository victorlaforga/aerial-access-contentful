import React from 'react';
import Logo from '../images/logo.png';
import MobileNavPng from '../images/mobilenav.png';


const Navigation = () => {
  return (
    <header className='nav-container'>
      <div className='navigation container'>
        <a href="/"><img className='Logo' src={Logo} alt='logo-aerial-access' /></a>

<img className="mobile-nav" src={MobileNavPng} />
        <nav>
          <a href="/projecten/">Project</a>
          <a  className='nav-system' href='/systems/'>
            system
          </a>
          <a href='/emergency/'>Emergency</a>
          <a href='/trainingen/'>Trainingen</a>
          <a href='/over-ons/'>Over ons</a>
          <a href='/contact/'>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
