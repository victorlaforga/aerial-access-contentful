import React, { Component } from 'react';





class HeroSystemsIndustrie extends Component {
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
    <div className='hero-element system-hero'>
        <article>
            <div className='hero-element-titel'>
                <h1 className="titel-hero-systems">industrie</h1>

                <span className='mobile-hero-button'>
                    <span>{'>'}</span>
                </span>
            </div>
            <div className='hero-element-text'>
                <p>
                AE Systems staat voor het leveren en adviseren van gespecialiseerde permanente Rope Access Systems oplossingen. Bij werkzaamheden op hoogte in de bouw of industrie raden wij een permanente access systeem aan. Hierdoor kun je makkelijk op complexe locaties werken.
                </p>
            </div>
        </article>
        <div className='hero-element-image systems industrie'>
            <a href='/projecten/' className='hero-element-image__link'>
                Bekijk hier
            </a>
        </div>
    </div>

    {menuVis ? <> </> : (<article>
        <div className={`mobile container-info-mobile systems industrie`}>
            <p>
            AE Systems staat voor het leveren en adviseren van gespecialiseerde permanente Rope Access Systems oplossingen. Bij werkzaamheden op hoogte in de bouw of industrie raden wij een permanente access systeem aan. Hierdoor kun je makkelijk op complexe locaties werken.
            </p>
            <a href='/projecten/'>bekijk meer</a>
        </div>
    </article>) }


</div>
);
}
}

export default HeroSystemsIndustrie;