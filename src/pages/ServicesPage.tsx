import React from 'react';
import { 
  Megaphone, 
  Compass, 
  Users, 
  ShoppingBag, 
  Share2, 
  PenTool, 
  BarChart3, 
  Layout, 
  ArrowRight,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { servicesData, ServiceItem, brandConfig } from '../config/brandConfig';
import serviceImg from '../assets/images/service_meta_ads_1792379420558.jpg';

interface ServicesPageProps {
  onOpenContact: (serviceTitle: string) => void;
}

const getIcon = (name: string) => {
  switch (name) {
    case 'Megaphone': return <Megaphone className="w-5 h-5 text-blue-400" />;
    case 'Compass': return <Compass className="w-5 h-5 text-blue-400" />;
    case 'Users': return <Users className="w-5 h-5 text-blue-400" />;
    case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-blue-400" />;
    case 'Share2': return <Share2 className="w-5 h-5 text-blue-400" />;
    case 'PenTool': return <PenTool className="w-5 h-5 text-blue-400" />;
    case 'BarChart3': return <BarChart3 className="w-5 h-5 text-blue-400" />;
    case 'Layout': return <Layout className="w-5 h-5 text-blue-400" />;
    default: return <Megaphone className="w-5 h-5 text-blue-400" />;
  }
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenContact }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header & Feature Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
            Client Growth Services · আমাদের বিজ্ঞাপন সেবাসমূহ
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            High-Impact Digital Advertising Services
          </h1>
          <p className="text-sm sm:text-base text-blue-300 font-medium mb-4">
            আপনার ব্যবসার সেলস ও নতুন কাস্টমার বৃদ্ধির জন্য রেজাল্ট-ওরিয়েন্টেড মেটা অ্যাডস সলিউশন
          </p>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            আমরা কেবল বুস্টিং বা অ্যাড রান করি না—বরং সঠিক ক্রেতা বিশ্লেষণ, আকর্ষণীয় সেলস কপি ও ফুল ফানেল স্ট্র্যাটেজির মাধ্যমে বিজ্ঞাপনের প্রতিটি ডলারকে লাভজনক বিক্রিতে রূপান্তর করি।
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#091120] shadow-xl">
            <img
              src={serviceImg}
              alt="Digital Advertising Optimization Framework"
              referrerPolicy="no-referrer"
              className="w-full h-52 sm:h-64 object-cover"
            />
            <div className="p-4 bg-[#080E1A] border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span className="text-slate-200 font-semibold">Done-For-You Client Suite</span>
              <span className="text-blue-400">৮টি প্রফেশনাল সার্ভিস</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid (All 8 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service: ServiceItem) => (
          <div
            key={service.id}
            className="bg-[#080F1E] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-lg hover:shadow-blue-950/20"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-5">
                {getIcon(service.icon)}
              </div>

              <h3 className="text-lg font-bold text-white mb-0.5 tracking-tight">
                {service.title}
              </h3>
              <p className="text-xs text-blue-400 font-semibold mb-3">
                {service.bengaliSubtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                {service.fullDesc}
              </p>

              {/* Deliverables list */}
              <div className="space-y-2 mb-6 pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  কী কী সুবিধা পাচ্ছেন:
                </span>
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action button */}
            <div className="pt-4 border-t border-slate-800/80">
              <button
                onClick={() => onOpenContact(`Inquiry for Service: ${service.title}`)}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold rounded-lg border border-slate-700/80 hover:border-blue-500 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>এই সার্ভিসটি নিতে চাই (Inquire Now)</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Service Consultation Strip with Direct WhatsApp & Telegram */}
      <div className="bg-[#080E1C] border border-slate-800 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              আপনার ব্যবসার জন্য কোন সার্ভিসটি সবচেয়ে উপযুক্ত তা বুঝতে পারছেন না?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              আমরা আপনার পেজ, প্রোডাক্ট এবং বাজেট বিশ্লেষণ করে জানিয়ে দেব কীভাবে শুরু করলে সবচেয়ে ভালো ফল পাবেন। WhatsApp / Telegram: <span className="text-white font-mono font-bold">01883423076</span> | কল: <span className="text-white font-mono font-bold">01806755760</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={brandConfig.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
          >
            <span>Facebook Page</span>
          </a>

          <button
            onClick={() => onOpenContact('Service Consultation')}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a
            href="https://wa.me/8801883423076?text=Hello%20Rahman,%20I%20would%20like%20to%20discuss%20advertising%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
          >
            <span>WhatsApp (01883423076)</span>
          </a>
        </div>
      </div>

    </div>
  );
};
