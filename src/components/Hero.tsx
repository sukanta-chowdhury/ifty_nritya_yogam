import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-white to-primary">
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                  Find Your
                </span>
                <br />
                <span className="text-text-primary">Balance</span>
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary font-light">
                Where the dancer becomes the dance, true dance begins and where the breath turns still, true yoga awakens.
              </p>
              <p className="text-lg text-text-secondary/80">
                Experience the perfect harmony of movement and mindfulness at Ifty Nritya Yogam
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-secondary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Book Free Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="group border-2 border-secondary text-secondary px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Watch Classes
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">
                  <CountUp end={500} duration={3} />+
                </div>
                <div className="text-text-secondary/80">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">
                  <CountUp end={50} duration={3} />+
                </div>
                <div className="text-text-secondary/80">Classes Monthly</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <span className="text-3xl font-bold text-secondary">
                    <CountUp end={4.9} duration={3} decimals={1} />
                  </span>
                  <Star className="ml-1 text-yellow-400 fill-current" size={20} />
                </div>
                <div className="text-text-secondary/80">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/src/assets/images/Yoga1.jpg" 
                alt="Yoga Practice" 
                className="w-full h-auto max-h-[500px] object-contain rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-3xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-3xl opacity-20"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute top-8 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">Y</span>
                </div>
                <div>
                  <div className="font-semibold text-text-primary">Yoga Classes</div>
                  <div className="text-sm text-text-secondary/80">Online & Offline</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <div>
                  <div className="font-semibold text-text-primary">Dance Forms</div>
                  <div className="text-sm text-text-secondary/80">All Levels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;