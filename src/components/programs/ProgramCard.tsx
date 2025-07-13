
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Target } from 'lucide-react';

interface ProgramCardProps {
  program: {
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    color: string;
    ageGroup: string;
    duration: string;
    location: string;
    activities: string[];
    outcomes: string[];
  };
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
      <div className={`h-3 ${program.color}`}></div>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <program.icon className="h-12 w-12 text-teal-600" />
          <div className="flex flex-col gap-2">
            <Badge variant="outline" className="text-teal-600 border-teal-200">
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
            <Clock className="h-4 w-4 mr-2 text-teal-600" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-teal-600" />
            <span>{program.location}</span>
          </div>
        </div>

        {/* Key Activities */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
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
  );
};

export default ProgramCard;
