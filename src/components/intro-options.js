import React from 'react';
import Svg1 from '../images/olieengas1.png';
import Svg2 from '../images/olieengas2.png';
import Svg3 from '../images/windmolen.png';
import Svg4 from '../images/maritiem.png';
import Svg5 from '../images/maritiem2.png';
import Svg6 from '../images/gebouw.png';

const IntroOption = () => {
  const hangleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  return (
    <section className='intro-option projects'>
      <div className='intro-option--container container'>
        <div className='intro-option--text'>
          <p>
            Door het gebruik van gespecialiseerde rope access technieken zijn
            wij in staat op moeilijke toegankelijke locaties werkzaamheden uit
            te voeren. Het voordeel van het gebruik van rope acces is de
            veiligheid en snelheid waarmee we van of naar moeilijke locaties
            kunnen komen om werk uit te voeren, vaak met minimale impact op
            andere werkzaamheden en/of omgeving.
          </p>
          <br />
          <br />
          <p>
            Voor elk project wordt een zorgvuldige planning en gedocumenteerde
            risicoinventarisatie gemaakt.
            </p>
        </div>
        <div className='intro-option--links'>
          <a
            className='introOption'
            onClick={() => hangleClick('8ae985b3-c4de-5140-9836-e6b320f41e2d')}
          >
            Bouw & Infrastructuur
          </a>
          <a
            className='introOption'
            onClick={() => hangleClick('0894ff6a-6c07-5a5a-9831-803651b4225f')}
          >
            Wind
          </a>
          <a
            className='introOption'
            onClick={() => hangleClick('ce60a490-56c2-5186-bb1b-6cbb3700271e')}
          >
            Maritiem
          </a>
          <a className='introOption' onClick={() => hangleClick('95a8fed2-f08a-5be3-bdaa-ba2ecf7f8708')}>
            Olie & Gas
          </a>
        </div>
        <div className="icons-work-project-page">
          <img src={Svg1} alt=""/>
          <img src={Svg2} alt=""/>
          <img src={Svg3} alt=""/>
          <img src={Svg4} alt=""/>
          <img src={Svg5} alt=""/>
          <img src={Svg6} alt=""/>
        
        </div>
      </div>
    </section>
  );
};

export default IntroOption;
