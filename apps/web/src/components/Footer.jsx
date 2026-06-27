import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white pt-20 pb-10 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start lg:col-span-2">
            <h3 className="font-serif text-3xl font-bold tracking-widest mb-4">CHEF TY™</h3>
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-6 leading-relaxed">
              Private Chef • Catering • Event Planning • Bar Services • Hospitality
            </p>
            <p className="text-white/70 text-sm max-w-sm leading-relaxed mb-8">
              Bringing world-class culinary experiences, professional hospitality, and unforgettable events to our discerning clients.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com/nyglnculinary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#001F3F] transition-all duration-300" 
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tayfun-tarakcioglu-8234aa55/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#001F3F] transition-all duration-300" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg font-medium text-[#D4AF37] mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-white/80 text-sm">
              <li>
                <a href="tel:5169912326" className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>(516) 991-2326</span>
                </a>
              </li>
              <li>
                <a href="mailto:nyglnculinary@gmail.com" className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>nyglnculinary@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg font-medium text-[#D4AF37] mb-6">Service Area</h4>
            <ul className="flex flex-col gap-4 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <span className="leading-relaxed">Long Island • NYC • The Hamptons • Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-4 text-sm text-white/50 text-center">
          <p>© 2026 CHEF TY™ by NY GLN Culinary Group LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;