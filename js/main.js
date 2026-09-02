(() => {
  "use strict";

  /* ---------- Video lightbox ---------- */
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("modalVideo");
  const modalTitle = document.getElementById("modalTitle");
  const modalTags = document.getElementById("modalTags");
  const modalDesc = document.getElementById("modalDesc");
  let lastFocused = null;

  const cards = document.querySelectorAll(".work-card");

  function openModal(card) {
    const src = card.dataset.video;
    if (!src) return;

    lastFocused = document.activeElement;
    modalTitle.textContent = card.dataset.title || "";
    modalTags.textContent = card.querySelector(".work-tags")?.textContent || "";
    modalDesc.textContent = card.dataset.desc || "";

    video.src = src;
    video.poster = card.querySelector("img")?.src || "";

    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    const play = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => { /* 自动播放被拦截时静默，用户可手动点击播放 */ });
      }
    };
    if (video.readyState >= 2) {
      play();
    } else {
      video.addEventListener("loadeddata", play, { once: true });
    }
    video.focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    video.pause();
    video.removeAttribute("src");
    video.load();
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  cards.forEach((card) => {
    card.querySelector(".work-media").addEventListener("click", () => openModal(card));
  });

  modal.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(
    ".work-card, .project, .strength, .edu-card"
  );

  if ("IntersectionObserver" in window) {
    revealEls.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = ["works", "projects", "strengths", "education"].map((id) =>
    document.getElementById(id)
  );
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === target
          );
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((sec) => sec && navObserver.observe(sec));
})();
