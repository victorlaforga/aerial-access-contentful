import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import SystemHomeHero from './systems/system-home-menu'
import Footer from './footer';

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
      <Banner />
<SystemHomeHero />
      <Footer />
    </div>
  );
};

export default LayoutSystemsHome;
