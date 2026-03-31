document.addEventListener('DOMContentLoaded', () => {

  // ── PALETTE TOGGLE ──
  const paletteA = document.getElementById('palette-a');
  const paletteB = document.getElementById('palette-b');

  function setPalette(p) {
    document.documentElement.dataset.palette = p;
    localStorage.setItem('wf-b-palette', p);
    paletteA.classList.toggle('active', p === 'a');
    paletteB.classList.toggle('active', p === 'b');
  }

  paletteA.addEventListener('click', () => setPalette('a'));
  paletteB.addEventListener('click', () => setPalette('b'));

  const saved = localStorage.getItem('wf-b-palette');
  setPalette(saved || 'a');

  // ── IMAGES TOGGLE ──
  const imagesOn = document.getElementById('images-on');
  const imagesOff = document.getElementById('images-off');

  function setImages(state) {
    document.documentElement.dataset.images = state;
    localStorage.setItem('wfb-images', state);
    imagesOn.classList.toggle('active', state === 'on');
    imagesOff.classList.toggle('active', state === 'off');
  }

  imagesOn.addEventListener('click', () => setImages('on'));
  imagesOff.addEventListener('click', () => setImages('off'));
  setImages(localStorage.getItem('wfb-images') || 'on');

  // ── PAGE NAVIGATION ──
  const links = document.querySelectorAll('.wf-sidebar-link');
  const pages = document.querySelectorAll('.wf-page');

  links.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.dataset.page;

      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      pages.forEach(p => {
        p.classList.toggle('active', p.id === target);
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // ── COMMENT MODAL ──
  const modal = document.getElementById('comment-modal');
  const modalClose = modal.querySelector('.wf-modal-close');
  const modalSectionName = document.getElementById('modal-section-name');
  const formSection = document.getElementById('form-section');
  const formPalette = document.getElementById('form-palette');
  const form = modal.querySelector('form');
  const formFields = modal.querySelector('.wf-modal-fields');
  const successMsg = modal.querySelector('.wf-modal-success');

  document.querySelectorAll('.wf-section').forEach(section => {
    section.addEventListener('click', (e) => {
      if (e.target.closest('.wf-modal')) return;

      const name = section.dataset.section;
      modalSectionName.textContent = name;
      formSection.value = name;
      formPalette.value = 'Palette ' + document.documentElement.dataset.palette.toUpperCase();

      form.reset();
      formSection.value = name;
      formPalette.value = 'Palette ' + document.documentElement.dataset.palette.toUpperCase();
      formFields.style.display = '';
      successMsg.classList.remove('active');

      modal.classList.add('active');
    });
  });

  function closeModal() {
    modal.classList.remove('active');
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
      setTimeout(closeModal, 2000);
    } catch (err) {
      form.submit();
    }
  });

});
