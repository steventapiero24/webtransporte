import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { imagesLogistics } from '../hooks/utils';

const LogisticSection = () => {
  return (
    <section className="reveal-section py-48 bg-white relative z-20">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32">
          <div className="max-w-2xl">
            <span className="text-red-600 font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">
              Nuestra Visión Logística
            </span>
            <h2 className="text-6xl md:text-[7vw] font-bold tracking-tighter leading-[0.85] mb-12 text-black">
              Transporte <br /> Inteligente.
            </h2>
          </div>
          <div className="max-w-md mt-16 md:mt-0 pt-4">
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              Hemos integrado inteligencia artificial de vanguardia en la logística tradicional para garantizar que tu carga llegue segura, puntual y de forma eficiente.
            </p>
            <button className="flex items-center space-x-4 group border-b-2 border-black/10 hover:border-red-600 pb-3 transition-all">
              <span className="font-black text-[11px] uppercase tracking-widest text-black">
                Explora soluciones de carga
              </span>
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-red-600"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {imagesLogistics.map((image, i) => (
            <div
              key={image.id}
              className={`collage-item aspect-[3/4.5] rounded-[3.5rem] overflow-hidden bg-zinc-100 shadow-xl ${
                i % 2 === 0 ? 'mt-24' : ''
              }`}
            >
              <img
                src={image.link}
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 scale-110 hover:scale-100 transition-all duration-1000 ease-out cursor-pointer"
                alt={`Detalle Logístico ${image.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticSection;
