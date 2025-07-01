import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { APP_CONFIG } from '@/utils/constants';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetQuote = () => {
    console.log('Get Quote button clicked from navigation');
  };

  const navigationItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.whatWeBuild'), path: '/what-we-build' },
    { name: t('nav.customInteriorStyles'), path: '/custom-interior-styles' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-900/45 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/2a4b4929-30ac-4dbf-88f6-bacc350a60e4.png"
              alt={APP_CONFIG.company.name}
              className="h-20 w-auto transition-all duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
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
            
            {/* Language Toggle */}
            <LanguageToggle />
            
            <Link
              to="/get-quote"
              onClick={handleGetQuote}
              className="bg-gold-gradient text-charcoal-900 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-lg hover:transform hover:scale-105"
            >
              {t('nav.getQuote')}
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
            {navigationItems.map((item) => (
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
            
            {/* Mobile Language Toggle */}
            <div className="py-3 flex justify-center">
              <LanguageToggle />
            </div>
            
            <Link
              to="/get-quote"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleGetQuote();
              }}
              className="block w-full mt-4 bg-gold-gradient text-charcoal-900 px-6 py-2 rounded-full font-medium text-center transition-all duration-300 hover:bg-gold-gradient-hover"
            >
              {t('nav.getQuote')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
