/* ============================================================
   Digital Lab — Portfolio interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Theme (dark mode) ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  // Default to dark; respect a saved preference if present
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", "dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isDark = root.getAttribute("data-theme") === "dark";
      if (isDark) {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    });
  }

  /* ---------- Custom cursor ---------- */
  const cursor = document.querySelector(".cursor");
  const cursorBlur = document.querySelector(".cursor-blur");

  if (cursor && cursorBlur && window.matchMedia("(hover: hover)").matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let blurX = mouseX;
    let blurY = mouseY;

    document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    });

    // Smooth trailing blur via requestAnimationFrame
    (function animateBlur() {
      blurX += (mouseX - blurX) * 0.15;
      blurY += (mouseY - blurY) * 0.15;
      cursorBlur.style.left = blurX + "px";
      cursorBlur.style.top = blurY + "px";
      requestAnimationFrame(animateBlur);
    })();

    // Grow the blur ring over interactive elements
    const interactiveSelector =
      "a, button, .btn, input, textarea, .skill-card, .project-card, .testimonial-card";
    document.querySelectorAll(interactiveSelector).forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        cursorBlur.classList.add("grow");
      });
      el.addEventListener("mouseleave", function () {
        cursorBlur.classList.remove("grow");
      });
    });
  }

  /* ---------- Mobile navigation ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    const setNavOpen = function (isOpen) {
      navLinks.classList.toggle("open", isOpen);
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.classList.toggle("nav-open", isOpen);
    };

    navToggle.addEventListener("click", function () {
      setNavOpen(!navLinks.classList.contains("open"));
    });

    // Close menu when a link is tapped
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });

    // Tap on empty menu background closes it
    navLinks.addEventListener("click", function (e) {
      if (e.target === navLinks) setNavOpen(false);
    });

    // Escape closes the menu
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navLinks.classList.contains("open")) {
        setNavOpen(false);
      }
    });

    // Close menu if the viewport is resized to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setNavOpen(false);
    });
  }

  /* ---------- Navbar scrolled state ---------- */
  const navbar = document.getElementById("navbar");

  function handleNavScroll() {
    if (!navbar) return;
    if (window.scrollY > 24) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavScroll, { passive: true });
  handleNavScroll();

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    revealElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll("section[id]");

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            document.querySelectorAll(".nav-links > li:not(.nav-mobile-footer) > a").forEach(function (a) {
              const isActive = a.getAttribute("href") === "#" + id;
              a.classList.toggle("active", isActive);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll("[data-count]");

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-count"), 10);
    if (isNaN(target)) return;

    const duration = 1400;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(update);
  }

  if (counters.length) {
    if ("IntersectionObserver" in window) {
      const counterObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      counters.forEach(function (counter) {
        counterObserver.observe(counter);
      });
    } else {
      counters.forEach(function (counter) {
        counter.textContent = counter.getAttribute("data-count");
      });
    }
  }

  /* ---------- Contact form ---------- */
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending…";
      submitBtn.disabled = true;

      // Simulate a network request (replace with real endpoint later)
      setTimeout(function () {
        submitBtn.textContent = "Message Sent ✓";
        submitBtn.style.background = "#16a34a";

        contactForm.reset();

        setTimeout(function () {
          submitBtn.textContent = originalText;
          submitBtn.style.background = "";
          submitBtn.disabled = false;
        }, 2600);
      }, 1200);
    });
  }
})();