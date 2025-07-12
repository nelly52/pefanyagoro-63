import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { WorkshopRegistrationForm } from '@/components/forms/WorkshopRegistrationForm';
import { PaymentButton } from '@/components/PaymentButton';
import {
  BookOpenCheck,
  BrainCircuit,
  HeartHandshake,
  Lightbulb,
  Utensils,
} from 'lucide-react';

const CaregiverEmpowerment = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);

  const workshops = [
    {
      title: "Parenting Skills Workshop",
      description: "Equip yourself with effective parenting techniques to nurture your child's growth and development.",
      duration: "3 hours",
      topics: [
        "Effective Communication",
        "Positive Discipline",
        "Understanding Child Psychology",
      ],
      icon: HeartHandshake,
    },
    {
      title: "Child Development Workshop",
      description: "Learn about the key stages of child development and how to support your child's milestones.",
      duration: "2.5 hours",
      topics: [
        "Cognitive Development",
        "Emotional Development",
        "Physical Development",
      ],
      icon: BrainCircuit,
    },
    {
      title: "Health and Nutrition Workshop",
      description: "Discover the importance of proper nutrition and health practices for your child's well-being.",
      duration: "2 hours",
      topics: [
        "Balanced Diet",
        "Hygiene Practices",
        "Common Childhood Illnesses",
      ],
      icon: Utensils,
    },
    {
      title: "Literacy Training Workshop",
      description: "Enhance your literacy skills to better support your child's education and academic success.",
      duration: "3 hours",
      topics: [
        "Reading Comprehension",
        "Writing Skills",
        "Effective Study Habits",
      ],
      icon: BookOpenCheck,
    },
    {
      title: "Financial Literacy Workshop",
      description: "Gain essential financial management skills to secure your family's future and provide for your child's needs.",
      duration: "2.5 hours",
      topics: [
        "Budgeting",
        "Saving",
        "Investment Basics",
      ],
      icon: Lightbulb,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Empowering Caregivers, Transforming Lives
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Equipping caregivers with the knowledge and skills to nurture thriving families and communities.
          </p>
          <div className="mt-8 flex justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700">
              Learn More About Our Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Available Workshops
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive workshop offerings designed to empower caregivers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <workshop.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <Badge variant="outline" className="ml-auto">
                      {workshop.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  <ul className="space-y-2 mb-6">
                    {workshop.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Register for Workshop
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Register for {workshop.title}</DialogTitle>
                        </DialogHeader>
                        <WorkshopRegistrationForm />
                      </DialogContent>
                    </Dialog>
                    <PaymentButton 
                      amount={25}
                      description={`Support ${workshop.title} workshop`}
                      variant="outline"
                      className="w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Impact, Real Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our caregiver empowerment programs are making a tangible difference in the lives of families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  "The parenting skills workshop transformed my approach to raising my children."
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  - A Grateful Parent
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  "I now have the confidence to support my child's education and future."
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  - A Dedicated Caregiver
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Support Our Caregiver Programs
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Your donation helps us provide essential training and support to caregivers in our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PaymentButton 
              amount={50}
              description="Support caregiver training programs"
              className="bg-white text-purple-600 hover:bg-gray-100"
            />
            <PaymentButton 
              amount={100}
              description="Sponsor a full workshop session"
              className="bg-white text-purple-600 hover:bg-gray-100"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaregiverEmpowerment;
