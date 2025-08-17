import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const phoneNumber = "918100677351";
  const welcomeMessage = "Hi 👋! Thanks for visiting Ifty Nritya Yogam. How can we help you today? 💬";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(welcomeMessage)}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Chat Bubble */}
      {isChatOpen && (
        <div className="bg-white rounded-xl shadow-2xl w-72 mb-4 p-4 border border-gray-200 animate-fade-in-up">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold text-text-primary">Chat with us</h4>
            <button onClick={toggleChat} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>
          <p className="text-sm text-text-secondary mb-4">
            {welcomeMessage}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
          >
            Start Chat
            <MessageCircle className="ml-2 w-4 h-4" />
          </a>
        </div>
      )}

      {/* Floating Icon */}
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative"
        aria-label="Chat with us on WhatsApp"
      >
        {!isChatOpen ? <MessageCircle className="w-8 h-8" /> : <X className="w-8 h-8" />}
        {!isChatOpen && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full animate-bounce">
            Hi 👋
          </span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
