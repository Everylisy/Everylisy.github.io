const timeLine = gsap.timeline({ delay: 0.3 });

timeLine.to(".cutLine", {
    duration: 1.3,
    width: "100vw",
    ease: "power4.inOut"
})

timeLine.set(".cutLine", { opacity: 0 });

timeLine.add(() => {
    gsap.to(".blockTop", 2, {
        top: "-50%",
        ease: "power3.inOut"
    });

    gsap.to(".blockBottom", 2, {
        bottom: "-50%",
        ease: "power3.inOut"
    });
});