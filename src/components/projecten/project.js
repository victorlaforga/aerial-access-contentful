import React from "react"
import imageWind from "../../images/Projecten_367x240px.jpg"


const Project = () => {
return (
<section class="project-block">

    <div className="project-block--container container">
        <div className="project-block--textImage project-element">
            <h2>Wind</h2>
            <p>

    
De duurzame windindustrie heeft een enorme groei gezien in de turbinebouw. Samen zorgen we voor service, inspectie en onderhoud aan de windturbines…</p>
            <img src={imageWind} alt="" />
        </div>
        <div className="project-block--text project-element">
            <p>Inspectie, onderhoud en reparatie van uw windturbines kan Aerial Access in voorzien. Wij houden de
                rotorbladen van uw windturbines in topconditie. Zowel onshore als offshore. Rope access techniek is zeer efficiënt en uitermate geschikt voor de werkzaamheden aan wind- turbines.
                Wij werken uitsluitend met professionals, die zowel VCA, IRATA en GWO gecertificeerd zijn. Aerial Access
                is zich bewust van de veranderingen in de wereld op het gebied van nieuwe energie. Wij blijven ons
                ontwikkelen met de nieuwste technieken op het gebied van inspectie en montage. Door mee te groeien met
                de nieuwste ontwikkelingen en technieken zorgen wij ervoor dat we iedere opdrachtgever kunnen bedienen
                met de juiste mensen en vaardigheden.</p>
        </div>
        <div className="project-block--work project-element">
<h3>Werkzaamheden</h3>
<br/>
<div className="works">
    
    <span><span className="arrow-horizontal">>></span>Inspectie</span>

</div>
<div className="works" >
  
    <span><span className="arrow-horizontal">>></span>Schoonmaak & Onderhoud</span>

</div>
<div className="works">
   
    <span><span className="arrow-horizontal">>></span>Inspectie</span>

</div>
<div className="works">
    
    <span><span className="arrow-horizontal">>></span>Inspectie</span>

</div>
        </div>
    </div>

</section>

)
}

export default Project