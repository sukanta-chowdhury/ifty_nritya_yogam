export type Testimonial = {
  id: number;
  name: string;
  classType: string;
  quote: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya S.',
    classType: 'Yoga',
    quote:
      "I came in stressed and left feeling like myself again. Ifty's yoga classes transformed not just my body but my mindset.",
    rating: 5,
    initials: 'PS',
  },
  {
    id: 2,
    name: 'Rohini M.',
    classType: 'Kids Dance',
    quote:
      'My daughter has been doing Kathak for 6 months and the change in her confidence and posture is incredible.',
    rating: 5,
    initials: 'RM',
  },
  {
    id: 3,
    name: 'Arjun K.',
    classType: 'Online Yoga',
    quote:
      'Online classes are so convenient — I join from Bangalore every morning. The sessions feel personal even online.',
    rating: 5,
    initials: 'AK',
  },
  {
    id: 4,
    name: 'Sangita D.',
    classType: 'Dance',
    quote:
      "I was a complete beginner. Ifty's patience and teaching style made me feel comfortable from day one.",
    rating: 5,
    initials: 'SD',
  },
  {
    id: 5,
    name: 'Meghna & Rahul',
    classType: 'Wedding Choreography',
    quote:
      'The wedding choreography was perfect. All our guests are still talking about our first dance!',
    rating: 5,
    initials: 'MR',
  },
];
