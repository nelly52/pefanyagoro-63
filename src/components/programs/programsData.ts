
import {
  BookOpenCheck,
  BrainCircuit,
  Flame,
  HeartHandshake,
  Lightbulb,
  Users2,
} from 'lucide-react';

export const programsData = [
  {
    title: "Child Sponsorship Program",
    description: "We provide comprehensive support to children in need, ensuring they have access to education, healthcare, and nutritious meals. Our holistic approach addresses immediate needs while building long-term foundations for success.",
    icon: HeartHandshake,
    color: "bg-blue-500",
    ageGroup: "All Ages",
    duration: "Long-term commitment",
    location: "Community-based",
    activities: [
      "Educational support and school fees coverage",
      "Nutritional assistance and regular meals",
      "Healthcare access and medical checkups",
      "Mentorship programs with trained volunteers",
      "Life skills development workshops",
      "Family support and counseling services"
    ],
    outcomes: [
      "95% of sponsored children complete primary education",
      "Improved health and nutrition outcomes",
      "Stronger family relationships and support systems"
    ]
  },
  {
    title: "Self-Reliance and Education",
    description: "We empower families through comprehensive education and vocational training programs. Our approach focuses on building sustainable livelihoods that break the cycle of poverty and create lasting change.",
    icon: BookOpenCheck,
    color: "bg-green-500",
    ageGroup: "Youth & Adults",
    duration: "6-12 months",
    location: "Training centers & Communities",
    activities: [
      "Vocational training in high-demand skills",
      "Business development and entrepreneurship workshops",
      "Microfinance initiatives and savings groups",
      "Adult literacy and numeracy programs",
      "Technology and digital skills training",
      "Market linkage and business networking"
    ],
    outcomes: [
      "80% of graduates start their own businesses",
      "Average income increase of 150%",
      "Enhanced community economic development"
    ]
  },
  {
    title: "Health and Nutrition",
    description: "We work to improve community health through education, prevention, and access to essential services. Our programs focus on sustainable health practices that families can maintain long-term.",
    icon: Flame,
    color: "bg-red-500",
    ageGroup: "All Ages",
    duration: "Ongoing community programs",
    location: "Health centers & Communities",
    activities: [
      "Health education workshops and community outreach",
      "Nutritional counseling and cooking demonstrations",
      "Clean water initiatives and sanitation projects",
      "Disease prevention campaigns and immunization drives",
      "Maternal and child health support programs",
      "Community health worker training programs"
    ],
    outcomes: [
      "50% reduction in preventable diseases",
      "Improved maternal and child health indicators",
      "Increased access to clean water and sanitation"
    ]
  },
  {
    title: "Leadership Development",
    description: "We cultivate the next generation of community leaders through comprehensive training and hands-on experience. Our program builds confident, capable leaders who drive positive change in their communities.",
    icon: Lightbulb,
    color: "bg-yellow-500",
    ageGroup: "Youth (16-25 years)",
    duration: "12-18 months",
    location: "Leadership centers & Field placements",
    activities: [
      "Leadership theory and practical application workshops",
      "Mentorship programs with established leaders",
      "Community service projects and social impact initiatives",
      "Public speaking training and communication skills",
      "Project management and organizational development",
      "Civic engagement and community organizing"
    ],
    outcomes: [
      "90% of graduates take on leadership roles",
      "Increased youth participation in community decisions",
      "New community development projects initiated"
    ]
  },
  {
    title: "Caregiver Empowerment",
    description: "We provide comprehensive support to caregivers, equipping them with the skills, knowledge, and resources needed to create nurturing environments for children and strengthen family structures.",
    icon: Users2,
    color: "bg-purple-500",
    ageGroup: "Adults (Parents & Guardians)",
    duration: "3-6 months intensive + ongoing support",
    location: "Community centers & Home visits",
    activities: [
      "Parenting skills workshops and family counseling",
      "Financial literacy training and budget management",
      "Mental health support and stress management",
      "Networking opportunities and peer support groups",
      "Child development education and milestone tracking",
      "Crisis intervention and emergency support services"
    ],
    outcomes: [
      "Improved family relationships and communication",
      "Better financial management and savings habits",
      "Reduced family stress and conflict"
    ]
  },
  {
    title: "Innovation and Technology",
    description: "We prepare youth for the digital economy by providing cutting-edge technology training and innovation opportunities. Our programs bridge the digital divide and create pathways to modern careers.",
    icon: BrainCircuit,
    color: "bg-orange-500",
    ageGroup: "Youth (14-30 years)",
    duration: "6-12 months",
    location: "Technology hubs & Online platforms",
    activities: [
      "Coding and app development bootcamps",
      "Robotics training and engineering projects",
      "AI and machine learning fundamentals",
      "Digital skills training and computer literacy",
      "Innovation challenges and hackathons",
      "Technology entrepreneurship and startup incubation"
    ],
    outcomes: [
      "70% of graduates find tech-related employment",
      "New technology solutions for community problems",
      "Increased digital literacy in communities"
    ]
  },
];
