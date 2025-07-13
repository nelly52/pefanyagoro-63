
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Smartphone, Heart, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const mpesaSchema = z.object({
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^[\+]?[0-9]{10,13}$/, 'Please enter a valid phone number'),
  amount: z.number().min(1, 'Amount must be at least KSh 1'),
});

type MPesaFormData = z.infer<typeof mpesaSchema>;

interface MPesaPaymentButtonProps {
  defaultAmount?: number;
  description?: string;
  accountReference?: string;
  className?: string;
}

export const MPesaPaymentButton = ({ 
  defaultAmount = 100, 
  description = 'Support PEFA NYAGORO programs',
  accountReference = 'DONATION',
  className = ''
}: MPesaPaymentButtonProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const form = useForm<MPesaFormData>({
    resolver: zodResolver(mpesaSchema),
    defaultValues: {
      phoneNumber: '',
      amount: defaultAmount,
    },
  });

  const handleMPesaPayment = async (data: MPesaFormData) => {
    setIsProcessing(true);
    
    try {
      const { data: result, error } = await supabase.functions.invoke('mpesa-stk-push', {
        body: {
          phoneNumber: data.phoneNumber,
          amount: data.amount,
          accountReference: accountReference,
          transactionDesc: description,
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (result.success) {
        toast.success('Payment request sent!', {
          description: 'Please check your phone and enter your M-Pesa PIN to complete the payment.',
          duration: 6000,
        });
        form.reset();
        setShowForm(false);
      } else {
        throw new Error(result.message || 'Payment request failed');
      }
    } catch (error) {
      console.error('M-Pesa payment error:', error);
      toast.error('Payment failed', {
        description: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (!showForm) {
    return (
      <Button 
        onClick={() => setShowForm(true)}
        className={`bg-green-600 hover:bg-green-700 ${className}`}
        size="lg"
      >
        <Smartphone className="h-5 w-5 mr-2" />
        Pay with M-Pesa
        <Heart className="h-4 w-4 ml-2" />
      </Button>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center text-green-600">
          <Smartphone className="h-6 w-6 mr-2" />
          M-Pesa Payment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleMPesaPayment)} className="space-y-4">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="0712345678 or +254712345678" 
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount (KSh)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="1"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-sm text-gray-600 p-3 bg-green-50 rounded-lg">
              <p className="font-medium text-green-800 mb-1">Bank Account Details:</p>
              <p>Co-operative Bank: 01128590464400</p>
              <p>All M-Pesa payments go directly to this account.</p>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForm(false)}
                className="flex-1"
                disabled={isProcessing}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isProcessing}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Heart className="h-4 w-4 mr-2" />
                    Send KSh {form.watch('amount')}
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
