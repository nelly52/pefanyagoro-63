
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFormSubmission } from '@/hooks/useFormSubmission';

const programSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  program_type: z.string().min(1, 'Please select a program'),
  age: z.string().optional(),
  experience: z.string().optional(),
  motivation: z.string().min(10, 'Please tell us more about your motivation'),
});

type ProgramFormData = z.infer<typeof programSchema>;

interface ProgramApplicationFormProps {
  onClose?: () => void;
}

export const ProgramApplicationForm = ({ onClose }: ProgramApplicationFormProps) => {
  const { submitForm, isSubmitting } = useFormSubmission({
    onSuccess: () => {
      form.reset();
      onClose?.();
    }
  });

  const form = useForm<ProgramFormData>({
    resolver: zodResolver(programSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      program_type: '',
      age: '',
      experience: '',
      motivation: '',
    },
  });

  const onSubmit = async (data: ProgramFormData) => {
    await submitForm('program_applications', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 123-4567" {...field} />
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
                <FormLabel>Age Group (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 25-35" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="program_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Program Interest</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="child-sponsorship">Child Sponsorship Program</SelectItem>
                  <SelectItem value="self-reliance">Self-Reliance and Education</SelectItem>
                  <SelectItem value="health-nutrition">Health and Nutrition</SelectItem>
                  <SelectItem value="leadership">Leadership Development</SelectItem>
                  <SelectItem value="caregiver-empowerment">Caregiver Empowerment</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Relevant Experience (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about any relevant experience you have..."
                  className="min-h-[80px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="motivation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why are you interested in this program?</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Share your motivation and how you hope to contribute..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-green-600 hover:bg-green-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      </form>
    </Form>
  );
};
