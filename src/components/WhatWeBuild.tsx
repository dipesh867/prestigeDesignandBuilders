
import { Building2, Home, Factory, Shield, Leaf, Clock, DollarSign, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const WhatWeBuild = () => {
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
      title: 'Residential',
      description: 'Modern homes and residential complexes with steel framework for superior strength and design flexibility.',
    },
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Office buildings, retail spaces, and commercial complexes built with precision and contemporary aesthetics.',
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Warehouses, manufacturing facilities, and industrial structures designed for heavy-duty applications.',
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Durability',
      description: 'Steel structures offer exceptional strength and longevity, withstanding extreme weather conditions.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Eco-friendly construction with recyclable materials and reduced environmental impact.',
    },
    {
      icon: Clock,
      title: 'Faster Construction',
      description: 'Pre-fabricated steel components enable quicker assembly and reduced construction time.',
    },
    {
      icon: DollarSign,
      title: 'Cost-Efficiency',
      description: 'Lower maintenance costs and faster construction translate to significant savings.',
    },
    {
      icon: Sparkles,
      title: 'Modern Aesthetic',
      description: 'Clean lines and contemporary design possibilities that elevate architectural appeal.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-charcoal-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We <span className="gold-text">Build</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialize in creating premium steel and iron structures that redefine modern construction standards
          </p>
        </div>

        {/* Building Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {buildingTypes.map((type, index) => (
            <div
              key={type.title}
              className={`bg-charcoal-700 p-8 rounded-xl border border-charcoal-600 hover:border-gold-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <type.icon className="text-gold-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
              <p className="text-gray-300 leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Why Choose <span className="gold-text">Steel & Iron</span>?
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
                <h4 className="text-lg font-semibold text-white mb-2">{advantage.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
          <button className="bg-gold-gradient text-charcoal-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105">
            Explore Our Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
