import React, { useRef, useState } from 'react';
import { usePageAnimations } from './hooks/usePageAnimations';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import LogisticSection from './components/LogisticSection';
import PinnedOperationSection from './components/PinnedOperationSection';
import ParallaxSection from './components/ParallaxSection';
import CarouselSection from './components/CarouselSection';
import Footer from './components/Footer';
import TittleCarrusel from './components/TittleCarrusel';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // All refs for animations
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const titleContainerRef = useRef(null);
  const pinnedSectionRef = useRef(null);
  const parallaxSectionRef = useRef(null);
  const carouselWrapperRef = useRef(null);
  const carouselContentRef = useRef(null);

  // Initialize animations
  usePageAnimations({
    containerRef,
    heroRef,
    textRef,
    titleContainerRef,
    pinnedSectionRef,
    parallaxSectionRef,
    carouselWrapperRef,
    carouselContentRef,
  });

  return (
    <div ref={containerRef} className="bg-white text-black w-full overflow-hidden selection:bg-red-600 selection:text-white font-sans antialiased">
      <Navbar onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <Hero 
        heroRef={heroRef}
        titleContainerRef={titleContainerRef}
        textRef={textRef}
      />
      
      <LogisticSection />
      <PinnedOperationSection pinnedSectionRef={pinnedSectionRef} />
      <ParallaxSection parallaxSectionRef={parallaxSectionRef} />
      <TittleCarrusel />
      <CarouselSection 
        carouselWrapperRef={carouselWrapperRef}
        carouselContentRef={carouselContentRef}
      />
      
      <Footer />
    </div>
  );
};

export default App;