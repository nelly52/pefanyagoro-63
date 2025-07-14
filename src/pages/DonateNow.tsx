
import React from 'react';
import { DonationHero } from '@/components/donation/DonationHero';
import { DonationTiers } from '@/components/donation/DonationTiers';
import { QuickDonation } from '@/components/donation/QuickDonation';
import { PaymentMethods } from '@/components/donation/PaymentMethods';
import { DonationCallToAction } from '@/components/donation/DonationCallToAction';

const DonateNow = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DonationHero />
      
      {/* Donation Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Impact Grows Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose how you'd like to make a difference. Every donation amount plants seeds of change that grow into lasting transformation.
            </p>
          </div>

          <DonationTiers />
          <QuickDonation />
        </div>
      </section>

      <PaymentMethods />
      <DonationCallToAction />
    </div>
  );
};

export default DonateNow;
