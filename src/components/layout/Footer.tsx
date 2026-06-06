import { Instagram, Youtube, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { PHONE_DISPLAY, STUDIO_ADDRESS } from '../../utils/submitLead';

export default function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.jpg"
              alt="Ifty Nritya Yogam"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-heading text-xl font-bold text-warmWhite">
              Ifty Nritya Yogam
            </span>
          </div>
          <p className="mt-4 text-sm text-cream/80">
            Where movement meets mindfulness. Classical dance and yoga for every body.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 hover:bg-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 hover:bg-gold"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 hover:bg-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold text-warmWhite">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {['Home', 'Yoga', 'Dance', 'Pricing', 'Contact'].map((x) => (
              <li key={x}>
                <a
                  href={`#${x.toLowerCase()}`}
                  className="text-cream/80 hover:text-goldLight"
                >
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold text-warmWhite">Programs</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>Hatha Yoga</li>
            <li>Kathak</li>
            <li>Kids Classes</li>
            <li>Online Sessions</li>
            <li>Wedding Choreography</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold text-warmWhite">Stay in Touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-goldLight" />
              {STUDIO_ADDRESS}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-goldLight" /> {PHONE_DISPLAY}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-goldLight" /> hello@iftynrityayogam.in
            </li>
          </ul>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 flex overflow-hidden rounded-full bg-cream/10"
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-cream placeholder:text-cream/60 focus:outline-none"
            />
            <button className="bg-gold px-4 text-sm font-medium text-white hover:bg-goldDark">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x py-5 text-center text-xs text-cream/70">
          © {new Date().getFullYear()} Ifty Nritya Yogam · Made with 💛 · All rights reserved
        </div>
      </div>
    </footer>
  );
}
