import gallery from '.gallery-items';
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
const button = document.querySelector('button[data-action="close-lightbox"]');

lightbox.addEventListener('click', closeWindowOverlay);
button.addEventListener('click', closeLightbox);

function openModalWindow(e) {
  e.preventDefault();
  getUlGallery.addEventListener('click', openModalWindow);
  lightbox.classList.add('is-open');
  lightboxImage.src = e.target.dataset.source;
}

function closeWindowOverlay(e) {
  if (e.target === lightboxImage) {
    return;
  }
  closeLightbox();
}

function closeLightbox(e) {
  getUlGallery.removeEventListener('click', closeLightbox);
  lightbox.classList.remove('is-open');
}
