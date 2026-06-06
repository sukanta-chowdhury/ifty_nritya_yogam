import { AnimatePresence, motion } from 'framer-motion';
import { X, Flower2, CheckCircle2, Lock, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitLead } from '../../utils/submitLead';

type FormData = {
  name: string;
  phone: string;
  interest: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onConverted?: () => void;
};

export default function WelcomeLeadModal({ open, onClose, onConverted }: Props) {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  useEffect(() => {
    if (!open) {
      setSuccess(false);
      reset();
    }
  }, [open, reset]);

  const onSubmit = async (data: FormData) => {
    await submitLead({ ...data, source: 'welcome_modal' });
    setSuccess(true);
    onConverted?.();
    setTimeout(() => onClose(), 3000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-warmWhite shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-2 w-full bg-gradient-to-r from-goldLight via-gold to-goldDark" />
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-5 rounded-full p-1.5 text-brownLight hover:bg-cream"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="px-7 pb-7 pt-6 text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                <Flower2 className="h-7 w-7 text-gold" />
              </div>

              {!success ? (
                <>
                  <h3 className="font-heading text-2xl font-bold text-brown sm:text-3xl">
                    Claim Your FREE Demo Class
                  </h3>
                  <p className="mt-2 text-sm text-brownLight">
                    Join 100+ interested learners already transforming their lives with yoga &amp; dance
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                    <Clock className="h-3.5 w-3.5" /> Only 5 spots open this month
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-3 text-left">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full rounded-xl border border-cream-dark bg-cream/50 px-4 py-3 text-sm text-brown placeholder:text-brownLight/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        {...register('phone', {
                          required: 'WhatsApp number is required',
                          minLength: { value: 7, message: 'Enter a valid number' },
                        })}
                        className="w-full rounded-xl border border-cream-dark bg-cream/50 px-4 py-3 text-sm text-brown placeholder:text-brownLight/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <select
                        {...register('interest', { required: 'Select your interest' })}
                        className="w-full rounded-xl border border-cream-dark bg-cream/50 px-4 py-3 text-sm text-brown focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          What interests you?
                        </option>
                        <option>Yoga</option>
                        <option>Classical Dance (Kathak)</option>
                        <option>Both Yoga &amp; Dance</option>
                        <option>Kids Classes</option>
                      </select>
                      {errors.interest && (
                        <p className="mt-1 text-xs text-red-600">{errors.interest.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-gold py-3.5 font-medium text-white shadow-warm transition hover:bg-goldDark disabled:opacity-70"
                    >
                      {isSubmitting ? 'Booking…' : 'Book My Free Demo →'}
                    </button>
                  </form>

                  <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-brownLight">
                    <Lock className="h-3.5 w-3.5" /> Your details are 100% safe. No spam, ever.
                  </p>
                </>
              ) : (
                <div className="py-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-9 w-9 text-green-600" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brown">
                    You're in! 🎉
                  </h3>
                  <p className="mt-2 text-brownLight">
                    We'll call you within 24 hours to schedule your free demo.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
