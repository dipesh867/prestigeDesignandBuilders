
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="overflow-x-hidden bg-charcoal-900">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="gold-text">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about our story, mission, and the team behind Prestige Design and Builders
            </p>
          </div>

          {/* Our Story */}
          <div className="bg-charcoal-800 rounded-2xl p-8 mb-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Founded with a vision to revolutionize construction through steel and iron structures, 
                  Prestige Design and Builders has been at the forefront of innovative building solutions 
                  for over two decades.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  We believe that exceptional design should be both beautiful and functional, 
                  sustainable and durable. Our commitment to excellence has made us a trusted 
                  partner for residential, commercial, and industrial projects.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, we continue to push boundaries, creating structures that stand as 
                  testaments to modern engineering and timeless design.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Story"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-charcoal-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold gold-text mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To create exceptional steel and iron structures that combine innovative design, 
                superior quality, and sustainable practices. We strive to exceed our clients' 
                expectations while contributing to a more sustainable built environment.
              </p>
            </div>
            <div className="bg-charcoal-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold gold-text mb-4">Our Values</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Excellence in every project</li>
                <li>• Sustainable building practices</li>
                <li>• Innovation and creativity</li>
                <li>• Client satisfaction</li>
                <li>• Integrity and transparency</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-charcoal-800 rounded-2xl p-8 mb-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏗️</div>
                <h4 className="text-xl font-semibold text-white mb-3">Expert Craftsmanship</h4>
                <p className="text-gray-300">Decades of experience in steel and iron construction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="text-xl font-semibold text-white mb-3">Sustainable Solutions</h4>
                <p className="text-gray-300">Eco-friendly materials and energy-efficient designs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold text-white mb-3">Fast Construction</h4>
                <p className="text-gray-300">Efficient building processes with shorter timelines</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise in steel and iron construction.
            </p>
            <button className="bg-gold-gradient text-charcoal-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
