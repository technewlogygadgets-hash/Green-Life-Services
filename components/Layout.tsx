import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMobileMenuOpen(false);

  const navClass = ({ isActive }: { isActive: boolean }) => 
    `text-sm font-medium transition-colors hover:text-green-600 ${isActive ? 'text-green-600 font-bold' : 'text-gray-600'}`;

  const scrollToBooking = () => {
    navigate('/contact');
    window.scrollTo(0,0);
    closeMenu();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4 text-xs md:text-sm hidden sm:block">
        <div className="container mx-auto flex justify-between items-center">
          <span>Leading Gardening Services in the UK</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={14}/> {PHONE_NUMBER}</span>
            <span>Mon-Sat: 8am - 6pm</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex flex-col" onClick={closeMenu}>
            <span className="text-xl md:text-2xl font-bold text-green-700 leading-tight">Green Life</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider hidden md:block">Maintenance & Services LTD</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/services" className={navClass}>Services</NavLink>
            <NavLink to="/prices" className={navClass}>Prices</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
            
            <button 
              onClick={() => navigate('/contact')}
              className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition shadow-sm"
            >
              Book Online
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t absolute w-full shadow-lg flex flex-col p-4 space-y-4">
            <NavLink to="/" className={navClass} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/services" className={navClass} onClick={closeMenu}>Services</NavLink>
            <NavLink to="/prices" className={navClass} onClick={closeMenu}>Prices</NavLink>
            <NavLink to="/about" className={navClass} onClick={closeMenu}>About</NavLink>
            <NavLink to="/contact" className={navClass} onClick={closeMenu}>Contact</NavLink>
            <button 
              onClick={scrollToBooking}
              className="bg-green-600 text-white w-full py-3 rounded font-bold"
            >
              Book Online
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 pt-12 pb-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-4">{COMPANY_NAME}</h4>
            <p className="text-sm mb-4">
              Professional garden maintenance services across the UK. 
              We are dedicated to transforming your outdoor spaces into beautiful, relaxing havens.
            </p>
            <div className="flex space-x-4">
               <a href="#" className="hover:text-green-400"><Facebook size={20}/></a>
               <a href="#" className="hover:text-green-400"><Twitter size={20}/></a>
               <a href="#" className="hover:text-green-400"><Instagram size={20}/></a>
               <a href="#" className="hover:text-green-400"><Linkedin size={20}/></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-green-400">Our Services</Link></li>
              <li><Link to="/prices" className="hover:text-green-400">Prices & Availability</Link></li>
              <li><Link to="/contact" className="hover:text-green-400">Book a Gardener</Link></li>
              <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone size={16}/> {PHONE_NUMBER}</li>
              <li>Email: {PHONE_NUMBER}</li>
              <li>Hours: Mon-Sat 8:00 - 18:00</li>
              <li className="mt-4">
                 <p className="text-xs text-gray-500">Registered in England & Wales. Company No. 12345678</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
