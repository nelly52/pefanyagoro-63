import React from 'react';
import { PaymentButton } from '@/components/PaymentButton';
import { Leaf } from 'lucide-react';
import { customAmounts } from './donationData';

export const QuickDonation = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Quick Donation Options
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {customAmounts.map((amount) => (
          <PaymentButton
            key={amount}
            amount={amount}
            description={`KSh ${amount} donation`}
            variant="outline"
            className="w-full border-green-300 text-green-700 hover:bg-green-100 hover:border-green-400"
          />
        ))}
      </div>
      <div className="text-center">
        <p className="text-gray-600 mb-4 flex items-center justify-center">
          <Leaf className="h-4 w-4 mr-2 text-green-600" />
          Or make a custom donation amount
        </p>
        <PaymentButton
          amount={1000}
          description="Custom donation amount"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
        />
      </div>
    </div>
  );
};