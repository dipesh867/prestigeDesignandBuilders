
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatWeBuild from '@/components/WhatWeBuild';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <WhatWeBuild />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
