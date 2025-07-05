
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Aashutosh Bhattarai',
      position: 'Property Developer',
      company: 'Bhattarai Properties',
      content: 'Prestige Design and Builders exceeded our expectations with their steel construction expertise. The quality and attention to detail is unmatched.',
      rating: 5,
      image: '../../public/uploads/aashu1.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO',
      company: 'TechCorp Industries',
      content: 'Their innovative approach to commercial steel construction delivered our project on time and within budget. Truly professional service.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Architect',
      company: 'Modern Design Studio',
      content: 'Working with Prestige Design and Builders was a seamless experience. Their expertise in steel structures brought our vision to life perfectly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-charcoal-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="gold-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-charcoal-700 rounded-2xl p-8 md:p-12 border border-charcoal-600 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star key={i} className="text-gold-400 fill-current" size={20} />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed font-light">
              "{testimonials[currentSlide].content}"
            </blockquote>

            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-gold-400">
                  {testimonials[currentSlide].position}
                </p>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentSlide].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gold-gradient text-charcoal-900 p-3 rounded-full hover:bg-gold-gradient-hover transition-all duration-300 hover:shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gold-gradient text-charcoal-900 p-3 rounded-full hover:bg-gold-gradient-hover transition-all duration-300 hover:shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gold-400'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
