
import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Heart } from 'lucide-react';
import { toast } from 'sonner';

interface PaymentButtonProps {
  amount?: number;
  currency?: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'default' | 'lg';
}

export const PaymentButton = ({ 
  amount = 50, 
  currency = 'USD',
  description = 'Support our programs',
  className = '',
  variant = 'default',
  size = 'default'
}: PaymentButtonProps) => {
  
  const handlePayment = () => {
    // For now, we'll show a toast with PayPal/Stripe integration placeholder
    // In a real implementation, you would integrate with PayPal, Stripe, or other payment processors
    toast.success(`Redirecting to secure payment gateway for $${amount} ${currency}`, {
      description: description,
      duration: 4000,
    });
    
    // Simulate payment redirect
    setTimeout(() => {
      // Here you would normally redirect to PayPal, Stripe, or other payment processor
      window.open('https://www.paypal.com/donate', '_blank');
    }, 2000);
  };

  return (
    <Button 
      onClick={handlePayment}
      className={`${className}`}
      variant={variant}
      size={size}
    >
      <Heart className="h-4 w-4 mr-2" />
      Donate ${amount} {currency}
      <CreditCard className="h-4 w-4 ml-2" />
    </Button>
  );
};
