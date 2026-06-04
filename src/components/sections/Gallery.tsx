import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Instagram, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { galleryItems, type GalleryItem } from '../../data/gallery';

type Props = { onBookDemo: () => void };

const filters = ['All', 'Yoga', 'Dance', 'Workshops', 'Performances'] as const;

export default function Gallery({ onBookDemo }: Props) {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = useMemo<GalleryItem[]>(
    () => (filter === 'All' ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight')
        setLightboxIndex((i) => (i === null ? null : (i + 1) % items.length));
      if (e.key === 'ArrowLeft')
        setLightboxIndex((i) =>
          i === null ? null : (i - 1 + items.length) % items.length
        );
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, items.length]);

  return (
    <section id="gallery" className="section bg-creamDark">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow">Our Gallery</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-brown sm:text-5xl">
            Real Moments, Real <span className="italic text-gold">Transformation</span>
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === f
                  ? 'bg-gold text-white shadow-warm'
                  : 'border border-gold/40 text-brown hover:bg-cream'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="masonry mt-10">
          {items.map((item, i) => (
            <button
              key={item.src + i}
              onClick={() => setLightboxIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-warm focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-brown/85 via-brown/0 to-brown/0 p-4 opacity-0 transition group-hover:opacity-100">
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-medium text-white">
                  {item.category}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-6 py-3 text-sm font-medium text-gold transition hover:bg-gold hover:text-white"
          >
            <Instagram className="h-4 w-4" /> See more on Instagram
          </a>
          <button
            onClick={onBookDemo}
            className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-white shadow-warm hover:bg-goldDark"
          >
            Book Your Spot in Our Next Class →
          </button>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              aria-label="Close lightbox"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(null);
              }}
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (i) => (i! - 1 + items.length) % items.length
                );
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <motion.img
              key={lightboxIndex}
              src={items[lightboxIndex].src}
              alt={items[lightboxIndex].alt}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i! + 1) % items.length);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
