import React from 'react';
import GoogleMapReact from 'google-map-react';

const googleMapKey = process.env.GATSBY_GOOGLE_MAP_KEY;

const Marker = ({ text }) => <div>{text}</div>;

const ContactMap = (props) => {
  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  const zoom = 11;

  return (
    <div className='contacts-map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={59.955413} lng={30.337844} text='My Marker' />
      </GoogleMapReact>
    </div>
  );
};

export default ContactMap;
