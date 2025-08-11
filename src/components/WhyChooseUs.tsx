import React from 'react';
import { 
  Monitor, 
  DollarSign, 
  Clock, 
  Heart, 
  MessageCircle, 
  Users, 
  Award,
  Sparkles 
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Online + Offline Facility",
      description: "Flexibility to choose between virtual classes or in-person studio sessions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Budget-Friendly Pricing",
      description: "Affordable packages that make wellness accessible to everyone",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Timing",
      description: "Classes scheduled to fit your busy lifestyle with multiple time slots",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Dance + Yoga Under One Roof",
      description: "Complete wellness solution combining movement, flexibility, and mindfulness",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Daily Affirmations Practice",
      description: "Start each session with positive affirmations for mental wellness",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Active WhatsApp Community",
      description: "24/7 support and motivation through our vibrant community group",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Instructors",
      description: "Learn from experienced and certified yoga and dance professionals",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "All Age Groups Welcome",
      description: "Specialized programs designed for children, adults, and seniors",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Ifty Nritya Yogam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for thousands of students on their wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {React.cloneElement(feature.icon, { className: "w-6 h-6 text-white" })}
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-purple-100">Classes Conducted</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-purple-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-purple-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;