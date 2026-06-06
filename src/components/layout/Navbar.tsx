import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { PHONE_TEL } from '../../utils/submitLead';

type Props = { onBookDemo: () => void };

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Yoga', href: '#yoga' },
  { label: 'Dance', href: '#dance' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onBookDemo }: Props) {
  const scrolled = useScrollPosition(50);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 shadow-warm backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/images/logo.jpg"
            alt="Ifty Nritya Yogam"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-heading text-lg font-bold text-brown sm:text-xl">
            Ifty Nritya Yogam
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-brown transition hover:text-goldDark"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-4 py-2 text-sm font-medium text-gold transition hover:bg-gold hover:text-white"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button
            onClick={onBookDemo}
            className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-white shadow-warm transition hover:bg-goldDark"
          >
            Free Demo
          </button>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="rounded-full p-2 text-brown md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-cream md:hidden"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="container-x flex h-16 items-center justify-between">
              <span className="font-heading text-lg font-bold text-brown">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-brown"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="container-x mt-4 flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-heading text-2xl text-brown hover:bg-creamDark"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-6 flex flex-col gap-3 px-4">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold px-4 py-3 text-sm font-medium text-gold"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <button
                  onClick={() => {
                    setOpen(false);
                    onBookDemo();
                  }}
                  className="rounded-full bg-gold px-5 py-3 text-sm font-medium text-white shadow-warm"
                >
                  Book Free Demo
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
