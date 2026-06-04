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
    { time: '7:00 AM', name: 'Hatha Yoga', level: 'Beginner', duration: '60 min', mode: 'Hybrid' },
    { time: '6:00 PM', name: 'Kathak', level: 'Intermediate', duration: '75 min', mode: 'Offline' },
  ],
  Tue: [
    { time: '8:00 AM', name: 'Power Yoga', level: 'All Levels', duration: '45 min', mode: 'Hybrid' },
    { time: '5:00 PM', name: 'Kids Dance', level: 'Kids', duration: '60 min', mode: 'Offline' },
  ],
  Wed: [
    { time: '7:00 AM', name: 'Meditation & Pranayama', level: 'All Levels', duration: '30 min', mode: 'Online' },
    { time: '6:30 PM', name: 'Bharatanatyam', level: 'Intermediate', duration: '75 min', mode: 'Offline' },
  ],
  Thu: [
    { time: '7:00 AM', name: 'Hatha Yoga', level: 'Beginner', duration: '60 min', mode: 'Hybrid' },
    { time: '6:00 PM', name: 'Bollywood Dance', level: 'All Levels', duration: '60 min', mode: 'Offline' },
  ],
  Fri: [
    { time: '8:00 AM', name: 'Power Yoga', level: 'All Levels', duration: '45 min', mode: 'Hybrid' },
    { time: '5:00 PM', name: 'Contemporary Dance', level: 'Intermediate', duration: '60 min', mode: 'Offline' },
  ],
  Sat: [
    { time: '10:00 AM', name: 'Kids Yoga', level: 'Kids', duration: '45 min', mode: 'Offline' },
    { time: '11:00 AM', name: 'Kathak', level: 'Beginner', duration: '75 min', mode: 'Offline' },
  ],
  Sun: [
    { time: '9:00 AM', name: 'Family Yoga', level: 'All Ages', duration: '60 min', mode: 'Hybrid' },
  ],
};
