import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import YogaBenefits from './components/YogaBenefits';
import OnlineOfflineSupport from './components/OnlineOfflineSupport';
import WhyChooseUs from './components/WhyChooseUs';
import YogaPage from './components/YogaPage';
import DancePage from './components/DancePage';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <YogaBenefits />
      <OnlineOfflineSupport />
      <WhyChooseUs />
      <YogaPage />
      <DancePage />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;