import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

type PlanTab = 'Yoga' | 'Dance' | 'Meditation';

type Plan = {
  id: string;
  name: string;
  tag?: string;
  highlight?: 'gold' | 'brown';
  price: string;
  unit: string;
  features: string[];
  cta: string;
  outline?: boolean;
};

const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free Trial',
    price: '₹0',
    unit: 'One free demo class',
    features: ['1 demo class', 'Any discipline', 'Online or offline'],
    cta: 'Claim Free Demo',
    outline: true,
  },
  {
    id: 'yoga',
    name: 'Yoga',
    tag: 'Most Popular',
    highlight: 'gold',
    price: '₹500',
    unit: 'per month',
    features: [
      'Monthly yoga classes',
      'Online or offline sessions',
      'All skill levels welcome',
      'WhatsApp support',
      '+ ₹100 extra for meditation',
    ],
    cta: 'Enroll in Yoga',
  },
  {
    id: 'dance',
    name: 'Dance',
    tag: 'Flexible Plans',
    highlight: 'brown',
    price: '₹200 – ₹400',
    unit: 'per month',
    features: [
      '1–2 classes per month',
      'Kathak, Classical & more',
      'Kids & adult batches',
      'Online or offline',
      'WhatsApp support',
    ],
    cta: 'Enroll in Dance',
  },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<PlanTab>('Yoga');
  const tabs: PlanTab[] = ['Yoga', 'Dance', 'Meditation'];

  return (
    <section id="pricing" className="section bg-creamDark">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow">Membership</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-brown sm:text-5xl">
            Invest in Your <span className="italic text-gold">Wellbeing</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brownLight">
            Simple monthly plans — no hidden charges. Cancel anytime.
          </p>
        </div>

        <div className="mx-auto mt-8 flex w-fit items-center gap-1 rounded-full bg-warmWhite p-1 shadow-warm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeTab === tab ? 'bg-gold text-white' : 'text-brown hover:text-goldDark'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Meditation' && (
          <p className="mx-auto mt-4 max-w-lg text-center text-sm text-brown">
            Meditation is available as a <strong>₹100/month add-on</strong> with your Yoga plan.
          </p>
        )}

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan, i) => {
            const isGold = plan.highlight === 'gold';
            const isBrown = plan.highlight === 'brown';
            const isActive =
              (activeTab === 'Yoga' && plan.id === 'yoga') ||
              (activeTab === 'Dance' && plan.id === 'dance') ||
              (activeTab === 'Meditation' && plan.id === 'yoga');

            const base = `relative flex flex-col rounded-3xl p-8 shadow-warm transition ${
              isActive && !plan.outline ? 'md:scale-105 ring-2 ring-goldLight/50' : ''
            }`;
            const styled = plan.outline
              ? 'border-2 border-gold/40 bg-warmWhite'
              : isGold
              ? 'bg-gold text-white'
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
                key={plan.id}
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
                <div className="mt-4 flex flex-wrap items-baseline gap-2">
                  <span
                    className={`font-heading text-4xl font-bold ${
                      isGold || isBrown ? 'text-warmWhite' : 'text-brown'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm ${textMuted}`}>{plan.unit}</span>
                </div>
                <ul className={`mt-6 flex-1 space-y-3 text-sm ${textMuted}`}>
                  {plan.features.map((f) => {
                    const isMeditationLine = f.includes('meditation');
                    const emphasize =
                      activeTab === 'Meditation' && isMeditationLine && plan.id === 'yoga';
                    return (
                      <li
                        key={f}
                        className={`flex items-start gap-2 ${emphasize ? 'font-semibold text-warmWhite' : ''}`}
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isGold || isBrown ? 'text-goldLight' : 'text-gold'
                          }`}
                        />
                        {f}
                      </li>
                    );
                  })}
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
