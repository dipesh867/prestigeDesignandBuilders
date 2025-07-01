
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const CustomInteriorStyles = () => {
  const { t } = useLanguage();

  const interiorStyles = [
    {
      id: 1,
      name: t('interiorStyles.modernMinimalist'),
      description: t('interiorStyles.modernMinimalist.desc'),
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Open floor plans", "Neutral color palette", "Minimal furniture", "Natural materials"]
    },
    {
      id: 2,
      name: t('interiorStyles.industrialChic'),
      description: t('interiorStyles.industrialChic.desc'),
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Exposed brick walls", "Steel and iron elements", "Concrete finishes", "Edison bulb lighting"]
    },
    {
      id: 3,
      name: t('interiorStyles.contemporaryLuxury'),
      description: t('interiorStyles.contemporaryLuxury.desc'),
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["High-end finishes", "Smart home technology", "Custom lighting", "Premium textures"]
    },
    {
      id: 4,
      name: t('interiorStyles.scandinavianComfort'),
      description: t('interiorStyles.scandinavianComfort.desc'),
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Light wood furniture", "Cozy textiles", "Natural lighting", "Functional design"]
    },
    {
      id: 5,
      name: t('interiorStyles.rusticModern'),
      description: t('interiorStyles.rusticModern.desc'),
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Reclaimed wood", "Stone accents", "Earth tones", "Mixed textures"]
    },
    {
      id: 6,
      name: t('interiorStyles.urbanLoft'),
      description: t('interiorStyles.urbanLoft.desc'),
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["High ceilings", "Open layouts", "Urban views", "Flexible spaces"]
    }
  ];

  const dos = [
    {
      title: "Maximize Natural Light",
      description: "Use large windows and light colors to create bright, airy spaces",
      icon: "☀️"
    },
    {
      title: "Create Focal Points",
      description: "Use statement pieces like artwork or furniture to draw attention",
      icon: "🎯"
    },
    {
      title: "Choose Quality Materials",
      description: "Invest in durable, high-quality materials that stand the test of time",
      icon: "💎"
    },
    {
      title: "Plan for Functionality",
      description: "Ensure every space serves a purpose and flows well with daily activities",
      icon: "🏠"
    },
    {
      title: "Layer Your Lighting",
      description: "Combine ambient, task, and accent lighting for versatile illumination",
      icon: "💡"
    },
    {
      title: "Maintain Consistent Style",
      description: "Keep a cohesive design theme throughout your space",
      icon: "🎨"
    }
  ];

  const donts = [
    {
      title: "Don't Rush the Process",
      description: "Take time to plan and consider all aspects before making decisions",
      icon: "⏰"
    },
    {
      title: "Don't Ignore Scale",
      description: "Avoid furniture that's too big or too small for your space",
      icon: "📏"
    },
    {
      title: "Don't Neglect Storage",
      description: "Plan adequate storage to keep your space organized and clutter-free",
      icon: "📦"
    },
    {
      title: "Don't Follow Every Trend",
      description: "Choose timeless elements over fleeting trends for lasting appeal",
      icon: "📈"
    },
    {
      title: "Don't Block Natural Flow",
      description: "Avoid placing furniture in ways that obstruct natural movement",
      icon: "🚫"
    },
    {
      title: "Don't Forget About Comfort",
      description: "Prioritize comfort and livability over purely aesthetic choices",
      icon: "🛋️"
    }
  ];

  return (
    <div className="overflow-x-hidden bg-charcoal-900">
      <Navigation />
      
      {/* Custom Interior Styles Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('interiorStyles.title')} <span className="gold-text">{t('interiorStyles.titleAccent')}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('interiorStyles.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {interiorStyles.map((style, index) => (
              <div
                key={style.id}
                className={`bg-charcoal-800 rounded-2xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{style.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">{style.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {style.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-gold-400 rounded-full mr-2"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gold-gradient text-charcoal-900 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gold-gradient-hover hover:transform hover:scale-105">
                    {t('interiorStyles.learnMore')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Design Do's & Don'ts Section */}
      <section className="py-20 bg-charcoal-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('interiorStyles.tips.title')} <span className="gold-text">{t('interiorStyles.tips.titleAccent')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('interiorStyles.tips.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Do's Section */}
            <div className="bg-charcoal-900 rounded-2xl p-8 shadow-2xl animate-fade-in-up">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-3xl font-bold gold-text mb-4">{t('interiorStyles.dos')}</h3>
                <p className="text-gray-300">{t('interiorStyles.dos.subtitle')}</p>
              </div>

              <div className="space-y-6">
                {dos.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-charcoal-700 rounded-xl hover:bg-charcoal-600 transition-colors duration-300">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Don'ts Section */}
            <div className="bg-charcoal-900 rounded-2xl p-8 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">❌</div>
                <h3 className="text-3xl font-bold text-red-400 mb-4">{t('interiorStyles.donts')}</h3>
                <p className="text-gray-300">{t('interiorStyles.donts.subtitle')}</p>
              </div>

              <div className="space-y-6">
                {donts.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-charcoal-700 rounded-xl hover:bg-charcoal-600 transition-colors duration-300">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center bg-charcoal-800 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {t('interiorStyles.cta.title')} <span className="gold-text">{t('interiorStyles.cta.titleAccent')}</span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
              {t('interiorStyles.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-gradient text-charcoal-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105">
                {t('interiorStyles.cta.consultation')}
              </button>
              <button className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-400 hover:text-charcoal-900 hover:shadow-xl">
                {t('interiorStyles.cta.portfolio')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomInteriorStyles;
