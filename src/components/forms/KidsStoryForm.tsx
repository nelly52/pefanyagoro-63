
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useFormSubmission } from '@/hooks/useFormSubmission';

const storySchema = z.object({
  child_name: z.string().min(2, 'Child name must be at least 2 characters'),
  age: z.string().optional(),
  story: z.string().min(20, 'Story must be at least 20 characters'),
  parent_email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
});

type StoryFormData = z.infer<typeof storySchema>;

interface KidsStoryFormProps {
  onClose?: () => void;
}

export const KidsStoryForm = ({ onClose }: KidsStoryFormProps) => {
  const { submitForm, isSubmitting } = useFormSubmission({
    onSuccess: () => {
      form.reset();
      onClose?.();
    }
  });

  const form = useForm<StoryFormData>({
    resolver: zodResolver(storySchema),
    defaultValues: {
      child_name: '',
      age: '',
      story: '',
      parent_email: '',
    },
  });

  const onSubmit = async (data: StoryFormData) => {
    const formData = {
      ...data,
      age: data.age ? parseInt(data.age) : null,
      parent_email: data.parent_email || null,
    };
    await submitForm('kids_stories', formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="child_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Child's Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter child's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age (Optional)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Child's age" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="parent_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent/Guardian Email (Optional)</FormLabel>
              <FormControl>
                <Input type="email" placeholder="parent@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="story"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Share Your Amazing Story!</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your achievements, dreams, or something wonderful that happened to you..."
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sharing...' : 'Share My Story! ✨'}
        </Button>
      </form>
    </Form>
  );
};
