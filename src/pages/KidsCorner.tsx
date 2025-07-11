
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GamepadIcon, 
  PenTool, 
  Trophy, 
  Star, 
  Heart, 
  Smile,
  BookOpen,
  Music,
  Palette,
  Camera,
  Zap,
  Crown,
  ExternalLink
} from 'lucide-react';

const KidsCorner = () => {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const childrenStories = [
    {
      id: 1,
      name: "Grace Wanjiku",
      age: 12,
      title: "My Dream to Become a Doctor",
      story: "Thanks to the support from PEFA NYAGORO CDC, I'm excelling in my studies. I dream of becoming a doctor to help my community. I've been top of my class for 3 terms!",
      achievement: "Academic Excellence Award",
      image: "/lovable-uploads/a1d9e1c1-7658-45f8-96d2-31964561e94e.png"
    },
    {
      id: 2,
      name: "Daniel Kiprotich",
      age: 14,
      title: "Football Captain and Scholar",
      story: "I love playing football and studying mathematics. The CDC helped me join the school team and I'm now the captain! I also help younger kids with their homework.",
      achievement: "School Football Captain",
      image: "/lovable-uploads/8a1a2af1-21aa-46fe-9536-f84f67e5d5ac.png"
    },
    {
      id: 3,
      name: "Mercy Akinyi",
      age: 13,
      title: "Young Environmental Champion",
      story: "I started a tree planting club at school after learning about environmental conservation at the CDC. We've planted over 200 trees this year!",
      achievement: "Environmental Leadership",
      image: "/lovable-uploads/b3d4952c-2989-42b8-986c-a2d3cdc617c0.png"
    }
  ];

  const funActivities = [
    {
      title: "🎮 Play Chess Online",
      description: "Challenge your friends and improve your strategic thinking!",
      link: "https://www.chess.com/play/online",
      color: "bg-blue-500",
      icon: GamepadIcon
    },
    {
      title: "📝 Word Scrabble",
      description: "Build your vocabulary with fun word games!",
      link: "https://wordscapes.com/",
      color: "bg-green-500",
      icon: PenTool
    },
    {
      title: "🎨 Digital Art Studio",
      description: "Create amazing digital artwork and express yourself!",
      link: "https://www.tuxpaint.org/",
      color: "bg-purple-500",
      icon: Palette
    },
    {
      title: "🎵 Music Maker",
      description: "Compose your own music and share your creativity!",
      link: "https://musiclab.chromeexperiments.com/",
      color: "bg-pink-500",
      icon: Music
    }
  ];

  const achievements = [
    { name: "Academic Star", count: 45, icon: Star },
    { name: "Sports Champions", count: 23, icon: Trophy },
    { name: "Creative Artists", count: 67, icon: Palette },
    { name: "Community Helpers", count: 89, icon: Heart }
  ];

  const handleShareStory = () => {
    window.open('https://forms.google.com/share-my-story', '_blank');
  };

  const handleUploadPhoto = () => {
    window.open('https://forms.google.com/upload-photos', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              <Star className="h-8 w-8 text-yellow-300 animate-pulse" />
              <Crown className="h-10 w-10 text-yellow-400" />
              <Star className="h-8 w-8 text-yellow-300 animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            🌟 Kids Corner 🌟
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100">
            Your space to shine, learn, play, and share your amazing stories!
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge className="bg-yellow-400 text-blue-900 text-lg px-4 py-2">Super Stars</Badge>
            <Badge className="bg-green-400 text-blue-900 text-lg px-4 py-2">Future Leaders</Badge>
            <Badge className="bg-pink-400 text-blue-900 text-lg px-4 py-2">Creative Minds</Badge>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
                <CardContent className="p-6">
                  <achievement.icon className="h-12 w-12 mx-auto mb-3 text-blue-600" />
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.count}</div>
                  <div className="text-sm font-medium text-gray-600">{achievement.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Children Stories */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              🌟 Amazing Stories from Our Stars 🌟
            </h2>
            <p className="text-lg text-gray-600">
              Read inspiring stories and achievements from our incredible kids!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {childrenStories.map((child) => (
              <Card key={child.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                  <img 
                    src={child.image} 
                    alt={child.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-400 text-blue-900">Age {child.age}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Crown className="h-5 w-5 text-yellow-500 mr-2" />
                    <h3 className="font-bold text-lg text-gray-900">{child.name}</h3>
                  </div>
                  <h4 className="font-semibold text-blue-600 mb-3">{child.title}</h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">{child.story}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-green-500 text-green-700">
                      🏆 {child.achievement}
                    </Badge>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedStory(selectedStory === child.id ? null : child.id)}
                    >
                      {selectedStory === child.id ? 'Show Less' : 'Read More'}
                    </Button>
                  </div>
                  {selectedStory === child.id && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-gray-700">{child.story}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              🎮 Super Fun Activities 🎮
            </h2>
            <p className="text-lg text-gray-600">
              Play games, create art, and have fun while learning!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funActivities.map((activity, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${activity.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <activity.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900">{activity.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{activity.description}</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    onClick={() => window.open(activity.link, '_blank')}
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Let's Play!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            📖 Share Your Amazing Story! 📖
          </h2>
          <p className="text-xl text-white mb-8">
            Have you achieved something awesome? Won a competition? Helped someone? 
            We want to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
              onClick={handleShareStory}
            >
              <BookOpen className="h-5 w-5 mr-2" />
              <ExternalLink className="h-4 w-4 mr-1" />
              Share My Story
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
              onClick={handleUploadPhoto}
            >
              <Camera className="h-5 w-5 mr-2" />
              <ExternalLink className="h-4 w-4 mr-1" />
              Upload Photos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsCorner;
