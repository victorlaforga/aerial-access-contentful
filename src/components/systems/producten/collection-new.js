import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ABSLogo from '../../../images/companies/abs-logo.png';
import HarkenLogo from '../../../images/companies/harken-industrial_logo.png';
import SEPLogo from '../../../images/companies/sep.png';
import SkylotecLogo from '../../../images/companies/skylotec.png';
import XSLogo from '../../../images/companies/xs-logo.png';

const CollectionNew = (props) => {
  const { categories } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return  (
    <>
    <section className='product-collections'>
      <a className="categorie_container" href="/">
      <div>
      <h1>Rail systeem</h1>
      <p>Rope Access-rails van Aerial-Access maken het mogelijk dat meerdere rope access medewerkers snel en efficiënt kunnen traverseren zonder de noodzaak van rigging en de-rigging. (abseil rail)</p>
      <a href="">ontdek rail systeem</a>
      <img src="//images.ctfassets.net/8cxl6mpst1xl/3cWv9g6BM83G49kqegbDn8/760704ef3f14c2b93b4be055ef8481cf/railsystem.png" alt=""/>
      </div>
      </a>
      <a className="categorie_container" href="/">
      <div>
      <h1>Anker point
      </h1>
      <p>Abseil ankers voor rope access Abseil ankers zijn een veelzijdige oplossing om rope access mogelijk te maken. Het systeem is zo ontworpen dat het aan verschillende oppervlaktestructuren en materialen kan worden bevestigd, om een veilige toegang tot zowel interne als externe ruimten te creëren.</p>
      <a href="">ontdek rail systeem</a>
      <img src="//images.ctfassets.net/8cxl6mpst1xl/3cWv9g6BM83G49kqegbDn8/760704ef3f14c2b93b4be055ef8481cf/railsystem.png" alt=""/>
      </div>
      </a>
      <a className="categorie_container" href="/">
      <div>
      <h1>Rail systeem</h1>
      <p>Rope Access-rails van Aerial-Access maken het mogelijk dat meerdere rope access medewerkers snel en efficiënt kunnen traverseren zonder de noodzaak van rigging en de-rigging. (abseil rail)</p>
      <a href="">ontdek rail systeem</a>
      <img src="//images.ctfassets.net/8cxl6mpst1xl/3cWv9g6BM83G49kqegbDn8/760704ef3f14c2b93b4be055ef8481cf/railsystem.png" alt=""/>
      </div>
      </a>
      <a className="categorie_container" href="/">
      <div>
      <h1>Rail systeem</h1>
      <p>Rope Access-rails van Aerial-Access maken het mogelijk dat meerdere rope access medewerkers snel en efficiënt kunnen traverseren zonder de noodzaak van rigging en de-rigging. (abseil rail)</p>
      <a href="">ontdek rail systeem</a>
      <img src="//images.ctfassets.net/8cxl6mpst1xl/3cWv9g6BM83G49kqegbDn8/760704ef3f14c2b93b4be055ef8481cf/railsystem.png" alt=""/>
      </div>
      </a>
    </section>
    <div className="container" style={{marginBottom: 50}}>
      <h3 class="client-slider-title">OUR PARTNERS</h3>
      <Slider {...settings}>
        <div>
          <div className="client-slider-item">
            <img src={ABSLogo} />
          </div>
        </div>
        <div>
          <div className="client-slider-item">
            <img  src={HarkenLogo} />
          </div>
        </div>
        <div>
          <div className="client-slider-item">
            <img  src={SEPLogo} />
          </div>
        </div>
        <div>
          <div className="client-slider-item">
            <img src={SkylotecLogo} />
          </div>
        </div>
        <div>
          <div className="client-slider-item">
            <img src={XSLogo} />
          </div>
        </div>
      </Slider>
    </div>
    </>
  );
};

export default CollectionNew;
