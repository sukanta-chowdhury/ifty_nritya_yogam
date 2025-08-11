import React from 'react';
import { Check, Star, Crown, Heart } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Admission Fee",
      price: "₹500",
      period: "One-time",
      description: "Registration and welcome package",
      features: [
        "Welcome kit with materials",
        "Initial assessment session",
        "Access to community group",
        "Digital resources"
      ],
      icon: <Heart className="w-8 h-8" />,
      color: "from-secondary to-accent",
      buttonColor: "bg-secondary hover:bg-accent"
    },
    {
      name: "Yoga Classes",
      price: "₹1,000",
      period: "Monthly",
      description: "Complete yoga practice program",
      features: [
        "All yoga sessions included",
        "Breathing exercises",
        "Meditation guidance",
        "Online & offline access",
        "Recorded sessions",
        "Personal progress tracking"
      ],
      icon: <Star className="w-8 h-8" />,
      color: "from-secondary to-accent",
      buttonColor: "bg-secondary hover:bg-accent"
    },
    {
      name: "Dance Classes",
      price: "₹1,500",
      period: "Monthly",
      description: "All dance forms under one roof",
      features: [
        "5 different dance forms",
        "All skill levels welcome",
        "Performance opportunities",
        "Costume guidance",
        "Cultural education",
        "Flexible scheduling"
      ],
      icon: <Star className="w-8 h-8" />,
      color: "from-secondary to-accent",
      buttonColor: "bg-secondary hover:bg-accent"
    },
    {
      name: "Combo Plan",
      price: "₹2,000",
      period: "Monthly",
      description: "Best value - Yoga + Dance together",
      features: [
        "All yoga sessions",
        "All dance forms",
        "Priority booking",
        "Extended practice hours",
        "Personal attention",
        "Progress certificates",
        "Special workshops",
        "Community events"
      ],
      icon: <Crown className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      buttonColor: "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600",
      popular: true,
      savings: "Save ₹500/month"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Simple & <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Affordable</span> Pricing
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose the perfect plan for your wellness journey. No hidden fees, no long-term contracts.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className={`bg-gradient-to-r ${plan.color} p-4 rounded-2xl w-fit mb-6`}>
                  {React.cloneElement(plan.icon, { className: "w-8 h-8 text-white" })}
                </div>

                {/* Plan Details */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                  <p className="text-text-secondary mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
                    <span className="text-text-secondary/80 ml-2">/{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <div className="mt-2 text-green-600 font-semibold text-sm">
                      {plan.savings}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className={`w-full ${plan.buttonColor} text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                  {index === 0 ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary to-accent rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">🎉 Special Offer for New Students!</h3>
            <p className="text-lg mb-6 opacity-90">
              Get your first class absolutely FREE! Experience our teaching style and studio atmosphere before committing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-accent px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Book Free Demo Class
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-accent transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-text-primary mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-text-primary mb-2">Can I switch between plans?</h4>
              <p className="text-text-secondary text-sm">Yes, you can upgrade or change your plan anytime. We'll adjust the billing accordingly.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-text-primary mb-2">Are there any hidden fees?</h4>
              <p className="text-text-secondary text-sm">No hidden fees! The prices shown include everything except the one-time admission fee.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-text-primary mb-2">What if I miss classes?</h4>
              <p className="text-text-secondary text-sm">We offer makeup classes and recorded sessions for online students who miss live classes.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-text-primary mb-2">Is there a family discount?</h4>
              <p className="text-text-secondary text-sm">Yes! We offer special family packages. Contact us for customized pricing for multiple family members.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;