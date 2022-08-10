import './sass/index.scss'; // draft file
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// ** visible header during scrolling ---- the first method
const header = document.querySelector('.header');
const view = document.querySelector('body');

const mobile = window.matchMedia('(max-width:767px)');
const desktop = window.matchMedia('(min-width: 768px)');

view.onscroll = () => {
  if (window.scrollY > 120 && mobile.matches) {
    header.classList.remove('opacity-by-scroll');
  }
  if (window.scrollY < 120 && mobile.matches) {
    header.classList.add('opacity-by-scroll');
  }
  if (window.scrollY > 70 && desktop.matches) {
    header.classList.remove('opacity-by-scroll');
  }
  if (window.scrollY < 70 && desktop.matches) {
    header.classList.add('opacity-by-scroll');
  }
};

// ** visible header during scrolling ---- the second method, but not working.
// ** coudn't toggle with 2 different kind of rootMargins
// import observer from './js/sentinel';
// const sentinel = document.querySelector('#sentinel');
// observer.observe(sentinel);

// ** scroll by anchor approach

let anchorLinks = document.querySelectorAll('[data-anchor]');

for (let item of anchorLinks) {
  item.addEventListener('click', e => {
    e.preventDefault();

    let hashval = item.getAttribute('href');
    let target = document.querySelector(hashval);
    if (!target.id) {
      return;
    }
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    history.pushState(null, null, hashval);
  });
}

// **  SimpleLightbox images
let lightBox = new simpleLightbox('.gallery a', {
  captions: true,
  captionsselector: 'self',
  captionsType: 'attr',
  captionsAttribute: 'title',
  captionPosition: 'bottom',
  captionDelay: 250,
  showCounter: false,
  disableScroll: false,
  widthRatio: 1,
  heightRatio: 1,
  //   overlayOpacity: 1,
});
