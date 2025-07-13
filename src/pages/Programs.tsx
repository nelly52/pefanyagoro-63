
import React from 'react';
import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramsGrid from '@/components/programs/ProgramsGrid';
import ProgramsCallToAction from '@/components/programs/ProgramsCallToAction';

const Programs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProgramsHero />
      <ProgramsGrid />
      <ProgramsCallToAction />
    </div>
  );
};

export default Programs;
