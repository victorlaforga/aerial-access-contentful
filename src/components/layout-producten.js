import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import ProductenBanner from './systems/producten/producten-banner';
import ProductenPage from './systems/producten/collection';
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

const LayoutSystemsProducten = ({ categories, children }) => {
  return (
    <div style={StyledLayout}>
      <Navigation />
      <NavMobile />
      <Banner />
      <ProductenBanner />
      <ProductenPage
        {...{
          categories: categories,
        }}
      />
      <Footer />
      <CopyrightFooter />
    </div>
  );
};

export default LayoutSystemsProducten;
