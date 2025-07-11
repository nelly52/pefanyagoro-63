
import { Heart, Users, Target, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Christ-Centered Love',
      description: 'Every action we take is rooted in the love of Christ, showing His compassion to every child we serve.'
    },
    {
      icon: Users,
      title: 'Holistic Development',
      description: 'We believe in nurturing the whole child - spirit, mind, body, and emotions for complete growth.'
    },
    {
      icon: Target,
      title: 'Community Partnership',
      description: 'Working hand-in-hand with local churches and communities to create lasting transformation.'
    },
    {
      icon: Award,
      title: 'Excellence in Care',
      description: 'Committed to the highest standards of child protection, development, and spiritual nurturing.'
    }
  ];

  const managementTeam = [
    { role: 'Project Chair Person', description: 'Providing overall leadership and strategic direction' },
    { role: 'Project Director', description: 'Overseeing daily operations and program implementation' },
    { role: 'Project Accountant', description: 'Managing finances and ensuring transparency' },
    { role: 'Project Social Worker', description: 'Child welfare and family support coordination' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">KE0261 AT A GLANCE</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
              A Christ-centered organization dedicated to transforming the lives of orphans and vulnerable children 
              through comprehensive care and development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To release children from spiritual, economic, social, and physical poverty through Christ-centered care and community empowerment.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-blue-900 mb-3">Our Target Group</h3>
                <p className="text-blue-800">
                  Orphans, abandoned children, and highly vulnerable children (HVCs) ages 0–22, 
                  served through partner churches with safe infrastructure.
                </p>
              </div>
            </div>
            <div 
              className="h-64 lg:h-80 bg-gray-300 rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('/lovable-uploads/6dbc8ffa-44ea-4b48-b605-b3da6a694293.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The foundational principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Accountability Structure 
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Management Committee */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ASM Committee</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Church Patron
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    ASM Chairperson
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    ASM Secretary
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    ASM Treasurer
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Parent Representatives
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    ASM Members
                  </li>
                </ul>
              </div>
            </div>

            {/* Management Team */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Child Development Workers</h3>
              <div className="space-y-4">
                {managementTeam.map((member, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">{member.role}</h4>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers & Partners */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Volunteers & Church Partners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local Church Members</h3>
                <p className="text-gray-600 mb-4">
                  Trained volunteers from partner churches serve as the backbone of our ministry, 
                  providing direct care and spiritual guidance to children.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Children's ministry specialists</li>
                  <li>• Child safeguarding trained volunteers</li>
                  <li>• Community outreach coordinators</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pastoral Leadership</h3>
                <p className="text-gray-600 mb-4">
                  Local pastors provide spiritual oversight and guidance, ensuring that 
                  Christ's love remains at the center of all our activities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Spiritual guidance and oversight</li>
                  <li>• Community leadership and support</li>
                  <li>• Biblical foundation for all programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
