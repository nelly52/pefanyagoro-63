
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PaymentButton } from '@/components/PaymentButton';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { toast } from 'sonner';
import {
  HeartHandshake,
  Sprout,
  TrendingUp,
  Users2,
  Camera,
  Send,
} from 'lucide-react';

const CaregiverEmpowerment = () => {
  const [selectedStoryType, setSelectedStoryType] = useState<string | null>(null);
  const [storyForm, setStoryForm] = useState({
    name: '',
    location: '',
    storyType: '',
    title: '',
    story: '',
    email: '',
    phone: '',
  });

  const { submitForm, isSubmitting } = useFormSubmission({
    onSuccess: () => {
      setStoryForm({
        name: '',
        location: '',
        storyType: '',
        title: '',
        story: '',
        email: '',
        phone: '',
      });
      toast.success('Thank you for sharing your story!');
    },
  });

  const handleStorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm('contact_submissions', {
      name: storyForm.name,
      email: storyForm.email,
      phone: storyForm.phone,
      subject: `${storyForm.storyType} Story: ${storyForm.title}`,
      message: `Location: ${storyForm.location}\n\nStory:\n${storyForm.story}`,
    });
  };

  const storyCategories = [
    {
      title: "Parenting Skills Stories",
      description: "Share your journey in developing effective parenting techniques and nurturing your children's growth.",
      icon: HeartHandshake,
      color: "bg-blue-500",
      examples: [
        "Effective discipline strategies",
        "Building strong parent-child relationships",
        "Managing challenging behaviors",
        "Supporting child development milestones"
      ],
    },
    {
      title: "Agriculture Success Stories",
      description: "Tell us about your experience growing Sunflower, Rice, Pineapple, and Maize to support your family.",
      icon: Sprout,
      color: "bg-green-500",
      examples: [
        "Sunflower farming techniques",
        "Rice cultivation methods",
        "Pineapple growing success",
        "Maize production improvements"
      ],
    },
    {
      title: "Business Boost Stories",
      description: "Share how you've built or improved your business to support your highly vulnerable family.",
      icon: TrendingUp,
      color: "bg-orange-500",
      examples: [
        "Starting a small business",
        "Overcoming financial challenges",
        "Community market participation",
        "Skills development success"
      ],
    },
  ];

  const featuredStories = [
    {
      category: "Parenting",
      title: "Building Confidence in My Children",
      excerpt: "Through patience and understanding, I learned to communicate better with my children...",
      author: "Sarah M.",
      location: "Kampala",
    },
    {
      category: "Agriculture",
      title: "My Sunflower Success Journey",
      excerpt: "Starting with just a small plot, I now harvest enough sunflowers to support my family...",
      author: "John K.",
      location: "Masaka",
    },
    {
      category: "Business",
      title: "From Struggling to Thriving",
      excerpt: "With determination and community support, I built a business that changed our lives...",
      author: "Grace A.",
      location: "Jinja",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Caregiver Stories & Empowerment
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Share your inspiring stories of parenting, agriculture, and business success. Your journey can inspire and empower other caregivers in our community.
          </p>
          <div className="mt-8 flex justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700">
              Share Your Story Today
            </Button>
          </div>
        </div>
      </section>

      {/* Story Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Share Your Story
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We want to hear about your experiences in parenting, agriculture, and building businesses that support vulnerable families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {storyCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className={`h-2 ${category.color}`}></div>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => {
                          setSelectedStoryType(category.title);
                          setStoryForm(prev => ({...prev, storyType: category.title}));
                        }}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Share Your Story
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Share Your {category.title.replace(' Stories', '')} Story</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleStorySubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Your Name *</Label>
                            <Input
                              id="name"
                              value={storyForm.name}
                              onChange={(e) => setStoryForm(prev => ({...prev, name: e.target.value}))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="location">Location</Label>
                            <Input
                              id="location"
                              value={storyForm.location}
                              onChange={(e) => setStoryForm(prev => ({...prev, location: e.target.value}))}
                              placeholder="City, District"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={storyForm.email}
                              onChange={(e) => setStoryForm(prev => ({...prev, email: e.target.value}))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              value={storyForm.phone}
                              onChange={(e) => setStoryForm(prev => ({...prev, phone: e.target.value}))}
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="title">Story Title *</Label>
                          <Input
                            id="title"
                            value={storyForm.title}
                            onChange={(e) => setStoryForm(prev => ({...prev, title: e.target.value}))}
                            placeholder="Give your story a compelling title"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="story">Your Story *</Label>
                          <Textarea
                            id="story"
                            value={storyForm.story}
                            onChange={(e) => setStoryForm(prev => ({...prev, story: e.target.value}))}
                            placeholder="Share your detailed story, challenges you faced, solutions you found, and how it has impacted your family..."
                            rows={6}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? 'Sharing...' : 'Share My Story'}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Inspiring Stories from Our Community
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read how other caregivers have overcome challenges and built better lives for their families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {story.category}
                  </Badge>
                  <CardTitle className="text-xl text-gray-900">
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 italic">"{story.excerpt}"</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>— {story.author}</span>
                    <span>{story.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Support Caregiver Empowerment
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Your support helps us collect, share, and celebrate these inspiring stories while providing resources to more caregivers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PaymentButton 
              amount={25}
              description="Support story collection and sharing"
              className="bg-white text-purple-600 hover:bg-gray-100"
            />
            <PaymentButton 
              amount={50}
              description="Sponsor caregiver empowerment programs"
              className="bg-white text-purple-600 hover:bg-gray-100"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaregiverEmpowerment;
