
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const InteriorDosDonts = () => {
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
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interior Design <span className="gold-text">Do's & Don'ts</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential guidelines to create beautiful, functional spaces that stand the test of time
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Do's Section */}
            <div className="bg-charcoal-800 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-3xl font-bold gold-text mb-4">DO'S</h2>
                <p className="text-gray-300">Best practices for exceptional interior design</p>
              </div>

              <div className="space-y-6">
                {dos.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-charcoal-700 rounded-xl hover:bg-charcoal-600 transition-colors duration-300">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Don'ts Section */}
            <div className="bg-charcoal-800 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">❌</div>
                <h2 className="text-3xl font-bold text-red-400 mb-4">DON'TS</h2>
                <p className="text-gray-300">Common mistakes to avoid in interior design</p>
              </div>

              <div className="space-y-6">
                {donts.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-charcoal-700 rounded-xl hover:bg-charcoal-600 transition-colors duration-300">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Professional Interior Design Help?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our experienced team can help you create stunning interiors that combine beauty, functionality, and your personal style.
            </p>
            <button className="bg-gold-gradient text-charcoal-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InteriorDosDonts;
