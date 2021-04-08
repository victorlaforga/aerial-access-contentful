import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import SystemHomeHero from './systems/system-home-menu'
import Footer from './footer';
import CopyrightFooter from './copyright-footer';
import NavMobile from './nav-mobile';

const StyledLayout = {
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '100%',
};

const LayoutSystemsHome = ({ children }) => {
  return (
  


    <div style={StyledLayout}>
      <Navigation />
      <NavMobile />
    
  
      <Banner />
<SystemHomeHero />
      <Footer />
      <CopyrightFooter /> 
    </div>
  );
};

export default LayoutSystemsHome;
