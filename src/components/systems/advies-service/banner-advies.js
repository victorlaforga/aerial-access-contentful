import React from 'react';
import SVGWhite from '../../../images/logo-diensten_training_wit.svg';



const AdviesBanner = () => {
  return (
    <section className='banner-page systems industrie'>
      <div className='banner-page--container container'>
        <img className='banner-page--img' src={SVGWhite} alt='' />
        <h1 className="titel-systems">
          Advies & Service
        </h1>
      </div>
    </section>
  );
};

export default AdviesBanner;