import gallery from './gallery-items.js';
const getUlGallery = document.querySelector('.js-gallery');
getUlGallery.addEventListener('click', openModalWindow);
const createGallery = gallery
  .map(
    ({ preview, original, description }) =>
      `<li class=gallery__item>
        <a class=gallery__link href=${original}>
        <img
        class=gallery__image
        src=${preview}
        data-source=${original}
        alt='${description}' />
        </a>
        </li>`,
  )
  .join('');
getUlGallery.insertAdjacentHTML('beforeend', createGallery);

const lightboxImage = document.querySelector('.lightbox__image');
const lightbox = document.querySelector('.js-lightbox');

function openModalWindow(e) {
  e.preventDefault();
  window.addEventListener('click', openModalWindow);
  lightbox.classList.add('is-open');
  lightboxImage.src = e.target.dataset.source;
}
lightbox.addEventListener('click', closeLightbox);

function closeLightbox() {
  window.removeEventListener('click', openModalWindow);
  lightbox.classList.remove('is-open');
}
