import { Heart, Users, GraduationCap, Baby } from 'lucide-react';

export const donationTiersData = [
  {
    title: "Child Sponsor",
    amount: 50,
    description: "Sponsor a child's education and basic needs for one month",
    icon: Baby,
    color: "bg-green-500",
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
    color: "bg-emerald-500",
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
    color: "bg-green-600",
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
    color: "bg-emerald-600",
    benefits: [
      "Support multiple program areas",
      "Fund equipment and resources",
      "Enable program expansion",
      "Create lasting community change"
    ]
  }
];

export const customAmounts = [25, 75, 150, 300];