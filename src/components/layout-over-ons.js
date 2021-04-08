import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import CopyrightFooter from './copyright-footer';
import OverOnsBanner from '../components/over-ons/over-ons-banner';
import OverOnsIntro from '../components/over-ons/over-ons-intro';
import OverOnsMain from '../components/over-ons/over-ons-main';
import NavMobile from './nav-mobile';

const StyledLayout = {
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '100%',
};


const OverOns = ({ }) => {
  return (
    <div style={StyledLayout}>
      <Navigation />
      <NavMobile />
      <Banner />
<OverOnsBanner />
<OverOnsIntro />
<OverOnsMain />
      <Footer />
      <CopyrightFooter />
    </div>

  );
};

export default OverOns;