import React from 'react';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Yoga', href: '#yoga' },
    { name: 'Dance', href: '#dance' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  const yogaServices = [
    'Hatha Yoga',
    'Vinyasa Flow',
    'Pranayama',
    'Meditation',
    'Breathing Exercises'
  ];

  const danceServices = [
    'Kathak',
    'Classical Dance',
    'Semi-Classical',
    'Contemporary',
    'Folk Dance'
  ];

  return (
    <footer className="bg-text-primary text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-secondary to-accent py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Connected with Our Community</h3>
          <p className="text-primary mb-6 max-w-2xl mx-auto">
            Get weekly wellness tips, pose tutorials, and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-text-primary focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-accent px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/src/assets/images/logo.jpg" 
                alt="Ifty Nritya Yogam" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Ifty Nritya Yogam</h3>
                <p className="text-gray-400 text-sm">Wellness & Movement</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Where the dancer becomes the dance, true dance begins and where the breath turns still, true yoga awakens.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Our Services</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-accent mb-2">Yoga Classes</h5>
                <ul className="space-y-1 text-sm">
                  {yogaServices.map((service, index) => (
                    <li key={index} className="text-gray-400 hover:text-gray-300 transition-colors">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-accent mb-2">Dance Classes</h5>
                <ul className="space-y-1 text-sm">
                  {danceServices.map((service, index) => (
                    <li key={index} className="text-gray-400 hover:text-gray-300 transition-colors">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">123 Wellness Street</p>
                  <p className="text-gray-300 text-sm">Mindful City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3" />
                <a href="mailto:info@iftynrityayogam.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@iftynrityayogam.com
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-accent mr-3" />
                <a href="https://wa.me/919876543210" className="text-gray-300 hover:text-primary transition-colors">
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Class Timings */}
            <div className="mt-6 p-4 bg-text-secondary rounded-xl">
              <h5 className="font-medium text-primary mb-2">Class Timings</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Mon-Fri: 6:00 AM - 8:00 PM</p>
                <p>Sat-Sun: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Ifty Nritya Yogam. All rights reserved. Made with{' '}
              <Heart className="w-4 h-4 inline text-red-500" /> for wellness.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;