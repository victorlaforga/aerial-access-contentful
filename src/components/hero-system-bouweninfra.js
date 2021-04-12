import React, { Component } from 'react';

class HeroMainSystemsBouwEnInfra extends Component {
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
          <h1 className="titelSystemsHero">bouw & infra</h1>
              <span className='mobile-hero-button systems'>
                <span>></span>
              </span>
            </div>

            <div className='hero-element-text'>
              <p>
                AE Systems staat voor het leveren en adviseren van
                gespecialiseerde permanente Rope Access Systems oplossingen. Bij
                werkzaamheden op hoogte in de bouw of industrie raden wij een
                permanente access systeem aan. Hierdoor kun je makkelijk op
                complexe locaties werken.
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
              <div className="systemContainerMobileInfo"> <p>Het gebruik van rope access is efficiënt en effectief. Door het gebruik van gespecialiseerde  rope access technieken zijn wij in staat op moeilijke toegankelijke locaties werkzaamheden uit te voeren. </p> </div>
            <div className={`mobile container-info-mobile system`}>
      
              <a href='/systems/bouw-infra/'>bekijk hier</a>
   

            </div>
          </article>
        )}
      </div>
    );
  }
}

export default HeroMainSystemsBouwEnInfra;

