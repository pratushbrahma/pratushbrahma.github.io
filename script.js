/* =========================================================
   Pratush Brahma — site interactions
   - sticky/condensing header
   - mobile nav
   - scroll-triggered reveals (IntersectionObserver)
   - subtle hero parallax (rAF + scroll)
   - publication filtering by year + topic
   All motion respects prefers-reduced-motion.
   ========================================================= */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Condensing header on scroll ----------
     Only index.html's header starts transparent (over the dark hero) and
     needs to condense to solid parchment as the user scrolls past it. Every
     inner page's header already carries "is-scrolled" in its static markup
     because it has no hero to be transparent over — it must stay solid from
     first paint. Gating on the presence of .hero stops this handler from
     forcing that class off at scrollY 0 on every other page, which was
     stripping the nav's readable background and text color before the user
     ever scrolled. */
  const header = document.getElementById("siteHeader");
  const hasHero = document.querySelector(".hero");
  const onScrollHeader = () => {
    if (!header || !hasHero) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScrollHeader();
  if (hasHero) window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------- Mobile nav ---------- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  const closeMenu = () => {
    if (!toggle || !menu) return;
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };
  const openMenu = () => {
    if (!toggle || !menu) return;
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  };

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });
    // Close after navigating to an anchor
    menu.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", closeMenu)
    );
    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Scroll-triggered reveals ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");

  // Assign per-element stagger via CSS custom property
  revealEls.forEach((el) => {
    const delay = el.getAttribute("data-reveal-delay");
    if (delay) el.style.setProperty("--reveal-delay", delay);
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- Hero parallax ---------- */
  const parallaxEls = document.querySelectorAll("[data-parallax]");
  if (!prefersReducedMotion && parallaxEls.length) {
    let ticking = false;
    const applyParallax = () => {
      const y = window.scrollY;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax")) || 0.2;
        el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(applyParallax);
          ticking = true;
        }
      },
      { passive: true }
    );
    applyParallax();
  }

  /* ---------- Publication filtering ---------- */
  const pubList = document.getElementById("pubList");
  const pubEmpty = document.getElementById("pubEmpty");

  if (pubList) {
    const pubs = Array.from(pubList.querySelectorAll(".pub"));
    const state = { year: "all", topic: "all" };

    const matches = (pub) => {
      const yearOk = state.year === "all" || pub.dataset.year === state.year;
      const topics = (pub.dataset.topic || "").split(/\s+/);
      const topicOk = state.topic === "all" || topics.includes(state.topic);
      return yearOk && topicOk;
    };

    const applyFilters = () => {
      let visible = 0;
      pubs.forEach((pub) => {
        const show = matches(pub);
        pub.classList.toggle("is-hidden", !show);
        if (show) visible++;
      });
      if (pubEmpty) pubEmpty.hidden = visible !== 0;
    };

    document.querySelectorAll("[data-filter-set]").forEach((group) => {
      const setName = group.getAttribute("data-filter-set"); // "year" | "topic"
      const chips = group.querySelectorAll(".chip");
      group.addEventListener("click", (e) => {
        const chip = e.target.closest(".chip");
        if (!chip) return;
        state[setName] = chip.getAttribute("data-filter");
        chips.forEach((c) => {
          const active = c === chip;
          c.classList.toggle("is-active", active);
          c.setAttribute("aria-pressed", String(active));
        });
        applyFilters();
      });
    });
  }

  /* ---------- Field map: specimen-tag label on hover/focus/tap ----------
     One gesture, one source of truth for position: the tag anchors to the
     hovered zone itself — never the cursor. A cursor-chasing tooltip is two
     unrelated things (your mouse, a floating box) that happen to move
     together; a source-anchored one reads as the zone itself producing the
     label, the way a native popover or menu-bar tooltip always anchors to
     its control, never to the pointer. Hover, keyboard focus, and touch tap
     all resolve to the same anchor function, so there is exactly one
     positioning system, not three.
     Desktop: hover shows the tag, click navigates straight through (the tag
     is already up by the time the click fires).
     Touch: mouseenter never fires, so the first tap shows the tag and holds
     navigation; a second tap on the same (now-labelled) zone proceeds. */
  const specimenTag = document.getElementById("specimenTag");
  const fieldZones = document.querySelectorAll(".field-zone");
  if (specimenTag && fieldZones.length) {
    let currentTagZone = null;

    // Anchored above the zone's own top edge by default — the tag reads as
    // rising off the illustration it belongs to. Flips below only when a
    // zone sits too close to the viewport top for that to fit.
    const anchorTag = (el) => {
      const r = el.getBoundingClientRect();
      const w = specimenTag.offsetWidth;
      const h = specimenTag.offsetHeight;
      const gap = 12;
      const above = r.top - h - gap >= 8;
      const top = above ? r.top - h - gap : r.bottom + gap;
      let left = r.left + r.width / 2 - w / 2;
      left = Math.min(Math.max(left, 8), window.innerWidth - w - 8);
      specimenTag.style.left = left + "px";
      specimenTag.style.top = top + "px";
      specimenTag.classList.toggle("specimen-tag--below", !above);
    };

    const showTag = (el) => {
      const sci = el.getAttribute("data-sci") || "";
      const q = el.getAttribute("data-q") || "";
      specimenTag.innerHTML = `<strong>${sci}</strong>${q}`;
      currentTagZone = el;
      // Position is computed before the reveal (opacity:0 is still laid
      // out and measurable), so it never flashes at a stale spot.
      anchorTag(el);
      // A hair of delay before the tag itself moves: the zone's own
      // brightening reads as the trigger, the label as its consequence,
      // not two things arriving at once.
      requestAnimationFrame(() => specimenTag.classList.add("is-visible"));
    };
    const hideTag = () => {
      specimenTag.classList.remove("is-visible");
      currentTagZone = null;
    };

    fieldZones.forEach((el) => {
      el.addEventListener("mouseenter", () => showTag(el));
      el.addEventListener("mouseleave", hideTag);
      el.addEventListener("focus", () => showTag(el));
      el.addEventListener("blur", hideTag);
      // Tap-to-preview: only intercepts when the tag isn't already showing
      // this zone (i.e. touch, or a stale tag from a previous zone). On
      // desktop the hover has already armed currentTagZone before the click
      // fires, so this is a no-op there and navigation proceeds normally.
      el.addEventListener("click", (e) => {
        if (currentTagZone === el) return;
        e.preventDefault();
        showTag(el);
      });
    });
    window.addEventListener("scroll", hideTag, { passive: true });
    window.addEventListener("resize", () => { if (currentTagZone) anchorTag(currentTagZone); });
    // Tapping elsewhere dismisses an armed (tapped-but-not-navigated) tag.
    document.addEventListener("click", (e) => {
      if (currentTagZone && !e.target.closest(".field-zone")) hideTag();
    });
  }

  /* ---------- Field map: punctuated idle gestures at irregular intervals ----------
     A lizard's glance, a spider's twitch, a vessel's growth pulse are occasional
     behaviors, not a metronome. Each element gets its own one-shot CSS animation
     (triggered by a class), refired after a randomized delay within a biologically
     plausible range — so no two repetitions ever land the same distance apart. */
  if (!prefersReducedMotion) {
    const idleGestures = [
      { selector: ".zone-lizard__head", className: "is-turning", minDelay: 8000, maxDelay: 18000, duration: 1300 },
      { selector: ".zone-spider__leg", className: "is-twitching", minDelay: 6000, maxDelay: 13000, duration: 900 },
      { selector: ".zone-mouse__pulse", className: "is-pulsing", minDelay: 4000, maxDelay: 8000, duration: 1200 },
    ];
    idleGestures.forEach(({ selector, className, minDelay, maxDelay, duration }) => {
      const el = document.querySelector(selector);
      if (!el) return;
      const scheduleNext = () => {
        const delay = minDelay + Math.random() * (maxDelay - minDelay);
        setTimeout(() => {
          el.classList.add(className);
          setTimeout(() => {
            el.classList.remove(className);
            scheduleNext();
          }, duration);
        }, delay);
      };
      scheduleNext();
    });
  }

  /* ---------- Smooth back-to-top ---------- */
  document.querySelectorAll("[data-totop]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  });

  /* ---------- Gallery lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const shots = document.querySelectorAll(".shot");
  if (lightbox && shots.length) {
    const media = document.getElementById("lightboxMedia");
    const cap = document.getElementById("lightboxCap");
    const closeBtn = document.getElementById("lightboxClose");
    let lastFocused = null;

    const openLightbox = (shot) => {
      lastFocused = shot;
      const caption = shot.getAttribute("data-caption") || "";
      const full = shot.getAttribute("data-full");
      const img = shot.querySelector("img");
      media.innerHTML = "";

      if (full || img) {
        const big = document.createElement("img");
        big.className = "lightbox__media";
        big.src = full || img.getAttribute("src");
        big.alt = (img && img.getAttribute("alt")) || caption;
        media.appendChild(big);
      } else {
        // No image yet — enlarge the colored placeholder
        const ph = shot.querySelector(".shot__ph");
        const block = document.createElement("div");
        block.className = "lightbox__media lightbox__media--ph";
        if (ph) {
          ph.classList.forEach((c) => {
            if (c.startsWith("shot__ph--")) block.classList.add(c);
          });
        }
        media.appendChild(block);
      }

      cap.textContent = caption;
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    };

    const closeLightbox = () => {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
      media.innerHTML = "";
      if (lastFocused) lastFocused.focus();
    };

    shots.forEach((shot) =>
      shot.addEventListener("click", () => openLightbox(shot))
    );
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });
  }

  /* ---------- Active nav link on scroll (scroll spy) ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll('.nav__menu a[href^="#"]');
  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => {
              link.classList.toggle(
                "is-current",
                link.getAttribute("href") === `#${id}`
              );
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => spy.observe(s));
  }
})();
