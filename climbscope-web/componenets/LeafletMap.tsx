import React, { useState, useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import 'react-leaflet-markercluster/dist/styles.min.css'

// Fix default icon issue with Leaflet in React
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png',
})

// Types for routes and events
type Route = {
  id: number
  name: string
  difficulty: string
  type: 'bouldering' | 'sport' | 'trad'
  position: [number, number]
  description: string
  location: string
}

type Event = {
  id: number
  name: string
  date: string
  position: [number, number]
  description: string
  contactPhone?: string
  contactInsta?: string
  sourceUrl?: string
}

// Mock data (replace with real data or API calls)
const mockRoutes: Route[] = [
  {
    id: 1,
    name: 'Sunset Crag',
    difficulty: '5.10a',
    type: 'sport',
    position: [34.011, -116.166],
    description: 'Beautiful sport climbing route with amazing views.',
    location: 'Joshua Tree, CA',
  },
  {
    id: 2,
    name: 'The Boulder Problem',
    difficulty: 'V4',
    type: 'bouldering',
    position: [37.8651, -119.5383],
    description: 'Challenging bouldering route near Yosemite Valley.',
    location: 'Yosemite, CA',
  },
]

const mockEvents: Event[] = [
  {
    id: 1,
    name: 'Spring Climbing Festival',
    date: '2025-05-10',
    position: [37.7749, -122.4194],
    description: 'Join climbers from all over for workshops and competitions.',
    contactPhone: '123-456-7890',
    contactInsta: '@springclimbfest',
    sourceUrl: 'https://springclimbfest.com',
  },
  {
    id: 2,
    name: 'Bouldering Meetup',
    date: '2025-06-22',
    position: [40.7128, -74.006],
    description: 'Casual meetup for bouldering enthusiasts in NYC.',
    contactInsta: '@nycbouldering',
    sourceUrl: 'https://instagram.com/nycbouldering',
  },
]

// Icons for routes and events
const routeIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png',
  shadowSize: [41, 41],
})

const eventIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png',
  shadowSize: [41, 41],
})

// Component to center map on user location
const UserLocationMarker = () => {
  const [position, setPosition] = useState<[number, number] | null>(null)
  const map = useMap()

  useEffect(() => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude]
        setPosition(coords)
        map.setView(coords, 10)
      },
      () => null
    )
  }, [map])

  if (!position) return null
  return (
    <>
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
      <CircleMarker center={position} radius={20} color="blue" />
    </>
  )
}

const LeafletMap: React.FC = () => {
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all')
  const [filterType, setFilterType] = useState<string>('all')
  const [searchLocation, setSearchLocation] = useState('')

  const filteredRoutes = useMemo(() => {
    return mockRoutes.filter((route) => {
      const matchesDifficulty = filterDifficulty === 'all' || route.difficulty.startsWith(filterDifficulty)
      const matchesType = filterType === 'all' || route.type === filterType
      const matchesLocation = route.location.toLowerCase().includes(searchLocation.toLowerCase())
      return matchesDifficulty && matchesType && matchesLocation
    })
  }, [filterDifficulty, filterType, searchLocation])

  const filteredEvents = useMemo(() => {
    return mockEvents.filter((event) => event.name.toLowerCase().includes(searchLocation.toLowerCase()))
  }, [searchLocation])

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 h-screen">
      <aside className="md:w-1/4 bg-white dark:bg-gray-800 p-4 rounded shadow overflow-auto max-h-full">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Filters</h2>

        <label className="block mb-2 text-gray-700 dark:text-gray-300">Search Location</label>
        <input
          type="text"
          placeholder="Type location (e.g. Yosemite)"
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white mb-4"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />

        <label className="block mb-2 text-gray-700 dark:text-gray-300">Difficulty</label>
        <select
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white mb-4"
          value={filterDifficulty}
          onChange={(e) => setFilterDifficulty(e.target.value)}
        >
          <option value="all">All</option>
          <option value="5.10">5.10+</option>
          <option value="5.11">5.11+</option>
          <option value="V4">V4+</option>
        </select>

        <label className="block mb-2 text-gray-700 dark:text-gray-300">Route Type</label>
        <select
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="bouldering">Bouldering</option>
          <option value="sport">Sport</option>
          <option value="trad">Trad</option>
        </select>
      </aside>

      <main className="flex-1 rounded shadow overflow-hidden">
        <MapContainer
          center={[37.7749, -122.4194]}
          zoom={5}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />

          <UserLocationMarker />

          <MarkerClusterGroup>
            {filteredRoutes.map((route) => (
              <Marker key={`route-${route.id}`} position={route.position} icon={routeIcon}>
                <Popup>
                  <div>
                    <h3 className="font-semibold text-lg">{route.name}</h3>
                    <p><strong>Difficulty:</strong> {route.difficulty}</p>
                    <p><strong>Type:</strong> {route.type}</p>
                    <p><strong>Location:</strong> {route.location}</p>
                    <p>{route.description}</p>
                  </div>
                </Popup>
              </Marker>
            ))}

            {filteredEvents.map((event) => (
              <Marker key={`event-${event.id}`} position={event.position} icon={eventIcon}>
                <Popup>
                  <div>
                    <h3 className="font-semibold text-lg">{event.name}</h3>
                    <p><strong>Date:</strong> {event.date}</p>
                    <p>{event.description}</p>
                    {event.contactPhone && <p><strong>Phone:</strong> {event.contactPhone}</p>}
                    {event.contactInsta && (
                      <p>
                        <strong>Instagram:</strong>{' '}
                        <a
                          href={`https://instagram.com/${event.contactInsta.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {event.contactInsta}
                        </a>
                      </p>
                    )}
                    {event.sourceUrl && (
                      <p>
                        <strong>Source:</strong>{' '}
                        <a
                          href={event.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline break-all"
                        >
                          {event.sourceUrl}
                        </a>
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </main>
    </div>
  )
}

export default LeafletMap
