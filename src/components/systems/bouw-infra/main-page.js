import React from 'react';
import imgsystem from "../../../images/Systems_Bouw en Infra_367x440px.jpg";

const MainPageSystems = () => {
return (
<section className='main-page-systems'>
    <div className="container">
        <div className="content-block-systems">
            <p className="intro-bouwinfra">Aerial Access systems zijn verschillende type rope access systemen die op alle denkbare plekken te
                monteren zijn zodat rope access werkzaamheden makkelijker en veiliger kan worden uitgevoerd. Deze rails
                is onderhoud vriendelijk en zijn uitermate geschikt voor de bouw en infra. Als architect, bouwer of
                gebouw eigenaar wil je natuurlijk waarborgen dat toegang tot alle locaties van je gebouw gewaarborgd is.
                Schakel ons tijdig in om  tijdens ontwerp fase mee te kunnen denken.</p>
            <div className="content-block-systems-points">
                <div>
                    <h2 className="h2">Locaties</h2>
                    <p><span>></span> Gevel Oplossingen</p>
                    <p><span>></span> Atrium oplossingen</p>
                    <p><span>></span> Plat dak</p>
                    <p><span>></span> Binnen tuinen</p>
                    <p><span>></span> Boven water werken</p>
                    <p><span>></span> Overhang</p>
                    <p><span>></span> Bruggen</p>
                    <p><span>></span> Renovaties</p>
                </div>
                <div>
                    <h2 className="h2">Bouw en infra</h2>
                    
                    <p><span>></span> Nieuwe mogelijkheden</p>
                    <p><span>></span> Estetische oplossingen</p>
                    <p><span>></span> Lage onderhouds kosten</p>
                    <p><span>></span> Lage installatie kosten</p>
                    <p><span>></span> Geen verstoring van uitzicht aan het gebouw</p>
                    <p><span>></span> Veiligheid verhogend</p>
                    <p><span>></span> Met meerdere mensen tegelijk aan het werk</p>
                    <p><span>></span> Ook moeilijk bereikbare locaties makkelijk te bereiken</p>
                    <p><span>></span>Permanent of herplatsbaar</p>
                </div>
            </div>
        </div>
        <div className="content-block-systems-2">
            <img src={imgsystem} alt="" />
            <div className="content-block-systems__buttons">
                <a href="">advies & services</a>
                <a href="">producten</a>
            </div>
        </div>
    </div>

</section>
);
};

export default MainPageSystems;