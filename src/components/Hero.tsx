
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const handleGetStarted = () => {
    console.log('Get Started button clicked');
  };

  const handleViewWork = () => {
    console.log('View Work button clicked');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-element"
        style={{
          backgroundImage: 'url(../../public/uploads/gallery/9.jpg)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <div className="mb-8">
          <img
            src="/lovable-uploads/2a4b4929-30ac-4dbf-88f6-bacc350a60e4.png"
            alt="Prestige Design and Builders"
            className="h-56 w-auto mx-auto mb-4 animate-fade-in"
          />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 sm:mb-6 leading-tight break-words px-2">
          {t('hero.title')}
          <br />
          <span className="gold-text block mt-2 sm:mt-0 sm:inline">{t('hero.titleAccent')}</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl gold-text font-playfair mb-8 animate-slide-in-right px-4">
          {t('hero.tagline')}
        </p>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            to="/get-quote"
            onClick={handleGetStarted}
            className="bg-gold-gradient text-charcoal-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105"
          >
            {t('hero.startProject')}
          </Link>
          <Link
            to="/gallery"
            onClick={handleViewWork}
            className="border-2 border-gold-400 text-gold-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-gold-400 hover:text-charcoal-900 hover:shadow-xl"
          >
            {t('hero.viewWork')}
          </Link>
          <a
      href="tel:+9779812345678"
      className="bg-gold-gradient text-charcoal-900 px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-gold-400 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-500 "
    >
      📞 Call Now
    </a>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gold-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
