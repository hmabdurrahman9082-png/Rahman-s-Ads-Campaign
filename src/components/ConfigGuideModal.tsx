import React, { useState } from 'react';
import { X, CheckCircle2, ShieldAlert, Sparkles, Globe, FileCode } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

interface ConfigGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigGuideModal: React.FC<ConfigGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'bengali' | 'english'>('bengali');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Website Owner & Deployment Guide
          </span>
        </div>

        <h3 id="guide-title" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
          গাইড ও কনফিগারেশন নির্দেশিকা (Owner Guide)
        </h3>

        {/* Tab switch */}
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-6">
          <button
            onClick={() => setActiveTab('bengali')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'bengali'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            বাংলা নির্দেশিকা (Bengali Guide)
          </button>
          <button
            onClick={() => setActiveTab('english')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'english'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            English Instructions
          </button>
        </div>

        {activeTab === 'bengali' ? (
          <div className="space-y-6 text-sm text-slate-600">
            {/* Step 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>১. বর্তমানে কী কী তৈরি ও সচল রয়েছে?</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                <li><strong className="text-slate-900">১০টি প্রধান পৃষ্ঠা:</strong> Home, About Us, Services, Our Process, Portfolio, Pricing, Free Courses, Paid Courses, FAQ, Contact Us।</li>
                <li><strong className="text-slate-900">ফাউন্ডার ও কোর্স ইমেজ:</strong> মোঃ আব্দুর রহমানের আসল ওয়ার্কস্টেশন ছবি লাইভ মনিটরিং এবং সকল কোর্সে যুক্ত করা হয়েছে।</li>
                <li><strong className="text-slate-900">দ্বিভাষিক সুবিধা:</strong> এক ক্লিকে সম্পূর্ণ ওয়েবসাইট বাংলায় এবং ইংরেজিতে পরিবর্তনযোগ্য।</li>
                <li><strong className="text-slate-900">ফোন নম্বর ভ্যালিডেশন ও Supabase:</strong> ক্লায়েন্ট মেসেজের সাথে ফোন নম্বর বাধ্যতামূলকভাবে ডাটাবেজে জমা হয়।</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-blue-600 shrink-0" />
                <span>২. আপনার কোন তথ্যগুলো কাস্টমাইজ করতে হবে?</span>
              </h4>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                সবগুলো তথ্য <code className="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">src/config/brandConfig.ts</code> ফাইলে খুব সহজে এডিট করা যাবে।
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li>• <strong className="text-slate-900">WhatsApp & Telegram:</strong> 01883423076</li>
                <li>• <strong className="text-slate-900">সরাসরি কল:</strong> 01806755760</li>
                <li>• <strong className="text-slate-900">ফেসবুক পেজ:</strong> Facebook Page লিংক সংযুক্ত আছে।</li>
                <li>• <strong className="text-slate-900">ইমেইল:</strong> {brandConfig.contact.email}</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>৩. সম্পূর্ণ ফ্রিতে হোস্টিং (Vercel)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                আপনার Vercel ডিপ্লয়মেন্টে অটোমেটিক আপডেট চলে যাবে। কোড গিটহাবে পুশ করলে সাইট স্বয়ংক্রিয়ভাবে লাইভ হয়ে যাবে।
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-sm text-slate-600">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1. What has been built and works now?</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                All 10 required navigation pages (Home, About Us, Services, Process, Portfolio, Pricing, Free Courses, Paid Courses, FAQ, and Contact Us). Light, clean, premium white design with complete bilingual support (Bangla & English).
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-blue-600 shrink-0" />
                <span>2. Configuration & Customization</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                All configurations are organized in <code className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded border border-blue-200">src/config/brandConfig.ts</code>.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
