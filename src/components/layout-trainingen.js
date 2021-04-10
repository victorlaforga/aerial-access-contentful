import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import CopyrightFooter from './copyright-footer';
import TrainingenBanner from '../components/trainingen/trainingen-banner';
import IntroOptionTrainingen from '../components/trainingen/intro-emergency';
import TrainingBlock from '../components/trainingen/training-block';
import NavMobile from './nav-mobile';

const StyledLayout = {
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '100%',
};

const LayoutTrainingen = () => {
  return (
    <div style={StyledLayout}>
      <Navigation />
      <NavMobile />
      <Banner />
      <TrainingenBanner />
      <IntroOptionTrainingen />
      <TrainingBlock id='trainingBlock_1' />
      <TrainingBlock id='trainingBlock_2' />
      <TrainingBlock id='trainingBlock_3' />
      <TrainingBlock id='trainingBlock_4' />
      <Footer />
      <CopyrightFooter />
    </div>
  );
};

export default LayoutTrainingen;
