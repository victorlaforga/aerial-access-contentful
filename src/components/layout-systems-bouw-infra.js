import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import BannerPage from './systems/systems-banner';
import MainPageSystems from './systems/bouw-infra/main-page'
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


const LayoutSystemsBouwInfra = ({ projects, children }) => {
  return (
    <div style={StyledLayout}>
      <Navigation />
      <NavMobile />
      <Banner />
      <BannerPage />
  <MainPageSystems />
      <Footer />
      <CopyrightFooter />
    </div>

  );
};

export default LayoutSystemsBouwInfra;