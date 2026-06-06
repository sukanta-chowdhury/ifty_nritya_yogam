import { legacyImages, whatsappImages } from './images';

export type Program = {
  id: string;
  name: string;
  description: string;
  duration: string;
  image: string;
  tag?: string;
};

export const yogaPrograms: Program[] = [
  {
    id: 'power',
    name: 'Power Yoga',
    description: 'Dynamic, strength-building sequences for intermediate students.',
    duration: '45 min',
    image: legacyImages.powerYoga,
  },
  {
    id: 'child-yoga',
    name: 'Child Yoga',
    description: 'Fun, age-appropriate classes for children aged 5–14.',
    duration: '45 min',
    image: whatsappImages.wa02,
  },
  {
    id: 'meditation-breathing',
    name: 'Meditation and Breathing',
    description: 'Breathwork & mindfulness for inner calm and clarity.',
    duration: '30 min',
    image: legacyImages.yoga3,
  },
];

export const dancePrograms: (Program & { category: string })[] = [
  {
    id: 'bharatanatyam',
    name: 'Bharat Natyam',
    description: 'South Indian classical form — mudras, expression & footwork.',
    duration: '75 min',
    image: whatsappImages.wa04,
    category: 'Classical',
  },
  {
    id: 'kathak',
    name: 'Kathak',
    description: 'Classical North Indian dance form — rhythm & expression.',
    duration: '75 min',
    image: legacyImages.danceHome,
    category: 'Classical',
  },
  {
    id: 'classical',
    name: 'Classical',
    description: 'Traditional Indian classical dance training for all levels.',
    duration: '75 min',
    image: legacyImages.dance2,
    category: 'Classical',
  },
  {
    id: 'semi-classical',
    name: 'Semi-Classical',
    description: 'A beautiful fusion of classical grace and modern expression.',
    duration: '60 min',
    image: legacyImages.yogacrop3,
    category: 'Semi-Classical',
  },
  {
    id: 'contemporary',
    name: 'Contemporary',
    description: 'Modern expressive movement and creative choreography.',
    duration: '60 min',
    image: legacyImages.dance5,
    category: 'Contemporary',
  },
  {
    id: 'kids-dance',
    name: 'Kids Dance',
    description: 'Creative movement classes designed for young dancers.',
    duration: '45 min',
    image: whatsappImages.wa06,
    category: 'Kids',
  },
];
