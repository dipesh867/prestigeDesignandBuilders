
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const navigationItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.whatWeBuild'), path: '/what-we-build' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  return (
    <footer className="bg-charcoal-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="/lovable-uploads/2a4b4929-30ac-4dbf-88f6-bacc350a60e4.png"
              alt="Prestige Design and Builders"
              className="h-20 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            <p className="gold-text font-playfair text-lg italic">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 gold-text">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-300 hover:text-gold-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 gold-text">{t('footer.contactInfo')}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-gold-400 mr-3" size={18} />
                <span className="text-gray-300">+977-9806076363</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-gold-400 mr-3" size={18} />
                <span className="text-gray-300">suryarajbanshi083@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-gold-400 mr-3 mt-1" size={18} />
                <span className="text-gray-300">
                  Jhapa<br />
                 Birtamod
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Button Section */}
        <div className="text-center py-8 border-t border-b border-charcoal-700 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            {t('footer.readyProject')} <span className="gold-text">{t('footer.dreamProject')}</span>?
          </h3>
          <Link
            to="/get-quote"
            className="inline-block bg-gold-gradient text-charcoal-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105"
          >
            {t('footer.freeQuote')}
          </Link>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
