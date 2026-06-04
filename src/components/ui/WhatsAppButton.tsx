import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../utils/submitLead';

export default function WhatsAppButton() {
  const text = encodeURIComponent("Hi Ifty, I'm interested in a free demo!");
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-warmLg sm:bottom-6"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.5} />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-brown px-3 py-1.5 text-xs font-medium text-cream opacity-0 shadow-warm transition-opacity duration-300 group-hover:opacity-100">
        Chat with us on WhatsApp
      </span>
    </motion.a>
  );
}
