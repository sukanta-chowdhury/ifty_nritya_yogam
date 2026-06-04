import { motion } from 'framer-motion';
import { useState } from 'react';
import { dancePrograms } from '../../data/programs';
import ProgramCard from './ProgramCard';

type Props = { onBookDemo: () => void };

const filters = ['All', 'Classical', 'Contemporary', 'Kids', 'Bollywood'] as const;

export default function DancePrograms({ onBookDemo }: Props) {
  const [active, setActive] = useState<(typeof filters)[number]>('All');
  const shown =
    active === 'All' ? dancePrograms : dancePrograms.filter((d) => d.category === active);

  return (
    <section id="dance" className="section bg-cream">
      <div className="container-x">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Move With Meaning</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-brown sm:text-5xl">
            Dance Programs &amp; <span className="italic text-gold">Choreography</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-brownLight">
            From classical Indian forms to modern fusion — find your rhythm.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                active === f
                  ? 'bg-gold text-white shadow-warm'
                  : 'border border-gold/40 text-brown hover:bg-cream-dark'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <ProgramCard key={p.id} program={p} index={i} onBookDemo={onBookDemo} />
          ))}
        </div>
      </div>
    </section>
  );
}
