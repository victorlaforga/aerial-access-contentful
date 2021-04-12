import React from 'react';
import IasLogo from '../../images/logo-ias.png'
const FooterProject = () => {
return (
<section className='footer-project'>
    <div className="container">
    <img className="ias-logo" src={IasLogo}/>
        <div className="footer-project-content">
            <h2>
                Partner
            </h2>
            <p>
                Samen met onze partner Industrial Access Services ondersteunen wij u daar proffesioneel bij. Naast het leveren van onze rope access-materialen en gereedschappen, adviseren wij klanten bij het inzetten van het juiste materiaal. Hun jarenlange ervaring garandeert u een deskundig advies.</p>
        </div>
        <div></div>
    </div>
</section>
);
};

export default FooterProject;