import React from 'react';
import Logo from '../images/logo.png';

const Navigation = () => {
  return (
    <header className='nav-container'>
      <div className='navigation container'>
        <img className='Logo' src={Logo} alt='logo-aerial-access' />
        <nav>
          <a href="./projecten">Project</a>
          <a className="/systems" className='nav-system' href=''>
            system
          </a>
          <a href="">Emergency</a>
          <a href=''>Trainingen</a>
          <a href=''>Over ons</a>
          <a href=''>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
