import React from 'react';

import SubNav from './sub-nav';

import Logo from '../images/logo.png';

const Navigation = () => {
  return (
    <header className='nav-container'>
      <div className='navigation container'>
        <a href='/'>
          <img className='Logo' src={Logo} alt='logo-aerial-access' />
        </a>
        <nav>
          <ul>
            <li>
              <a href='/projecten/'>Project</a>
            </li>
            <li>
              <a id='systemnav' className='nav-system' href='/systems/'>
                system
              </a>
              <SubNav />
            </li>
            <li>
              <a href='/emergency/'>Emergency</a>
            </li>
            <li>
              <a href='/trainingen/'>Trainingen</a>
            </li>
            <li>
              <a href='/over-ons/'>Over ons</a>
            </li>
            <li>
              <a href='/contact/'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
