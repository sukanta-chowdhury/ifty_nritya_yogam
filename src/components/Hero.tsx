import { ArrowRight, Play, Star } from 'lucide-react';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Find Your Balance';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index += 1;
      if (index >= fullText.length) {
        clearInterval(intervalId);
      }
    }, 120);

    return () => clearInterval(intervalId);
  }, []);
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
              <p className="text-xs lg:text-sm font-semibold tracking-wider bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent uppercase">
                Welcome to Ifty Nritra Yogam
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                  {typedText}
                </span>
                {typedText.length < fullText.length && (
                  <span className="text-text-primary">|</span>
                )}
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary font-light max-w-2xl mx-auto lg:mx-0 leading-8 text-balance italic border-l-4 border-secondary/70 pl-5">
                “Where the dancer becomes the dance, true dance begins and where the breath turns still, true yoga awakens.”
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="group bg-gradient-to-r from-secondary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Book Free Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <button className="group border-2 border-secondary text-secondary px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Watch Classes
              </button>
            </div>

            {/* Stats - slower counters */}
            <div className="flex justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">
                  <CountUp end={100} duration={6} />+
                </div>
                <div className="text-text-secondary/80">Interested</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">
                  <CountUp end={50} duration={6} />+
                </div>
                <div className="text-text-secondary/80">Classes Monthly</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <span className="text-3xl font-bold text-secondary">
                    <CountUp end={4.9} duration={6} decimals={1} />
                  </span>
                  <Star className="ml-1 text-yellow-400 fill-current" size={20} />
                </div>
                <div className="text-text-secondary/80">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Images (no text overlays) */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 lg:gap-6 items-center">
              <div className="relative">
                <img 
                  src="/src/assets/images/Yoga1.jpg" 
                  alt="Yoga Practice" 
                  className="w-full h-[420px] lg:h-[500px] object-cover rounded-3xl shadow-2xl transform-gpu transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
              <div className="relative">
                <img 
                  src="/src/assets/images/DanceHome.jpg" 
                  alt="Dance Practice" 
                  className="w-full h-[420px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;