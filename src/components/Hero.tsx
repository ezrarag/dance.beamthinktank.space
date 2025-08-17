import { Play, Users, Calendar, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with dance imagery */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80 z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
          BEAM Dance & Performance Guild
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Discover the rhythm of your city through dance. From classical ballet to contemporary hip-hop, 
          join our vibrant community of performers and enthusiasts.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-purple-300" />
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-gray-300">Dancers</div>
          </div>
          <div className="text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-300" />
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm text-gray-300">Events/Year</div>
          </div>
          <div className="text-center">
            <Star className="w-8 h-8 mx-auto mb-2 text-purple-300" />
            <div className="text-2xl font-bold">15+</div>
            <div className="text-sm text-gray-300">Cities</div>
          </div>
          <div className="text-center">
            <Play className="w-8 h-8 mx-auto mb-2 text-blue-300" />
            <div className="text-2xl font-bold">100+</div>
            <div className="text-sm text-gray-300">Classes</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200">
            Find Events Near You
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200">
            Join Our Community
          </button>
        </div>
      </div>
      
      {/* Floating dance elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  )
}
