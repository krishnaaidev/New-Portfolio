/**
 * Suman Krishna Portfolio - Main Application Script
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Typing Effect for Hero
  initTypingEffect();

  // 2. Theme Management (Dark / Light)
  initTheme();

  // 3. Navigation & Scrollspy
  initNavigation();

  // 4. Stat Counter Animation
  initStatCounters();

  // 5. Projects Rendering, Filter & Modal
  initProjectsSection();

  // 6. Resume Modal & Quick View
  initResumeModal();

  // 7. Contact Form & Email Copy
  initContactActions();

  // 8. Scroll Progress Bar & Back to Top
  initScrollFeatures();

  // 9. Audio / Micro-interactions & Tilt Effect (if supported)
  initCardTilt();

  // 10. Photo Gallery Lightbox
  initPhotoLightbox();
});

/* ==========================================================================
   1. Dynamic Typing Effect
   ========================================================================== */
function initTypingEffect() {
  const typingElement = document.getElementById("typing-role");
  if (!typingElement) return;

  const roles = [
    "Machine Learning Engineer",
    "Data Science Engineer",
    "Google Student Ambassador",
    "Google Developer Groups Member",
    "Deep Learning & NLP Specialist",
    "Prompt & Generative AI Builder"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at end of text
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   2. Theme Management
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;
  const savedTheme = localStorage.getItem("sk_theme") || "dark";

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    updateThemeIcon(true);
  } else {
    document.body.classList.remove("light-theme");
    updateThemeIcon(false);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-theme");
      localStorage.setItem("sk_theme", isLight ? "light" : "dark");
      updateThemeIcon(isLight);
      showToast(isLight ? "Switched to Light Theme" : "Switched to Dark Theme", "info");
    });
  }

  function updateThemeIcon(isLight) {
    if (!themeIcon) return;
    if (isLight) {
      themeIcon.className = "fa-solid fa-moon";
      themeToggle.setAttribute("title", "Switch to Dark Mode");
      themeToggle.setAttribute("aria-label", "Switch to Dark Mode");
    } else {
      themeIcon.className = "fa-solid fa-sun";
      themeToggle.setAttribute("title", "Switch to Light Mode");
      themeToggle.setAttribute("aria-label", "Switch to Light Mode");
    }
  }
}

/* ==========================================================================
   3. Navigation, Mobile Menu & Active State
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Header scroll blur effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.classList.toggle("active");
      navToggle.setAttribute("aria-expanded", isOpen);
      document.body.classList.toggle("menu-open", isOpen);
    });

    // Close mobile menu when clicking nav link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  // Active link scrollspy
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const correspondingLink = document.querySelector(`.nav-link[href*="#${sectionId}"]`);

      if (correspondingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          correspondingLink.classList.add("active");
        } else {
          correspondingLink.classList.remove("active");
        }
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   4. Stat Counter Animation
   ========================================================================== */
function initStatCounters() {
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.getAttribute("data-target"));
        const suffix = entry.target.getAttribute("data-suffix") || "";
        const decimals = parseInt(entry.target.getAttribute("data-decimals") || "0", 10);
        animateCounter(entry.target, target, suffix, decimals);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statNumbers.forEach(stat => observer.observe(stat));

  function animateCounter(el, target, suffix, decimals) {
    let current = 0;
    const duration = 1800;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quartic
      const easeOut = 1 - Math.pow(1 - progress, 4);
      current = easeOut * target;

      el.textContent = (decimals > 0 ? current.toFixed(decimals) : Math.floor(current)) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = (decimals > 0 ? target.toFixed(decimals) : target) + suffix;
      }
    }

    requestAnimationFrame(update);
  }
}

/* ==========================================================================
   5. Projects Showcase, Filtering & Modal
   ========================================================================== */
function initProjectsSection() {
  const container = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!container || typeof projectsData === "undefined") return;

  let currentFilter = "all";

  function renderProjects(filter) {
    container.innerHTML = "";
    const filtered = filter === "all" 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-projects">
          <i class="fa-solid fa-folder-open"></i>
          <p>No projects found for this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((p, index) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.style.animationDelay = `${index * 80}ms`;

      const tagsHtml = p.tags.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join("");
      const metricsHtml = p.metrics ? p.metrics.slice(0, 2).map(m => `
        <div class="card-metric">
          <span class="m-val">${m.value}</span>
          <span class="m-lbl">${m.label}</span>
        </div>
      `).join("") : "";

      card.innerHTML = `
        <div class="project-thumb">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <div class="project-thumb-overlay">
            <button class="btn-quick-view" data-id="${p.id}" aria-label="View project details">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Case Study
            </button>
          </div>
          <span class="project-category-badge">${p.categoryLabel}</span>
          ${p.badge ? `<span class="project-flag-badge">${p.badge}</span>` : ""}
        </div>
        <div class="project-content">
          <div class="project-meta-date"><i class="fa-regular fa-calendar"></i> ${p.date}</div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.shortDesc}</p>
          
          ${metricsHtml ? `<div class="project-card-metrics">${metricsHtml}</div>` : ""}

          <div class="project-tags">${tagsHtml}</div>
          
          <div class="project-footer">
            <button class="project-btn-details" data-id="${p.id}">
              <span>Explore Details</span>
              <i class="fa-solid fa-chevron-right"></i>
            </button>
            <div class="project-links">
              ${p.github && p.github !== "#" ? `
                <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="proj-icon-btn" title="GitHub Code" aria-label="GitHub Repository">
                  <i class="fa-brands fa-github"></i>
                </a>
              ` : ""}
              ${p.demo && p.demo !== "#" ? `
                <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="proj-icon-btn" title="Live Application" aria-label="Live Demo">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              ` : ""}
            </div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    // Attach click handlers to open modal
    container.querySelectorAll(".btn-quick-view, .project-btn-details").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        openProjectModal(id);
      });
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderProjects(currentFilter);
    });
  });

  // Initial render
  renderProjects("all");
}

/* Project Detail Modal */
function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("project-modal-body");
  if (!modal || !modalContent) return;

  const highlightsHtml = project.highlights.map(h => `
    <li>
      <i class="fa-solid fa-circle-check"></i>
      <span>${h}</span>
    </li>
  `).join("");

  const tagsHtml = project.tags.map(t => `<span class="project-tag modal-tag">${t}</span>`).join("");
  
  const metricsHtml = project.metrics ? project.metrics.map(m => `
    <div class="modal-metric-card">
      <div class="metric-value">${m.value}</div>
      <div class="metric-label">${m.label}</div>
    </div>
  `).join("") : "";

  modalContent.innerHTML = `
    <div class="modal-hero-wrap">
      <img src="${project.image}" alt="${project.title}" class="modal-img">
      <div class="modal-hero-badge">${project.categoryLabel}</div>
    </div>
    
    <div class="modal-body-padding">
      <div class="modal-header-meta">
        <span class="status-pill"><i class="fa-solid fa-circle-dot"></i> ${project.status}</span>
        <span class="modal-date"><i class="fa-regular fa-calendar"></i> ${project.date}</span>
      </div>

      <h2 class="modal-title">${project.title}</h2>
      
      <p class="modal-full-desc">${project.fullDesc}</p>

      ${metricsHtml ? `
        <div class="modal-metrics-grid">
          ${metricsHtml}
        </div>
      ` : ""}

      <div class="modal-section-title">Key Architectural Highlights & Innovations</div>
      <ul class="modal-highlights-list">
        ${highlightsHtml}
      </ul>

      <div class="modal-section-title">Core Technology Stack</div>
      <div class="modal-tags-wrap">
        ${tagsHtml}
      </div>

      <div class="modal-action-bar">
        ${project.github && project.github !== "#" ? `
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <i class="fa-brands fa-github"></i> View GitHub Repository
          </a>
        ` : ""}
        ${project.demo && project.demo !== "#" ? `
          <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Open Live Project
          </a>
        ` : ""}
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Close listeners
  const closeBtn = modal.querySelector(".modal-close");
  const backdrop = modal.querySelector(".modal-backdrop");
  
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.onclick = closeModal;
  if (backdrop) backdrop.onclick = closeModal;

  window.onkeydown = (e) => {
    if (e.key === "Escape") closeModal();
  };
}

/* ==========================================================================
   6. Resume Modal & Quick View
   ========================================================================== */
function initResumeModal() {
  const resumeModal = document.getElementById("resume-modal");
  const openBtns = document.querySelectorAll(".open-resume-modal");
  if (!resumeModal) return;

  const closeBtn = resumeModal.querySelector(".modal-close");
  const backdrop = resumeModal.querySelector(".modal-backdrop");

  function openResume() {
    resumeModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeResume() {
    resumeModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  openBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openResume();
    });
  });

  if (closeBtn) closeBtn.onclick = closeResume;
  if (backdrop) backdrop.onclick = closeResume;

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && resumeModal.classList.contains("active")) {
      closeResume();
    }
  });
}

/* ==========================================================================
   7. Contact Actions & Form Handling
   ========================================================================== */
function initContactActions() {
  // Copy email button
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const email = "krishna.techx.31@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard: krishna.techx.31@gmail.com", "success");
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2200);
      }).catch(() => {
        showToast("Failed to copy email.", "error");
      });
    });
  }

  // Interactive Contact Form (direct mailto or form submission)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("form-name").value.trim();
      const email = document.getElementById("form-email").value.trim();
      const subject = document.getElementById("form-subject").value.trim();
      const message = document.getElementById("form-message").value.trim();

      if (!name || !email || !message) {
        showToast("Please complete all required fields.", "error");
        return;
      }

      // Prepare mailto link as instant fallback
      const mailtoSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${name}`);
      const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoUrl = `mailto:krishna.techx.31@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Show success toast
      showToast("Opening your default mail client...", "success");

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 400);

      contactForm.reset();
    });
  }
}

/* ==========================================================================
   8. Scroll Features (Progress Bar & Back-to-Top)
   ========================================================================== */
function initScrollFeatures() {
  const progressBar = document.getElementById("scroll-progress");
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (backToTopBtn) {
      if (window.scrollY > 450) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* ==========================================================================
   9. Card Tilt & Micro-interactions
   ========================================================================== */
function initCardTilt() {
  // Only apply tilt on desktop devices with hover support
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const cards = document.querySelectorAll(".tilt-card");
    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }
}

/* ==========================================================================
   Toast Notification Utility
   ========================================================================== */
function showToast(message, type = "info") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast-pill ${type}`;
  
  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "error") icon = "fa-circle-exclamation";

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 20);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3600);
}

/* ==========================================================================
   10. Photography Gallery Lightbox
   ========================================================================== */
function initPhotoLightbox() {
  const lightbox = document.getElementById("photo-lightbox");
  if (!lightbox) return;

  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxCategory = document.getElementById("lightbox-category");
  const closeBtn = document.getElementById("lightbox-close-btn");

  document.querySelectorAll(".photo-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // If clicking the direct external link button, don't trigger lightbox
      if (e.target.closest(".photo-link-btn")) return;

      const src = card.getAttribute("data-src") || card.querySelector("img")?.src;
      const title = card.getAttribute("data-title") || "Photography by Suman Krishna";
      const category = card.getAttribute("data-category") || "@bruh.vision";

      if (lightboxImg) lightboxImg.src = src;
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxCategory) lightboxCategory.textContent = category;

      lightbox.classList.add("active");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}

