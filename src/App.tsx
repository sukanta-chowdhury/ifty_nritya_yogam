import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WelcomeLeadModal from './components/modals/WelcomeLeadModal';
import ExitIntentPopup from './components/modals/ExitIntentPopup';
import HeroSection from './components/sections/HeroSection';
import MarqueeBanner from './components/sections/MarqueeBanner';
import AboutSection from './components/sections/AboutSection';
import YogaPrograms from './components/sections/YogaPrograms';
import DancePrograms from './components/sections/DancePrograms';
import Gallery from './components/sections/Gallery';
import ClassSchedule from './components/sections/ClassSchedule';
import Testimonials from './components/sections/Testimonials';
import StatsSection from './components/sections/StatsSection';
import Pricing from './components/sections/Pricing';
import InlineCTA from './components/sections/InlineCTA';
import FAQ from './components/sections/FAQ';
import ContactSection from './components/sections/ContactSection';
import WhatsAppButton from './components/ui/WhatsAppButton';
import StickyMobileCTA from './components/ui/StickyMobileCTA';
import { useExitIntent } from './hooks/useExitIntent';

function App() {
  const [welcomeOpen, setWelcomeOpen] = useState(false);
  const [exitOpen, setExitOpen] = useState(false);
  const [converted, setConverted] = useState(false);

  const exitTriggered = useExitIntent(!converted);

  useEffect(() => {
    if (sessionStorage.getItem('welcomeModalShown') === '1') return;
    const t = setTimeout(() => {
      setWelcomeOpen(true);
      sessionStorage.setItem('welcomeModalShown', '1');
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (exitTriggered && !converted) setExitOpen(true);
  }, [exitTriggered, converted]);

  const openWelcome = useCallback(() => setWelcomeOpen(true), []);

  return (
    <div className="min-h-screen bg-cream font-body text-brownLight">
      <Navbar onBookDemo={openWelcome} />

      <main>
        <HeroSection onBookDemo={openWelcome} />
        <MarqueeBanner />
        <AboutSection onBookDemo={openWelcome} />
        <YogaPrograms onBookDemo={openWelcome} />
        <DancePrograms onBookDemo={openWelcome} />
        <Gallery onBookDemo={openWelcome} />
        <ClassSchedule />
        <Testimonials />
        <StatsSection />
        <Pricing />
        <InlineCTA />
        <FAQ />
        <ContactSection />
      </main>

      <Footer />

      <WhatsAppButton />
      <StickyMobileCTA onBookDemo={openWelcome} />

      <WelcomeLeadModal
        open={welcomeOpen}
        onClose={() => setWelcomeOpen(false)}
        onConverted={() => setConverted(true)}
      />
      <ExitIntentPopup open={exitOpen} onClose={() => setExitOpen(false)} />
    </div>
  );
}

export default App;
