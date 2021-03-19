import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import ProductenBanner from'./systems/producten/producten-banner';
import ProductenPage from './systems/producten/collection';
import CopyrightFooter from './copyright-footer';


const StyledLayout = {
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '100%',
};


const LayoutSystemsProducten = ({ projects, children }) => {
  return (
    <div style={StyledLayout}>
      <Navigation />
      <Banner />
    <ProductenBanner />
    <ProductenPage />
      <Footer />
      <CopyrightFooter />
    </div>

  );
};

export default LayoutSystemsProducten;