import React from 'react';
import image1 from '../../images/Emergency responce team_367x440px.jpg';
import image2 from '../../images/Emergency responce team_367x440px2.jpg';

const EmergencyMain = () => {
return (
<section className='emergency-main-page'>
    <div className="container">
        <div className="emergency-content">
            <h2>Bij werkzaamheden op hoogte, diepte en/of besloten ruimtes raden  wij een Emergency Response Team
                (stand-by reddingteam) aan. </h2>
            <p>
                Ons reddingsteam bestaat uit goed opgeleide en gecertificeerde technici die slachtoffers op moeilijk
                toegankelijke plaatsen kunnen bereiken, stabiliseren en naar een veilige locatie brengen. Daar dragen
                wij de verdere zorg over aan de hulpdiensten. Onderhoud van installaties is noodzakelijk voor het behoud
                en duurzaamheid ervan. Iedere dag dat een installatie uit bedrijf is, betekent geen productie.
                Daarom wilt u natuurlijk dat uw stop zo snel en efficiënt mogelijk wordt voltooid.
                Tijdens zo’n proces zijn er veel (externe) mensen bij betrokken en onder grote tijdsdruk moeten er veel
                werkzaamheden worden verricht. Een pittige opgave!</p>
            <p>
                Wij kunnen stand-by staan tijdens een shut-down of turn-around van bij bepaalde kritische en complexe
                activiteit voor de totale bedrijfsvoering, waarbij u een reddingsteam stand-by wil hebben. Daarnaast
                kunnen
                wij voor aanvang van werkzaamheden adviseren waar knelpunten zitten m.b.t. mogelijke (val-)gevaren en de
                consequenties voor een eventuele redding. Wordt er op grote hoogte gewerkt of gebruik gemaakt van
                valbeveiliging op moeilijk bereikbare plaatsen dan kan het Emergency Response Team van Aerial Access
                ondersteunen en toezicht houden. Onze specialisten kunnen direct optreden wanneer de melding van een
                incident bij het team binnenkomt. Het redden uit besloten ruimtes zoals opslagtanks en silo’s, is één
                van de meest risicovolle reddingen. Er kan een gevaarlijke atmosfeer aanwezig zijn, de kleine ingangen
                bemoeilijken
                het vluchten en maken het lastig een slachtoffer te bevrijden.</p>
                <p>Het team is inzetbaar op plaatsen waar hulpdiensten niet kunnen komen, met name waar het gaat om situaties op
            hoogte en in diepte.</p>
        <p>Ons Emergency Response Team beschikt over de volgende kwalificaties: <br/>
            <span className="bold">IRATA*</span> en/of <span className="bold">ITRA**</span> (level I t/m III); <br/>
           <span className="bold">ITLS***</span> of in het bezig van een International First Aid-certificaat. <br/>
           <span className="bold">VOL-VCA****</span></p>
        <div className="links-emergency"><span>*</span> Industrial Rope Access Trade Association (https://irata.org) <br/>
        <span>**</span> International Technical Rescue Association (https://itra.international) <br/>
        <span>***</span> International Trauma Life Support (https://www.itrauma.org) <br/>
        <span>***</span> VCA staat voor Veiligheid, Gezondheid en Milieu (VGM) Checklist Aannemers (www.vca.nl) <br/>
        </div>
        </div>
        <div className="emergency-images">
<img src={image1} alt="" />
<img src={image2} alt="" />
    </div>
    </div>
 
    
</section>
);
};

export default EmergencyMain;