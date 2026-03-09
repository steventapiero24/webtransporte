import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const usePageAnimations = (refs) => {
  const {
    containerRef,
    heroRef,
    textRef,
    titleContainerRef,
    pinnedSectionRef,
    parallaxSectionRef,
    carouselWrapperRef,
    carouselContentRef,
  } = refs;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      // Hero text animation
      const textElement = textRef.current;
      const textContent = "Redefiniendo el transporte de carga pesada con inteligencia artificial diseñada para optimizar cada kilómetro de tu ruta.";
      const words = textContent.split(" ");
      
      textElement.innerHTML = "";
      words.forEach(word => {
        const span = document.createElement("span");
        span.innerText = word + " ";
        span.style.opacity = "0.15";
        span.style.display = "inline-block";
        span.style.filter = "blur(4px)";
        span.style.transition = "all 0.4s ease";
        span.className = "word-span";
        textElement.appendChild(span);
      });

      const wordSpans = textElement.querySelectorAll(".word-span");

      // Master timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=800%",
          pin: true,
          scrub: 1.5,
        }
      });

      masterTl.to(titleContainerRef.current, {
        y: -150,
        opacity: 0,
        filter: "blur(30px)",
        duration: 4,
        ease: "power2.inOut"
      }, 0);

      wordSpans.forEach((span, i) => {
        masterTl.to(span, {
          opacity: 1,
          filter: "blur(0px)",
          color: "#ffffff",
          duration: 2,
          ease: "power1.out"
        }, i * 0.15 + 0.5);
      });

      masterTl.to({}, { duration: 1.5 });

      masterTl.to(".hero-main-container", {
        scale: 0.18,
        borderRadius: "15rem",
        duration: 6,
        ease: "power2.inOut"
      });

      masterTl.to(".background-gallery-container", {
        opacity: 1,
        scale: 1,
        duration: 6,
        ease: "power2.inOut"
      }, "<");

      masterTl.from(".gallery-center-content", {
        opacity: 0,
        y: 80,
        filter: "blur(15px)",
        duration: 4,
        ease: "power2.out"
      }, "-=2");

      masterTl.to(".hero-main-container", {
        y: -1800,
        duration: 18,
        ease: "power1.inOut"
      }, "+=0.5");

      const nodes = gsap.utils.toArray(".bg-image-node");
      nodes.forEach((node) => {
        const speed = parseFloat(node.getAttribute('data-speed')) || 1;
        masterTl.to(node, {
          y: -2000 * speed,
          duration: 18,
          ease: "power1.inOut"
        }, "<");
      });

      masterTl.to(".gallery-center-content", {
        y: -400,
        opacity: 0,
        duration: 12,
        ease: "power1.in"
      }, "-=12");

      // Pinned section
      const steps = gsap.utils.toArray(".pinned-text-step");
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedSectionRef.current,
          start: "top top",
          end: "+=400%", 
          pin: true,
          scrub: true,
          anticipatePin: 1
        }
      });

      steps.forEach((step, i) => {
        pinTl.fromTo(step, 
          { opacity: 0, y: 50, filter: "blur(10px)" },
          { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out"
          }
        );
        pinTl.to({}, { duration: 1.5 }); 
        if (i !== steps.length - 1) {
          pinTl.to(step, {
            opacity: 0,
            y: -50,
            filter: "blur(10px)",
            duration: 1,
            ease: "power2.in"
          });
        }
      });

      // Parallax
      gsap.fromTo(".parallax-bg", 
        { y: "-20%" },
        { 
          y: "20%",
          ease: "none",
          scrollTrigger: {
            trigger: parallaxSectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // Carousel
      const totalWidth = carouselContentRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      gsap.to(carouselContentRef.current, {
        x: () => -(totalWidth - viewportWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: carouselWrapperRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      // Reveal sections
      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.from(section, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        });
      });

    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);
};
