gsap.from("#spmonoTitle h1", {
  duration: 1.5,
  opacity: 0,
  ease: "power3.out",
  delay: 0
});

gsap.from("#spmonoWeight h2", {
  scrollTrigger: {
    trigger: "#spmonoWeight",
    start: "top 60%"
  },
  y: 30,
  duration: 1,
  opacity: 0,
  stagger: 0.15,
  ease: "power3.out",
});

gsap.from("#spmonoImg img", {
  scrollTrigger: {
    trigger: "#spmonoImg",
    start: "top 60%"
  },
  y: 40,
  duration: 1,
  stagger: 0.15,
  opacity: 0,
  ease: "power3.out",
});

gsap.from("#spmonoWhy img", {
  scrollTrigger: {
    trigger: "#spmonoWhy",
    start: "top 50%"
  },
  x: -40,
  duration: 1,
  opacity: 0,
  ease: "power3.out",
});

gsap.from("#spmonoThink", {
  scrollTrigger: {
    trigger: "#spmonoWhy",
    start: "top 50%"
  },
  x: 40,
  duration: 1,
  opacity: 0,
  ease: "power3.out",
  delay: 0.3
});