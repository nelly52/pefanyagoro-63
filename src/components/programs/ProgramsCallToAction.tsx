
import React from 'react';

const ProgramsCallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Want to Support Our Programs?
        </h2>
        <p className="text-xl text-teal-100 mb-8">
          Your support enables us to expand these life-changing programs and reach more families and communities in need. Together, we can build a brighter future for everyone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/donate-now"
            className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-200"
          >
            Donate Now
          </a>
          <a 
            href="/partnership"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-md font-medium transition-colors duration-200"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsCallToAction;
