import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState('');
  const [showHiMessage, setShowHiMessage] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = '+918100677351';
  const studioName = 'Ifty Nritya Yogam';

  const quickQueries = [
    { label: 'Class Schedule', message: 'Hi! I would like to know about your class schedules and timings.' },
    { label: 'Pricing Info', message: 'Hello! Can you please share your pricing details and packages?' },
    { label: 'Book Demo', message: 'I would like to book a demo class.' },
    { label: 'Location', message: 'Hi! Can you share your studio location and directions?' },
    { label: 'Online Classes', message: 'I\'m interested in your online classes. Can you provide more details?' }
  ];

  const sendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleQuickQuery = (query: typeof quickQueries[0]) => {
    sendMessage(query.message);
  };

  const sendCustomMessage = () => {
    if (selectedQuery.trim()) {
      sendMessage(selectedQuery);
      setSelectedQuery('');
    }
  };

  const defaultMessage = 
    `Hi! I would like instant answers to common FAQs about ${studioName} (pricing, schedule, demo booking).`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {!isOpen ? (
          <div className="relative">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
              aria-label="Open WhatsApp Chat"
            >
              <MessageCircle size={24} />
              {/* Small red "Hi" badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full animate-bounce">
                Hi
              </span>
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-80 max-w-sm">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp Support</h3>
                  <p className="text-xs opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close WhatsApp Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-2xl p-3 mb-3">
                  <p className="text-sm text-gray-700">
                    👋 Hi! Welcome to <strong>{studioName}</strong>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    How can we help you today? Choose a quick option or send a custom message:
                  </p>
                </div>

                {/* Quick Query Buttons */}
                <div className="space-y-2 mb-4">
                  {quickQueries.map((query, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuery(query)}
                      className="w-full text-left p-3 border border-gray-200 rounded-xl hover:bg-green-50 hover:border-green-300 transition-all duration-200 text-sm"
                    >
                      {query.label}
                    </button>
                  ))}
                </div>

                {/* Custom Message Input */}
                <div className="border-t pt-4">
                  <textarea
                    value={selectedQuery}
                    onChange={(e) => setSelectedQuery(e.target.value)}
                    placeholder="Type your custom message..."
                    className="w-full p-3 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={3}
                  />
                  <button
                    onClick={sendCustomMessage}
                    disabled={!selectedQuery.trim()}
                    className="w-full mt-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white p-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </button>
                </div>

                {/* Quick Connect Button */}
                <div className="mt-4 pt-4 border-t">
                  <button
                    onClick={() => sendMessage(defaultMessage)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    💬 Start WhatsApp Chat
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-gray-50 rounded-b-2xl text-center">
              <p className="text-xs text-gray-500">
                We typically reply within a few minutes
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppWidget;