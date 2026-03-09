import React from 'react';

const Navbar = ({ onMenuOpen }) => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[200] w-[90%] max-w-[550px]">
      <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-4 flex items-center justify-between shadow-2xl shadow-black/10 overflow-hidden relative">
        <div className="flex items-center space-x-2 cursor-pointer group">
          <span className="text-2xl font-black tracking-tighter text-black group-hover:text-red-600 transition-colors duration-300">
            waabi
          </span>
        </div>
        <div className="hidden sm:flex items-center space-x-8">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-zinc-400 hover:text-black cursor-pointer transition-colors">
            Logística
          </span>
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-black cursor-pointer border-b-2 border-red-600 pb-0.5">
            Inicio
          </span>
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-zinc-400 hover:text-black cursor-pointer transition-colors">
            Flota
          </span>
        </div>
        <button 
          onClick={onMenuOpen} 
          className="group relative flex flex-col items-end space-y-1.5 p-2 bg-zinc-50 rounded-full hover:bg-zinc-100 transition-colors"
        >
          <div className="w-5 h-[2px] bg-black transition-all group-hover:w-3" />
          <div className="w-3 h-[2px] bg-black transition-all group-hover:w-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
