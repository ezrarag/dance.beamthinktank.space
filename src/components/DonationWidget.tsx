'use client'

import { useState } from 'react'
import { Heart, Gift, CreditCard, Star } from 'lucide-react'

const donationAmounts = [25, 50, 100, 250, 500]
const ticketTypes = [
  { name: 'General Admission', price: 45, description: 'Standard event access' },
  { name: 'VIP Experience', price: 120, description: 'Premium seating + meet & greet' },
  { name: 'Student Discount', price: 25, description: 'Valid student ID required' }
]

export default function DonationWidget() {
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
  const [selectedTicket, setSelectedTicket] = useState('')

  const handleDonation = () => {
    // This would integrate with Stripe
    console.log('Processing donation:', selectedAmount || customAmount)
  }

  const handleTicketPurchase = () => {
    // This would integrate with Stripe
    console.log('Processing ticket purchase:', selectedTicket)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Support the Arts & Get Tickets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your contribution helps us bring dance education and performances to communities across the country.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-full">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Make a Donation</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Support our mission to bring dance education and performances to communities across the country.
            </p>

            {/* Donation Amounts */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount)
                    setCustomAmount('')
                  }}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    selectedAmount === amount && !customAmount
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Or enter a custom amount:
              </label>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setSelectedAmount(0)
                }}
                placeholder="Enter amount"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Impact Stats */}
            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-900">Your Impact</span>
              </div>
              <p className="text-sm text-purple-700">
                ${selectedAmount || customAmount || 0} provides dance classes for 2 children or supports 1 community performance.
              </p>
            </div>

            <button
              onClick={handleDonation}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </button>
          </div>

          {/* Ticket Purchase Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Gift className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Purchase Tickets</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Secure your spot at upcoming performances and exclusive events.
            </p>

            {/* Ticket Types */}
            <div className="space-y-4 mb-6">
              {ticketTypes.map((ticket) => (
                <div
                  key={ticket.name}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                    selectedTicket === ticket.name
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => setSelectedTicket(ticket.name)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{ticket.name}</h4>
                    <span className="text-2xl font-bold text-blue-600">${ticket.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{ticket.description}</p>
                </div>
              ))}
            </div>

            {/* Payment Info */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Secure Payment</span>
              </div>
              <p className="text-sm text-blue-700">
                All transactions are processed securely through Stripe with encrypted payment information.
              </p>
            </div>

            <button
              onClick={handleTicketPurchase}
              disabled={!selectedTicket}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 ${
                selectedTicket
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Gift className="w-5 h-5" />
              {selectedTicket ? `Buy ${selectedTicket}` : 'Select Ticket Type'}
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All donations are tax-deductible. BEAM Dance & Performance Guild is a 501(c)(3) nonprofit organization.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>🔒 Secure Payments</span>
            <span>💳 Multiple Payment Methods</span>
            <span>📧 Instant Confirmation</span>
          </div>
        </div>
      </div>
    </section>
  )
}
