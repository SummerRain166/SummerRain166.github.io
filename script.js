const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const header = document.querySelector('.site-header');

menuButton.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30), { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-card');
filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('is-active'));
  button.classList.add('is-active');
  const selected = button.dataset.filter;
  cards.forEach((card) => {
    const visible = selected === 'all' || card.dataset.category === selected;
    card.hidden = !visible;
  });
}));

const dialog = document.querySelector('.lightbox');
const dialogImage = document.querySelector('.lightbox-image');
const dialogTitle = document.querySelector('#lightbox-title');
const closeButton = document.querySelector('.lightbox-close');

function openCard(card) {
  const image = card.querySelector('.work-image');
  dialogTitle.textContent = card.querySelector('h3').textContent;
  dialogImage.style.backgroundPosition = getComputedStyle(image).backgroundPosition;
  dialogImage.style.backgroundSize = getComputedStyle(image).backgroundSize;
  dialog.showModal();
}

cards.forEach((card) => {
  card.addEventListener('click', () => openCard(card));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCard(card);
    }
  });
});

closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector('#year').textContent = new Date().getFullYear();
