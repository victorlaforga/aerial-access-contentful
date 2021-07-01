import React from 'react';
import RiskLogo from '../../images/risk-safety.png';
import VCAImg from '../../images/vca.png';

const FooterEmergency = () => {
return (
<section className='footer-project emergency'>
    <div className="container">
        <div className="imagesLogo">
       <img src={RiskLogo} alt=""/> 
       <img src={VCAImg} alt=""/>
       </div>
        <div className="footer-emergency-content">
            <h2>
                Partner
            </h2>
            <p>
            Wil je een van deze trainingen volgen of wil je meer informatie over een cursus?
Neem dan contact op met onze partner in opleidingen.
<br />
ITRA Founding sponsor

RESQ industry & outdoor behoord tot een van de eerste trainingsbedrijven in Europa met een gecertificeerde ITRA instructeur en examinator. Wij verzorgen verscheidende ITRA programma’s. <br /> <br />
“De International Technical Rescue Association is een wereldwijde non profit organisatie die voorziet in wereldwijde erkenning voor reddingswerkers en instructeurs in een groot aantal verschillende technische reddingsdisciplines. (www.itra.international)
<br /> <br /> 
info@risksafety.nl <br /> 
06-24470147</p>
        </div>
        <div></div>
    </div>
</section>
);
};

export default FooterEmergency;