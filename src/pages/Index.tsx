import { GraphBackground } from '@/components/GraphBackground';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhatWeDo } from '@/components/WhatWeDo';
import { Products } from '@/components/Products';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GraphBackground />
      <a 
        href="#main" 
        className="skip-link"
      >
        Skip to content
      </a>
      <Header />
      
      <main id="main" className="relative z-10">
        <Hero />
        <WhatWeDo />
        <Products />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
