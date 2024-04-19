import React, { useState } from 'react';
import otros from "../assets/otros"
import { GoogleMap, MarkerF, useLoadScript, InfoWindowF } from "@react-google-maps/api";
function Map({ empresa,controlOf }) {

  const [activeMarker, setActiveMarker] = useState(null);

  const GOOGLE_MAP_API_KEY = "AIzaSyBQTmH4sZjvUcHvS18ngof48-wJIcN4sFo";

  const center = {
    lat: parseFloat(empresa.Ubicacion.latitud),
    lng: parseFloat(empresa.Ubicacion.longitud)
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });

  const handleMarkerClick = (markerId) => {
    setActiveMarker(markerId);
  }

  const handleCloseInfoWindow = () => {
    setActiveMarker(null);
  }
  
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%', borderRadius: "1em" }}
          zoom={15}
          center={center}
          onClick={handleCloseInfoWindow}
          options={controlOf ? {
            controlSize: 0,
            draggable: false,
            clickableIcons: false,
            disableDefaultUI: true,
          } : {
            controlSize: 20,
            draggable: false,
            clickableIcons: false,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.DEFAULT
            }
          } 
        }
        >
          <MarkerF
            position={center}
            title={empresa.NameNegocio}
            onClick={() => handleMarkerClick(empresa.id)}
          >
            {activeMarker === empresa.id && (
              <InfoWindowF onCloseClick={handleCloseInfoWindow} style={{width:"20em"}}>
                <div>
                  <p>{empresa.NameNegocio}</p>
                  <p>{empresa.TipoServicio}</p>
                  <p>Teléfono: {empresa.Telefono}</p>
                  <p>{empresa.Horario}</p>
                </div>
              </InfoWindowF>
            )}
          </MarkerF>
        </GoogleMap>
      ) : null}
    </>
  );
}

export default Map;