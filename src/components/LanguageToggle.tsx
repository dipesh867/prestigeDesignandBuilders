
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center h-8 rounded-full bg-charcoal-800 border border-gold-400/20 px-2 transition-all duration-300 hover:border-gold-400 hover:shadow-lg hover:transform hover:scale-105 group"
      aria-label="Toggle language"
    >
      <Globe className="text-gold-400 mr-1 group-hover:rotate-12 transition-transform duration-300" size={12} />
      
      <div className="flex items-center space-x-1">
        <span
          className={`px-1.5 py-0.5 rounded-full text-xs font-medium transition-all duration-300 ${
            language === 'en'
              ? 'bg-gold-gradient text-charcoal-900'
              : 'text-gray-300 hover:text-gold-400'
          }`}
        >
          EN
        </span>
        <span
          className={`px-1.5 py-0.5 rounded-full text-xs font-medium transition-all duration-300 ${
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
        className={`absolute top-0.5 bottom-0.5 w-8 bg-gold-gradient/10 rounded-full transition-all duration-300 ${
          language === 'en' ? 'left-6' : 'left-12'
        }`}
      />
    </button>
  );
};

export default LanguageToggle;
