# BEAM Dance & Performance Guild

A modern Next.js landing page for BEAM Dance & Performance Guild, featuring dance events, class registrations, and community engagement.

## Features

- **Hero Section**: Compelling dance imagery with statistics and call-to-action buttons
- **City Selector**: Dropdown to find local dance groups by city
- **Events Calendar**: Filterable list of upcoming dance shows and performances
- **Donation Widget**: Stripe-integrated donation system for supporting the arts
- **Class Signups**: Community dance programs for all ages and skill levels
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Backend Integration**: Supabase (ready for setup)
- **Payments**: Stripe (ready for integration)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dance.beamthinktank.space
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory for local development:

```env
# Supabase (optional for local development)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe (optional for local development)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── CitySelector.tsx # City selection
│   ├── EventsCalendar.tsx # Events display
│   ├── DonationWidget.tsx # Donations & tickets
│   └── ClassSignups.tsx # Class registration
└── lib/                # Utility libraries
    ├── supabase.ts     # Supabase client
    └── stripe.ts       # Stripe configuration
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Component Development

Each component is self-contained with its own state management and styling. The components use:

- React hooks for state management
- Tailwind CSS for styling
- Lucide React for icons
- Responsive design patterns

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Backend Integration

### Supabase Setup

1. Create a Supabase project
2. Set up database tables for events, classes, and registrations
3. Add environment variables
4. Update components to use real data

### Stripe Integration

1. Create a Stripe account
2. Get your publishable key
3. Set up webhook endpoints
4. Implement payment processing in components

## Customization

### Styling

The project uses Tailwind CSS with a purple/blue color scheme. Customize colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      purple: { /* your colors */ },
      blue: { /* your colors */ }
    }
  }
}
```

### Content

Update the mock data in each component to match your actual events, classes, and dance groups.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team or create an issue in the repository.
