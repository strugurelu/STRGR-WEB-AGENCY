// Scroll to section smooth
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Floating effect on hero title
const heroTitle = document.querySelector('.hero h2');
let offset = 0;
setInterval(() => {
  offset += 0.05;
  heroTitle.style.transform = `translateY(${Math.sin(offset) * 5}px)`;
}, 50);
