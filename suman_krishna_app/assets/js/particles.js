/**
 * Interactive Neural / Constellation Particle Canvas
 * Light & Dark theme responsive, mouse-interactive, high-DPI crisp
 */

(function initHeroParticles() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height, dpr;
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };
  let animationFrameId;
  let isVisible = true;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    createParticles();
  }

  function getParticleConfig() {
    const isDark = !document.body.classList.contains("light-theme");
    return {
      count: Math.min(Math.floor((width * height) / 9500), 85),
      nodeColor: isDark ? "rgba(56, 189, 248, " : "rgba(37, 99, 235, ",
      lineColor: isDark ? "rgba(99, 102, 241, " : "rgba(79, 70, 229, ",
      pulseColor: isDark ? "rgba(168, 85, 247, " : "rgba(147, 51, 234, ",
      maxDistance: 130
    };
  }

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.baseRadius = Math.random() * 2 + 1;
      this.radius = this.baseRadius;
      this.pulsePhase = Math.random() * Math.PI * 2;
      this.pulseSpeed = 0.02 + Math.random() * 0.02;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 2;
          this.y -= Math.sin(angle) * force * 2;
        }
      }

      this.pulsePhase += this.pulseSpeed;
      this.radius = this.baseRadius + Math.sin(this.pulsePhase) * 0.6;
    }

    draw(cfg) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(0.5, this.radius), 0, Math.PI * 2);
      ctx.fillStyle = cfg.nodeColor + (0.5 + Math.sin(this.pulsePhase) * 0.3) + ")";
      ctx.fill();
    }
  }

  function createParticles() {
    const cfg = getParticleConfig();
    particles = [];
    for (let i = 0; i < cfg.count; i++) {
      particles.push(new Particle());
    }
  }

  function render() {
    if (!isVisible) {
      animationFrameId = requestAnimationFrame(render);
      return;
    }

    ctx.clearRect(0, 0, width, height);
    const cfg = getParticleConfig();

    // Draw connecting lines (Neural synapse effect)
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < cfg.maxDistance) {
          const alpha = (1 - dist / cfg.maxDistance) * 0.28;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = cfg.lineColor + alpha + ")";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Connect to mouse if close
      if (mouse.x !== null && mouse.y !== null) {
        const dx = p1.x - mouse.x;
        const dy = p1.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const alpha = (1 - dist / mouse.radius) * 0.45;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = cfg.pulseColor + alpha + ")";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      p1.update();
      p1.draw(cfg);
    }

    animationFrameId = requestAnimationFrame(render);
  }

  // Mouse Listeners
  window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    } else {
      mouse.x = null;
      mouse.y = null;
    }
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Touch Support
  window.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0) {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right &&
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom
      ) {
        mouse.x = touch.clientX - rect.left;
        mouse.y = touch.clientY - rect.top;
      }
    }
  }, { passive: true });

  window.addEventListener("touchend", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Resize Debounce
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  // Visibility observer to pause when off-screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isVisible = entry.isIntersecting;
    });
  }, { threshold: 0.05 });

  const heroSec = document.querySelector(".hero-section");
  if (heroSec) observer.observe(heroSec);

  // Initialize
  resize();
  render();
})();
