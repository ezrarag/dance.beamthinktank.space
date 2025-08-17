import { loadStripe } from '@stripe/stripe-js'

// This will be set via environment variables in production
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''

export const stripePromise = loadStripe(publishableKey)

// Payment types for future use
export interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: string
  client_secret: string
}

export interface Donation {
  id: string
  amount: number
  currency: string
  donor_name?: string
  donor_email?: string
  message?: string
  created_at: string
}

export interface TicketPurchase {
  id: string
  event_id: string
  ticket_type: string
  quantity: number
  total_amount: number
  customer_email: string
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at: string
}
