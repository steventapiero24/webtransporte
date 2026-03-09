import React from 'react';

const CarouselSection = ({ carouselWrapperRef, carouselContentRef }) => {
  const carouselItems = [
    {
      width: "w-[420px]",
      aspect: "aspect-[3/4.2]",
      rotate: "rotate-[-1deg]",
      marginBottom: "mb-24",
      url: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Gestión"
    },
    {
      width: "w-[650px]",
      aspect: "aspect-[4/5]",
      rotate: "rotate-[1deg]",
      marginBottom: "mb-10",
      shadow: "shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]",
      url: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Flota"
    },
    {
      width: "w-[480px]",
      aspect: "aspect-[3/4]",
      rotate: "rotate-[-2deg]",
      marginBottom: "mb-36",
      url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Control"
    },
    {
      width: "w-[850px]",
      aspect: "aspect-[16/8.5]",
      marginBottom: "mb-6",
      url: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Camión"
    },
    {
      width: "w-[520px]",
      aspect: "aspect-[4/5]",
      rotate: "rotate-[2deg]",
      marginBottom: "mb-24",
      url: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Equipo"
    }
  ];

  return (
    <section
      ref={carouselWrapperRef}
      className="relative h-screen bg-white flex flex-col justify-center overflow-hidden z-20"
    >
      <div className="max-w-[1400px] mx-auto px-10 mb-16 w-full">
        <h2 className="text-7xl md:text-[10vw] font-black tracking-tighter leading-[0.8] text-black mb-12">
          Expertos en <br /> <span className="text-zinc-300 italic">Movimiento.</span>
        </h2>
        <button className="bg-[#ff3366] text-white px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-pink-500/30">
          Únete al equipo
        </button>
      </div>

      <div
        ref={carouselContentRef}
        className="flex gap-16 px-10 items-end flex-nowrap w-max pb-10"
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item flex-shrink-0 ${item.width} ${item.aspect} rounded-[3.5rem] overflow-hidden shadow-2xl ${item.marginBottom} ${item.rotate || ''} ${item.shadow || 'shadow-2xl'}`}
          >
            <img
              src={item.url}
              className="w-full h-full object-cover"
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;
