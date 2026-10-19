import React from 'react';
import { ArrowRight, CheckCircle2, Target, BarChart2, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { brandConfig, servicesData, heroImg, paidCourseImg } from '../config/brandConfig';
import { PageId } from '../components/Navbar';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (topic?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative pt-8 sm:pt-14 pb-12 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Brand identifier kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/40 border border-blue-800/60 px-3 py-1.5 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span className="tracking-wide uppercase">{brandConfig.brandName}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] text-balance">
                Grow Your Business Through Structured, Data-Informed Digital Advertising
              </h1>

              {/* Subtitle / Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                We design, manage, and optimize focused advertising campaigns on Meta platforms (Facebook & Instagram). Built for small businesses, entrepreneurs, and e-commerce brands seeking disciplined execution and measurable customer acquisition.
              </p>

              {/* Core Ethical Commitment Notice */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Honest reporting · Direct client ad billing · Clear campaign strategy</span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-600/20 transition-all cursor-pointer flex items-center gap-2 group"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenContact('General Inquiry')}
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-semibold rounded-lg border border-slate-700/80 transition-all cursor-pointer"
                >
                  Contact Us
                </button>
              </div>

              {/* Quick Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Precision Meta Targeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Objective Performance Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Full-Funnel Campaign Setup</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column - Digital Advertising Operations Center */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#091120] group">
                <img
                  src={heroImg}
                  alt="Campaign Operations Center - Meta Advertising Strategy"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Visual Overlay Caption */}
                <div className="p-4 bg-[#080E1A] border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-300">Campaign Operations Center</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Monitoring
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Brand Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#080F1E] border border-slate-800/90 rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
              About RAHMAN'S ADS CAMPAIGN
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 text-balance">
              Dedicated to Practical, Results-Focused Online Advertising
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              In a crowded digital landscape, generic ad campaigns waste valuable budget. At RAHMAN'S ADS CAMPAIGN, our focus is grounded in rigorous market research, authentic ad copy, and careful technical configuration. We help brands avoid costly trial-and-error by implementing structured campaign frameworks designed around their specific customer acquisition goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Target Audience Clarity</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Identifying who your customers are before spending a single dollar on ads.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full Financial Transparency</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Your ad spend stays in your own Meta billing account, ensuring 100% control.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
              >
                <span>Read our full brand story & methodology</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
              Core Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Specialized Advertising Services
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
          >
            <span>View all 8 services in detail</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="bg-[#080F1D] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-0.5">{service.title}</h3>
                <p className="text-xs text-blue-400 font-semibold mb-2">{service.bengaliSubtitle}</p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {service.fullDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onOpenContact(`Inquiry for ${service.title}`)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer flex items-center gap-1"
                >
                  <span>সার্ভিস বিস্তারিত ও ইনকোয়ারি</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Process Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#091326] to-[#060D1A] border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
                Structured Execution
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                Our 6-Step Campaign Framework
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mb-6">
                From initial goal analysis to continuous performance reviews, every ad dollar is guided by a documented plan. We do not guess—we test, measure, and refine.
              </p>
              <button
                onClick={() => onNavigate('process')}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Explore the 6-Step Process</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
                <span className="text-blue-400 font-bold block mb-1">Step 01</span>
                <span className="text-slate-200 font-medium">Business Analysis</span>
              </div>
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
                <span className="text-blue-400 font-bold block mb-1">Step 02</span>
                <span className="text-slate-200 font-medium">Audience Research</span>
              </div>
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
                <span className="text-blue-400 font-bold block mb-1">Step 03</span>
                <span className="text-slate-200 font-medium">Ad Strategy</span>
              </div>
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
                <span className="text-blue-400 font-bold block mb-1">Step 04</span>
                <span className="text-slate-200 font-medium">Campaign Setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Courses & Education Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
            Educational Curriculum
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Structured Meta Ads Training & Masterclasses
          </h2>
          <div className="inline-block p-2.5 bg-rose-950/20 border border-rose-900/50 rounded-lg text-xs text-rose-300 font-medium">
            “90% of Facebook ads fail because advertisers lack deep expertise in these critical areas.”
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Free Courses Card */}
          <div className="bg-[#080E1C] border border-slate-800 hover:border-emerald-700/60 transition-colors rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Free Course · Foundation Modules
                </span>
                <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                  Free Course
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Free Course</h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Foundational walkthroughs covering ad account configuration, competitor research, and high-affinity buyer persona analysis before spending ad capital.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 mb-6 border-t border-slate-800/80 pt-3">
                <div>• Module 1: Environment Setup & Ad Research</div>
                <div>• Module 2: Customer Analysis & Make Loyal Audience</div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('free-courses')}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Explore Free Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Paid Courses Card */}
          <div className="bg-[#080E1C] border border-slate-800 hover:border-blue-700/60 transition-colors rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg group">
            {/* Visual Cover Banner */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-900 border-b border-slate-800/80">
              <img
                src={paidCourseImg}
                alt="Advanced Meta Ads Mastery Program"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 text-[11px] font-bold bg-blue-600 text-white rounded shadow">
                  All 7 Modules Included
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Mastery Curriculum
                  </span>
                  <span className="text-[11px] font-mono text-blue-300 bg-blue-950/60 border border-blue-800 px-2 py-0.5 rounded">
                    All 7 Modules Packaged
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Advanced Meta Ads Mastery</h3>
                <p className="text-xs text-blue-400 font-medium mb-3">
                  বাংলায় ৭টি মডিউলের পূর্ণাঙ্গ প্র্যাকটিক্যাল মাস্টারক্লাস
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  ফাউন্ডেশন ২টি মডিউল সহ মোট ৭টি স্পেশালাইজড মডিউল: রিটার্গেটিং, সেলস কপিরাইটিং, এ/বি টেস্টিং, সার্ভার-সাইড ট্র্যাকিং (GTM/CAPI) এবং প্রফিট অ্যানালাইসিস।
                </p>
                <div className="space-y-1 text-xs text-slate-400 mb-6 border-t border-slate-800/80 pt-3">
                  <div>• Module 1: Environment Setup & Ad Research</div>
                  <div>• Module 2: Customer Analysis & Make Loyal Audience</div>
                  <div>• Module 3: Custom, Lookalike & Retargeting Ads</div>
                  <div>• Module 4: Powerful Ad Copy & Sales Content</div>
                  <div>• Module 5: Make High Profitable Ads with A/B Testing</div>
                  <div>• Module 6: Pixel & Server-Side Tracking (GTM/CAPI)</div>
                  <div>• Module 7: Analysis Ad Metrics for Better Performance</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('paid-courses')}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>View Paid Mastery Program (All 7 Modules)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Direct Contact CTA strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-blue-900/60 bg-gradient-to-b from-blue-950/20 to-slate-950 p-8 sm:p-12 rounded-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Ready to Discuss Your Advertising Goals?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Reach out directly to review your target market, past campaign performance, or explore which service fits your current stage.
          </p>
          <button
            onClick={() => onOpenContact('General Inquiry')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 shadow-md"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
