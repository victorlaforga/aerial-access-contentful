import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import CopyrightFooter from './copyright-footer';
import ContactBanner from './contact/contact-banner';
import ContactMain from './contact/contact-page';
import NavMobile from './nav-mobile';

const StyledLayout = {
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '100%',
};

const ContactLayout = () => {
  return (
    <div style={StyledLayout}>
      <Navigation />
      <NavMobile />
      <Banner />
<ContactBanner />
<ContactMain />
      <Footer />
      <CopyrightFooter />
    </div>
  );
};

export default ContactLayout;