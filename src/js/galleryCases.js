// const gallerySortItems = ({ preview, original, description }) => {
//   return `
//     <li>
//     <a class="gallery__item" href="${original}">
//     <img 
//     style="display:block"
//     class="gallery__image"
//     src="${preview}"
//     alt="${description}"
//     />
//   </a>
//   </li>
//   `;
// };

// const gallerySortMarkup = galleryItems.map(gallerySortItems).join('');

// const galleryItemsList = document.querySelector('.cases__gallery');



let gallery = new SimpleLightbox('.cases__gallery a');

