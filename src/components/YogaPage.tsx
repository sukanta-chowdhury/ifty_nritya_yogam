import React from 'react';
import { Leaf, Wind, Heart, Brain, Zap, Shield } from 'lucide-react';

const YogaPage = () => {
  const yogaPoses = [
    {
      name: "Surya Namaskara",
      image: "/src/assets/images/suriya.png",
      benefits: [
        "Improves cardiovascular health",
        "Enhances flexibility and strength",
        "Boosts energy levels",
        "Promotes mental clarity"
      ]
    },
    {
      name: "Vrikshasana (Tree Pose)",
      image: "/src/assets/images/Yogacrop2.jpg",
      benefits: [
        "Improves balance and stability",
        "Strengthens legs and core",
        "Enhances concentration",
        "Calms the mind"
      ]
    },
    {
      name: "Padmasana (Lotus Pose)",
      image: "/src/assets/images/Yoga1.jpg",
      benefits: [
        "Perfect for meditation",
        "Improves posture",
        "Increases hip flexibility",
        "Promotes inner peace"
      ]
    },
    {
      name: "Bhujangasana (Cobra Pose)",
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
      benefits: [
        "Strengthens spine",
        "Opens chest and shoulders",
        "Improves digestion",
        "Reduces stress"
      ]
    },
    {
      name: "Balasana (Child's Pose)",
      image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg",
      benefits: [
        "Relieves stress and anxiety",
        "Stretches hips and thighs",
        "Calms the nervous system",
        "Promotes relaxation"
      ]
    },
    {
      name: "Warrior Pose",
      image: "https://images.pexels.com/photos/3822688/pexels-photo-3822688.jpeg",
      benefits: [
        "Builds strength and stamina",
        "Improves focus",
        "Stretches legs and hips",
        "Boosts confidence"
      ]
    }
  ];

  const breathingExercises = [
    {
      name: "Pranayama",
      icon: <Wind className="w-8 h-8" />,
      benefits: ["Reduces stress", "Improves lung capacity", "Enhances focus", "Balances emotions"],
      color: "from-secondary to-accent",
    },
    {
      name: "Anulom Vilom",
      icon: <Leaf className="w-8 h-8" />,
      benefits: ["Purifies blood", "Calms nervous system", "Improves concentration", "Balances energy"],
      color: "from-green-500 to-teal-500",
    },
    {
      name: "Kapalbhati",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Boosts metabolism", "Improves digestion", "Increases energy", "Detoxifies body"],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="yoga" className="py-20 bg-gradient-to-b from-white to-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Yoga</span> Practice
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover the ancient art of yoga through our carefully curated poses and breathing techniques
          </p>
        </div>

        {/* Yoga Poses Showcase */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-text-primary mb-12">Essential Yoga Poses</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yogaPoses.map((pose, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pose.image}
                    alt={pose.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">{pose.name}</h4>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-4">Benefits:</h4>
                  <ul className="space-y-2">
                    {pose.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-text-secondary">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Breathing Exercises */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-text-primary mb-12">Breathing Exercises</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {breathingExercises.map((exercise, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${exercise.color} p-4 rounded-2xl w-fit mb-6`}>
                  {React.cloneElement(exercise.icon, { className: "w-8 h-8 text-white" })}
                </div>

                <h4 className="text-2xl font-bold text-text-primary mb-4">{exercise.name}</h4>

                <div className="space-y-3">
                  {exercise.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <Heart className="w-4 h-4 text-red-400 mr-3" />
                      <span className="text-text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-gradient-to-r from-secondary to-accent rounded-3xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Experience Our Yoga Sessions</h3>
          <p className="text-lg mb-8 opacity-90">Watch a sample of our guided yoga practice and breathing techniques</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="aspect-video bg-white/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                </div>
                <p className="text-white/80">Sample Yoga Session</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaPage;