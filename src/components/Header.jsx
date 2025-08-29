import { useState } from 'react';
import { Search, GraduationCap, Menu, X, Home, Info, Phone } from 'lucide-react';

const Header = ({ onSearchClick, onHomeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CollegeFinder
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onHomeClick}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <Home className="w-4 h-4" />
              Home
            </button>
            <button 
              onClick={onSearchClick}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <Search className="w-4 h-4" />
              Find Colleges
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <Info className="w-4 h-4" />
              About
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <Phone className="w-4 h-4" />
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => {
                  onHomeClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                Home
              </button>
              <button 
                onClick={() => {
                  onSearchClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                <Search className="w-4 h-4" />
                Find Colleges
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                <Info className="w-4 h-4" />
                About
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                <Phone className="w-4 h-4" />
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;