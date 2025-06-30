
import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const projects = [
    {
      id: 1,
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Modern Steel Villa',
      description: 'Contemporary residential design with steel framework'
    },
    {
      id: 2,
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Corporate Headquarters',
      description: 'Glass and steel commercial complex'
    },
    {
      id: 3,
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Manufacturing Facility',
      description: 'Large-scale industrial steel structure'
    },
    {
      id: 4,
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Steel Frame House',
      description: 'Innovative residential construction'
    },
    {
      id: 5,
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Office Complex',
      description: 'Modern commercial building design'
    },
    {
      id: 6,
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Warehouse Complex',
      description: 'Efficient industrial storage solution'
    },
    {
      id: 7,
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Modern Steel Home',
      description: 'Architectural excellence in residential design'
    },
    {
      id: 8,
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Business Center',
      description: 'Premium commercial space'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
              Project <span className="gold-text">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our portfolio of exceptional steel and iron construction projects
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gold-gradient text-charcoal-900'
                      : 'bg-charcoal-700 text-white hover:bg-charcoal-600'
                  }`}
                >
                  {category}
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

          {/* Lightbox Modal - Fixed close icon */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="relative w-full max-w-4xl">
                {/* Close button - Enhanced visibility */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 md:top-4 md:right-4 text-white hover:text-gold-400 z-20 bg-black bg-opacity-50 rounded-full p-2 transition-all duration-300 hover:bg-opacity-70 hover:scale-110"
                  aria-label="Close modal"
                >
                  <X size={24} strokeWidth={2} />
                </button>
                
                {/* Navigation buttons */}
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
