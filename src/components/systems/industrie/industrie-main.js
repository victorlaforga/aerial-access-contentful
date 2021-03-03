import React from 'react';
import imgsystem from "../../../images/Systems_Industrie_367x440px.jpg";
import imgsystem2 from "../../../images/Systems_Industrie_367x440px2.jpg";

const MainPageIndustrie = () => {
return (
<section className='main-page-systems industrie'>
    <div className="container">
        <div className="content-block-systems">
            <p className="light">Door het monteren van de Aerial Access Rail System wordt er een veiligere en
                efficiënte toepassing gecreëerd voor inspectie en onderhoud van de
                constructie middels rope access-technieken. Hierbij is er een aanzienlijke tijdsbesparing op de
                voorbereidingen en onderhoudswerkzaamheden. </p>
            <div className="industrie-block">
                <div className="industrie-block__left">
                    <p className="bold">Onze ervaring is dat de rope access werkzaamheden in de industrie tijdrovend en
                        op sommige locaties bijna onmogelijk. Rope access is vaak de enige mogelijkheid om de
                        werkzaamheden uit te voeren. Middels een
                        permanente oplossing zullen de werkzaamheden veiliger, efficiënter en goedkoper worden
                        uitgevoerd.</p>
                    <h2>Efficiëntie en effectiviteit </h2>
                    <p>
                        Een rope access rail van Aerial Access kan bij het ontwerp meegenomen worden. Bij de
                        ontwikkeling van de bouw van een object wordt de rail gemonteerd en als de geplaatst is, kan er
                        tijdens inspecties en onderhoudwerkzaamheden aanzienlijk sneller gewerkt worden. Je kunt met
                        twee personen per segment veilig en snel werken.
                        Eenmaal gepositioneerd in de twee runners hoeven er geen handelingen meer gedaan te worden om te
                        verplaatsen. Men kan zich dan veilig en snel verplaatsen onder bijvoorbeeld een platform of
                        overspanning, waardoor er een significante tijdsbesparing is .
                        Zwaar gereedschap en materiaal kun je bevestigen aan een separate runner waardoor dit niet
                        fysiek aan de klimmer bevestigd hoeft te worden.
                    </p>
                </div>
                <div className="industrie-block__right">
                    <div>
                        <h2>Voordelen</h2>
                        <p><span>></span> Nieuwe mogelijkheden</p>
                        <p><span>></span> Estetische oplossingen</p>
                        <p><span>></span> Lage onderhouds kosten</p>
                        <p><span>></span> Lage installatie kosten</p>
                    </div>
                    <div>
                        <h2 className="industrieInfo">Voordelen</h2>
                        <p><span>></span> Nieuwe mogelijkheden</p>
                        <p><span>></span> Estetische oplossingen</p>
                        <p><span>></span> Lage onderhouds kosten</p>
                        <p><span>></span> Lage installatie kosten</p>
                    </div>
                    <div>
                        <h2 className="industrieInfo">Voordelen</h2>
                        <p><span>></span> Nieuwe mogelijkheden</p>
                        <p><span>></span> Estetische oplossingen</p>
                        <p><span>></span> Lage onderhouds kosten</p>
                        <p><span>></span> Lage installatie kosten</p>
                    </div>


                </div>
            </div>
        </div>
        <div className="content-block-systems-2">
            <img src={imgsystem} alt="" />
            <img src={imgsystem2} alt="" />
            <div className="content-block-systems__buttons">
                <a href="">advies & services</a>
                <a href="">producten</a>
            </div>
        </div>
    </div>

</section>
);
};

export default MainPageIndustrie;