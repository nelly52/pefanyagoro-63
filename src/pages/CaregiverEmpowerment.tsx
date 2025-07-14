
import React from 'react';
import { CaregiverHero } from '@/components/caregiver/CaregiverHero';
import { ImpactStories } from '@/components/caregiver/ImpactStories';
import { EmpowermentPrograms } from '@/components/caregiver/EmpowermentPrograms';
import { CaregiverSupport } from '@/components/caregiver/CaregiverSupport';

const CaregiverEmpowerment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CaregiverHero />
      <ImpactStories />
      <EmpowermentPrograms />
      <CaregiverSupport />
    </div>
  );
};

export default CaregiverEmpowerment;
