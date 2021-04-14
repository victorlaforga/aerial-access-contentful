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
import FooterTraining from './trainingen/footer-training';
import TrainingBlock2 from './trainingen/training-block2';
import TrainingBlock3 from './trainingen/training-block3';
import TrainingBlock4 from './trainingen/training-block4';
import TrainingBlock5 from './trainingen/training-block5';
import TrainingBlock6 from './trainingen/training-block6';
import TrainingBlock7 from './trainingen/training-block7';
import TrainingBlock8 from './trainingen/training-block8';

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
      <TrainingBlock2 id='trainingBlock_2' />
      <TrainingBlock3 id='trainingBlock_3' />
      <TrainingBlock4 id='trainingBlock_4' />
      <TrainingBlock5 id='trainingBlock_5' />
      <TrainingBlock6 id='trainingBlock_6' />
      <TrainingBlock7 id='trainingBlock_7' />
      <TrainingBlock8 id='trainingBlock_8' />
      <FooterTraining />
      <Footer />
      <CopyrightFooter />
    </div>
  );
};

export default LayoutTrainingen;
