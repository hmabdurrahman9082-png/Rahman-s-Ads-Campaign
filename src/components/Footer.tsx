import React from 'react';
import { Mail, MessageCircle, ArrowUpRight, ShieldCheck, Lock } from 'lucide-react';
import { PageId, navLinks } from './Navbar';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenOwnerGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();
  const { brandConfig } = useSiteData();

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 block">
                {brandConfig.brandName}
              </span>
              <span className="text-xs text-blue-600 font-semibold tracking-wide">
                {language === 'bn' ? 'ডিজিটাল মার্কেটিং ও বিজ্ঞাপন সেবা' : 'Digital Marketing & Advertising Services'}
              </span>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mb-6">
              {t('footer.desc')}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-600 mb-6 bg-slate-50 border border-slate-200 rounded-lg p-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {t('footer.billingNotice')}
              </span>
            </div>

            {/* Configured Contact Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={brandConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-md transition-colors font-medium"
              >
                <span>{language === 'bn' ? 'ফেসবুক পেজ' : 'Facebook Page'}</span>
              </a>
              <a
                href="https://wa.me/8801883423076"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-md transition-colors font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: 01883423076</span>
              </a>
              <a
                href="https://t.me/+8801883423076"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-sky-700 hover:text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-md transition-colors font-medium"
              >
                <span>Telegram: 01883423076</span>
              </a>
              <a
                href="tel:01806755760"
                className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-md transition-colors font-medium"
              >
                <span>{language === 'bn' ? 'কল করুন: ০১৮০৬৭৫৫৭৬০' : 'Call: 01806755760'}</span>
              </a>
            </div>
          </div>

          {/* Core Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                  >
                    {language === 'bn' ? link.labelBn : link.labelEn}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings & Information */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {t('footer.offerings')}
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(5).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                  >
                    {language === 'bn' ? link.labelBn : link.labelEn}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {t('footer.connect')}
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={brandConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-lg text-xs text-slate-700 transition-colors group"
              >
                <div>
                  <span className="font-semibold block text-slate-900 group-hover:text-blue-600 transition-colors">
                    {t('footer.officialFb')}
                  </span>
                  <span className="text-[11px] text-blue-600 font-medium">RAHMAN'S ADS CAMPAIGN</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>

              <a
                href="mailto:hmabdurrahman9082@gmail.com"
                className="w-full text-left flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-lg text-xs text-slate-700 transition-colors group"
              >
                <div>
                  <span className="font-semibold block text-slate-900 group-hover:text-blue-600 transition-colors">
                    {language === 'bn' ? 'অফিশিয়াল ইমেইল' : 'Official Email'}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">hmabdurrahman9082@gmail.com</span>
                </div>
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {brandConfig.brandName}. {t('footer.allRights')}</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>{t('footer.tag1')}</span>
            <span>·</span>
            <span>{t('footer.tag2')}</span>
            <span>·</span>
            <button
              onClick={() => {
                onNavigate('admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              <span>এডমিন প্যানেল</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
