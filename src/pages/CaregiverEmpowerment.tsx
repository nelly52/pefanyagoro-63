
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Users, Sprout, TrendingUp, BookOpen, Share2, Calendar, MapPin } from 'lucide-react';
import { PaymentButton } from '@/components/PaymentButton';

const CaregiverEmpowerment = () => {
  const impactStories = [
    {
      category: 'Parenting Skills',
      icon: <Heart className="h-6 w-6" />,
      title: 'Building Stronger Family Bonds',
      story: 'Margaret Atieno, mother of three from Nyagoro village, learned positive parenting techniques through our workshops. "Before the training, I used to shout at my children when they misbehaved. Now I understand their needs better and communicate with love and patience. My children are happier, perform better in school, and our home is filled with laughter instead of tears."',
      impact: 'Children show 40% improvement in school performance and behavioral development',
      beneficiaries: '125 families reached',
      color: 'bg-pink-50 border-pink-200',
      badgeColor: 'bg-pink-500'
    },
    {
      category: 'Sunflower Farming',
      icon: <Sprout className="h-6 w-6" />,
      title: 'Golden Harvest Success',
      story: 'Peter Ochieng transformed his half-acre plot into a thriving sunflower farm after our agriculture training. "I learned about proper spacing, fertilizer application, and pest control. My first harvest yielded 8 bags of sunflower seeds, earning me KSh 24,000. This money helped me pay school fees and buy food for my family. Now I\'ve expanded to 2 acres and earn KSh 60,000 per season."',
      impact: '300% increase in farm income within one growing season',
      beneficiaries: '89 farmers trained',
      color: 'bg-yellow-50 border-yellow-200',
      badgeColor: 'bg-yellow-500'
    },
    {
      category: 'Rice Farming',
      icon: <Sprout className="h-6 w-6" />,
      title: 'From Subsistence to Commercial Farming',
      story: 'Grace Awino\'s rice farming journey changed her family\'s destiny. "We used traditional methods and harvested only 3 bags from our plot. After learning modern rice cultivation techniques, water management, and proper timing, we now harvest 15 bags per season. I\'ve become a supplier to local markets and schools, earning KSh 45,000 every harvest. My children no longer go hungry."',
      impact: '500% increase in rice yield and sustainable food security',
      beneficiaries: '67 rice farmers empowered',
      color: 'bg-green-50 border-green-200',
      badgeColor: 'bg-green-500'
    },
    {
      category: 'Pineapple Farming',
      icon: <Sprout className="h-6 w-6" />,
      title: 'Sweet Success Through Patience',
      story: 'Samuel Ouma invested in pineapple farming after our training on fruit cultivation. "Pineapples take 18 months to mature, but the wait was worth it. I learned about soil preparation, proper planting techniques, and disease management. My first harvest of 200 pineapples earned me KSh 30,000. Now I have 500 plants and expect KSh 75,000 from my next harvest. This has enabled me to build a better house and start a small shop."',
      impact: 'Long-term sustainable income and community economic growth',
      beneficiaries: '45 fruit farmers supported',
      color: 'bg-orange-50 border-orange-200',
      badgeColor: 'bg-orange-500'
    },
    {
      category: 'Maize Farming',
      icon: <Sprout className="h-6 w-6" />,
      title: 'Feeding Families, Growing Communities',
      story: 'Mary Adhiambo\'s maize farm became a beacon of hope in Nyagoro. "Using improved seeds, proper fertilizer application, and irrigation techniques we learned, my maize yield increased from 4 bags to 20 bags per acre. I now supply maize to local schools and markets, earning KSh 40,000 per harvest. More importantly, my family has enough food throughout the year, and I\'ve hired 3 young people to help on the farm."',
      impact: 'Food security achieved for 80% of participating families',
      beneficiaries: '156 maize farmers trained',
      color: 'bg-amber-50 border-amber-200',
      badgeColor: 'bg-amber-500'
    },
    {
      category: 'Business Development',
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Breaking the Cycle of Poverty',
      story: 'Jane Akoth started with KSh 2,000 and a dream. Through our business skills training, she learned about budgeting, customer service, and market analysis. "I started selling vegetables at the local market. Within 6 months, I expanded to include fish and household items. Today, my business generates KSh 15,000 monthly profit. I\'ve employed my neighbor and we\'re planning to open a small shop. My children are in school and we have hope for the future."',
      impact: '12 successful businesses launched, creating 25 jobs in the community',
      beneficiaries: '78 entrepreneurs mentored',
      color: 'bg-blue-50 border-blue-200',
      badgeColor: 'bg-blue-500'
    }
  ];

  const programs = [
    {
      title: 'Positive Parenting Workshops',
      description: 'Weekly sessions on child development, communication, and building healthy family relationships',
      schedule: 'Every Saturday, 2:00 PM - 4:00 PM',
      location: 'PEFA NYAGORO Church Community Hall'
    },
    {
      title: 'Agriculture Training Program',
      description: 'Hands-on training in modern farming techniques for sunflower, rice, pineapple, and maize cultivation',
      schedule: 'Twice monthly, practical field demonstrations',
      location: 'Community demonstration farms'
    },
    {
      title: 'Business Development Support',
      description: 'Entrepreneurship training, micro-finance support, and ongoing business mentorship',
      schedule: 'Monthly workshops + individual consultations',
      location: 'Various community centers'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Caregiver Empowerment Stories
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Real stories of transformation from our community members who have built stronger families, 
              achieved food security, and created sustainable livelihoods through our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-green-100">Families Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">85%</div>
                <div className="text-green-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">KSh 2.5M</div>
                <div className="text-green-100">Community Income Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stories of Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every story represents a family lifted from vulnerability to empowerment. 
              These are real people with real transformations in our Nyagoro community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <Card key={index} className={`${story.color} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-700">
                      {story.icon}
                      <span className="ml-2 font-medium">{story.category}</span>
                    </div>
                    <Badge className={`${story.badgeColor} text-white`}>
                      Success Story
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {story.story}
                  </p>
                  
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-medium">Impact:</span>
                    </div>
                    <p className="text-sm text-gray-700 ml-6">{story.impact}</p>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="font-medium">{story.beneficiaries}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Empowerment Programs
            </h2>
            <p className="text-lg text-gray-600">
              Join our ongoing programs and become part of these success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{program.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      <span>{program.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
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
    </div>
  );
};

export default CaregiverEmpowerment;
