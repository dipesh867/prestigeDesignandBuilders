
import { Building2, Home, Factory, Shield, Leaf, Clock, DollarSign, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatWeBuild = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const buildingTypes = [
    {
      icon: Home,
      title: t('whatWeBuild.residential.title'),
      description: t('whatWeBuild.residential.description'),
    },
    {
      icon: Building2,
      title: t('whatWeBuild.commercial.title'),
      description: t('whatWeBuild.commercial.description'),
    },
    {
      icon: Factory,
      title: t('whatWeBuild.industrial.title'),
      description: t('whatWeBuild.industrial.description'),
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: t('whatWeBuild.advantages.durability.title'),
      description: t('whatWeBuild.advantages.durability.description'),
    },
    {
      icon: Leaf,
      title: t('whatWeBuild.advantages.sustainability.title'),
      description: t('whatWeBuild.advantages.sustainability.description'),
    },
    {
      icon: Clock,
      title: t('whatWeBuild.advantages.fasterConstruction.title'),
      description: t('whatWeBuild.advantages.fasterConstruction.description'),
    },
    {
      icon: DollarSign,
      title: t('whatWeBuild.advantages.costEfficiency.title'),
      description: t('whatWeBuild.advantages.costEfficiency.description'),
    },
    {
      icon: Sparkles,
      title: t('whatWeBuild.advantages.modernAesthetic.title'),
      description: t('whatWeBuild.advantages.modernAesthetic.description'),
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-charcoal-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 break-words">
            {t('whatWeBuild.title')} <span className="gold-text">{t('whatWeBuild.titleAccent')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            {t('whatWeBuild.subtitle')}
          </p>
        </div>

        {/* Building Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {buildingTypes.map((type, index) => (
            <div
              key={type.title}
              className={`bg-charcoal-700 p-6 sm:p-8 rounded-xl border border-charcoal-600 hover:border-gold-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <type.icon className="text-gold-400 mb-4" size={48} />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 break-words">{type.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-12 break-words">
            {t('whatWeBuild.whyChoose')} <span className="gold-text">{t('whatWeBuild.whyChooseAccent')}</span>
          </h3>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className={`text-center group hover:transform hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'animate-slide-in-right' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="bg-gold-gradient p-4 rounded-full inline-flex mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <advantage.icon className="text-charcoal-900" size={32} />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 break-words">{advantage.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
          <button className="bg-gold-gradient text-charcoal-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105">
            {t('whatWeBuild.exploreProjects')}
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default WhatWeBuild;
