export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 md:py-32" id="top">
      <div className="container-grapherly relative z-10">
        <div className="flex flex-col items-start gap-6 animate-fade-in">
          <h1 className="headline">
            Building AI that understands.
          </h1>
          <p className="tagline">
            We create intelligent systems that extract insights from complex data and human behavior.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a 
              href="https://komeant.ai" 
              className="btn-grapherly-primary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Our Products
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-grapherly-secondary"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};