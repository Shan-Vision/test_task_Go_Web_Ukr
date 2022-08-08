const header = document.querySelector('.header');
let options = {
  rootMargin: '70px',
};

const observer = new IntersectionObserver(onEntry, options);

function onEntry(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.remove('opacity-by-scroll');
    }
    if (entry.isIntersecting) {
      header.classList.add('opacity-by-scroll');
    }
  });
}
export default observer;
