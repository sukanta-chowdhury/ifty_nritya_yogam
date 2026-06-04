import { Instagram, Youtube, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

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
                  <div className="mt-1 font-medium text-brown">
                    Ifty Nritya Yogam Studio, City, India
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <a
                href="tel:+919999999999"
                className="flex items-start gap-3 rounded-3xl bg-warmWhite p-6 shadow-warm transition hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-brownLight">
                    Phone
                  </div>
                  <div className="mt-1 font-medium text-brown">+91 99999 99999</div>
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
                    Studio Hours
                  </div>
                  <div className="mt-1 text-sm text-brown">
                    Mon–Sat · 7:00 AM – 8:00 PM
                    <br />
                    Sun · 9:00 AM – 1:00 PM
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
              title="Studio location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
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
