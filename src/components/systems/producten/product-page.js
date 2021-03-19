import React from 'react';
import Placeholder from '../../../images/product-placeholder.png';
import Placeholder2 from '../../../images/Headers_1140x390px2.jpg';

const ProductPage = () => {

return (
    
<section className='single-product-container'>
    <div className="product-page-container container">
        <div className="product-info">
            <h1 className="product-info--route">PRODUCTEN > <span>NAME OF CATEOGRY</span><span> > </span><span
                    className="product-info--route-name">Product name</span></h1>
            <p className="product-info--intro">
                <span className="product-info--oneliner">Hoogwaardig rvs railsysteem voor valbeveiliging</span>
                <br /> <br /> <br />
                Volledig vervaardigd van roestvrij staal en voorzien van een hoogwaardige meeloper is de ABS RailTrax
                een railsysteem oor valbeveiliging dat voldoet aan de hoogste eisen aan veiligheid en comfort.
            </p>
            <div className="product-info-details">
                <h2 className="product-info-title">Productinformatie ABS RailTrax</h2>
                <p>Dit hoogwaardige railsysteem van roestvrij staal voor valbeveiliging kan precies worden aangepast aan
                    het gebouw of de onderconstructie. Het beveiligt 3 personen tegelijk en kan overhead, aan wanden en
                    op vloeren worden bevestigd. Het systeem is tevens leverbaar in uiterst bestendig V4A-staal.
                </p>
                <br />
                <ul>
                    <li>> <span>DIN EN 795:2012, D</span></li>
                    <li>> <span>Beschermt 3 personen tegelijkertijd (1 persoon per meeloper)</span></li>
                    <li>> <span>Horizontaal gebruik, zijdelings of overhead mogelijk</span></li>
                    <li>> <span>Eindterminal voor het opzetten of afnemen van de meeloper</span></li>
                    <li>> <span>Bevestiging op beton of stalen constructies mogelijk</span></li>
                </ul>
            </div>
            <div className="product-info-details2">
                <h2 className="product-info-title">Railsystemen voor bouw en industrie</h2>

                <p>Railsystemen voor bouw en industrie
                    Valbeveiliging op het hoogste niveau: de ABS RailTrax aanlijnvoorziening bestaat uit een flexibel te
                    monteren railsysteem en soepel lopende meelopers. Dat zorgt voor maximaal comfort bij het werk,
                    zelfs onder extreme omstandigheden. Alle onderdelen zijn vervaardigd van roestvast staal van het
                    type V2A en kunnen indien gewenst ook uitgevoerd worden in V4A-staal. Het voordeel is dat V4A-staal
                    2 procent molybdeen bevat en daardoor beter bestand is tegens chloor. Deze staalsoort wordt dan ook
                    graag ingezet in sectoren waar gewerkt wordt met chemicaliën.


                </p>
                <p>
                    Het ABS RailTrax railsysteem beveiligt maximaal 3 personen met elk een meeloper bij het werken op
                    hoogte. Medewerkers kunnen dankzij de hoogwaardige meelopers ongehinderd langs het beveiligde
                    traject bewegen. De aanlijnvoorziening loopt ook moeiteloos langs bochten. Dankzij de praktische
                    eindterminal kan de meeloper met slechts enkele handgrepen worden afgenomen en weer opgezet. Alle
                    componenten van onze hoogwaardige valbeveiliging zijn gekeurd op basis van DIN EN 795, type D.</p>
                <p> Hebt u vragen over het ontwerp of verschillende uitvoeringen van het ABS RailTrax kabelsysteem? Neem
                    dan contact op met een van onze technische medewerkers.</p>
            </div>
        </div>
        <div className="product-media">
<div className="container-main-image">
    <img id="currentImage" className="main-image" src={Placeholder} alt=""/>
    <div className="preview-images">
    <img className="preview-image" src={Placeholder} alt=""/>
    <img className="preview-image" src={Placeholder2} alt=""/>
    <img className="preview-image" src={Placeholder} alt=""/>
    <img className="preview-image" src={Placeholder2} alt=""/>
    <img className="preview-image" src={Placeholder} alt=""/>
    <img className="preview-image" src={Placeholder2} alt=""/>
    <img className="preview-image" src={Placeholder2} alt=""/>
    <img className="preview-image" src={Placeholder} alt=""/>
    <img className="preview-image" src={Placeholder2} alt=""/>
    <img className="preview-image" src={Placeholder} alt=""/>

    </div>
    
</div>
<div class="content-block-systems__buttons"><a href="">ADVIES & SERVICES</a><a href="">PDF FACTSHEET</a></div>
        </div>
    </div>

</section>
);
};

export default ProductPage;