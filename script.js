//  <!-- DROPDOWN JS FOR HOME -->
const toggle = document.getElementById("homeToggle");
const menu = document.getElementById("homeMenu");
const items = menu.querySelectorAll(".home-item");
const caret = document.getElementById("homeCaret");

let isOpen = false;

// Initial state
gsap.set(menu, { autoAlpha: 0, y: -10, display: "none" });
gsap.set(items, { opacity: 0, y: -8 });

toggle.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isOpen) {
    menu.classList.remove("hidden");

    gsap.to(menu, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.05,
    });

    gsap.to(caret, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });

    isOpen = true;
  } else {
    closeMenu();
  }
});

function closeMenu() {
  gsap.to(items, {
    opacity: 0,
    y: -8,
    duration: 0.2,
    stagger: 0.05,
    ease: "power2.in",
  });

  gsap.to(menu, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => menu.classList.add("hidden"),
  });

  gsap.to(caret, {
    rotate: 0,
    duration: 0.25,
  });

  isOpen = false;
}

document.addEventListener("click", () => {
  if (isOpen) closeMenu();
});

// <!-- DROPDOWN JS FOR HOME in mobile-->
const mobileToggle = document.getElementById("mobileHomeToggle");
const mobileMenu = document.getElementById("mobileHomeMenu");
const mobileItems = mobileMenu.querySelectorAll(".mobile-home-item");
const mobileCaret = document.getElementById("mobileCaret");

let isMobileOpen = false;

// Initial state
gsap.set(mobileMenu, {
  autoAlpha: 0,
  y: -10,
  display: "none",
});

gsap.set(mobileItems, {
  opacity: 0,
  y: -12,
});

mobileToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isMobileOpen) {
    mobileMenu.classList.remove("hidden");

    gsap.to(mobileMenu, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(mobileItems, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.05,
    });

    gsap.to(mobileCaret, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });

    isMobileOpen = true;
  } else {
    closeMobileMenu();
  }
});

function closeMobileMenu() {
  gsap.to(mobileItems, {
    opacity: 0,
    y: -12,
    duration: 0.25,
    stagger: 0.06,
    ease: "power2.in",
  });

  gsap.to(mobileMenu, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => mobileMenu.classList.add("hidden"),
  });

  gsap.to(mobileCaret, {
    rotate: 0,
    duration: 0.25,
    ease: "power2.in",
  });

  isMobileOpen = false;
}

// Close on outside click
document.addEventListener("click", () => {
  if (isMobileOpen) closeMobileMenu();
});

// <!-- ROUNDED NAVBAR ANIMATION JS -->
const navbar = document.getElementById("navbar");

let lastScroll = 0;
let isHidden = false;

/* ---------- INITIAL STYLE ---------- */
gsap.set(navbar, {
  margin: "1.5rem",
  borderRadius: "9999px",
  color: "white",
  backgroundColor: "transparent",
});

/* ---------- SCROLL DIRECTION ---------- */
window.addEventListener("scroll", () => {
  let current = window.scrollY;

  if (current > lastScroll && current > 120 && !isHidden) {
    gsap.to(navbar, { y: -120, duration: 1.3, ease: "power2.out" });
    isHidden = true;
  }

  if (current < lastScroll && isHidden) {
    gsap.to(navbar, { y: 0, duration: 1.3, ease: "power2.out" });
    isHidden = false;
  }

  lastScroll = current;
});

/* ---------- HOME SECTION STYLE CHANGE ---------- */
ScrollTrigger.create({
  trigger: "#home",
  start: "top top",

  onEnter: () => {
    gsap.to(navbar, {
      margin: 0,
      borderRadius: 0,
      color: "black",
      backgroundColor: "white",
      duration: 0.5,
    });
  },

  onLeaveBack: () => {
    gsap.to(navbar, {
      margin: "1.5rem",
      borderRadius: "9999px",
      color: "white",
      backgroundColor: "transparent",
      duration: 0.5,
    });
  },
});

// <!-- MOBILE MENU JS WITH JQUERY -->
// initial state (important)
gsap.set(".menu-link", {
  opacity: 0,
  y: 30,
});

$(".ham-icon").click(function () {
  // show menu
  $(".mobile-menu").removeClass("translate-x-full").addClass("translate-x-0");

  // animate links one by one
  gsap.to(".menu-link", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.15, // 👈 one by one
    delay: 0.3,
  });
});

$(".close-menu").click(function () {
  // hide links first
  gsap.to(".menu-link", {
    opacity: 0,
    y: 30,
    duration: 0.4,
    ease: "power3.in",
    stagger: 0.1,
  });

  // hide menu after animation
  setTimeout(() => {
    $(".mobile-menu").removeClass("translate-x-0").addClass("translate-x-full");
  }, 400);
});

// HOME GSAP
// Initial Load Animation
/* initial states — runs instantly */
gsap.set(".hero-badge", { opacity: 0, y: 30 });
gsap.set(".hero-title span", { opacity: 0, y: 60 });
gsap.set(".hero-btn", { opacity: 0, scale: 0.8 });
gsap.set(".hero-rating", { opacity: 0, y: 20 });
gsap.set(".stat-item", { opacity: 0, y: 50 });

/* loader timing */
window.addEventListener("load", () => {
  const loader = document.getElementById("re-loader");

  gsap
    .timeline({
      delay: 2.6,
      onComplete: startHeroAnim,
    })
    .to(loader, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    })
    .set(loader, { display: "none" });
});

/* hero animation */
function startHeroAnim() {
  gsap
    .timeline()

    .to(".hero-badge", { opacity: 1, y: 0, duration: 0.8 })

    .to(
      ".hero-title span",
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 },
      "-=.4",
    )

    .to(".hero-btn", { opacity: 1, scale: 1, duration: 0.6 }, "-=.5")

    .to(".hero-rating", { opacity: 1, y: 0, duration: 0.6 }, "-=.4")

    .to(".stat-item", { opacity: 1, y: 0, stagger: 0.2, duration: 1 }, "-=.6");
}

// Parallax Background
gsap.to(".hero-image", {
  scale: 1.1,
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

// Fade out content slightly on scroll
gsap.to(".hero-left", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

// ABOUT

// HEADLINE ANIMATION
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
    },
  })
  .from(".about-badge", { y: 30, opacity: 0, duration: 0.6 })
  .from(".about-title", { y: 60, opacity: 0, duration: 1 }, "-=0.4")
  .from(".about-desc", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
  .from(".about-btn", { scale: 0.8, opacity: 0, duration: 0.6 }, "-=0.6");

// CARDS STAGGER
gsap.from(".about-image-left, .about-middle-card, .about-right-card", {
  y: 80,
  opacity: 0,
  stagger: 0.2,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-image-left",
    start: "top 85%",
  },
});

// STATS COUNTER FADE
gsap.from(".about-stats div", {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-stats",
    start: "top 85%",
  },
});

// ROTATING BADGE
gsap.to(".about-rotate", {
  rotation: 360,
  duration: 20,
  repeat: -1,
  ease: "none",
});

// STATS
gsap.utils.toArray(".stat-number").forEach((stat) => {
  let target = +stat.getAttribute("data-target");

  gsap.fromTo(
    stat,
    { innerText: 0 },
    {
      innerText: target,
      duration: 2,
      ease: "power2.out",
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: ".about-stats",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: function () {
        stat.innerText = Math.floor(stat.innerText);
      },
    },
  );
});

// SERVICES CARD GSAP

// TITLE ANIMATION
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".services-section",
      start: "top 80%",
    },
  })
  .from(".services-badge", { y: 30, opacity: 0, duration: 0.6 })
  .from(".services-title", { y: 50, opacity: 0, duration: 1 }, "-=.4");

// CARDS STAGGER
gsap.from(".service-card", {
  y: 80,
  opacity: 0,
  stagger: 0.2,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".services-grid",
    start: "top 85%",
  },
});

// REVIEW FADE
gsap.from(".services-review", {
  y: 40,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".services-review",
    start: "top 90%",
  },
});

// FIXED BG VID

/* text entrance */
gsap.from(".video-pill", {
  y: 40,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
  scrollTrigger: { trigger: ".video-section", start: "top 75%" },
});

gsap.from(".video-title", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  delay: 0.1,
  ease: "power3.out",
  scrollTrigger: { trigger: ".video-section", start: "top 75%" },
});

gsap.from(".video-desc", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  delay: 0.3,
  ease: "power3.out",
  scrollTrigger: { trigger: ".video-section", start: "top 75%" },
});

/* play button entrance */
gsap.from(".video-play-wrapper", {
  scale: 0.7,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "back.out(1.7)",
  scrollTrigger: { trigger: ".video-section", start: "top 75%" },
});

/* rotating ring */
gsap.to(".video-rotating", {
  rotation: 360,
  duration: 20,
  repeat: -1,
  ease: "none",
});

/* modal logic */
const modal = document.querySelector(".video-modal");
const frame = document.getElementById("videoFrame");

document.querySelector(".video-open").onclick = () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  gsap.fromTo(".video-modal", { opacity: 0 }, { opacity: 1, duration: 0.4 });

  gsap.fromTo(
    ".video-modal-content",
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
  );

  frame.src = "https://www.youtube.com/embed/oXSz5-M2Kwg?si=_9hPzy9FykjyZgDS";
};

document.querySelector(".video-close").onclick = closeModal;

function closeModal() {
  gsap.to(".video-modal-content", {
    scale: 0.8,
    opacity: 0,
    duration: 0.35,
    ease: "power3.in",
  });

  gsap.to(".video-modal", {
    opacity: 0,
    duration: 0.35,
    onComplete: () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      frame.src = "";
    },
  });
}

// WHY SECTION

// INITIAL REVEAL
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".who-section",
      start: "top 80%",
    },
  })
  .from(".who-badge", { y: 30, opacity: 0, duration: 0.6 })
  .from(".who-title", { y: 50, opacity: 0, duration: 1 }, "-=.4")
  .from(".who-tab", { y: 20, opacity: 0, stagger: 0.2, duration: 0.6 }, "-=.6")
  .from(".who-main-image", { y: 80, opacity: 0, duration: 1 }, "-=.4")
  .from(".who-review", { y: 80, opacity: 0, duration: 1 }, "-=.5")
  .from(".who-small-image", { y: 80, opacity: 0, duration: 1 }, "-=.6");

// TAB SWITCH
const tabs = document.querySelectorAll(".who-tab");
const contents = document.querySelectorAll(".who-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active-tab"));
    tab.classList.add("active-tab");

    let target = tab.getAttribute("data-tab");

    contents.forEach((c) => {
      c.classList.add("hidden-content");
      c.classList.remove("active-content");
    });

    let activeContent = document.getElementById(target);

    activeContent.classList.remove("hidden-content");
    activeContent.classList.add("active-content");

    gsap.fromTo(
      activeContent,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
    );
  });
});

// OUR COMMITMENT

// Left side animation
gsap.from(".commit-left > *", {
  scrollTrigger: {
    trigger: ".commit-left",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",
});

// Cards animation
gsap.from(".commit-card", {
  scrollTrigger: {
    trigger: ".commit-cards",
    start: "top 80%",
  },
  y: 60,
  opacity: 0,
  duration: 0.9,
  stagger: 0.2,
  ease: "power3.out",
});

// PROJECTS

// Header animation
gsap.from(".projects-header > *", {
  scrollTrigger: {
    trigger: ".projects-header",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
  ease: "power3.out",
});

// Cards reveal stagger
gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 80%",
  },
  y: 80,
  opacity: 0,
  duration: 1.2,
  stagger: 0.25,
  ease: "power4.out",
});

// CTA fade
gsap.from(".projects-cta", {
  scrollTrigger: {
    trigger: ".projects-cta",
    start: "top 90%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out",
});

// CONTACT

// Left content animation
gsap.from(".support-content > *", {
  scrollTrigger: {
    trigger: ".support-section",
    start: "top 80%",
  },
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});

// Form animation
gsap.from(".support-form", {
  scrollTrigger: {
    trigger: ".support-form",
    start: "top 85%",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

// FORM VALIDATION
const form = document.getElementById("contactForm");
const errorText = document.getElementById("formError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  errorText.classList.add("hidden");

  if (!first || !last || !email || !phone || !message) {
    errorText.textContent = "All fields are required.";
    errorText.classList.remove("hidden");
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    errorText.textContent = "Enter Gmail Only";
    errorText.classList.remove("hidden");
    return;
  }

  // Clear form
  form.reset();

  // Redirect
  window.location.href = "./404.html";
});

//TESTIMONIALS GSAP

/* HEADER ANIMATION */
gsap.from(".header-left", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section-testimonials",
    start: "top 75%",
  },
});

gsap.from(".header-right", {
  y: 80,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section-testimonials",
    start: "top 75%",
  },
});

/* CARDS STAGGER */
gsap.from(".testimonial-card", {
  y: 100,
  opacity: 0,
  duration: 1.1,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".cards-wrapper",
    start: "top 80%",
  },
});

//FAQ

/* Section Reveal */
gsap.from(".faq-left", {
  scrollTrigger: {
    trigger: ".faq-section",
    start: "top 80%",
  },
  x: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".faq-item", {
  scrollTrigger: {
    trigger: ".faq-right",
    start: "top 85%",
  },
  y: 60,
  opacity: 0,
  stagger: 0.15,
  duration: 1,
  ease: "power3.out",
});

/* Accordion Logic */
document.querySelectorAll(".faq-header").forEach((header) => {
  header.addEventListener("click", function () {
    const item = this.parentElement;
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    const isOpen = !content.classList.contains("hidden");

    document.querySelectorAll(".faq-content").forEach((c) => {
      if (!c.classList.contains("hidden")) {
        gsap.to(c, {
          height: 0,
          duration: 0.4,
          onComplete: () => c.classList.add("hidden"),
        });
      }
    });

    document.querySelectorAll(".faq-icon").forEach((i) => {
      i.classList.remove("fa-minus");
      i.classList.add("fa-plus");
    });

    document.querySelectorAll(".faq-item").forEach((i) => {
      i.classList.remove("bg-[#0b0f1c]", "text-white");
      i.classList.add("bg-white");
    });

    if (!isOpen) {
      content.classList.remove("hidden");
      gsap.fromTo(
        content,
        { height: 0 },
        { height: "auto", duration: 0.5, ease: "power2.out" },
      );

      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");

      item.classList.remove("bg-white");
      item.classList.add("bg-[#0b0f1c]", "text-white");
    }
  });
});

//BLOGS

if (document.querySelector(".blog-section")) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".blog-section",
        start: "top 80%",
      },
    })
    .from(".blog-tag", { opacity: 0, duration: 0.5 })
    .from(".blog-title", { y: 40, opacity: 0, duration: 0.7 }, "-=0.2")
    .from(
      ".blog-card",
      {
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.2",
    );
}

// FOOTER

// Title animation
gsap.from(".footer-title", {
  scrollTrigger: {
    trigger: ".main-footer",
    start: "top 80%",
  },
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

// Social animation
gsap.from(".footer-social .social-circle", {
  scrollTrigger: {
    trigger: ".main-footer",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power2.out",
});

// Columns stagger
gsap.from(".footer-col", {
  scrollTrigger: {
    trigger: ".footer-columns",
    start: "top 85%",
  },
  y: 70,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out",
});

const footForm = document.getElementById("foot-form");
const footError = document.getElementById("footError");

footForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const footEmail = document.getElementById("foot-email").value.trim();

  footError.classList.add("hidden");

  if (!footEmail.endsWith("@gmail.com")) {
    footError.textContent = "Enter Gmail Only";
    footError.classList.remove("hidden");
    return;
  }

  // Clear form
  footForm.reset();

  // Redirect
  window.location.href = "./404.html";
});

// ===============================
// LENIS SETUP (SMOOTH + CONTROLLED)
// ===============================
const lenis = new Lenis({
  duration: 1, // 1.2–1.4 = best for UI-heavy sites
  easing: (t) => 1 - Math.pow(1 - t, 4), // smooth, natural
  smoothWheel: true,
  smoothTouch: false, // keep mobile native
});

// ===============================
// SYNC WITH SCROLLTRIGGER
// ===============================
lenis.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length
      ? lenis.scrollTo(value, { immediate: true })
      : lenis.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

// ===============================
// RAF LOOP (CORRECT WAY)
// ===============================
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ===============================
// REFRESH FIX
// ===============================
ScrollTrigger.addEventListener("refresh", () => lenis.resize());
ScrollTrigger.refresh();

// SCROLL TOP

const btn = document.querySelector(".scrollTopBtn");
const progress = document.querySelector(".progress-bar");

const radius = 24;
const circumference = 2 * Math.PI * radius;

progress.style.strokeDasharray = circumference;
progress.style.strokeDashoffset = circumference;

/* smooth progress calc */
function updateProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progressValue = scrollTop / height;
  const offset = circumference - progressValue * circumference;
  progress.style.strokeDashoffset = offset;

  /* show hide */
  if (scrollTop > 200) {
    gsap.to(btn, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
  } else {
    gsap.to(btn, { opacity: 0, scale: 0.7, duration: 0.3, ease: "power2.out" });
  }

  requestAnimationFrame(updateProgress);
}
updateProgress();

/* smooth scroll */
btn.onclick = () => {
  gsap.to(window, {
    scrollTo: 0,
    duration: 1.1,
    ease: "power3.inOut",
  });
};

// LOADER

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     document.getElementById("re-loader").style.opacity = "0";
//     document.getElementById("re-loader").style.transition = "opacity .6s ease";

//     setTimeout(() => {
//       document.getElementById("re-loader").style.display = "none";
//     }, 600);
//   }, 2600);
// });
