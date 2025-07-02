
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
    
    // Gallery Section
    'gallery.title': 'Our',
    'gallery.titleAccent': 'Gallery',
    'gallery.subtitle': 'Explore our portfolio of exceptional steel and iron construction projects',
    'gallery.viewFullGallery': 'View Full Gallery',
    'gallery.categories.all': 'All',
    'gallery.categories.residential': 'Residential',
    'gallery.categories.commercial': 'Commercial',
    'gallery.categories.industrial': 'Industrial',
    
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

    // What We Build Page
    'whatWeBuildPage.title': 'What We',
    'whatWeBuildPage.titleAccent': 'Build',
    'whatWeBuildPage.subtitle': 'Specializing in premium steel and iron construction across residential, commercial, and industrial sectors',
    'whatWeBuildPage.residentialConstruction': 'Residential Construction',
    'whatWeBuildPage.residentialDescription': 'Creating modern homes that blend strength with style',
    'whatWeBuildPage.commercialBuildings': 'Commercial Buildings',
    'whatWeBuildPage.commercialDescription': 'Professional spaces designed for business success',
    'whatWeBuildPage.whySteelConstruction': 'Why Choose Steel Construction?',
    'whatWeBuildPage.steelAdvantagesSubtitle': 'Discover the superior benefits that make steel the material of choice for modern construction',
    'whatWeBuildPage.exceptionalDurability': 'Exceptional Durability',
    'whatWeBuildPage.durabilityDescription': 'Steel structures can withstand extreme weather conditions, earthquakes, and heavy loads while maintaining structural integrity for decades.',
    'whatWeBuildPage.environmentalSustainability': 'Environmental Sustainability',
    'whatWeBuildPage.sustainabilityDescription': 'Steel is 100% recyclable and creates less waste during construction, making it the eco-friendly choice for modern building.',
    'whatWeBuildPage.fasterConstructionTimeline': 'Faster Construction Timeline',
    'whatWeBuildPage.fasterTimelineDescription': 'Pre-fabricated steel components allow for quicker assembly, reducing construction time by up to 50% compared to traditional methods.',
    'whatWeBuildPage.longTermCostEfficiency': 'Long-term Cost Efficiency',
    'whatWeBuildPage.costEfficiencyDescription': 'Lower maintenance requirements and faster construction translate to significant savings over the building\'s lifetime.',
    'whatWeBuildPage.designFlexibility': 'Design Flexibility',
    'whatWeBuildPage.designFlexibilityDescription': 'Steel\'s strength allows for larger open spaces, unique architectural features, and creative design possibilities.',
    'whatWeBuildPage.readyToBuild': 'Ready to Build Your',
    'whatWeBuildPage.vision': 'Vision',
    'whatWeBuildPage.contactDescription': 'Contact us today to discuss your project and discover how our steel construction expertise can bring your dreams to life.',
    'whatWeBuildPage.getFreeConsultation': 'Get Free Consultation',
    'whatWeBuildPage.viewPortfolio': 'View Our Portfolio',

    // Get Quote Page
    'getQuote.title': 'Get Your',
    'getQuote.titleAccent': 'Quote',
    'getQuote.subtitle': 'Tell us about your project and we\'ll provide you with a detailed quote',
    'getQuote.fullName': 'Full Name',
    'getQuote.emailAddress': 'Email Address',
    'getQuote.phoneNumber': 'Phone Number',
    'getQuote.projectType': 'Project Type',
    'getQuote.selectProjectType': 'Select Project Type',
    'getQuote.residential': 'Residential',
    'getQuote.commercial': 'Commercial',
    'getQuote.industrial': 'Industrial',
    'getQuote.projectLocation': 'Project Location',
    'getQuote.cityState': 'City, State',
    'getQuote.estimatedBudget': 'Estimated Budget (Optional)',
    'getQuote.selectBudgetRange': 'Select Budget Range',
    'getQuote.timeline': 'Timeline (Optional)',
    'getQuote.selectTimeline': 'Select Timeline',
    'getQuote.fileUpload': 'File Upload (Optional)',
    'getQuote.fileUploadDescription': 'Upload plans, sketches, or reference images',
    'getQuote.projectRequirements': 'Project Requirements & Message',
    'getQuote.requirementsPlaceholder': 'Please describe your project requirements, dimensions, special features, etc.',
    'getQuote.submitQuoteRequest': 'Submit Quote Request',
    'getQuote.needQuickQuote': 'Need a quick quote?',
    'getQuote.whatsappUs': '💬 WhatsApp Us for Quick Quote',
    'getQuote.thankYou': 'Thank You!',
    'getQuote.requestSubmitted': 'Your quote request has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.',
    'getQuote.submitAnother': 'Submit Another Quote',

    // Custom Interior Styles Page
    'customInterior.title': 'Our Custom',
    'customInterior.titleAccent': 'Interior Styles',
    'customInterior.subtitle': 'Discover our signature interior design styles that perfectly complement our steel and iron structures',
    'customInterior.modernMinimalist': 'Modern Minimalist',
    'customInterior.modernMinimalistDescription': 'Clean lines, neutral colors, and clutter-free spaces that emphasize functionality and simplicity.',
    'customInterior.industrialChic': 'Industrial Chic',
    'customInterior.industrialChicDescription': 'Raw materials, exposed structures, and urban aesthetics that celebrate industrial heritage.',
    'customInterior.contemporaryLuxury': 'Contemporary Luxury',
    'customInterior.contemporaryLuxuryDescription': 'Sophisticated elegance with premium materials and cutting-edge design elements.',
    'customInterior.scandinavianComfort': 'Scandinavian Comfort',
    'customInterior.scandinavianComfortDescription': 'Cozy, functional design with light woods, soft textures, and hygge-inspired elements.',
    'customInterior.rusticModern': 'Rustic Modern',
    'customInterior.rusticModernDescription': 'Warm, inviting spaces that blend natural elements with contemporary design principles.',
    'customInterior.urbanLoft': 'Urban Loft',
    'customInterior.urbanLoftDescription': 'Open, airy spaces with high ceilings and a perfect blend of comfort and sophistication.',
    'customInterior.smartInteriorDesign': 'Smart Interior Design',
    'customInterior.designTips': 'Tips',
    'customInterior.tipsSubtitle': 'Essential guidelines to create beautiful, functional spaces that stand the test of time',
    'customInterior.dos': 'DO\'S',
    'customInterior.dosSubtitle': 'Best practices for exceptional interior design',
    'customInterior.donts': 'DON\'TS',
    'customInterior.dontsSubtitle': 'Common mistakes to avoid in interior design',
    'customInterior.createPerfect': 'Create Your Perfect',
    'customInterior.interior': 'Interior',
    'customInterior.designConsultation': 'Our expert design team works with you to create custom interiors that reflect your style and complement our architectural excellence. From concept to completion, we bring your vision to life.',
    'customInterior.scheduleConsultation': 'Schedule Design Consultation',
    'customInterior.learnMoreStyle': 'Learn More About This Style',
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
    
    // Gallery Section
    'gallery.title': 'हाम्रो',
    'gallery.titleAccent': 'ग्यालेरी',
    'gallery.subtitle': 'स्टील र फलामका निर्माण परियोजनाहरूको असाधारण पोर्टफोलियो अन्वेषण गर्नुहोस्',
    'gallery.viewFullGallery': 'पूर्ण ग्यालेरी हेर्नुहोस्',
    'gallery.categories.all': 'सबै',
    'gallery.categories.residential': 'आवासीय',
    'gallery.categories.commercial': 'व्यावसायिक',
    'gallery.categories.industrial': 'औद्योगिक',
    
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

    // What We Build Page
    'whatWeBuildPage.title': 'हामी के',
    'whatWeBuildPage.titleAccent': 'निर्माण गर्छौं',
    'whatWeBuildPage.subtitle': 'आवासीय, व्यावसायिक र औद्योगिक क्षेत्रहरूमा प्रीमियम स्टील र फलामको निर्माणमा विशेषज्ञता',
    'whatWeBuildPage.residentialConstruction': 'आवासीय निर्माण',
    'whatWeBuildPage.residentialDescription': 'बल र शैलीलाई मिलाउने आधुनिक घरहरू सिर्जना गर्दै',
    'whatWeBuildPage.commercialBuildings': 'व्यावसायिक भवनहरू',
    'whatWeBuildPage.commercialDescription': 'व्यावसायिक सफलताको लागि डिजाइन गरिएका व्यावसायिक स्थानहरू',
    'whatWeBuildPage.whySteelConstruction': 'स्टील निर्माण किन छान्ने?',
    'whatWeBuildPage.steelAdvantagesSubtitle': 'आधुनिक निर्माणको लागि स्टीललाई सामग्रीको रूपमा छनोट बनाउने उत्कृष्ट फाइदाहरू पत्ता लगाउनुहोस्',
    'whatWeBuildPage.exceptionalDurability': 'असाधारण स्थायित्व',
    'whatWeBuildPage.durabilityDescription': 'स्टील संरचनाहरूले दशकौंसम्म संरचनात्मक अखण्डता कायम राख्दै चरम मौसमी अवस्था, भूकम्प र भारी भारहरूको सामना गर्न सक्छन्।',
    'whatWeBuildPage.environmentalSustainability': 'वातावरणीय दिगोपना',
    'whatWeBuildPage.sustainabilityDescription': 'स्टील १००% पुन: प्रयोग योग्य छ र निर्माणको समयमा कम फोहोर सिर्जना गर्छ, यसलाई आधुनिक भवनको लागि पर्यावरण-मैत्री विकल्प बनाउँछ।',
    'whatWeBuildPage.fasterConstructionTimeline': 'द्रुत निर्माण समयरेखा',
    'whatWeBuildPage.fasterTimelineDescription': 'पूर्व-निर्मित स्टील घटकहरूले छिटो एसेम्बलीको लागि अनुमति दिन्छ, परम्परागत विधिहरूको तुलनामा निर्माण समयलाई ५०% सम्म घटाउँछ।',
    'whatWeBuildPage.longTermCostEfficiency': 'दीर्घकालीन लागत दक्षता',
    'whatWeBuildPage.costEfficiencyDescription': 'कम मर्मत आवश्यकताहरू र छिटो निर्माणले भवनको जीवनकालमा महत्वपूर्ण बचतमा अनुवाد गर्छ।',
    'whatWeBuildPage.designFlexibility': 'डिजाइन लचकता',
    'whatWeBuildPage.designFlexibilityDescription': 'स्टीलको बलले ठूला खुला स्थानहरू, अनौठो वास्तुकला सुविधाहरू र रचनात्मक डिजाइन सम्भावनाहरूको लागि अनुमति दिन्छ।',
    'whatWeBuildPage.readyToBuild': 'तपाईंको निर्माण गर्न तयार हुनुहुन्छ',
    'whatWeBuildPage.vision': 'दृष्टिकोण',
    'whatWeBuildPage.contactDescription': 'तपाईंको परियोजनाको बारेमा छलफल गर्न र हाम्रो स्टील निर्माण विशेषज्ञताले तपाईंको सपनाहरूलाई कसरी जीवन्त बनाउन सक्छ भनेर पत्ता लगाउन आज नै सम्पर्क गर्नुहोस्।',
    'whatWeBuildPage.getFreeConsultation': 'निःशुल्क परामर्श लिनुहोस्',
    'whatWeBuildPage.viewPortfolio': 'हाम्रो पोर्टफोलियो हेर्नुहोस्',

    // Get Quote Page
    'getQuote.title': 'तपाईंको',
    'getQuote.titleAccent': 'मूल्य निर्धारण गर्नुहोस्',
    'getQuote.subtitle': 'तपाईंको परियोजनाको बारेमा बताउनुहोस् र हामी तपाईंलाई विस्तृत मूल्य निर्धारण प्रदान गर्नेछौं',
    'getQuote.fullName': 'पूरा नाम',
    'getQuote.emailAddress': 'इमेल ठेगाना',
    'getQuote.phoneNumber': 'फोन नम्बर',
    'getQuote.projectType': 'परियोजनाको प्रकार',
    'getQuote.selectProjectType': 'परियोजनाको प्रकार छान्नुहोस्',
    'getQuote.residential': 'आवासीय',
    'getQuote.commercial': 'व्यावसायिक',
    'getQuote.industrial': 'औद्योगिक',
    'getQuote.projectLocation': 'परियोजनाको स्थान',
    'getQuote.cityState': 'शहर, राज्य',
    'getQuote.estimatedBudget': 'अनुमानित बजेट (वैकल्पिक)',
    'getQuote.selectBudgetRange': 'बजेट दायरा छान्नुहोस्',
    'getQuote.timeline': 'समयसीमा (वैकल्पिक)',
    'getQuote.selectTimeline': 'समयसीमा छान्नुहोस्',
    'getQuote.fileUpload': 'फाइल अपलोड (वैकल्पिक)',
    'getQuote.fileUploadDescription': 'योजनाहरू, स्केचहरू, वा सन्दर्भ छविहरू अपलोड गर्नुहोस्',
    'getQuote.projectRequirements': 'परियोजनाका आवश्यकताहरू र सन्देश',
    'getQuote.requirementsPlaceholder': 'कृपया तपाईंको परियोजनाका आवश्यकताहरू, आयामहरू, विशेष सुविधाहरू, आदि वर्णन गर्नुहोस्।',
    'getQuote.submitQuoteRequest': 'मूल्य निर्धारण अनुरोध पेश गर्नुहोस्',
    'getQuote.needQuickQuote': 'छिटो मूल्य निर्धारण चाहिन्छ?',
    'getQuote.whatsappUs': '💬 छिटो मूल्य निर्धारणको लागि हामीलाई व्हाट्सएप गर्नुहोस्',
    'getQuote.thankYou': 'धन्यवाद!',
    'getQuote.requestSubmitted': 'तपाईंको मूल्य निर्धारण अनुरोध सफलतापूर्वक पेश गरिएको छ। हाम्रो टोलीले तपाईंका आवश्यकताहरूको समीक्षा गर्नेछ र २४ घण्टा भित्र तपाईंलाई जवाफ दिनेछ।',
    'getQuote.submitAnother': 'अर्को मूल्य निर्धारण पेश गर्नुहोस्',

    // Custom Interior Styles Page
    'customInterior.title': 'हाम्रो कस्टम',
    'customInterior.titleAccent': 'इन्टेरियर शैलीहरू',
    'customInterior.subtitle': 'हाम्रो स्टील र फलामका संरचनाहरूसँग पूर्ण रूपमा मेल खाने हाम्रो हस्ताक्षर इन्टेरियर डिजाइन शैलीहरू पत्ता लगाउनुहोस्',
    'customInterior.modernMinimalist': 'आधुनिक न्यूनतम',
    'customInterior.modernMinimalistDescription': 'सफा रेखाहरू, तटस्थ रङहरू, र अव्यवस्था-मुक्त स्थानहरू जसले कार्यक्षमता र सरलतालाई जोड दिन्छ।',
    'customInterior.industrialChic': 'औद्योगिक शिक',
    'customInterior.industrialChicDescription': 'कच्चा सामग्रीहरू, खुला संरचनाहरू, र शहरी सौन्दर्यशास्त्र जसले औद्योगिक सम्पदालाई मनाउँछ।',
    'customInterior.contemporaryLuxury': 'समकालीन लक्जरी',
    'customInterior.contemporaryLuxuryDescription': 'प्रीमियम सामग्री र अत्याधुनिक डिजाइन तत्वहरूसँग परिष्कृत लालित्य।',
    'customInterior.scandinavianComfort': 'स्क्यान्डिनेभियन आराम',
    'customInterior.scandinavianComfortDescription': 'हल्का काठ, नरम बनावट, र हाइगे-प्रेरित तत्वहरूसँग आरामदायक, कार्यात्मक डिजाइन।',
    'customInterior.rusticModern': 'देहाती आधुनिक',
    'customInterior.rusticModernDescription': 'न्यानो, आमन्त्रणकारी स्थानहरू जसले प्राकृतिक तत्वहरूलाई समकालीन डिजाइन सिद्धान्तहरूसँग मिसाउँछ।',
    'customInterior.urbanLoft': 'शहरी लफ्ट',
    'customInterior.urbanLoftDescription': 'अग्लो छतहरू र आराम र परिष्कारको उत्तम मिश्रणको साथ खुला, हावादार स्थानहरू।',
    'customInterior.smartInteriorDesign': 'स्मार्ट इन्टेरियर डिजाइन',
    'customInterior.designTips': 'सुझावहरू',
    'customInterior.tipsSubtitle': 'समयको परीक्षामा खडा हुने सुन्दर, कार्यात्मक स्थानहरू सिर्जना गर्ने आवश्यक दिशानिर्देशहरू',
    'customInterior.dos': 'गर्नुपर्ने कुराहरू',
    'customInterior.dosSubtitle': 'असाधारण इन्टेरियर डिजाइनको लागि उत्तम अभ्यासहरू',
    'customInterior.donts': 'नगर्नुपर्ने कुराहरू',
    'customInterior.dontsSubtitle': 'इन्टेरियर डिजाइनमा बच्नुपर्ने सामान्य गल्तीहरू',
    'customInterior.createPerfect': 'तपाईंको उत्तम सिर्जना गर्नुहोस्',
    'customInterior.interior': 'इन्टेरियर',
    'customInterior.designConsultation': 'हाम्रो विशेषज्ञ डिजाइन टोलीले तपाईंसँग तपाईंको शैलीलाई प्रतिबिम्बित गर्ने र हाम्रो वास्तुकला उत्कृष्टताको पूरक हुने कस्टम इन्टेरियरहरू सिर्जना गर्न काम गर्छ। अवधारणादेखि पूर्णतासम्म, हामी तपाईंको दृष्टिकोणलाई जीवन्त बनाउँछौं।',
    'customInterior.scheduleConsultation': 'डिजाइन परामर्शको समय तय गर्नुहोस्',
    'customInterior.learnMoreStyle': 'यो शैलीको बारेमा थप जान्नुहोस्',
  }
};

export {};
