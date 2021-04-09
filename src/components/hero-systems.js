import React, { Component } from 'react';





class HeroSystems extends Component {
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
                <h1 className="titel-hero-systems">BOUW EN INFRA</h1>

                <span className='mobile-hero-button'>
                    <span>{'>'}</span>
                </span>
            </div>
            <div className='hero-element-text'>
                <p>
                    Het gebruik van rope access is efficiënt en effectief. Door het gebruik van gespecialiseerde rope
                    access technieken zijn wij in staat op moeilijke toegankelijke locaties werkzaamheden uit te voeren.
                </p>
            </div>
        </article>
        <div className='hero-element-image systems bouwEnInfra'>
            <a href='/projecten/' className='hero-element-image__link'>
                Bekijk hier
            </a>
        </div>
    </div>

    {menuVis ? <> </> : (<article>
        <div className="systems-mobile-toggle-info">
        <p>
                Het gebruik van rope access is efficiënt en effectief. Door het
                gebruik van gespecialiseerde rope access technieken zijn wij in
                staat op moeilijke toegankelijke locaties werkzaamheden uit te
                voeren.
            </p>
        </div>
        <div className={`mobile container-info-mobile systems bouwEnInfra`}>
            
            <a href='/projecten/'>bekijk meer</a>
        </div>
    </article>) }


</div>
);
}
}

export default HeroSystems;