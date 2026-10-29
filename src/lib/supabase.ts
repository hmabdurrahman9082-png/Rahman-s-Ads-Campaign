import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://blszeomscijbvayjdpgk.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsc3plb21zY2lqYnZheWpkcGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIzOTExMDksImV4cCI6MjEwNzk2NzEwOX0.kurodYCKv-7fAHA9AsH8YA7rq_-RAlALM1M4Er2igy4';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-project-id')
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactInquiryPayload {
  name: string;
  email: string;
  business_name?: string;
  phone?: string;
  service: string;
  message: string;
  source?: 'contact_page' | 'modal' | string;
}

export interface SubmitInquiryResult {
  success: boolean;
  cachedLocally?: boolean;
  message?: string;
  warning?: string;
  error?: string;
}

export async function submitContactInquiry(payload: ContactInquiryPayload): Promise<SubmitInquiryResult> {
  // Always cache locally so Admin Panel inbox displays inquiries even if Supabase is offline
  try {
    const existing = localStorage.getItem('rahman_ads_local_inquiries');
    const list = existing ? JSON.parse(existing) : [];
    const newRecord = {
      id: 'local_' + Date.now(),
      created_at: new Date().toISOString(),
      name: payload.name.trim(),
      email: payload.email.trim(),
      business_name: payload.business_name?.trim() || null,
      phone: payload.phone?.trim() || null,
      service: payload.service.trim(),
      message: payload.message.trim(),
      source: payload.source || 'contact_page',
      status: 'unread',
    };
    list.unshift(newRecord);
    localStorage.setItem('rahman_ads_local_inquiries', JSON.stringify(list));
  } catch (storageErr) {
    console.warn('Could not save inquiry to local storage cache:', storageErr);
  }

  try {
    if (!isSupabaseConfigured) {
      console.warn('Supabase credentials not configured in environment variables.');
      return { 
        success: true, 
        cachedLocally: true,
        message: 'Saved to local inbox successfully.' 
      };
    }

    const { error } = await supabase
      .from('contact_inquiries')
      .insert([
        {
          name: payload.name.trim(),
          email: payload.email.trim(),
          business_name: payload.business_name?.trim() || null,
          phone: payload.phone?.trim() || null,
          service: payload.service.trim(),
          message: payload.message.trim(),
          source: payload.source || 'contact_page',
          status: 'unread',
        },
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return { success: true, warning: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Unexpected error submitting inquiry:', err);
    return { 
      success: true, 
      warning: err?.message || 'Network error, saved locally.' 
    };
  }
}
