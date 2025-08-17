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
  Clock
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredClass: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/mojahariftesum@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          preferredClass: formData.preferredClass,
          message: formData.message,
          _subject: 'New Contact - Ifty Nritya Yogam',
          _template: 'table',
          _captcha: 'false',
          _replyto: formData.email
        })
      });

      const result = await response.json();
      if (response.ok && result?.success) {
        setSubmitStatus({ type: 'success', message: 'Thanks! Your message has been sent. We will get back to you shortly.' });
        setFormData({ name: '', email: '', phone: '', preferredClass: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: 'Sorry, something went wrong. Please try again or reach us on WhatsApp.' });
      }
    } catch (err) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
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

              {submitStatus && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`text-sm px-4 py-3 rounded-xl ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-secondary to-accent text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform ${isSubmitting ? '' : 'hover:scale-105'} flex items-center justify-center disabled:opacity-70`}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
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
                    <p className="text-text-secondary">Amala Nursing Home, Near sanai lodge, Vivekananda Rd, Chinsurah R S,West Bengal 712103</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-xl mr-4">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Phone</h4>
                    <a href="tel:+918100677351" className="text-text-secondary hover:text-secondary transition-colors">+91 81006 77351</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-xl mr-4">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">WhatsApp</h4>
                    <a href="https://wa.me/918100677351" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-secondary transition-colors">+91 81006 77351</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-xl mr-4">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Email</h4>
                    <a href="mailto:info@iftynrityayogam.com" className="text-text-secondary hover:text-secondary transition-colors">info@iftynrityayogam.com</a>
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
                <a href="https://www.facebook.com/profile.php?id=61578262692004" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-xl text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <p className="text-text-secondary mt-4">
                Join our community of 100+ interested students and stay updated with tips, poses, and inspiration!
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Find Our Studio</h3>
            <div className="rounded-2xl overflow-hidden h-96 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8359669856706!2d88.38788497527037!3d22.901714579228475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f893e311b050e5%3A0x3d1d2e209be54b64!2sAmala%20Nursing%20Home!5e0!3m2!1sen!2sin!4v1692345678901!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amala Nursing Home Location - Ifty Nritya Yogam Studio"
              ></iframe>
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-primary to-secondary/10 rounded-xl">
              <p className="text-text-secondary text-sm">
                <strong>📍 Studio Location:</strong> Amala Nursing Home, Near Sanai Lodge, Vivekananda Rd, Chinsurah R S, West Bengal 712103
              </p>
              <p className="text-text-secondary text-sm mt-2">
                🚗 <strong>Directions:</strong> Click on the map above to get turn-by-turn directions from your location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;