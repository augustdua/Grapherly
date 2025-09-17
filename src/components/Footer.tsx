import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8">
      <div className="container-grapherly">
        <div className="flex items-center justify-between gap-4 border-t border-border pt-4 flex-wrap">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Grapherly
          </p>
          <nav className="flex gap-3 text-sm" aria-label="Footer navigation">
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Top
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Link 
              to="/legal" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Legal
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};