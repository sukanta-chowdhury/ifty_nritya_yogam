export type ClassRow = {
  time: string;
  name: string;
  level: string;
  duration: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
};

export type DayKey = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export const days: DayKey[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const schedule: Record<DayKey, ClassRow[]> = {
  Mon: [
    {
      time: '8:15 AM',
      name: 'Power Yoga',
      level: 'All Levels',
      duration: '45 min',
      mode: 'Hybrid',
    },
  ],
  Tue: [],
  Wed: [],
  Thu: [
    {
      time: '8:15 AM',
      name: 'Child Yoga',
      level: 'Kids',
      duration: '45 min',
      mode: 'Offline',
    },
    {
      time: '5:00 PM',
      name: 'Kathak',
      level: 'All Levels',
      duration: '75 min',
      mode: 'Offline',
    },
  ],
  Fri: [
    {
      time: '8:15 AM',
      name: 'Meditation and Breathing',
      level: 'All Levels',
      duration: '30 min',
      mode: 'Hybrid',
    },
  ],
  Sat: [],
  Sun: [
    {
      time: '8:15 AM',
      name: 'Yoga & Dance',
      level: 'All Ages',
      duration: '60 min',
      mode: 'Hybrid',
    },
  ],
};
