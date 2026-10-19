import React, { useState } from 'react';
import { X, CheckCircle2, ShieldAlert, Sparkles, Globe, Terminal, FileCode, MessageSquare } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

interface ConfigGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigGuideModal: React.FC<ConfigGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'bengali' | 'english'>('bengali');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#091120] border border-slate-700 rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Website Owner & Deployment Guide
          </span>
        </div>

        <h3 id="guide-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
          গাইড ও কনফিগারেশন নির্দেশিকা (Owner Guide)
        </h3>

        {/* Tab switch */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-6">
          <button
            onClick={() => setActiveTab('bengali')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'bengali'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            বাংলা নির্দেশিকা (Bengali Guide)
          </button>
          <button
            onClick={() => setActiveTab('english')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'english'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            English Instructions
          </button>
        </div>

        {activeTab === 'bengali' ? (
          <div className="space-y-6 text-sm text-slate-300">
            {/* Step 1 */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-white text-base mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>১. বর্তমানে কী কী তৈরি ও সচল রয়েছে?</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                <li><strong className="text-white">১০টি প্রধান পৃষ্ঠা:</strong> Home, About Us, Services (৮টি সার্ভিস), Our Process (৬টি ধাপ), Portfolio, Pricing, Free Courses, Paid Courses, FAQ, Contact Us।</li>
                <li><strong className="text-white">কাস্টম ইমেজ:</strong> ডিজিটাল মার্কেটিং এবং কোর্সের জন্য হাই-কোয়ালিটি আসল ইমেজ তৈরি করা হয়েছে।</li>
                <li><strong className="text-white">সম্পূর্ণ রেসপনসিভ:</strong> মোবাইল, ট্যাবলেট এবং কম্পিউটারে চমৎকার দেখতে লাগবে।</li>
                <li><strong className="text-white">সততা ও বিশ্বাসযোগ্যতা:</strong> কোনো মিথ্যা ক্লায়েন্ট ডেটা, ভুয়া পরিসংখ্যান বা ভুয়া রিভিউ দেওয়া হয়নি। সব প্লেসহোল্ডার পরিষ্কারভাবে চিহ্নিত।</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-white text-base mb-2 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-blue-400 shrink-0" />
                <span>২. আপনার কোন তথ্যগুলো কাস্টমাইজ করতে হবে?</span>
              </h4>
              <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                সবগুলো তথ্য <code className="text-blue-300 bg-slate-950 px-1.5 py-0.5 rounded">src/config/brandConfig.ts</code> ফাইলে খুব সহজে এডিট করা যাবে:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• <strong className="text-white">WhatsApp & Telegram নম্বর:</strong> আপনার নম্বর (<code className="text-emerald-400">01883423076</code>) ইতিমধ্যে সাইটে যুক্ত ও সক্রিয় রয়েছে। আপনি চাইলে যেকোনো সময় এটি পরিবর্তন করতে পারবেন।</li>
                <li>• <strong className="text-white">সোশ্যাল মিডিয়া লিংক:</strong> Facebook, Instagram, LinkedIn ও YouTube-এর আসল প্রোফাইল লিংক বসাতে পারবেন।</li>
                <li>• <strong className="text-white">ইমেইল ঠিকানা:</strong> ডিফল্টভাবে আপনার একাউন্টের ইমেইল ({brandConfig.contact.email}) সেট করা আছে।</li>
                <li>• <strong className="text-white">কোর্সের বিবরণ:</strong> কারিকুলাম ও সিলেবাস খুব সহজে আপডেট করতে পারবেন।</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-white text-base mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>৩. সম্পূর্ণ ফ্রিতে কীভাবে এটি লাইভ করবেন? (Free Hosting)</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                আপনার বাজেট যেহেতু সীমিত, তাই <strong className="text-white">১ টাকাও খরচ না করে</strong> সম্পূর্ণ বিনামূল্যে এটি হোস্ট করতে পারেন:
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                  <span className="font-semibold text-white">বিকল্প ১: Vercel বা Netlify (সর্বোত্তম ফ্রি অপশন)</span>
                  <p className="text-slate-400 mt-1">GitHub-এ কোড পুশ করে Vercel বা Netlify-তে যুক্ত করলে আজীবন বিনামূল্যে হোস্টিং ও SSL সার্টিফিকেট পাবেন। মাসিক বা বার্ষিক কোনো ফি দিতে হবে না।</p>
                </div>
                <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                  <span className="font-semibold text-white">বিকল্প ২: GitHub Pages</span>
                  <p className="text-slate-400 mt-1">সম্পূর্ণ ফ্রি স্ট্যাটিক হোস্টিং সার্ভিস।</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-white text-base mb-2 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                <span>৪. ভবিষ্যতে কোন সুবিধার জন্য অতিরিক্ত সেটআপ বা ফি লাগতে পারে?</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                <li><strong className="text-white">কাস্টম ডোমেইন (.com):</strong> আপনার পছন্দের কাস্টম ডোমেইন (যেমন: <code className="text-slate-300">rahmansads.com</code>) কিনতে বছরে আনুমানিক $১০-$১২ লাগতে পারে। তবে ফ্রি ডোমেইন (.vercel.app) সম্পূর্ণ বিনামূল্যে ব্যবহার করতে পারবেন।</li>
                <li><strong className="text-white">অটোমেটিক ইমেইল ডেলিভারি:</strong> আপনি যদি চান ফর্ম ফিলাপ করা মাত্রই ইমেইল ইনবক্সে নিজে থেকেই জমা হোক, তখন Resend বা Formspree-এর ফ্রি কোটা ব্যবহার করতে পারবেন।</li>
                <li><strong className="text-white">অনলাইন পেমেন্ট গেটওয়ে:</strong> ভবিষ্যতে সরাসরি ওয়েবসাইটে পেমেন্ট নিতে চাইলে পেমেন্ট প্রসেসর সেটআপ করতে হবে।</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-sm text-slate-300">
            <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-white text-base mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1. What has been built and works now?</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                All 10 required navigation pages (Home, About Us, Services with 8 cards, Our Process 6-step timeline, Portfolio with clearly marked demonstration placeholders, 3 Pricing tiers with ad spend disclaimers, Free Courses, Paid Courses, FAQ, and Contact Us). High-fidelity generated imagery is integrated with zero broken links.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-white text-base mb-2 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-blue-400 shrink-0" />
                <span>2. Configuration & Customization</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                All data is concentrated in <code className="text-blue-300 bg-slate-950 px-1 py-0.5 rounded">src/config/brandConfig.ts</code>. Simply add your WhatsApp number (e.g. "8801XXXXXXXXX") to automatically enable the WhatsApp chat buttons across the site. Social media profile links and course curricula can also be customized directly in that file.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-white text-base mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3. Truly Free Deployment Options</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deploy directly to Vercel or Netlify via GitHub for 100% free hosting with automatic HTTPS SSL certificates. No credit card is required on their hobby tiers, and bandwidth limits comfortably support small business traffic.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
