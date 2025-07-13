
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/forms/ContactForm';
import { WorkshopRegistrationForm } from '@/components/forms/WorkshopRegistrationForm';
import { ProgramApplicationForm } from '@/components/forms/ProgramApplicationForm';
import { MapPin, Phone, Mail, Clock, Users, Heart, Handshake, Calendar } from 'lucide-react';

const GetInvolved = () => {
  const involvementOptions = [
    {
      title: "Volunteer with Us",
      description: "Join our team of dedicated volunteers and make a direct impact in children's lives",
      icon: Heart,
      color: "bg-teal-500",
      opportunities: [
        "Teaching and tutoring children",
        "Leading creative arts and crafts sessions",
        "Organizing sports and outdoor activities",
        "Helping with community events and celebrations",
        "Administrative support and documentation",
        "Photography and social media content creation"
      ]
    },
    {
      title: "Community Partnership",
      description: "Partner with us as an organization, business, or community group",
      icon: Handshake,
      color: "bg-cyan-500",
      opportunities: [
        "Corporate sponsorship and funding partnerships",
        "School and educational institution collaborations",
        "Healthcare provider partnerships for child wellness",
        "Local business partnerships for skills training",
        "Church and faith-based organization alliances",
        "International NGO collaboration opportunities"
      ]
    },
    {
      title: "Skills Sharing",
      description: "Share your professional skills and expertise with our community",
      icon: Users,
      color: "bg-teal-600",
      opportunities: [
        "Professional development workshops for caregivers",
        "Business mentorship and entrepreneurship training",
        "Healthcare education and awareness sessions",
        "Technology and digital literacy training",
        "Agricultural and farming technique workshops",
        "Financial literacy and savings group facilitation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get Involved - Make a Difference
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Join our mission to empower children, families, and communities in Nyagoro village. 
              There are many ways to get involved and contribute to lasting positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ways to Get Involved
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you have time, skills, or resources to share, there's a meaningful way for you to contribute to our community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {involvementOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className={`h-3 ${option.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <option.icon className="h-12 w-12 mx-auto mb-4 text-teal-600" />
                  <CardTitle className="text-xl text-gray-900">
                    {option.title}
                  </CardTitle>
                  <p className="text-gray-600">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Opportunities:</h4>
                    <div className="space-y-2">
                      {option.opportunities.map((opportunity, oppIndex) => (
                        <div key={oppIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {opportunity}
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

      {/* Application Forms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Apply to Join Us
            </h2>
            <p className="text-lg text-gray-600">
              Ready to get involved? Fill out the appropriate form below to start your journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Program Application */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-teal-600" />
                  Program Application
                </CardTitle>
                <p className="text-gray-600">
                  Apply to join our volunteer programs or partnership opportunities
                </p>
              </CardHeader>
              <CardContent>
                <ProgramApplicationForm />
              </CardContent>
            </Card>

            {/* Workshop Registration */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-cyan-600" />
                  Workshop Registration
                </CardTitle>
                <p className="text-gray-600">
                  Register for upcoming workshops and training sessions
                </p>
              </CardHeader>
              <CardContent>
                <WorkshopRegistrationForm />
              </CardContent>
            </Card>
          </div>

          {/* General Contact Form */}
          <Card className="shadow-lg max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Send us a Message
              </CardTitle>
              <p className="text-gray-600 text-center">
                Have questions or want to learn more? We'd love to hear from you.
              </p>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visit Us */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-teal-600" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  PEFA NYAGORO CHURCH<br />
                  Nyagoro Village<br />
                  Siaya County, Kenya
                </p>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-sm text-teal-800">
                    Our main center is located at PEFA NYAGORO CHURCH with safe infrastructure and strong community support.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-cyan-600" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    <strong>Main Office:</strong> +254 XXX XXX XXX
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Emergency:</strong> +254 XXX XXX XXX
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-teal-600" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    <strong>General:</strong> info@pefanyagoro.org
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Programs:</strong> programs@pefanyagoro.org
                  </p>
                  <p className="text-gray-600">
                    <strong>Partnerships:</strong> partners@pefanyagoro.org
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-cyan-600" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-medium">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
