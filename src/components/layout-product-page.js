import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import SingleProduct from './systems/producten/product-page';
import CopyrightFooter from './copyright-footer';

const StyledLayout = {
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '100%',
};

const LayoutProductPage = ({ product }) => {
  return (
    <div style={StyledLayout}>
      <Navigation />
      <Banner />
      <SingleProduct {...product} />
      <Footer />
      <CopyrightFooter />
    </div>
  );
};

export default LayoutProductPage;
