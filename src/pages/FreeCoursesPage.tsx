import React from 'react';
import { BookOpen, ArrowRight, AlertCircle, CheckCircle2, Mail, MessageCircle, Send, Sparkles } from 'lucide-react';
import { freeCoursesData, CourseItem, brandConfig } from '../config/brandConfig';

interface FreeCoursesPageProps {
  onOpenContact: (courseTitle: string) => void;
}

export const FreeCoursesPage: React.FC<FreeCoursesPageProps> = ({ onOpenContact }) => {
  const cleanWhatsApp = brandConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header in clean English */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs font-semibold rounded-md mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Foundation Resources · 100% Free Sessions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Free Meta Ads Foundation Courses
        </h1>
        <div className="p-4 bg-rose-950/20 border border-rose-900/50 rounded-xl mb-4 text-xs sm:text-sm text-rose-300 font-medium">
          “90% of Facebook ads fail because advertisers lack fundamental knowledge in these core areas.”
        </div>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Access our foundational training modules completely free. Learn how to properly configure your Meta Business Suite environment and conduct thorough audience research before spending ad budget.
        </p>
      </div>

      {/* Honest Status Notice */}
      <div className="bg-emerald-950/20 border border-emerald-900/60 rounded-xl p-5 flex items-start gap-3.5 text-xs text-slate-300">
        <AlertCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-white">Pre-Registration & Early Access</p>
          <p className="text-slate-400 leading-relaxed">
            Reserve your early access to upcoming live foundation workshops and downloadable checklists. To receive the training materials upon release, use the registration button below or message directly on WhatsApp / Telegram.
          </p>
        </div>
      </div>

      {/* Course Cards Grid - The 2 Free Foundation Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {freeCoursesData.map((course: CourseItem) => (
          <div
            key={course.id}
            className="bg-[#080F1E] border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-emerald-950/10"
          >
            <div>
              {/* Course Thumbnail Image */}
              <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden">
                <img
                  src={course.imagePath}
                  alt={course.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-800 rounded-md shadow-sm">
                    {course.moduleNumber}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 text-[11px] font-medium bg-slate-900/90 text-slate-300 border border-slate-700 rounded-md">
                    লেভেল: {course.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Status Notice */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/80 px-2.5 py-0.5 rounded font-semibold">
                    Free Course
                  </span>
                  <span className="text-[11px] text-slate-400">
                    100% Free Access
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                  {course.title}
                </h3>
                <p className="text-xs text-emerald-400 font-semibold mb-3">
                  {course.bengaliSubtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {course.shortDesc}
                </p>

                {/* Topics Covered */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    কী কী শিখবেন (মূল শিক্ষণীয় পয়েন্ট):
                  </span>
                  {course.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="p-6 sm:p-8 pt-0 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenContact(`Free Course Early Access: ${course.title}`)}
                className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>ফ্রি কোর্সে অংশ নিন (Free Access)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenContact(`Course Inquiry: ${course.title}`)}
                className="py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>যোগাযোগ করুন</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Contact Bar with WhatsApp, Telegram, Facebook Page & Optional Number */}
      <div className="bg-[#080E1C] border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">
            Need Direct Assistance or Free Course Guidance?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Reach out directly via WhatsApp / Telegram: <span className="text-white font-mono font-bold">01883423076</span> | Direct Call: <span className="text-white font-mono font-bold">01806755760</span>
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
