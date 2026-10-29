/**
 * Brand Configuration for RAHMAN'S ADS CAMPAIGN
 * Clean, professional, and streamlined metadata.
 */

// User's photo on HP laptop for Live Monitoring and All Courses
export const userWorkstationImg = '/assets/aistudio/image_44c2b959.png';
export const heroImg = userWorkstationImg;
export const paidCourseImg = userWorkstationImg;
export const freeCourseImg = userWorkstationImg;
export const adCopyImg = userWorkstationImg;
export const pixelTrackingImg = userWorkstationImg;
export const abTestingImg = userWorkstationImg;

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
  tagline: "Strategic Digital Marketing & Meta Advertising",
  subtitle: "Helping businesses and e-commerce stores grow predictably with structured Meta advertising campaigns.",
  description: "Specialized in performance marketing, precision audience research, and high-impact Meta advertising campaigns.",
  targetAudience: "Small businesses, entrepreneurs, and e-commerce brands seeking disciplined, measurable online growth.",
  founder: {
    name: "Md Abdur Rahman",
    role: "Founder & Ads Specialist",
    bengaliBio: "মেটা বিজ্ঞাপন ও পারফরম্যান্স মার্কেটিং স্পেশালিস্ট। নিখুঁত অডিয়েন্স রিসার্চ, সেলস ফানেল তৈরি ও টেকসই বিজনেস গ্রোথ নিশ্চিত করাই মূল লক্ষ্য।"
  },
  contact: {
    email: "hmabdurrahman9082@gmail.com",
    phone: "01883423076",
    optionalPhone: "01806755760",
    whatsappNumber: "01883423076", 
    telegramNumber: "01883423076",
    location: "Global Remote / Online Services",
    availability: "WhatsApp / Telegram: 01883423076 | Call: 01806755760"
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
    bengaliSubtitle: "ই-কমার্স সেলস বৃদ্ধি ও স্কেলিং",
    shortDesc: "Drive consistent online purchases, maximize ROAS, and scale winning campaigns.",
    fullDesc: "অনলাইন শপের জন্য প্রফিটেবল পারচেজ ক্যাম্পেইন, ক্যাটালগ অ্যাড সেটআপ এবং ধারাবাহিক সেলস বৃদ্ধির স্ট্র্যাটেজি।",
    deliverables: [
      "ধারাবাহিক অর্ডারের জন্য পারচেজ ক্যাম্পেইন",
      "ডাইনামিক প্রডাক্ট ক্যাটালগ ও ক্যারোসেল সেটআপ",
      "উইনিং অ্যাড স্কেলিং ও বাজেট ম্যানেজমেন্ট",
      "বিজ্ঞাপনের অপচয় রোধে পারফরম্যান্স মনিটরিং"
    ],
    icon: "ShoppingBag"
  },
  {
    id: "high-ticket-lead-generation",
    title: "High-Ticket Lead Generation",
    bengaliSubtitle: "কোয়ালিটি লিড জেনারেশন",
    shortDesc: "Attract qualified prospects ready to book consultations and buy.",
    fullDesc: "রিয়েল এস্টেট, কনসাল্টিং বা হাই-ভ্যালু সার্ভিসের জন্য আসল ক্রেতাদের কোয়ালিটি লিড ও ফোন নম্বর সংগ্রহ।",
    deliverables: [
      "মেটা ইনস্ট্যান্ট লিড ফর্ম সেটআপ",
      "সরাসরি WhatsApp-এ কাস্টমার মেসেজ ফানেল",
      "কোয়ালিটি কাস্টমার স্ক্রিনিং ও ফিল্টারিং",
      "ইনস্ট্যান্ট লিড ট্র্যাকিং ও দ্রুত ফলো-আপ"
    ],
    icon: "Users"
  },
  {
    id: "full-funnel-campaign-management",
    title: "Full-Funnel Done-For-You Ads",
    bengaliSubtitle: "ফেসবুক ও ইনস্টাগ্রাম ক্যাম্পেইন ম্যানেজমেন্ট",
    shortDesc: "End-to-end advertising operations handled professionally from research to scaling.",
    fullDesc: "অডিয়েন্স রিসার্চ, অ্যাড সেটআপ, বাজেট মনিটরিং এবং সার্বক্ষণিক পারফরম্যান্স অপটিমাইজেশন।",
    deliverables: [
      "ক্যাম্পেইন তৈরি ও সার্বক্ষণিক মনিটরিং",
      "উইনিং অ্যাডে সঠিক বাজেট ডিস্ট্রিবিউশন",
      "সাপ্তাহিক স্বচ্ছ পারফরম্যান্স রিপোর্ট",
      "WhatsApp ও Telegram-এ সার্বক্ষণিক সাপোর্ট"
    ],
    icon: "Megaphone"
  },
  {
    id: "ad-creative-copywriting",
    title: "High-Converting Creative & Copywriting",
    bengaliSubtitle: "বিজ্ঞাপন ডিজাইন ও সেলস কপিরাইটিং",
    shortDesc: "High-CTR visuals and clear sales copy that motivate target customers to buy.",
    fullDesc: "সোশ্যাল মিডিয়ার জন্য আকর্ষণীয় ভিডিও হুক, ব্যানার কনটেন্ট এবং কনভার্সন-ফোকাসড সেলস কপি।",
    deliverables: [
      "আকর্ষণীয় ভিডিও হুক ও ক্লিয়ার হেডলাইন",
      "সহজ ও কনভার্সন-ফোকাসড সেলস কপি",
      "হাই-কনভার্টিং ইমেজ ও ভিডিও ক্রিয়েটিভ স্ক্রিপ্ট",
      "মেটা পলিসি অনুযায়ী শতভাগ নিরাপদ কনটেন্ট"
    ],
    icon: "PenTool"
  },
  {
    id: "retargeting-cart-recovery",
    title: "Retargeting & Audience Segmentation",
    bengaliSubtitle: "রিটার্গেটিং ও কাস্টম অডিয়েন্স",
    shortDesc: "Re-engage past visitors and customers with tailored offers to increase repeat purchases.",
    fullDesc: "ওয়েবসাইট ভিজিটর ও পেজ এনগেজারদের রিটার্গেটিং এবং হাই-ভ্যালু লুকঅ্যালাইক অডিয়েন্স তৈরি।",
    deliverables: [
      "ওয়েবসাইট ভিজিটর ও মেসেজ ইউজারদের রিটার্গেটিং",
      "হাই-ভ্যালু লুকঅ্যালাইক (LAL) অডিয়েন্স তৈরি",
      "টাইম-ডিকে স্পেশাল অফার ফানেল",
      "বিদ্যমান ক্রেতাদের বাদ দিয়ে বিজ্ঞাপনের বাজেট সাশ্রয়"
    ],
    icon: "Share2"
  },
  {
    id: "server-side-tracking-fix",
    title: "Server-Side Tracking & Pixel (CAPI)",
    bengaliSubtitle: "পিক্সেল ও সার্ভার ট্র্যাকিং (GTM/CAPI)",
    shortDesc: "Track complete customer purchase journeys accurately with GTM and Meta Conversions API.",
    fullDesc: "গুগল ট্যাগ ম্যানেজার ও মেটা Conversions API দিয়ে নির্ভুল ইভেন্ট ট্র্যাকিং ও ডেটা সেটআপ।",
    deliverables: [
      "Google Tag Manager (GTM) ওয়েব ও সার্ভার সেটআপ",
      "Meta Conversions API (CAPI) ইন্টিগ্রেশন",
      "iOS আপডেট সত্ত্বেও নির্ভুল ডেটা ট্র্যাকিং",
      "ViewContent থেকে Purchase পর্যন্ত নিখুঁত ইভেন্ট ট্র্যাকিং"
    ],
    icon: "Layout"
  },
  {
    id: "account-audit-protection",
    title: "Meta Account Audit & Health Check",
    bengaliSubtitle: "অ্যাকাউন্ট অডিট ও সিকিউরিটি চেক",
    shortDesc: "Review account health, remove policy issues, and ensure ad budget is spent efficiently.",
    fullDesc: "মেটা বিজনেস ম্যানেজার অডিট, টু-ফ্যাক্টর সিকিউরিটি এবং বাজেটের সঠিক ব্যবহার নিশ্চিতকরণ।",
    deliverables: [
      "বিজনেস ম্যানেজার ও সিকিউরিটির পূর্ণাঙ্গ অডিট",
      "পেমেন্ট মেথড ও টু-ফ্যাক্টর অথেনটিকেশন (2FA) সেটআপ",
      "বাজেট অপচয়ের কারণ চিহ্নিতকরণ ও সমাধান",
      "পলিসি ভায়োলেশন রোধ করে নিরাপদ অ্যাড অ্যাকাউন্ট তৈরি"
    ],
    icon: "Compass"
  },
  {
    id: "landing-page-cro",
    title: "Landing Page & Conversion Optimization",
    bengaliSubtitle: "ল্যান্ডিং পেজ ও কনভার্সন অপটিমাইজেশন",
    shortDesc: "Streamline customer checkout experience, mobile UX, and order flow to improve sales.",
    fullDesc: "ওয়েবসাইটের গতি, মোবাইল ইউজার এক্সপেরিয়েন্স এবং চেকআউট ফর্ম অপটিমাইজ করে বিক্রির হার বৃদ্ধি।",
    deliverables: [
      "মোবাইল রেসপনসিভনেস ও স্পিড রিভিউ",
      "সহজ ও দ্রুত অর্ডার ফর্ম সেটআপ",
      "ক্লিয়ার কল-টু-অ্যাকশন (CTA) ডিজাইন",
      "ভিজিটর ড্রপ-অফ কমিয়ে কনভার্শন রেট বৃদ্ধি"
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
    title: "Business & Offer Analysis",
    bengaliSubtitle: "বিজনেস ও অফার বিশ্লেষণ",
    description: "আপনার প্রডাক্ট, মার্জিন ও টার্গেট কাস্টমার অনুযায়ী কার্যকর ক্যাম্পেইন রোডম্যাপ তৈরি।",
    keyAction: "ডিসকভারি ও অডিট"
  },
  {
    stepNumber: "02",
    title: "Audience & Market Research",
    bengaliSubtitle: "অডিয়েন্স ও মার্কেট রিসার্চ",
    description: "আপনার আসল ক্রেতা কারা তা বিশ্লেষণ করে নিখুঁত টার্গেটিং অডিয়েন্স নির্বাচন।",
    keyAction: "কাস্টমার রিসার্চ"
  },
  {
    stepNumber: "03",
    title: "Funnel & Strategy Planning",
    bengaliSubtitle: "ফানেল ও বাজেট প্ল্যান",
    description: "নতুন ক্রেতা আকর্ষণ থেকে রিটার্গেটিং পর্যন্ত সুনির্দিষ্ট বাজেট প্ল্যান নির্ধারণ।",
    keyAction: "ক্যাম্পেইন ব্লুপ্রিন্ট"
  },
  {
    stepNumber: "04",
    title: "Campaign Setup & Tracking",
    bengaliSubtitle: "অ্যাড ও ট্র্যাকিং সেটআপ",
    description: "অ্যাড ম্যানেজার কনফিগারেশন, ক্রিয়েটিভ আপলোড এবং ট্র্যাকিং পিক্সেল সক্রিয় করা।",
    keyAction: "অ্যাড ম্যানেজার সেটআপ"
  },
  {
    stepNumber: "05",
    title: "Optimization & Review",
    bengaliSubtitle: "অপটিমাইজেশন ও স্বচ্ছ রিভিউ",
    description: "লাইভ পারফরম্যান্স নিয়মিত মনিটর করে উইনিং অ্যাডে বাজেট বৃদ্ধি এবং স্বচ্ছ রিপোর্ট প্রদান।",
    keyAction: "সাপ্তাহিক রিভিউ"
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
    category: "E-Commerce Growth",
    title: "E-Commerce Purchase Campaign",
    objective: "Catalog Sales & Retargeting",
    description: "Multi-tiered Meta advertising architecture combining broad Advantage+ prospecting with dynamic product catalog retargeting.",
    isPlaceholder: false,
    statusLabel: "Active Strategy"
  },
  {
    id: "showcase-2",
    category: "Lead Generation",
    title: "High-Intent Lead Pipeline",
    objective: "Direct WhatsApp Consultations",
    description: "Precision customer screening with Meta instant forms routing qualified prospects directly to WhatsApp.",
    isPlaceholder: false,
    statusLabel: "Verified Engine"
  },
  {
    id: "showcase-3",
    category: "Brand Scaling",
    title: "Creative Testing & Scaling",
    objective: "Customer Acquisition",
    description: "Structured multi-format creative testing matrix paired with layered demographic targeting.",
    isPlaceholder: false,
    statusLabel: "Scalable Architecture"
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
    tagline: "For small businesses & founders launching focused campaigns.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Target audience research & persona mapping",
      "Up to 2 active campaign setups",
      "Creative & copy guidance",
      "Bi-weekly performance review",
      "Direct WhatsApp & Telegram communication"
    ],
    adSpendNote: "Ad spend is paid directly to Meta via client card.",
    recommendedFor: "New businesses starting paid advertising."
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For established stores looking to systematically test and scale.",
    badge: "Most Popular",
    features: [
      "Full Meta Ads management (FB & IG)",
      "Full-funnel campaign structure",
      "Continuous creative testing & copy iterations",
      "Custom retargeting & lookalike buildout",
      "Server-side tracking (GTM / CAPI) check",
      "Weekly performance reporting & KPI analysis",
      "Priority WhatsApp & Telegram support"
    ],
    adSpendNote: "Ad spend is paid directly to Meta via client card.",
    recommendedFor: "E-commerce stores and service businesses."
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Tailored campaign architecture for high-volume needs.",
    features: [
      "Multi-campaign strategy & advanced setups",
      "Conversion funnel & landing page audits",
      "Creative iteration frameworks",
      "Custom reporting frequency",
      "Direct scaling roadmap sessions",
      "Bespoke scope of work agreement"
    ],
    adSpendNote: "Ad spend is paid directly to Meta via client card.",
    recommendedFor: "Growing brands requiring dedicated scaling."
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

/* 2 Free Foundation Courses (100% Free) */
export const freeCoursesData: CourseItem[] = [
  {
    id: "free-1-env-setup",
    moduleNumber: "Module 01",
    title: "Environment Setup & Ad Research",
    bengaliSubtitle: "অ্যাড অ্যাকাউন্ট সেটআপ ও মার্কেট রিসার্চ",
    shortDesc: "মেটা বিজনেস ম্যানেজার প্রফেশনাল সেটআপ এবং প্রতিদ্বন্দ্বীদের সেরা বিজ্ঞাপন বিশ্লেষণের নিয়ম।",
    level: "Beginner",
    topics: [
      "মেটা বিজনেস ম্যানেজার ও অ্যাড অ্যাকাউন্ট সেটআপ",
      "পেমেন্ট মেথড ভেরিফিকেশন ও অ্যাকাউন্ট সিকিউরিটি",
      "Meta Ad Library দিয়ে প্রতিদ্বন্দ্বীদের অ্যাড অ্যানালাইসিস",
      "মার্কেটের লাভজনক উইনিং অফার ও হুক তৈরি"
    ],
    imagePath: freeCourseImg,
    isPaid: false,
    isPlaceholder: true,
    statusLabel: "Free Course"
  },
  {
    id: "free-2-customer-analysis",
    moduleNumber: "Module 02",
    title: "Customer Analysis & Audience",
    bengaliSubtitle: "কাস্টমার অ্যানালাইসিস ও অডিয়েন্স রিসার্চ",
    shortDesc: "আপনার প্রডাক্টের আসল ক্রেতা কারা তা চিহ্নিত করা এবং নিখুঁত অডিয়েন্স ফিল্টারিং।",
    level: "Beginner",
    topics: [
      "বায়ার পারসোনা ম্যাপিং ও কাস্টমার মনস্তত্ত্ব",
      "ডেমোগ্রাফিক ও লেয়ার্ড ইন্টারেস্ট টার্গেটিং",
      "অডিয়েন্স ওভারল্যাপ বন্ধ করে বাজেট সাশ্রয়",
      "লয়াল কাস্টমার বৃদ্ধির টেকসই পদ্ধতি"
    ],
    imagePath: freeCourseImg,
    isPaid: false,
    isPlaceholder: true,
    statusLabel: "Free Course"
  }
];

/* Complete 7-Module Paid Program */
export const paidCoursesData: CourseItem[] = [
  {
    id: "paid-1-env-setup",
    moduleNumber: "Module 01",
    title: "Environment Setup & Ad Research",
    bengaliSubtitle: "অ্যাড অ্যাকাউন্ট সেটআপ ও মার্কেট রিসার্চ",
    shortDesc: "মেটা বিজনেস ম্যানেজার সেটআপ, পেমেন্ট সিকিউরিটি ও প্রতিদ্বন্দ্বীদের অ্যাড রিসার্চ।",
    level: "Foundation",
    topics: [
      "মেটা বিজনেস ম্যানেজার ও অ্যাড অ্যাকাউন্ট সেটআপ",
      "পেমেন্ট ভেরিফিকেশন ও অ্যাকাউন্ট প্রটেকশন",
      "Ad Library দিয়ে প্রতিযোগী ব্র্যান্ডের অ্যাড রিসার্চ",
      "উইনিং অফার ও ক্রিয়েটিভ অ্যাঙ্গেল তৈরি"
    ],
    imagePath: paidCourseImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Mastery Module 1"
  },
  {
    id: "paid-2-customer-analysis",
    moduleNumber: "Module 02",
    title: "Customer Analysis & Audience",
    bengaliSubtitle: "কাস্টমার অ্যানালাইসিস ও অডিয়েন্স রিসার্চ",
    shortDesc: "টার্গেট কাস্টমার চিহ্নিতকরণ এবং সঠিক অডিয়েন্স সেগমেন্টেশন।",
    level: "Foundation",
    topics: [
      "বায়ার পারসোনা ম্যাপিং ও কেনার মনস্তত্ত্ব",
      "লেয়ার্ড ইন্টারেস্ট টার্গেটিং দিয়ে নিখুঁত ফিল্টারিং",
      "অডিয়েন্স ওভারল্যাপ বন্ধ করে বাজেট সাশ্রয়",
      "লয়াল অডিয়েন্স তৈরি ও নার্চারিং"
    ],
    imagePath: paidCourseImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Mastery Module 2"
  },
  {
    id: "paid-3-retargeting-lookalike",
    moduleNumber: "Module 03",
    title: "Custom, Lookalike & Retargeting Ads",
    bengaliSubtitle: "কাস্টম, লুকঅ্যালাইক ও রিটার্গেটিং ফানেল",
    shortDesc: "ভিজিটরদের রিটার্গেটিং এবং হাই-কনভার্টিং লুকঅ্যালাইক অডিয়েন্স তৈরি।",
    level: "Intermediate",
    topics: [
      "ওয়েবসাইট ভিজিটর ও ভিডিও ভিউয়ার কাস্টম অডিয়েন্স",
      "১% থেকে ৫% হাই-কনভার্টিং লুকঅ্যালাইক অডিয়েন্স",
      "টাইম-ডিকে (৩-৭-১৪ দিন) রিটার্গেটিং স্ট্র্যাটেজি",
      "Exclusion Rules দিয়ে অপ্রয়োজনীয় খরচ বন্ধ করা"
    ],
    imagePath: paidCourseImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Mastery Module 3"
  },
  {
    id: "paid-4-ad-copy-content",
    moduleNumber: "Module 04",
    title: "Ad Copy & Content Strategy",
    bengaliSubtitle: "অ্যাড কপিরাইটিং ও কনটেন্ট স্ট্র্যাটেজি",
    shortDesc: "আকর্ষণীয় ভিডিও হুক, হেডলাইন এবং সেলস কপিরাইটিং ফ্রেমওয়ার্ক।",
    level: "Intermediate",
    topics: [
      "৩ সেকেন্ডের আকর্ষণীয় ভিডিও হুক ও হেডলাইন",
      "AIDA ও PAS ফর্মুলায় কনভার্সন কপিরাইটিং",
      "হাই-কনভার্টিং ইমেজ ও ভিডিও স্ক্রিপ্ট",
      "মেটা পলিসি কমপ্লায়েন্স ও অ্যাকাউন্ট নিরাপত্তা"
    ],
    imagePath: adCopyImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Mastery Module 4"
  },
  {
    id: "paid-5-ab-testing-profitable",
    moduleNumber: "Module 05",
    title: "A/B Testing & Profitable Scaling",
    bengaliSubtitle: "এ/বি টেস্টিং ও প্রফিটেবল স্কেলিং",
    shortDesc: "সায়েন্টিফিক টেস্টিংয়ের মাধ্যমে উইনিং অ্যাড বাছাই এবং বাজেট স্কেলিং।",
    level: "Advanced",
    topics: [
      "সিঙ্গেল-ভেরিয়েবল সায়েন্টিফিক টেস্টিং",
      "ডাইনামিক ক্রিয়েটিভ টেস্টিং (DCT)",
      "Advantage+ (CBO) বনাম ABO বাজেট স্ট্র্যাটেজি",
      "বাজেটের ক্ষতি ছাড়া ধাপে ধাপে স্কেলিংয়ের নিয়ম"
    ],
    imagePath: abTestingImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Mastery Module 5"
  },
  {
    id: "paid-6-pixel-gtm-tracking",
    moduleNumber: "Module 06",
    title: "Pixel & Server-Side Tracking (GTM / CAPI)",
    bengaliSubtitle: "মেটা পিক্সেল ও জিটিএম সার্ভার ট্র্যাকিং",
    shortDesc: "গুগল ট্যাগ ম্যানেজার ও মেটা Conversions API ফুল ট্র্যাকিং সেটআপ।",
    level: "Advanced",
    topics: [
      "GTM ওয়েব ও ক্লাউড সার্ভার কন্টেইনার সেটআপ",
      "Meta Conversions API (CAPI) ইন্টিগ্রেশন",
      "ইভেন্ট ডিডুপ্লিকেশন ও ডেটা ম্যাচ স্কোর বৃদ্ধি",
      "সম্পূর্ণ ই-কমার্স ফানেল নিখুঁত ট্র্যাকিং"
    ],
    imagePath: pixelTrackingImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Mastery Module 6"
  },
  {
    id: "paid-7-metrics-analysis",
    moduleNumber: "Module 07",
    title: "Ad Metrics Analysis & Decision Making",
    bengaliSubtitle: "মেট্রিক্স অ্যানালাইসিস ও ডিসিশন মেকিং",
    shortDesc: "CPA, ROAS, CTR ইত্যাদি পারফরম্যান্স ডেটা বিশ্লেষণ এবং সঠিক সিদ্ধান্ত।",
    level: "Advanced",
    topics: [
      "Ads Manager-এ কাস্টম রিপোর্টিং মেট্রিক্স সেটআপ",
      "CPA, ROAS ও কনভার্সন রেট ক্যালকুলেশন",
      "অডিয়েন্স ফ্যাটিগ ও ক্রিয়েটিভ বার্নআউট চিহ্নিতকরণ",
      "উইনিং অ্যাড বাছাই ও লাভজনক বাজেট বাড়ানোর সিদ্ধান্ত"
    ],
    imagePath: abTestingImg,
    isPaid: true,
    isPlaceholder: true,
    statusLabel: "Mastery Module 7"
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
    answer: "আমরা মূলত ক্ষুদ্র ও মাঝারি ব্যবসা, ই-কমার্স শপ, অনলাইন ব্র্যান্ড এবং উদ্যোক্তাদের সাথে কাজ করি যারা মেটা বিজ্ঞাপনের মাধ্যমে পরিকল্পিতভাবে সেলস বাড়াতে চান।"
  },
  {
    id: "faq-2",
    category: "Budget",
    question: "Is ad spend included in the service fees?",
    bengaliQuestion: "বিজ্ঞাপনের মূল খরচ (Ad Spend) কি সার্ভিস ফির মধ্যে অন্তর্ভুক্ত?",
    answer: "না। বিজ্ঞাপনের মূল খরচ সরাসরি আপনার নিজস্ব কার্ড থেকে মেটা প্ল্যাটফর্মে (Facebook/Instagram) কাটা হবে। আমরা কেবল ক্যাম্পেইন রিসার্চ, প্রফেশনাল সেটআপ ও সার্বক্ষণিক অপটিমাইজেশনের সার্ভিস ফি নিয়ে থাকি।"
  },
  {
    id: "faq-3",
    category: "Budget",
    question: "What is the recommended starting ad budget?",
    bengaliQuestion: "শুরুতে কত বাজেট দিয়ে বিজ্ঞাপন শুরু করা যায়?",
    answer: "আপনার প্রডাক্টের ধরন অনুযায়ী প্রতিদিন $৫-$১৫ সমপরিমাণ বাজেট দিয়ে টেস্ট রান শুরু করা ভালো, যেন মেটা অ্যালগরিদম প্রয়োজনীয় ডেটা সংগ্রহ করতে পারে।"
  },
  {
    id: "faq-4",
    category: "Communication",
    question: "How will we communicate and receive updates?",
    bengaliQuestion: "ক্যাম্পেইনের আপডেট কীভাবে জানানো হবে?",
    answer: "আমরা সরাসরি WhatsApp (01883423076) এবং Telegram-এ নিয়মিত যোগাযোগ রাখি এবং সাপ্তাহিক পারফরম্যান্স রিভিউ জানিয়ে দিই।"
  },
  {
    id: "faq-5",
    category: "Courses",
    question: "How do I enroll in the Meta Ads Course?",
    bengaliQuestion: "কোর্সে কীভাবে ভর্তি হওয়া যাবে?",
    answer: "কোর্সটি সম্পূর্ণ সহজ বাংলায় প্র্যাক্টিক্যাল উদাহরণের মাধ্যমে বোঝানো হয়েছে। আপনি সরাসরি আমাদের WhatsApp বা Telegram-এ (01883423076) মেসেজ দিয়ে বিস্তারিত সিলেবাস ও ভর্তি সংক্রান্ত তথ্য জেনে নিতে পারেন।"
  }
];
