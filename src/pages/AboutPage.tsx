import React from 'react';
import { Target, Shield, HeartHandshake, ArrowRight, Eye, RefreshCw, MessageCircle } from 'lucide-react';
import { userWorkstationImg } from '../config/brandConfig';
import { PageId } from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (topic?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  const { language } = useLanguage();
  const { brandConfig } = useSiteData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
          {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About The Brand'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {language === 'bn'
            ? 'পরিকল্পিত ও সুশৃঙ্খল ডিজিটাল বিজ্ঞাপনের মাধ্যমে ব্যবসার প্রসার'
            : 'Empowering Growing Businesses Through Disciplined Digital Advertising'}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {language === 'bn'
            ? `${brandConfig.brandName} প্রতিষ্ঠিত হয়েছে ক্ষুদ্র ও মাঝারি ব্যবসা, উদ্যোক্তা এবং ই-কমার্স ব্র্যান্ডকে অনলাইন বিজ্ঞাপনে সঠিক দিকনির্দেশনা ও বাস্তব ফলাফল উপহার দিতে।`
            : `${brandConfig.brandName} was established to provide clear, reliable, and data-informed advertising services for small businesses, entrepreneurs, and e-commerce brands looking to grow online.`}
        </p>
      </div>

      {/* Leadership & Founder Section with Photo */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          
          <div className="lg:col-span-5 relative bg-slate-100 aspect-[4/3] lg:aspect-auto lg:h-full">
            <img
              src={userWorkstationImg}
              alt="Md Abdur Rahman - Founder & Performance Marketing Specialist"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-md text-xs font-bold text-slate-900 shadow-xs border border-slate-200">
              Founder & Ads Lead
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                {language === 'bn' ? 'ক্যাম্পেইন লিডারশিপ' : 'Campaign Leadership'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                {brandConfig.founder.name}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-3">
                {brandConfig.founder.role}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {language === 'bn'
                  ? brandConfig.founder.bengaliBio
                  : 'Meta Ads & Performance Marketing Specialist. Dedicated to disciplined target audience research, continuous testing, transparent metrics reporting, and high ROAS campaign scaling.'}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenContact('Discussion with Md Abdur Rahman')}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 shadow-sm"
              >
                <span>{language === 'bn' ? 'সরাসরি পরামর্শ নিন' : 'Direct Consultation with Rahman'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              
              <a
                href="https://wa.me/8801883423076"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp: 01883423076</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Mission & Purpose */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            {language === 'bn' ? 'আমাদের মূল উদ্দেশ্য ও লক্ষ্য' : 'Our Core Mission'}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {language === 'bn'
              ? 'অনলাইন বিজ্ঞাপনে অধিকাংশ সময় অবাস্তব স্বপ্ন দেখিয়ে অযথা বাজেট অপচয় করা হয়। আমাদের লক্ষ্য হলো বিজ্ঞাপনকে স্বচ্ছ, ডেটা-ড্রিভেন এবং ব্যবসায়িক ফলাফলের সাথে প্রত্যক্ষভাবে সংযুক্ত করা।'
              : 'Online advertising is frequently presented with confusing jargon and unrealistic promises. Our mission is to demystify the advertising process, providing transparent campaign structures, systematic creative testing, and honest communication.'}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            {language === 'bn'
              ? 'আমরা বিশ্বাস করি প্রতিটি ক্ষুদ্র ও মাঝারি ব্যবসারই একটি কার্যকর ও শৃঙ্খলাবদ্ধ বিজ্ঞাপন কাঠামোর অধিকার রয়েছে—যা সঠিক কাস্টমার গবেষণা ও লাভজনক রিটার্ন নিশ্চিত করবে।'
              : 'We believe that every small business deserves the same methodical advertising principles used by larger enterprises—grounded in real audience insights and clear value propositions.'}
          </p>
        </div>

        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-600">
            {language === 'bn' ? 'কাদের জন্য আমরা কাজ করি' : 'Who We Serve'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {brandConfig.targetAudience}
          </p>
          <div className="pt-2 border-t border-slate-200 space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{language === 'bn' ? 'অনলাইন ও ই-কমার্স শপ, যারা ধারাবাহিকভাবে লাভজনক অর্ডার চান' : 'Independent eCommerce stores seeking scalable customer acquisition'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{language === 'bn' ? 'উদ্যোক্তা ও সার্ভিস প্রোভাইডার, যাদের কোয়ালিটি লিড ও কাস্টমার প্রয়োজন' : 'Local & regional service providers requiring qualified leads'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{language === 'bn' ? 'নতুন ব্র্যান্ড ও উদ্যোক্তা, যারা লাভজনকভাবে ব্যবসা শুরু করতে চান' : 'Founders launching new products and testing market demand'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Operating Values */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            {language === 'bn' ? 'আমাদের মূলনীতি' : 'Guiding Principles'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'bn' ? 'যে নীতিতে আমরা কাজ করি' : 'How We Operate'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {language === 'bn' ? 'সম্পূর্ণ আর্থিক স্বচ্ছতা' : 'Complete Transparency'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'bn'
                ? 'বিজ্ঞাপনের মূল বাজেট সরাসরি আপনার নিজস্ব পেমেন্ট মেথড বা কার্ড থেকে মেটা প্ল্যাটফর্মে কাটা হবে। কোনো লুকানো ফি নেই।'
                : 'All ad spend is billed directly by Meta to your own payment method, and we provide objective metric reports without inflated vanity claims.'}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {language === 'bn' ? 'পরিকল্পিত টার্গেটিং' : 'Disciplined Targeting'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'bn'
                ? 'অযথা সবাইকে বিজ্ঞাপন না দেখিয়ে, শুধুমাত্র আগ্রহী আসল ক্রেতাদের কাছেই বিজ্ঞাপন পৌঁছানো।'
                : 'We identify customer pain points and value drivers before turning on ads, reducing budget waste on irrelevant impressions.'}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {language === 'bn' ? 'ধারাবাহিক অপটিমাইজেশন' : 'Continuous Optimization'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'bn'
                ? 'বিজ্ঞাপন চালু করেই দায়িত্ব শেষ নয়; প্রতিদিন পারফরম্যান্স পর্যবেক্ষণ করে অকার্যকর বিজ্ঞাপনের অপচয় রোধ করা এবং লাভজনক অ্যাড স্কেল করা।'
                : 'Digital advertising is an iterative process. We continuously evaluate data, test ad creatives, and adjust allocations.'}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
