
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/b6fde09d-4f86-46fe-88db-c95a4c531338.png" 
                alt="KE261 PEFA NYAGORO CDC Logo" 
                className="h-8 w-8"
              />
              <div>
                <h3 className="font-bold text-xl">KE261 PEFA NYAGORO CDC</h3>
                <p className="text-gray-300">Christ-Centered Child Development</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering orphans and vulnerable children to live fulfilled, God-centered lives 
              through holistic development and the love of Christ.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>ke261pefanyagorocdc@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+254757846184</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Homabay, East Kochia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-yellow-400 transition-colors">Programs</Link></li>
              <li><Link to="/partnership" className="text-gray-300 hover:text-yellow-400 transition-colors">Partnership</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Office Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 8AM-5PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Saturday: 9AM-3PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 KE261 PEFA NYAGORO CDC. All rights reserved. | Building hope, one child at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
