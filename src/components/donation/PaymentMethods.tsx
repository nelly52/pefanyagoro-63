import React from 'react';
import { Card } from '@/components/ui/card';
import { CreditCard, DollarSign } from 'lucide-react';

export const PaymentMethods = () => {
  return (
    <section className="py-16 bg-white border-t border-green-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <CreditCard className="h-12 w-12 mx-auto mb-4 text-green-600" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Secure Payment Methods
          </h2>
          <p className="text-lg text-gray-600">
            We accept multiple payment methods for your convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 border-green-200 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">M-Pesa Payments</h3>
                <p className="text-sm text-gray-600">Pay directly using M-Pesa</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Secure and instant payments through M-Pesa. Funds go directly to our 
              Co-operative Bank account for immediate program support.
            </p>
          </Card>

          <Card className="p-6 border-green-200 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                <CreditCard className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Bank Transfer</h3>
                <p className="text-sm text-gray-600">Direct bank account transfer</p>
              </div>
            </div>
            <div className="text-sm text-gray-600 bg-emerald-50 p-3 rounded-lg">
              <p className="mb-2"><strong>Bank:</strong> Co-operative Bank</p>
              <p><strong>Account:</strong> 01128590464400</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};