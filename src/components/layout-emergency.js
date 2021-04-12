import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import CopyrightFooter from './copyright-footer';
import EmergencyBanner from './emergency/emergency-banner';
import EmergencyMain from './emergency/emergency-main';
import FooterEmergency from '../components/emergency/footer-emergency';
import NavMobile from './nav-mobile';

const StyledLayout = {
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '100%',
};

const LayoutEmergency = () => {
  return (
    <div style={StyledLayout}>
      <Navigation />
      <Banner />
      <NavMobile />
      <EmergencyBanner />
      <EmergencyMain />
      <FooterEmergency />
      <Footer />
      <CopyrightFooter />
    </div>
  );
};

export default LayoutEmergency;
