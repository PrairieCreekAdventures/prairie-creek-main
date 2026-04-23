// Prairie Creek Adventures — gentle scroll reveals
(function () {
  const targets = document.querySelectorAll('.section-head, .post, .cat-card, .pullquote__inner, .about-teaser__left, .about-teaser__right, .ribbon__inner, .subscribe__inner, .archive__header, .about-page__header');
  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.9s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)';
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const peers = entry.target.parentElement ? Array.from(entry.target.parentElement.children) : [];
        const index = peers.indexOf(entry.target);
        const delay = index > 0 ? Math.min(index * 70, 400) : 0;
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  targets.forEach(el => io.observe(el));

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; el.style.transition = 'none'; });
    io.disconnect();
  }
})();
