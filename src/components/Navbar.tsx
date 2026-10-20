import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'process'
  | 'portfolio'
  | 'pricing'
  | 'free-courses'
  | 'paid-courses'
  | 'faq'
  | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenOwnerGuide?: () => void;
}

interface NavLinkItem {
  id: PageId;
  label: string;
}

export const navLinks: NavLinkItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Our Process' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'free-courses', label: 'Free Courses' },
  { id: 'paid-courses', label: 'Paid Courses' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact Us' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#050B14]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          
          {/* Zone 1: Single text element Brand wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group flex flex-col justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label="RAHMAN'S ADS CAMPAIGN Home"
          >
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap group-hover:text-blue-400 transition-colors">
              {brandConfig.brandName}
            </span>
            <span className="text-[11px] text-slate-400 font-medium tracking-wide">
              Digital Marketing & Advertising
            </span>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`whitespace-nowrap transition-colors py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded ${
                    isActive
                      ? 'text-blue-400 font-semibold border-b-2 border-blue-500'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Fallback for medium screens (lg): quick links + overflow */}
          <nav className="hidden md:flex xl:hidden items-center gap-4 text-xs font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('home')}
              className={`whitespace-nowrap ${currentPage === 'home' ? 'text-blue-400 font-bold' : 'hover:text-white'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`whitespace-nowrap ${currentPage === 'services' ? 'text-blue-400 font-bold' : 'hover:text-white'}`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className={`whitespace-nowrap ${currentPage === 'process' ? 'text-blue-400 font-bold' : 'hover:text-white'}`}
            >
              Process
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className={`whitespace-nowrap ${currentPage === 'pricing' ? 'text-blue-400 font-bold' : 'hover:text-white'}`}
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavClick('free-courses')}
              className={`whitespace-nowrap ${currentPage === 'free-courses' ? 'text-blue-400 font-bold' : 'hover:text-white'}`}
            >
              Free Courses
            </button>
            <button
              onClick={() => handleNavClick('paid-courses')}
              className={`whitespace-nowrap ${currentPage === 'paid-courses' ? 'text-blue-400 font-bold' : 'hover:text-white'}`}
            >
              Paid Courses
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`whitespace-nowrap ${currentPage === 'contact' ? 'text-blue-400 font-bold' : 'hover:text-white'}`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary action + Mobile Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/8801883423076"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Chat on WhatsApp: 01883423076"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>01883423076</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-800 bg-[#070F1E] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-150">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mb-4">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/8801883423076"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800 rounded-lg"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://t.me/+8801883423076"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-sky-400 bg-sky-950/40 border border-sky-800 rounded-lg"
              >
                <span>Telegram</span>
              </a>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
