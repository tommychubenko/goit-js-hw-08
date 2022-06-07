// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

function importGallery(images) {
    const galleryItems = images.map(image =>

        `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`).join("");    
    gallery.insertAdjacentHTML('afterbegin' , galleryItems);  
    
};

importGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
 captionDelay: 250,
 captionPosition: 'bottom',});

// Change code below this line





console.log(galleryItems);
