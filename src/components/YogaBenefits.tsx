import React from 'react';
import { Heart, Zap, Shield, Smile, Leaf, Moon } from 'lucide-react';

const YogaBenefits = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Improves Flexibility",
      description: "Enhance your body's range of motion and reduce stiffness through gentle stretching and poses.",
      image: "/src/assets/images/Yogacrop5.jpg"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Builds Strength",
      description: "Develop core strength and muscle tone while maintaining balance and stability.",
      image: "/src/assets/images/Yogacrop4.jpg"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Boosts Immunity",
      description: "Strengthen your immune system through breathing exercises and stress reduction.",
      image: "/src/assets/images/Yogacrop1.jpg"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Reduces Stress",
      description: "Find inner peace and calm through mindful movement and meditation practices.",
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Better Breathing",
      description: "Learn pranayama techniques to improve lung capacity and oxygen flow.",
      image: "https://cdn.prod.website-files.com/67691f03eb5bfa3289b3dae7/67691f03eb5bfa3289b3ebd1_fashionable-woman-gym-outfit-sitting-600nw-2453082629.webp"
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Improves Sleep",
      description: "Achieve better sleep quality through relaxation techniques and evening practices.",
      image: "https://i0.wp.com/blog.sleepyhug.in/wp-content/uploads/2024/05/Relax-and-Sleep_-Mindfulness-Tips-from-SleepyHug-for-Better-Sleep-Quality.png?resize=770%2C470&ssl=1"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Benefits of <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Yoga</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover the transformative power of yoga and how it can enhance every aspect of your life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mb-2 w-fit">
                    {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                  </div>
                </div>
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaBenefits;