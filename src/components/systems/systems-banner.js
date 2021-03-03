import React from 'react';
import SVGWhite from '../../images/logo-diensten_training_wit.svg';


const SystemBanner = () => {
  return (
    <section className='banner-page systems'>
      <div className='banner-page--container container'>
        <img className='banner-page--img' src={SVGWhite} alt='' />
        <h1 className="titel-systems">
          Bouw & Infra
        </h1>
      </div>
    </section>
  );
};

export default SystemBanner;
