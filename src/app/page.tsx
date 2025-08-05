import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Activity, 
  MapPin, 
  MessageCircle, 
  Target, 
  TrendingUp, 
  Users,
  Trophy
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Target className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Badminton NexusForge
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Master your</span>{' '}
                  <span className="block text-blue-600 xl:inline">badminton game</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Analyze matches, track progress, find coaches, and connect with the badminton community. 
                  Your journey to becoming a better player starts here.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/dashboard">
                      <Button size="lg" className="w-full">
                        Start Analyzing
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/explore">
                      <Button variant="outline" size="lg" className="w-full">
                        Explore Features
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to excel at badminton
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              From match analysis to finding coaches, we provide comprehensive tools for badminton players of all levels.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Activity className="h-8 w-8 text-blue-600" />
                  <CardTitle>Match Analysis</CardTitle>
                  <CardDescription>
                    Analyze your matches with detailed statistics and insights to improve your game.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  <CardTitle>Progress Tracking</CardTitle>
                  <CardDescription>
                    Track your improvement over time with comprehensive progress charts and metrics.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-purple-600" />
                  <CardTitle>Training Plans</CardTitle>
                  <CardDescription>
                    Access personalized training plans designed to help you reach your goals.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-red-600" />
                  <CardTitle>Find Coaches</CardTitle>
                  <CardDescription>
                    Discover qualified badminton coaches in your area using our interactive map.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Trophy className="h-8 w-8 text-yellow-600" />
                  <CardTitle>Tournaments</CardTitle>
                  <CardDescription>
                    Find and register for local badminton tournaments and competitions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <MessageCircle className="h-8 w-8 text-indigo-600" />
                  <CardTitle>AI Coach</CardTitle>
                  <CardDescription>
                    Get instant advice and tips from our AI-powered badminton coaching assistant.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to improve your game?</span>
            <span className="block">Start your journey today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Join thousands of badminton players who are already using NexusForge to improve their skills.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" variant="secondary" className="mt-8">
              Get started for free
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <div className="flex items-center">
              <Target className="h-6 w-6 text-gray-400" />
              <span className="ml-2 text-sm text-gray-400">Badminton NexusForge</span>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 Badminton NexusForge. Built for the badminton community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
