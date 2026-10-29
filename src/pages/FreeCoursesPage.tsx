import React from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, MessageCircle } from 'lucide-react';
import { CourseItem } from '../config/brandConfig';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface FreeCoursesPageProps {
  onOpenContact: (courseTitle: string) => void;
}

export const FreeCoursesPage: React.FC<FreeCoursesPageProps> = ({ onOpenContact }) => {
  const { language } = useLanguage();
  const { freeCoursesData, brandConfig } = useSiteData();
  const cleanWhatsApp = brandConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
          {language === 'bn' ? 'ফাউন্ডেশন রিসোর্স · ১০০% ফ্রি সেশন' : 'Foundation Resources · 100% Free Sessions'}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {language === 'bn' ? 'ফ্রি মেটা অ্যাডস ফাউন্ডেশন কোর্স' : 'Free Meta Ads Foundation Courses'}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {language === 'bn'
            ? 'কোনো ফি ছাড়াই আমাদের ফাউন্ডেশন ট্রেনিং মডিউলে যুক্ত হোন। মেটা বিজনেস ম্যানেজার প্রফেশনাল সেটআপ এবং সঠিক অডিয়েন্স রিসার্চের নিয়ম শিখুন।'
            : 'Access our foundational training modules completely free. Learn how to configure your Meta Business Suite and conduct audience research before spending ad budget.'}
        </p>
      </div>

      {/* Status Notice */}
      <div className="bg-white border border-slate-200/90 rounded-xl p-5 flex items-start gap-3.5 text-xs text-slate-600 shadow-xs">
        <AlertCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-slate-900">
            {language === 'bn' ? 'সরাসরি অ্যাক্সেস ও ম্যাটেরিয়াল সংগ্রহ' : 'Direct Access & Training Materials'}
          </p>
          <p className="text-slate-600 leading-relaxed">
            {language === 'bn'
              ? 'নিচের হোয়াটসঅ্যাপ বাটনে ক্লিক করে সরাসরি আমাদের সাথে যুক্ত হোন। আমরা আপনাকে প্রয়োজনীয় গাইডলাইন ও সহায়তা প্রদান করব।'
              : 'Connect directly with Md Abdur Rahman on WhatsApp to receive session guides and training materials.'}
          </p>
        </div>
      </div>

      {/* Course Cards Grid - The 2 Free Foundation Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {freeCoursesData.map((course: CourseItem) => (
          <div
            key={course.id}
            className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-emerald-500 transition-all hover:shadow-md shadow-sm"
          >
            <div>
              {/* Course Thumbnail Image (User photo - 4:3) */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden border-b border-slate-200/80">
                <img
                  src={course.imagePath}
                  alt={course.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-bold bg-emerald-600 text-white rounded-md shadow-xs">
                    {language === 'bn' ? '১০০% ফ্রি কোর্স' : 'Free Course'}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-semibold text-slate-700 shadow-xs">
                  {course.moduleNumber}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {language === 'bn' ? course.bengaliSubtitle : course.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.shortDesc}
                </p>

                {/* Topics covered */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                    {language === 'bn' ? 'যা যা শেখানো হবে:' : 'Key Syllabus Topics:'}
                  </span>
                  {course.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="p-6 sm:p-8 pt-0 space-y-3">
              <a
                href={`https://wa.me/88${cleanWhatsApp}?text=${encodeURIComponent(
                  `Hello Rahman's Ads Campaign, I want to enroll in the free course: ${course.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'bn' ? 'WhatsApp-এ ফ্রি যুক্ত হোন' : 'Join Free on WhatsApp'}</span>
              </a>

              <button
                onClick={() => onOpenContact(`Free Course: ${course.title}`)}
                className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{language === 'bn' ? 'ফর্ম পূরণ করে রেজিস্ট্রেশন করুন' : 'Register via Website Form'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Need Advanced Training? Strip */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
            {language === 'bn' ? 'সম্পূর্ণ ৭-মডিউল মাস্টারক্লাস' : 'Complete 7-Module Mastery'}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            {language === 'bn' ? 'পেইড মাস্টারক্লাস প্রোগ্রামে আপগ্রেড করতে চান?' : 'Looking for Complete End-to-End Meta Ads Mastery?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
            {language === 'bn'
              ? 'আমাদের পূর্ণাঙ্গ পেইড প্রোগ্রামে রিটার্গেটিং, এ/বি টেস্টিং, জিটিএম সার্ভার-সাইড পিক্সেল ট্র্যাকিং ও বাজেট স্কেলিং শেখানো হয়।'
              : 'Includes custom audiences, high-converting copywriting, GTM server-side tracking, and scaling.'}
          </p>
        </div>

        <a
          href="#/paid-courses"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shrink-0 shadow-sm inline-flex items-center gap-2"
        >
          <span>{language === 'bn' ? 'পেইড কোর্স সিলেবাস দেখুন' : 'View Paid Courses'}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
};
