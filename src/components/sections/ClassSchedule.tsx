import { motion } from 'framer-motion';
import { useState } from 'react';
import { days, schedule, type DayKey } from '../../data/schedule';
import { Clock } from 'lucide-react';

export default function ClassSchedule() {
  const [day, setDay] = useState<DayKey>('Mon');
  const rows = schedule[day];

  const modeStyles: Record<string, string> = {
    Online: 'bg-emerald-100 text-emerald-800',
    Offline: 'bg-amber-100 text-amber-800',
    Hybrid: 'bg-gold/15 text-goldDark',
  };

  return (
    <section id="schedule" className="section bg-cream">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow">Class Schedule</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-brown sm:text-5xl">
            Find Your Perfect <span className="italic text-gold">Time</span>
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {days.map((d) => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className={`min-w-[64px] rounded-full px-4 py-2 text-sm font-medium transition ${
                day === d
                  ? 'bg-gold text-white shadow-warm'
                  : 'border border-gold/40 text-brown hover:bg-creamDark'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <motion.div
          key={day}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 overflow-hidden rounded-3xl bg-warmWhite shadow-warm"
        >
          <div className="hidden grid-cols-12 gap-2 border-b border-cream-dark px-6 py-3 text-xs font-medium uppercase tracking-wider text-brownLight md:grid">
            <div className="col-span-2">Time</div>
            <div className="col-span-4">Class</div>
            <div className="col-span-2">Level</div>
            <div className="col-span-1">Duration</div>
            <div className="col-span-2">Mode</div>
            <div className="col-span-1 text-right">Book</div>
          </div>
          <ul>
            {rows.length === 0 ? (
              <li className="px-6 py-6 text-center text-brownLight">No classes scheduled.</li>
            ) : (
              rows.map((r, i) => (
                <li
                  key={i}
                  className="grid grid-cols-1 items-center gap-2 border-b border-cream-dark px-6 py-4 last:border-0 md:grid-cols-12"
                >
                  <div className="col-span-2 flex items-center gap-2 font-medium text-brown">
                    <Clock className="h-4 w-4 text-gold md:hidden" />
                    {r.time}
                  </div>
                  <div className="col-span-4 font-heading text-lg text-brown">{r.name}</div>
                  <div className="col-span-2 text-sm text-brownLight">{r.level}</div>
                  <div className="col-span-1 text-sm text-brownLight">{r.duration}</div>
                  <div className="col-span-2">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        modeStyles[r.mode]
                      }`}
                    >
                      {r.mode}
                    </span>
                  </div>
                  <div className="col-span-1 md:text-right">
                    <a
                      href="#contact"
                      className="inline-block rounded-full bg-gold px-4 py-2 text-xs font-medium text-white hover:bg-goldDark"
                    >
                      Book
                    </a>
                  </div>
                </li>
              ))
            )}
          </ul>
        </motion.div>

        <p className="mt-6 text-center text-sm text-brownLight">
          Can't find a suitable time? We offer flexible 1-on-1 sessions —{' '}
          <a href="#contact" className="font-medium text-goldDark underline-offset-2 hover:underline">
            Contact us
          </a>
          !
        </p>
      </div>
    </section>
  );
}
