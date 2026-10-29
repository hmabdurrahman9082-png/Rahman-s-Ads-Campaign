import React, { useState } from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, ChevronDown, ChevronUp, Layers, Mail, MessageCircle, Check } from 'lucide-react';
import { CourseItem, userWorkstationImg } from '../config/brandConfig';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface PaidCoursesPageProps {
  onOpenContact: (courseTitle: string) => void;
}

export const PaidCoursesPage: React.FC<PaidCoursesPageProps> = ({ onOpenContact }) => {
  const [showAllModules, setShowAllModules] = useState(true);
  const { language } = useLanguage();
  const { paidCoursesData, brandConfig } = useSiteData();
  const cleanWhatsApp = brandConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
          {language === 'bn' ? 'প্রফেশনাল মেটা অ্যাডস মাস্টারক্লাস' : 'Professional Training & Masterclasses'}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
          {language === 'bn' ? 'অ্যাডভান্সড মেটা অ্যাডস পেইড কোর্স' : 'Advanced Meta Ads Paid Masterclasses'}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {language === 'bn'
            ? '৭টি মডিউলের প্র্যাকটিক্যাল মেটা অ্যাডস ও সেলস ফানেল কোর্স। সরাসরি লাইভ অ্যাডস ম্যানেজারে কাজ দেখানো হয়েছে।'
            : 'Comprehensive 7-Module Practical Meta Ads & Sales Funnel Course taught step-by-step with real-world campaign walkthroughs.'}
        </p>
      </div>

      {/* Status Notice */}
      <div className="bg-white border border-slate-200/90 rounded-xl p-5 flex items-start gap-3.5 text-xs text-slate-600 shadow-xs">
        <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-slate-900">
            {language === 'bn' ? 'সরাসরি পরামর্শ ও ব্যাচে ভর্তি' : 'Direct Consultation & Batch Enrollment'}
          </p>
          <p className="text-slate-600 leading-relaxed">
            {language === 'bn'
              ? 'কোর্সের ভর্তি ও বিস্তারিত তথ্য জানতে সরাসরি WhatsApp (01883423076) বা Telegram-এ যোগাযোগ করুন।'
              : 'Direct batch registration with founder Md Abdur Rahman. Connect directly on WhatsApp (01883423076) for schedules.'}
          </p>
        </div>
      </div>

      {/* Flagship Paid Course Card (With User's Real Photo) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-md hover:border-blue-300 transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Visual Banner (Md Abdur Rahman at workstation - 4:3 matching 1280x960) */}
          <div className="lg:col-span-5 relative bg-slate-100 overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full">
            <img
              src={userWorkstationImg}
              alt="Md Abdur Rahman - Advanced Meta Advertising Mastery Program"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-bold bg-blue-600 text-white rounded-md shadow-xs">
                {language === 'bn' ? '৭টি মডিউলের পূর্ণাঙ্গ প্রোগ্রাম' : 'Complete 7-Module Program'}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-blue-600">
                <Layers className="w-4 h-4" />
                <span>{language === 'bn' ? 'ফ্ল্যাগশিপ মাস্টারক্লাস' : 'FLAGSHIP PAID MASTERCLASS'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                {language === 'bn' ? 'অ্যাডভান্সড মেটা অ্যাডস মাস্টারক্লাস' : 'Advanced Meta Ads Mastery Program'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {language === 'bn'
                  ? 'অ্যাকাউন্ট সেটআপ, রিটার্গেটিং, সেলস কপিরাইটিং, এ/বি টেস্টিং, সার্ভার-সাইড ট্র্যাকিং (GTM/CAPI) এবং প্রফিট অ্যানালাইসিস—একটি কোর্সেই সম্পূর্ণ ৭টি গুরুত্বপূর্ণ ধাপ অন্তর্ভুক্ত।'
                  : 'Covering environment setup, customer persona analysis, advanced multi-level retargeting, conversion ad copy, A/B testing frameworks, GTM server-side CAPI tracking, and weekly performance reviews.'}
              </p>

              {/* Quick Preview of all 7 Modules inside */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-2.5">
                  {language === 'bn' ? 'এই একটি কোর্সেই পাবেন ৭টি কমপ্লিট মডিউল:' : 'All 7 Modules Included in One Enrollment:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {paidCoursesData.map((item, idx) => (
                    <div key={item.id} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-medium text-slate-900 truncate">
                        {language === 'bn' ? item.bengaliSubtitle : item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clean Value points */}
              <div className="space-y-2 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>{language === 'bn' ? 'সহজ বাংলায় শেখানো:' : 'Practical Bengali Explanation:'}</strong> {language === 'bn' ? 'সরাসরি লাইভ মেটা অ্যাডস ম্যানেজারে দেখানো।' : 'Real screen recordings and live campaign workflows.'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>{language === 'bn' ? 'বাজেটের সুরক্ষা:' : 'Budget Protection:'}</strong> {language === 'bn' ? 'বাজেট অপচয় রোধ ও লাভজনকভাবে স্কেলিং।' : 'Prevent ad spend waste and scale profitably.'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>{language === 'bn' ? 'ডিরেক্ট সাপোর্ট:' : 'Direct Support:'}</strong> {language === 'bn' ? 'WhatsApp ও Telegram-এ প্রশ্ন ও কনফিউশনের সরাসরি সমাধান।' : 'Direct guidance on WhatsApp and Telegram (01883423076).'}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center">
              <a
                href={`https://wa.me/88${cleanWhatsApp}?text=${encodeURIComponent("Hello Rahman, I would like to enroll in the Complete 7-Module Meta Ads Mastery Program.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'bn' ? 'WhatsApp-এ ভর্তি সম্পন্ন করুন' : 'Enroll on WhatsApp'}</span>
              </a>

              <button
                onClick={() => onOpenContact('Advanced Meta Ads Mastery Program (7 Modules) Inquiry')}
                className="w-full sm:w-auto py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>{language === 'bn' ? 'ফর্ম পূরণ করে ভর্তি তথ্য জানুন' : 'Inquire via Form'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Expanded View: All 7 Modules in Detail */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              {language === 'bn' ? 'বিস্তারিত সিলেবাস' : 'Detailed Curriculum'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {language === 'bn' ? '৭টি পূর্ণাঙ্গ মডিউল ও টপিকসমূহ' : 'All 7 Specialized Mastery Modules'}
            </h3>
          </div>

          <button
            onClick={() => setShowAllModules(!showAllModules)}
            className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer py-1.5 px-3 bg-white border border-slate-200 rounded-md shadow-xs"
          >
            <span>{showAllModules ? (language === 'bn' ? 'মডিউল গুটিয়ে রাখুন' : 'Collapse') : (language === 'bn' ? 'সব মডিউল খুলুন' : 'Expand All')}</span>
            {showAllModules ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {showAllModules && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {paidCoursesData.map((course: CourseItem) => (
              <div
                key={course.id}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-blue-400 transition-all hover:shadow-md shadow-sm"
              >
                <div>
                  {/* Thumbnail (User's Photo - 4:3 matching source) */}
                  <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden border-b border-slate-200/80">
                    <img
                      src={userWorkstationImg}
                      alt={course.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[11px] font-bold bg-blue-600 text-white rounded-md shadow-xs">
                        {course.moduleNumber}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-base font-bold text-slate-900 mb-2 tracking-tight leading-snug">
                      {language === 'bn' ? course.bengaliSubtitle : course.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {course.shortDesc}
                    </p>

                    {/* Topics */}
                    <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        {language === 'bn' ? 'মূল বিষয়বস্তু:' : 'Key Learning Outcomes:'}
                      </span>
                      {course.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0 border-t border-slate-100">
                  <button
                    onClick={() => onOpenContact(`Inquiry for ${course.moduleNumber}: ${course.title}`)}
                    className="w-full py-2.5 px-4 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-semibold rounded-lg border border-slate-200 hover:border-blue-600 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{language === 'bn' ? 'এই মডিউলের তথ্য জানুন' : 'Inquire for this Module'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Direct Contact Bar */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            {language === 'bn' ? 'কোর্সের সিলেবাস বা ভর্তি সংক্রান্ত যেকোনো প্রশ্ন?' : 'Have Questions About Syllabus or Enrollment?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            {language === 'bn' ? 'সরাসরি যোগাযোগ করুন: WhatsApp/Telegram' : 'Contact Directly via WhatsApp/Telegram'}{' '}
            <span className="text-slate-900 font-mono font-bold">01883423076</span> | {language === 'bn' ? 'কল করুন:' : 'Call:'}{' '}
            <span className="text-slate-900 font-mono font-bold">01806755760</span>
          </p>
        </div>

        <a
          href={`https://wa.me/88${cleanWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-xs shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{language === 'bn' ? 'WhatsApp চ্যাট শুরু করুন' : 'Chat on WhatsApp'}</span>
        </a>
      </div>

    </div>
  );
};
