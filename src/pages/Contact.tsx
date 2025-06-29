
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond soon.",
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
              Contact <span className="gold-text">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss your next project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-charcoal-800 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-400 text-6xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-white">Name *</Label>
                      <Input
                        id="contact-name"
                        type="text"
                        required
                        className="bg-charcoal-700 border-charcoal-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email" className="text-white">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        className="bg-charcoal-700 border-charcoal-600 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-phone" className="text-white">Phone</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      className="bg-charcoal-700 border-charcoal-600 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message" className="text-white">Message *</Label>
                    <Textarea
                      id="contact-message"
                      required
                      rows={5}
                      className="bg-charcoal-700 border-charcoal-600 text-white"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold-gradient text-charcoal-900 hover:bg-gold-gradient-hover hover:transform hover:scale-105 transition-all duration-300 h-12 text-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-charcoal-800 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="text-gold-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+977-9806076363</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="text-gold-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">suryarajbanshi083@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="text-gold-400 mr-4 mt-1" size={24} />
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-300">Jhapa<br />Birtamod</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
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
                <h3 className="text-white font-semibold mb-4">Our Location</h3>
                <div className="w-full h-64 bg-charcoal-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Google Maps Integration</p>
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
