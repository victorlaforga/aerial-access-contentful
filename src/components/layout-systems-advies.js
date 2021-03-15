import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import AdviesBanner from './systems/advies-service/banner-advies';
import MainPageAdvies from './systems/advies-service/advies-main';



const StyledLayout = {
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '100%',
};


const LayoutSystemsAdvies = ({ projects, children }) => {
  return (
    <div style={StyledLayout}>
      <Navigation />
      <Banner />
      <AdviesBanner />
 <MainPageAdvies />
      <Footer />
    </div>

  );
};

export default LayoutSystemsAdvies;