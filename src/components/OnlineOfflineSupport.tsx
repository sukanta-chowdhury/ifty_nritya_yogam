import React from 'react';
import { Monitor, MapPin, Video, Users, Clock, Award } from 'lucide-react';

const OnlineOfflineSupport = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Online</span> & <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Offline</span> Classes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the learning style that fits your lifestyle - join us virtually or visit our serene studio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Online Classes */}
          <div className="group">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl mr-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Online Classes</h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg">
                Join from the comfort of your home with our interactive online sessions. Perfect for busy schedules and flexible learning.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Video className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">Live Zoom Sessions</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">Recorded Sessions Available</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">Small Group Sessions</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">Personalized Feedback</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/70 rounded-2xl">
                <h4 className="font-semibold text-gray-800 mb-2">What You Get:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• HD video quality sessions</li>
                  <li>• Interactive Q&A sessions</li>
                  <li>• Digital class materials</li>
                  <li>• WhatsApp community support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Offline Classes */}
          <div className="group">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl mr-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Offline Classes</h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg">
                Experience the energy of our beautiful studio with personalized attention and hands-on guidance from certified instructors.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-700">Spacious Airy Studio</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-700">One-on-One Guidance</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-700">Hands-on Corrections</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-700">Flexible Timing</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/70 rounded-2xl">
                <h4 className="font-semibold text-gray-800 mb-2">Studio Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Natural lighting & ventilation</li>
                  <li>• Premium yoga equipment</li>
                  <li>• Peaceful ambiance</li>
                  <li>• Safe & hygienic environment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't Decide? Try Both!</h3>
            <p className="text-lg mb-6 opacity-90">
              Start with our free demo class and experience both online and offline options
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Book Free Demo Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineOfflineSupport;