import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow, Polyline, useLoadScript } from "@react-google-maps/api";

function Map({ empresa, empresas, controlOff, setModalVisible }) {
  const [activeMarker, setActiveMarker] = useState(null);
  const [animateMarker, setAnimateMarker] = useState(false);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [directions, setDirections] = useState(null);
  const [closestEmpresa, setClosestEmpresa] = useState(null);
  const [distance, setDistance] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyBQTmH4sZjvUcHvS18ngof48-wJIcN4sFo" });

  const center = empresa ? { lat: parseFloat(empresa.ubicacion.latitud), lng: parseFloat(empresa.ubicacion.longitud) } : { lat: 39.87442386, lng: -4.03691974 };

  useEffect(() => {
    if (isLoaded) {
      setLoaded(true);
      const timer = setTimeout(() => setAnimateMarker(true), 700);
      const storedLocation = localStorage.getItem('markerPosition');
      if (storedLocation) setMarkerPosition(JSON.parse(storedLocation));
      else if (navigator.geolocation) navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
          setMarkerPosition(currentPosition);
          localStorage.setItem('markerPosition', JSON.stringify(currentPosition));
        },
        (error) => console.error("Error obteniendo ubicación:", error)
      );
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (markerPosition && empresas && empresas.length) {
      let closest = null;
      let minDistance = Infinity;

      empresas.forEach((empresa) => {
        if (empresa.ubicacion) {
          calculateRouteAndDistance(markerPosition, empresa, (distance, result) => {
            if (distance < minDistance) {
              minDistance = distance;
              closest = empresa;
              setDirections(result);
              setDistance(distance.toFixed(1));
            }
          });
        }
      });

      setClosestEmpresa(closest);
    } else if (markerPosition && empresa) {
      calculateRouteAndDistance(markerPosition, empresa, (distance, result) => {
        setClosestEmpresa(empresa);
        setDistance(distance.toFixed(1));
        setDirections(result);
      });
    }
  }, [markerPosition, empresas, empresa]);

  const handleMarkerClick = (markerId) => setActiveMarker(markerId);
  const handleCloseInfoWindow = () => setActiveMarker(null);

  const handleMarkerDragEnd = (e) => {
    const newMarkerPosition = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    setMarkerPosition(newMarkerPosition);
    localStorage.setItem('markerPosition', JSON.stringify(newMarkerPosition));
  };

  const calculateRouteAndDistance = (origin, destinationEmpresa, callback) => {
    if (window.google?.maps) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin,
          destination: { lat: parseFloat(destinationEmpresa.ubicacion.latitud), lng: parseFloat(destinationEmpresa.ubicacion.longitud) },
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            const distance = result.routes[0].legs[0].distance.value / 1000;
            callback(distance, result);
          } else if (status === window.google.maps.DirectionsStatus.ZERO_RESULTS) {
            console.warn("No se encontraron resultados para la ruta.");
          } else {
            console.error("Error al obtener la ruta:", status);
          }
        }
      );
    }
  };

  const clearStoredLocation = () => {
    localStorage.removeItem('markerPosition');
    setMarkerPosition(null);
  };

  if (!isLoaded || !loaded) return <div>Loading...</div>;

  return (
    <>
      <button onClick={clearStoredLocation} className=' z-10 relative top-[3em] left-48 ring-4 ring-slate-400 bg-white p-2 rounded-full'>
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 9.69494 20.1334 7.59227 18.7083 6L16 3M12 3C7.02944 3 3 7.02944 3 12C3 14.3051 3.86656 16.4077 5.29168 18L8 21M21 3H16M16 3V8M3 21H8M8 21V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </button>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        zoom={empresas ? 11 : 12}
        center={!controlOff ? center : (markerPosition || center)}
        options={{ draggable: controlOff, disableDefaultUI: !controlOff }}
      >
        {empresa && empresa.ubicacion && (
          <Marker
            position={center}
            onClick={() => handleMarkerClick(empresa.id)}
            animation={animateMarker ? window.google.maps.Animation.DROP : null}
          >
            {activeMarker === empresa.id && (
              <InfoWindow onCloseClick={handleCloseInfoWindow} >
                <div className='p-1'>
                  <p className='font-bold'>{empresa.nombre}</p>
                  <p>{empresa.servicio}</p>
                  <p>Teléfono: {empresa.telefono}</p>
                  <p>{empresa.horario}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        )}
        {empresas && empresas.map((empresa, index) => empresa.ubicacion && (
          <Marker
            key={index}
            position={{ lat: parseFloat(empresa.ubicacion.latitud), lng: parseFloat(empresa.ubicacion.longitud) }}
            onClick={() => handleMarkerClick(index)}
            animation={animateMarker ? window.google.maps.Animation.DROP : null}
          >
            {activeMarker === index && (
              <InfoWindow onCloseClick={handleCloseInfoWindow}>
                <div className='p-1'>
                  <p className='font-bold'>{empresa.nombre}</p>
                  <p>{empresa.servicio}</p>
                  <p>Teléfono: {empresa.telefono}</p>
                  <p>{empresa.horario}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
        {controlOff && markerPosition && (
          <Marker
            position={markerPosition}
            draggable={true}
            onDragEnd={handleMarkerDragEnd}
            onClick={() => handleMarkerClick('mi-ubicacion')}
            animation={animateMarker ? window.google.maps.Animation.DROP : null}
            icon={`https://img.icons8.com/external-kmg-design-flat-kmg-design/38/external-map-map-and-navigation-kmg-design-flat-kmg-design-2.png`}
          >
            {activeMarker === 'mi-ubicacion' && (
              <InfoWindow position={markerPosition} onCloseClick={handleCloseInfoWindow}>
                <div className={`${controlOff && 'min-w-[10em]'}`}>
                  <p className="font-bold">Mi Ubicación</p>
                  <p>Latitud: {markerPosition.lat}</p>
                  <p>Longitud: {markerPosition.lng}</p>
                  {distance && <p>Distancia: {distance + " Km"}</p>}
                </div>
              </InfoWindow>
            )}
          </Marker>
        )}
        {markerPosition && controlOff && directions && (
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
    </>
  );
}

export default Map;
