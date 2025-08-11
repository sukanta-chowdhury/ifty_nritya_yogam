import React from 'react';
import { Music, Star, Clock, Users } from 'lucide-react';

const DancePage = () => {
  const danceForms = [
    {
      name: "Kathak",
      image: "/src/assets/images/Dance2.jpg",
      description: "Classical Indian dance form known for its intricate footwork, spins, and expressive storytelling through graceful movements.",
      origins: "Originated in North India, rooted in ancient temple traditions",
      benefits: ["Improves posture and grace", "Enhances cultural awareness", "Builds stamina and flexibility", "Develops rhythm and coordination"],
      levels: ["Beginner", "Intermediate", "Advanced"]
    },
    {
      name: "Classical Dance",
      image: "https://images.pexels.com/photos/3822688/pexels-photo-3822688.jpeg",
      description: "Traditional dance forms that preserve ancient cultural heritage through precise movements and expressions.",
      origins: "Ancient Indian classical traditions",
      benefits: ["Spiritual connection", "Physical discipline", "Cultural preservation", "Mental focus"],
      levels: ["Beginner", "Intermediate", "Advanced"]
    },
    {
      name: "Semi-Classical",
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
      description: "Fusion of classical techniques with contemporary expressions, creating a modern yet traditional dance style.",
      origins: "Modern adaptation of classical forms",
      benefits: ["Creative expression", "Versatile movement", "Cultural fusion", "Artistic freedom"],
      levels: ["Beginner", "Intermediate"]
    },
    {
      name: "Contemporary",
      image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg",
      description: "Modern dance form emphasizing emotional expression, fluid movements, and creative interpretation.",
      origins: "20th century modern dance evolution",
      benefits: ["Emotional release", "Creative freedom", "Physical strength", "Artistic expression"],
      levels: ["Beginner", "Intermediate", "Advanced"]
    },
    {
      name: "Folk Dance",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
      description: "Traditional regional dances celebrating cultural diversity and community spirit through vibrant movements.",
      origins: "Various regional traditions across India",
      benefits: ["Cultural celebration", "Community bonding", "Joyful expression", "Physical fitness"],
      levels: ["Beginner", "Intermediate"]
    }
  ];

  const levelColors = {
    "Beginner": "bg-green-100 text-green-800",
    "Intermediate": "bg-yellow-100 text-yellow-800",
    "Advanced": "bg-red-100 text-red-800"
  };

  return (
    <section id="dance" className="py-20 bg-gradient-to-b from-primary to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Dance</span> Forms
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore the beauty of movement through our diverse range of dance forms, from classical traditions to contemporary expressions
          </p>
        </div>

        {/* Dance Forms */}
        <div className="space-y-12">
          {danceForms.map((dance, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <img 
                    src={dance.image} 
                    alt={dance.name}
                    className="w-full h-auto max-h-[500px] object-contain rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Music className="w-5 h-5 inline mr-2" />
                      <span className="font-semibold">{dance.name}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-text-primary mb-4">{dance.name}</h3>
                    <p className="text-lg text-text-secondary leading-relaxed mb-4">
                      {dance.description}
                    </p>
                    <p className="text-sm text-accent font-medium">
                      <Star className="w-4 h-4 inline mr-1" />
                      {dance.origins}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-xl font-semibold text-text-primary mb-3">Benefits:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {dance.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          <span className="text-text-secondary">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skill Levels */}
                  <div>
                    <h4 className="text-xl font-semibold text-text-primary mb-3">Skill Levels:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dance.levels.map((level, idx) => (
                        <span 
                          key={idx}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[level]}`}
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dance Fees Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-secondary to-accent rounded-3xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Dance Class Fees</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <Clock className="w-8 h-8 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Monthly Fee</h4>
                <div className="text-3xl font-bold">₹1,500</div>
                <p className="text-primary mt-2">All dance forms included</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <Users className="w-8 h-8 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">One-Time Admission</h4>
                <div className="text-3xl font-bold">₹500</div>
                <p className="text-primary mt-2">Registration & materials</p>
              </div>
            </div>
            <button className="mt-8 bg-white text-accent px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DancePage;