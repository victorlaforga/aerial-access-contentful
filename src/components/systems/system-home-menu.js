
import React from 'react';
import HeroMain from '../hero-main-component';
import aerialAccess from '../../images/logo-diensten_training_wit.svg'

const SystemHomeHero = () => {
  return (
    <section className='hero systems'>
      <div className='container container-systems'>
        <img src={aerialAccess}/>

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
