import { MapPin, Compass, Heart, Navigation } from "lucide-react"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-bold text-green-600">ParkFinder</h1>

        <div className="flex gap-6 text-sm">
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#how" className="hover:text-green-600">How it works</a>
          <a href="#explore" className="hover:text-green-600">Explore</a>
        </div>
<Link to="/home" className="bg-green-600 text-white px-4 py-2 rounded-lg">
      
          Get Started
     
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Discover Parks & Recreational
          <span className="text-green-600"> Spots Near You</span>
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Find beautiful parks, trails, and recreational centers around you.
          Explore nature, plan visits, and save your favorite locations.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
            Explore Nearby
          </button>

          <button className="border px-6 py-3 rounded-lg">
            View Map
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Use ParkFinder?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          <div className="text-center">
            <MapPin className="mx-auto text-green-600 mb-4" size={40}/>
            <h3 className="font-semibold mb-2">Nearby Locations</h3>
            <p className="text-gray-600">
              Automatically discover parks and recreational centers near you.
            </p>
          </div>

          <div className="text-center">
            <Compass className="mx-auto text-green-600 mb-4" size={40}/>
            <h3 className="font-semibold mb-2">Explore the Map</h3>
            <p className="text-gray-600">
              Browse beautiful outdoor spots using our interactive map.
            </p>
          </div>

          <div className="text-center">
            <Heart className="mx-auto text-green-600 mb-4" size={40}/>
            <h3 className="font-semibold mb-2">Save Favorites</h3>
            <p className="text-gray-600">
              Save the places you love and plan your visits easily.
            </p>
          </div>

        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">

          <div>
            <Navigation className="mx-auto text-green-600 mb-4" size={40}/>
            <h3 className="font-semibold">Enable Location</h3>
            <p className="text-gray-600">
              Allow the app to detect your location.
            </p>
          </div>

          <div>
            <Compass className="mx-auto text-green-600 mb-4" size={40}/>
            <h3 className="font-semibold">Explore Nearby</h3>
            <p className="text-gray-600">
              Discover parks and recreational areas nearby.
            </p>
          </div>

          <div>
            <Heart className="mx-auto text-green-600 mb-4" size={40}/>
            <h3 className="font-semibold">Save & Visit</h3>
            <p className="text-gray-600">
              Save your favorite places and visit anytime.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Exploring Beautiful Outdoor Spots
        </h2>

        <p className="mb-8">
          Discover parks and recreational places around you today.
        </p>

        <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ParkFinder. All rights reserved.
      </footer>

    </div>
  )
}