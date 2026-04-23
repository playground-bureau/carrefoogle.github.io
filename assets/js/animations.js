/* ============================================
   Carrefoogle Corporation — Scroll Animations
   IntersectionObserver-based reveal system.
   ============================================ */

(function () {
  'use strict';

  // Hero entrance — runs once on load
  window.addEventListener('DOMContentLoaded', function () {
    var heroContent = document.querySelector('.hero-content');
    var heroScroll = document.querySelector('.hero-scroll');
    if (heroContent) {
      // Small delay so the user sees the page first, then the text arrives
      setTimeout(function () { heroContent.classList.add('hero-entered'); }, 300);
    }
    if (heroScroll) {
      setTimeout(function () { heroScroll.classList.add('hero-entered'); }, 1200);
    }
  });

  // Promo bar fake-dismiss
  window.addEventListener('DOMContentLoaded', function () {
    var dismiss = document.querySelector('.promo-dismiss');
    if (!dismiss) return;
    dismiss.addEventListener('click', function () {
      var bar = dismiss.closest('.promo-bar');
      if (!bar) return;
      var text = bar.querySelector('.promo-text');
      var badge = bar.querySelector('.promo-badge');
      if (badge) badge.remove();
      var pad = function (n) { return ('0000' + n).slice(-4); };
      var ticket = 'C-' + pad(Math.floor(Math.random() * 9000 + 1000)) + '-' + pad(Math.floor(Math.random() * 9000 + 1000));
      if (text) {
        text.innerHTML = 'Dismissal request received (Ticket #' + ticket + '). Estimated processing: 6–8 weeks.';
      }
      bar.classList.add('is-dismissed');
      dismiss.remove();
    });
  });

  // Scroll reveals
  if (!('IntersectionObserver' in window)) return; // graceful degradation

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      var el = entry.target;
      el.classList.add('revealed');

      // Stagger children if flagged
      if (el.hasAttribute('data-stagger')) {
        var children = el.querySelectorAll('.stagger-child');
        children.forEach(function (child, i) {
          child.style.transitionDelay = (i * 120) + 'ms';
          child.classList.add('revealed');
        });
      }

      observer.unobserve(el);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  window.addEventListener('DOMContentLoaded', function () {
    var targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    targets.forEach(function (el) { observer.observe(el); });
  });

})();
