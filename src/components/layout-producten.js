import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import ProductenBanner from'./systems/producten/producten-banner';
import ProductenPage from './systems/producten/collection';


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
    </div>

  );
};

export default LayoutSystemsProducten;