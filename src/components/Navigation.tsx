
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Programs', 
      path: '/programs',
      dropdown: [
        { name: 'Kids Corner', path: '/kids-corner' },
        { name: 'Caregiver Empowerment', path: '/caregiver-empowerment' },
      ]
    },
    { name: 'Partnership', path: '/partnership' },
    { name: 'Donate Now', path: '/donate-now' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isDropdownActive = (dropdown: any[]) => {
    return dropdown.some(item => location.pathname === item.path);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/b6fde09d-4f86-46fe-88db-c95a4c531338.png" 
              alt="KE261 PEFA NYAGORO CDC Logo" 
              className="h-8 w-8"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 leading-tight">KE261 PEFA NYAGORO</span>
              <span className="text-xs text-gray-600 leading-tight">Children's Ministry</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.dropdown ? (
                      <>
                        <NavigationMenuTrigger 
                          className={cn(
                            "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                            isActive(item.path) || isDropdownActive(item.dropdown)
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                          )}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-white border shadow-lg rounded-md p-2 min-w-[200px]">
                          <Link
                            to={item.path}
                            className={cn(
                              "block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 mb-1",
                              isActive(item.path)
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            )}
                          >
                            All {item.name}
                          </Link>
                          <div className="border-t pt-1">
                            {item.dropdown.map((dropdownItem) => (
                              <NavigationMenuLink key={dropdownItem.name} asChild>
                                <Link
                                  to={dropdownItem.path}
                                  className={cn(
                                    "block px-3 py-2 rounded-md text-sm transition-colors duration-200",
                                    isActive(dropdownItem.path)
                                      ? "text-blue-600 bg-blue-50 font-medium"
                                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                                  )}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                          isActive(item.path)
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                      isActive(item.path)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-3 py-2 rounded-md text-sm transition-colors duration-200",
                            isActive(dropdownItem.path)
                              ? "text-blue-600 bg-blue-50 font-medium"
                              : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                          )}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
