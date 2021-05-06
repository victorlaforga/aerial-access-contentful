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
    const { showMenu } = this.state;
    const menuVis = !showMenu ? 'hideDiv' : '';

    return (
      <div onClick={this.toggleMenu}>
        <a href="/projecten/" className="mobileNot">
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
            <div className='hero-element-text'>
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

        {menuVis ? (
          <> </>
        ) : (
          <article className="home-hero-mobile mobile">
            <div className={`mobile container-info-mobile project`}>
              <p>
                Het gebruik van rope access is efficiënt en effectief. Door het
                gebruik van gespecialiseerde rope access technieken zijn wij in
                staat op moeilijke toegankelijke locaties werkzaamheden uit te
                voeren.
              </p>
              <a href='/projecten/'>projecten</a>
            </div>
          </article>
        )}
        </a>
      </div>
    );
  }
}

export default HeroMain;
