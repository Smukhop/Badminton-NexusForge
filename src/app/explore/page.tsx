import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Target, 
  Activity, 
  TrendingUp, 
  Users, 
  Trophy, 
  MapPin,
  MessageCircle,
  Calendar,
  BookOpen,
  Zap,
  Shield,
  Heart
} from 'lucide-react'

export default function Explore() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Target className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Badminton NexusForge
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Link href="/auth/login">
                <Button>Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="px-4 py-6 sm:px-0 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Explore Features</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover all the powerful tools and features available in Badminton NexusForge to help you improve your game and connect with the community.
          </p>
        </div>

        {/* Core Features */}
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Features</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Activity className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Match Analysis</CardTitle>
                <CardDescription>
                  Comprehensive match tracking and analysis with detailed statistics, performance insights, and improvement recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Track scores and match duration</li>
                  <li>• Analyze shot patterns and techniques</li>
                  <li>• Performance trends over time</li>
                  <li>• Opponent analysis and strategies</li>
                </ul>
                <Button className="w-full mt-4">Try Match Analysis</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Monitor your improvement with comprehensive charts, metrics, and milestone tracking across all aspects of your game.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Win/loss ratio tracking</li>
                  <li>• Skill level progression</li>
                  <li>• Personal records and achievements</li>
                  <li>• Performance comparisons</li>
                </ul>
                <Button className="w-full mt-4">View Progress</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Training Plans</CardTitle>
                <CardDescription>
                  Access personalized training programs designed by experts to help you reach your specific badminton goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Customized workout routines</li>
                  <li>• Skill-specific drills</li>
                  <li>• Progress milestones</li>
                  <li>• Video tutorials</li>
                </ul>
                <Button className="w-full mt-4">Start Training</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Community Features */}
        <div className="px-4 sm:px-0 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Community & Social</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Find Coaches & Courts</CardTitle>
                <CardDescription>
                  Discover qualified badminton coaches and available courts in your area using our interactive map feature.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Location-based search</li>
                  <li>• Coach ratings and reviews</li>
                  <li>• Court availability and booking</li>
                  <li>• Filter by skill level and price</li>
                </ul>
                <Button className="w-full mt-4">Explore Map</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Tournaments & Events</CardTitle>
                <CardDescription>
                  Find and register for local badminton tournaments, competitions, and community events near you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Local tournament listings</li>
                  <li>• Easy registration process</li>
                  <li>• Event calendar and reminders</li>
                  <li>• Tournament results tracking</li>
                </ul>
                <Button className="w-full mt-4">View Tournaments</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Player Network</CardTitle>
                <CardDescription>
                  Connect with other badminton players, find practice partners, and build your badminton network.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Player profiles and matching</li>
                  <li>• Practice partner finder</li>
                  <li>• Group formation tools</li>
                  <li>• Community discussions</li>
                </ul>
                <Button className="w-full mt-4">Join Network</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="px-4 sm:px-0 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Tools</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>AI Coaching Assistant</CardTitle>
                <CardDescription>
                  Get instant advice, tips, and personalized coaching recommendations from our AI-powered assistant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 coaching support</li>
                  <li>• Personalized advice</li>
                  <li>• Technique analysis</li>
                  <li>• Strategy recommendations</li>
                </ul>
                <Button className="w-full mt-4">Chat with AI</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Knowledge Base</CardTitle>
                <CardDescription>
                  Access comprehensive guides, tutorials, and resources covering all aspects of badminton techniques and strategies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Technique guides and videos</li>
                  <li>• Rules and regulations</li>
                  <li>• Equipment recommendations</li>
                  <li>• Strategy articles</li>
                </ul>
                <Button className="w-full mt-4">Browse Knowledge</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>
                  Deep dive into your performance data with advanced analytics, predictions, and improvement insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Advanced statistical analysis</li>
                  <li>• Performance predictions</li>
                  <li>• Weakness identification</li>
                  <li>• Goal setting and tracking</li>
                </ul>
                <Button className="w-full mt-4">View Analytics</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Getting Started */}
        <div className="px-4 sm:px-0 mt-12">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Join thousands of badminton players who are already improving their game with NexusForge
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <Shield className="h-12 w-12 text-blue-200 mb-2" />
                  <h3 className="font-semibold">Secure & Private</h3>
                  <p className="text-sm text-blue-100">Your data is safe and secure</p>
                </div>
                <div className="flex flex-col items-center">
                  <Zap className="h-12 w-12 text-blue-200 mb-2" />
                  <h3 className="font-semibold">Fast & Reliable</h3>
                  <p className="text-sm text-blue-100">Quick access to all features</p>
                </div>
                <div className="flex flex-col items-center">
                  <Heart className="h-12 w-12 text-blue-200 mb-2" />
                  <h3 className="font-semibold">Community Driven</h3>
                  <p className="text-sm text-blue-100">Built by badminton lovers</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/signup">
                  <Button size="lg" variant="secondary" className="text-blue-600">
                    Create Free Account
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Try Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}