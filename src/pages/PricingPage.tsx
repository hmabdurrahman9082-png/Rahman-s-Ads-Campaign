import React from 'react';
import { ArrowRight, Check, AlertCircle, HelpCircle, MessageCircle } from 'lucide-react';
import { PricingPlan } from '../config/brandConfig';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface PricingPageProps {
  onOpenContact: (planName: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenContact }) => {
  const { language } = useLanguage();
  const { pricingPlans } = useSiteData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
          {language === 'bn' ? 'স্বচ্ছ পার্টনারশিপ টিয়ার্স' : 'Transparent Partnership Tiers'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {language === 'bn' ? 'আপনার ব্যবসার পরিধি ও লক্ষ্য অনুযায়ী কার্যকর সার্ভিস প্যাকেজ' : 'Structured Service Packages Tailored to Your Growth'}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {language === 'bn'
            ? 'প্রতিটি ব্যবসার লক্ষ্য এবং বাজেটের ধরন ভিন্ন। আমরা কোনো অবাস্তব ফিক্সড প্যাকেজ চাপিয়ে দিই না, বরং আপনার প্রোডাক্ট ও প্রফিট মার্জিন অনুযায়ী উপযুক্ত সার্ভিস ফি নির্ধারণ করি।'
            : 'Every business has distinct margin structures and budget requirements. We quote custom management fees based on your specific scope rather than enforcing artificial fixed packages.'}
        </p>
      </div>

      {/* Ad Spend Clarity Banner */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-3.5 text-xs text-slate-600 shadow-xs">
        <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-slate-900">
            {language === 'bn' ? 'গুরুত্বপূর্ণ অর্থনৈতিক স্বচ্ছতা: বিজ্ঞাপনের খরচ বনাম ম্যানেজমেন্ট ফি' : 'Important Financial Disclosure: Platform Ad Spend vs. Management Fee'}
          </p>
          <p className="text-slate-600 leading-relaxed">
            {language === 'bn'
              ? 'বিজ্ঞাপনের মূল খরচ সরাসরি আপনার নিজের কার্ড থেকে মেটা প্ল্যাটফর্মে (Facebook/Instagram) কাটা হবে। ফলে আপনার অ্যাকাউন্টের সম্পূর্ণ মালিকানা ও হিসেব আপনার হাতেই থাকবে। আমরা কেবল স্ট্র্যাটেজি, ক্যাম্পেইন সেটআপ, কপিরাইটিং ও সার্বক্ষণিক অপটিমাইজেশনের জন্য সার্ভিস ফি গ্রহণ করি।'
              : 'Advertising spend is paid directly to Meta (Facebook/Instagram) through your own business payment method. This ensures you maintain 100% ownership of your ad account. Our fees cover dedicated campaign strategy, setup, ongoing management, and iterative creative testing.'}
          </p>
        </div>
      </div>

      {/* 3 Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {pricingPlans.map((plan: PricingPlan) => {
          const isPopular = plan.badge === 'Most Popular';
          return (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative shadow-sm ${
                isPopular
                  ? 'border-2 border-blue-600 shadow-md ring-1 ring-blue-500/20'
                  : 'border border-slate-200 hover:border-slate-300'
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-blue-600 text-white text-[11px] font-bold rounded-full shadow-xs uppercase tracking-wide">
                    {language === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Most Popular'}
                  </span>
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{plan.tagline}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {language === 'bn' ? 'কাস্টম কোটেশন' : 'Custom Pricing'}
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-1">
                    {plan.recommendedFor}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    {language === 'bn' ? 'প্যাকেজে যা যা অন্তর্ভুক্ত:' : 'What is included:'}
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onOpenContact(`Pricing Plan: ${plan.name}`)}
                  className={`w-full py-3 px-4 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                    isPopular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span>{language === 'bn' ? 'এই প্যাকেজের জন্য যোগাযোগ করুন' : 'Inquire for Custom Quote'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Consulting Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {language === 'bn' ? 'এককালীন অ্যাড অ্যাকাউন্ট অডিট বা পরামর্শ দরকার?' : 'Need a One-Off Ad Account Audit or Consultation?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              {language === 'bn'
                ? 'আপনার বর্তমান ক্যাম্পেইন কেন পারফর্ম করছে না তা চিহ্নিত করতে আমাদের সাথে এককালীন অডিটের জন্য যোগাযোগ করুন।'
                : 'We also offer single diagnostic sessions to identify why your past campaigns underperformed.'}
            </p>
          </div>
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
            onClick={() => onOpenContact('One-Off Audit')}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            {language === 'bn' ? 'অডিট রিকোয়েস্ট' : 'Request Audit'}
          </button>
        </div>
      </div>

    </div>
  );
};
