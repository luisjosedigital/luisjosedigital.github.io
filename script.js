(function(){
  // Menú móvil
  const toggle = document.getElementById('nav-toggle');
  const panel = document.getElementById('nav-mobile');
  if (toggle && panel) {
    const closeMenu = () => {
      panel.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    };
    const openMenu = () => {
      panel.classList.add('open');
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    };
    toggle.addEventListener('click', () => {
      panel.classList.contains('open') ? closeMenu() : openMenu();
    });
    panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // Nav con fondo sólido al hacer scroll
  const nav = document.querySelector('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('nav-scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Animación de aparición al hacer scroll
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Banner de cookies
  const COOKIE_CONSENT_KEY = 'cookieConsentAccepted';
  const COOKIE_MODAL_TITLE = 'Acepta el uso de cookies';
  const COOKIE_MODAL_TEXT = 'Este sitio usa cookies y datos para mejorar tu experiencia. Hasta que no aceptes, no podrás interactuar con el contenido.';

  function acceptCookieConsent() {
    try { localStorage.setItem(COOKIE_CONSENT_KEY, 'true'); } catch (error) { }
    document.body.classList.remove('cookie-modal-open');
    const modal = document.getElementById('cookie-modal');
    if (modal) modal.remove();
  }

  function createCookieModal() {
    const isToolsPage = /[/\\]tools[/\\]/.test(window.location.pathname);
    if (typeof window === 'undefined' || isToolsPage || localStorage.getItem(COOKIE_CONSENT_KEY) === 'true') return;
    const modal = document.createElement('div');
    modal.id = 'cookie-modal';
    modal.className = 'cookie-modal';
    modal.innerHTML = `
      <div class="cookie-modal-overlay"></div>
      <div class="cookie-modal__window">
        <h2>${COOKIE_MODAL_TITLE}</h2>
        <p>${COOKIE_MODAL_TEXT}</p>
        <button type="button" id="cookie-accept-btn">Aceptar cookies</button>
      </div>
    `;
    document.body.appendChild(modal);
    document.body.classList.add('cookie-modal-open');
    document.getElementById('cookie-accept-btn').addEventListener('click', acceptCookieConsent);
  }

  window.addEventListener('load', createCookieModal);

  // Resaltar el enlace activo del menú según la sección visible
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href*="#"]');
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const activeIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href').endsWith('#' + id));
            });
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => activeIO.observe(s));
  }
})();
