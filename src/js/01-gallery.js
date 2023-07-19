import { galleryItems } from './gallery-items.js';
// Change code below this line
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
console.log(galleryItems);

const ellGallery = document.querySelector('.gallery')
const gallaryNew = galleryItems.map(({ original, preview, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`)
    .join('');

ellGallery.innerHTML = gallaryNew;
new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});