import React from 'react';
import IasLogo from '../../images/logo-ias.png'
const FooterProject = () => {
return (
<section className='footer-project'>
    <div className="container">
    <img className="ias-logo" src={IasLogo}/>
        <div className="footer-project-content">
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

export default FooterProject;