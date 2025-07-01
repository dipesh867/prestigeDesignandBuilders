import { useState, useEffect, useRef, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const visibleItemsRef = useRef(new Set<number>());

  // Memoize filteredProjects so filtering only recalculates when activeCategory changes
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  // Use IntersectionObserver to track which items are visible
  useEffect(() => {
    visibleItemsRef.current.clear(); // Clear previous visible items on category change
    setVisibleItems([]);

    const observer = new IntersectionObserver(
      (entries) => {
        let updated = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!visibleItemsRef.current.has(index)) {
              visibleItemsRef.current.add(index);
              updated = true;
            }
          }
        });
        if (updated) {
          // Update state only if new items appeared
          setVisibleItems(Array.from(visibleItemsRef.current));
        }
      },
      { threshold: 0.2 }
    );

    // Observe all visible gallery items
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredProjects]); // Re-run observer when filteredProjects changes

  // Navigation handlers for lightbox modal
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

  // Categories to filter
  const categories = [
    { key: 'All', label: t('gallery.categories.all') },
    { key: 'Residential', label: t('gallery.categories.residential') },
    { key: 'Commercial', label: t('gallery.categories.commercial') },
    { key: 'Industrial', label: t('gallery.categories.industrial') },
  ];

  return (
    <section className="py-20 bg-charcoal-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('gallery.title')} <span className="gold-text">{t('gallery.titleAccent')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('gallery.subtitle')}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
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

          <Link
            to="/gallery"
            className="inline-block bg-gold-gradient text-charcoal-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold-gradient-hover hover:transform hover:scale-105"
          >
            {t('gallery.viewFullGallery')}
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, 12).map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`gallery-item group cursor-pointer overflow-hidden rounded-xl bg-charcoal-800 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onClick={() => setSelectedImage(index)}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
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
        {selectedImage !== null && filteredProjects[selectedImage] && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gold-400 z-10"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
              <img
                src={filteredProjects[selectedImage].image}
                alt={filteredProjects[selectedImage].title}
                className="w-full h-auto rounded-lg"
                loading="eager"
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
  );
};

export default Gallery;
