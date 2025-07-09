
import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Categories with translations
  const categories = [
    { key: 'All', label: t('gallery.categories.all') },
    { key: 'Residential', label: t('gallery.categories.residential') },
    { key: 'Commercial', label: t('gallery.categories.commercial') },
    { key: 'Industrial', label: t('gallery.categories.industrial') },
  ];

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  return (
    <div className="overflow-x-hidden bg-charcoal-900">
      <Navigation />

      <section ref={sectionRef} className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('gallery.title')} <span className="gold-text">{t('gallery.titleAccent')}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {t('gallery.subtitle')}
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.key
                      ? 'bg-gold-gradient text-charcoal-900'
                      : 'bg-charcoal-700 text-white hover:bg-charcoal-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer overflow-hidden rounded-xl bg-charcoal-800 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    decoding='async'
                    loading='lazy'
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="relative w-full max-w-4xl">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="fixed top-6 right-6 md:top-8 md:right-8 z-50 text-white hover:text-gold-400 bg-black bg-opacity-50 rounded-full p-2 transition-all duration-300 hover:bg-opacity-70 hover:scale-110"
                  aria-label="Close modal"
                >
                  <X size={24} strokeWidth={2} />
                </button>

                {/* Prev/Next */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 z-20 bg-black bg-opacity-50 rounded-full p-2 transition-all duration-300 hover:bg-opacity-70 hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} strokeWidth={2} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 z-20 bg-black bg-opacity-50 rounded-full p-2 transition-all duration-300 hover:bg-opacity-70 hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} strokeWidth={2} />
                </button>

                <img
                  loading='lazy'
                  decoding='async'
                  src={filteredProjects[selectedImage].image}
                  alt={filteredProjects[selectedImage].title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {filteredProjects[selectedImage].title}
                  </h3>
                  <p className="text-gray-300">{filteredProjects[selectedImage].description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
