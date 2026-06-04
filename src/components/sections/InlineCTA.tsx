import { CheckCircle2, Lock, Phone, Clock } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitLead } from '../../utils/submitLead';

type FormData = {
  name: string;
  phone: string;
  city?: string;
  preferredTime?: 'Morning' | 'Afternoon' | 'Evening';
  interest?: string;
  message?: string;
};

export default function InlineCTA() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await submitLead({ ...data, source: 'inline_form' });
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="book" className="section">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl shadow-warmLg">
          <div className="grid md:grid-cols-2">
            <div className="relative bg-gold p-8 text-white sm:p-12">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/images/Yoga2.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                  aria-hidden
                />
              </div>
              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-widest text-white/80">
                  Your Journey Starts Here
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-warmWhite sm:text-4xl">
                  Ready to Begin Your <em className="not-italic underline decoration-warmWhite/40 underline-offset-8">Journey?</em>
                </h2>
                <p className="mt-3 text-white/90">
                  Take the first step today — your free demo awaits.
                </p>

                <ul className="mt-8 space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Lock className="h-4 w-4" /> No payment needed
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> We call you within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> Flexible timing
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-warmWhite p-8 sm:p-12">
              {success ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-14 w-14 text-green-600" />
                  <h3 className="mt-4 font-heading text-2xl font-bold text-brown">Got it!</h3>
                  <p className="mt-2 text-brownLight">
                    We'll reach out within 24 hours to schedule your free demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-brownLight">
                      Full Name*
                    </label>
                    <input
                      {...register('name', { required: true })}
                      className="mt-1 w-full rounded-xl border border-cream-dark bg-cream/40 px-4 py-3 text-sm text-brown focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">Name is required</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-brownLight">
                      WhatsApp Number*
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: true, minLength: 7 })}
                      className="mt-1 w-full rounded-xl border border-cream-dark bg-cream/40 px-4 py-3 text-sm text-brown focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600">Please enter a valid number</p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wider text-brownLight">
                        City
                      </label>
                      <input
                        {...register('city')}
                        className="mt-1 w-full rounded-xl border border-cream-dark bg-cream/40 px-4 py-3 text-sm text-brown focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                        placeholder="City / Location"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wider text-brownLight">
                        Interested In
                      </label>
                      <select
                        {...register('interest')}
                        defaultValue=""
                        className="mt-1 w-full rounded-xl border border-cream-dark bg-cream/40 px-4 py-3 text-sm text-brown focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      >
                        <option value="">Select…</option>
                        <option>Yoga</option>
                        <option>Dance</option>
                        <option>Both</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-brownLight">
                      Preferred Time
                    </label>
                    <div className="mt-2 flex flex-wrap gap-3">
                      {(['Morning', 'Afternoon', 'Evening'] as const).map((t) => (
                        <label
                          key={t}
                          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-cream-dark bg-cream/40 px-4 py-2 text-sm text-brown has-[:checked]:border-gold has-[:checked]:bg-gold/10"
                        >
                          <input
                            type="radio"
                            value={t}
                            {...register('preferredTime')}
                            className="accent-gold"
                          />
                          {t}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-brownLight">
                      Message (optional)
                    </label>
                    <textarea
                      rows={3}
                      {...register('message')}
                      className="mt-1 w-full rounded-xl border border-cream-dark bg-cream/40 px-4 py-3 text-sm text-brown focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      placeholder="Anything we should know?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-gold py-3.5 font-medium text-white shadow-warm transition hover:bg-goldDark disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending…' : 'Request Free Demo'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
