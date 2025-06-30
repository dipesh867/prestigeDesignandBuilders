
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center h-10 rounded-full bg-charcoal-800 border-2 border-gold-400/30 px-3 transition-all duration-300 hover:border-gold-400 hover:shadow-lg hover:transform hover:scale-105 group"
      aria-label="Toggle language"
    >
      <Globe className="text-gold-400 mr-2 group-hover:rotate-12 transition-transform duration-300" size={16} />
      
      <div className="flex items-center space-x-2">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
            language === 'en'
              ? 'bg-gold-gradient text-charcoal-900'
              : 'text-gray-300 hover:text-gold-400'
          }`}
        >
          EN
        </span>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
            language === 'ne'
              ? 'bg-gold-gradient text-charcoal-900'
              : 'text-gray-300 hover:text-gold-400'
          }`}
        >
          नेपाली
        </span>
      </div>
      
      {/* Animated indicator */}
      <div
        className={`absolute top-1 bottom-1 w-12 bg-gold-gradient/20 rounded-full transition-all duration-300 ${
          language === 'en' ? 'left-8' : 'left-16'
        }`}
      />
    </button>
  );
};

export default LanguageToggle;
