import React from 'react';
import { Heart, Sprout, TrendingUp } from 'lucide-react';

export const impactStoriesData = [
  {
    category: 'Parenting Skills',
    icon: React.createElement(Heart, { className: "h-6 w-6" }),
    title: 'Building Stronger Family Bonds',
    story: 'Margaret Atieno, mother of three from Nyagoro village, learned positive parenting techniques through our workshops. "Before the training, I used to shout at my children when they misbehaved. Now I understand their needs better and communicate with love and patience. My children are happier, perform better in school, and our home is filled with laughter instead of tears."',
    impact: 'Children show 40% improvement in school performance and behavioral development',
    beneficiaries: '125 families reached',
    color: 'bg-pink-50 border-pink-200',
    badgeColor: 'bg-pink-500'
  },
  {
    category: 'Sunflower Farming',
    icon: React.createElement(Sprout, { className: "h-6 w-6" }),
    title: 'Golden Harvest Success',
    story: 'Peter Ochieng transformed his half-acre plot into a thriving sunflower farm after our agriculture training. "I learned about proper spacing, fertilizer application, and pest control. My first harvest yielded 8 bags of sunflower seeds, earning me KSh 24,000. This money helped me pay school fees and buy food for my family. Now I\'ve expanded to 2 acres and earn KSh 60,000 per season."',
    impact: '300% increase in farm income within one growing season',
    beneficiaries: '89 farmers trained',
    color: 'bg-yellow-50 border-yellow-200',
    badgeColor: 'bg-yellow-500'
  },
  {
    category: 'Rice Farming',
    icon: React.createElement(Sprout, { className: "h-6 w-6" }),
    title: 'From Subsistence to Commercial Farming',
    story: 'Grace Awino\'s rice farming journey changed her family\'s destiny. "We used traditional methods and harvested only 3 bags from our plot. After learning modern rice cultivation techniques, water management, and proper timing, we now harvest 15 bags per season. I\'ve become a supplier to local markets and schools, earning KSh 45,000 every harvest. My children no longer go hungry."',
    impact: '500% increase in rice yield and sustainable food security',
    beneficiaries: '67 rice farmers empowered',
    color: 'bg-green-50 border-green-200',
    badgeColor: 'bg-green-500'
  },
  {
    category: 'Pineapple Farming',
    icon: React.createElement(Sprout, { className: "h-6 w-6" }),
    title: 'Sweet Success Through Patience',
    story: 'Samuel Ouma invested in pineapple farming after our training on fruit cultivation. "Pineapples take 18 months to mature, but the wait was worth it. I learned about soil preparation, proper planting techniques, and disease management. My first harvest of 200 pineapples earned me KSh 30,000. Now I have 500 plants and expect KSh 75,000 from my next harvest. This has enabled me to build a better house and start a small shop."',
    impact: 'Long-term sustainable income and community economic growth',
    beneficiaries: '45 fruit farmers supported',
    color: 'bg-orange-50 border-orange-200',
    badgeColor: 'bg-orange-500'
  },
  {
    category: 'Maize Farming',
    icon: React.createElement(Sprout, { className: "h-6 w-6" }),
    title: 'Feeding Families, Growing Communities',
    story: 'Mary Adhiambo\'s maize farm became a beacon of hope in Nyagoro. "Using improved seeds, proper fertilizer application, and irrigation techniques we learned, my maize yield increased from 4 bags to 20 bags per acre. I now supply maize to local schools and markets, earning KSh 40,000 per harvest. More importantly, my family has enough food throughout the year, and I\'ve hired 3 young people to help on the farm."',
    impact: 'Food security achieved for 80% of participating families',
    beneficiaries: '156 maize farmers trained',
    color: 'bg-amber-50 border-amber-200',
    badgeColor: 'bg-amber-500'
  },
  {
    category: 'Business Development',
    icon: React.createElement(TrendingUp, { className: "h-6 w-6" }),
    title: 'Breaking the Cycle of Poverty',
    story: 'Jane Akoth started with KSh 2,000 and a dream. Through our business skills training, she learned about budgeting, customer service, and market analysis. "I started selling vegetables at the local market. Within 6 months, I expanded to include fish and household items. Today, my business generates KSh 15,000 monthly profit. I\'ve employed my neighbor and we\'re planning to open a small shop. My children are in school and we have hope for the future."',
    impact: '12 successful businesses launched, creating 25 jobs in the community',
    beneficiaries: '78 entrepreneurs mentored',
    color: 'bg-blue-50 border-blue-200',
    badgeColor: 'bg-blue-500'
  }
];

export const programsData = [
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