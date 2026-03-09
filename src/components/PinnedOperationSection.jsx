import React from 'react';

const PinnedOperationSection = ({ pinnedSectionRef }) => {
  const steps = [
    {
      number: "01",
      label: "Innovación en Ruta",
      title: "Modelos de Mundo Dinámicos.",
      description: "Nuestra IA predice variables de tráfico y clima para trazar la ruta más segura y veloz para tu mercancía."
    },
    {
      number: "02",
      label: "Escalabilidad Global",
      title: "Logística Sin Fronteras.",
      description: "Capacidad de despliegue inmediato en cualquier territorio, adaptándonos a regulaciones y terrenos complejos."
    },
    {
      number: "03",
      label: "Seguridad Absoluta",
      title: "Cero Accidentes, Máxima Carga.",
      description: "Entrenamos en entornos virtuales para dominar situaciones de riesgo antes de que ocurran en la carretera real."
    }
  ];

  return (
    <section ref={pinnedSectionRef} className="relative h-screen w-full bg-white overflow-hidden z-20">
      <div className="max-w-[1400px] mx-auto h-full px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full h-full items-center">
          <div className="hidden lg:block relative aspect-square rounded-[5rem] overflow-hidden shadow-2xl bg-zinc-100 border border-zinc-100">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260"
              className="w-full h-full object-cover"
              alt="Logística Inteligente"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div className="relative h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-full">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`pinned-text-step absolute inset-0 flex flex-col justify-center text-center lg:text-left ${
                    index !== 0 ? 'opacity-0 pointer-events-none' : ''
                  }`}
                >
                  <span className="text-red-600 font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">
                    {step.number} / {step.label}
                  </span>
                  <h3 className="text-4xl md:text-7xl font-bold tracking-tighter text-black mb-8 leading-[0.9]">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinnedOperationSection;
