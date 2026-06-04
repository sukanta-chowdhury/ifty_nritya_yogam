import { AnimatePresence, motion } from 'framer-motion';
import { X, Gift, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitLead } from '../../utils/submitLead';

type FormData = { name: string; phone: string };
type Props = { open: boolean; onClose: () => void };

export default function ExitIntentPopup({ open, onClose }: Props) {
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
    await submitLead({ ...data, source: 'exit_popup' });
    setSuccess(true);
    setTimeout(onClose, 2500);
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
            className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-warmWhite p-7 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-brownLight hover:bg-cream"
            >
              <X className="h-5 w-5" />
            </button>

            {!success ? (
              <>
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                  <Gift className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-center font-heading text-2xl font-bold text-brown">
                  Wait! Don't miss your FREE class
                </h3>
                <p className="mt-2 text-center text-sm text-brownLight">
                  Leave your number and we'll call you to schedule your free demo.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-3">
                  <input
                    placeholder="Full Name"
                    {...register('name', { required: true })}
                    className="w-full rounded-xl border border-cream-dark bg-cream/50 px-4 py-3 text-sm text-brown focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600">Please enter your name</p>
                  )}
                  <input
                    type="tel"
                    placeholder="WhatsApp Number"
                    {...register('phone', { required: true, minLength: 7 })}
                    className="w-full rounded-xl border border-cream-dark bg-cream/50 px-4 py-3 text-sm text-brown focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600">Please enter a valid number</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-gold py-3.5 font-medium text-white shadow-warm transition hover:bg-goldDark disabled:opacity-70"
                  >
                    Yes, I Want My Free Class!
                  </button>
                </form>

                <button
                  onClick={onClose}
                  className="mx-auto mt-3 block text-xs text-brownLight underline-offset-2 hover:underline"
                >
                  No thanks, I'll pass
                </button>
              </>
            ) : (
              <div className="py-4 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
                <h3 className="mt-3 font-heading text-xl text-brown">Thanks!</h3>
                <p className="mt-1 text-sm text-brownLight">We'll be in touch shortly.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
