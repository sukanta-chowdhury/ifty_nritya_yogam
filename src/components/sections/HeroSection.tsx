import { motion } from 'framer-motion';
import { Play, BadgeCheck, Globe } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';
import { useEffect, useRef, useState } from 'react';
import { legacyImages } from '../../data/images';

type Props = { onBookDemo: () => void };

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  const v = useCountUp(value, 1500, start);
  return (
    <div ref={ref}>
      <div className="font-heading text-3xl font-bold text-gold sm:text-4xl">
        {Math.round(v)}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-brownLight">{label}</div>
    </div>
  );
}

function RatingStat() {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  const v = useCountUp(4.9, 1500, start);
  return (
    <div ref={ref}>
      <div className="font-heading text-3xl font-bold text-gold sm:text-4xl">
        {start ? v.toFixed(1) : '0.0'} ★
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-brownLight">Rating</div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

export default function HeroSection({ onBookDemo }: Props) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-cream bg-radial-gold pb-16 pt-28 sm:pt-32"
    >
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <motion.p
            className="eyebrow"
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
          >
            Welcome to Ifty Nritya Yogam
          </motion.p>

          <motion.h1
            className="mt-4 font-heading text-5xl font-bold leading-[1.05] text-brown sm:text-6xl md:text-7xl"
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
          >
            Find Your <span className="italic text-gold">Balance</span>
          </motion.h1>

          <motion.blockquote
            className="mt-6 border-l-4 border-gold pl-4 font-body text-base italic text-brownLight sm:text-lg"
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
          >
            Where movement meets mindfulness — discover the joy of classical dance and the
            stillness of yoga, guided by a certified instructor who cares.
          </motion.blockquote>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
          >
            <button
              onClick={onBookDemo}
              className="rounded-full bg-gold px-8 py-4 font-medium text-white shadow-warm transition hover:-translate-y-0.5 hover:bg-goldDark"
            >
              Book Free Demo →
            </button>
            <a
              href="#yoga"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-7 py-3.5 font-medium text-gold transition hover:bg-gold hover:text-white"
            >
              <Play className="h-4 w-4" /> Watch Classes
            </a>
          </motion.div>

          <motion.div
            className="mt-10 grid max-w-md grid-cols-3 gap-5"
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
          >
            <Stat value={100} suffix="+" label="Interested" />
            <Stat value={6} suffix="+" label="Years Experience" />
            <RatingStat />
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto h-[420px] w-full max-w-md sm:h-[520px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={legacyImages.heroYoga}
            alt="Yoga practice outdoors"
            className="absolute left-0 top-6 h-[70%] w-[70%] rounded-2xl object-cover object-center shadow-warmLg"
            loading="eager"
          />
          <img
            src="/images/DanceHome.jpg"
            alt="Classical dance"
            className="absolute bottom-0 right-0 h-[60%] w-[60%] rounded-2xl border-[3px] border-gold object-cover shadow-warmLg"
            loading="eager"
          />

          <div className="absolute -right-2 top-2 flex items-center gap-2 rounded-2xl bg-warmWhite px-3 py-2 shadow-warm">
            <BadgeCheck className="h-5 w-5 text-gold" />
            <div>
              <div className="text-xs font-medium text-brown">Authorized Instructor</div>
              <div className="text-[10px] text-brownLight">Authorized Certificate</div>
            </div>
          </div>

          <div className="absolute -left-2 bottom-6 flex items-center gap-2 rounded-2xl bg-warmWhite px-3 py-2 shadow-warm">
            <Globe className="h-5 w-5 text-gold" />
            <div>
              <div className="text-xs font-medium text-brown">Online &amp; Offline</div>
              <div className="text-[10px] text-brownLight">Join from anywhere</div>
            </div>
          </div>

          <div className="absolute -left-10 -top-6 h-24 w-24 animate-floatSlow rounded-full bg-goldLight/30" />
          <div className="absolute -bottom-8 right-8 h-16 w-16 animate-floatSlow rounded-full bg-gold/20" />
        </motion.div>
      </div>
    </section>
  );
}
