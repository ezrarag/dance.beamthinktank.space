import Hero from '@/components/Hero'
import EventsCalendar from '@/components/EventsCalendar'
import CitySelector from '@/components/CitySelector'
import DonationWidget from '@/components/DonationWidget'
import ClassSignups from '@/components/ClassSignups'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Hero />
      <div className="container mx-auto px-4 py-16 space-y-20">
        <CitySelector />
        <EventsCalendar />
        <DonationWidget />
        <ClassSignups />
      </div>
    </main>
  )
}
