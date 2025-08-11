import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Youtube,
  Send,
  Clock,
  Users
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredClass: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredClass: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Get In <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to start your wellness journey? Contact us today and take the first step towards a healthier, happier you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-primary font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-primary font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-medium mb-2">Preferred Class</label>
                  <select
                    name="preferredClass"
                    value={formData.preferredClass}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a class</option>
                    <option value="yoga">Yoga</option>
                    <option value="dance">Dance</option>
                    <option value="combo">Yoga + Dance Combo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your goals and any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-secondary to-accent text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-xl mr-4">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Studio Address</h4>
                    <p className="text-text-secondary">123 Wellness Street, Mindful City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-xl mr-4">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Phone</h4>
                    <p className="text-text-secondary">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-xl mr-4">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">WhatsApp</h4>
                    <p className="text-text-secondary">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-xl mr-4">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Email</h4>
                    <p className="text-text-secondary">info@iftynrityayogam.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Class Timings */}
            <div className="bg-gradient-to-r from-secondary to-accent rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                Class Timings
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Morning Yoga</span>
                  <span className="font-semibold">6:00 AM - 7:30 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Evening Yoga</span>
                  <span className="font-semibold">6:00 PM - 7:30 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Dance Classes</span>
                  <span className="font-semibold">4:00 PM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Weekend Special</span>
                  <span className="font-semibold">9:00 AM - 11:00 AM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gradient-to-r from-pink-500 to-red-500 p-4 rounded-xl text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-xl text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <p className="text-text-secondary mt-4">
                Join our community of 500+ students and stay updated with tips, poses, and inspiration!
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Find Our Studio</h3>
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-text-secondary/80">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p>Interactive Map</p>
                <p className="text-sm">Google Maps integration would go here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;