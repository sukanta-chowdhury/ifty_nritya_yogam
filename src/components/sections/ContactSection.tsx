import { Instagram, Youtube, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { MAP_EMBED_URL, PHONE_DISPLAY, PHONE_TEL, STUDIO_ADDRESS } from '../../utils/submitLead';

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-cream">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-brown sm:text-5xl">
            Let's <span className="italic text-gold">Connect</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-3xl bg-warmWhite p-6 shadow-warm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-brownLight">
                    Studio Address
                  </div>
                  <div className="mt-1 font-medium text-brown">{STUDIO_ADDRESS}</div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-start gap-3 rounded-3xl bg-warmWhite p-6 shadow-warm transition hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-brownLight">
                    Phone
                  </div>
                  <div className="mt-1 font-medium text-brown">{PHONE_DISPLAY}</div>
                </div>
              </a>

              <a
                href="mailto:hello@iftynrityayogam.in"
                className="flex items-start gap-3 rounded-3xl bg-warmWhite p-6 shadow-warm transition hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-brownLight">
                    Email
                  </div>
                  <div className="mt-1 font-medium text-brown">hello@iftynrityayogam.in</div>
                </div>
              </a>
            </div>

            <div className="rounded-3xl bg-warmWhite p-6 shadow-warm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-brownLight">
                    Class Timings
                  </div>
                  <div className="mt-1 text-sm text-brown">
                    Mon, Fri &amp; Sun · 8:15 AM (Morning)
                    <br />
                    Thu · 8:15 AM (Morning) &amp; 5:00 PM (Evening)
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Facebook, href: '#', label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-warmWhite text-gold shadow-warm hover:bg-gold hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-warm">
            <iframe
              title="Studio location — Amala Nursing Home, Chinsurah"
              src={MAP_EMBED_URL}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
