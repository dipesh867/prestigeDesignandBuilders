import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ne';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
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

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.whatWeBuild': 'What We Build',
    'nav.gallery': 'Gallery',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get Quote',
    'nav.customInterior': 'Custom Interior Styles',
    
    // Hero Section
    'hero.title': 'PRESTIGE DESIGN',
    'hero.titleAccent': 'AND BUILDERS',
    'hero.tagline': 'DESIGNING AT ITS BEST',
    'hero.description': 'Specializing in premium steel and iron structures that combine durability, sustainability, and modern aesthetics for residential, commercial, and industrial projects.',
    'hero.startProject': 'Start Your Project',
    'hero.viewWork': 'View Our Work',
    
    // Footer
    'footer.description': 'Premium construction and design company specializing in steel and iron structures. We deliver exceptional quality and innovative solutions for residential, commercial, and industrial projects.',
    'footer.tagline': '"Designing at its Best"',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
    'footer.readyProject': 'Ready to Start Your',
    'footer.dreamProject': 'Dream Project',
    'footer.freeQuote': 'Get Free Quote',
    'footer.copyright': '© 2024 Prestige Design and Builders. All rights reserved.',
    
    // About Page
    'about.title': 'About',
    'about.us': 'Us',
    'about.subtitle': 'Learn about our story, mission, and the team behind Prestige Design and Builders',
    'about.ourStory': 'Our Story',
    'about.story1': 'Founded with a vision to revolutionize construction through steel and iron structures, Prestige Design and Builders has been at the forefront of innovative building solutions for over two decades.',
    'about.story2': 'We believe that exceptional design should be both beautiful and functional, sustainable and durable. Our commitment to excellence has made us a trusted partner for residential, commercial, and industrial projects.',
    'about.story3': 'Today, we continue to push boundaries, creating structures that stand as testaments to modern engineering and timeless design.',
    'about.ourMission': 'Our Mission',
    'about.missionText': 'To create exceptional steel and iron structures that combine innovative design, superior quality, and sustainable practices. We strive to exceed our clients\' expectations while contributing to a more sustainable built environment.',
    'about.ourValues': 'Our Values',
    'about.whyChoose': 'Why Choose Us',
    'about.expertCraftsmanship': 'Expert Craftsmanship',
    'about.sustainableSolutions': 'Sustainable Solutions',
    'about.fastConstruction': 'Fast Construction',
    'about.readyStart': 'Ready to Start Your Project?',
    'about.discussProject': 'Let\'s discuss how we can bring your vision to life with our expertise in steel and iron construction.',
    'about.contactToday': 'Contact Us Today',
    
    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with our team to discuss your next project',
    'contact.sendMessage': 'Send us a Message',
    'contact.messageSent': 'Message Sent!',
    'contact.getBackSoon': 'We\'ll get back to you soon.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us about your project or inquiry...',
    'contact.sendButton': 'Send Message',
    'contact.getInTouch': 'Get in Touch',
    'contact.followUs': 'Follow Us',
    'contact.ourLocation': 'Our Location',
    'contact.address': 'Address',
    
    // What We Build Section
    'whatWeBuild.title': 'What We',
    'whatWeBuild.titleAccent': 'Build',
    'whatWeBuild.subtitle': 'We specialize in creating premium steel and iron structures that redefine modern construction standards',
    'whatWeBuild.whyChoose': 'Why Choose',
    'whatWeBuild.whyChooseAccent': 'Steel & Iron',
    'whatWeBuild.exploreProjects': 'Explore Our Projects',
    
    // Building Types
    'whatWeBuild.residential.title': 'Residential',
    'whatWeBuild.residential.description': 'Modern homes and residential complexes with steel framework for superior strength and design flexibility.',
    'whatWeBuild.commercial.title': 'Commercial',
    'whatWeBuild.commercial.description': 'Office buildings, retail spaces, and commercial complexes built with precision and contemporary aesthetics.',
    'whatWeBuild.industrial.title': 'Industrial',
    'whatWeBuild.industrial.description': 'Warehouses, manufacturing facilities, and industrial structures designed for heavy-duty applications.',
    
    // Advantages
    'whatWeBuild.advantages.durability.title': 'Durability',
    'whatWeBuild.advantages.durability.description': 'Steel structures offer exceptional strength and longevity, withstanding extreme weather conditions.',
    'whatWeBuild.advantages.sustainability.title': 'Sustainability',
    'whatWeBuild.advantages.sustainability.description': 'Eco-friendly construction with recyclable materials and reduced environmental impact.',
    'whatWeBuild.advantages.fasterConstruction.title': 'Faster Construction',
    'whatWeBuild.advantages.fasterConstruction.description': 'Pre-fabricated steel components enable quicker assembly and reduced construction time.',
    'whatWeBuild.advantages.costEfficiency.title': 'Cost-Efficiency',
    'whatWeBuild.advantages.costEfficiency.description': 'Lower maintenance costs and faster construction translate to significant savings.',
    'whatWeBuild.advantages.modernAesthetic.title': 'Modern Aesthetic',
    'whatWeBuild.advantages.modernAesthetic.description': 'Clean lines and contemporary design possibilities that elevate architectural appeal.',
  },
  ne: {
    // Navigation
    'nav.home': 'गृहपृष्ठ',
    'nav.whatWeBuild': 'हामी के निर्माण गर्छौं',
    'nav.gallery': 'ग्यालेरी',
    'nav.about': 'हाम्रो बारेमा',
    'nav.contact': 'सम्पर्क',
    'nav.getQuote': 'मूल्य निर्धारण',
    'nav.customInterior': 'कस्टम इन्टेरियर शैलीहरू',
    
    // Hero Section
    'hero.title': 'प्रेस्टिज डिजाइन',
    'hero.titleAccent': 'एण्ड बिल्डर्स',
    'hero.tagline': 'उत्कृष्ट डिजाइनिङ',
    'hero.description': 'आवासीय, व्यावसायिक र औद्योगिक परियोजनाहरूको लागि स्थायित्व, दिगोता र आधुनिक सौन्दर्यशास्त्रलाई संयोजन गर्ने प्रीमियम स्टील र फलामका संरचनाहरूमा विशेषज्ञता।',
    'hero.startProject': 'आफ्नो परियोजना सुरु गर्नुहोस्',
    'hero.viewWork': 'हाम्रो काम हेर्नुहोस्',
    
    // Footer
    'footer.description': 'स्टील र फलामका संरचनाहरूमा विशेषज्ञता रहेको प्रीमियम निर्माण र डिजाइन कम्पनी। हामी आवासीय, व्यावसायिक र औद्योगिक परियोजनाहरूको लागि असाधारण गुणस्तर र नवाचार समाधानहरू प्रदान गर्छौं।',
    'footer.tagline': '"उत्कृष्ट डिजाइनिङ"',
    'footer.quickLinks': 'द्रुत लिङ्कहरू',
    'footer.contactInfo': 'सम्पर्क जानकारी',
    'footer.readyProject': 'तपाईंको सुरु गर्न तयार हुनुहुन्छ',
    'footer.dreamProject': 'सपनाको परियोजना',
    'footer.freeQuote': 'निःशुल्क मूल्य निर्धारण पाउनुहोस्',
    'footer.copyright': '© २०२४ प्रेस्टिज डिजाइन एण्ड बिल्डर्स। सबै अधिकार सुरक्षित।',
    
    // About Page
    'about.title': 'हाम्रो',
    'about.us': 'बारेमा',
    'about.subtitle': 'प्रेस्टिज डिजाइन एण्ड बिल्डर्सको पछाडिको कथा, मिशन र टोलीको बारेमा जान्नुहोस्',
    'about.ourStory': 'हाम्रो कथा',
    'about.story1': 'स्टील र फलामका संरचनाहरू मार्फत निर्माणमा क्रान्ति ल्याउने दृष्टिकोणका साथ स्थापना भएको, प्रेस्टिज डिजाइन एण्ड बिल्डर्स दुई दशकभन्दा बढी समयदेखि नवाचार निर्माण समाधानहरूको अग्रणी भएको छ।',
    'about.story2': 'हामी विश्वास गर्छौं कि असाधारण डिजाइन सुन्दर र कार्यात्मक दुवै हुनुपर्छ, दिगो र टिकाउ। उत्कृष्टताप्रतिको हाम्रो प्रतिबद्धताले हामीलाई आवासीय, व्यावसायिक र औद्योगिक परियोजनाहरूको लागि विश्वसनीय साझेदार बनाएको छ।',
    'about.story3': 'आज, हामी सीमाहरू पार गर्न जारी राख्छौं, आधुनिक इन्जिनियरिङ र कालातीत डिजाइनको प्रमाणका रूपमा खडा हुने संरचनाहरू सिर्जना गर्दै।',
    'about.ourMission': 'हाम्रो मिशन',
    'about.missionText': 'नवाचार डिजाइन, उत्कृष्ट गुणस्तर र दिगो अभ्यासहरू संयोजन गर्ने असाधारण स्टील र फलामका संरचनाहरू सिर्जना गर्नु। हामी थप दिगो निर्मित वातावरणमा योगदान गर्दै हाम्रा ग्राहकहरूको अपेक्षाहरू नाघ्न प्रयास गर्छौं।',
    'about.ourValues': 'हाम्रा मूल्यहरू',
    'about.whyChoose': 'हामीलाई किन छान्ने',
    'about.expertCraftsmanship': 'विशेषज्ञ शिल्पकारिता',
    'about.sustainableSolutions': 'दिगो समाधानहरू',
    'about.fastConstruction': 'द्रुत निर्माण',
    'about.readyStart': 'तपाईंको परियोजना सुरु गर्न तयार हुनुहुन्छ?',
    'about.discussProject': 'स्टील र फलाम निर्माणमा हाम्रो विशेषज्ञताका साथ तपाईंको दृष्टिकोणलाई कसरी जीवन्त बनाउन सक्छौं भनेर छलफल गरौं।',
    'about.contactToday': 'आज नै सम्पर्क गर्नुहोस्',
    
    // Contact Page
    'contact.title': 'सम्पर्क',
    'contact.subtitle': 'तपाईंको अर्को परियोजनाको बारेमा छलफल गर्न हाम्रो टोलीसँग सम्पर्क गर्नुहोस्',
    'contact.sendMessage': 'हामीलाई सन्देश पठाउनुहोस्',
    'contact.messageSent': 'सन्देश पठाइयो!',
    'contact.getBackSoon': 'हामी चाँडै तपाईंलाई जवाफ दिनेछौं।',
    'contact.name': 'नाम',
    'contact.email': 'इमेल',
    'contact.phone': 'फोन',
    'contact.message': 'सन्देश',
    'contact.messagePlaceholder': 'तपाईंको परियोजना वा सोधपुछको बारेमा बताउनुहोस्...',
    'contact.sendButton': 'सन्देश पठाउनुहोस्',
    'contact.getInTouch': 'सम्पर्कमा रहनुहोस्',
    'contact.followUs': 'हामीलाई फलो गर्नुहोस्',
    'contact.ourLocation': 'हाम्रो स्थान',
    'contact.address': 'ठेगाना',
    
    // What We Build Section
    'whatWeBuild.title': 'हामी के',
    'whatWeBuild.titleAccent': 'निर्माण गर्छौं',
    'whatWeBuild.subtitle': 'हामी आधुनिक निर्माण मापदण्डहरूलाई पुनर्परिभाषित गर्ने प्रीमियम स्टील र फलामका संरचनाहरू सिर्जना गर्नमा विशेषज्ञता राख्छौं',
    'whatWeBuild.whyChoose': 'किन छान्ने',
    'whatWeBuild.whyChooseAccent': 'स्टील र फलाम',
    'whatWeBuild.exploreProjects': 'हाम्रा परियोजनाहरू अन्वेषण गर्नुहोस्',
    
    // Building Types
    'whatWeBuild.residential.title': 'आवासीय',
    'whatWeBuild.residential.description': 'उत्कृष्ट बल र डिजाइन लचिलोपनको लागि स्टील फ्रेमवर्कका साथ आधुनिक घरहरू र आवासीय परिसरहरू।',
    'whatWeBuild.commercial.title': 'व्यावसायिक',
    'whatWeBuild.commercial.description': 'सटीकता र समकालीन सौन्दर्यशास्त्रका साथ निर्मित कार्यालय भवनहरू, खुद्रा स्थानहरू र व्यावसायिक परिसरहरू।',
    'whatWeBuild.industrial.title': 'औद्योगिक',
    'whatWeBuild.industrial.description': 'भारी शुल्क अनुप्रयोगहरूको लागि डिजाइन गरिएका गोदामहरू, उत्पादन सुविधाहरू र औद्योगिक संरचनाहरू।',
    
    // Advantages
    'whatWeBuild.advantages.durability.title': 'स्थायित्व',
    'whatWeBuild.advantages.durability.description': 'स्टील संरचनाहरूले असाधारण बल र दीर्घायु प्रदान गर्छन्, चरम मौसमी अवस्थाहरूको सामना गर्छन्।',
    'whatWeBuild.advantages.sustainability.title': 'दिगोपना',
    'whatWeBuild.advantages.sustainability.description': 'पुन: प्रयोग गर्न मिल्ने सामग्री र कम वातावरणीय प्रभावका साथ पर्यावरण-मैत्री निर्माण।',
    'whatWeBuild.advantages.fasterConstruction.title': 'द्रुत निर्माण',
    'whatWeBuild.advantages.fasterConstruction.description': 'पूर्व-निर्मित स्टील घटकहरूले छिटो एसेम्बली र कम निर्माण समय सक्षम बनाउँछन्।',
    'whatWeBuild.advantages.costEfficiency.title': 'लागत-दक्षता',
    'whatWeBuild.advantages.costEfficiency.description': 'कम मर्मत लागत र छिटो निर्माणले महत्वपूर्ण बचतमा अनुवाद गर्छ।',
    'whatWeBuild.advantages.modernAesthetic.title': 'आधुनिक सौन्दर्य',
    'whatWeBuild.advantages.modernAesthetic.description': 'स्वच्छ रेखाहरू र समकालीन डिजाइन सम्भावनाहरू जसले वास्तुकलाको अपीललाई उचाल्छ।',
  }
};

export {};
