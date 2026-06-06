import { Phone, Flower2 } from 'lucide-react';
import { PHONE_TEL } from '../../utils/submitLead';

type Props = { onBookDemo: () => void };

export default function StickyMobileCTA({ onBookDemo }: Props) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 sm:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex items-center justify-center gap-2 bg-brown py-4 text-sm font-semibold text-cream"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <button
        onClick={onBookDemo}
        className="flex items-center justify-center gap-2 bg-gold py-4 text-sm font-semibold text-white"
      >
        <Flower2 className="h-4 w-4" /> Book Free Demo
      </button>
    </div>
  );
}
