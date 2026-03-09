import React from 'react';
import { Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const links = ['Inicio', 'Seguridad', 'Logística', 'Empresa', 'Vacantes', 'Blog'];
  const socialIcons = [Linkedin, Youtube, Twitter];

  return (
    <footer className="relative w-full min-h-screen bg-[#c81041] overflow-hidden flex items-center px-10 md:px-24 py-32 text-white z-30">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,_transparent_0%,_#8c0b2d_100%)] opacity-90" />
      <div className="relative z-10 w-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Section */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-24">
          <div>
            <h2 className="text-6xl md:text-9xl font-light tracking-tighter leading-[0.85] mb-12 max-w-lg">
              Apenas <br /> <span className="italic opacity-50">comenzamos</span>
            </h2>
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50">
                Contacto Directo
              </p>
              <div className="flex flex-wrap gap-x-8 text-lg font-medium">
                <a
                  href="mailto:comercial@waabi.ai"
                  className="hover:text-black transition-colors border-b border-transparent hover:border-black"
                >
                  comercial@waabi.ai
                </a>
                <a
                  href="mailto:soporte@waabi.ai"
                  className="hover:text-black transition-colors border-b border-transparent hover:border-black"
                >
                  soporte@waabi.ai
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <p className="text-[10px] opacity-40 uppercase tracking-[0.4em] font-black">
              © 2026 Waabi Transportes.
            </p>
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity">
              Privacidad
            </a>
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity">
              Términos
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="lg:col-span-2 flex flex-col justify-start pt-10">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30 mb-10 block">
            Explora
          </span>
          <ul className="space-y-4 text-2xl font-black tracking-tighter">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:translate-x-2 inline-block transition-transform hover:text-black/50"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-4 flex flex-col justify-between items-end text-right space-y-20">
          <div className="flex space-x-6">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <span className="text-[14vw] font-black tracking-tighter leading-none block select-none text-white/10">
              waabi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
