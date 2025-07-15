import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { QuoteFormData } from '@/services/api';

const GetQuote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;

    const formData = new FormData();
    formData.append("name", (target.elements.namedItem("name") as HTMLInputElement).value);
    formData.append("email", (target.elements.namedItem("email") as HTMLInputElement).value);
    formData.append("phone", (target.elements.namedItem("phone") as HTMLInputElement).value);
    formData.append("projectType", (target.elements.namedItem("projectType") as HTMLSelectElement).value);
    formData.append("location", (target.elements.namedItem("location") as HTMLInputElement).value);
    formData.append("budget", (target.elements.namedItem("budget") as HTMLSelectElement).value);
    formData.append("timeline", (target.elements.namedItem("timeline") as HTMLSelectElement).value);
    formData.append("message", (target.elements.namedItem("message") as HTMLTextAreaElement).value);

    // Append files
    const files = (target.elements.namedItem("file-upload") as HTMLInputElement)?.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
    }

    try {
      const response = await fetch("http://localhost:8000/api/quotes/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: 'Your Quote Request has been submitted successfully',
          description: 'We will get back to you soon with a detailed quote.'
        });
        target.reset();
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        toast({
          title: t('contact.sendFailed'),
          description: t('contact.tryAgain'),
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: t('contact.errorOccurred'),
        description: t('contact.tryAgain'),
        variant: 'destructive',
      });
    }
  };

  const openWhatsApp = () => {
    const message = "Hi! I'd like to get a quick quote for my project.";
    const phoneNumber = "1234567890"; // Replace with your real number
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="overflow-x-hidden bg-charcoal-900 min-h-screen">
        <Navigation />
        <div className="pt-24 pb-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/lovable-uploads/2a4b4929-30ac-4dbf-88f6-bacc350a60e4.png"
                alt="Thank You"
                className="h-32 w-auto mx-auto mb-8"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('getQuote.thankYou')}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('getQuote.requestSubmitted')}
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-gold-gradient text-charcoal-900 hover:bg-gold-gradient-hover"
            >
              {t('getQuote.submitAnother')}
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden bg-charcoal-900">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('getQuote.title')} <span className="gold-text">{t('getQuote.titleAccent')}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('getQuote.subtitle')}
            </p>
          </div>

          <div className="bg-charcoal-800 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white">{t('getQuote.fullName')} *</Label>
                  <Input
                    id="name" 
                    type="text"
                    required
                    className="bg-charcoal-700 border-charcoal-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">{t('getQuote.emailAddress')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-charcoal-700 border-charcoal-600 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-white">{t('getQuote.phoneNumber')} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="bg-charcoal-700 border-charcoal-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="projectType" className="text-white">{t('getQuote.projectType')} *</Label>
                  <select
                    id="projectType"
                    required
                    className="w-full h-10 px-3 py-2 bg-charcoal-700 border border-charcoal-600 text-white rounded-md"
                  >
                    <option value="">{t('getQuote.selectProjectType')}</option>
                    <option value="residential">{t('getQuote.residential')}</option>
                    <option value="commercial">{t('getQuote.commercial')}</option>
                    <option value="industrial">{t('getQuote.industrial')}</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="location" className="text-white">{t('getQuote.projectLocation')} *</Label>
                <Input
                  id="location"
                  type="text"
                  required
                  className="bg-charcoal-700 border-charcoal-600 text-white"
                  placeholder={t('getQuote.cityState')}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="budget" className="text-white">{t('getQuote.estimatedBudget')}</Label>
                  <select
                    id="budget"
                    className="w-full h-10 px-3 py-2 bg-charcoal-700 border border-charcoal-600 text-white rounded-md"
                  >
                    <option value="">{t('getQuote.selectBudgetRange')}</option>
                    <option value="under-50k">Under Rs.50,000</option>
                    <option value="50k-100k">Rs.50,000 - Rs.100,000</option>
                    <option value="100k-250k">Rs.100,000 - Rs.250,000</option>
                    <option value="250k-500k">Rs.250,000 - Rs.500,000</option>
                    <option value="500k-1m">Rs.500,000 - Rs.10,000,000</option>
                    <option value="over-1m">Over Rs.10,000,000</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="timeline" className="text-white">{t('getQuote.timeline')}</Label>
                  <select
                    id="timeline"
                    className="w-full h-10 px-3 py-2 bg-charcoal-700 border border-charcoal-600 text-white rounded-md"
                  >
                    <option value="">{t('getQuote.selectTimeline')}</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="over-1-year">Over 1 year</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="file-upload" className="text-white ">{t('getQuote.fileUpload')}</Label>
                <div className="mt-2 flex justify-center">
                  <div className="w-full">
                    <Input
                      id="file-upload"
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="w-full bg-charcoal-700 border-charcoal-600 text-white text-center file:bg-gold-gradient file:text-charcoal-900 file:border-0 file:rounded-md file:px-4 file:py-2 file:mr-4 file:cursor-pointer file:hover:bg-gold-gradient-hover file:mx-auto"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-1 text-center">{t('getQuote.fileUploadDescription')}</p>
              </div>

              <div>
                <Label htmlFor="message" className="text-white">{t('getQuote.projectRequirements')} *</Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  className="bg-charcoal-700 border-charcoal-600 text-white"
                  placeholder={t('getQuote.requirementsPlaceholder')}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold-gradient text-charcoal-900 hover:bg-gold-gradient-hover hover:transform hover:scale-105 transition-all duration-300 h-12 text-lg font-semibold"
              >
                {t('getQuote.submitQuoteRequest')}
              </Button>
            </form>
          </div>

          {/* WhatsApp Button */}
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">{t('getQuote.needQuickQuote')}</p>
            <Button
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:transform hover:scale-105"
            >
              {t('getQuote.whatsappUs')}
            </Button>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default GetQuote;
