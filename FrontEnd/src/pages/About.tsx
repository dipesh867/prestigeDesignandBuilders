
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="overflow-x-hidden bg-charcoal-900">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.title')} <span className="gold-text">{t('about.us')}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Our Story */}
          <div className="bg-charcoal-800 rounded-2xl p-8 mb-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">{t('about.ourStory')}</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {t('about.story1')}
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {t('about.story2')}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {t('about.story3')}
                </p>
              </div>
              <div>
                <img
                  src="../../public/uploads/gallery/1.jpg"
                  alt="Our Story"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-charcoal-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold gold-text mb-4">{t('about.ourMission')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
            <div className="bg-charcoal-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold gold-text mb-4">{t('about.ourValues')}</h3>
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('about.whyChoose')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏗️</div>
                <h4 className="text-xl font-semibold text-white mb-3">{t('about.expertCraftsmanship')}</h4>
                <p className="text-gray-300">Decades of experience in steel and iron construction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="text-xl font-semibold text-white mb-3">{t('about.sustainableSolutions')}</h4>
                <p className="text-gray-300">Eco-friendly materials and energy-efficient designs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold text-white mb-3">{t('about.fastConstruction')}</h4>
                <p className="text-gray-300">Efficient building processes with shorter timelines</p>
              </div>
            </div>
          </div>
            
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
