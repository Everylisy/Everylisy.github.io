gsap.utils.toArray(".myContents").forEach((section) =>{
    const img = section.querySelector("img");
    const p = section.querySelector("p");

gsap.from(img, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: section,
        start: "top 70%",
    }   
    });

gsap.from(p, {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: section,
        start: "top 60%",
    }   
    });
});