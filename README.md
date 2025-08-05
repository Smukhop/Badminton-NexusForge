# Badminton NexusForge

An application to analyze badminton matches, explore player strategies, manage training plans, and track progress. A location-based platform to find badminton coaches and tournaments using an interactive map and AI chat. Features a knowledge base of players, techniques, and concepts.

## Features

- **Match Analysis**: Track and analyze badminton matches with detailed statistics
- **Progress Tracking**: Monitor improvement over time with comprehensive metrics
- **Training Plans**: Access personalized training programs
- **Coach Finder**: Discover qualified coaches using interactive maps
- **Tournament Listings**: Find and register for local tournaments
- **AI Coaching**: Get instant advice from AI-powered assistant
- **Knowledge Base**: Access guides, tutorials, and resources
- **Community**: Connect with other badminton players

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Authentication, Real-time)
- **Deployment**: Vercel
- **Maps**: Mapbox (configurable)
- **AI**: OpenAI API for chat functionality

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Vercel account (for deployment)
- OpenAI API key (for AI features)
- Mapbox account (for maps)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Badminton-NexusForge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local` and fill in the values:
   ```bash
   cp .env.example .env.local
   ```

   Required environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`: Your Mapbox access token

4. **Set up Supabase**
   
   Install the Supabase CLI:
   ```bash
   npm install -g supabase
   ```

   Initialize Supabase:
   ```bash
   supabase init
   ```

   Run the migration to set up the database schema:
   ```bash
   supabase db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel Deployment

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Import the project

2. **Set up environment variables in Vercel**
   Add the following environment variables in your Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`

3. **Deploy**
   Vercel will automatically deploy your application.

### Supabase Setup

1. **Create a new Supabase project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and API keys

2. **Run the database migration**
   ```bash
   # Using Supabase CLI
   supabase db push

   # Or run the SQL file directly in the Supabase SQL editor
   ```

3. **Configure authentication**
   - Enable email authentication in Supabase
   - Optionally enable Google OAuth
   - Set up email templates

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── auth/           # Authentication pages
│   ├── dashboard/      # Main dashboard
│   ├── explore/        # Feature exploration
│   └── globals.css     # Global styles
├── components/         # React components
│   └── ui/            # UI components
├── lib/               # Utility functions
├── types/             # TypeScript type definitions
└── styles/            # Additional styles

supabase/
├── migrations/        # Database migrations
└── config.toml       # Supabase configuration

public/               # Static assets
```

## Key Features Implementation

### Authentication
- Supabase Auth integration
- Email/password and OAuth support
- Protected routes and middleware

### Database Schema
- User profiles and preferences
- Match tracking and statistics
- Training plans and sessions
- Coach and tournament listings
- Location data for maps

### Real-time Features
- Live match updates
- Chat functionality
- Notifications

### AI Integration
- OpenAI GPT integration for coaching advice
- Personalized recommendations
- Performance analysis insights

### Maps Integration
- Mapbox for location-based features
- Coach and tournament discovery
- Interactive location selection

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is built for the badminton community. See the repository for license details.

## Support

For support and questions:
- Open an issue on GitHub
- Check the documentation
- Contact the development team

---

Built with ❤️ for the badminton community
