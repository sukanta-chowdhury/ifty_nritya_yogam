import { motion } from 'framer-motion';
import { yogaPrograms } from '../../data/programs';
import ProgramCard from './ProgramCard';

type Props = { onBookDemo: () => void };

export default function YogaPrograms({ onBookDemo }: Props) {
  return (
    <section id="yoga" className="section bg-creamDark">
      <div className="container-x">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">What We Offer</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-brown sm:text-5xl">
            Yoga For Every <span className="italic text-gold">Body</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-brownLight">
            Beginner to advanced — online &amp; in-person sessions tailored to you.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {yogaPrograms.map((p, i) => (
            <ProgramCard key={p.id} program={p} index={i} onBookDemo={onBookDemo} />
          ))}
        </div>
      </div>
    </section>
  );
}
