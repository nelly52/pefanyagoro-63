
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div 
        className="absolute inset-0 bg-black opacity-40"
        style={{
          backgroundImage: `url('/lovable-uploads/bae9ee1e-e2cb-4986-9151-5e5819afbc55.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Reflecting Christ's Love
            <span className="block text-yellow-400">Through Every Child</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
            Nurturing orphans and vulnerable children through holistic development—
            spiritually, physically, emotionally, intellectually, and socially.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
                Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
