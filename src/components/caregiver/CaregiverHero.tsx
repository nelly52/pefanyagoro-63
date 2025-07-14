import React from 'react';

export const CaregiverHero = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Caregiver Empowerment Stories
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Real stories of transformation from our community members who have built stronger families, 
            achieved food security, and created sustainable livelihoods through our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-green-100">Families Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">85%</div>
              <div className="text-green-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">KSh 2.5M</div>
              <div className="text-green-100">Community Income Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};