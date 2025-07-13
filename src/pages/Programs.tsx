
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BookOpenCheck,
  BrainCircuit,
  Flame,
  HeartHandshake,
  Lightbulb,
  Users2,
  Target,
  Clock,
  MapPin,
} from 'lucide-react';

const Programs = () => {
  const programs = [
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Programs: Transforming Lives, Building Communities
          </h1>
          <p className="text-xl text-green-100 max-w-4xl mx-auto">
            Discover our comprehensive programs designed to empower individuals, strengthen families, and create sustainable positive change in communities. Each program is carefully crafted to address specific needs while building long-term resilience.
          </p>
          <div className="mt-8 flex justify-center">
            <Badge className="bg-green-400 text-green-900 text-lg px-6 py-3 hover:scale-110 transition-transform cursor-pointer">
              Making a Lasting Difference
            </Badge>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our programs are designed to create sustainable impact through evidence-based approaches, community partnership, and long-term commitment to positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className={`h-3 ${program.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <program.icon className="h-12 w-12 text-blue-600" />
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        {program.ageGroup}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{program.title}</CardTitle>
                  <p className="text-gray-600">{program.description}</p>
                </CardHeader>
                <CardContent>
                  {/* Program Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{program.location}</span>
                    </div>
                  </div>

                  {/* Key Activities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Key Activities:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {program.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program Outcomes */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Target className="h-4 w-4 mr-2 text-green-600" />
                      Program Outcomes:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {program.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="flex items-start text-sm text-green-700 bg-green-50 p-2 rounded">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Want to Support Our Programs?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Your support enables us to expand these life-changing programs and reach more families and communities in need. Together, we can build a brighter future for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/donate-now"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Donate Now
            </a>
            <a 
              href="/partnership"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
