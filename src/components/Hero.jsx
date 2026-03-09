import React from 'react';
import { Plus } from 'lucide-react';

const Hero = ({ heroRef, titleContainerRef, textRef }) => {
  const galleryImages = [
    { pos: "top-[15%] left-[8%]", speed: "1.1", url: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { pos: "top-[10%] right-[20%]", speed: "0.8", url: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { pos: "top-[40%] left-[3%]", speed: "1.4", url: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { pos: "bottom-[15%] right-[5%]", speed: "1.2", url: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { pos: "bottom-[5%] left-[15%]", speed: "1.5", url: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ];

  return (
    <section ref={heroRef} className="hero-section relative h-screen w-full flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* GALERÍA DE FONDO */}
      <div className="background-gallery-container absolute inset-0 w-full h-full opacity-0 scale-90 pointer-events-none z-0">
        <div className="gallery-center-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full max-w-2xl px-10 pointer-events-auto">
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter leading-[1] mb-6 drop-shadow-lg">
            El Futuro es <span className="text-zinc-600">Autónomo.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light mb-8 leading-relaxed max-w-md mx-auto opacity-80">
            Descubre la nueva generación de logística pesada impulsada por nuestra IA propietaria de alta precisión.
          </p>
          <button className="inline-flex items-center space-x-3 bg-white text-black px-6 py-3 rounded-full font-black text-[9px] uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all duration-500 group shadow-xl">
            <span>Ver la Flota</span>
            <Plus size={12} className="group-hover:rotate-180 transition-transform duration-700" />
          </button>
        </div>

        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={`bg-image-node absolute ${img.pos} w-[220px] h-[280px] rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5`}
            data-speed={img.speed}
          >
            <img
              src={img.url}
              className="w-full h-full object-cover brightness-75 hover:brightness-110 transition-all duration-700"
              alt="Transporte"
            />
          </div>
        ))}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-white/[0.015] uppercase pointer-events-none tracking-tighter">
          CARGA
        </div>
      </div>

      {/* CONTENEDOR PRINCIPAL DEL HERO */}
      <div className="hero-main-container relative z-20 w-full h-full flex flex-col items-center justify-center overflow-hidden bg-zinc-900 shadow-[0_0_100px_rgba(0,0,0,1)] origin-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1920"
            className="w-full h-full object-cover brightness-[0.40] contrast-125 scale-105"
            alt="Camión pesado"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-[1600px] w-full mt-32">
          <div ref={titleContainerRef} className="mb-24">
            <h1 className="text-[8vw] font-black leading-[0.75] tracking-tighter uppercase text-white drop-shadow-2xl">
              Carga Inteligente.
            </h1>
            <h1 className="text-[8vw] font-black leading-[0.75] tracking-tighter uppercase text-zinc-600/80 drop-shadow-2xl">
              Ruta Segura.
            </h1>
          </div>

          <div className="max-w-4xl mx-auto mb-24 h-48 flex items-start justify-center">
            <p
              ref={textRef}
              className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-white inline-block text-balance drop-shadow-lg"
            ></p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center relative bg-black/40 backdrop-blur-md">
              <div className="absolute inset-0 bg-red-600/20 rounded-full animate-ping duration-[4000ms]" />
              <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_20px_#dc2626]" />
            </div>
            <span className="text-[15px] uppercase tracking-[0.6em] font-black text-white/40 animate-pulse">
              Sistema Activo / Monitoreo de Ruta en Tiempo Real
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
