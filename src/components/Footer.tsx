import React from 'react';
import { Mail, MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';
import { PageId, navLinks } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenOwnerGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenOwnerGuide }) => {
  const currentYear = new Date().getFullYear();
  const hasConfiguredWhatsApp = Boolean(brandConfig.contact.whatsappNumber && brandConfig.contact.whatsappNumber.trim().length > 3);

  const cleanWhatsAppNumber = brandConfig.contact.whatsappNumber ? brandConfig.contact.whatsappNumber.replace(/[^0-9]/g, '') : '';

  return (
    <footer className="bg-[#03070E] border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-xl font-bold tracking-tight text-white block">
                {brandConfig.brandName}
              </span>
              <span className="text-xs text-blue-400 font-medium tracking-wide">
                Digital Marketing & Advertising Services
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Strategic digital advertising tailored for small businesses, entrepreneurs, and e-commerce stores looking for structured campaign execution on Meta platforms.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 bg-slate-900/60 border border-slate-800 rounded-lg p-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Transparent management: Ad spend is billed directly by Meta to client billing methods.
              </span>
            </div>

            {/* Configured Contact Badges */}
            {/* Configured Contact Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={brandConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 bg-blue-950/40 border border-blue-800/80 px-3 py-1.5 rounded-md transition-colors"
              >
                <span>Facebook Page</span>
              </a>

              <a
                href="https://wa.me/8801883423076"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-800/80 px-3 py-1.5 rounded-md transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: 01883423076</span>
              </a>

              <a
                href="https://t.me/+8801883423076"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 bg-sky-950/40 border border-sky-800/80 px-3 py-1.5 rounded-md transition-colors"
              >
                <span>Telegram: 01883423076</span>
              </a>

              <a
                href="tel:01806755760"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 bg-blue-950/40 border border-blue-800/80 px-3 py-1.5 rounded-md transition-colors"
              >
                <span>Call: 01806755760</span>
              </a>
            </div>
          </div>

          {/* Core Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings & Information */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Offerings & FAQ
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(5).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels & Owner Portal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect With Us
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={brandConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left flex items-center justify-between p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg text-xs text-slate-200 transition-colors group"
              >
                <div>
                  <span className="font-semibold block text-white group-hover:text-blue-400 transition-colors">Official Facebook Page</span>
                  <span className="text-[11px] text-blue-400">RAHMAN'S ADS CAMPAIGN</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </a>
              
              {onOpenOwnerGuide && (
                <button
                  onClick={onOpenOwnerGuide}
                  className="w-full text-left flex items-center justify-between p-3 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-lg text-xs text-slate-300 transition-colors cursor-pointer group"
                >
                  <div>
                    <span className="font-semibold block text-slate-200">Owner Setup Guide</span>
                    <span className="text-[11px] text-slate-400">Free hosting & customization tips</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {brandConfig.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Honest & Transparent Marketing</span>
            <span>·</span>
            <span>Meta Advertising Strategy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
