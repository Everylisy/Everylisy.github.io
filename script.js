gsap.from("#asTitle h1", {
  duration: 1.5,
  opacity: 0,
  ease: "power3.out",
  delay: 0
});

gsap.from("#asWeight h2", {
  scrollTrigger: {
    trigger: "#asWeight",
    start: "top 60%"
  },
  y: 30,
  duration: 1,
  opacity: 0,
  stagger: 0.15,
  ease: "power3.out",
});

gsap.from("#asImg img", {
  scrollTrigger: {
    trigger: "#asImg",
    start: "top 60%"
  },
  y: 40,
  duration: 1,
  stagger: 0.15,
  opacity: 0,
  ease: "power3.out",
});

gsap.from("#asWhy img", {
  scrollTrigger: {
    trigger: "#asWhy",
    start: "top 50%"
  },
  x: -40,
  duration: 1,
  opacity: 0,
  ease: "power3.out",
});

gsap.from("#asThink", {
  scrollTrigger: {
    trigger: "#asWhy",
    start: "top 50%"
  },
  x: 40,
  duration: 1,
  opacity: 0,
  ease: "power3.out",
  delay: 0.3
});