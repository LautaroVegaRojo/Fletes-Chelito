import { useMemo } from 'react';
import { GoogleMap, Circle, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '800px'
};

const center = {
  lat: -34.7876, // Latitud aproximada del centro de Lomas de Zamora
  lng: -58.4072 // Longitud aproximada del centro de Lomas de Zamora
};

const MyMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  // Opciones para el círculo (color, opacidad, etc.)
  const circleOptions = useMemo(() => ({
    strokeColor: 'rgba(211, 128, 11, 1)',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da9342ff',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1,
  }), []);

  if (loadError) {
    return (
      <div className="d-flex justify-content-center align-items-center bg-light" style={containerStyle}>
        <p className="text-danger">Error al cargar el mapa. Verifica tu API Key.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center align-items-center bg-light" style={containerStyle}>
        <p className="text-primary">Cargando mapa...</p>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14} // Ajustamos el zoom para que el círculo sea visible
    >
      <Circle
        center={center}
        radius={6500} // Radio en metros (1 km)
        options={circleOptions}
      />
    </GoogleMap>
  );
};

export default MyMap;