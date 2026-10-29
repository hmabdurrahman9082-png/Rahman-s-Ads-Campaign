import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { processSteps, ProcessStep } from '../config/brandConfig';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface ProcessPageProps {
  onOpenContact: (topic?: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenContact }) => {
  const { language } = useLanguage();
  const { brandConfig } = useSiteData();
  const cleanWhatsApp = brandConfig.contact.whatsappNumber ? brandConfig.contact.whatsappNumber.replace(/[^0-9]/g, '') : '01883423076';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
          {language === 'bn' ? 'কাজের পদ্ধতি ও কর্মপরিকল্পনা' : 'Our Methodology'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {language === 'bn' ? 'ধাপে ধাপে সুশৃঙ্খল ক্যাম্পেইন ফ্রেমওয়ার্ক' : 'A Disciplined 5-Step Advertising Process'}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {language === 'bn'
            ? 'সফল বিজ্ঞাপন পরিচালনা কোনো ভাগ্য বা অনুমানের বিষয় নয়। এটি একটি বিজ্ঞানসম্মত ও সুনির্দিষ্ট ৫-ধাপের প্রক্রিয়া—যার মাধ্যমে বাজেট অপচয় সর্বনিম্ন করে কাঙ্ক্ষিত বিক্রয় নিশ্চিত করা হয়।'
            : 'High-performing advertising is not about luck. We employ a structured 5-step workflow designed to minimize wasted ad spend and maximize customer conversion clarity.'}
        </p>
      </div>

      {/* Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processSteps.map((step: ProcessStep) => (
          <div
            key={step.stepNumber}
            className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all shadow-sm group"
          >
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-mono font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-md">
                  {step.stepNumber}
                </span>
                <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">
                  Phase {step.stepNumber}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight group-hover:text-blue-600 transition-colors">
                {language === 'bn' ? step.bengaliSubtitle : step.title}
              </h3>
              <p className="text-xs text-blue-600 font-semibold mb-3">
                {language === 'bn' ? step.title : step.bengaliSubtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {step.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>{language === 'bn' ? 'মূল কাজ:' : 'Key Action:'}</strong> {step.keyAction}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
          {language === 'bn' ? 'আপনার ক্যাম্পেইন শুরু করতে প্রস্তুত?' : 'Ready to Start Step 01 for Your Business?'}
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
          {language === 'bn'
            ? 'আমাদের সাথে কথা বলুন। আমরা আপনার ব্র্যান্ডের জন্য উপযুক্ত স্ট্র্যাটেজি সাজিয়ে দেব।'
            : 'Schedule a free initial discovery session. We will evaluate your product, target audience, and current advertising assets.'}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/88${cleanWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-2 shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp ({brandConfig.contact.whatsappNumber})</span>
          </a>

          <button
            onClick={() => onOpenContact('Start Process')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
          >
            <span>{language === 'bn' ? 'ফ্রি সেশন বুক করুন' : 'Schedule Discovery'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
