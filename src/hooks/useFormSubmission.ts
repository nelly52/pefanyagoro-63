
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface FormSubmissionOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

type TableName = 'contact_submissions' | 'workshop_registrations' | 'program_applications' | 'kids_stories' | 'photo_uploads';

export const useFormSubmission = (options?: FormSubmissionOptions) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (table: TableName, data: Record<string, any>) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from(table).insert(data as any);
      
      if (error) {
        console.error('Form submission error:', error);
        toast.error('Failed to submit form. Please try again.');
        options?.onError?.(error.message);
        return false;
      }

      toast.success('Form submitted successfully!');
      options?.onSuccess?.();
      return true;
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('An unexpected error occurred. Please try again.');
      options?.onError?.(error instanceof Error ? error.message : 'Unknown error');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting };
};
