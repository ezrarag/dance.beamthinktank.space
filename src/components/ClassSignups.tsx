'use client'

import { useState } from 'react'
import { Users, Clock, MapPin, Star, Calendar, BookOpen } from 'lucide-react'

const classCategories = [
  {
    name: 'Kids & Youth',
    icon: '👶',
    classes: [
      {
        name: 'Creative Movement (Ages 3-5)',
        instructor: 'Ms. Sarah Johnson',
        time: 'Saturdays 9:00 AM',
        duration: '45 min',
        location: 'Studio A',
        price: 25,
        level: 'Beginner',
        description: 'Introduction to dance through play and imagination',
        availableSpots: 8
      },
      {
        name: 'Ballet Basics (Ages 6-8)',
        instructor: 'Mr. David Chen',
        time: 'Tuesdays & Thursdays 4:00 PM',
        duration: '1 hour',
        location: 'Studio B',
        price: 35,
        level: 'Beginner',
        description: 'Foundation of classical ballet technique',
        availableSpots: 12
      },
      {
        name: 'Hip-Hop Kids (Ages 7-10)',
        instructor: 'Ms. Maya Rodriguez',
        time: 'Wednesdays 5:00 PM',
        duration: '1 hour',
        location: 'Studio C',
        price: 30,
        level: 'Beginner-Intermediate',
        description: 'High-energy hip-hop moves for young dancers',
        availableSpots: 15
      }
    ]
  },
  {
    name: 'Teens & Adults',
    icon: '💃',
    classes: [
      {
        name: 'Contemporary Dance',
        instructor: 'Ms. Elena Petrov',
        time: 'Mondays & Fridays 7:00 PM',
        duration: '1.5 hours',
        location: 'Studio A',
        price: 45,
        level: 'Intermediate-Advanced',
        description: 'Modern contemporary dance techniques and choreography',
        availableSpots: 18
      },
      {
        name: 'Jazz & Musical Theater',
        instructor: 'Mr. James Wilson',
        time: 'Tuesdays 6:30 PM',
        duration: '1.5 hours',
        location: 'Studio B',
        price: 40,
        level: 'All Levels',
        description: 'Broadway-style jazz and musical theater dance',
        availableSpots: 20
      },
      {
        name: 'Latin Dance Fusion',
        instructor: 'Ms. Carmen Santos',
        time: 'Thursdays 8:00 PM',
        duration: '1 hour',
        location: 'Studio C',
        price: 35,
        level: 'Beginner-Intermediate',
        description: 'Salsa, bachata, and merengue basics',
        availableSpots: 16
      }
    ]
  },
  {
    name: 'Special Programs',
    icon: '⭐',
    classes: [
      {
        name: 'Dance for Seniors',
        instructor: 'Ms. Grace Thompson',
        time: 'Wednesdays 10:00 AM',
        duration: '1 hour',
        location: 'Studio A',
        price: 20,
        level: 'All Levels',
        description: 'Gentle movement and dance for active seniors',
        availableSpots: 25
      },
      {
        name: 'Adaptive Dance',
        instructor: 'Mr. Alex Rivera',
        time: 'Saturdays 11:00 AM',
        duration: '1 hour',
        location: 'Studio B',
        price: 15,
        level: 'All Abilities',
        description: 'Inclusive dance classes for all abilities',
        availableSpots: 10
      }
    ]
  }
]

export default function ClassSignups() {
  const [selectedCategory, setSelectedCategory] = useState(classCategories[0])
  const [selectedClass, setSelectedClass] = useState(null)
  const [showRegistration, setShowRegistration] = useState(false)

  const handleClassSelection = (danceClass) => {
    setSelectedClass(danceClass)
    setShowRegistration(true)
  }

  const handleRegistration = () => {
    // This would integrate with Supabase
    console.log('Registering for class:', selectedClass.name)
    setShowRegistration(false)
    setSelectedClass(null)
  }

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Join Our Dance Classes
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From beginners to advanced dancers, we have classes for all ages and skill levels. 
          Join our community and discover the joy of dance.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {classCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory.name === category.name
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Classes Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCategory.classes.map((danceClass, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                  {danceClass.level}
                </span>
                <span className="text-2xl font-bold text-purple-600">${danceClass.price}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{danceClass.name}</h3>
              <p className="text-gray-600 mb-4">{danceClass.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{danceClass.instructor}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{danceClass.time} • {danceClass.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{danceClass.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{danceClass.availableSpots} spots available</span>
                </div>
              </div>

              <button
                onClick={() => handleClassSelection(danceClass)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      {showRegistration && selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Class Registration</h3>
              <p className="text-gray-600">Complete your registration for:</p>
              <p className="font-semibold text-purple-600">{selectedClass.name}</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Class Fee:</span>
                <span className="font-semibold">${selectedClass.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Instructor:</span>
                <span className="font-semibold">{selectedClass.instructor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Schedule:</span>
                <span className="font-semibold">{selectedClass.time}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowRegistration(false)}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRegistration}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Complete Registration
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Additional Info */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Classes?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Instructors</h4>
              <p className="text-gray-600 text-sm">Learn from professional dancers and certified teachers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Community Focus</h4>
              <p className="text-gray-600 text-sm">Join a supportive community of dance enthusiasts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h4>
              <p className="text-gray-600 text-sm">Classes available throughout the week for your convenience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
