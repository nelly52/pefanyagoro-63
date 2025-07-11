
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Sprout, 
  DollarSign, 
  Users, 
  BookOpen, 
  TrendingUp,
  Heart,
  Wheat,
  Sun,
  Droplets,
  ShoppingBag,
  PiggyBank,
  GraduationCap,
  Handshake,
  ExternalLink
} from 'lucide-react';

const CaregiverEmpowerment = () => {
  const [activeProgram, setActiveProgram] = useState<string | null>(null);

  const empowermentPrograms = [
    {
      id: "agriculture",
      title: "🌾 Agricultural Training",
      description: "Sustainable farming techniques for food security and income generation",
      icon: Sprout,
      color: "bg-green-500",
      topics: [
        {
          name: "Rice Farming",
          details: "Learn modern rice cultivation techniques, pest management, and post-harvest handling. Our program covers seedbed preparation, transplanting, water management, and marketing strategies.",
          benefits: ["Increased yield by 40%", "Reduced pest damage", "Better market prices"]
        },
        {
          name: "Sunflower Cultivation", 
          details: "Master sunflower farming from seed selection to oil processing. Training includes soil preparation, planting techniques, harvesting, and value addition through oil extraction.",
          benefits: ["High market demand", "Drought resistant crop", "Multiple income streams"]
        },
        {
          name: "Pineapple Growing",
          details: "Comprehensive pineapple farming including variety selection, land preparation, planting, fertilization, and disease management. Learn about organic farming practices.",
          benefits: ["Long-term investment", "Export opportunities", "High profit margins"]
        },
        {
          name: "Maize Farming",
          details: "Modern maize production techniques including hybrid seed usage, proper spacing, fertilizer application, and storage methods to minimize post-harvest losses.",
          benefits: ["Food security", "Steady income", "Local market availability"]
        }
      ]
    },
    {
      id: "parenting",
      title: "👨‍👩‍👧‍👦 Parenting Skills",
      description: "Building strong families through effective parenting and child development",
      icon: Heart,
      color: "bg-pink-500",
      topics: [
        {
          name: "Child Development",
          details: "Understanding different stages of child development and age-appropriate expectations. Learn how to support your child's physical, emotional, and self-reliance growth.",
          benefits: ["Better parent-child relationship", "Improved child behavior", "Academic success"]
        },
        {
          name: "Positive Discipline",
          details: "Effective discipline strategies that build character without harming relationships. Learn alternatives to physical punishment and how to set healthy boundaries.",
          benefits: ["Reduced behavioral problems", "Increased cooperation", "Better family harmony"]
        },
        {
          name: "Communication Skills",
          details: "Learn how to communicate effectively with children of different ages. Practice active listening, empathy, and conflict resolution within the family.",
          benefits: ["Open family communication", "Trust building", "Emotional intelligence"]
        },
        {
          name: "Supporting Self-Reliance and Education",
          details: "How to create a learning environment at home and support your child's educational journey while fostering independence. Learn about homework help and school collaboration.",
          benefits: ["Better academic performance", "Love for learning", "Future opportunities"]
        }
      ]
    },
    {
      id: "business",
      title: "💼 Business Development",
      description: "Entrepreneurship training and microfinance opportunities",
      icon: DollarSign,
      color: "bg-blue-500",
      topics: [
        {
          name: "Small Business Setup",
          details: "Step-by-step guide to starting a small business including business planning, registration, and initial setup. Learn about legal requirements and permits.",
          benefits: ["Financial independence", "Job creation", "Community development"]
        },
        {
          name: "Financial Literacy",
          details: "Basic financial management including budgeting, saving, record keeping, and understanding credit. Learn how to separate business and personal finances.",
          benefits: ["Better money management", "Access to credit", "Business growth"]
        },
        {
          name: "Marketing & Sales",
          details: "Effective marketing strategies for small businesses including customer identification, pricing, promotion, and customer service excellence.",
          benefits: ["Increased sales", "Customer loyalty", "Business expansion"]
        },
        {
          name: "Cooperative Formation",
          details: "Learn how to form and manage cooperatives for collective bargaining, bulk purchasing, and shared resources. Understand cooperative principles and governance.",
          benefits: ["Reduced costs", "Better market access", "Shared resources"]
        }
      ]
    }
  ];

  const successStories = [
    {
      name: "Mary Wanjiku",
      program: "Rice Farming",
      achievement: "Increased her rice yield by 60% and now supplies to local schools",
      image: "/lovable-uploads/30158fb2-5524-458e-9f35-9c62972dd6fc.png"
    },
    {
      name: "Peter Kamau",
      program: "Small Business",
      achievement: "Started a successful hardware shop that employs 5 community members",
      image: "/lovable-uploads/a1d9e1c1-7658-45f8-96d2-31964561e94e.png"
    },
    {
      name: "Grace Achieng",
      program: "Parenting Skills",
      achievement: "Her children now excel academically and she mentors other parents",
      image: "/lovable-uploads/6dbc8ffa-44ea-4b48-b605-b3da6a694293.png"
    }
  ];

  const upcomingWorkshops = [
    {
      title: "Advanced Pineapple Farming Techniques",
      date: "March 15, 2024",
      duration: "3 days",
      participants: "25 caregivers"
    },
    {
      title: "Digital Marketing for Small Businesses",
      date: "March 22, 2024", 
      duration: "2 days",
      participants: "30 caregivers"
    },
    {
      title: "Child Psychology and Behavior Management",
      date: "April 5, 2024",
      duration: "1 day",
      participants: "40 caregivers"
    }
  ];

  const handleRegistration = () => {
    window.open('https://forms.google.com/workshop-registration', '_blank');
  };

  const handleJoinProgram = () => {
    window.open('https://forms.google.com/join-program', '_blank');
  };

  const handleDownloadResources = () => {
    window.open('https://drive.google.com/caregiver-resources', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Caregiver Empowerment
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-green-100 max-w-4xl mx-auto">
              Empowering caregivers with knowledge, skills, and resources to create 
              sustainable livelihoods and nurture thriving families
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-yellow-400 text-green-900 text-lg px-4 py-2">Agricultural Training</Badge>
              <Badge className="bg-pink-400 text-green-900 text-lg px-4 py-2">Parenting Skills</Badge>
              <Badge className="bg-blue-400 text-green-900 text-lg px-4 py-2">Business Development</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Empowerment Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed to build capacity, generate income, 
              and strengthen families in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {empowermentPrograms.map((program) => (
              <Card key={program.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 ${program.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <program.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Button 
                    className="w-full" 
                    onClick={() => setActiveProgram(activeProgram === program.id ? null : program.id)}
                  >
                    {activeProgram === program.id ? 'Hide Details' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program Content */}
      {activeProgram && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {empowermentPrograms
              .filter(program => program.id === activeProgram)
              .map((program) => (
                <div key={program.id}>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h2>
                    <p className="text-lg text-gray-600">{program.description}</p>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {program.topics.map((topic, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md">
                        <AccordionTrigger className="px-6 py-4 text-left">
                          <span className="font-semibold text-lg">{topic.name}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-600 mb-4">{topic.details}</p>
                          <div>
                            <h4 className="font-semibold text-green-700 mb-2">Key Benefits:</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {topic.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="text-green-600">{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real transformations from our empowerment programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{story.name}</h3>
                  <Badge variant="outline" className="mb-3">{story.program}</Badge>
                  <p className="text-gray-600">{story.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-xl text-blue-100">
              Join our upcoming training sessions and skill-building workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingWorkshops.map((workshop, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-white">{workshop.title}</h3>
                  <div className="space-y-2 text-blue-100">
                    <p className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      {workshop.date}
                    </p>
                    <p className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Duration: {workshop.duration}
                    </p>
                    <p className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {workshop.participants}
                    </p>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-white text-blue-600 hover:bg-gray-100"
                    onClick={handleRegistration}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Family's Future?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Join our empowerment programs and build the skills you need for sustainable success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              onClick={handleJoinProgram}
            >
              <Handshake className="h-5 w-5 mr-2" />
              Join a Program
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3"
              onClick={handleDownloadResources}
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Download Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaregiverEmpowerment;
