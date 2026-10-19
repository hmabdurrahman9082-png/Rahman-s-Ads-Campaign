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

export async function submitContactInquiry(payload: ContactInquiryPayload) {
  try {
    if (!isSupabaseConfigured) {
      console.warn('Supabase credentials not configured in environment variables.');
      return { 
        success: false, 
        error: 'Database is not yet configured with valid Supabase credentials.' 
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
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Unexpected error submitting inquiry:', err);
    return { 
      success: false, 
      error: err?.message || 'An unexpected network error occurred while submitting.' 
    };
  }
}
