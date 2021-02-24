import React from 'react';
import HeroMain from './hero-main-component';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <h1 className='h1'>
          Naar welke dienst binnen
          <br /> aerial access bent u opzoek?
        </h1>

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

export default Hero;
