gsap.from("#halogenTitle h1", {
  duration: 1.5,
  opacity: 0,
  ease: "power3.out",
  delay: 0
});

gsap.from("#halogenWeight h2", {
  scrollTrigger: {
    trigger: "#halogenWeight",
    start: "top 60%"
  },
  y: 30,
  duration: 1,
  opacity: 0,
  stagger: 0.15,
  ease: "power3.out",
});

gsap.from("#halogenWeight h3", {
  scrollTrigger: {
    trigger: "#halogenWeight",
    start: "top 60%"
  },
  y: 20,
  duration: 1,
  opacity: 0,
  delay: 0.7,
  ease: "power3.out",
});

gsap.from("#halogenImg img", {
  scrollTrigger: {
    trigger: "#halogenImg",
    start: "top 60%"
  },
  y: 40,
  duration: 1,
  stagger: 0.15,
  opacity: 0,
  ease: "power3.out",
});

gsap.from("#halogenWhy img", {
  scrollTrigger: {
    trigger: "#halogenWhy",
    start: "top 50%"
  },
  x: -40,
  duration: 1,
  opacity: 0,
  ease: "power3.out",
});

gsap.from("#halogenThink", {
  scrollTrigger: {
    trigger: "#halogenWhy",
    start: "top 50%"
  },
  x: 40,
  duration: 1,
  opacity: 0,
  ease: "power3.out",
  delay: 0.3
});