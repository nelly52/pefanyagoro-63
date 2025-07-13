
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PaymentButton } from '@/components/PaymentButton';
import {
  Heart,
  Users,
  GraduationCap,
  Baby,
  Target,
  DollarSign,
  CreditCard,
} from 'lucide-react';

const DonateNow = () => {
  const donationTiers = [
    {
      title: "Child Sponsor",
      amount: 50,
      description: "Sponsor a child's education and basic needs for one month",
      icon: Baby,
      color: "bg-blue-500",
      benefits: [
        "Educational support and school fees coverage",
        "Nutritional assistance and regular meals",
        "Healthcare access and medical checkups",
        "Monthly progress reports"
      ]
    },
    {
      title: "Family Support",
      amount: 100,
      description: "Support a family with caregiver empowerment programs",
      icon: Users,
      color: "bg-green-500",
      benefits: [
        "Parenting skills workshops",
        "Agricultural training programs",
        "Business development support",
        "Financial literacy training"
      ]
    },
    {
      title: "Program Champion",
      amount: 250,
      description: "Fund comprehensive program activities for multiple families",
      icon: GraduationCap,
      color: "bg-purple-500",
      benefits: [
        "Leadership development programs",
        "Community health initiatives",
        "Innovation and technology training",
        "Self-reliance education programs"
      ]
    },
    {
      title: "Community Builder",
      amount: 500,
      description: "Make a significant impact across all our programs",
      icon: Heart,
      color: "bg-red-500",
      benefits: [
        "Support multiple program areas",
        "Fund equipment and resources",
        "Enable program expansion",
        "Create lasting community change"
      ]
    }
  ];

  const customAmounts = [25, 75, 150, 300];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Make a Difference Today
          </h1>
          <p className="text-xl text-green-100 max-w-4xl mx-auto">
            Your donation directly supports children, families, and communities in need. 
            Every contribution helps us build stronger, more resilient communities through 
            our comprehensive programs.
          </p>
          <div className="mt-8 flex justify-center">
            <Badge className="bg-green-400 text-green-900 text-lg px-6 py-3">
              100% of donations go directly to programs
            </Badge>
          </div>
        </div>
      </section>

      {/* Donation Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose how you'd like to make a difference. Every donation amount has a meaningful impact on our community programs.
            </p>
          </div>

          {/* Donation Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationTiers.map((tier, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className={`h-3 ${tier.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <tier.icon className="h-10 w-10 text-blue-600" />
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      KSh {tier.amount}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">{tier.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Target className="h-4 w-4 mr-2 text-green-600" />
                      What Your Donation Provides:
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
                    className="w-full"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Donation Amounts */}
          <div className="bg-gray-50 rounded-lg p-8">
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
                  className="w-full"
                />
              ))}
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-4">Or make a custom donation amount</p>
              <PaymentButton
                amount={1000}
                description="Custom donation amount"
                className="bg-blue-600 hover:bg-blue-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CreditCard className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Secure Payment Methods
            </h2>
            <p className="text-lg text-gray-600">
              We accept multiple payment methods for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
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

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Bank Transfer</h3>
                  <p className="text-sm text-gray-600">Direct bank account transfer</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2"><strong>Bank:</strong> Co-operative Bank</p>
                <p><strong>Account:</strong> 01128590464400</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Us in Creating Change
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Your support enables us to continue our mission of empowering children, 
            families, and communities. Together, we can build a brighter future for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PaymentButton 
              amount={100}
              description="Monthly support donation"
              className="bg-white text-green-600 hover:bg-gray-100"
            />
            <PaymentButton 
              amount={500}
              description="One-time major support"
              className="bg-white text-green-600 hover:bg-gray-100"
            />
          </div>
          <p className="text-sm text-green-200 mt-6">
            All donations are secure and go directly to program implementation
          </p>
        </div>
      </section>
    </div>
  );
};

export default DonateNow;
