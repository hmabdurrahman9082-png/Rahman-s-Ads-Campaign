import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Target,
  BarChart2,
  Layers,
  MessageCircle,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { userWorkstationImg } from '../config/brandConfig';
import { PageId } from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (topic?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenContact }) => {
  const { language, t } = useLanguage();
  const { brandConfig, servicesData } = useSiteData();

  const cleanWhatsApp = brandConfig.contact.whatsappNumber
    ? brandConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')
    : '01883423076';

  return (
    <div className="space-y-12 sm:space-y-20 pb-16 bg-slate-50">
      
      {/* 1. Hero Section - Balanced vertical layout for mobile & desktop */}
      <section className="relative pt-6 sm:pt-14 pb-8 sm:pb-16 overflow-hidden bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              {/* Quiet, clean kicker */}
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>{language === 'bn' ? 'মেটা বিজ্ঞাপন স্পেশালিস্ট' : 'Meta Ads Specialist'}</span>
              </div>

              {/* Main Headline - Broken into balanced top/bottom lines */}
              <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.25]">
                {language === 'bn' ? (
                  <>
                    <span className="block text-slate-900">
                      পরিকল্পিত ও ডেটা-নির্ভর বিজ্ঞাপনে
                    </span>
                    <span className="block text-blue-600 mt-1">
                      আপনার ব্যবসার সেলস বৃদ্ধি করুন
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block text-slate-900">
                      Grow Your Business Through
                    </span>
                    <span className="block text-blue-600 mt-1">
                      Structured, Data-Informed Ads
                    </span>
                  </>
                )}
              </h1>

              {/* Subtitle / Description - Concise and straight to the point */}
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {language === 'bn'
                  ? 'মেটা প্ল্যাটফর্মে (ফেসবুক ও ইনস্টাগ্রাম) সঠিক অডিয়েন্স রিসার্চ, ক্যাম্পেইন সেটআপ ও লাভজনক সেলস স্কেলিং।'
                  : 'Targeted advertising campaigns on Meta (Facebook & Instagram). Built for small businesses and e-commerce brands seeking disciplined execution and measurable customer acquisition.'}
              </p>

              {/* Clean Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs hover:shadow transition-all cursor-pointer flex items-center gap-2 group"
                >
                  <span>{language === 'bn' ? 'সার্ভিসসমূহ দেখুন' : 'Explore Services'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href={`https://wa.me/88${cleanWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {brandConfig.contact.whatsappNumber}</span>
                </a>

                <button
                  onClick={() => onOpenContact('General Inquiry')}
                  className="px-4 py-2.5 sm:px-5 sm:py-3 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-semibold rounded-lg border border-slate-300 transition-all cursor-pointer"
                >
                  {language === 'bn' ? 'পরামর্শ নিন' : 'Consultation'}
                </button>
              </div>

              {/* Key Pillars */}
              <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-600 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{language === 'bn' ? 'অডিয়েন্স রিসার্চ' : 'Target Audience'}</span>
                </div>
                <span className="text-slate-300 hidden sm:inline" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{language === 'bn' ? 'ডেটা ট্র্যাকিং' : 'Conversion Tracking'}</span>
                </div>
                <span className="text-slate-300 hidden sm:inline" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{language === 'bn' ? 'লাভজনক স্কেলিং' : 'Profitable Scaling'}</span>
                </div>
              </div>

            </div>

            {/* Right Visual Column - Digital Advertising Operations Center (User Photo) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white group max-w-lg mx-auto lg:max-w-none">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={userWorkstationImg}
                    alt="Md Abdur Rahman - Campaign Operations Center"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Clean Live Monitoring indicator */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-white/95 backdrop-blur-xs border border-slate-200/90 px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold text-emerald-700 flex items-center gap-1.5 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{language === 'bn' ? 'লাইভ মনিটরিং' : 'Live Monitoring'}</span>
                  </div>
                </div>
                <div className="px-3.5 py-2 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>{language === 'bn' ? 'ক্যাম্পেইন অপারেশন সেন্টার' : 'Campaign Operations Center'}</span>
                  <span className="font-semibold text-slate-700">RAHMAN'S ADS CAMPAIGN</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION on HomePage (User requested: home page er niche thakbe services page) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              {language === 'bn' ? 'আমাদের সার্ভিসসমূহ' : 'Our Services'}
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {language === 'bn' ? 'পরিকল্পিত মেটা বিজ্ঞাপন সমাধান' : 'Disciplined Digital Advertising Services'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {language === 'bn' ? 'বাজেট অপচয় রোধ ও সঠিক ক্রেতা আকর্ষণে আমাদের মূল সেবাসমূহ' : 'Data-informed campaigns to drive measurable growth.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer self-start sm:self-auto"
          >
            <span>{language === 'bn' ? 'সব সার্ভিস দেখুন' : 'View All Services'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicesData.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-sm transition-all shadow-2xs"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3.5">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {language === 'bn' ? service.bengaliSubtitle : service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {language === 'bn' ? service.shortDesc : service.shortDesc}
                </p>

                {/* Concise deliverables */}
                <div className="space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-700">
                  {service.deliverables.slice(0, 2).map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenContact(`Inquiry for ${service.title}`)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer flex items-center gap-1"
                >
                  <span>{language === 'bn' ? 'পরামর্শ ও ইনকোয়ারি' : 'Inquire Now'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR PROCESS SECTION on HomePage (User requested: home page er niche thakbe our process page) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                {language === 'bn' ? 'কাজের পদ্ধতি' : 'Our Process'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {language === 'bn' ? 'বিজ্ঞাপন পরিচালনার সুশৃঙ্খল ৫টি ধাপ' : 'A Disciplined 5-Step Campaign Process'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {language === 'bn' ? 'অনুমান নয়—বিজ্ঞানসম্মত পদ্ধতিতে বিজ্ঞাপন ক্যাম্পেইন পরিচালনা' : 'Structured framework to minimize wasted budget.'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('process')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer self-start sm:self-auto"
            >
              <span>{language === 'bn' ? 'বিস্তারিত ৫টি ধাপ দেখুন' : 'Explore Full Process'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              { num: '01', titleBn: 'বিজনেস অ্যানালাইসিস', titleEn: 'Business Analysis', subBn: 'প্রোডাক্ট ও অফার যাচাই' },
              { num: '02', titleBn: 'অডিয়েন্স রিসার্চ', titleEn: 'Audience Research', subBn: 'আসল ক্রেতা চিহ্নিতকরণ' },
              { num: '03', titleBn: 'অ্যাড স্ট্র্যাটেজি', titleEn: 'Ad Strategy', subBn: 'কপি ও ভিজ্যুয়াল প্ল্যানিং' },
              { num: '04', titleBn: 'ট্র্যাকিং ও সেটআপ', titleEn: 'CAPI & Tracking', subBn: 'GTM পিক্সেল ইন্টিগ্রেশন' },
              { num: '05', titleBn: 'স্কেলিং ও অপ্টিমাইজেশন', titleEn: 'Scaling & Growth', subBn: 'লাভজনক বাজেট বৃদ্ধি' },
            ].map((p) => (
              <div key={p.num} className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 sm:p-4 text-left">
                <span className="text-sm font-mono font-bold text-blue-600 bg-blue-100/70 px-2 py-0.5 rounded block w-fit mb-2">
                  {p.num}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {language === 'bn' ? p.titleBn : p.titleEn}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  {p.subBn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COURSES SECTION on HomePage (User requested: home page er niche thakbe course page) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              {language === 'bn' ? 'মেটা প্রশিক্ষণ প্রোগ্রাম' : 'Training & Mentorship'}
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {language === 'bn' ? 'ফ্রি ও পেইড মেটা বিজ্ঞাপন কোর্স' : 'Meta Advertising Courses'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {language === 'bn' ? 'বেসিক থেকে অ্যাডভান্সড মেটা অ্যাডস মাস্টারি এক পেজে' : 'Practical skills from fundamental setup to conversion tracking.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('courses')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer self-start sm:self-auto"
          >
            <span>{language === 'bn' ? 'সব কোর্স ও সিলেবাস দেখুন' : 'Explore All Courses'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: 100% Free Foundation Courses */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs hover:border-emerald-500 hover:shadow-sm transition-all flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={userWorkstationImg}
                  alt="Free Foundation Course"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 text-xs font-bold bg-emerald-600 text-white rounded shadow-xs">
                    {language === 'bn' ? '১০০% ফ্রি ফাউন্ডেশন' : '100% Free'}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {language === 'bn' ? '২টি সম্পূর্ণ ফ্রি ফাউন্ডেশন কোর্স' : '2 Free Foundation Courses'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'bn'
                    ? 'কোনো ফি ছাড়াই মেটা বিজনেস ম্যানেজার সেটআপ এবং আসল কাস্টমার রিসার্চ পদ্ধতি শিখুন।'
                    : 'Learn business suite setup and buyer persona research without paying any upfront fee.'}
                </p>

                <div className="space-y-1.5 pt-2 text-xs text-slate-700 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{language === 'bn' ? 'মডিউল ০১: অ্যাড একাউন্ট সেটআপ ও মার্কেট রিসার্চ' : 'Module 01: Account Setup & Ad Research'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{language === 'bn' ? 'মডিউল ০২: কাস্টমার অ্যানালাইসিস ও অডিয়েন্স রিসার্চ' : 'Module 02: Customer Analysis & Audience'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 pt-0">
              <button
                onClick={() => onNavigate('free-courses')}
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{language === 'bn' ? 'ফ্রি কোর্সের বিস্তারিত দেখুন' : 'View Free Courses'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Paid Masterclass Program */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs hover:border-blue-500 hover:shadow-sm transition-all flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={userWorkstationImg}
                  alt="Paid Masterclass Program"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 text-xs font-bold bg-blue-600 text-white rounded shadow-xs">
                    {language === 'bn' ? 'পেইড মাস্টারক্লাস' : 'Paid Masterclass'}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {language === 'bn' ? '৭-মডিউল মেটা বিজ্ঞাপন মাস্টারক্লাস' : '7-Module Meta Ads Masterclass'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'bn'
                    ? 'রিটার্গেটিং, কনভার্সন কপিরাইটিং, সার্ভার-সাইড পিক্সেল ট্র্যাকিং (GTM CAPI) ও বাজেট স্কেলিং।'
                    : 'Hands-on training covering retargeting, copywriting, server-side CAPI tracking, and scaling.'}
                </p>

                <div className="space-y-1.5 pt-2 text-xs text-slate-700 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === 'bn' ? 'মোট ৭টি স্পেশালাইজড প্র্যাকটিক্যাল মডিউল' : '7 Specialized practical modules'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === 'bn' ? 'সার্ভার-সাইড ট্র্যাকিং ও মেটা কনভার্সন এপিআই (CAPI)' : 'Server-side tracking & Meta Conversions API'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 pt-0">
              <button
                onClick={() => onNavigate('paid-courses')}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{language === 'bn' ? 'পেইড কোর্সের সিলেবাস দেখুন' : 'View Masterclass Syllabus'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Clean, Short CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-200 bg-white p-6 sm:p-10 rounded-2xl text-center shadow-xs">
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
            {language === 'bn' ? 'আপনার ক্যাম্পেইন বা কোর্স নিয়ে কথা বলুন' : 'Ready to Scale Your Ads?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-5 leading-relaxed">
            {language === 'bn'
              ? 'আমাদের সাথে WhatsApp-এ সরাসরি যোগাযোগ করে আপনার ব্যবসার জন্য পরামর্শ বা কোর্স এনরোলমেন্ট নিশ্চিত করুন।'
              : 'Direct communication with founder Md Abdur Rahman on WhatsApp.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/88${cleanWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {brandConfig.contact.whatsappNumber}</span>
            </a>

            <button
              onClick={() => onOpenContact('General Inquiry')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <span>{language === 'bn' ? 'মেসেজ পাঠান' : 'Contact Us'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
