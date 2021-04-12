import React, { Component } from 'react';

import LogoMobileHeroSystems from '../assets/logo-diensten_system.svg';

class HeroMainSystemsAdviesEnService extends Component {
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
        <div className='hero-element'>
          <article>
            <div className='hero-element-titel'>
          <h1 className="titelSystemsHero">advies & service</h1>
              <span className='mobile-hero-button systems'>
                <span>></span>
              </span>
            </div>

            <div className='hero-element-text'>
              <p>
              Het Emergency Response Team van Aerial Access staat voor het leveren van professionele rope rescue-specialisten aan bedrijven en voor hun mensen. Bij werkzaamheden op hoogte, diepte en/of in besloten ruimtes raden wij een standby reddingsteam aan. 
              </p>
            </div>
          </article>
          <div className='hero-element-image systems'>
            <a href='/systems/' className='hero-element-image__link'>
              bekijk hier
            </a>
          </div>
        </div>
        {menuVis ? (
          <> </>
        ) : (
          <article className="extraInfoMobile mobile">
              <div className="systemContainerMobileInfo"> <p>Het Emergency Response Team van Aerial Access staat voor het leveren van professionele rope rescue-specialisten aan bedrijven en voor hun mensen. Bij werkzaamheden op hoogte, diepte en/of in besloten ruimtes raden wij een standby reddingsteam aan. </p> </div>
            <div className={`mobile container-info-mobile system`}>
      
              <a href='/systems/'>bekijk hier</a>
   

            </div>
          </article>
        )}
      </div>
    );
  }
}

export default HeroMainSystemsAdviesEnService;
