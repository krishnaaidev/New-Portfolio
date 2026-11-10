/**
 * Skills Section — Animated Proficiency Bars
 * Triggers bar fill animation when the skills section scrolls into view.
 */
(function () {
  'use strict';

  function animateSkillBars() {
    const fills = document.querySelectorAll('.skill-bar-fill[data-width]');
    if (!fills.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const targetWidth = el.getAttribute('data-width') + '%';
            // Small delay so CSS transition fires after paint
            requestAnimationFrame(() => {
              el.style.width = targetWidth;
            });
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    fills.forEach((fill) => observer.observe(fill));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateSkillBars);
  } else {
    animateSkillBars();
  }
})();
