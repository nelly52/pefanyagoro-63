
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFormSubmission } from '@/hooks/useFormSubmission';

const workshopSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  workshop_type: z.string().min(1, 'Please select a workshop type'),
  preferred_date: z.string().optional(),
});

type WorkshopFormData = z.infer<typeof workshopSchema>;

interface WorkshopRegistrationFormProps {
  onClose?: () => void;
}

export const WorkshopRegistrationForm = ({ onClose }: WorkshopRegistrationFormProps) => {
  const { submitForm, isSubmitting } = useFormSubmission({
    onSuccess: () => {
      form.reset();
      onClose?.();
    }
  });

  const form = useForm<WorkshopFormData>({
    resolver: zodResolver(workshopSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      workshop_type: '',
      preferred_date: '',
    },
  });

  const onSubmit = async (data: WorkshopFormData) => {
    await submitForm('workshop_registrations', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="+1 (555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workshop_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workshop Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a workshop" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="parenting">Parenting Skills</SelectItem>
                  <SelectItem value="child-development">Child Development</SelectItem>
                  <SelectItem value="health-nutrition">Health & Nutrition</SelectItem>
                  <SelectItem value="literacy">Literacy Training</SelectItem>
                  <SelectItem value="financial-literacy">Financial Literacy</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferred_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Date (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Next weekend, Weekdays only" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-purple-600 hover:bg-purple-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Registering...' : 'Register for Workshop'}
        </Button>
      </form>
    </Form>
  );
};
