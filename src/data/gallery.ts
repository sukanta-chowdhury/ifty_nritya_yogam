import { legacyImages, whatsappImages } from './images';

export type GalleryItem = {
  src: string;
  category: 'Yoga' | 'Dance' | 'Performances';
  alt: string;
};

/** Mixed legacy studio photos + WhatsApp images (no workshop photos) */
export const galleryItems: GalleryItem[] = [
  { src: legacyImages.yoga1, category: 'Yoga', alt: 'Yoga session' },
  { src: whatsappImages.wa01, category: 'Yoga', alt: 'Studio yoga class' },
  { src: legacyImages.danceHome, category: 'Dance', alt: 'Kathak dance' },
  { src: whatsappImages.wa02, category: 'Dance', alt: 'Classical dance practice' },
  { src: legacyImages.yoga2, category: 'Yoga', alt: 'Yoga pose' },
  { src: whatsappImages.wa03, category: 'Yoga', alt: 'Yoga students in session' },
  { src: legacyImages.dance2, category: 'Performances', alt: 'Dance performance' },
  { src: whatsappImages.wa04, category: 'Performances', alt: 'Stage performance' },
  { src: legacyImages.yoga3, category: 'Yoga', alt: 'Yoga group class' },
  { src: whatsappImages.wa05, category: 'Dance', alt: 'Dance class moment' },
  { src: legacyImages.dance5, category: 'Dance', alt: 'Contemporary dance' },
  { src: whatsappImages.wa06, category: 'Dance', alt: 'Kids dance class' },
  { src: legacyImages.yoga5, category: 'Yoga', alt: 'Yoga student' },
  { src: whatsappImages.wa07, category: 'Yoga', alt: 'Yoga practice' },
  { src: legacyImages.dance6, category: 'Dance', alt: 'Dance class' },
  { src: whatsappImages.wa08, category: 'Dance', alt: 'Dance rehearsal' },
  { src: legacyImages.yogacrop1, category: 'Yoga', alt: 'Yoga pose detail' },
  { src: legacyImages.yogacrop2, category: 'Yoga', alt: 'Yoga pose' },
  { src: legacyImages.yogacrop4, category: 'Yoga', alt: 'Kids yoga class' },
  { src: legacyImages.yogacrop5, category: 'Performances', alt: 'Annual performance' },
];
