/**
 * Brand Configuration for RAHMAN'S ADS CAMPAIGN
 * 
 * Edit this file to update contact details, social links, or course offerings.
 * Real numbers and links will appear automatically across the site.
 */

import freeCourseImg from '../assets/images/course_free_fundamentals_1792379421596.jpg';
import paidCourseImg from '../assets/images/course_paid_mastery_1792379421028.jpg';
import heroImg from '../assets/images/hero_digital_marketing_1792379419473.jpg';
import adCopyImg from '../assets/images/course_ad_copy_1792381123972.jpg';
import pixelTrackingImg from '../assets/images/course_pixel_tracking_1792381125203.jpg';
import abTestingImg from '../assets/images/course_ab_testing_1792381124558.jpg';

export { heroImg, paidCourseImg };

export interface BrandConfig {
  brandName: string;
  tagline: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  founder: {
    name: string;
    role: string;
    bengaliBio: string;
  };
  contact: {
    email: string;
    phone: string;
    optionalPhone: string;
    whatsappNumber: string;
    telegramNumber: string;
    location: string;
    availability: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    telegram: string;
  };
}

export const brandConfig: BrandConfig = {
  brandName: "RAHMAN'S ADS CAMPAIGN",
  tagline: "Strategic Digital Marketing & High-Impact Advertising Services",
  subtitle: "Helping small businesses, entrepreneurs, and e-commerce brands scale predictably with data-informed Meta advertising campaigns.",
  description: "At RAHMAN'S ADS CAMPAIGN, we specialize in building, testing, and optimizing digital advertising campaigns across Meta platforms. From targeted lead generation to e-commerce customer acquisition, our focus is structured execution and measurable business growth.",
  targetAudience: "Small businesses, ambitious entrepreneurs, e-commerce storefronts, and emerging brands seeking sustainable online customer acquisition.",
  founder: {
    name: "Md Abdur Rahman",
    role: "Founder & Campaign Operations Lead",
    bengaliBio: "মেটা বিজ্ঞাপন ও পারফরম্যান্স মার্কেটিং স্পেশালিস্ট। সঠিক অডিয়েন্স রিসার্চ, সেলস ফানেল অপটিমাইজেশন ও লাভজনক বিজনেস স্কেলিংয়ে প্রতিশ্রুতিবদ্ধ।"
  },
  contact: {
    email: "hmabdurrahman9082@gmail.com",
    phone: "01883423076",
    optionalPhone: "01806755760",
    whatsappNumber: "01883423076", 
    telegramNumber: "01883423076",
    location: "Global Remote / Online Services",
    availability: "Direct WhatsApp & Telegram: 01883423076 | Call: 01806755760"
  },
  socialLinks: {
    facebook: "https://www.facebook.com/share/1Exps4wTtq/",
    instagram: "",
    linkedin: "",
    youtube: "",
    telegram: "https://t.me/+8801883423076"
  }
};

export interface ServiceItem {
  id: string;
  title: string;
  bengaliSubtitle: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "ecommerce-sales-scaling",
    title: "E-Commerce Sales Growth & Scaling",
    bengaliSubtitle: "ই-কমার্স সেলস বৃদ্ধি ও লাভজনক স্কেলিং",
    shortDesc: "Drive consistent daily online purchases, maximize ROAS, and profitably scale winning ad campaigns.",
    fullDesc: "অনলাইন শপ বা ইকমার্স ওয়েবসাইটের জন্য প্রফিটেবল পারচেজ ক্যাম্পেইন পরিচালনা, ক্যাটালগ অ্যাড সেটআপ এবং লোকসান ছাড়া লাভজনকভাবে সেলস দ্বিগুণ করার স্ট্র্যাটেজি।",
    deliverables: [
      "প্রতিদিন ধারাবাহিক অর্ডার আনার জন্য পারচেজ কনভার্শন ক্যাম্পেইন",
      "ডাইনামিক প্রডাক্ট ক্যাটালগ ও ক্যারোসেল অ্যাড সেটআপ",
      "হাই ROAS (Return on Ad Spend) নিশ্চিত করতে উইনিং অ্যাড স্কেলিং",
      "বিজ্ঞাপনের অপচয় রোধে প্রতিদিনের পারফরম্যান্স মনিটরিং"
    ],
    icon: "ShoppingBag"
  },
  {
    id: "high-ticket-lead-generation",
    title: "High-Ticket Lead Generation",
    bengaliSubtitle: "কোয়ালিটি লিড জেনারেশন ও কাস্টমার ইনকোয়ারি",
    shortDesc: "Stop receiving low-intent clicks. Attract qualified prospects ready to book consultations and buy.",
    fullDesc: "রিয়েল এস্টেট, কনসাল্টিং, ক্লিনিক, কোচিং বা হাই-ভ্যালু সার্ভিসের জন্য অপ্রয়োজনীয় মানুষের মেসেজের বদলে আসল ক্রেতাদের ফোন নম্বর ও সিরিয়াস ইনকোয়ারি সংগ্রহ করা।",
    deliverables: [
      "ফেসবুক ও ইনস্টাগ্রাম ইনস্ট্যান্ট লিড ফরম সেটআপ",
      "সরাসরি WhatsApp-এ হাই-ইনটেন্ট কাস্টমার মেসেজ ফানেল",
      "কাস্টমার স্ক্রিনিং যাতে কেবল সিরিয়াস বায়াররাই যোগাযোগ করে",
      "ইনস্ট্যান্ট লিড নোটিফিকেশন ও দ্রুত ফলো-আপ স্ট্র্যাটেজি"
    ],
    icon: "Users"
  },
  {
    id: "full-funnel-campaign-management",
    title: "Full-Funnel Done-For-You Ads Management",
    bengaliSubtitle: "সম্পূর্ণ ফেসবুক ও ইনস্টাগ্রাম অ্যাড ক্যাম্পেইন পরিচালনা",
    shortDesc: "End-to-end advertising operations handled by our team so you can focus 100% on running your business.",
    fullDesc: "স্ট্র্যাটেজি থেকে শুরু করে দৈনিক বাজেট নিয়ন্ত্রণ, বিড অপটিমাইজেশন, কপিরাইটিং ও ট্র্যাকিং—বিজ্ঞাপন সংক্রান্ত সব দায়িত্ব আমাদের টিম প্রফেশনালভাবে পরিচালনা করবে।",
    deliverables: [
      "ক্যাম্পেইনের এ টু জেড ফুল হ্যান্ডলিং ও দৈনিক সার্বক্ষণিক মনিটরিং",
      "অকার্যকর অ্যাড দ্রুত বন্ধ করে উইনিং অ্যাডে বাজেট রি-অ্যালোকেট করা",
      "প্রতি সপ্তাহে স্বচ্ছ পারফরম্যান্স রিপোর্ট ও ভবিষ্যৎ স্কেলিং প্ল্যান",
      "WhatsApp ও Telegram-এ (01883423076) সার্বক্ষণিক সরাসরি সাপোর্ট"
    ],
    icon: "Megaphone"
  },
  {
    id: "ad-creative-copywriting",
    title: "High-Converting Creative & Copywriting",
    bengaliSubtitle: "স্ক্রোল-স্টপিং অ্যাড ডিজাইন ও সেলস কপিরাইটিং",
    shortDesc: "3-second video hooks, high-CTR visuals, and psychological sales copy that compel visitors to buy.",
    fullDesc: "সোশ্যাল মিডিয়ায় মানুষের চোখ আটকে ফেলার মতো ৩-সেকেন্ডের ভিডিও হুক, আকর্ষণীয় ব্যানার আইডিয়া এবং AIDA/PAS ফর্মুলায় ক্রেতাকে কিনতে আগ্রহী করার মতো সেলস টেক্সট।",
    deliverables: [
      "প্রথম ৩-সেকেন্ডে কাস্টমারকে থামিয়ে দেওয়ার মতো হুক ও হেডলাইন",
      "সাইকোলজিক্যাল সেলস কপিরাইটিং (যা কাস্টমারকে অর্ডার করতে বাধ্য করে)",
      "ইমেজ ব্যানার ও শর্ট ভিডিও অ্যাডের হাই-কনভার্টিং ডিজাইন স্ক্রিপ্ট",
      "মেটা পলিসি ১০০% মেনে চলা যাতে কোনো অ্যাড রিজেক্ট বা অ্যাকাউন্ট ব্যান না হয়"
    ],
    icon: "PenTool"
  },
  {
    id: "retargeting-cart-recovery",
    title: "Advanced Retargeting & Cart Recovery Engine",
    bengaliSubtitle: "রিটার্গেটিং ফানেল—হারিয়ে যাওয়া ৯৫% ক্রেতা ফিরিয়ে আনা",
    shortDesc: "Re-engage visitors who browsed products or abandoned cart without purchasing, turning lost traffic into profit.",
    fullDesc: "যারা আপনার পেজে মেসেজ দিয়েছে বা ওয়েবসাইটে এসেও কেনেনি, তাদেরকে বিশেষ অফার ও রিমাইন্ডার দেখিয়ে সবচেয়ে কম খরচে কাস্টমারে রূপান্তর করা।",
    deliverables: [
      "ওয়েবসাইট ভিজিটর, পেজে মেসেজ দেওয়া ও ভিডিও ভিউয়ার্সদের রিটার্গেটিং",
      "সেরা ক্রেতাদের মতো ১% থেকে ৫% নতুন হাই-ভ্যালু লুকঅ্যালাইক কাস্টমার আনা",
      "টাইম-ডিকে ফানেল (৩ দিন, ৭ দিন ও ১৪ দিনে আলাদা আলাদা অফার দিয়ে কেনানো)",
      "অলরেডি যারা কিনে ফেলেছে তাদের বাদ দিয়ে বিজ্ঞাপনের বাজেট বাঁচানো"
    ],
    icon: "Share2"
  },
  {
    id: "server-side-tracking-fix",
    title: "Server-Side Tracking & Pixel Setup (GTM / CAPI)",
    bengaliSubtitle: "মেটা পিক্সেল ও সার্ভার ট্র্যাকিং—iOS ডেটা ফিক্স",
    shortDesc: "Bypass iOS privacy restrictions and ad blockers with Google Tag Manager and Conversions API.",
    fullDesc: "বিজ্ঞাপনে প্রতিটি সেলস ও অর্ডারের নিখুঁত হিসাব পাওয়া, যাতে মেটা অ্যালগরিদম ঠিকমতো বুঝতে পারে কারা আসল ক্রেতা এবং কম খরচে বেশি সেলস এনে দেয়।",
    deliverables: [
      "Google Tag Manager (GTM) ওয়েব ও ক্লাউড সার্ভার কন্টেইনার সেটআপ",
      "Meta Conversions API (CAPI) ফুল ট্র্যাকিং ইন্টিগ্রেশন",
      "iOS 14+ আপডেট ও ব্রাউজার অ্যাড-ব্লকার সত্ত্বেও ১০০% ডেটা ট্র্যাকিং",
      "ভিউ-কনটেন্ট, অ্যাড-টু-কার্ট থেকে পারচেজ পর্যন্ত প্রতিটা ইভেন্ট ভেরিফিকেশন"
    ],
    icon: "Layout"
  },
  {
    id: "account-audit-protection",
    title: "Meta Business Manager Audit & Ban Protection",
    bengaliSubtitle: "অ্যাড অ্যাকাউন্ট অডিট ও ব্যান প্রটেকশন",
    shortDesc: "Secure your ad assets, remove policy violations, and eliminate wasted budget from previous campaigns.",
    fullDesc: "অ্যাকাউন্ট রেস্ট্রিক্ট বা ব্যান হওয়া থেকে বাঁচানো এবং অতীতে বিজ্ঞাপনে কোথায় টাকা অপচয় হয়েছে তা অডিট করে সঠিক সমাধান নিশ্চিত করা।",
    deliverables: [
      "মেটা বিজনেস ম্যানেজার ও সিকিউরিটি ফুল অডিট",
      "2-ফ্যাক্টর অথেনটিকেশন ও ডলার পেমেন্ট মেথড প্রটেকশন",
      "অতীতে চালানো বিজ্ঞাপনের ভুল ও বাজেট অপচয়ের জায়গা চিহ্নিতকরণ",
      "মেটার পলিসি ভায়োলেশন রিমুভ ও নিরাপদ অ্যাকাউন্ট স্ট্রাকচার"
    ],
    icon: "Compass"
  },
  {
    id: "landing-page-cro",
    title: "Landing Page & Conversion Rate Optimization",
    bengaliSubtitle: "ল্যান্ডিং পেজ ও সেলস কনভার্শন অপটিমাইজেশন",
    shortDesc: "Turn more existing traffic into paying customers by streamlining your offer, checkout speed, and mobile UX.",
    fullDesc: "বিজ্ঞাপন থেকে ওয়েবসাইটে ভিজিটর আসার পর যেন বেশি সংখ্যক মানুষ পণ্য কিনে, তার জন্য ল্যান্ডিং পেজের দুর্বলতা দূর করা ও বিক্রির হার বৃদ্ধি করা।",
    deliverables: [
      "ওয়েবসাইটের লোডিং স্পিড ও মোবাইল রেসপনসিভনেস অডিট",
      "অর্ডার ফর্ম সহজ করা যাতে কাস্টমার ঝামেলা ছাড়াই দ্রুত অর্ডার দিতে পারে",
      "ট্রাস্ট ব্যাজ, কাস্টমার রিভিউ ও ক্লিয়ার কল-টু-অ্যাকশন (CTA) সেটআপ",
      "ভিজিটর ড্রপ-অফ রেট কমিয়ে বিক্রির হার (Conversion Rate) বৃদ্ধি করা"
    ],
    icon: "BarChart3"
  }
];

export interface ProcessStep {
  stepNumber: string;
  title: string;
  bengaliSubtitle: string;
  description: string;
  keyAction: string;
}

export const processSteps: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Business & Goal Analysis",
    bengaliSubtitle: "বিজনেস মডেল ও লক্ষ্যের বিশ্লেষণ",
    description: "আপনার প্রডাক্ট, প্রফিট মার্জিন এবং টার্গেট সেলস নির্ধারণ করে সঠিক অ্যাড স্ট্র্যাটেজির রোডম্যাপ তৈরি করা।",
    keyAction: "ডিসকভারি আলোচনা ও অফার অডিট"
  },
  {
    stepNumber: "02",
    title: "Audience & Market Research",
    bengaliSubtitle: "টার্গেট কাস্টমার ও মার্কেট রিসার্চ",
    description: "আপনার প্রডাক্টের আসল ক্রেতা কারা, তাদের সমস্যা ও পছন্দ বিশ্লেষণ করে টার্গেটিং অডিয়েন্স নির্বাচন।",
    keyAction: "কাস্টমার পারসোনা ম্যাপিং"
  },
  {
    stepNumber: "03",
    title: "Advertising Funnel Strategy",
    bengaliSubtitle: "ক্যাম্পেইন ফানেল ও বাজেট প্ল্যান",
    description: "টপ-অব-ফানেল প্রস্পেক্টিং থেকে বটম-অব-ফানেল রিটার্গেটিং পর্যন্ত সুনির্দিষ্ট বাজেট ডিস্ট্রিবিউশন প্ল্যান।",
    keyAction: "ক্যাম্পেইন আর্কিটেকচার ব্লুপ্রিন্ট"
  },
  {
    stepNumber: "04",
    title: "Campaign Setup & Tracking",
    bengaliSubtitle: "অ্যাড সেটআপ ও পিক্সেল ভেরিফিকেশন",
    description: "অ্যাড ম্যানেজার কনফিগারেশন, ক্রিয়েটিভ-কপি আপলোড এবং ট্র্যাকিং পিক্সেল সঠিকভাবে কার্যকর করা।",
    keyAction: "মেটা অ্যাডস ম্যানেজার সেটআপ"
  },
  {
    stepNumber: "05",
    title: "Monitoring & Optimization",
    bengaliSubtitle: "মনিটরিং ও পারফরম্যান্স অপটিমাইজেশন",
    description: "লাইভ হওয়ার পর নিয়মিত ডেটা পর্যবেক্ষণ করে অকার্যকর অ্যাড বন্ধ করা এবং উইনিং অ্যাডে বাজেট রি-অ্যালোকেট করা।",
    keyAction: "নিয়মিত বিড ও বাজেট ম্যানেজমেন্ট"
  },
  {
    stepNumber: "06",
    title: "Performance Review & Scaling",
    bengaliSubtitle: "স্বচ্ছ রিভিউ ও ভবিষ্যৎ স্কেলিং",
    description: "সাপ্তাহিক স্বচ্ছ রিপোর্টের মাধ্যমে সেলস ও আরওএএস (ROAS) পর্যালোচনা করে পরবর্তী স্কেলিং বাস্তবায়ন।",
    keyAction: "অ্যাকশনেবল স্কেলিং রোডম্যাপ"
  }
];

export interface PortfolioPlaceholder {
  id: string;
  category: string;
  title: string;
  objective: string;
  description: string;
  isPlaceholder: boolean;
  statusLabel: string;
}

export const portfolioPlaceholders: PortfolioPlaceholder[] = [
  {
    id: "showcase-1",
    category: "E-commerce Growth",
    title: "E-commerce Retail Customer Acquisition",
    objective: "Catalog Sales & Conversion Retargeting",
    description: "Framework demonstration: Setting up multi-tiered funnel campaigns for online retail, combining broad prospecting with dynamic catalog retargeting.",
    isPlaceholder: true,
    statusLabel: "Demonstration Project Placeholder"
  },
  {
    id: "showcase-2",
    category: "Local Business Lead Gen",
    title: "Service Business Lead Capture Pipeline",
    objective: "Qualified Inbound Consultation Inquiries",
    description: "Framework demonstration: Utilizing Meta on-platform instant forms with custom screening questions to gather high-intent local customer inquiries.",
    isPlaceholder: true,
    statusLabel: "Demonstration Project Placeholder"
  },
  {
    id: "showcase-3",
    category: "Brand Launch",
    title: "New Venture Awareness & Community Acquisition",
    objective: "Targeted Audience Reach & Brand Positioning",
    description: "Framework demonstration: Orchestrating an initial multi-creative awareness burst followed by focused engagement retargeting for a new brand entrance.",
    isPlaceholder: true,
    statusLabel: "Demonstration Project Placeholder"
  }
];

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  features: string[];
  adSpendNote: string;
  recommendedFor: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For small businesses & founders launching their first focused ad campaigns.",
    features: [
      "1 Ad Network (Meta: Facebook & Instagram)",
      "Target audience research & persona setup",
      "Up to 2 active campaign setups",
      "Creative & copy guidance",
      "Bi-weekly performance summary",
      "Direct WhatsApp & Telegram communication"
    ],
    adSpendNote: "Advertising spend is paid directly to Meta and is separate from management fees.",
    recommendedFor: "New businesses testing paid advertising channels for the first time."
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For established businesses looking to systematically test and scale.",
    badge: "Most Popular",
    features: [
      "Full Meta Ads management (Facebook & Instagram)",
      "Comprehensive multi-tier funnel structure",
      "Continuous creative A/B testing & copy iterations",
      "Custom retargeting & lookalike audience buildout",
      "Server-side tracking (GTM / CAPI) monitoring",
      "Weekly performance reporting & KPI analysis",
      "Priority WhatsApp & Telegram support"
    ],
    adSpendNote: "Advertising spend is paid directly to Meta and is separate from management fees.",
    recommendedFor: "E-commerce stores and service businesses with proven product-market fit."
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Tailored campaign architecture for high-volume or multi-brand requirements.",
    features: [
      "Multi-channel strategy & advanced Meta architectures",
      "Dedicated conversion funnel & landing page audits",
      "Rapid creative iteration frameworks",
      "Custom reporting frequency & data reviews",
      "Direct consultation & scaling roadmap sessions",
      "Bespoke scope of work agreement"
    ],
    adSpendNote: "Advertising spend is paid directly to Meta and is separate from management fees.",
    recommendedFor: "Growing brands requiring dedicated strategic attention and customized scopes."
  }
];

export interface CourseItem {
  id: string;
  moduleNumber: string;
  title: string;
  bengaliSubtitle: string;
  shortDesc: string;
  level: string;
  topics: string[];
  imagePath: string;
  isPaid: boolean;
  isPlaceholder: boolean;
  statusLabel: string;
}

/* 2 Free Foundation Courses (Kept 100% Free as requested) */
export const freeCoursesData: CourseItem[] = [
  {
    id: "free-1-env-setup",
    moduleNumber: "Module 01",
    title: "Environment Setup & Ad Research",
    bengaliSubtitle: "অ্যাড অ্যাকাউন্ট সেটআপ ও সঠিক অ্যাড রিসার্চ মেথড",
    shortDesc: "টাকা খরচ করার আগেই জানুন কীভাবে মেটা বিজনেস ম্যানেজার নিরাপদে সেটআপ করবেন এবং প্রতিদ্বন্দীদের গোপন অ্যাড কৌশল ফ্রিতে বিশ্লেষণ করবেন।",
    level: "Beginner to Intermediate",
    topics: [
      "মেটা বিজনেস ম্যানেজার ও অ্যাড অ্যাকাউন্ট প্রফেশনাল সেটআপ",
      "পেমেন্ট মেথড ভেরিফিকেশন ও অ্যাকাউন্ট যাতে ব্যান না হয় তার ফুল প্রটেকশন",
      "Meta Ad Library ব্যবহার করে প্রতিদ্বন্দীদের সেরা অ্যাড গবেষণা করার টেকনিক",
      "মার্কেটের প্রুভেন ও লাভজনক উইনিং অফার এবং অ্যাঙ্গেল বের করার নিয়ম"
    ],
    imagePath: freeCourseImg,
    isPaid: false,
    isPlaceholder: true,
    statusLabel: "Free Course"
  },
  {
    id: "free-2-customer-analysis",
    moduleNumber: "Module 02",
    title: "Customer Analysis & Make Loyal Audience",
    bengaliSubtitle: "কাস্টমার অ্যানালাইসিস ও পেইং অডিয়েন্স চিহ্নিতকরণ",
    shortDesc: "আপনার প্রডাক্টের আসল ক্রেতা কারা তা খুঁজে বের করুন এবং অযথা ডলার অপচয় না করে সঠিক মানুষের কাছে বিজ্ঞাপন পৌঁছে দিন।",
    level: "Beginner to Intermediate",
    topics: [
      "আসল ক্রেতার প্রোফাইল (ICP) ও কাস্টমার কেনাকাটা করার মনস্তত্ত্ব",
      "কোর ডেমোগ্রাফিক ও নিখুঁত লেয়ার্ড ইন্টারেস্ট টার্গেটিং",
      "অডিয়েন্স ওভারল্যাপ বন্ধ করে বিজ্ঞাপনের বাজেট অপচয় বাঁচানোর উপায়",
      "পেইজের ফলোয়ার ও দীর্ঘমেয়াদী লয়াল কাস্টমার বৃদ্ধির কার্যকর পদ্ধতি"
    ],
    imagePath: freeCourseImg,
    isPaid: false,
    isPlaceholder: true,
    statusLabel: "Free Course"
  }
];

/* Complete 7-Module Paid Program (Includes the 2 Free Foundation Modules + the 5 Advanced Modules) */
export const paidCoursesData: CourseItem[] = [
  {
    id: "paid-1-env-setup",
    moduleNumber: "Module 01",
    title: "Environment Setup & Ad Research",
    bengaliSubtitle: "অ্যাড অ্যাকাউন্ট সেটআপ ও মার্কেট রিসার্চ",
    shortDesc: "মেটা বিজনেস ম্যানেজার সেটআপ, পেমেন্ট মেথড সিকিউরিটি, অ্যাকাউন্ট ব্যান প্রতিরোধ এবং প্রতিদ্বন্দীদের বিজ্ঞাপন বিশ্লেষণ।",
    level: "Foundation to Advanced",
    topics: [
      "মেটা বিজনেস ম্যানেজার ও নিরাপদ অ্যাড অ্যাকাউন্ট তৈরি",
      "পেমেন্ট মেথড ভেরিফিকেশন, 2FA ও অ্যাকাউন্ট রেস্ট্রিকশন প্রটেকশন",
      "Ad Library দিয়ে কম্পিটিটরদের লাভজনক অ্যাড রিসার্চ করার সিক্রেট পদ্ধতি",
      "মার্কেটে কার্যকর উইনিং অফার ও হুক তৈরি করার উপায়"
    ],
    imagePath: paidCourseImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Part of Complete 7-Module Mastery Program"
  },
  {
    id: "paid-2-customer-analysis",
    moduleNumber: "Module 02",
    title: "Customer Analysis & Make Loyal Audience",
    bengaliSubtitle: "কাস্টমার অ্যানালাইসিস ও লয়াল অডিয়েন্স বিল্ডিং",
    shortDesc: "আপনার প্রডাক্টের আসল ক্রেতা কারা তা চিহ্নিত করা, বায়ার পারসোনা ম্যাপিং এবং নিখুঁত অডিয়েন্স ফিল্টারিং।",
    level: "Foundation to Advanced",
    topics: [
      "বায়ার পারসোনা ম্যাপিং ও কাস্টমারের পণ্য কেনার আসল কারণ চিহ্নিতকরণ",
      "লেয়ার্ড ইন্টারেস্ট টার্গেটিং দিয়ে নিখুঁত কাস্টমার ফিল্টারিং",
      "অযথা ডলার অপচয় রোধ করতে অডিয়েন্স ওভারল্যাপ বন্ধ করার নিয়ম",
      "ব্র্যান্ডের প্রতি অনুগত ও বারবার কেনাকাটা করা কাস্টমার ফানেল তৈরি"
    ],
    imagePath: paidCourseImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Part of Complete 7-Module Mastery Program"
  },
  {
    id: "paid-3-retargeting-lookalike",
    moduleNumber: "Module 03",
    title: "Perfect Setup: Custom, Lookalike & Retargeting Ads",
    bengaliSubtitle: "কাস্টম, লুকঅ্যালাইক ও মাল্টি-লেভেল রিটার্গেটিং ফানেল",
    shortDesc: "যারা আপনার পেজে বা ওয়েবসাইটে এসেও কেনেনি, তাদেরকে বিশেষ অফার দেখিয়ে কাস্টমারে রূপান্তর করা এবং সেরা ক্রেতাদের মতো নতুন লুকঅ্যালাইক কাস্টমার আনা।",
    level: "Intermediate",
    topics: [
      "ওয়েবসাইট ভিজিটর ও ভিডিও ভিউয়ার্সদের দিয়ে কাস্টম অডিয়েন্স তৈরি",
      "সেরা ক্রেতাদের মতো ১% থেকে ৫% হাই-কনভার্টিং লুকঅ্যালাইক (LAL) অডিয়েন্স",
      "টাইম-ডিকে (৩-৭-১৪-৩০ দিন) রিটার্গেটিং ফানেল স্ট্র্যাটেজি",
      "যারা অলরেডি কিনে ফেলেছে তাদের বাদ দিয়ে বাজেট সেভ করা (Exclusion Rules)"
    ],
    imagePath: paidCourseImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Part of Complete 7-Module Mastery Program"
  },
  {
    id: "paid-4-ad-copy-content",
    moduleNumber: "Module 04",
    title: "Powerful Ad Copy & Sales Generating Content",
    bengaliSubtitle: "পাওয়ারফুল অ্যাড কপিরাইটিং ও সেলস জেনারেটিং কনটেন্ট",
    shortDesc: "সোশ্যাল মিডিয়ায় কাস্টমারের চোখ আটকে ফেলার মতো ৩-সেকেন্ডের হুক, আকর্ষণীয় হেডলাইন এবং সাইকোলজিক্যাল সেলস কপিরাইটিং ফ্রেমওয়ার্ক।",
    level: "All Levels",
    topics: [
      "সোশ্যাল মিডিয়া স্ক্রোল থামিয়ে দেওয়ার মতো ৩-সেকেন্ডের হুক ও হেডলাইন",
      "AIDA ও PAS ফর্মুলায় হাই-কনভার্টিং সেলস কপিরাইটিং (যেটা কাস্টমারকে কেনায়)",
      "উচ্চমানের ইমেজ ও শর্ট ভিডিও অ্যাডের ক্রিয়েটিভ ডিজাইন ব্রিফ ও স্ক্রিপ্ট",
      "মেটা পলিসি ১০০% কমপ্লায়েন্স যাতে অ্যাড রিজেক্ট বা অ্যাকাউন্ট ব্যান না হয়"
    ],
    imagePath: adCopyImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Part of Complete 7-Module Mastery Program"
  },
  {
    id: "paid-5-ab-testing-profitable",
    moduleNumber: "Module 05",
    title: "Make High Profitable Ads with A/B Testing",
    bengaliSubtitle: "এ/বি টেস্টিং দিয়ে হাই-প্রফিটেবল ও স্কেলেবল অ্যাড তৈরি",
    shortDesc: "অনুমানের ওপর নির্ভর না করে বৈজ্ঞানিক টেস্টিংয়ের মাধ্যমে সেরা অ্যাডটি খুঁজে বের করা এবং বাজেটের অপচয় না করে লাভজনকভাবে স্কেল করা।",
    level: "Intermediate to Advanced",
    topics: [
      "কম খরচে সিঙ্গেল-ভেরিয়েবল সায়েন্টিফিক টেস্টিং (হেডলাইন, ছবি, অডিয়েন্স)",
      "ডাইনামিক ক্রিয়েটিভ টেস্টিং (DCT) দিয়ে সবচেয়ে বেশি সেলস আনা অ্যাড বাছাই",
      "Advantage+ (CBO) বনাম ABO বাজেট অপটিমাইজেশন টেকনিক",
      "লোকসান ছাড়া লাভজনকভাবে বাজেট দ্বিগুণ বা তিনগুণ করার নিয়ম (Budget Scaling)"
    ],
    imagePath: abTestingImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Part of Complete 7-Module Mastery Program"
  },
  {
    id: "paid-6-pixel-gtm-tracking",
    moduleNumber: "Module 06",
    title: "Pixel & Server-Side Tracking with Google Tag Manager",
    bengaliSubtitle: "মেটা পিক্সেল ও জিটিএম সার্ভার-সাইড ট্র্যাকিং (CAPI)",
    shortDesc: "আইওএস আপডেট ও ব্রাউজার অ্যাড ব্লকার থাকলেও যেন প্রতিটা সেলস ও ডেটা নিখুঁতভাবে ট্র্যক হয়, তার জন্য সার্ভার-সাইড ট্র্যাকিং ও CAPI সেটআপ।",
    level: "Advanced",
    topics: [
      "Google Tag Manager (GTM) ওয়েব ও ক্লাউড সার্ভার কন্টেইনার সেটআপ",
      "Meta Conversions API (CAPI) ফুল ইন্টিগ্রেশন (১০০% নিখুঁত ডেটা ট্র্যাকিং)",
      "ইভেন্ট ডিডুপ্লিকেশান ও মেটা ইভেন্ট কোয়ালিটি ম্যাচ স্কোর বাড়ানো",
      "সম্পূর্ণ ইকমার্স ফানেল (ViewContent, AddToCart, Purchase) নির্ভুল ট্র্যাকিং"
    ],
    imagePath: pixelTrackingImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Part of Complete 7-Module Mastery Program"
  },
  {
    id: "paid-7-metrics-analysis",
    moduleNumber: "Module 07",
    title: "Analysis Ad Metrics for Better Performance",
    bengaliSubtitle: "অ্যাড মেট্রিক্স অ্যানালাইসিস ও ডেটা-ড্রিভেন অপটিমাইজেশন",
    shortDesc: "অ্যাডের অপ্রয়োজনীয় সংখ্যা বাদ দিয়ে আসল লাভের সংখ্যা (CPA, ROAS, CTR, CPM) বিশ্লেষণ করে কোনটা চালু রাখবেন আর কোনটা বন্ধ করবেন তা নির্ধারণ।",
    level: "Advanced",
    topics: [
      "Ads Manager-এ লাভজনক কাস্টম রিপোর্টিং মেট্রিক্স কলাম সেটআপ",
      "CPA, ROAS, Thumbstop Rate ও কনভার্শন রেট নির্ভুল ক্যালকুলেশন",
      "অডিয়েন্স ফ্যাটিগ ও ক্রিয়েটিভ বার্নআউট দ্রুত চিহ্নিত করা",
      "সাপ্তাহিক ডিসিশন মেকিং: কোন অ্যাডটি বন্ধ করবেন আর কোনটায় বাজেট বাড়াবেন"
    ],
    imagePath: abTestingImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Part of Complete 7-Module Mastery Program"
  }
];

export interface FaqItem {
  id: string;
  category: "Services" | "Budget" | "Communication" | "Courses";
  question: string;
  bengaliQuestion?: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    category: "Services",
    question: "What types of businesses do you work with?",
    bengaliQuestion: "আপনারা কোন ধরনের বিজনেসের সাথে কাজ করেন?",
    answer: "আমরা মূলত ছোট ও মাঝারি ব্যবসা, ইকমার্স স্টোর, ফেসবুক ও ইনস্টাগ্রাম শপ, স্টার্টআপ এবং উদ্যোক্তাদের সাথে কাজ করি যারা অনলাইনের বিজ্ঞাপনের মাধ্যমে পরিকল্পিতভাবে সেলস ও কাস্টমার বাড়াতে চান।"
  },
  {
    id: "faq-2",
    category: "Budget",
    question: "Is ad spend included in the service fees?",
    bengaliQuestion: "অ্যাডের মূল খরচ (Ad Spend) কি ম্যানেজমেন্ট ফির মধ্যে অন্তর্ভুক্ত?",
    answer: "না। বিজ্ঞাপনের জন্য যে ডলার খরচ হয় তা আপনার নিজের পেমেন্ট মেথড (কার্ড) থেকে সরাসরি মেটা প্ল্যাটফর্মে (Facebook/Instagram) কাটা হবে। আমরা কেবল স্ট্র্যাটেজি, ক্যাম্পেইন সেটআপ, কপিরাইটিং ও সার্বক্ষণিক অপটিমাইজেশনের জন্য সার্ভিস ফি গ্রহণ করি।"
  },
  {
    id: "faq-3",
    category: "Budget",
    question: "What is the minimum recommended advertising budget?",
    bengaliQuestion: "কমপক্ষে কত বাজেট দিয়ে বিজ্ঞাপন শুরু করা উচিত?",
    answer: "আপনার প্রডাক্টের ধরন ও মার্কেটের ওপর নির্ভর করে প্রতিদিন অন্তত $৫-$১৫ সমপরিমাণ বাজেট দিয়ে টেস্ট রান শুরু করা ভালো, যেন মেটা অ্যালগরিদম প্রয়োজনীয় ডেটা সংগ্রহ করতে পারে।"
  },
  {
    id: "faq-4",
    category: "Services",
    question: "Do you guarantee specific sales or revenue numbers?",
    bengaliQuestion: "আপনারা কি নির্দিষ্ট কোনো সেলসের গ্যারান্টি দেন?",
    answer: "কোনো সৎ মার্কেটার নির্দিষ্ট বিক্রির শতভাগ গ্যারান্টি দিতে পারে না, কারণ সেলস কেবল অ্যাডের ওপর নয় বরং পণ্যের মান, মূল্য, কাস্টমার সার্ভিস ও অফারের ওপর নির্ভর করে। তবে আমরা সর্বোচ্চ কোয়ালিটি টার্গেটিং, সায়েন্টিফিক টেস্টিং এবং অপটিমাইজেশনের শতভাগ দায়িত্ব নিই।"
  },
  {
    id: "faq-5",
    category: "Communication",
    question: "How will we communicate and receive campaign updates?",
    bengaliQuestion: "ক্যাম্পেইনের আপডেট কীভাবে জানানো হবে?",
    answer: "আমরা সরাসরি WhatsApp (01883423076) এবং Telegram-এ নিয়মিত যোগাযোগ রাখি এবং সাপ্তাহিক পারফরম্যান্স রিপোর্ট ও পরবর্তী অ্যাকশন প্ল্যান জানিয়ে দিই।"
  },
  {
    id: "faq-6",
    category: "Courses",
    question: "How do I enroll in the Meta Ads Course?",
    bengaliQuestion: "কোর্সে কীভাবে ভর্তি হওয়া যাবে?",
    answer: "কোর্সটি সম্পূর্ণ বাংলা ভাষায় সহজে বোঝানো হয়েছে। আপনি সরাসরি আমাদের WhatsApp বা Telegram-এ (01883423076) যোগাযোগ করে বিস্তারিত সিলেবাস, ক্লাসের সময় ও রেজিস্ট্রেশন সম্পন্ন করতে পারেন।"
  }
];
