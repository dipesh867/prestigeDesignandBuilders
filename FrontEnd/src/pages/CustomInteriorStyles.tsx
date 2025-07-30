import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { apiService, InteriorStyle } from '@/services/api';

const CustomInteriorStyles = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState<number | null>(null);
  const [interiorStyles, setInteriorStyles] = useState<InteriorStyle[]>([]);

  useEffect(() => {
    apiService.getInteriorStyles().then((response) => {
      if (response.data) setInteriorStyles(response.data);
    });
  }, []);

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  const handleViewPortfolio = () => {
    navigate('/gallery');
  };

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
              {t('customInterior.title')} <span className="gold-text">{t('customInterior.titleAccent')}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('customInterior.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {interiorStyles.map((style, index) => (
              <div
                key={style.id}
                className={`bg-charcoal-800 rounded-2xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedStyle(style.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={
    style.images && style.images.length > 0
      ? style.images[0].image  // use it directly as it's already full URL
      : '/fallback-image.jpg'
  }
                    alt={style.interior_name}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{style.interior_name}</h3>
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
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-center">
                      <span className="text-gray-400 text-sm block">Budget Range</span>
                      <span className="gold-text font-semibold">{style.budget}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-gray-400 text-sm block">Timeline</span>
                      <span className="text-white font-semibold">{style.timeline}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gold-gradient text-charcoal-900 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gold-gradient-hover hover:transform hover:scale-105">
                    Click to Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Detail Modal */}
      {selectedStyle && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-charcoal-800 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedStyle(null)}
              className="absolute top-4 right-4 text-white hover:text-gold-400 bg-charcoal-700 rounded-full p-2 transition-all duration-300 hover:bg-charcoal-600 z-10"
            >
              <X size={24} />
            </button>
            
            {(() => {
              const style = interiorStyles.find(s => s.id === selectedStyle);
              if (!style) return null;
              
              return (
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                                       <img
                    src={
    style.images && style.images.length > 0
      ? style.images[0].image  // use it directly as it's already full URL
      : '/fallback-image.jpg'
  }
                        alt={style.interior_name}
                        className="w-full h-80 object-cover rounded-xl"
                      />
                    </div>
                    
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-4">{style.interior_name}</h2>
                      <p className="text-gray-300 mb-6 leading-relaxed">{style.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-charcoal-700 p-4 rounded-lg text-center">
                          <span className="text-gray-400 text-sm block mb-1">Budget Range</span>
                          <span className="gold-text font-bold text-lg">{style.budget}</span>
                        </div>
                        <div className="bg-charcoal-700 p-4 rounded-lg text-center">
                          <span className="text-gray-400 text-sm block mb-1">Timeline</span>
                          <span className="text-white font-bold text-lg">{style.timeline}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {style.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center bg-charcoal-700 p-3 rounded-lg">
                              <div className="w-3 h-3 bg-gold-400 rounded-full mr-3"></div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                          onClick={handleScheduleConsultation}
                          className="flex-1 bg-gold-gradient text-charcoal-900 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gold-gradient-hover"
                        >
                          Schedule Consultation
                        </button>
                        <button 
                          onClick={handleViewPortfolio}
                          className="flex-1 border-2 border-gold-400 text-gold-400 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gold-400 hover:text-charcoal-900"
                        >
                          View Portfolio
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Interior Design Do's & Don'ts Section */}
      <section className="py-20 bg-charcoal-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('customInterior.smartInteriorDesign')} <span className="gold-text">{t('customInterior.designTips')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('customInterior.tipsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Do's Section */}
            <div className="bg-charcoal-900 rounded-2xl p-8 shadow-2xl animate-fade-in-up">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-3xl font-bold gold-text mb-4">{t('customInterior.dos')}</h3>
                <p className="text-gray-300">{t('customInterior.dosSubtitle')}</p>
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
                <h3 className="text-3xl font-bold text-red-400 mb-4">{t('customInterior.donts')}</h3>
                <p className="text-gray-300">{t('customInterior.dontsSubtitle')}</p>
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
              {t('customInterior.createPerfect')} <span className="gold-text">{t('customInterior.interior')}</span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
              {t('customInterior.designConsultation')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleScheduleConsultation}
                className="bg-gold-gradient text-charcoal-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105"
              >
                {t('customInterior.scheduleConsultation')}
              </button>
              <button 
                onClick={handleViewPortfolio}
                className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-400 hover:text-charcoal-900 hover:shadow-xl"
              >
                {t('whatWeBuildPage.viewPortfolio')}
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
