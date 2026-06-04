import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

type Cycle = 'Monthly' | 'Quarterly' | 'Yearly';

type Plan = {
  name: string;
  tag?: string;
  highlight?: 'gold' | 'brown';
  prices: Record<Cycle, string>;
  unit: string;
  features: string[];
  cta: string;
  outline?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Free Trial',
    prices: { Monthly: '₹0', Quarterly: '₹0', Yearly: '₹0' },
    unit: 'One free demo class',
    features: ['1 demo class', 'Any discipline', 'Online or offline'],
    cta: 'Claim Free Demo',
    outline: true,
  },
  {
    name: 'Standard',
    tag: 'Most Popular',
    highlight: 'gold',
    prices: { Monthly: '₹1,499', Quarterly: '₹1,199', Yearly: '₹999' },
    unit: 'per month',
    features: [
      '2 classes/week',
      'Choose yoga or dance',
      'WhatsApp support',
      'Progress tracking',
    ],
    cta: 'Enroll Now',
  },
  {
    name: 'Premium',
    tag: 'Best Value',
    highlight: 'brown',
    prices: { Monthly: '₹2,499', Quarterly: '₹1,999', Yearly: '₹1,699' },
    unit: 'per month',
    features: [
      'Daily classes',
      'Both yoga & dance',
      '1:1 session/month',
      'Video recordings',
      'Priority booking',
    ],
    cta: 'Go Premium',
  },
];

export default function Pricing() {
  const [cycle, setCycle] = useState<Cycle>('Monthly');
  const cycles: Cycle[] = ['Monthly', 'Quarterly', 'Yearly'];

  return (
    <section id="pricing" className="section bg-creamDark">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow">Membership</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-brown sm:text-5xl">
            Invest in Your <span className="italic text-gold">Wellbeing</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brownLight">
            Flexible plans — no hidden charges. Cancel anytime.
          </p>
        </div>

        <div className="mx-auto mt-8 flex w-fit items-center gap-1 rounded-full bg-warmWhite p-1 shadow-warm">
          {cycles.map((c) => (
            <button
              key={c}
              onClick={() => setCycle(c)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition ${
                cycle === c ? 'bg-gold text-white' : 'text-brown hover:text-goldDark'
              }`}
            >
              {c}
              {c === 'Quarterly' && (
                <span className="ml-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                  Save 20%
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan, i) => {
            const isGold = plan.highlight === 'gold';
            const isBrown = plan.highlight === 'brown';
            const base = 'relative flex flex-col rounded-3xl p-8 shadow-warm transition';
            const styled = plan.outline
              ? 'border-2 border-gold/40 bg-warmWhite'
              : isGold
              ? 'bg-gold text-white md:scale-105'
              : isBrown
              ? 'bg-brown text-warmWhite'
              : 'bg-warmWhite';
            const textMuted = isGold
              ? 'text-white/90'
              : isBrown
              ? 'text-cream/80'
              : 'text-brownLight';
            const tagBg = isGold
              ? 'bg-warmWhite text-goldDark'
              : isBrown
              ? 'bg-gold text-white'
              : 'bg-gold text-white';

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${base} ${styled}`}
              >
                {plan.tag && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold shadow-warm ${tagBg}`}
                  >
                    {plan.tag}
                  </span>
                )}
                <h3
                  className={`font-heading text-2xl font-bold ${
                    isGold || isBrown ? 'text-warmWhite' : 'text-brown'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={`font-heading text-4xl font-bold ${
                      isGold || isBrown ? 'text-warmWhite' : 'text-brown'
                    }`}
                  >
                    {plan.prices[cycle]}
                  </span>
                  <span className={`text-sm ${textMuted}`}>{plan.unit}</span>
                </div>
                <ul className={`mt-6 space-y-3 text-sm ${textMuted}`}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          isGold || isBrown ? 'text-goldLight' : 'text-gold'
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 w-full rounded-full px-6 py-3 text-center text-sm font-medium transition ${
                    plan.outline
                      ? 'border-2 border-gold text-gold hover:bg-gold hover:text-white'
                      : isGold
                      ? 'bg-warmWhite text-goldDark hover:bg-cream'
                      : 'bg-gold text-white hover:bg-goldDark'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
