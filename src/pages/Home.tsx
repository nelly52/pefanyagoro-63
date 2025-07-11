import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, Shield, Handshake, Star, Target, Compass, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'Spiritual Development',
      description: 'Weekly Bible classes, discipleship programs, and spiritual mentorship to nurture faith.',
      color: 'text-red-500'
    },
    {
      icon: Users,
      title: 'Physical Wellbeing',
      description: 'Nutritional support, healthcare access, and hygiene education for healthy growth.',
      color: 'text-green-500'
    },
    {
      icon: BookOpen,
      title: 'Self-Reliance and Education',
      description: 'Tuition sponsorship, tutoring, and skills development for educational excellence.',
      color: 'text-blue-500'
    },
    {
      icon: Shield,
      title: 'Child Protection',
      description: 'Strict safeguarding policies and safe spaces within church compounds.',
      color: 'text-purple-500'
    }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: 'Christ-Centered Love',
      description: 'Every action flows from God\'s love, reflecting Christ in all we do.',
      color: 'text-red-500'
    },
    {
      icon: Shield,
      title: 'Child Protection',
      description: 'Unwavering commitment to the safety, dignity, and rights of every child.',
      color: 'text-blue-500'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Pursuing the highest standards in all our programs and services.',
      color: 'text-yellow-500'
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'Maintaining transparency, honesty, and accountability in all relationships.',
      color: 'text-green-500'
    },
    {
      icon: Compass,
      title: 'Stewardship',
      description: 'Responsible management of resources entrusted to our care.',
      color: 'text-purple-500'
    },
    {
      icon: Globe,
      title: 'Partnership',
      description: 'Collaborative relationships that multiply impact and sustainability.',
      color: 'text-indigo-500'
    }
  ];

  const galleryImages = [
    {
      src: '/lovable-uploads/a1d9e1c1-7658-45f8-96d2-31964561e94e.png',
      alt: 'Community activities at PEFA NYAGORO CDC',
      title: 'Community Support Programs'
    },
    {
      src: '/lovable-uploads/8a1a2af1-21aa-46fe-9536-f84f67e5d5ac.png',
      alt: 'Children participating in sports activities',
      title: 'Physical Wellbeing Through Sports'
    },
    {
      src: '/lovable-uploads/30158fb2-5524-458e-9f35-9c62972dd6fc.png',
      alt: 'Rural community and family support',
      title: 'Community Outreach'
    },
    {
      src: '/lovable-uploads/b3d4952c-2989-42b8-986c-a2d3cdc617c0.png',
      alt: 'Environmental education and tree planting',
      title: 'Environmental Stewardship'
    },
    {
      src: '/lovable-uploads/ab0d39de-a962-47a4-8c78-a9d79d1fd1ca.png',
      alt: 'Children in school band performance',
      title: 'Creative Arts Development'
    },
    {
      src: '/lovable-uploads/faa2c986-d3c8-4916-acfd-2e9cfdf3b991.png',
      alt: 'Computer skills training for children',
      title: 'Digital Literacy Programs'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To release children from spiritual, economic, social, and physical poverty 
                through Christ-centered care and community empowerment.
              </p>
            </div>
            <div 
              className="h-64 lg:h-80 bg-gray-300 rounded-lg shadow-xl"
              style={{
                backgroundImage: `url('/lovable-uploads/6dbc8ffa-44ea-4b48-b605-b3da6a694293.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              Guided by Compassion International Kenya's proven principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <value.icon className={`h-12 w-12 mx-auto mb-4 ${value.color}`} />
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Program Pillars</h2>
            <p className="text-lg text-gray-600">
              Comprehensive care addressing every aspect of a child's development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <pillar.icon className={`h-12 w-12 mx-auto mb-4 ${pillar.color}`} />
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/programs">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn More About Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Impact in Action</h2>
            <p className="text-lg text-gray-600">
              See how we're transforming lives in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Highlight */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Handshake className="h-12 w-12 text-yellow-400 mr-4" />
                <h2 className="text-3xl lg:text-4xl font-bold">Partnership with Compassion International</h2>
              </div>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                We're proud to align with Compassion International Kenya's Child Sponsorship Program model, 
                using their proven curriculum, monitoring tools, and community-based approach.
              </p>
              <Link to="/partnership">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Learn About Our Partnership
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div 
                className="h-64 lg:h-80 bg-gray-300 rounded-lg shadow-xl"
                style={{
                  backgroundImage: `url('/lovable-uploads/6ae92375-23b7-44e8-a0db-af30df33551a.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Join Us in Transforming Lives
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Every child deserves hope, love, and the opportunity to thrive. 
            Partner with us to make a lasting impact in the lives of vulnerable children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Get Involved Today
              </Button>
            </Link>
            <Link to="/kids-corner">
              <Button size="lg" variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3">
                Visit Kids Corner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
