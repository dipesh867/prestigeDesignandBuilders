import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'ne';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.whatWeBuild': 'What We Build',
    'nav.customInteriorStyles': 'Interior Styles',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get Quote',

    // Hero Section
    'hero.title': 'Crafting Excellence in Steel & Iron',
    'hero.titleAccent': 'Builders',
    'hero.tagline': 'Where Strength Meets Beauty',
    'hero.description': 'Transform your vision into reality with our premium steel and iron construction services. From residential homes to commercial complexes, we build structures that stand the test of time.',
    'hero.startProject': 'Start Your Project',
    'hero.viewWork': 'View Our Work',

    // Gallery Section
    'gallery.title': 'Our',
    'gallery.titleAccent': 'Gallery',
    'gallery.subtitle': 'Explore our portfolio of completed projects and see the quality craftsmanship that sets us apart',
    'gallery.viewAll': 'View All Projects',

    // Footer
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.contact': 'Contact Info',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.about': 'About Us',
    'footer.whatWeBuild': 'What We Build',
    'footer.gallery': 'Gallery',
    'footer.getQuote': 'Get Quote',
    'footer.residential': 'Residential',
    'footer.commercial': 'Commercial',
    'footer.industrial': 'Industrial',
    'footer.customInteriors': 'Custom Interiors',

    // About Page
    'about.title': 'About',
    'about.titleAccent': 'Us',
    'about.subtitle': 'Building dreams with steel and iron since 2010',
    'about.description': 'We are a leading construction company specializing in steel and iron structures. With over a decade of experience, we have built a reputation for excellence, quality, and reliability in the construction industry.',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To provide superior construction services using steel and iron materials, ensuring durability, safety, and aesthetic appeal in every project we undertake.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be the premier choice for steel and iron construction, recognized for our innovation, quality craftsmanship, and commitment to customer satisfaction.',
    'about.values.title': 'Our Values',
    'about.values.desc': 'Quality, integrity, innovation, and customer satisfaction are the cornerstones of our business philosophy.',

    // Contact Page
    'contact.title': 'Contact',
    'contact.titleAccent': 'Us',
    'contact.subtitle': 'Ready to start your project? Get in touch with our expert team',
    'contact.info': 'Contact Information',
    'contact.form': 'Send us a message',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.phone': 'Your Phone',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',

    // Custom Interior Styles
    'interiorStyles.title': 'Our Custom',
    'interiorStyles.titleAccent': 'Interior Styles',
    'interiorStyles.subtitle': 'Discover our signature interior design styles that perfectly complement our steel and iron structures',
    'interiorStyles.modernMinimalist': 'Modern Minimalist',
    'interiorStyles.modernMinimalist.desc': 'Clean lines, neutral colors, and clutter-free spaces that emphasize functionality and simplicity.',
    'interiorStyles.industrialChic': 'Industrial Chic',
    'interiorStyles.industrialChic.desc': 'Raw materials, exposed structures, and urban aesthetics that celebrate industrial heritage.',
    'interiorStyles.contemporaryLuxury': 'Contemporary Luxury',
    'interiorStyles.contemporaryLuxury.desc': 'Sophisticated elegance with premium materials and cutting-edge design elements.',
    'interiorStyles.scandinavianComfort': 'Scandinavian Comfort',
    'interiorStyles.scandinavianComfort.desc': 'Cozy, functional design with light woods, soft textures, and hygge-inspired elements.',
    'interiorStyles.rusticModern': 'Rustic Modern',
    'interiorStyles.rusticModern.desc': 'Warm, inviting spaces that blend natural elements with contemporary design principles.',
    'interiorStyles.urbanLoft': 'Urban Loft',
    'interiorStyles.urbanLoft.desc': 'Open, airy spaces with high ceilings and a perfect blend of comfort and sophistication.',
    'interiorStyles.learnMore': 'Learn More About This Style',
    'interiorStyles.tips.title': 'Smart Interior Design',
    'interiorStyles.tips.titleAccent': 'Tips',
    'interiorStyles.tips.subtitle': 'Essential guidelines to create beautiful, functional spaces that stand the test of time',
    'interiorStyles.dos': "DO'S",
    'interiorStyles.dos.subtitle': 'Best practices for exceptional interior design',
    'interiorStyles.donts': "DON'TS",
    'interiorStyles.donts.subtitle': 'Common mistakes to avoid in interior design',
    'interiorStyles.cta.title': 'Create Your Perfect',
    'interiorStyles.cta.titleAccent': 'Interior',
    'interiorStyles.cta.desc': 'Our expert design team works with you to create custom interiors that reflect your style and complement our architectural excellence. From concept to completion, we bring your vision to life.',
    'interiorStyles.cta.consultation': 'Schedule Design Consultation',
    'interiorStyles.cta.portfolio': 'View Our Portfolio'
  },
  ne: {
    // Navigation
    'nav.home': 'होम',
    'nav.whatWeBuild': 'हामी के बनाउँछौं',
    'nav.customInteriorStyles': 'भित्री डिजाइन',
    'nav.gallery': 'ग्यालेरी',
    'nav.about': 'हाम्रो बारेमा',
    'nav.contact': 'सम्पर्क',
    'nav.getQuote': 'मूल्य लिनुहोस्',

    // Hero Section
    'hero.title': 'स्टिल र फलामको उत्कृष्टता',
    'hero.titleAccent': 'निर्माणकर्ता',
    'hero.tagline': 'जहाँ शक्ति र सुन्दरता मिल्छ',
    'hero.description': 'हाम्रो प्रिमियम स्टिल र फलाम निर्माण सेवाहरूसँग आफ्नो दृष्टिकोणलाई वास्तविकतामा परिणत गर्नुहोस्। आवासीय घरहरूदेखि व्यावसायिक परिसरहरूसम्म, हामी समयको परीक्षा खडा गर्ने संरचनाहरू निर्माण गर्छौं।',
    'hero.startProject': 'आफ्नो परियोजना सुरु गर्नुहोस्',
    'hero.viewWork': 'हाम्रो काम हेर्नुहोस्',

    // Gallery Section
    'gallery.title': 'हाम्रो',
    'gallery.titleAccent': 'ग्यालेरी',
    'gallery.subtitle': 'हाम्रो पूरा भएका परियोजनाहरूको पोर्टफोलियो अन्वेषण गर्नुहोस् र हामीलाई अलग बनाउने गुणस्तरीय शिल्पकारिता हेर्नुहोस्',
    'gallery.viewAll': 'सबै परियोजनाहरू हेर्नुहोस्',

    // Footer
    'footer.company': 'कम्पनी',
    'footer.services': 'सेवाहरू',
    'footer.contact': 'सम्पर्क जानकारी',
    'footer.followUs': 'हामीलाई फलो गर्नुहोस्',
    'footer.rights': 'सबै अधिकार सुरक्षित।',
    'footer.about': 'हाम्रो बारेमा',
    'footer.whatWeBuild': 'हामी के बनाउँछौं',
    'footer.gallery': 'ग्यालेरी',
    'footer.getQuote': 'मूल्य लिनुहोस्',
    'footer.residential': 'आवासीय',
    'footer.commercial': 'व्यावसायिक',
    'footer.industrial': 'औद्योगिक',
    'footer.customInteriors': 'कस्टम भित्री सजावट',

    // About Page
    'about.title': 'हाम्रो',
    'about.titleAccent': 'बारेमा',
    'about.subtitle': '२०१० देखि स्टिल र फलामसँग सपनाहरू निर्माण गर्दै',
    'about.description': 'हामी स्टिल र फलामका संरचनाहरूमा विशेषज्ञता भएको एक अग्रणी निर्माण कम्पनी हौं। एक दशकभन्दा बढी अनुभवका साथ, हामीले निर्माण उद्योगमा उत्कृष्टता, गुणस्तर र विश्वसनीयताको लागि प्रतिष्ठा निर्माण गरेका छौं।',
    'about.mission.title': 'हाम्रो मिशन',
    'about.mission.desc': 'स्टिल र फलामका सामग्रीहरू प्रयोग गरेर उत्कृष्ट निर्माण सेवाहरू प्रदान गर्नु, हामीले गर्ने हरेक परियोजनामा स्थायित्व, सुरक्षा र सौन्दर्य आकर्षण सुनिश्चित गर्नु।',
    'about.vision.title': 'हाम्रो दृष्टिकोण',
    'about.vision.desc': 'स्टिल र फलाम निर्माणको लागि प्रमुख छनौट बन्नु, हाम्रो नवाचार, गुणस्तरीय शिल्पकारिता र ग्राहक सन्तुष्टिको प्रतिबद्धताको लागि मान्यता प्राप्त।',
    'about.values.title': 'हाम्रा मूल्यहरू',
    'about.values.desc': 'गुणस्तर, इमानदारी, नवाचार र ग्राहक सन्तुष्टि हाम्रो व्यापारिक दर्शनका आधारशिलाहरू हुन्।',

    // Contact Page
    'contact.title': 'सम्पर्क',
    'contact.titleAccent': 'गर्नुहोस्',
    'contact.subtitle': 'आफ्नो परियोजना सुरु गर्न तयार हुनुहुन्छ? हाम्रो विशेषज्ञ टोलीसँग सम्पर्क गर्नुहोस्',
    'contact.info': 'सम्पर्क जानकारी',
    'contact.form': 'हामीलाई सन्देश पठाउनुहोस्',
    'contact.name': 'तपाईंको नाम',
    'contact.email': 'तपाईंको इमेल',
    'contact.phone': 'तपाईंको फोन',
    'contact.message': 'तपाईंको सन्देश',
    'contact.send': 'सन्देश पठाउनुहोस्',

    // Custom Interior Styles
    'interiorStyles.title': 'हाम्रो कस्टम',
    'interiorStyles.titleAccent': 'भित्री डिजाइन',
    'interiorStyles.subtitle': 'हाम्रो स्टिल र फलामका संरचनाहरूसँग पूर्ण रूपमा मेल खाने हाम्रो हस्ताक्षर भित्री डिजाइन शैलीहरू पत्ता लगाउनुहोस्',
    'interiorStyles.modernMinimalist': 'आधुनिक न्यूनतम',
    'interiorStyles.modernMinimalist.desc': 'सफा रेखाहरू, तटस्थ रंगहरू, र व्यर्थ रहित स्थानहरू जसले कार्यक्षमता र सरलतालाई जोड दिन्छ।',
    'interiorStyles.industrialChic': 'औद्योगिक शैली',
    'interiorStyles.industrialChic.desc': 'कच्चा सामग्री, खुला संरचनाहरू, र शहरी सौन्दर्यशास्त्र जसले औद्योगिक सम्पदालाई मनाउँछ।',
    'interiorStyles.contemporaryLuxury': 'समकालीन विलासिता',
    'interiorStyles.contemporaryLuxury.desc': 'प्रिमियम सामग्री र अत्याधुनिक डिजाइन तत्वहरूसँग परिष्कृत सुन्दरता।',
    'interiorStyles.scandinavianComfort': 'स्क्यान्डिनेभियाई आराम',
    'interiorStyles.scandinavianComfort.desc': 'हल्का काठको फर्निचर, नरम बनावट, र ह्युग-प्रेरित तत्वहरूसँग आरामदायक, कार्यात्मक डिजाइन।',
    'interiorStyles.rusticModern': 'देहाती आधुनिक',
    'interiorStyles.rusticModern.desc': 'प्राकृतिक तत्वहरूलाई समकालीन डिजाइन सिद्धान्तहरूसँग मिलाउने न्यानो, आमन्त्रित स्थानहरू।',
    'interiorStyles.urbanLoft': 'शहरी लफ्ट',
    'interiorStyles.urbanLoft.desc': 'उच्च छतहरू र आराम र परिष्कारको उत्तम मिश्रणसँग खुला, हावादार स्थानहरू।',
    'interiorStyles.learnMore': 'यस शैलीको बारेमा थप जान्नुहोस्',
    'interiorStyles.tips.title': 'स्मार्ट भित्री डिजाइन',
    'interiorStyles.tips.titleAccent': 'सुझावहरू',
    'interiorStyles.tips.subtitle': 'समयको परीक्षा खडा गर्ने सुन्दर, कार्यात्मक स्थानहरू सिर्जना गर्न आवश्यक दिशानिर्देशहरू',
    'interiorStyles.dos': 'गर्नुपर्ने कुराहरू',
    'interiorStyles.dos.subtitle': 'असाधारण भित्री डिजाइनको लागि उत्तम अभ्यासहरू',
    'interiorStyles.donts': 'नगर्नुपर्ने कुराहरू',
    'interiorStyles.donts.subtitle': 'भित्री डिजाइनमा बच्नुपर्ने सामान्य गल्तीहरू',
    'interiorStyles.cta.title': 'आफ्नो उत्तम',
    'interiorStyles.cta.titleAccent': 'भित्री सजावट',
    'interiorStyles.cta.desc': 'हाम्रो विशेषज्ञ डिजाइन टोलीले तपाईंसँग काम गरेर तपाईंको शैलीलाई प्रतिबिम्बित गर्ने र हाम्रो स्थापत्य उत्कृष्टतालाई पूरक बनाउने कस्टम भित्री सजावट सिर्जना गर्छ। अवधारणादेखि पूर्णतासम्म, हामी तपाईंको दृष्टिकोणलाई जीवन्त बनाउँछौं।',
    'interiorStyles.cta.consultation': 'डिजाइन परामर्श निर्धारण गर्नुहोस्',
    'interiorStyles.cta.portfolio': 'हाम्रो पोर्टफोलियो हेर्नुहोस्'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ne'>(() => {
    const saved = localStorage.getItem('language');
    return (saved as 'en' | 'ne') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ne' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
