import { createClient } from '@supabase/supabase-js'

// These will be set via environment variables in production
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for future use
export interface Event {
  id: string
  title: string
  description: string
  city: string
  venue: string
  date: string
  time: string
  price: number
  available_seats: number
  category: string
  created_at: string
}

export interface DanceClass {
  id: string
  name: string
  description: string
  instructor: string
  time: string
  duration: string
  location: string
  price: number
  level: string
  available_spots: number
  category: string
  created_at: string
}

export interface Registration {
  id: string
  class_id: string
  user_id: string
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at: string
}
