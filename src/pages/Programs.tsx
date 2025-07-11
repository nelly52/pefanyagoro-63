import { Heart, Activity, Brain, Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      icon: Heart,
      title: 'Spiritual Development',
      color: 'bg-red-50 text-red-600',
      borderColor: 'border-red-200',
      activities: [
        'Weekly Bible classes and discipleship programs',
        'Child-focused spiritual mentorship with trained local church volunteers',
        'Monthly kids\' worship sessions',
        'Distribution of age-appropriate Bibles and devotionals',
        'Annual spiritual retreats or vacation Bible school (VBS)'
      ]
    },
    {
      icon: Activity,
      title: 'Physical Wellbeing',
      color: 'bg-green-50 text-green-600',
      borderColor: 'border-green-200',
      activities: [
        'Nutritional support (daily meals/snacks)',
        'Access to basic healthcare services in partnership with local clinics',
        'Health screenings and hygiene education',
        'Clothing and school supplies distribution'
      ]
    },
    {
      icon: Users,
      title: 'Socio-Emotional Support',
      color: 'bg-purple-50 text-purple-600',
      borderColor: 'border-purple-200',
      activities: [
        'One-on-one counseling (partnering with Christian counselors)',
        'Trauma-informed care training for staff',
        'Group sessions and peer support groups',
        'Parent/guardian support and training for foster/extended families'
      ]
    },
    {
      icon: Brain,
      title: 'Self-Reliance and Education',
      color: 'bg-blue-50 text-blue-600',
      borderColor: 'border-blue-200',
      activities: [
        'Tuition sponsorship and school enrollment follow-up',
        'After-school tutoring and literacy programs',
        'Skills development workshops (computer, languages, arts)',
        'Early childhood development for children under 6'
      ]
    },
    {
      icon: Shield,
      title: 'Child Protection',
      color: 'bg-orange-50 text-orange-600',
      borderColor: 'border-orange-200',
      activities: [
        'Strict child safeguarding policies and reporting systems',
        'Community awareness programs on child rights and protection',
        'Collaboration with local child services and police when needed',
        'Safe spaces within church compounds for play and rest'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Core Program Pillars</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
              Comprehensive development programs addressing every aspect of a child's growth and well-being
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Holistic Child Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our five core pillars work together to provide comprehensive care that addresses 
              the spiritual, physical, emotional, intellectual, and social needs of every child.
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <Card key={index} className={`border-2 ${program.borderColor} hover:shadow-lg transition-shadow duration-300`}>
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    <div className="flex items-center mb-6 lg:mb-0 lg:flex-col lg:items-center lg:space-y-4">
                      <div className={`p-4 rounded-full ${program.color} mr-4 lg:mr-0`}>
                        <program.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 lg:text-center">
                        {program.title}
                      </h3>
                    </div>
                    
                    <div className="flex-1">
                      <ul className="space-y-3">
                        {program.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Model */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Operational Model
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Target Group</h3>
                <p className="text-gray-600">
                  Orphans, abandoned children, and highly vulnerable children (HVCs) ages 0–22
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Center Locations</h3>
                <p className="text-gray-600">
                  Based at PEFA NYAGORO CHURCH with safe infrastructure and community support
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Entry Criteria</h3>
                <p className="text-gray-600">
                 Social worker assessment in collaboration with the ASM Comnittee and Compassion International guidlines of the PPI Tool.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monitoring & Evaluation */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Monitoring & Evaluation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Monthly Reviews</h3>
              <p className="text-blue-100">
                Regular child welfare reviews to ensure each child's needs are being met effectively
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Bi-annual Assessments</h3>
              <p className="text-blue-100">
                Comprehensive holistic development assessments covering all five pillars
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Tracking</h3>
              <p className="text-blue-100">
                Use of Compassion's digital case tracking tools for accurate progress monitoring
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
