import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PaymentButton } from '@/components/PaymentButton';
import { Target } from 'lucide-react';
import { donationTiersData } from './donationData';

export const DonationTiers = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {donationTiersData.map((tier, index) => (
        <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group hover:scale-105">
          <div className={`h-3 ${tier.color} group-hover:h-4 transition-all duration-300`}></div>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-4">
              <tier.icon className="h-10 w-10 text-green-600 group-hover:text-green-700 transition-colors" />
              <Badge variant="outline" className="text-green-700 border-green-300 bg-green-50">
                KSh {tier.amount}
              </Badge>
            </div>
            <CardTitle className="text-xl text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
              {tier.title}
            </CardTitle>
            <p className="text-gray-600 text-sm">{tier.description}</p>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Target className="h-4 w-4 mr-2 text-green-600" />
                Your Donation Provides:
              </h4>
              <div className="space-y-2">
                {tier.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <PaymentButton 
              amount={tier.amount}
              description={`${tier.title} donation`}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};