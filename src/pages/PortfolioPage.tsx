import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, FolderKanban, MessageCircle } from 'lucide-react';
import { PortfolioPlaceholder } from '../config/brandConfig';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface PortfolioPageProps {
  onOpenContact: (topic?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenContact }) => {
  const { language } = useLanguage();
  const { portfolioPlaceholders } = useSiteData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
          {language === 'bn' ? 'পোর্টফোলিও ও কেস স্টাডি' : 'Portfolio & Case Studies'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {language === 'bn' ? 'ক্যাম্পেইন ব্লুপ্রিন্ট ও স্ট্র্যাটেজি ফ্রেমওয়ার্ক' : 'Client Showcase & Campaign Frameworks'}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {language === 'bn'
            ? 'আমাদের পরীক্ষিত ক্যাম্পেইন কাঠামো এবং ফুল-ফানেল আর্কিটেকচার যা ফেসবুক ও ইনস্টাগ্রামে লাভজনক সেলস এবং কোয়ালিটি লিড তৈরি করতে সক্ষম।'
            : 'Explore our proven campaign architectures and full-funnel frameworks designed to generate profitable sales and qualified leads across Meta platforms (Facebook & Instagram).'}
        </p>
      </div>

      {/* Campaign Philosophy Notice */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-3 text-xs text-slate-600 shadow-xs">
        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-slate-900">
            {language === 'bn' ? 'প্রুভেন পারফরম্যান্স আর্কিটেকচার' : 'Proven Performance Architecture'}
          </p>
          <p className="text-slate-600 leading-relaxed">
            {language === 'bn'
              ? 'রহমান্স অ্যাডস ক্যাম্পেইনে প্রতিটি ক্লায়েন্টের কাজ সুশৃঙ্খল ফানেল অনুযায়ী পরিচালিত হয়—যা অনুমানের অপচয় দূর করে হাই ROAS নিশ্চিত করে।'
              : 'At RAHMAN\'S ADS CAMPAIGN, every client campaign is built on structured, reproducible funnels—eliminating guesswork and maximizing your return on ad spend (ROAS).'}
          </p>
        </div>
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioPlaceholders.map((item: PortfolioPlaceholder) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all shadow-sm"
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded">
                  {item.category}
                </span>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                  {item.statusLabel}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => onOpenContact(`Inquiry regarding portfolio concept: ${item.title}`)}
                className="w-full py-2.5 px-3 bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white text-xs font-semibold rounded-lg border border-slate-200 hover:border-blue-600 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>{language === 'bn' ? 'এই স্ট্র্যাটেজি দিয়ে কাজ করতে চাই' : 'Apply This Framework'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Contact Callout */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">
            {language === 'bn' ? 'আপনার ব্র্যান্ডের জন্য একটি কাস্টম ফানেল তৈরি করতে চান?' : 'Need a Customized Ad Strategy for Your Store?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            {language === 'bn'
              ? 'আমরা আপনার প্রোডাক্ট ক্যাটাগরি বিশ্লেষণ করে অনুরূপ স্ট্র্যাটেজি ডিজাইন করে দেব।'
              : 'Connect with us on WhatsApp or fill out our inquiry form to plan your next growth cycle.'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/8801883423076"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp (01883423076)</span>
          </a>

          <button
            onClick={() => onOpenContact('Custom Strategy')}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            {language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
          </button>
        </div>
      </div>

    </div>
  );
};
