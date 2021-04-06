import React from 'react';
import LogoMobileHeroEmergency from '../assets/logo-diensten_ERT.svg';

const HeroMainEmergency = () => {
  return (
    <div>
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
    <div className="mobile container-info-mobile emergency">
    <p>Het gebruik van rope access is efficiënt en effectief. Door het gebruik van gespecialiseerde rope access
      technieken zijn wij in staat op moeilijke toegankelijke locaties werkzaamheden uit te voeren. </p>
      <a href="">projecten</a>
  </div>
  </div>
  );
};

export default HeroMainEmergency;