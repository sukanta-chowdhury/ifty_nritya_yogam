import { motion } from 'framer-motion';
import { Home, Users, GraduationCap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '../../hooks/useCountUp';

function AnimatedStat({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix?: string;
  label: string;
  start: boolean;
}) {
  const v = useCountUp(value, 1800, start);
  return (
    <div className="text-center">
      <div className="font-heading text-5xl font-bold text-goldLight sm:text-6xl">
        {Math.round(v)}
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-widest text-cream/80">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-brown py-20 text-warmWhite">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <AnimatedStat value={100} suffix="+" label="Students Enrolled" start={start} />
          <AnimatedStat value={50} suffix="+" label="Classes Monthly" start={start} />
          <AnimatedStat value={49} suffix="★" label="Average Rating" start={start} />
          <AnimatedStat value={6} suffix="+" label="Years Experience" start={start} />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Home,
              title: 'Online & Offline',
              text: 'Join from anywhere in India or attend our studio.',
            },
            {
              icon: Users,
              title: 'All Ages Welcome',
              text: 'Classes from age 4 to 65+, beginners to advanced.',
            },
            {
              icon: GraduationCap,
              title: 'Government Certified',
              text: 'Trained, certified instructors you can trust.',
            },
          ].map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-cream/15 bg-cream/5 p-6 backdrop-blur"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 text-goldLight">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-warmWhite">{title}</h3>
              <p className="mt-2 text-sm text-cream/80">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
