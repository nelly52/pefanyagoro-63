import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users } from 'lucide-react';
import { impactStoriesData } from './caregiverData';

export const ImpactStories = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stories of Transformation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every story represents a family lifted from vulnerability to empowerment. 
            These are real people with real transformations in our Nyagoro community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {impactStoriesData.map((story, index) => (
            <Card key={index} className={`${story.color} hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-gray-700">
                    {story.icon}
                    <span className="ml-2 font-medium">{story.category}</span>
                  </div>
                  <Badge className={`${story.badgeColor} text-white`}>
                    Success Story
                  </Badge>
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {story.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {story.story}
                </p>
                
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                    <span className="font-medium">Impact:</span>
                  </div>
                  <p className="text-sm text-gray-700 ml-6">{story.impact}</p>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="font-medium">{story.beneficiaries}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};