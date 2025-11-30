gsap.from("#instTitle h1", {
  duration: 1.5,
  opacity: 0,
  ease: "power3.out",
  delay: 0
});

gsap.from("#instWeight h2", {
  scrollTrigger: {
    trigger: "#instWeight",
    start: "top 60%"
  },
  y: 30,
  duration: 1,
  opacity: 0,
  stagger: 0.15,
  ease: "power3.out",
});

gsap.from("#instWeight h3", {
  scrollTrigger: {
    trigger: "#instWeight",
    start: "top 60%"
  },
  y: 20,
  duration: 1,
  opacity: 0,
  delay: 0.7,
  ease: "power3.out",
});

gsap.from("#instImg img", {
  scrollTrigger: {
    trigger: "#instImg",
    start: "top 60%"
  },
  y: 40,
  duration: 1,
  stagger: 0.15,
  opacity: 0,
  ease: "power3.out",
});

gsap.from("#instWhy img", {
  scrollTrigger: {
    trigger: "#instWhy",
    start: "top 50%"
  },
  x: -40,
  duration: 1,
  opacity: 0,
  ease: "power3.out",
});

gsap.from("#instThink", {
  scrollTrigger: {
    trigger: "#instWhy",
    start: "top 50%"
  },
  x: 40,
  duration: 1,
  opacity: 0,
  ease: "power3.out",
  delay: 0.3
});