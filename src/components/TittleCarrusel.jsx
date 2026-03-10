import React from 'react'

const TittleCarrusel = () => {
  return (
        <section
      className="relative  bg-white flex flex-col justify-center overflow-hidden z-20 mt-40"
    >
      <div className="max-w-[1400px] mx-auto px-10 mb-16 w-full">
        <h2 className="text-7xl md:text-[10vw] font-black tracking-tighter leading-[0.8] text-black mb-12">
          Expertos en <br /> <span className="text-zinc-300 italic">Movimiento.</span>
        </h2>
        <button className="bg-red-600 inline-flex items-center space-x-3 text-white text-black px-6 py-3 rounded-full font-black text-[9px] uppercase tracking-[0.2em] hover:text-red-600 hover:bg-white transition-all duration-500 group shadow-xl cursor-pointer">
          Únete al equipo
        </button>
      </div>
    </section>
  )
}

export default TittleCarrusel