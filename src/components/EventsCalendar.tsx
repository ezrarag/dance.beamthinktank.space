'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, Users, Ticket } from 'lucide-react'
import { format, addDays } from 'date-fns'

const events = [
  {
    id: 1,
    title: 'Contemporary Fusion Showcase',
    city: 'New York City',
    date: addDays(new Date(), 3),
    time: '7:00 PM',
    venue: 'Lincoln Center',
    price: 45,
    availableSeats: 23,
    category: 'Contemporary',
    image: '🎭'
  },
  {
    id: 2,
    title: 'Hip-Hop Battle Night',
    city: 'Los Angeles',
    date: addDays(new Date(), 5),
    time: '8:30 PM',
    venue: 'The Roxy Theatre',
    price: 35,
    availableSeats: 15,
    category: 'Hip-Hop',
    image: '💃'
  },
  {
    id: 3,
    title: 'Ballet Gala Evening',
    city: 'Chicago',
    date: addDays(new Date(), 7),
    time: '6:00 PM',
    venue: 'Chicago Symphony Center',
    price: 75,
    availableSeats: 8,
    category: 'Ballet',
    image: '🩰'
  },
  {
    id: 4,
    title: 'Latin Dance Festival',
    city: 'Miami',
    date: addDays(new Date(), 10),
    time: '9:00 PM',
    venue: 'Fillmore Miami Beach',
    price: 55,
    availableSeats: 45,
    category: 'Latin',
    image: '💃'
  },
  {
    id: 5,
    title: 'Jazz & Tap Extravaganza',
    city: 'New York City',
    date: addDays(new Date(), 12),
    time: '7:30 PM',
    venue: 'Apollo Theater',
    price: 40,
    availableSeats: 32,
    category: 'Jazz',
    image: '🎵'
  },
  {
    id: 6,
    title: 'Modern Dance Workshop',
    city: 'Los Angeles',
    date: addDays(new Date(), 15),
    time: '2:00 PM',
    venue: 'LA Dance Project Studio',
    price: 25,
    availableSeats: 18,
    category: 'Workshop',
    image: '🎨'
  }
]

const categories = ['All', 'Contemporary', 'Hip-Hop', 'Ballet', 'Latin', 'Jazz', 'Workshop']
const cities = ['All', 'New York City', 'Los Angeles', 'Chicago', 'Miami']

export default function EventsCalendar() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedCity, setSelectedCity] = useState('All')

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory
    const cityMatch = selectedCity === 'All' || event.city === selectedCity
    return categoryMatch && cityMatch
  })

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Upcoming Dance Events
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing performances, workshops, and shows happening in your area.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">City:</span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Event Image */}
              <div className="h-32 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-6xl">
                {event.image}
              </div>
              
              {/* Event Details */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{format(event.date, 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.venue}, {event.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{event.availableSeats} seats available</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-purple-600">${event.price}</div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Ticket className="w-4 h-4" />
                    <span>Buy Tickets</span>
                  </div>
                </div>
                
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  Get Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found for the selected filters.</p>
          </div>
        )}
      </div>
    </section>
  )
}
