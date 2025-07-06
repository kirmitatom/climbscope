'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';

type Route = { id: number; name: string; location: string; latitude: number; longitude: number; grade: string; type: string; length: string; firstAscent: string; description: string; };
type Event = { id: number; name: string; location: string; latitude: number; longitude: number; date: string; description: string; };
type Gym = { id: number; name: string; location: string; latitude: number; longitude: number; features: string[]; description: string; };

const routes: Route[] = [
  { id: 1, name: 'El Capitan - The Nose', location: 'Yosemite National Park, California, USA', latitude: 37.7325, longitude: -119.6378, grade: '5.14a', type: 'Trad', length: '880m', firstAscent: '1958', description: 'The Nose is the most famous route on El Capitan.' },
  { id: 2, name: 'La Rambla', location: 'Siurana, Catalonia, Spain', latitude: 41.2422, longitude: 0.9633, grade: '5.15a', type: 'Sport', length: '35m', firstAscent: '2003', description: 'A classic hard sport climb in Spain.' }
];

const events: Event[] = [
  { id: 1, name: 'Yosemite Big Wall Festival', location: 'Yosemite Valley, California, USA', latitude: 37.7489, longitude: -119.5882, date: '2025-09-14', description: 'A celebration of big wall climbing with workshops and guest speakers.' },
  { id: 2, name: 'Red River Gorge Gathering', location: 'Slade, Kentucky, USA', latitude: 37.7915, longitude: -83.6819, date: '2025-10-05', description: 'An annual event for climbers at Red River Gorge.' }
];

const gyms: Gym[] = [
  { id: 1, name: 'Brooklyn Boulders', location: 'Brooklyn, New York, USA', latitude: 40.6795, longitude: -73.9832, features: ['Bouldering', 'Top Rope', 'Lead Climbing', 'Fitness Area'], description: 'A vibrant community climbing gym.' },
  { id: 2, name: 'B-PUMP Ogikubo', location: 'Tokyo, Japan', latitude: 35.7052, longitude: 139.6203, features: ['Bouldering', 'Competition Walls'], description: 'Japan’s most famous bouldering gym.' }
];

const createIcon = (url: string): Icon =>
  new L.Icon({ iconUrl: url, iconSize: [30, 30], iconAnchor: [15, 30], popupAnchor: [0, -30] });

const routeIcon = createIcon('https://cdn-icons-png.flaticon.com/512/684/684908.png');
const eventIcon = createIcon('https://cdn-icons-png.flaticon.com/512/2991/2991148.png');
const gymIcon = createIcon('https://cdn-icons-png.flaticon.com/512/854/854866.png');

export default function LeafletMap() {
  return (
    <MapContainer center={[40, -30]} zoom={2} className="h-full w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
      {routes.map(route => (
        <Marker key={route.id} position={[route.latitude, route.longitude]} icon={routeIcon}>
          <Popup>
            <h2 className="font-bold">{route.name}</h2>
            <p className="text-sm">{route.location}</p>
            <p className="text-sm">Grade: {route.grade} | {route.type} | {route.length}</p>
            <p className="text-xs mt-1">{route.description}</p>
          </Popup>
        </Marker>
      ))}
      {events.map(event => (
        <Marker key={event.id} position={[event.latitude, event.longitude]} icon={eventIcon}>
          <Popup>
            <h2 className="font-bold">{event.name}</h2>
            <p className="text-sm">{event.location}</p>
            <p className="text-sm">Date: {event.date}</p>
            <p className="text-xs mt-1">{event.description}</p>
          </Popup>
        </Marker>
      ))}
      {gyms.map(gym => (
        <Marker key={gym.id} position={[gym.latitude, gym.longitude]} icon={gymIcon}>
          <Popup>
            <h2 className="font-bold">{gym.name}</h2>
            <p className="text-sm">{gym.location}</p>
            <p className="text-sm">Features: {gym.features.join(', ')}</p>
            <p className="text-xs mt-1">{gym.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}