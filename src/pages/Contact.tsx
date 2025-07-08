
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: t('contact.messageSent'),
      description: t('contact.getBackSoon'),
    });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="overflow-x-hidden bg-charcoal-900">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.title')} <span className="gold-text">{t('contact.us')}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-charcoal-800 rounded-2xl p-8 md:p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">{t('contact.sendMessage')}</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-400 text-6xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('contact.messageSent')}</h3>
                  <p className="text-gray-300">{t('contact.getBackSoon')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-white">{t('contact.name')} *</Label>
                      <Input
                        id="contact-name"
                        type="text"
                        required
                        className="bg-charcoal-700 border-charcoal-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email" className="text-white">{t('contact.email')} *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        className="bg-charcoal-700 border-charcoal-600 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-phone" className="text-white">{t('contact.phone')}</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      className="bg-charcoal-700 border-charcoal-600 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message" className="text-white">{t('contact.message')} *</Label>
                    <Textarea
                      id="contact-message"
                      required
                      rows={5}
                      className="bg-charcoal-700 border-charcoal-600 text-white"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold-gradient text-charcoal-900 hover:bg-gold-gradient-hover hover:transform hover:scale-105 transition-all duration-300 h-12 text-lg font-semibold"
                  >
                    {t('contact.sendButton')}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-charcoal-800 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">{t('contact.getInTouch')}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="text-gold-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">{t('contact.phone')}</p>
                      <p className="text-gray-300">+977-9806076363</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="text-gold-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">{t('contact.email')}</p>
                      <p className="text-gray-300">suryarajbanshi083@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="text-gold-400 mr-4 mt-1" size={24} />
                    <div>
                      <p className="text-white font-semibold">{t('contact.address')}</p>
                      <p className="text-gray-300">Jhapa<br />Birtamod</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-white font-semibold mb-4">{t('contact.followUs')}</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-charcoal-800 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-white font-semibold mb-4">{t('contact.ourLocation')}</h3>
                <div className="w-full h-64 bg-charcoal-700 rounded-lg flex items-center justify-center">
                  <iframe className="w-full h-full border-0"
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57068.64761270479!2d87.94697988980417!3d26.623161965897143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5baf5bbac5971%3A0xf4e38a45f65be2e7!2sBirtamod!5e0!3m2!1sen!2snp!4v1751873682299!5m2!1sen!2snp"
                    loading="lazy" ></iframe>
                  {/* <p className="text-gray-400">Google Maps Integration</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
