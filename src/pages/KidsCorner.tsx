
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
  ExternalLink,
  Code,
  Play,
  Rocket,
  Brain,
  Target,
  Award,
  Sparkles
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
      icon: GamepadIcon,
      level: "All Levels",
      category: "Strategy"
    },
    {
      title: "📝 Word Scrabble",
      description: "Build your vocabulary with fun word games!",
      link: "https://wordscapes.com/",
      color: "bg-green-500",
      icon: PenTool,
      level: "Beginner",
      category: "Language"
    },
    {
      title: "🎨 Digital Art Studio",
      description: "Create amazing digital artwork and express yourself!",
      link: "https://www.tuxpaint.org/",
      color: "bg-purple-500",
      icon: Palette,
      level: "Creative",
      category: "Art"
    },
    {
      title: "🎵 Music Maker",
      description: "Compose your own music and share your creativity!",
      link: "https://musiclab.chromeexperiments.com/",
      color: "bg-pink-500",
      icon: Music,
      level: "All Levels",
      category: "Music"
    }
  ];

  const videoGames = [
    {
      title: "🚀 Scratch Programming",
      description: "Learn to code by creating your own games and animations!",
      link: "https://scratch.mit.edu/",
      color: "bg-orange-500",
      icon: Code,
      level: "Beginner",
      category: "Coding",
      ageGroup: "8-16 years"
    },
    {
      title: "🎯 CodeCombat",
      description: "Learn Python and JavaScript while playing an adventure game!",
      link: "https://codecombat.com/",
      color: "bg-red-500",
      icon: Target,
      level: "Intermediate",
      category: "Coding",
      ageGroup: "10+ years"
    },
    {
      title: "🧠 Lightbot",
      description: "Solve puzzles using programming logic and sequences!",
      link: "https://lightbot.com/",
      color: "bg-yellow-500",
      icon: Brain,
      level: "Beginner",
      category: "Logic",
      ageGroup: "6+ years"
    },
    {
      title: "🌟 Khan Academy Kids",
      description: "Educational games covering math, reading, and more!",
      link: "https://www.khanacademy.org/kids",
      color: "bg-teal-500",
      icon: Star,
      level: "All Levels",
      category: "Education",
      ageGroup: "3-12 years"
    }
  ];

  const codingVideos = [
    {
      title: "🎬 Code.org Hour of Code",
      description: "One-hour tutorials to learn computer science basics!",
      link: "https://hourofcode.com/",
      color: "bg-indigo-500",
      icon: Play,
      level: "Beginner",
      duration: "1 hour",
      category: "Tutorial"
    },
    {
      title: "🚀 NASA Kids Programming",
      description: "Learn coding while exploring space missions!",
      link: "https://www.nasa.gov/audience/forkids/kidsclub/flash/",
      color: "bg-purple-600",
      icon: Rocket,
      level: "Intermediate",
      duration: "30 mins",
      category: "STEM"
    },
    {
      title: "🎮 MIT App Inventor",
      description: "Create your own mobile apps with visual programming!",
      link: "https://appinventor.mit.edu/",
      color: "bg-cyan-500",
      icon: Sparkles,
      level: "Advanced",
      duration: "2+ hours",
      category: "App Development"
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
      {/* Hero Section with Animation */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          {/* Animated floating elements */}
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-6 w-6 text-yellow-300" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Heart className="h-8 w-8 text-pink-300" />
          </div>
          <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '1s' }}>
            <Smile className="h-7 w-7 text-green-300" />
          </div>
          <div className="absolute bottom-10 right-30 animate-pulse" style={{ animationDelay: '0.5s' }}>
            <Rocket className="h-6 w-6 text-orange-300" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2 animate-pulse">
              <Star className="h-8 w-8 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
              <Crown className="h-10 w-10 text-yellow-400 animate-bounce" />
              <Star className="h-8 w-8 text-yellow-300 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            🌟 Kids Corner 🌟
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Your space to shine, learn, play, and share your amazing stories!
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Badge className="bg-yellow-400 text-blue-900 text-lg px-4 py-2 hover:scale-110 transition-transform cursor-pointer">Super Stars</Badge>
            <Badge className="bg-green-400 text-blue-900 text-lg px-4 py-2 hover:scale-110 transition-transform cursor-pointer">Future Leaders</Badge>
            <Badge className="bg-pink-400 text-blue-900 text-lg px-4 py-2 hover:scale-110 transition-transform cursor-pointer">Creative Minds</Badge>
          </div>
        </div>
      </section>

      {/* Achievement Stats with Animation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <CardContent className="p-6">
                  <achievement.icon className="h-12 w-12 mx-auto mb-3 text-blue-600 group-hover:animate-bounce" />
                  <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">{achievement.count}</div>
                  <div className="text-sm font-medium text-gray-600">{achievement.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Children Stories with Enhanced Animation */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              🌟 Amazing Stories from Our Stars 🌟
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Read inspiring stories and achievements from our incredible kids!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {childrenStories.map((child, index) => (
              <Card key={child.id} className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:scale-105 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                  <img 
                    src={child.image} 
                    alt={child.name}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-400 text-blue-900 animate-pulse">Age {child.age}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Crown className="h-5 w-5 text-yellow-500 mr-2 group-hover:animate-spin" />
                    <h3 className="font-bold text-lg text-gray-900">{child.name}</h3>
                  </div>
                  <h4 className="font-semibold text-blue-600 mb-3">{child.title}</h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">{child.story}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-green-500 text-green-700 hover:bg-green-50 transition-colors">
                      🏆 {child.achievement}
                    </Badge>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:scale-105 transition-transform"
                      onClick={() => setSelectedStory(selectedStory === child.id ? null : child.id)}
                    >
                      {selectedStory === child.id ? 'Show Less' : 'Read More'}
                    </Button>
                  </div>
                  {selectedStory === child.id && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg animate-fade-in">
                      <p className="text-gray-700">{child.story}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Games Section - NEW */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              🎮 Awesome Games & Learning 🎮
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Play educational games and learn programming while having fun!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {videoGames.map((game, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 cursor-pointer group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${game.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    <game.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">{game.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{game.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4 justify-center">
                    <Badge variant="outline" className="text-xs">{game.level}</Badge>
                    <Badge variant="outline" className="text-xs">{game.category}</Badge>
                    <Badge variant="outline" className="text-xs text-purple-600">{game.ageGroup}</Badge>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all"
                    onClick={() => window.open(game.link, '_blank')}
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Play Now!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coding Videos Subsection */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              🎬 Learn to Code with Videos 🎬
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {codingVideos.map((video, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-indigo-300 group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${video.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <video.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-indigo-600 transition-colors">{video.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      <Badge variant="secondary" className="text-xs">{video.level}</Badge>
                      <Badge variant="secondary" className="text-xs">{video.duration}</Badge>
                      <Badge variant="secondary" className="text-xs">{video.category}</Badge>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-indigo-50 border-indigo-200 hover:border-indigo-300"
                      onClick={() => window.open(video.link, '_blank')}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Watch & Learn
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Activities - Enhanced */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              🎯 Classic Fun Activities 🎯
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Traditional games and activities to boost your creativity!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funActivities.map((activity, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 cursor-pointer group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${activity.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bounce transition-all duration-300`}>
                    <activity.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{activity.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{activity.description}</p>
                  <div className="flex justify-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">{activity.level}</Badge>
                    <Badge variant="outline" className="text-xs">{activity.category}</Badge>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all"
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

      {/* Share Your Story - Enhanced with Animation */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-bounce" style={{ animationDelay: '0s' }}>
            <Star className="h-4 w-4 text-white opacity-50" />
          </div>
          <div className="absolute top-20 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
            <Heart className="h-6 w-6 text-white opacity-50" />
          </div>
          <div className="absolute bottom-20 left-30 animate-bounce" style={{ animationDelay: '2s' }}>
            <Sparkles className="h-5 w-5 text-white opacity-50" />
          </div>
          <div className="absolute bottom-10 right-10 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <Trophy className="h-7 w-7 text-white opacity-50" />
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 animate-fade-in">
            ✨ Share Your Amazing Story! ✨
          </h2>
          <p className="text-xl text-white mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Have you achieved something awesome? Won a competition? Helped someone? 
            We want to hear from you and celebrate your success!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={handleShareStory}
            >
              <BookOpen className="h-5 w-5 mr-2" />
              <ExternalLink className="h-4 w-4 mr-1" />
              Share My Story
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={handleUploadPhoto}
            >
              <Camera className="h-5 w-5 mr-2" />
              <ExternalLink className="h-4 w-4 mr-1" />
              Upload Photos
            </Button>
          </div>
          
          {/* Achievement celebration */}
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex justify-center items-center space-x-4 text-white">
              <Award className="h-8 w-8 animate-pulse" />
              <span className="text-lg font-semibold">Every story matters! Every achievement counts!</span>
              <Award className="h-8 w-8 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsCorner;
