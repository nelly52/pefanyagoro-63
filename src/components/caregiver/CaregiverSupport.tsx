import React from 'react';
import { PaymentButton } from '@/components/PaymentButton';

export const CaregiverSupport = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Help Us Create More Success Stories
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your support directly impacts families in Nyagoro village. Every donation helps provide training, 
          seeds, tools, and ongoing support that transforms lives and builds stronger communities.
        </p>
        
        <div className="max-w-md mx-auto">
          <PaymentButton 
            amount={500}
            description="Support Caregiver Empowerment Programs"
            className="mb-4"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-2">KSh 500</div>
            <p className="text-gray-600">Provides seeds and tools for one family</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">KSh 1,500</div>
            <p className="text-gray-600">Sponsors one family through complete training</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-purple-600 mb-2">KSh 5,000</div>
            <p className="text-gray-600">Supports an entire workshop for 20 families</p>
          </div>
        </div>
      </div>
    </section>
  );
};