
import { Handshake, Target, BookOpen, Users, Globe, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Partnership = () => {
  const alignmentAreas = [
    {
      icon: BookOpen,
      title: 'Curriculum & Monitoring',
      description: 'Use Compassion\'s proven curriculum and comprehensive monitoring tools for consistent, effective program delivery.'
    },
    {
      icon: Users,
      title: 'Volunteer Training',
      description: 'Train local church volunteers under Compassion\'s established guidelines and best practices for child development.'
    },
    {
      icon: Target,
      title: 'Systems Integration',
      description: 'Utilize Compassion\'s systems for sponsor communications, progress reporting, and comprehensive case management.'
    },
    {
      icon: Globe,
      title: 'Progress Reporting',
      description: 'Share detailed progress reports and inspiring success stories with Compassion and child sponsors worldwide.'
    }
  ];

  const benefits = [
    'Access to proven child development methodologies',
    'International standards for child protection and care',
    'Comprehensive training resources and ongoing support',
    'Global network of expertise and best practices',
    'Sustainable funding through child sponsorship programs',
    'Regular monitoring and evaluation frameworks'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Handshake className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Partnership with Compassion International</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
              Strengthening our impact through proven methodologies and global expertise in child development
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Aligning with Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our partnership with Compassion International Kenya represents a commitment to excellence 
                in child development. By aligning with their Child Sponsorship Program model, we ensure 
                that our ministry meets international standards while maintaining our local, Christ-centered approach.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This partnership allows us to leverage decades of proven experience in holistic child development, 
                providing our children with the best possible foundation for their future.
              </p>
            </div>
            <div 
              className="h-64 lg:h-80 bg-gray-300 rounded-lg shadow-xl"
              style={{
                backgroundImage: `url('/lovable-uploads/209ff183-1788-45cc-9405-f8c59764e9ca.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Alignment Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Areas of Alignment
            </h2>
            <p className="text-lg text-gray-600">
              How we integrate Compassion's proven methodologies into our local ministry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alignmentAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                      <area.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">{area.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Partnership Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-blue-100 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">65+</div>
                  <div className="text-blue-100">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">25+</div>
                  <div className="text-blue-100">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">2M+</div>
                  <div className="text-blue-100">Children Impacted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-blue-100">Christ-Centered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Implementation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Local Implementation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community-Based</h3>
                <p className="text-gray-600">
                  Programs delivered through local churches with deep community connections and cultural understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Curriculum</h3>
                <p className="text-gray-600">
                  International best practices adapted to local context while maintaining effectiveness and quality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Measurable Impact</h3>
                <p className="text-gray-600">
                  Regular monitoring and evaluation using established metrics to ensure program effectiveness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Join Our Partnership Network
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Through our partnership with Compassion International, we're part of a global movement 
            transforming lives through Christ's love. Be part of this incredible journey.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
