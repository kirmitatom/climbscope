import Image from "next/image";
import { FaMountain, FaRoute, FaUserFriends, FaChartLine } from "react-icons/fa";
import { GiCarabiner } from "react-icons/gi";

type ClimbingLocation = {
  name: string;
  region: string;
  difficulty: string;
  temperature: string;
  grade: string;
  rating: number;
  reviewCount: number;
  conditions: string;
  description: string;
  image: string;
};

export default function Home() {
  const featuredLocation: ClimbingLocation = {
    name: "Yosemite Valley",
    region: "California, US",
    difficulty: "8.5 ML",
    temperature: "22°C",
    grade: "IV+",
    rating: 4.9,
    reviewCount: 2400,
    conditions: "Perfect friction conditions",
    description: "El Capitan, Half Dome, and more legendary formations",
    image: "/yosemite-valley.jpg"
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-amber-900 to-stone-800 text-stone-50 py-20 px-6 rounded-b-3xl shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-amber-400">Vertical Horizon</span> Climbing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200 max-w-2xl mx-auto">
            Where rugged rock faces meet the thrill of ascent. Discover climbing destinations where every hold tells a story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all hover:shadow-amber-600/30">
              Get Started
            </button>
            <button className="border-2 border-stone-300 hover:border-stone-100 bg-stone-900/20 px-8 py-3 rounded-full font-semibold transition-all">
              Explore Routes
            </button>
          </div>
        </div>
      </header>

      {/* Auth Section */}
      <section className="max-w-md mx-auto my-12 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-stone-800 mb-6">
          Join the Ascent
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition-all flex-1">
            Create Account
          </button>
          <button className="border border-stone-300 hover:border-stone-400 px-6 py-2 rounded-full font-medium transition-all flex-1">
            Sign In
          </button>
        </div>
        <p className="text-center text-stone-500 mt-4 text-sm">
          Download our app for route tracking
        </p>
      </section>

      {/* Featured Location */}
      <section className="max-w-6xl mx-auto my-16 px-6">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <Image 
                src={featuredLocation.image}
                alt={featuredLocation.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold text-sky-800 mb-2">
                {featuredLocation.name}
              </h3>
              <p className="text-stone-600 mb-6">{featuredLocation.region}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-600">{featuredLocation.difficulty}</p>
                  <p className="text-sm text-stone-500">Difficulty</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-600">{featuredLocation.temperature}</p>
                  <p className="text-sm text-stone-500">Temperature</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-600">{featuredLocation.grade}</p>
                  <p className="text-sm text-stone-500">Grade</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <span className="text-amber-600 mr-2">☀️</span>
                <span className="text-stone-700">{featuredLocation.conditions}</span>
              </div>

              <div className="flex items-center mb-6">
                <span className="text-xl font-bold text-amber-600 mr-2">
                  {featuredLocation.rating}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-stone-500 text-sm ml-2">
                  ({featuredLocation.reviewCount.toLocaleString()} ratings)
                </span>
              </div>

              <p className="text-stone-700">{featuredLocation.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto my-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">
          Why Climbers Choose Us
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaRoute className="text-3xl text-amber-600" />,
              title: "Route Database",
              description: "Comprehensive catalog of climbs worldwide with detailed beta"
            },
            {
              icon: <GiCarabiner className="text-3xl text-amber-600" />,
              title: "Gear Recommendations",
              description: "Personalized suggestions based on your climbing style"
            },
            {
              icon: <FaUserFriends className="text-3xl text-amber-600" />,
              title: "Community Beta",
              description: "Real-time condition reports from fellow climbers"
            },
            {
              icon: <FaChartLine className="text-3xl text-amber-600" />,
              title: "Progress Tracking",
              description: "Visualize your improvement across all climbing disciplines"
            },
            {
              icon: <GiCarabiner className="text-3xl text-amber-600" />,
              title: "Safety Resources",
              description: "Learn proper techniques from certified guides"
            },
            {
              icon: <FaMountain className="text-3xl text-amber-600" />,
              title: "Destination Guides",
              description: "Plan your next climbing trip with local insights"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-stone-800">{feature.title}</h3>
              <p className="text-stone-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-amber-400">Vertical</span> Horizon
              </h2>
              <p className="max-w-xs">By climbers, for climbers. Established 2023.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Explore</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-amber-400 transition">Routes</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Gyms</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Destinations</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Community</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-amber-400 transition">Forums</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Events</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Partners</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-amber-400 transition">About</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Careers</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-700 mt-12 pt-8 text-center text-sm">
            <p>© 2023 Vertical Horizon Climbing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}