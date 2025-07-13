
import React from 'react';
import { Badge } from '@/components/ui/badge';

const ProgramsHero = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Our Programs: Transforming Lives, Building Communities
        </h1>
        <p className="text-xl text-teal-100 max-w-4xl mx-auto">
          Discover our comprehensive programs designed to empower individuals, strengthen families, and create sustainable positive change in communities. Each program is carefully crafted to address specific needs while building long-term resilience.
        </p>
        <div className="mt-8 flex justify-center">
          <Badge className="bg-teal-400 text-teal-900 text-lg px-6 py-3 hover:scale-110 transition-transform cursor-pointer">
            Making a Lasting Difference
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;
