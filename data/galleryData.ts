export type GalleryPhoto = {
  src: string
  alt: string
}

const dc26Photos = [
  {
    src: '/static/images/DC26/gallery/photo_2026-06-03_21-03-14 (2).jpg',
    alt: 'Lamp-lighting ceremony at the International Conference and Doctoral Colloquium 2026',
  },
  {
    src: '/static/images/DC26/gallery/photo_2026-06-03_21-03-15.jpg',
    alt: 'Meet the Editors session at the International Conference and Doctoral Colloquium 2026',
  },
  {
    src: '/static/images/DC26/gallery/photo_2026-06-03_21-03-15 (2).jpg',
    alt: 'Address by the Vice Chancellor during Conference and Colloquium 2026',
  },
  {
    src: '/static/images/DC26/gallery/photo_2026-06-03_21-03-15 (3).jpg',
    alt: 'Valedictory session during Conference and Colloquium 2026',
  },
  {
    src: '/static/images/DC26/gallery/photo_2026-06-03_21-03-15 (4).jpg',
    alt: 'Audience attending Conference and Colloquium 2026',
  },
  {
    src: '/static/images/DC26/gallery/photo_2026-06-03_21-03-14.jpg',
    alt: 'Participants receiving certificates at the Conference and Colloquium 2026 valedictory ceremony',
  },
] satisfies GalleryPhoto[]

export const galleryPhotos = dc26Photos
export const featuredGalleryPhotos = dc26Photos.slice(0, 3)
