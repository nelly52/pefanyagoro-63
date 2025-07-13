
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Heart, Smartphone } from 'lucide-react';
import { toast } from 'sonner';
import { MPesaPaymentButton } from './MPesaPaymentButton';

interface PaymentButtonProps {
  amount?: number;
  currency?: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'default' | 'lg';
}

export const PaymentButton = ({ 
  amount = 100, 
  currency = 'KSh',
  description = 'Support PEFA NYAGORO programs',
  className = '',
  variant = 'default',
  size = 'default'
}: PaymentButtonProps) => {
  const [showMPesa, setShowMPesa] = useState(false);
  
  const handleOtherPayments = () => {
    toast.info('Alternative Payment Methods', {
      description: 'For bank transfers, please use: Co-operative Bank Account: 01128590464400',
      duration: 8000,
    });
  };

  if (showMPesa) {
    return (
      <div className="space-y-4">
        <MPesaPaymentButton 
          defaultAmount={amount}
          description={description}
          accountReference="DONATION"
        />
        <Button 
          variant="outline" 
          onClick={() => setShowMPesa(false)}
          className="w-full"
        >
          Back to Payment Options
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <Button 
        onClick={() => setShowMPesa(true)}
        className={`w-full bg-green-600 hover:bg-green-700 ${className}`}
        variant={variant}
        size={size}
      >
        <Smartphone className="h-4 w-4 mr-2" />
        Pay with M-Pesa ({currency} {amount})
        <Heart className="h-4 w-4 ml-2" />
      </Button>

      <Button 
        onClick={handleOtherPayments}
        variant="outline"
        className={`w-full ${className}`}
        size={size}
      >
        <CreditCard className="h-4 w-4 mr-2" />
        Other Payment Methods
      </Button>

      <div className="text-xs text-center text-gray-600 mt-2">
        All payments go directly to Co-operative Bank: 01128590464400
      </div>
    </div>
  );
};
