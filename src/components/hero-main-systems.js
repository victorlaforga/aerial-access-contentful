import React from 'react';
// import Doublearrow from '../assets/arrowupside.svg';
import LogoMobileHeroSystems from '../assets/logo-diensten_system.svg';

const HeroMainSystems = () => {
return (
<div>
  <div className='hero-element'>
    <article>
      <div className='hero-element-titel'>

        <LogoMobileHeroSystems className="desktop-hero-logo" fill="#FF7300" />


        <LogoMobileHeroSystems className="mobile-hero-logo mobile" fill="#FF7300" />
        <span className="mobile-hero-button systems"><span>></span></span>
      </div>

      <div className='hero-element-text'>
        <p>
          AE Systems staat voor het leveren en adviseren van gespecialiseerde permanente Rope Access Systems
          oplossingen. Bij werkzaamheden op hoogte in de bouw of industrie raden wij een permanente access systeem aan.
          Hierdoor kun je makkelijk op complexe locaties werken.
        </p>
      </div>
    </article>
    <div className='hero-element-image systems'>
      <a href='/systems/' className='hero-element-image__link'>
        systemen
      </a>
    </div>
  </div>
  <div className="mobile container-info-mobile system">
    <p>Het gebruik van rope access is efficiënt en effectief. Door het gebruik van gespecialiseerde rope access
      technieken zijn wij in staat op moeilijke toegankelijke locaties werkzaamheden uit te voeren. </p>
    <a href="">projecten</a>
  </div>
</div>
);
};

export default HeroMainSystems;