import React from 'react';
import Doublearrow from '../assets/arrowupside.svg';
import LogoMobileHero from '../assets/logo-diensen_project.svg';
const HeroMain = () => {
  return (
    <div className='hero-element'>
      <article>
        <div className='hero-element-titel'>
          <Doublearrow fill='#73A400' />

          <h2 className='hero-element-titel__h2'>Rope access project</h2>
          <img className="mobile hero-logo" src={LogoMobileHero} />
        </div>
        <div className='hero-element-text '>
          <p>
            Het gebruik van rope access is efficiënt en effectief. Door het
            gebruik van gespecialiseerde  rope access technieken zijn wij in
            staat op moeilijke toegankelijke locaties werkzaamheden uit te
            voeren.{' '}
          </p>
        </div>
      </article>
      <div className='hero-element-image'>
        <a href='' className='hero-element-image__link'>
          Projecten
        </a>
      </div>
    </div>
  );
};

export default HeroMain;
