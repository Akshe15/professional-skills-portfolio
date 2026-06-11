const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => mainNav.classList.remove('open')));

const lectureTabs = document.querySelectorAll('.lecture-tab');
const lecturePanels = document.querySelectorAll('.lecture-panel');
lectureTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    lectureTabs.forEach(t => t.classList.remove('active'));
    lecturePanels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.lecture).classList.add('active');
  });
});

const form = document.getElementById('complaintForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Thank you! Your complaint / feedback has been recorded for review.';
  form.reset();
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
revealItems.forEach(item => observer.observe(item));

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});
