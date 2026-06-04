export type GalleryItem = {
  src: string;
  category: 'Yoga' | 'Dance' | 'Workshops' | 'Performances';
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  { src: '/images/Yoga1.jpg', category: 'Yoga', alt: 'Yoga session' },
  { src: '/images/DanceHome.jpg', category: 'Dance', alt: 'Kathak dance' },
  { src: '/images/Yoga2.jpg', category: 'Yoga', alt: 'Yoga pose' },
  { src: '/images/Dance2.jpg', category: 'Performances', alt: 'Dance performance' },
  { src: '/images/Yoga3.jpg', category: 'Yoga', alt: 'Yoga group class' },
  { src: '/images/dance5.jpg', category: 'Dance', alt: 'Contemporary dance' },
  { src: '/images/Yoga 5.jpg', category: 'Yoga', alt: 'Yoga student' },
  { src: '/images/dance6.jpg', category: 'Dance', alt: 'Dance class' },
  { src: '/images/Yoga 6.jpg', category: 'Workshops', alt: 'Workshop' },
  { src: '/images/Yogacrop1.jpg', category: 'Yoga', alt: 'Yoga pose detail' },
  { src: '/images/Yogacrop2.jpg', category: 'Yoga', alt: 'Yoga pose' },
  { src: '/images/Yogacrop3.jpg', category: 'Workshops', alt: 'Workshop session' },
  { src: '/images/Yogacrop4.jpg', category: 'Yoga', alt: 'Yoga class' },
  { src: '/images/Yogacrop5.jpg', category: 'Performances', alt: 'Performance' },
];
