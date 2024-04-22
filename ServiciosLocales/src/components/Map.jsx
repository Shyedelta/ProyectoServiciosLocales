import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, MarkerF, useLoadScript, Polyline, InfoWindowF } from "@react-google-maps/api";

function Map({ empresa, controlOf, coords }) {
  const [activeMarker, setActiveMarker] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [travelMode, setTravelMode] = useState("DRIVING");
  const polylineRef = useRef(null); // Referencia a la Polyline

  const GOOGLE_MAP_API_KEY = "AIzaSyBQTmH4sZjvUcHvS18ngof48-wJIcN4sFo";

  const center = {
    lat: parseFloat(empresa.Ubicacion.latitud),
    lng: parseFloat(empresa.Ubicacion.longitud)
  };

  const lineCoordinates = coords ? [center, { lat: coords.latitude, lng: coords.longitude }] : null;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });

  useEffect(() => {
    if (coords && map) {
      map.panTo({ lat: coords.latitude, lng: coords.longitude });
      setCurrentLocation({ lat: coords.latitude, lng: coords.longitude });
      calculateRoute();
    }
  }, [coords, map]);

  const handleMarkerClick = (markerId) => {
    setActiveMarker(markerId);
  };

  const handleCloseInfoWindow = () => {
    setActiveMarker(null);
  };

  const onLoad = (map) => {
    setMap(map);
  };

  const handleModeChange = (event) => {
    setTravelMode(event.target.value);
  };

  const travelModeColors = {
    DRIVING: "#FF0000",
    WALKING: "#00FF00",
    BICYCLING: "#0000FF",
    TRANSIT: "#FFFF00"
  };

  const calculateRoute = () => {
    if (map && coords) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: { lat: coords.latitude, lng: coords.longitude },
          destination: center,
          travelMode: travelMode,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error("Error al obtener la ruta:", status);
          }
        }
      );
    }
  };

  useEffect(() => {
    if (directions && polylineRef.current) {
      polylineRef.current.setMap(null); // Eliminar la ruta anterior
    }
    if (directions && directions.routes[0].overview_path) {
      const color = travelModeColors[travelMode]; // Obtener el color correspondiente al modo de viaje
      const newPolyline = new window.google.maps.Polyline({
        path: directions.routes[0].overview_path,
        strokeColor: color ? color : "#FF0000", 
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map
      });
      polylineRef.current = newPolyline;
    }
  }, [directions, map, travelMode]);

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%', borderRadius: "1em" }}
          zoom={15}
          center={center}
          onClick={handleCloseInfoWindow}
          onLoad={onLoad}
          options={controlOf ? {
            controlSize: 20,
            draggable: true,
            clickableIcons: true,
            disableDefaultUI: false,
          } : {
            controlSize: 0,
            draggable: false,
            clickableIcons: false,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.DEFAULT
            },
            disableDefaultUI: true
          }}
        >
          <select id="mode" onChange={handleModeChange} style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }} value={travelMode}>
            <option value="DRIVING">Driving</option>
            <option value="WALKING">Walking</option>
            <option value="BICYCLING">Bicycling</option>
            <option value="TRANSIT">Transit</option>
          </select>

          {lineCoordinates && (
            <Polyline
              path={lineCoordinates}
              options={{
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2,
              }}
            />
          )}

          <MarkerF
            position={center}
            title={empresa.NameNegocio}
            onClick={() => handleMarkerClick(empresa.id)}
          >
            {activeMarker === empresa.id && (
              <InfoWindowF
                onCloseClick={handleCloseInfoWindow}
                style={{ width: "20em" }}
              >
                <div>
                  <p>{empresa.NameNegocio}</p>
                  <p>{empresa.TipoServicio}</p>
                  <p>Teléfono: {empresa.Telefono}</p>
                  <p>{empresa.Horario}</p>
                </div>
              </InfoWindowF>
            )}
          </MarkerF>

          {currentLocation && (
            <MarkerF
              position={currentLocation}
              icon={{
                url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
              }}
            />
          )}

        </GoogleMap>
      ) : null}

    </>
  );
}

export default Map;
