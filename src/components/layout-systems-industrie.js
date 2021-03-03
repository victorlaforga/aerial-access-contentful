import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import IndustrieBanner from './systems/industrie-banner';
import MainPageIndustrie from './systems/industrie/industrie-main'


const StyledLayout = {
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '100%',
};


const LayoutSystemsIndustrie = ({ projects, children }) => {
  return (
    <div style={StyledLayout}>
      <Navigation />
      <Banner />
      <IndustrieBanner />
<MainPageIndustrie />
      <Footer />
    </div>

  );
};

export default LayoutSystemsIndustrie;