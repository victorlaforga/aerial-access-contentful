import React from 'react';
import FacebookLogo from '../images/facebook-white.png';
import InstaLogo from '../images/insta-white.png';
import LinkedLogo from '../images/linkedin-white.png';

const Footer = () => {
  return (
    <section className='footer-container'>
      <div className='footer-container-blocks'>
        <div className='footer --col1'>
          <a>
            <h3>Rope access projects</h3>
          </a>
          <a href="/systems/bouw-infra/">Bouw & Infra Structuur</a>
          <a href="/systems/bouw-infra/">Wind</a>
          <a href="/systems/bouw-infra/">Maritiem</a>
          <a href="/systems/bouw-infra/">Olie & Gas</a>
        </div>
        <div className='footer --col2'>
          <a href=''>
            <h3>AREIAL ACCESS SYSTEMS</h3>
          </a>
          <a href="/systems/bouw-infra/">Bouw & Infra Structuur</a>
          <a href="/systems/industrie/">Industrie</a>
          <a>Advies & Service</a>
          <br />
          <a href='/producten/'>
            <h3>Producten</h3>
          </a>
          <a href="/producten/">Railsysteem</a>
          <a href="/producten/">Davids- & Deviation Arm</a>
          <a href="/producten/">Ankerpoints</a>
        </div>
        <div className='footer --col3'>
          <a href="/emergency/">
            <h3>Emergency Response Team</h3>
          </a>
          <br />
          <a href="/trainingen/">
            {' '}
            <h3>Trainigen</h3>
          </a>
        </div>
        <div className='footer --col4'>
          <a href="/contact/">
            {' '}
            <h3>Contact</h3>
          </a>
          <a>Trawlerkade 60</a>
          <a>1976 CC IJmuiden</a>
          <a>+31 255500392</a>
          <a href='mailto:info@aerial-access.com'>info@aerial-access.com</a>
          <div className='social-icons footer'>
           <a href="/emergency/"> <img src={FacebookLogo} alt='' /></a>
           <a href="/emergency/"> <img src={InstaLogo} alt='' /></a>
           <a href="/emergency/"> <img src={LinkedLogo} alt='' /></a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
