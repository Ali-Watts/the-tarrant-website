document.addEventListener('DOMContentLoaded', () => {

  // ── PALETTE TOGGLE ──
  const btnA = document.getElementById('pal-a');
  const btnB = document.getElementById('pal-b');

  function setPalette(p) {
    document.documentElement.dataset.palette = p;
    localStorage.setItem('wfc-palette', p);
    btnA.classList.toggle('active', p === 'a');
    btnB.classList.toggle('active', p === 'b');
  }

  btnA.addEventListener('click', () => setPalette('a'));
  btnB.addEventListener('click', () => setPalette('b'));
  setPalette(localStorage.getItem('wfc-palette') || 'a');

  // ── IMAGES TOGGLE ──
  const imgOn = document.getElementById('img-on');
  const imgOff = document.getElementById('img-off');

  function setImages(state) {
    document.documentElement.dataset.images = state;
    localStorage.setItem('wfc-images', state);
    imgOn.classList.toggle('active', state === 'on');
    imgOff.classList.toggle('active', state === 'off');
  }

  imgOn.addEventListener('click', () => setImages('on'));
  imgOff.addEventListener('click', () => setImages('off'));
  setImages(localStorage.getItem('wfc-images') || 'on');

  // ── PAGE NAVIGATION ──
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  function showPage(id) {
    pages.forEach(p => p.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));

    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
      // Re-trigger reveal animations
      target.querySelectorAll('.reveal').forEach(el => el.classList.remove('visible'));
      requestAnimationFrame(() => observeReveals());
    }

    navLinks.forEach(l => {
      if (l.dataset.page === id) l.classList.add('active');
    });

    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => showPage(link.dataset.page));
  });

  document.querySelector('.nav-logo').addEventListener('click', () => showPage('home'));

  // ── SCROLL-DRIVEN NAV ──
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ── SCROLL REVEAL ──
  function observeReveals() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.page.active .reveal:not(.visible)').forEach(el => {
      observer.observe(el);
    });
  }

  observeReveals();

  // ── COMMENT MODAL ──
  const modal = document.getElementById('comment-modal');
  const modalClose = modal.querySelector('.modal-close');
  const modalName = document.getElementById('modal-section-name');
  const formSection = document.getElementById('form-section');
  const formPalette = document.getElementById('form-palette');
  const form = modal.querySelector('form');
  const formFields = modal.querySelector('.modal-fields');
  const successMsg = modal.querySelector('.modal-success');

  document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', (e) => {
      if (e.target.closest('.modal-overlay')) return;

      const name = section.dataset.section;
      if (!name) return;

      modalName.textContent = name;
      formSection.value = name;
      formPalette.value = 'Palette ' + document.documentElement.dataset.palette.toUpperCase();

      form.reset();
      formSection.value = name;
      formPalette.value = 'Palette ' + document.documentElement.dataset.palette.toUpperCase();
      formFields.style.display = '';
      successMsg.classList.remove('active');

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      formFields.style.display = 'none';
      successMsg.classList.add('active');
      setTimeout(closeModal, 2200);
    } catch {
      form.submit();
    }
  });

});
