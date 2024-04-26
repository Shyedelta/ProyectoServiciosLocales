import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerF, InfoWindowF, Polyline, useLoadScript } from "@react-google-maps/api";

function Map({ empresa, coords, controlOff, setModalVisible }) {
  const [activeMarker, setActiveMarker] = useState(null);
  const [animateMarker, setAnimateMarker] = useState(false);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [directions, setDirections] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQTmH4sZjvUcHvS18ngof48-wJIcN4sFo"
  });
  const center = {
    lat: parseFloat(empresa.ubicacion.latitud),
    lng: parseFloat(empresa.ubicacion.longitud)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateMarker(true);
    }, 700);

    if (coords && coords.latitude && coords.longitude) {
      setMarkerPosition({ lat: parseFloat(coords.latitude), lng: parseFloat(coords.longitude) });
      if (setModalVisible) {
        setModalVisible(false);
      }
    } else if (isLoaded) {
      if (setModalVisible) {
        setModalVisible(true);
      }
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: "Toledo" }, (results, status) => {
        if (status === 'OK') {
          const position = results[0].geometry.location;
          setMarkerPosition({ lat: position.lat(), lng: position.lng() });
        } else {
          console.error("Error al obtener ubicación Toledo: " + status);
        }
      });
    }

    return () => clearTimeout(timer);
  }, [coords, isLoaded, setModalVisible]);

  const handleMarkerClick = (markerId) => {
    setActiveMarker(markerId);
  };

  const handleCloseInfoWindow = () => {
    setActiveMarker(null);
  };

  const handleMarkerDragEnd = (e) => {
    setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };
  const calculateCenter = () => {
    if (markerPosition && center) {
      const lat = (markerPosition.lat + center.lat) / 2;
      const lng = (markerPosition.lng + center.lng) / 2;
      return { lat, lng };
    }
    return null;
  };

  const mapCenter = calculateCenter();
  const calculateRoute = () => {
    if (markerPosition && center) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: center,
          destination: markerPosition,
          travelMode: window.google.maps.TravelMode.DRIVING
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
    calculateRoute();
  }, [markerPosition]);


  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '100%'
          }}
          zoom={controlOff ? 12 : 12}
          center={controlOff && mapCenter || center}
          options={{
            draggable: controlOff ? true : false,
            disableDefaultUI: !controlOff
          }}
        >
          {empresa && (
            <MarkerF
              position={center}
              onClick={() => handleMarkerClick(empresa.id)}
              animation={animateMarker ? window.google.maps.Animation.DROP : null}
            >
              {activeMarker === empresa.id && (
                <InfoWindowF onCloseClick={handleCloseInfoWindow} >
                  <div className='p-1'>
                    <p className='font-bold'>{empresa.name}</p>
                    <p>{empresa.servicio}</p>
                    <p>Teléfono: {empresa.telefono}</p>
                    <p>{empresa.horario}</p>
                  </div>
                </InfoWindowF>
              )}
            </MarkerF>
          )}
          {controlOff && markerPosition && (
            <MarkerF
              position={markerPosition}
              draggable={true}
              onDragEnd={handleMarkerDragEnd}
              onClick={() => handleMarkerClick('mi-ubicacion')}
              animation={animateMarker ? window.google.maps.Animation.DROP : null}
            >
              {activeMarker === 'mi-ubicacion' && (
                <InfoWindowF position={markerPosition} onCloseClick={handleCloseInfoWindow}>
                  <div className={`${controlOff && 'min-w-[10em]'}`}>
                    <p className="font-bold">Mi Ubicación</p>
                    <p>Latitud: {markerPosition.lat.toFixed(8)}</p>
                    <p>Longitud: {markerPosition.lng.toFixed(8)}</p>
                  </div>
                </InfoWindowF>
              )}
            </MarkerF>
          )}
          {controlOff && markerPosition && directions && (
            <Polyline
              path={directions.routes[0].overview_path}
              options={{
                strokeColor: "#4285F4",
                strokeOpacity: 0.7,
                strokeWeight: 7,
              }}
            />
          )}

        </GoogleMap>

      ) : (
        <div>Error cargando el mapa</div>
      )}
    </>
  )
}

export default Map;
