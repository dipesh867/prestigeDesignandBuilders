
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleGetStarted = () => {
    // Future: This can be enhanced with analytics tracking or user state management
    console.log('Get Started button clicked');
  };

  const handleViewWork = () => {
    // Future: This can be enhanced with analytics tracking
    console.log('View Work button clicked');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-element"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <div className="mb-8">
          <img
            src="/lovable-uploads/2a4b4929-30ac-4dbf-88f6-bacc350a60e4.png"
            alt="Prestige Design and Builders"
            className="h-40 w-auto mx-auto mb-8 animate-fade-in"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          PRESTIGE DESIGN
          <br />
          <span className="gold-text">AND BUILDERS</span>
        </h1>
        
        <p className="text-2xl md:text-3xl gold-text font-playfair mb-8 animate-slide-in-right">
          DESIGNING AT ITS BEST
        </p>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Specializing in premium steel and iron structures that combine durability, 
          sustainability, and modern aesthetics for residential, commercial, and industrial projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            to="/get-quote"
            onClick={handleGetStarted}
            className="bg-gold-gradient text-charcoal-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105"
          >
            Start Your Project
          </Link>
          <Link
            to="/gallery"
            onClick={handleViewWork}
            className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-400 hover:text-charcoal-900 hover:shadow-xl"
          >
            View Our Work
          </Link>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gold-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
