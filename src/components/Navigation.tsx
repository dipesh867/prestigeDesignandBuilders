import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'What We Build', path: '/what-we-build' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Custom Interior Styles', path: '/custom-interior-styles' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Made bigger */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/2a4b4929-30ac-4dbf-88f6-bacc350a60e4.png"
              alt="Prestige Design and Builders"
              className="h-16 w-auto transition-all duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-gold-400 ${
                  location.pathname === item.path
                    ? 'text-gold-400'
                    : 'text-white'
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-gold-gradient after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  location.pathname === item.path ? 'after:scale-x-100' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/get-quote"
              className="bg-gold-gradient text-charcoal-900 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-lg hover:transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-gold-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-charcoal-900/95 backdrop-blur-md rounded-lg mt-2 p-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-gold-400'
                    : 'text-white hover:text-gold-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/get-quote"
              className="block w-full mt-4 bg-gold-gradient text-charcoal-900 px-6 py-2 rounded-full font-medium text-center transition-all duration-300 hover:bg-gold-gradient-hover"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
