
import React from 'react';
import HeroSystems from '../hero-systems';
import HeroSystemsIndustrie from '../hero-systems-industrie';
import AerialAccess from '../../images/systems-home2.png';


const SystemHomeHero = () => {
  return (
    <section className='hero systems'>
      <div className='container container-systems'>
        <img id="system-home-logo" src={AerialAccess} />

        <div className='hero--Systems'>
          <HeroSystems />
          <HeroSystemsIndustrie />
          <HeroSystems />
          <HeroSystems />
        </div>
      </div>
    </section>
  );
};

export default SystemHomeHero;
