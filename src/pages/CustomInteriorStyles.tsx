
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CustomInteriorStyles = () => {
  const interiorStyles = [
    {
      id: 1,
      name: "Modern Minimalist",
      description: "Clean lines, neutral colors, and clutter-free spaces that emphasize functionality and simplicity.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Open floor plans", "Neutral color palette", "Minimal furniture", "Natural materials"]
    },
    {
      id: 2,
      name: "Industrial Chic",
      description: "Raw materials, exposed structures, and urban aesthetics that celebrate industrial heritage.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Exposed brick walls", "Steel and iron elements", "Concrete finishes", "Edison bulb lighting"]
    },
    {
      id: 3,
      name: "Contemporary Luxury",
      description: "Sophisticated elegance with premium materials and cutting-edge design elements.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["High-end finishes", "Smart home technology", "Custom lighting", "Premium textures"]
    },
    {
      id: 4,
      name: "Scandinavian Comfort",
      description: "Cozy, functional design with light woods, soft textures, and hygge-inspired elements.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Light wood furniture", "Cozy textiles", "Natural lighting", "Functional design"]
    },
    {
      id: 5,
      name: "Rustic Modern",
      description: "Warm, inviting spaces that blend natural elements with contemporary design principles.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Reclaimed wood", "Stone accents", "Earth tones", "Mixed textures"]
    },
    {
      id: 6,
      name: "Urban Loft",
      description: "Open, airy spaces with high ceilings and a perfect blend of comfort and sophistication.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["High ceilings", "Open layouts", "Urban views", "Flexible spaces"]
    }
  ];

  return (
    <div className="overflow-x-hidden bg-charcoal-900">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Custom <span className="gold-text">Interior Styles</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our signature interior design styles that perfectly complement our steel and iron structures
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
                    Learn More About This Style
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-charcoal-800 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Create Your Perfect <span className="gold-text">Interior</span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
              Our expert design team works with you to create custom interiors that reflect your style and complement our architectural excellence. From concept to completion, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-gradient text-charcoal-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105">
                Schedule Design Consultation
              </button>
              <button className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-400 hover:text-charcoal-900 hover:shadow-xl">
                View Our Portfolio
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
