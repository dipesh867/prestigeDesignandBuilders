
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Building2, Home, Factory, Shield, Leaf, Clock, DollarSign, Sparkles, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatWeBuildPage = () => {
  const { t } = useLanguage();

  const buildingTypes = [
    {
      icon: Home,
      title: t('whatWeBuildPage.residentialConstruction'),
      description: t('whatWeBuildPage.residentialDescription'),
      features: [
        'Custom home designs with steel framework',
        'Energy-efficient construction methods',
        'Open floor plans with structural integrity',
        'Modern architectural aesthetics',
        'Seismic resistance and durability'
      ],
      image: '../../public/uploads/gallery/2.jpg'
    },
    {
      icon: Building2,
      title: t('whatWeBuildPage.commercialBuildings'),
      description: t('whatWeBuildPage.commercialDescription'),
      features: [
        'Office complexes and corporate headquarters',
        'Retail and shopping center construction',
        'Mixed-use development projects',
        'High-rise building expertise',
        'LEED certified green building options'
      ],
      image: '../../public/uploads/gallery/5.jpg'
    },
  ];

  const steelAdvantages = [
    {
      icon: Shield,
      title: t('whatWeBuildPage.exceptionalDurability'),
      description: t('whatWeBuildPage.durabilityDescription'),
      benefits: ['50+ year lifespan', 'Weather resistant', 'Fire resistant', 'Pest proof']
    },
    {
      icon: Leaf,
      title: t('whatWeBuildPage.environmentalSustainability'),
      description: t('whatWeBuildPage.sustainabilityDescription'),
      benefits: ['100% recyclable material', 'Reduced construction waste', 'Energy efficient', 'Lower carbon footprint']
    },
    {
      icon: Clock,
      title: t('whatWeBuildPage.fasterConstructionTimeline'),
      description: t('whatWeBuildPage.fasterTimelineDescription'),
      benefits: ['50% faster construction', 'Weather-independent assembly', 'Precise manufacturing', 'Reduced labor costs']
    },
    {
      icon: DollarSign,
      title: t('whatWeBuildPage.longTermCostEfficiency'),
      description: t('whatWeBuildPage.costEfficiencyDescription'),
      benefits: ['Lower maintenance costs', 'Reduced insurance premiums', 'Energy savings', 'Higher resale value']
    },
    {
      icon: Sparkles,
      title: t('whatWeBuildPage.designFlexibility'),
      description: t('whatWeBuildPage.designFlexibilityDescription'),
      benefits: ['Large span capabilities', 'Unique architectural features', 'Easy modifications', 'Modern aesthetics']
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-charcoal-900">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('whatWeBuildPage.title')} <span className="gold-text">{t('whatWeBuildPage.titleAccent')}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('whatWeBuildPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Building Types Section */}
      <section className="py-20 bg-charcoal-800">
        <div className="container mx-auto px-4">
          {buildingTypes.map((type, index) => (
            <div key={type.title} className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 animate-fade-in-up">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-96 object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:w-1/2 animate-slide-in-right">
                <div className="flex items-center mb-6">
                  <type.icon className="text-gold-400 mr-4" size={48} />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{type.title}</h2>
                </div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="text-gold-400 mr-3 flex-shrink-0" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Steel Advantages Section */}
      <section className="py-20 bg-charcoal-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('whatWeBuildPage.whySteelConstruction')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('whatWeBuildPage.steelAdvantagesSubtitle')}
            </p>
          </div>

          <div className="space-y-16">
            {steelAdvantages.map((advantage, index) => (
              <div key={advantage.title} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 animate-fade-in-up">
                  <div className="bg-charcoal-800 p-8 rounded-xl border border-charcoal-600">
                    <div className="flex items-center mb-6">
                      <div className="bg-gold-gradient p-3 rounded-full mr-4">
                        <advantage.icon className="text-charcoal-900" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{advantage.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 animate-slide-in-right">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {advantage.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="bg-charcoal-900 p-4 rounded-lg border border-gold-400/20">
                        <div className="flex items-center">
                          <CheckCircle className="text-gold-400 mr-2 flex-shrink-0" size={16} />
                          <span className="text-white font-medium">{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-900">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('whatWeBuildPage.readyToBuild')} <span className="gold-text">{t('whatWeBuildPage.vision')}</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('whatWeBuildPage.contactDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold-gradient text-charcoal-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105">
              {t('whatWeBuildPage.getFreeConsultation')}
            </button>
            <button className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-400 hover:text-charcoal-900 hover:shadow-xl">
              {t('whatWeBuildPage.viewPortfolio')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeBuildPage;
