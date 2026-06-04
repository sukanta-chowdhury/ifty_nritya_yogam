import { motion } from 'framer-motion';
import type { Program } from '../../data/programs';

type Props = {
  program: Program;
  index: number;
  onBookDemo: () => void;
};

export default function ProgramCard({ program, index, onBookDemo }: Props) {
  return (
    <motion.article
      className="group overflow-hidden rounded-3xl bg-warmWhite shadow-warm transition hover:-translate-y-1.5 hover:shadow-warmLg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={program.image}
          alt={program.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-warmWhite/95 px-3 py-1 text-xs font-medium text-brown shadow-warm">
          {program.duration}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-brown">{program.name}</h3>
        <p className="mt-2 text-sm text-brownLight">{program.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <a
            href="#contact"
            className="text-sm font-medium text-goldDark transition hover:text-gold"
          >
            Explore →
          </a>
          <button
            onClick={onBookDemo}
            className="rounded-full bg-gold px-4 py-2 text-xs font-medium text-white transition hover:bg-goldDark"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.article>
  );
}
