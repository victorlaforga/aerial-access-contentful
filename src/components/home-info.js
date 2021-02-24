import React from 'react';
import Logo1 from '../images/GWO_Global_Wind_Organisationpng-e15871185894691.png';
import Logo2 from '../images/header-logo-1.png';
import Logo3 from '../images/opito-logo-1.png';
import Banner from '../images/Homepage_482x526px.jpg';

const HomeInfo = () => {
  return (
    <section className='home-info'>
      <div className='home-info--container container'>
        <div>
          <h2 class='h2'>
            Door het gebruik van gespecialiseerde rope access technieken zijn
            wij in staat op moeilijke toegankelijke locaties werkzaamheden uit
            te voeren.
          </h2>
          <p>
            Het doel bij het gebruik van rope access is om het werk efficiënt en
            effectief uit te voeren. Om te zorgen dat er altijd een veilig
            werksysteem wordt gehandhaafd, terwijl schade aan eigendommen of
            schade aan het milieu wordt voorkomen, worden voor elke operatie
            zorgvuldige planning en gedocumenteerde risicobeoordelingen
            uitgevoerd. Het veilig uitvoeren van onze rope access werkzaamheden
            wordt gegarandeerd door het gebruik van uitsluitend gecertificeerde
            en gekwalificeerde werknemers en materialen. Daarnaast werken wij
            volgens de internationale richtlijnen van IRATA en de Europese- en
            nationale regelgeving.
          </p>
          <div className='home-info--images'>
            <img src={Logo1} alt='' />
            <img src={Logo2} alt='' />
            <img src={Logo3} alt='' />
          </div>
        </div>
        <div>
          <img src={Banner} alt='' />
        </div>
      </div>
    </section>
  );
};

export default HomeInfo;
