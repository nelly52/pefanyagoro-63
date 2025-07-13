
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Baby,
  BookOpen,
  Gamepad2,
  Heart,
  Music,
  Palette,
  Star,
  Users,
  Trophy,
  Gift,
  Camera,
  Mic,
  Calendar,
  MapPin,
  Clock
} from 'lucide-react';
import { KidsStoryForm } from '@/components/forms/KidsStoryForm';
import { PhotoUploadForm } from '@/components/forms/PhotoUploadForm';

const KidsCorner = () => {
  const activities = [
    {
      title: 'Story Time Adventures',
      description: 'Interactive storytelling sessions that spark imagination and improve language skills',
      icon: BookOpen,
      color: 'bg-purple-500',
      ageGroup: '3-8 years',
      schedule: 'Tuesdays & Thursdays, 3:00 PM',
      highlights: [
        'Traditional Kenyan folktales',
        'Interactive story participation',
        'Character costume dress-up',
        'Story illustration activities'
      ]
    },
    {
      title: 'Creative Arts & Crafts',
      description: 'Hands-on creative activities using local materials to develop fine motor skills',
      icon: Palette,
      color: 'bg-pink-500',
      ageGroup: '4-12 years',
      schedule: 'Mondays & Wednesdays, 2:30 PM',
      highlights: [
        'Traditional beadwork and crafts',
        'Painting with natural materials',
        'Clay modeling and pottery',
        'Recycled material art projects'
      ]
    },
    {
      title: 'Music & Movement',
      description: 'Traditional songs, dances, and musical instrument exploration',
      icon: Music,
      color: 'bg-green-500',
      ageGroup: '2-10 years',
      schedule: 'Fridays, 4:00 PM',
      highlights: [
        'Traditional Luo songs and dances',
        'Homemade instrument creation',
        'Rhythm and movement games',
        'Cultural dance performances'
      ]
    },
    {
      title: 'Educational Games',
      description: 'Fun learning games that teach numbers, letters, and problem-solving',
      icon: Gamepad2,
      color: 'bg-blue-500',
      ageGroup: '5-12 years',
      schedule: 'Saturdays, 10:00 AM',
      highlights: [
        'Math games with local context',
        'Kiswahili and English word games',
        'Science exploration activities',
        'Team building challenges'
      ]
    },
    {
      title: 'Sports & Outdoor Play',
      description: 'Physical activities and team sports to promote health and teamwork',
      icon: Trophy,
      color: 'bg-orange-500',
      ageGroup: '6-15 years',
      schedule: 'Daily, 5:00 PM',
      highlights: [
        'Football and netball teams',
        'Traditional games like "Kati"',
        'Athletic training and competitions',
        'Outdoor adventure activities'
      ]
    },
    {
      title: 'Special Events',
      description: 'Monthly celebrations and community events for children and families',
      icon: Gift,
      color: 'bg-red-500',
      ageGroup: 'All ages',
      schedule: 'Monthly events',
      highlights: [
        'Birthday celebrations for all kids',
        'Cultural festivals and holidays',
        'Achievement award ceremonies',
        'Family fun days and picnics'
      ]
    }
  ];

  const achievements = [
    {
      metric: '150+',
      label: 'Children Enrolled',
      description: 'Active participants in our programs'
    },
    {
      metric: '95%',
      label: 'School Attendance',
      description: 'Improvement in regular school attendance'
    },
    {
      metric: '25',
      label: 'Weekly Activities',
      description: 'Structured activities every week'
    },
    {
      metric: '8',
      label: 'Volunteer Teachers',
      description: 'Dedicated community volunteers'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Baby className="h-16 w-16 mx-auto mb-6 text-white animate-bounce" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Kids Corner: Where Dreams Take Flight
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              A magical space where children learn, play, and grow through engaging activities 
              designed to nurture their creativity, education, and social development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center bg-white/10 rounded-lg px-6 py-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">{achievement.metric}</div>
                  <div className="text-purple-100 font-medium">{achievement.label}</div>
                  <div className="text-sm text-purple-200">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fun Activities for Every Child
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse range of activities ensures every child finds something they love 
              while learning valuable skills and making lasting friendships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <div className={`h-3 ${activity.color} group-hover:h-4 transition-all duration-300`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <activity.icon className="h-12 w-12 text-purple-600 group-hover:animate-bounce transition-all duration-300" />
                    <Badge variant="outline" className="text-purple-600 border-purple-200 group-hover:bg-purple-100">
                      {activity.ageGroup}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                    {activity.title}
                  </CardTitle>
                  <p className="text-gray-600">{activity.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{activity.schedule}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Star className="h-4 w-4 mr-2 text-yellow-500" />
                      Activity Highlights:
                    </h4>
                    <div className="space-y-1">
                      {activity.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {highlight}
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

      {/* Interactive Forms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Share Your Child's Journey
            </h2>
            <p className="text-lg text-gray-600">
              We love hearing about your child's experiences and seeing their creative works!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Story Submission */}
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <Mic className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <CardTitle className="text-2xl text-gray-900">
                  Share Your Child's Story
                </CardTitle>
                <p className="text-gray-600">
                  Tell us about your child's favorite activities, achievements, or special moments from Kids Corner
                </p>
              </CardHeader>
              <CardContent>
                <KidsStoryForm />
              </CardContent>
            </Card>

            {/* Photo Upload */}
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <Camera className="h-12 w-12 mx-auto mb-4 text-pink-600" />
                <CardTitle className="text-2xl text-gray-900">
                  Share Photos
                </CardTitle>
                <p className="text-gray-600">
                  Upload photos of your child's artwork, activities, or special moments to celebrate their creativity
                </p>
              </CardHeader>
              <CardContent>
                <PhotoUploadForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Information */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-12 w-12 mx-auto mb-6 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Our Kids Corner Family
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Kids Corner operates Monday through Saturday at PEFA NYAGORO Church. 
              All children in the community are welcome to participate in our activities. 
              We provide a safe, nurturing environment where children can learn, play, and grow together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Calendar className="h-8 w-8 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold text-gray-900 mb-2">Program Schedule</h3>
                <p className="text-gray-600 text-sm">
                  Monday - Saturday: Various activities from 2:30 PM - 5:00 PM<br />
                  Sunday: Family activities after church service
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-pink-600" />
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600 text-sm">
                  PEFA NYAGORO Church<br />
                  Nyagoro Village, Siaya County<br />
                  Safe, supervised environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsCorner;
