import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'bn' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  bn: {
    // Nav
    'nav.home': 'হোম',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.services': 'সার্ভিসসমূহ',
    'nav.process': 'কাজের ধাপ',
    'nav.portfolio': 'পোর্টফোলিও',
    'nav.pricing': 'প্রাইসিং',
    'nav.freeCourses': 'ফ্রি কোর্স',
    'nav.paidCourses': 'পেইড কোর্স',
    'nav.faq': 'এফএকিউ',
    'nav.contact': 'যোগাযোগ',
    'nav.contactUs': 'যোগাযোগ করুন',
    'nav.back': 'পেছনে ফিরে যান',
    'nav.tagline': 'ডিজিটাল মার্কেটিং ও বিজ্ঞাপন',

    // Hero
    'hero.badge': 'মেটা বিজ্ঞাপন স্পেশালিস্ট',
    'hero.title': 'পরিকল্পিত ও ডেটা-নির্ভর বিজ্ঞাপনে আপনার ব্যবসার সেলস বৃদ্ধি করুন',
    'hero.subtitle': 'মেটা প্ল্যাটফর্মে (ফেসবুক ও ইনস্টাগ্রাম) সঠিক অডিয়েন্স রিসার্চ, ক্যাম্পেইন সেটআপ ও লাভজনক সেলস স্কেলিং।',
    'hero.ctaServices': 'সার্ভিসসমূহ দেখুন',
    'hero.ctaContact': 'পরামর্শ নিন',
    'hero.pillar1': 'সঠিক অডিয়েন্স রিসার্চ',
    'hero.pillar2': 'স্বচ্ছ পারফরম্যান্স রিপোর্ট',
    'hero.pillar3': 'ফুল-ফানেল ক্যাম্পেইন সেটআপ',
    'hero.liveMonitoring': 'লাইভ মনিটরিং',
    'hero.operationsCenter': 'ক্যাম্পেইন অপারেশনস ডেস্ক',
    'hero.leadCaption': 'মো: আব্দুর রহমান · ক্যাম্পেইন স্পেশালিস্ট',

    // About Preview
    'about.kicker': 'আমাদের সম্পর্কে',
    'about.title': 'বাস্তবধর্মী ও সুশৃঙ্খল অনলাইন বিজ্ঞাপন',
    'about.desc': 'রহমান্স অ্যাডস ক্যাম্পেইনে আমরা বিজ্ঞানসম্মত বাজার বিশ্লেষণ, কার্যকর কনটেন্ট এবং সঠিক টেকনিক্যাল সেটআপের মাধ্যমে আপনার বিজ্ঞাপনের সর্বোচ্চ রিটার্ন নিশ্চিত করি।',
    'about.point1Title': 'আসল ক্রেতা চিহ্নিতকরণ',
    'about.point1Desc': 'বিজ্ঞাপনে অর্থ খরচের আগেই আপনার আসল ক্রেতা কারা তা বিশ্লেষণ ও নির্ধারণ করা।',
    'about.point2Title': 'সম্পূর্ণ স্বচ্ছতা',
    'about.point2Desc': 'বিজ্ঞাপনের খরচ সরাসরি আপনার নিজস্ব মেটা কার্ড থেকে কাটা হবে।',
    'about.founderKicker': 'ক্যাম্পেইন লিডারশিপ',
    'about.founderName': 'মো: আব্দুর রহমান',
    'about.founderRole': 'প্রতিষ্ঠাতা ও পারফরম্যান্স মার্কেটিং স্পেশালিস্ট',
    'about.founderBio': 'মেটা বিজ্ঞাপন ও পারফরম্যান্স মার্কেটিং স্পেশালিস্ট। সঠিক অডিয়েন্স রিসার্চ, সেলস ফানেল অপটিমাইজেশন ও লাভজনক বিজনেস গ্রোথ।',

    // Services Preview
    'services.kicker': 'আমাদের সার্ভিস',
    'services.title': 'বিশেষায়িত মেটা বিজ্ঞাপন সেবা',
    'services.subtitle': 'বাস্তব ফলাফল, স্বচ্ছ বাজেট নিয়ন্ত্রণ এবং ধারাবাহিক সেলস বৃদ্ধি।',
    'services.viewAll': 'সব সার্ভিস দেখুন',
    'services.requestCustom': 'প্যাকেজ সংক্রান্ত আলোচনা',

    // Courses Preview
    'courses.kicker': 'মেটা অ্যাডস প্রশিক্ষণ',
    'courses.freeTitle': '২টি সম্পূর্ণ ফ্রি ফাউন্ডেশন কোর্স',
    'courses.freeSubtitle': 'কোনো ফি ছাড়াই মেটা অ্যাডস অ্যাকাউন্ট সেটআপ ও মার্কেট রিসার্চের মৌলিক নিয়ম শিখুন।',
    'courses.freeBadge': '১০০% ফ্রি ফাউন্ডেশন কোর্স',
    'courses.paidTitle': 'সম্পূর্ণ ৭-মডিউল মাস্টারক্লাস প্রোগ্রাম',
    'courses.paidSubtitle': 'অ্যাকাউন্ট সেটআপ, রিটার্গেটিং, সার্ভার-সাইড ট্র্যাকিং ও বাজেট স্কেলিং শেখার পূর্ণাঙ্গ কোর্স।',
    'courses.paidBadge': 'প্রফেশনাল পেইড কোর্স',
    'courses.enrollWhatsApp': 'WhatsApp-এ ভর্তি তথ্য',
    'courses.viewDetails': 'বিস্তারিত সিলেবাস দেখুন',
    'courses.allCourses': 'সব কোর্স দেখুন',

    // Process
    'process.kicker': 'কাজের পদ্ধতি',
    'process.title': 'ধাপে ধাপে সুশৃঙ্খল ক্যাম্পেইন পরিচালনা',
    'process.subtitle': 'কোনো প্রকার অনুমাননির্ভর নয়, বরং সম্পূর্ণ সুনির্দিষ্ট ও কাঠামোগত প্রক্রিয়ায় প্রতিটি ক্যাম্পেইন পরিচালিত হয়।',

    // CTA Global
    'cta.title': 'আপনার ব্যবসার সেলস বাড়াতে প্রস্তুত?',
    'cta.subtitle': 'আজই আমাদের সাথে যোগাযোগ করুন। আপনার বর্তমান বিজ্ঞাপন ও বিজনেস পর্যালোচনা করে কার্যকর দিকনির্দেশনা প্রদান করব।',
    'cta.whatsappBtn': 'WhatsApp-এ কথা বলুন',
    'cta.contactBtn': 'মেসেজ পাঠান',

    // Footer
    'footer.desc': 'ব্যবসা ও ই-কমার্স ব্র্যান্ডের জন্য মেটা প্ল্যাটফর্মে ডেটা-নির্ভর পারফরম্যান্স বিজ্ঞাপন সেবা।',
    'footer.billingNotice': 'স্বচ্ছ ব্যবস্থাপনা: বিজ্ঞাপনের বাজেট সরাসরি আপনার নিজস্ব মেটা কার্ড থেকে কাটা হয়।',
    'footer.navigation': 'নেভিগেশন',
    'footer.offerings': 'সার্ভিস ও এফএকিউ',
    'footer.connect': 'যোগাযোগ',
    'footer.officialFb': 'অফিশিয়াল ফেসবুক পেজ',
    'footer.allRights': 'সর্বস্বত্ব সংরক্ষিত।',
    'footer.tag1': 'স্বচ্ছ মার্কেটিং',
    'footer.tag2': 'মেটা অ্যাডস স্ট্র্যাটেজি',

    // Contact Modal & Page
    'contact.title': 'যোগাযোগ ও ইনকোয়ারি',
    'contact.subtitle': 'নিচের ফর্মটি পূরণ করুন অথবা সরাসরি WhatsApp-এ বার্তা পাঠান।',
    'contact.name': 'আপনার পুরো নাম',
    'contact.email': 'ইমেইল ঠিকানা',
    'contact.phone': 'ফোন / WhatsApp নম্বর',
    'contact.business': 'ব্যবসা / ব্র্যান্ডের নাম',
    'contact.service': 'প্রয়োজনীয় সার্ভিস বা কোর্স',
    'contact.message': 'আপনার মেসেজ বা বিস্তারিত বিবরণ',
    'contact.submit': 'মেসেজ পাঠান',
    'contact.submitting': 'পাঠানো হচ্ছে...',
    'contact.success': 'ধন্যবাদ! আপনার বার্তাটি সফলভাবে জমা হয়েছে। অতি দ্রুত যোগাযোগ করা হবে।',
    'contact.directWhatsapp': 'WhatsApp-এ চ্যাট করুন',
    'contact.directTelegram': 'Telegram-এ যোগাযোগ করুন',
    'contact.callDirect': 'সরাসরি কল করুন',
    'contact.transparency': 'স্বচ্ছ ব্যবস্থাপনা: বিজ্ঞাপনের বাজেট সরাসরি আপনার নিজস্ব কার্ড থেকে মেটা প্ল্যাটফর্মে কাটা হয়।',
    'hero.ethical': 'স্বচ্ছ ব্যবস্থাপনা: বিজ্ঞাপনের বাজেট সরাসরি আপনার নিজস্ব কার্ড থেকে মেটা প্ল্যাটফর্মে কাটা হয়।',

    // Lang toggle
    'lang.current': 'বাংলা',
    'lang.switch': 'English',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.process': 'Our Process',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.freeCourses': 'Free Courses',
    'nav.paidCourses': 'Paid Courses',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact Us',
    'nav.contactUs': 'Contact Us',
    'nav.back': 'Go Back',
    'nav.tagline': 'Digital Marketing & Advertising',

    // Hero
    'hero.badge': 'Meta Ads Specialist',
    'hero.title': 'Grow Your Business Through Structured, Data-Informed Digital Advertising',
    'hero.subtitle': 'Precision audience research, high-converting campaigns, and profitable scaling on Meta platforms (Facebook & Instagram).',
    'hero.ctaServices': 'Explore Services',
    'hero.ctaContact': 'Book Consultation',
    'hero.pillar1': 'Target Audience Research',
    'hero.pillar2': 'Transparent Reporting',
    'hero.pillar3': 'Full-Funnel Campaign Setup',
    'hero.liveMonitoring': 'Live Monitoring',
    'hero.operationsCenter': 'Campaign Operations Desk',
    'hero.leadCaption': 'Md Abdur Rahman · Ads Specialist',

    // About Preview
    'about.kicker': 'About Us',
    'about.title': 'Practical, Results-Focused Meta Advertising',
    'about.desc': "At RAHMAN'S ADS CAMPAIGN, we combine careful market research, conversion copy, and disciplined technical configuration to deliver measurable business growth.",
    'about.point1Title': 'Target Audience Clarity',
    'about.point1Desc': 'Identifying your ideal customers before spending ad budget.',
    'about.point2Title': 'Full Financial Transparency',
    'about.point2Desc': 'Ad spend stays directly inside your own Meta billing account.',
    'about.founderKicker': 'Campaign Leadership',
    'about.founderName': 'Md Abdur Rahman',
    'about.founderRole': 'Founder & Performance Marketing Specialist',
    'about.founderBio': 'Meta Ads & Performance Marketing Specialist. Dedicated to audience research, sales funnel optimization, and profitable scaling.',

    // Services Preview
    'services.kicker': 'Core Services',
    'services.title': 'Focused Digital Advertising Capabilities',
    'services.subtitle': 'Measurable results, disciplined budget management, and continuous optimization.',
    'services.viewAll': 'View All Services',
    'services.requestCustom': 'Discuss Custom Package',

    // Courses Preview
    'courses.kicker': 'Practical Training',
    'courses.freeTitle': '2 Foundation Courses (100% Free)',
    'courses.freeSubtitle': 'Learn ad account setup and competitor research fundamentals at zero fee.',
    'courses.freeBadge': '100% Free Foundation Course',
    'courses.paidTitle': 'Complete 7-Module Mastery Program',
    'courses.paidSubtitle': 'End-to-end curriculum from setup to retargeting, server-side tracking, and scaling.',
    'courses.paidBadge': 'Professional Paid Program',
    'courses.enrollWhatsApp': 'Enroll on WhatsApp',
    'courses.viewDetails': 'View Full Curriculum',
    'courses.allCourses': 'Explore All Courses',

    // Process
    'process.kicker': 'Methodology',
    'process.title': 'Our 5-Stage Advertising Workflow',
    'process.subtitle': 'A structured, repeatable framework from research to sustainable scaling.',

    // CTA Global
    'cta.title': 'Ready to Scale Your Online Customer Acquisition?',
    'cta.subtitle': 'Get in touch today for a direct review of your advertising strategy and practical next steps.',
    'cta.whatsappBtn': 'Chat on WhatsApp',
    'cta.contactBtn': 'Send an Inquiry',

    // Footer
    'footer.desc': 'Performance advertising tailored for small businesses and e-commerce stores on Meta platforms.',
    'footer.billingNotice': 'Transparent management: Ad spend is billed directly by Meta to your own payment method.',
    'footer.navigation': 'Navigation',
    'footer.offerings': 'Offerings & FAQ',
    'footer.connect': 'Connect With Us',
    'footer.officialFb': 'Official Facebook Page',
    'footer.allRights': 'All rights reserved.',
    'footer.tag1': 'Transparent Marketing',
    'footer.tag2': 'Meta Ads Strategy',

    // Contact Modal & Page
    'contact.title': 'Contact & Inquiry',
    'contact.subtitle': 'Fill in your details below or connect directly via WhatsApp for an immediate response.',
    'contact.name': 'Your Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone / WhatsApp Number',
    'contact.business': 'Business / Brand Name',
    'contact.service': 'Service or Course of Interest',
    'contact.message': 'Project Details or Message',
    'contact.submit': 'Submit Inquiry',
    'contact.submitting': 'Submitting...',
    'contact.success': 'Thank you! Your inquiry has been submitted. We will follow up shortly.',
    'contact.directWhatsapp': 'Chat on WhatsApp Directly',
    'contact.directTelegram': 'Contact on Telegram',
    'contact.callDirect': 'Call Directly',
    'contact.transparency': 'Transparent management: Ad spend is billed directly by Meta to your own payment method.',
    'hero.ethical': 'Transparent management: Ad spend is billed directly by Meta to your own payment method.',

    // Lang toggle
    'lang.current': 'English',
    'lang.switch': 'বাংলা',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved === 'bn' || saved === 'en') ? saved : 'bn';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'bn' ? 'en' : 'bn');
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
