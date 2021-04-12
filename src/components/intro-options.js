import React from 'react';

const IntroOption = () => {
  const hangleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  return (
    <section className='intro-option'>
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
          <span>
            Voor elk project wordt een zorgvuldige planning en gedocumenteerde
            risicoinventarisatie gemaakt.
          </span>
        </div>
        <div className='intro-option--links'>
          <a
            className='introOption'
            onClick={() => hangleClick('95a8fed2-f08a-5be3-bdaa-ba2ecf7f8708')}
          >
            Bouw & Infrastructuur
          </a>
          <a
            className='introOption'
            onClick={() => hangleClick('95a8fed2-f08a-5be3-bdaa-ba2ecf7f8708')}
          >
            Wind
          </a>
          <a
            className='introOption'
            onClick={() => hangleClick('95a8fed2-f08a-5be3-bdaa-ba2ecf7f8708')}
          >
            Maritiem
          </a>
          <a className='introOption' href=''>
            Olie & Gas
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroOption;
