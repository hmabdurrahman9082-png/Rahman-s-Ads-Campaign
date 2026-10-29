import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Globe, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'process'
  | 'portfolio'
  | 'pricing'
  | 'courses'
  | 'free-courses'
  | 'paid-courses'
  | 'faq'
  | 'contact'
  | 'admin';

export interface NavLink {
  id: PageId;
  labelEn: string;
  labelBn: string;
}

export const navLinks: NavLink[] = [
  { id: 'home', labelEn: 'Home', labelBn: 'হোম' },
  { id: 'services', labelEn: 'Services', labelBn: 'সার্ভিসসমূহ' },
  { id: 'process', labelEn: 'Our Process', labelBn: 'কাজের ধাপ' },
  { id: 'courses', labelEn: 'Courses', labelBn: 'কোর্সসমূহ' },
  { id: 'about', labelEn: 'About Us', labelBn: 'আমাদের সম্পর্কে' },
  { id: 'portfolio', labelEn: 'Portfolio', labelBn: 'পোর্টফোলিও' },
  { id: 'pricing', labelEn: 'Pricing', labelBn: 'প্রাইসিং' },
  { id: 'faq', labelEn: 'FAQ', labelBn: 'প্রশ্নোত্তর' },
  { id: 'contact', labelEn: 'Contact Us', labelBn: 'যোগাযোগ' },
];

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenOwnerGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { brandConfig } = useSiteData();

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          
          {/* Zone 1: Single text element Brand wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group flex flex-col justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded cursor-pointer"
            aria-label="RAHMAN'S ADS CAMPAIGN Home"
          >
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap group-hover:text-blue-600 transition-colors">
              {brandConfig.brandName}
            </span>
            <span className="text-[11px] text-slate-500 font-medium tracking-wide">
              {language === 'bn' ? 'ডিজিটাল মার্কেটিং ও বিজ্ঞাপন সেবা' : 'Digital Marketing & Advertising'}
            </span>
          </button>

          {/* Zone 2: Navigation Links (Desktop XL) */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              const label = language === 'bn' ? link.labelBn : link.labelEn;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`whitespace-nowrap transition-colors py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded ${
                    isActive
                      ? 'text-blue-600 font-bold border-b-2 border-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Fallback for medium screens (lg): quick links */}
          <nav className="hidden md:flex xl:hidden items-center gap-3.5 text-xs font-medium text-slate-600">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = currentPage === link.id;
              const label = language === 'bn' ? link.labelBn : link.labelEn;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-600'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher + WhatsApp + Primary action + Mobile Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/90 text-xs">
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer font-medium ${
                  language === 'bn'
                    ? 'bg-blue-600 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="বাংলায় দেখুন"
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer font-medium ${
                  language === 'en'
                    ? 'bg-blue-600 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="View in English"
              >
                EN
              </button>
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href="https://wa.me/8801883423076"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/90 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Chat on WhatsApp: 01883423076"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>01883423076</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
            >
              <span>{t('nav.contactUs')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Admin Panel Quick Access */}
            <button
              onClick={() => handleNavClick('admin')}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'admin'
                  ? 'bg-blue-100 text-blue-700 ring-1 ring-blue-400'
                  : 'text-slate-500 hover:text-blue-600 hover:bg-slate-100'
              }`}
              title="এডমিন কন্ট্রোল প্যানেল (Admin Panel)"
              aria-label="Admin Panel"
            >
              <Lock className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
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
        <div className="xl:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 animate-in slide-in-from-top duration-150 shadow-lg">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between p-2 mb-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
            <span className="text-slate-600 font-medium flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-600" />
              {language === 'bn' ? 'ভাষা নির্বাচন করুন:' : 'Select Language:'}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                className={`px-3 py-1 rounded text-xs font-semibold ${
                  language === 'bn' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-xs font-semibold ${
                  language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                English
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mb-4">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              const label = language === 'bn' ? link.labelBn : link.labelEn;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/8801883423076"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://t.me/+8801883423076"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100"
              >
                <span>Telegram</span>
              </a>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              <span>{t('nav.contactUs')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleNavClick('admin')}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              <span>{language === 'bn' ? 'এডমিন প্যানেল (Admin Panel)' : 'Admin Panel'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
