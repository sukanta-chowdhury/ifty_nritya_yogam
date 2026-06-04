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
    id: 'hatha',
    name: 'Hatha Yoga',
    description: 'Foundation poses, breathing & flexibility for beginners.',
    duration: '60 min',
    image: '/images/Yoga1.jpg',
  },
  {
    id: 'power',
    name: 'Power Yoga',
    description: 'Dynamic, strength-building sequences for intermediate students.',
    duration: '45 min',
    image: '/images/Yoga2.jpg',
  },
  {
    id: 'meditation',
    name: 'Meditation & Pranayama',
    description: 'Breathwork & mindfulness for inner calm and clarity.',
    duration: '30 min',
    image: '/images/Yoga3.jpg',
  },
  {
    id: 'kids-yoga',
    name: 'Kids Yoga',
    description: 'Fun, age-appropriate classes for children aged 5–14.',
    duration: '45 min',
    image: '/images/Yoga 5.jpg',
  },
  {
    id: 'prenatal',
    name: 'Prenatal Yoga',
    description: 'Gentle practice designed for mothers-to-be.',
    duration: '50 min',
    image: '/images/Yoga 6.jpg',
  },
  {
    id: 'online',
    name: 'Online Yoga Sessions',
    description: 'Live classes via Zoom, from anywhere in India.',
    duration: '60 min',
    image: '/images/Yogacrop5.jpg',
  },
];

export const dancePrograms: (Program & { category: string })[] = [
  {
    id: 'kathak',
    name: 'Kathak',
    description: 'Classical North Indian dance form — rhythm & expression.',
    duration: '75 min',
    image: '/images/DanceHome.jpg',
    category: 'Classical',
  },
  {
    id: 'bharatanatyam',
    name: 'Bharatanatyam',
    description: 'South Indian classical form — mudras & footwork.',
    duration: '75 min',
    image: '/images/Dance2.jpg',
    category: 'Classical',
  },
  {
    id: 'contemporary',
    name: 'Contemporary Dance',
    description: 'Modern expressive movement and fusion styles.',
    duration: '60 min',
    image: '/images/dance5.jpg',
    category: 'Contemporary',
  },
  {
    id: 'bollywood',
    name: 'Bollywood Dance',
    description: 'Energetic, fun choreography for all ages.',
    duration: '60 min',
    image: '/images/dance6.jpg',
    category: 'Bollywood',
  },
  {
    id: 'kids-dance',
    name: 'Kids Dance Classes',
    description: 'Creative movement classes for children.',
    duration: '45 min',
    image: '/images/Yogacrop4.jpg',
    category: 'Kids',
  },
  {
    id: 'wedding',
    name: 'Wedding Choreography',
    description: 'Custom bridal & group choreography for your big day.',
    duration: 'Custom',
    image: '/images/Yogacrop3.jpg',
    category: 'Contemporary',
  },
];
