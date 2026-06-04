import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const visible = [0, 1, 2].map(
    (offset) => testimonials[(index + offset) % testimonials.length]
  );

  return (
    <section id="testimonials" className="section bg-creamDark">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow">Student Love</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-brown sm:text-5xl">
            Stories That <span className="italic text-gold">Inspire</span>
          </h2>
        </div>

        <div className="relative mt-12">
          <div className="grid gap-6 md:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((t, i) => (
                <motion.article
                  key={`${t.id}-${index}-${i}`}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative overflow-hidden rounded-3xl bg-warmWhite p-6 shadow-warm ${
                    i > 0 ? 'hidden md:block' : ''
                  }`}
                >
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700">
                    <BadgeCheck className="h-3 w-3" /> Verified
                  </div>
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold" />
                    ))}
                  </div>
                  <blockquote className="mt-4 font-heading italic text-brown">
                    "{t.quote}"
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 font-heading text-sm font-bold text-gold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brown">{t.name}</div>
                      <div className="text-xs text-brownLight">{t.classType}</div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              aria-label="Previous"
              onClick={() =>
                setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-brown hover:bg-gold hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-gold' : 'w-2 bg-gold/30'
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-brown hover:bg-gold hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
