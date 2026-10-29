import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  brandConfig as defaultBrandConfig,
  servicesData as defaultServicesData,
  processSteps as defaultProcessSteps,
  portfolioPlaceholders as defaultPortfolio,
  pricingPlans as defaultPricing,
  freeCoursesData as defaultFreeCourses,
  paidCoursesData as defaultPaidCourses,
  faqData as defaultFaq,
  BrandConfig,
  ServiceItem,
  ProcessStep,
  PortfolioPlaceholder,
  PricingPlan,
  CourseItem,
  FaqItem,
} from '../config/brandConfig';

const STORAGE_KEY = 'rahman_ads_site_data_v1';

export interface SiteDataState {
  brandConfig: BrandConfig;
  servicesData: ServiceItem[];
  processSteps: ProcessStep[];
  portfolioPlaceholders: PortfolioPlaceholder[];
  pricingPlans: PricingPlan[];
  freeCoursesData: CourseItem[];
  paidCoursesData: CourseItem[];
  faqData: FaqItem[];
}

export interface SiteDataContextType extends SiteDataState {
  updateBrandConfig: (config: BrandConfig) => void;
  updateServicesData: (services: ServiceItem[]) => void;
  updateProcessSteps: (steps: ProcessStep[]) => void;
  updatePortfolio: (portfolio: PortfolioPlaceholder[]) => void;
  updatePricingPlans: (plans: PricingPlan[]) => void;
  updateFreeCourses: (courses: CourseItem[]) => void;
  updatePaidCourses: (courses: CourseItem[]) => void;
  updateFaq: (faqs: FaqItem[]) => void;
  saveAllData: (data: Partial<SiteDataState>) => void;
  resetAllToDefaults: () => void;
  isCustomized: boolean;
}

const getDefaultData = (): SiteDataState => ({
  brandConfig: defaultBrandConfig,
  servicesData: defaultServicesData,
  processSteps: defaultProcessSteps,
  portfolioPlaceholders: defaultPortfolio,
  pricingPlans: defaultPricing,
  freeCoursesData: defaultFreeCourses,
  paidCoursesData: defaultPaidCourses,
  faqData: defaultFaq,
});

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

export const SiteDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SiteDataState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          brandConfig: { ...defaultBrandConfig, ...parsed.brandConfig },
          servicesData: parsed.servicesData || defaultServicesData,
          processSteps: parsed.processSteps || defaultProcessSteps,
          portfolioPlaceholders: parsed.portfolioPlaceholders || defaultPortfolio,
          pricingPlans: parsed.pricingPlans || defaultPricing,
          freeCoursesData: parsed.freeCoursesData || defaultFreeCourses,
          paidCoursesData: parsed.paidCoursesData || defaultPaidCourses,
          faqData: parsed.faqData || defaultFaq,
        };
      }
    } catch (e) {
      console.warn('Failed to parse saved site data:', e);
    }
    return getDefaultData();
  });

  const [isCustomized, setIsCustomized] = useState<boolean>(() => {
    return Boolean(localStorage.getItem(STORAGE_KEY));
  });

  const persist = (newData: SiteDataState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      setIsCustomized(true);
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  };

  const updateBrandConfig = (newConfig: BrandConfig) => {
    setData((prev) => {
      const updated = { ...prev, brandConfig: newConfig };
      persist(updated);
      return updated;
    });
  };

  const updateServicesData = (newServices: ServiceItem[]) => {
    setData((prev) => {
      const updated = { ...prev, servicesData: newServices };
      persist(updated);
      return updated;
    });
  };

  const updateProcessSteps = (newSteps: ProcessStep[]) => {
    setData((prev) => {
      const updated = { ...prev, processSteps: newSteps };
      persist(updated);
      return updated;
    });
  };

  const updatePortfolio = (newPortfolio: PortfolioPlaceholder[]) => {
    setData((prev) => {
      const updated = { ...prev, portfolioPlaceholders: newPortfolio };
      persist(updated);
      return updated;
    });
  };

  const updatePricingPlans = (newPlans: PricingPlan[]) => {
    setData((prev) => {
      const updated = { ...prev, pricingPlans: newPlans };
      persist(updated);
      return updated;
    });
  };

  const updateFreeCourses = (newCourses: CourseItem[]) => {
    setData((prev) => {
      const updated = { ...prev, freeCoursesData: newCourses };
      persist(updated);
      return updated;
    });
  };

  const updatePaidCourses = (newCourses: CourseItem[]) => {
    setData((prev) => {
      const updated = { ...prev, paidCoursesData: newCourses };
      persist(updated);
      return updated;
    });
  };

  const updateFaq = (newFaqs: FaqItem[]) => {
    setData((prev) => {
      const updated = { ...prev, faqData: newFaqs };
      persist(updated);
      return updated;
    });
  };

  const saveAllData = (incoming: Partial<SiteDataState>) => {
    setData((prev) => {
      const updated: SiteDataState = {
        ...prev,
        ...incoming,
      };
      persist(updated);
      return updated;
    });
  };

  const resetAllToDefaults = () => {
    const defaults = getDefaultData();
    try {
      localStorage.removeItem(STORAGE_KEY);
      setIsCustomized(false);
    } catch (e) {
      console.error(e);
    }
    setData(defaults);
  };

  return (
    <SiteDataContext.Provider
      value={{
        ...data,
        updateBrandConfig,
        updateServicesData,
        updateProcessSteps,
        updatePortfolio,
        updatePricingPlans,
        updateFreeCourses,
        updatePaidCourses,
        updateFaq,
        saveAllData,
        resetAllToDefaults,
        isCustomized,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = (): SiteDataContextType => {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
};
