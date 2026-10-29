import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Clock,
  Video,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Check,
  Shield,
  Layers,
} from 'lucide-react';
import { CourseItem, userWorkstationImg } from '../config/brandConfig';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface CoursesPageProps {
  initialTab?: 'free' | 'paid';
  onOpenContact: (courseTitle: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  initialTab = 'free',
  onOpenContact,
}) => {
  const { language } = useLanguage();
  const { freeCoursesData, paidCoursesData, brandConfig } = useSiteData();
  const [activeTab, setActiveTab] = useState<'free' | 'paid'>(initialTab);
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<CourseItem | null>(null);
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);

  const cleanWhatsApp = brandConfig.contact.whatsappNumber
    ? brandConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')
    : '01883423076';

  const toggleModuleAccordion = (id: string) => {
    setExpandedModuleId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 sm:space-y-12">
      
      {/* 1. Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
          {language === 'bn' ? 'মেটা বিজ্ঞাপন প্রশিক্ষণ ও মেন্টরশিপ' : 'Meta Ads Training & Mentorship'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-snug mb-3">
          {language === 'bn' ? 'প্রফেশনাল মেটা অ্যাডস কোর্স ও মাস্টারক্লাস' : 'Professional Meta Ads Courses & Masterclasses'}
        </h1>
        <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
          {language === 'bn'
            ? 'বেসিক থেকে অ্যাডভান্সড মেটা বিজ্ঞাপন ও সেলস ফানেল কৌশল। নিচে ফ্রি ও পেইড কোর্সের বিস্তারিত মডিউল দেখুন।'
            : 'From fundamentals to advanced sales funnels and algorithmic scaling. Explore our Free Foundation and Paid Masterclass curriculums below.'}
        </p>
      </div>

      {/* 2. Sleek Segment Tab Switcher (Free vs Paid) */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('free')}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'free'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>{language === 'bn' ? '১০০% ফ্রি ফাউন্ডেশন কোর্স (২টি)' : '100% Free Foundation (2 Sessions)'}</span>
        </button>

        <button
          onClick={() => setActiveTab('paid')}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'paid'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>{language === 'bn' ? 'পেইড মাস্টারক্লাস প্রোগ্রাম (৭ মডিউল)' : 'Paid Masterclass (7 Modules)'}</span>
        </button>
      </div>

      {/* 3. TAB CONTENT: Free Courses */}
      {activeTab === 'free' && (
        <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
          
          {/* Quick Notice Banner */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 sm:p-5 flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700">
              <span className="font-bold text-emerald-900 block mb-0.5">
                {language === 'bn' ? 'সম্পূর্ণ বিনামূল্যে শুরু করুন:' : '100% Free Foundation Training:'}
              </span>
              <p className="text-slate-600">
                {language === 'bn'
                  ? 'কোনো ফি ছাড়াই বেসিক বিজনেস ম্যানেজার সেটআপ এবং অডিয়েন্স রিসার্চ শিখুন। বিস্তারিত দেখতে কোর্সে ক্লিক করুন।'
                  : 'Start without any upfront fees. Learn business suite setup and targeting research before allocating advertising budget.'}
              </p>
            </div>
          </div>

          {/* Free Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {freeCoursesData.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs hover:border-emerald-500 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo thumbnail */}
                  <div className="relative aspect-[16/9] sm:aspect-[4/3] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img
                      src={userWorkstationImg}
                      alt={course.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 text-xs font-bold bg-emerald-600 text-white rounded shadow-xs">
                        {course.moduleNumber || (language === 'bn' ? 'ফ্রি সেশন' : 'Free Course')}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3.5">
                    <div>
                      <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                        {language === 'bn' ? course.bengaliSubtitle : course.moduleNumber}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {course.shortDesc}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-500 py-2 border-y border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Level: {course.level}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5 text-slate-400" />
                        <span>Online Session</span>
                      </div>
                    </div>

                    {/* Key topics */}
                    <div className="space-y-1.5 text-xs text-slate-700">
                      {course.topics.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-5 sm:p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedCourseForDetail(course)}
                    className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center"
                  >
                    {language === 'bn' ? 'সিলেবাস ও বিস্তারিত' : 'View Full Details'}
                  </button>

                  <a
                    href={`https://wa.me/88${cleanWhatsApp}?text=${encodeURIComponent(
                      `Hello Rahman's Ads Campaign, I want to access the Free Course: ${course.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{language === 'bn' ? 'ফ্রি সেশন নিন' : 'WhatsApp'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* 4. TAB CONTENT: Paid Courses */}
      {activeTab === 'paid' && (
        <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
          
          {/* Flagship Paid Program Overview Banner */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              <div className="lg:col-span-5 relative aspect-[16/9] lg:aspect-auto lg:h-full bg-slate-100">
                <img
                  src={userWorkstationImg}
                  alt="Meta Ads Mastery Program - Md Abdur Rahman"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 text-xs font-bold bg-blue-600 text-white rounded shadow-xs">
                    {language === 'bn' ? 'মাস্টারক্লাস প্রোগ্রাম' : 'Paid Masterclass'}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-5 sm:p-8 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {language === 'bn' ? '৭টি সমন্বিত প্র্যাকটিক্যাল মডিউল' : 'Comprehensive 7 Practical Modules'}
                  </span>
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-900 mt-1 leading-snug">
                    {language === 'bn'
                      ? 'সম্পূর্ণ মেটা বিজ্ঞাপন ও সেলস স্কেলিং মাস্টারক্লাস'
                      : 'Complete Meta Ads & E-Commerce Scaling Masterclass'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {language === 'bn'
                      ? 'অ্যাকাউন্ট অডিট, অ্যাড কপিরাইটিং, ক্রিয়েটিভ টেস্টিং, সার্ভার-সাইড পিক্সেল ট্র্যাকিং (GTM CAPI) এবং বাজেট স্কেলিং—সবকিছু লাইভ কেস স্টাডি সহ।'
                      : 'Covers live account auditing, conversion copywriting, server-side CAPI tracking, A/B creative testing, and multi-budget scaling strategies.'}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs border-y border-slate-100 py-3">
                  <div>
                    <span className="text-slate-400 block">{language === 'bn' ? 'মডিউল সংখ্যা' : 'Modules'}</span>
                    <span className="font-bold text-slate-900">{language === 'bn' ? '৭টি স্পেশালাইজড' : '7 Modules'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">{language === 'bn' ? 'ফরম্যাট' : 'Format'}</span>
                    <span className="font-bold text-slate-900">{language === 'bn' ? 'লাইভ ও হ্যান্ডস-অন' : 'Live & Hands-on'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">{language === 'bn' ? 'সাপোর্ট' : 'Support'}</span>
                    <span className="font-bold text-slate-900">{language === 'bn' ? 'সরাসরি মেন্টরশিপ' : 'Direct Mentorship'}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={`https://wa.me/88${cleanWhatsApp}?text=${encodeURIComponent(
                      "Hello Rahman's Ads Campaign, I want to enroll in the Paid 7-Module Meta Ads Mastery Program."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{language === 'bn' ? 'WhatsApp-এ ব্যাচ শিডিউল জানুন' : 'Inquire on WhatsApp'}</span>
                  </a>

                  <button
                    onClick={() => onOpenContact('Paid Masterclass Program')}
                    className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    {language === 'bn' ? 'ফরম পূরণ করে যোগাযোগ করুন' : 'Submit Inquiry'}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Module Breakdown Accordion / Cards List */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {language === 'bn' ? '৭টি মডিউলের বিস্তারিত তালিকা ও সিলেবাস' : 'Curriculum: 7 Detailed Course Modules'}
              </h3>
              <span className="text-[11px] text-slate-500 font-medium">
                {language === 'bn' ? 'ক্লিক করে বিস্তারিত দেখুন' : 'Click to inspect syllabus'}
              </span>
            </div>

            <div className="space-y-2.5">
              {paidCoursesData.map((module) => {
                const isExpanded = expandedModuleId === module.id;
                return (
                  <div
                    key={module.id}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-2xs hover:border-blue-300"
                  >
                    <button
                      onClick={() => toggleModuleAccordion(module.id)}
                      className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/60 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                          {module.moduleNumber ? module.moduleNumber.replace(/\D/g, '') || '01' : '01'}
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                            {module.title}
                          </h4>
                          <span className="text-[11px] text-blue-600 font-medium">
                            {module.bengaliSubtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="hidden sm:inline text-xs text-slate-400 font-medium">
                          {module.level}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 pt-1 border-t border-slate-100 bg-slate-50/40 space-y-2.5 animate-in fade-in duration-150">
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {module.shortDesc}
                        </p>

                        <div className="space-y-1.5 pt-1">
                          <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                            {language === 'bn' ? 'মডিউলে যা যা শেখানো হবে:' : 'Topics Covered:'}
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                            {module.topics.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-1.5 bg-white border border-slate-200/70 p-2 rounded-lg">
                                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-1.5 flex items-center justify-end">
                          <a
                            href={`https://wa.me/88${cleanWhatsApp}?text=${encodeURIComponent(
                              `Hello, I would like more information on ${module.moduleNumber}: ${module.title}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                          >
                            <span>{language === 'bn' ? 'এই মডিউল নিয়ে কথা বলুন' : 'Ask about this module'}</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* 5. Course Details Modal */}
      {selectedCourseForDetail && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full overflow-hidden shadow-xl animate-in zoom-in-95 duration-150">
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                  {selectedCourseForDetail.moduleNumber}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                  {selectedCourseForDetail.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCourseForDetail(null)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer text-base font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-4 sm:p-5 space-y-3.5 max-h-[70vh] overflow-y-auto">
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedCourseForDetail.shortDesc}
              </p>

              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">{language === 'bn' ? 'লেভেল:' : 'Level:'}</span>
                  <span className="font-bold text-slate-900">{selectedCourseForDetail.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{language === 'bn' ? 'ফি:' : 'Fee:'}</span>
                  <span className="font-bold text-emerald-600">{language === 'bn' ? '১০০% ফ্রি' : '100% Free'}</span>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                  {language === 'bn' ? 'সিলেবাস ও বিষয়বস্তু:' : 'Topics Included:'}
                </h4>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {selectedCourseForDetail.topics.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2.5">
              <button
                onClick={() => setSelectedCourseForDetail(null)}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
              >
                {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
              </button>

              <a
                href={`https://wa.me/88${cleanWhatsApp}?text=${encodeURIComponent(
                  `Hello Rahman's Ads Campaign, I want to access: ${selectedCourseForDetail.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'WhatsApp-এ শুরু করুন' : 'Start on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
