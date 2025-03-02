import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Topbar from '@/components/Topbar';
import Search from '@/components/Search';
import Footer from '@/components/Footer';

const searchResults = [
  { id: 1, name: 'Jackson Park Hospital', specialty: 'Psychiatry', price: 4099, seats: 3, lat: 41.7656, lng: -87.5751 },
  { id: 2, name: 'University of Illinois at Chicago', specialty: 'Family Medicine', price: 1999, seats: 2, lat: 41.8708, lng: -87.6505 },
  { id: 3, name: 'Pilsen Smiles', specialty: 'Dentistry', price: 1499, seats: 1, lat: 41.8564, lng: -87.6568 },
  { id: 4, name: 'AMITA Health Resurrection', specialty: 'OB/GYN', price: 2199, seats: 2, lat: 41.9809, lng: -87.8173 },
];

const Results = () => {
  return (
    <>
    <Topbar/>
    <Search/>
    <div className="relative h-screen w-full">
      {/* Map in the background */}
      <MapContainer center={[41.8781, -87.6298]} zoom={11} className="absolute top-0 left-0 w-full h-full z-0">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {searchResults.map((result) => (
          <Marker key={result.id} position={[result.lat, result.lng]}>
            <Popup>{result.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Search Results in Foreground */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-white/80 p-4 overflow-y-auto z-10 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Rotations in Chicago</h2>
        {searchResults.map((result) => (
          <div key={result.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="font-semibold text-lg">{result.name}</h3>
            <p className="text-gray-600">{result.specialty}</p>
            <p className="text-blue-600 font-bold">${result.price}</p>
            <p className="text-sm text-gray-500">{result.seats} Seats Offered</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Results;
