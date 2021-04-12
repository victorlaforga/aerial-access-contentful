import React, { useState } from 'react';

import MobileNavPng from '../images/mobilenav.png';
import MobileNavClose from './../assets/mobile-nav-cross.svg';

const NavMobile = () => {
  const [isOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button className='mobile-menu-btn' onClick={() => setMenuOpen(!isOpen)}>
        {isOpen ? (
          <MobileNavClose className='mobile-nav' />
        ) : (
          <img className='mobile-nav' src={MobileNavPng} />
        )}
      </button>
      {isOpen ? (
        <section className='nav-container-mobile mobile'>
          <div>
            <a href='/' className='orange-nav'>
              ROPE ACCESS PROJECT
            </a>
            <hr />

            <h2>AERIAL ACCESS SYSTEM</h2>
            <a href='/'>Bouw & infra structuur</a>
            <a href='/'>Industrie</a>
            <a href='/'>Advies & service</a>
            <a href='/'>Producten</a>
            <hr />
            <a href='/' className='orange-nav'>
              Emergency responseteam
            </a>
            <hr />
            <a href='/' className='orange-nav'>
              Aerial access training
            </a>
            <hr />
            <a href='/' className='orange-nav'>
              Over ons
            </a>
            <hr />
            <a href='/' className='orange-nav'>
              Contact
            </a>
            <hr />
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavMobile;
