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
  HelpCircle,
  MessageCircle
} from 'lucide-react';
import { ServiceItem, userWorkstationImg } from '../config/brandConfig';
import { useLanguage } from '../context/LanguageContext';
import { useSiteData } from '../context/SiteDataContext';

interface ServicesPageProps {
  onOpenContact: (serviceTitle: string) => void;
}

const getIcon = (name: string) => {
  switch (name) {
    case 'Megaphone': return <Megaphone className="w-5 h-5 text-blue-600" />;
    case 'Compass': return <Compass className="w-5 h-5 text-blue-600" />;
    case 'Users': return <Users className="w-5 h-5 text-blue-600" />;
    case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-blue-600" />;
    case 'Share2': return <Share2 className="w-5 h-5 text-blue-600" />;
    case 'PenTool': return <PenTool className="w-5 h-5 text-blue-600" />;
    case 'BarChart3': return <BarChart3 className="w-5 h-5 text-blue-600" />;
    case 'Layout': return <Layout className="w-5 h-5 text-blue-600" />;
    default: return <Megaphone className="w-5 h-5 text-blue-600" />;
  }
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenContact }) => {
  const { language } = useLanguage();
  const { servicesData, brandConfig } = useSiteData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header & Feature Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            {language === 'bn' ? 'আমাদের বিজ্ঞাপন সেবাসমূহ' : 'Client Growth Services'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {language === 'bn' ? 'হাই-ইমপ্যাক্ট ডিজিটাল অ্যাডভার্টাইজিং সার্ভিস' : 'High-Impact Digital Advertising Services'}
          </h1>
          <p className="text-sm sm:text-base text-blue-600 font-semibold mb-4">
            {language === 'bn'
              ? 'আপনার ব্যবসার সেলস ও নতুন কাস্টমার বৃদ্ধির জন্য রেজাল্ট-ওরিয়েন্টেড মেটা অ্যাডস সলিউশন'
              : 'Result-oriented Meta ads solutions for growing online orders and qualified leads.'}
          </p>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            {language === 'bn'
              ? 'আমরা কেবল বুস্টিং বা অ্যাড রান করি না—বরং সঠিক ক্রেতা বিশ্লেষণ, আকর্ষণীয় সেলস কপি ও ফুল ফানেল স্ট্র্যাটেজির মাধ্যমে বিজ্ঞাপনের প্রতিটি ডলারকে লাভজনক বিক্রিতে রূপান্তর করি।'
              : 'We do not just press boost. We research your customer avatar, craft high-converting ad copy, configure pixel tracking, and actively manage budgets to drive positive ROAS.'}
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md">
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img
                src={userWorkstationImg}
                alt="Md Abdur Rahman - Campaign Strategy Operations"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span className="text-slate-900 font-bold">Done-For-You Client Suite</span>
              <span className="text-blue-600 font-semibold">
                {language === 'bn' ? '৮টি স্পেশালাইজড সার্ভিস' : '8 Specialized Services'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid (All 8 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service: ServiceItem) => (
          <div
            key={service.id}
            className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-blue-400 transition-all hover:shadow-md shadow-sm"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center mb-5">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 tracking-tight">
                {language === 'bn' ? service.bengaliSubtitle : service.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                {language === 'bn' ? service.fullDesc : service.shortDesc}
              </p>

              {/* Deliverables list */}
              <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                  {language === 'bn' ? 'কী কী সুবিধা পাচ্ছেন:' : 'Key Deliverables:'}
                </span>
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action button */}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => onOpenContact(`Inquiry for Service: ${service.title}`)}
                className="w-full py-2.5 px-4 bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white text-xs font-semibold rounded-lg border border-slate-200 hover:border-blue-600 transition-all flex items-center justify-center gap-2 cursor-pointer group shadow-xs"
              >
                <span>{language === 'bn' ? 'এই সার্ভিসটি নিতে চাই' : 'Inquire For This Service'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Service Consultation Strip */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {language === 'bn' ? 'আপনার ব্যবসার জন্য কোন সার্ভিসটি সবচেয়ে উপযুক্ত তা বুঝতে পারছেন না?' : 'Unsure Which Service Fits Your Current Stage?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              {language === 'bn'
                ? 'আমরা আপনার পেজ, প্রোডাক্ট এবং বাজেট বিশ্লেষণ করে জানিয়ে দেব কীভাবে শুরু করলে সবচেয়ে ভালো ফল পাবেন।'
                : 'We will review your current website, page, and past advertising efforts to recommend the right plan.'}{' '}
              WhatsApp: <span className="text-slate-900 font-mono font-bold">01883423076</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/8801883423076?text=Hello%20Rahman,%20I%20would%20like%20to%20discuss%20advertising%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp (01883423076)</span>
          </a>

          <button
            onClick={() => onOpenContact('Service Consultation')}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 shadow-xs"
          >
            <span>{language === 'bn' ? 'পরামর্শ বুক করুন' : 'Request Consultation'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
