import React from 'react';
import LogoMobileHeroEmergency from '../assets/logo-diensten_ERT.svg';

const HeroMainEmergency = () => {
  return (
    <div className='hero-element'>
      <article>
        <div className='hero-element-titel'>
          
          <LogoMobileHeroEmergency className="desktop-hero-logo" fill="#BE0000"/>

    
          <LogoMobileHeroEmergency className="mobile-hero-logo mobile" fill="#BE0000"/>
         <span className="mobile-hero-button emergency"><span>></span></span>
        </div>

        <div className='hero-element-text'>
          <p>
          Het Emergency Response Team van Aerial Access staat voor het leveren van professionele rope rescue- specialisten aan bedrijven en voor hun mensen. Bij werkzaamheden  op hoogte, diepte en/of in besloten ruimtes raden wij een standby reddingsteam aan.                     </p>
        </div>
      </article>
      <div className='hero-element-image emergency'>
        <a href='/emergency/' className='hero-element-image__link'>
          Emergency team
        </a>
      </div>
    </div>
  );
};

export default HeroMainEmergency;