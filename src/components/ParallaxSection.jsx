import React from 'react';
import { Plus } from 'lucide-react';

const ParallaxSection = ({ parallaxSectionRef }) => {
  return (
    <section
      ref={parallaxSectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center z-20"
    >
      <div className="parallax-bg absolute inset-0 w-full h-[140%] -top-[20%]">
        <img
          src="src/assets/paralax.jpg"
          className="w-full h-full object-cover brightness-[0.35] grayscale-[0.2]"
          alt="Logística Global"
        />
      </div>

      <div className="parallax-content relative z-10 text-center px-6 max-w-2xl">
        <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter leading-[1] mb-6 drop-shadow-lg italic">
          Impulsa tu <span className="text-zinc-400 not-italic">Negocio.</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base font-light mb-8 leading-relaxed max-w-md mx-auto opacity-80">
          La tecnología de transporte más avanzada a tu alcance. Optimiza cada kilómetro con nosotros.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="inline-flex items-center space-x-3 bg-white text-black px-8 py-3.5 rounded-full font-black text-[9px] uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all duration-500 group shadow-xl">
            <span>Hablemos de negocios</span>
            <Plus size={12} className="group-hover:rotate-180 transition-transform duration-700" />
          </button>
          <button className="px-8 py-3.5 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-full font-black text-[9px] uppercase tracking-[0.2em] hover:bg-white/20 transition-all duration-500">
            Nuestra Tecnología
          </button>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
