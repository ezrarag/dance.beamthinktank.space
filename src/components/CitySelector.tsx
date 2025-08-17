'use client'

import { useState } from 'react'
import { MapPin, Users, Calendar, Star } from 'lucide-react'

const cities = [
  {
    id: 'nyc',
    name: 'New York City',
    danceGroups: [
      { name: 'Broadway Dance Collective', members: 45, events: 12, rating: 4.8 },
      { name: 'Harlem Hip-Hop Crew', members: 32, events: 8, rating: 4.6 },
      { name: 'Manhattan Ballet Society', members: 28, events: 15, rating: 4.9 }
    ]
  },
  {
    id: 'la',
    name: 'Los Angeles',
    danceGroups: [
      { name: 'LA Contemporary Dance', members: 38, events: 10, rating: 4.7 },
      { name: 'Hollywood Dance Academy', members: 52, events: 18, rating: 4.8 },
      { name: 'Venice Beach Movers', members: 25, events: 6, rating: 4.5 }
    ]
  },
  {
    id: 'chicago',
    name: 'Chicago',
    danceGroups: [
      { name: 'Windy City Dancers', members: 35, events: 9, rating: 4.6 },
      { name: 'Chicago Ballet Ensemble', members: 41, events: 14, rating: 4.9 },
      { name: 'South Side Groove', members: 29, events: 7, rating: 4.4 }
    ]
  },
  {
    id: 'miami',
    name: 'Miami',
    danceGroups: [
      { name: 'Miami Latin Dance', members: 48, events: 16, rating: 4.8 },
      { name: 'South Beach Movers', members: 33, events: 11, rating: 4.7 },
      { name: 'Cuban Dance Collective', members: 36, events: 13, rating: 4.9 }
    ]
  }
]

export default function CitySelector() {
  const [selectedCity, setSelectedCity] = useState(cities[0])
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Find Dance Groups in Your City
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connect with local dance communities, discover upcoming events, and join the movement in your area.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* City Dropdown */}
        <div className="relative mb-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white border-2 border-purple-200 rounded-lg px-6 py-4 text-left flex items-center justify-between hover:border-purple-300 transition-colors"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span className="text-lg font-semibold">{selectedCity.name}</span>
            </div>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-purple-200 rounded-lg shadow-lg z-10">
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => {
                    setSelectedCity(city)
                    setIsOpen(false)
                  }}
                  className={`w-full px-6 py-3 text-left hover:bg-purple-50 transition-colors ${
                    selectedCity.id === city.id ? 'bg-purple-100 text-purple-900' : ''
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dance Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCity.danceGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{group.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{group.events} events this year</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{group.rating} rating</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Join Group
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
