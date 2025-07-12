import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProgramApplicationForm } from '@/components/forms/ProgramApplicationForm';
import { PaymentButton } from '@/components/PaymentButton';
import {
  BookOpenCheck,
  BrainCircuit,
  Flame,
  HeartHandshake,
  Lightbulb,
  Users2,
} from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Child Sponsorship Program",
      description: "Provide education, healthcare, and support to children in need, helping them break the cycle of poverty.",
      icon: HeartHandshake,
      color: "bg-blue-500",
      ageGroup: "All Ages",
      activities: [
        "Educational support",
        "Nutritional assistance",
        "Healthcare access",
        "Mentorship programs",
      ],
    },
    {
      title: "Self-Reliance and Education",
      description: "Empower families through education and vocational training, fostering self-sufficiency and sustainable livelihoods.",
      icon: BookOpenCheck,
      color: "bg-green-500",
      ageGroup: "Youth & Adults",
      activities: [
        "Vocational training",
        "Business skills workshops",
        "Microfinance initiatives",
        "Adult literacy programs",
      ],
    },
    {
      title: "Health and Nutrition",
      description: "Improve community health through education, disease prevention, and access to nutritious food and clean water.",
      icon: Flame,
      color: "bg-red-500",
      ageGroup: "All Ages",
      activities: [
        "Health education workshops",
        "Nutritional counseling",
        "Clean water initiatives",
        "Disease prevention campaigns",
      ],
    },
    {
      title: "Leadership Development",
      description: "Cultivate the next generation of leaders through mentorship, training, and opportunities for community engagement.",
      icon: Lightbulb,
      color: "bg-yellow-500",
      ageGroup: "Youth",
      activities: [
        "Leadership training workshops",
        "Mentorship programs",
        "Community service projects",
        "Public speaking training",
      ],
    },
    {
      title: "Caregiver Empowerment",
      description: "Equip caregivers with the skills and resources they need to provide nurturing care and support for children.",
      icon: Users2,
      color: "bg-purple-500",
      ageGroup: "Adults",
      activities: [
        "Parenting skills workshops",
        "Financial literacy training",
        "Mental health support",
        "Networking opportunities",
      ],
    },
    {
      title: "Innovation and Technology",
      description: "Equipping youths with technology skills to solve community problems.",
      icon: BrainCircuit,
      color: "bg-orange-500",
      ageGroup: "Youth",
      activities: [
        "Coding and App development",
        "Robotics Training",
        "AI and Machine Learning",
        "Digital Skills Training",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Explore our diverse programs designed to empower individuals and
            transform communities.
          </p>
          <div className="mt-8 flex justify-center">
            <Badge className="bg-green-400 text-green-900 text-lg px-4 py-2 hover:scale-110 transition-transform cursor-pointer">
              Making a Difference
            </Badge>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className={`h-2 ${program.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <program.icon className="h-12 w-12 text-blue-600" />
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {program.ageGroup}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{program.title}</CardTitle>
                  <p className="text-gray-600">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Apply for Program
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Apply for {program.title}</DialogTitle>
                        </DialogHeader>
                        <ProgramApplicationForm />
                      </DialogContent>
                    </Dialog>
                    <PaymentButton 
                      amount={75}
                      description={`Support ${program.title} program`}
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

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to creating lasting change in the lives of
            individuals and communities through our programs.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Children Sponsored</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <p className="text-gray-600">Families Empowered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600">Community Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Make a Difference Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Your support helps us provide life-changing programs to children and families in our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PaymentButton 
              amount={100}
              description="Monthly program support"
              className="bg-white text-green-600 hover:bg-gray-100"
            />
            <PaymentButton 
              amount={250}
              description="Sponsor a child for 3 months"
              className="bg-white text-green-600 hover:bg-gray-100"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
