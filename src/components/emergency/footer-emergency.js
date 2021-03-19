import React from 'react';
import RiskLogo from '../../images/risk-safety.png'
const FooterEmergency = () => {
return (
<section className='footer-project emergency'>
    <div className="container">
       <img src={RiskLogo} alt=""/>
        <div className="footer-emergency-content">
            <h2>
                Verhuur
            </h2>
            <p>
                Boor- en raffinaderij situaties hebben een groot deel van de werklocaties op hoogte. Geavanceerde
                oplossingen voor service, inspectie en onderhoud aan de installaties.</p>
        </div>
        <div></div>
    </div>
</section>
);
};

export default FooterEmergency;