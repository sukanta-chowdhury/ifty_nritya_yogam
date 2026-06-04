import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Users, Award } from 'lucide-react';

type Props = { onBookDemo: () => void };

export default function AboutSection({ onBookDemo }: Props) {
  return (
    <section id="about" className="section bg-creamDark">
      <div className="container-x grid items-center gap-12 md:grid-cols-2">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/suriya.png"
            alt="Instructor Ifty"
            className="h-[480px] w-full rounded-2xl object-cover shadow-warmLg"
          />
          <div className="absolute -right-3 top-6 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-white shadow-warm">
            10+ Years Teaching
          </div>
          <div className="absolute -bottom-4 left-6 flex items-center gap-2 rounded-2xl bg-warmWhite px-4 py-3 shadow-warm">
            <Award className="h-5 w-5 text-gold" />
            <span className="text-sm font-medium text-brown">Government Certified</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="eyebrow">Meet Your Instructor</p>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-tight text-brown sm:text-5xl">
            Guided by Passion, <br />
            Driven by <span className="italic text-gold">Purpose</span>
          </h2>

          <div className="mt-6 space-y-4 text-brownLight">
            <p>
              Ifty brings over a decade of classical dance training and a deep passion for yoga
              to every session. Her journey began with Kathak and evolved into a lifelong study
              of mindful movement.
            </p>
            <p>
              Her teaching philosophy is simple — mindful movement should be inclusive, joyful,
              and accessible to every age, body, and ability.
            </p>
            <p>
              From an intimate offline studio to live online classes nationwide, Ifty has
              taught 100+ students across India to find their balance — on and off the mat.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-2xl bg-warmWhite px-4 py-3 shadow-warm">
              <GraduationCap className="h-5 w-5 text-gold" />
              <span className="text-xs font-medium text-brown">Govt. Certified</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-warmWhite px-4 py-3 shadow-warm">
              <Calendar className="h-5 w-5 text-gold" />
              <span className="text-xs font-medium text-brown">6+ Yrs Teaching</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-warmWhite px-4 py-3 shadow-warm">
              <Users className="h-5 w-5 text-gold" />
              <span className="text-xs font-medium text-brown">100+ Students</span>
            </div>
          </div>

          <button
            onClick={onBookDemo}
            className="mt-8 rounded-full bg-gold px-8 py-4 font-medium text-white shadow-warm transition hover:-translate-y-0.5 hover:bg-goldDark"
          >
            Book a Free Demo →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
