import React, { Component } from 'react';
import LogoMobileHeroEmergency from '../assets/logo-diensten_ERT.svg';

class HeroMainEmergency extends Component {
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
        <a href="/emergency/">
        <div className='hero-element'>
          <article>
            <div className='hero-element-titel'>
              <LogoMobileHeroEmergency
                className='desktop-hero-logo'
                fill='#BE0000'
              />

              <LogoMobileHeroEmergency
                className='mobile-hero-logo mobile'
                fill='#BE0000'
              />
              <span className='mobile-hero-button emergency'>
                <span>{'>'}</span>
              </span>
            </div>

            <div className='hero-element-text'>
              <p>
                Het Emergency Response Team van Aerial Access staat voor het
                leveren van professionele rope rescue-specialisten aan bedrijven
                en voor hun mensen. Bij werkzaamheden op hoogte, diepte en/of in
                besloten ruimtes radden wij een standby reddingsteam aan.{' '}
              </p>
            </div>
          </article>
          <div className='hero-element-image emergency'>
            <a href='/emergency/' className='hero-element-image__link'>
              Emergency team
            </a>
          </div>
        </div>
        {menuVis ? (
          <> </>
        ) : (
          <article className="mobile home-hero-mobile">
            <div className={`mobile container-info-mobile emergency`}>
              <p>
                Het gebruik van rope access is efficiënt en effectief. Door het
                gebruik van gespecialiseerde rope access technieken zijn wij in
                staat op moeilijke toegankelijke locaties werkzaamheden uit te
                voeren.
              </p>
              <a href='/emergency/'>Meer info</a>
            </div>
          </article>
        )}
        </a>
      </div>
    );
  }
}

export default HeroMainEmergency;
