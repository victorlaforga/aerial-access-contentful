import React, { Component } from 'react';

import LogoMobileHero from '../assets/logo-diensen_project.svg';

class HeroMain extends Component {
  state = { showMenu: false };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };

  render() {
    const { showMenu } = this.state; // that will make your code readable
    const menuVis = !showMenu ? 'hideDiv' : ''; // use positive

    return (
      <div onClick={this.toggleMenu}>
        <div className='hero-element'>
          <article>
            <div className='hero-element-titel'>
              <LogoMobileHero
                className='desktop-hero-logo projecten-logo'
                fill='#73a400'
              />
              <LogoMobileHero
                className='mobile-hero-logo mobile'
                fill='#73a400'
              />
              <span className='mobile-hero-button'>
                <span>{'>'}</span>
              </span>
            </div>
            <div className='hero-element-text '>
              <p>
                Het gebruik van rope access is efficiënt en effectief. Door het
                gebruik van gespecialiseerde rope access technieken zijn wij in
                staat op moeilijke toegankelijke locaties werkzaamheden uit te
                voeren.
              </p>
            </div>
          </article>
          <div className='hero-element-image'>
            <a href='/projecten/' className='hero-element-image__link'>
              Projecten
            </a>
          </div>
        </div>
        <article className={menuVis}>
          <div className={`mobile container-info-mobile project`}>
            <p>
              Het gebruik van rope access is efficiënt en effectief. Door het
              gebruik van gespecialiseerde rope access technieken zijn wij in
              staat op moeilijke toegankelijke locaties werkzaamheden uit te
              voeren.
            </p>
            <a href=''>projecten</a>
          </div>
        </article>
      </div>
    );
  }
}

export default HeroMain;
