import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow, Polyline, useLoadScript } from "@react-google-maps/api";

function Map({ empresa, empresas, controlOff, setModalVisible }) {
  const [activeMarker, setActiveMarker] = useState(null);
  const [animateMarker, setAnimateMarker] = useState(false);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [directions, setDirections] = useState(null);
  const [closestEmpresa, setClosestEmpresa] = useState(null);
  const [distance, setDistance] = useState(null);
  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyBQTmH4sZjvUcHvS18ngof48-wJIcN4sFo" });

  const center = empresa ? { lat: parseFloat(empresa.ubicacion.latitud), lng: parseFloat(empresa.ubicacion.longitud) } : { lat: 39.87442386, lng: -4.03691974 };

  const calculateDistance = (pos1, pos2) => {
    const R = 6371;
    const dLat = (pos2.lat - pos1.lat) * (Math.PI / 180);
    const dLng = (pos2.lng - pos1.lng) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(pos1.lat * (Math.PI / 180)) * Math.cos(pos2.lat * (Math.PI / 180)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => { 
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
  }, []);

  useEffect(() => {
    let closest = null, minDistance = Infinity;
    const updateClosest = (empresa, pos) => {
      const dist = calculateDistance(markerPosition, pos);
      if (dist < minDistance) {
        closest = empresa;
        minDistance = dist;
      }
      setDistance(dist);
    };

    if (markerPosition && empresas && empresas.length) {
      empresas.forEach((empresa) => empresa.ubicacion && updateClosest(empresa, { lat: parseFloat(empresa.ubicacion.latitud), lng: parseFloat(empresa.ubicacion.longitud) }));
      setClosestEmpresa(closest);
      closest && setTimeout(() => calculateRoute(closest), 500);
    } else if (markerPosition && empresa) {
      setClosestEmpresa(empresa);
      updateClosest(empresa, { lat: parseFloat(empresa.ubicacion.latitud), lng: parseFloat(empresa.ubicacion.longitud) });
      setTimeout(() => calculateRoute(empresa), 500);
    }
  }, [markerPosition, empresas, empresa]);

  const handleMarkerClick = (markerId) => setActiveMarker(markerId);
  const handleCloseInfoWindow = () => setActiveMarker(null);

  const handleMarkerDragEnd = (e) => {
    const newMarkerPosition = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    setMarkerPosition(newMarkerPosition);
    localStorage.setItem('markerPosition', JSON.stringify(newMarkerPosition));
  };

  const calculateRoute = (empresa) => {
    if (controlOff && empresa && markerPosition && window.google?.maps) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: markerPosition,
          destination: { lat: parseFloat(empresa.ubicacion.latitud), lng: parseFloat(empresa.ubicacion.longitud) },
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) setDirections(result);
          else if (status === window.google.maps.DirectionsStatus.ZERO_RESULTS) console.warn("No se encontraron resultados para la ruta.");
          else console.error("Error al obtener la ruta:", status);
        }
      );
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
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
                <p>Distancia: {(distance).toFixed(1) + "Km"}</p>
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

