import React from 'react';
import { Monitor, Users, Clock, Wifi, WifiOff, MapPin } from 'lucide-react';

const OnlineOfflineSupport = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Learn Your Way: <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Online & Offline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the format that fits your lifestyle. We offer both virtual and in-person classes with the same quality instruction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Online Classes */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-l-4 border-purple-500">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl mr-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Online Classes</h3>
                <p className="text-purple-600 font-medium">Join from anywhere</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Wifi className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Live Interactive Sessions</h4>
                  <p className="text-gray-600 text-sm">Real-time guidance with personalized attention</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Flexible Scheduling</h4>
                  <p className="text-gray-600 text-sm">Multiple time slots to fit your routine</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Recorded Sessions</h4>
                  <p className="text-gray-600 text-sm">Access class recordings for practice</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6">
              <h4 className="font-bold text-purple-800 mb-2">Perfect for:</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Busy professionals</li>
                <li>• Students with travel schedules</li>
                <li>• Those preferring home practice</li>
                <li>• International participants</li>
              </ul>
            </div>
          </div>

          {/* Offline Classes */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-l-4 border-pink-500">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 p-4 rounded-2xl mr-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Studio Classes</h3>
                <p className="text-pink-600 font-medium">In-person experience</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <WifiOff className="w-5 h-5 text-pink-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Hands-on Guidance</h4>
                  <p className="text-gray-600 text-sm">Direct physical adjustments and corrections</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-5 h-5 text-pink-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Community Energy</h4>
                  <p className="text-gray-600 text-sm">Practice with like-minded individuals</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-pink-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Professional Studio</h4>
                  <p className="text-gray-600 text-sm">Equipped with all necessary props and ambiance</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 rounded-2xl p-6">
              <h4 className="font-bold text-pink-800 mb-2">Perfect for:</h4>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>• Beginners needing guidance</li>
                <li>• Those seeking community</li>
                <li>• Advanced practitioners</li>
                <li>• Local residents</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't Decide? Try Both!</h3>
            <p className="text-lg mb-6 opacity-90">
              Start with our free demo class and experience both online and offline options
            </p>
            <a href="#contact" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block">
              Book Free Demo Class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineOfflineSupport;
