import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerF, InfoWindowF, Polyline, useLoadScript } from "@react-google-maps/api";

function Map({ empresa, empresas, controlOff, setModalVisible }) {
  const [activeMarker, setActiveMarker] = useState(null);
  const [animateMarker, setAnimateMarker] = useState(false);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [directions, setDirections] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQTmH4sZjvUcHvS18ngof48-wJIcN4sFo"
  });

  const center = empresa ? {
    lat: parseFloat(empresa.ubicacion.latitud),
    lng: parseFloat(empresa.ubicacion.longitud)
  } : { lat: 39.87442386, lng: -4.03691974 };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateMarker(true);
    }, 700);

    const getStoredLocation = () => {
      const storedLocation = localStorage.getItem('markerPosition');
      if (storedLocation) {
        setMarkerPosition(JSON.parse(storedLocation));
      }
    };

    if (!markerPosition) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setMarkerPosition({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          (error) => {
            console.error("Error obteniendo ubicación:", error);
            getStoredLocation();
          }
        );
      } else {
        getStoredLocation();
      }
    }

    return () => clearTimeout(timer);
  }, [markerPosition]);

  useEffect(() => {
    if (markerPosition) {
      localStorage.setItem('markerPosition', JSON.stringify(markerPosition));
    }
  }, [markerPosition]);

  useEffect(() => {
    if (empresa) {
      calculateRoute();
    }
  }, [empresa, markerPosition]);

  const handleMarkerClick = (markerId) => {
    setActiveMarker(markerId);
  };

  const handleCloseInfoWindow = () => {
    setActiveMarker(null);
  };

  const handleMarkerDragEnd = (e) => {
    setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  const calculateRoute = () => {
    if (controlOff && !empresas && empresa && markerPosition && center && window.google?.maps) {
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
          } else if (status === window.google.maps.DirectionsStatus.ZERO_RESULTS) {
            console.warn("No se encontraron resultados para la ruta.");
          } else {
            console.error("Error al obtener la ruta:", status);
          }
        }
      );
    }
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          zoom={empresas ? 11 : 12}
          center={center}
          options={{
            draggable: controlOff ? true : false,
            disableDefaultUI: !controlOff
          }}
        >
          {empresa && empresa.ubicacion && (
            <MarkerF
              position={center}
              onClick={() => handleMarkerClick(empresa.id)}
              animation={animateMarker ? window.google.maps.Animation.DROP : null}
            >
              {activeMarker === empresa.id && (
                <InfoWindowF onCloseClick={handleCloseInfoWindow} >
                  <div className='p-1'>
                    <p className='font-bold'>{empresa.nombre}</p>
                    <p>{empresa.servicio}</p>
                    <p>Teléfono: {empresa.telefono}</p>
                    <p>{empresa.horario}</p>
                  </div>
                </InfoWindowF>
              )}
            </MarkerF>
          )}
          {empresas && empresas.map((empresa, index) => empresa.ubicacion && (
            <MarkerF
              key={index}
              position={{
                lat: parseFloat(empresa.ubicacion.latitud),
                lng: parseFloat(empresa.ubicacion.longitud)
              }}
              onClick={() => handleMarkerClick(index)}
              animation={animateMarker ? window.google.maps.Animation.DROP : null}
            >
              {activeMarker === index && (
                <InfoWindowF onCloseClick={handleCloseInfoWindow}>
                  <div className='p-1'>
                    <p className='font-bold'>{empresa.nombre}</p>
                    <p>{empresa.servicio}</p>
                    <p>Teléfono: {empresa.telefono}</p>
                    <p>{empresa.horario}</p>
                  </div>
                </InfoWindowF>
              )}
            </MarkerF>
          ))}
          {!empresas && controlOff && markerPosition && (
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
                    <p>Latitud: {markerPosition.lat}</p>
                    <p>Longitud: {markerPosition.lng}</p>
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
  );
}

export default Map;
