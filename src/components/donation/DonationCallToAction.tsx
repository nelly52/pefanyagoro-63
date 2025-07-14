import React from 'react';
import { PaymentButton } from '@/components/PaymentButton';
import { Heart, TreePine, Leaf, Target } from 'lucide-react';

export const DonationCallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            <TreePine className="h-8 w-8 text-green-200" />
            <Heart className="h-8 w-8 text-white" fill="currentColor" />
            <Leaf className="h-8 w-8 text-green-200" />
          </div>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Join Us in Growing Change
        </h2>
        <p className="text-xl text-green-100 mb-8">
          Your support enables us to continue our mission of empowering children, 
          families, and communities. Together, we can cultivate a brighter future for everyone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PaymentButton 
            amount={100}
            description="Monthly support donation"
            className="bg-white text-green-600 hover:bg-green-50 px-8 py-3"
          />
          <PaymentButton 
            amount={500}
            description="One-time major support"
            className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3"
          />
        </div>
        <p className="text-sm text-green-200 mt-6 flex items-center justify-center">
          <Target className="h-4 w-4 mr-2" />
          All donations are secure and go directly to program implementation
        </p>
      </div>
    </section>
  );
};