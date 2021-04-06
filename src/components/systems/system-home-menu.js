
import React from 'react';
import HeroMain from '../hero-main-component';
import AerialAccess from '../../images/systems-home2.png';

const SystemHomeHero = () => {
  return (
    <section className='hero systems'>
      <div className='container container-systems'>
        <img id="system-home-logo" src={AerialAccess} />

        <div className='hero--main'>
          <HeroMain />
          <HeroMain />
          <HeroMain />
          <HeroMain />
        </div>
      </div>
    </section>
  );
};

export default SystemHomeHero;
