// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Contact form handler
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const original = btn.textContent;
  btn.textContent = 'Message sent';
  btn.style.opacity = '0.6';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.opacity = '';
    e.target.reset();
  }, 3000);
}

// Waitlist form handler
function handleWaitlist(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const input = e.target.querySelector('input');
  btn.textContent = 'You\'re on the list';
  btn.style.opacity = '0.6';
  input.value = '';
  setTimeout(() => {
    btn.textContent = 'Join the waitlist';
    btn.style.opacity = '';
  }, 3000);
}

// Add to cart handler
function handleCart(btn, colourway) {
  btn.classList.add('added');
  btn.textContent = 'Added \u2014 ' + colourway;
  setTimeout(() => {
    btn.classList.remove('added');
    btn.textContent = 'Add to cart';
  }, 3000);
}
