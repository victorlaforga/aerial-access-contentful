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
          <a>Bouw & Infra Structuur</a>
          <a>Wind</a>
          <a>Maritiem</a>
          <a>Olie & Gas</a>
        </div>
        <div className='footer --col2'>
          <a href=''>
            <h3>AREIAL ACCESS SYSTEMS</h3>
          </a>
          <a>Bouw & Infra Structuur</a>
          <a>Industrie</a>
          <a>Advies & Service</a>
          <br />
          <a href=''>
            <h3>Producten</h3>
          </a>
          <a>Railsysteem</a>
          <a>Davids- & Deviation Arm</a>
          <a>Ankerpoints</a>
        </div>
        <div className='footer --col3'>
          <a>
            <h3>Emergency Response Team</h3>
          </a>
          <br />
          <a>
            {' '}
            <h3>Trainigen</h3>
          </a>
        </div>
        <div className='footer --col4'>
          <a>
            {' '}
            <h3>Contact</h3>
          </a>
          <a>Trawlerkade 60</a>
          <a>1976 CC IJmuiden</a>
          <a>+31 255500392</a>
          <a href="mailto:info@aerial-access.com">info@aerial-access.com</a>
          <div className="social-icons footer">
                    <img src={FacebookLogo} alt="" />
                    <img src={InstaLogo} alt="" />
                    <img src={LinkedLogo} alt="" />

              
                </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
