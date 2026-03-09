import React from 'react';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-[250] bg-[#080808] text-white transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex flex-col h-full p-12 justify-center items-center relative">
        <button onClick={onClose} className="absolute top-12 right-12 p-5 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
          <X size={32} />
        </button>
        <div className="flex flex-col space-y-6 text-center">
          {['Seguridad', 'Tecnología', 'Nosotros', 'Carreras', 'Noticias'].map((item, i) => (
            <div key={i} className="group overflow-hidden">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic hover:text-red-600 cursor-pointer transition-all transform hover:scale-110 duration-500">
                {item}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
