import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Heart, Leaf, TreePine } from 'lucide-react';

export const DonationHero = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Heart className="h-16 w-16 text-white" fill="currentColor" />
            <Leaf className="h-8 w-8 absolute -top-2 -right-2 text-green-200" />
          </div>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Plant Seeds of Hope Today
        </h1>
        <p className="text-xl text-green-100 max-w-4xl mx-auto">
          Your donation directly supports children, families, and communities in need. 
          Every contribution helps us cultivate stronger, more resilient communities through 
          our comprehensive programs.
        </p>
        <div className="mt-8 flex justify-center">
          <Badge className="bg-green-400 text-green-900 text-lg px-6 py-3 hover:scale-110 transition-transform">
            <TreePine className="h-5 w-5 mr-2" />
            Growing Impact, One Donation at a Time
          </Badge>
        </div>
      </div>
    </section>
  );
};