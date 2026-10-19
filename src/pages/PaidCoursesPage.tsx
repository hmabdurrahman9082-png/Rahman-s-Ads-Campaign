import React, { useState } from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, ChevronDown, ChevronUp, Layers, Mail, Sparkles, MessageCircle, Send, Check } from 'lucide-react';
import { paidCoursesData, CourseItem, brandConfig } from '../config/brandConfig';

interface PaidCoursesPageProps {
  onOpenContact: (courseTitle: string) => void;
}

export const PaidCoursesPage: React.FC<PaidCoursesPageProps> = ({ onOpenContact }) => {
  const [showAllModules, setShowAllModules] = useState(false);
  const cleanWhatsApp = brandConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header in clean English with Bengali support note */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/60 border border-blue-800 text-blue-400 text-xs font-semibold rounded-md mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Professional Training & Masterclasses</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
          Advanced Meta Ads Paid Masterclasses
        </h1>
        <p className="text-sm sm:text-base text-blue-400 font-medium mb-4">
          সম্পূর্ণ বাংলায় ৭টি মডিউলের প্র্যাকটিক্যাল মেটা অ্যাডস ও সেলস ফানেল কোর্স (বিগিনার থেকে প্রফেশনাল লেভেল)
        </p>
        <div className="p-4 bg-blue-950/30 border border-blue-900/60 rounded-xl mb-4 text-xs sm:text-sm text-blue-200 font-medium">
          “৯০% ফেসবুক বিজ্ঞাপন ফেইল করে কারণ অ্যাড চালানোর আগে সঠিক অডিয়েন্স রিসার্চ, কপিরাইটিং, সার্ভার ট্র্যাকিং ও এ/বি টেস্টিং জানা থাকে না।”
        </div>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Comprehensive, structured training frameworks for business owners, founders, and performance marketers seeking predictable customer acquisition and scalable advertising campaigns.
        </p>
      </div>

      {/* Honest Status Notice */}
      <div className="bg-blue-950/20 border border-blue-900/60 rounded-xl p-5 flex items-start gap-3.5 text-xs text-slate-300">
        <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-white">Direct Consultation & Batch Enrollment</p>
          <p className="text-slate-400 leading-relaxed">
            কোর্সের ভর্তি ও বিস্তারিত তথ্য জানতে সরাসরি WhatsApp (<span className="text-white font-mono font-bold">01883423076</span>) বা Telegram-এ যোগাযোগ করুন। কোনো হিডেন চার্জ বা অটোমেটিক পেমেন্ট কাটা হবে না।
          </p>
        </div>
      </div>

      {/* Flagship Paid Course Card (Single Marquee Card Containing All 7 Modules) */}
      <div className="bg-[#080F1E] border-2 border-blue-500/80 rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/30 transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Visual Banner */}
          <div className="lg:col-span-5 relative bg-slate-900 overflow-hidden min-h-[300px] lg:min-h-full">
            <img
              src={paidCoursesData[0]?.imagePath}
              alt="Advanced Meta Advertising Mastery Program"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-bold bg-blue-600 text-white rounded-md shadow-md">
                Complete 7-Module Program
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-sm rounded-lg border border-slate-700 text-xs text-slate-300">
              <span className="font-bold text-white block mb-0.5">কোর্সের ধরন: বাংলা প্র্যাকটিক্যাল মাস্টারক্লাস (ইন্সট্রাক্টর: মোঃ আব্দুর রহমান)</span>
              <span>ফাউন্ডেশন মডিউল ১ ও ২ সহ মোট ৭টি স্পেশালাইজড মডিউল এই একটি কোর্সেই অন্তর্ভুক্ত।</span>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-blue-400">
                <Layers className="w-4 h-4" />
                <span>FLAGSHIP PAID MASTERCLASS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Advanced Meta Ads Mastery Program
              </h2>
              <p className="text-sm text-blue-300 font-medium mb-4">
                মেটা অ্যাডস মাস্টারক্লাস: বিজ্ঞাপন তৈরি থেকে স্কেলিং পর্যন্ত পূর্ণাঙ্গ বাংলা কোর্স
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                ফাউন্ডেশন সেটআপ থেকে শুরু করে রিটার্গেটিং, সেলস কপিরাইটিং, এ/বি টেস্টিং, সার্ভার-সাইড ট্র্যাকিং (GTM/CAPI) এবং প্রফিট অ্যানালাইসিস—একটি কোর্সেই সম্পূর্ণ ৭টি গুরুত্বপূর্ণ ধাপ অন্তর্ভুক্ত করা হয়েছে।
              </p>

              {/* Quick Preview of all 7 Modules inside */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                  এই একটি কোর্সেই পাবেন ৭টি কমপ্লিট মডিউল:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {paidCoursesData.map((item, idx) => (
                    <div key={item.id} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="truncate">
                        <span className="font-semibold text-white truncate block">{item.title}</span>
                        <span className="text-[11px] text-blue-400 truncate block">{item.bengaliSubtitle}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why This Course is Helpful for Customers */}
              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>সহজ বাংলায় শেখানো:</strong> কোনো কঠিন ইংরেজি টেকনিক্যাল ভাষা ছাড়াই বাস্তব প্রজেক্টে দেখানো।</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>বাজেটের সুরক্ষা:</strong> কীভাবে অযথা ডলার নষ্ট না করে লাভজনক অ্যাড তৈরি করবেন।</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>ডিরেক্ট সাপোর্ট:</strong> WhatsApp ও Telegram-এ প্রশ্ন ও কনফিউশনের সরাসরি সমাধান।</span>
                </div>
              </div>
            </div>

            {/* Interactive Toggle & Inquire Buttons */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3 items-center">
              <button
                onClick={() => setShowAllModules(!showAllModules)}
                className="w-full sm:w-auto flex-1 py-3 px-5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>{showAllModules ? 'মডিউল তালিকা বন্ধ করুন (Hide Modules)' : 'সবগুলো ৭টি মডিউল ও টপিক দেখুন (View All 7 Modules)'}</span>
                {showAllModules ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <button
                onClick={() => onOpenContact('Advanced Meta Ads Mastery Program (7 Modules) Inquiry')}
                className="w-full sm:w-auto py-3 px-5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>ভর্তি সংক্রান্ত তথ্য জানুন</span>
              </button>

              <a
                href={`https://wa.me/88${cleanWhatsApp}?text=${encodeURIComponent("Hello Rahman, I would like to inquire about the Complete 7-Module Meta Ads Mastery Program.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Expanded View: All 7 Modules in Detail (Displayed when user clicks the card button) */}
      {showAllModules && (
        <div className="space-y-6 pt-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                Detailed Breakdown · বিস্তারিত সিলেবাস
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                All 7 Specialized Mastery Modules (৭টি পূর্ণাঙ্গ মডিউল)
              </h3>
            </div>
            <button
              onClick={() => setShowAllModules(false)}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer py-1.5 px-3 bg-slate-900 border border-slate-800 rounded-md"
            >
              <span>ভিউ সংক্ষেপ করুন</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paidCoursesData.map((course: CourseItem, idx) => (
              <div
                key={course.id}
                className="bg-[#080F1E] border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-950/20"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative h-44 sm:h-48 bg-slate-900 overflow-hidden">
                    <img
                      src={course.imagePath}
                      alt={course.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[11px] font-semibold bg-blue-950/90 text-blue-300 border border-blue-800 rounded-md shadow-sm">
                        {course.moduleNumber}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 text-[11px] font-medium bg-slate-900/90 text-slate-300 border border-slate-700 rounded-md">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-base font-bold text-white mb-0.5 tracking-tight leading-snug">
                      {course.title}
                    </h4>
                    <p className="text-xs text-blue-400 font-semibold mb-3">
                      {course.bengaliSubtitle}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {course.shortDesc}
                    </p>

                    {/* Topics */}
                    <div className="space-y-2 mb-6 pt-3 border-t border-slate-800/80">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        মূল শিক্ষণীয় পয়েন্ট:
                      </span>
                      {course.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0 border-t border-slate-800/80">
                  <button
                    onClick={() => onOpenContact(`Inquiry for ${course.moduleNumber}: ${course.title}`)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold rounded-lg border border-slate-700 hover:border-blue-500 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>এই মডিউল সম্পর্কে তথ্য জানুন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Direct Contact Bar with WhatsApp, Telegram, Facebook Page & Optional Number */}
      <div className="bg-[#080E1C] border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">
            কোর্সের সিলেবাস বা ভর্তি সংক্রান্ত যেকোনো প্রশ্ন?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            সরাসরি যোগাযোগ করুন: WhatsApp/Telegram <span className="text-white font-mono font-bold">01883423076</span> | কল: <span className="text-white font-mono font-bold">01806755760</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={brandConfig.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
          >
            <span>Facebook Page</span>
          </a>

          <a
            href={`https://wa.me/88${cleanWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp (01883423076)</span>
          </a>

          <a
            href="https://t.me/+8801883423076"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
          >
            <Send className="w-4 h-4" />
            <span>Telegram (01883423076)</span>
          </a>
        </div>
      </div>

    </div>
  );
};
