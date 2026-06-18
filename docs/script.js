(() => {
  const header = document.querySelector('.site-header');
  const heroImage = document.querySelector('.hero-image');
  const bandImage = document.querySelector('.image-band-img');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header background swap on scroll + light parallax on hero/image-band.
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 60);

    if (prefersReduced) return;

    if (heroImage) {
      const offset = Math.min(y * 0.25, 220);
      heroImage.style.transform = `translateY(${offset}px) scale(1.08)`;
    }
    if (bandImage) {
      const rect = bandImage.parentElement.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.top < viewH && rect.bottom > 0) {
        const progress = (viewH - rect.top) / (viewH + rect.height);
        bandImage.style.transform = `translateY(${(progress - 0.5) * 80}px)`;
      }
    }
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  // Mobile menu: hamburger toggles a full-screen overlay.
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    const links = mobileNav.querySelectorAll('a');
    let lastFocus = null;

    const open = () => {
      lastFocus = document.activeElement;
      mobileNav.hidden = false;
      // next frame so the transition runs
      requestAnimationFrame(() => mobileNav.classList.add('is-open'));
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      document.body.classList.add('menu-open');
      // move focus into the menu for screen reader / keyboard users
      const first = links[0];
      if (first) first.focus();
    };

    const close = () => {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('menu-open');
      const finish = () => {
        mobileNav.hidden = true;
        mobileNav.removeEventListener('transitionend', finish);
      };
      mobileNav.addEventListener('transitionend', finish);
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? close() : open();
    });

    links.forEach(a => a.addEventListener('click', close));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') close();
    });

    // If we resize up past the breakpoint, ensure the menu is closed.
    const mq = window.matchMedia('(min-width: 720px)');
    mq.addEventListener('change', e => { if (e.matches && toggle.getAttribute('aria-expanded') === 'true') close(); });
  }
})();
