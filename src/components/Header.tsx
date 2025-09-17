import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const GrapherlyLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
    <circle cx="6" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 7.5 L16 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16.5 L16 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 8 L6 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 8 L18 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 7.5 L10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14 L16.5 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 glass-header z-50">
      <div className="container-grapherly">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center gap-3 text-foreground hover:opacity-80 transition-opacity"
            aria-label="Grapherly home"
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-lg text-foreground">
              <GrapherlyLogo />
            </div>
            <span className="font-semibold text-lg">Grapherly</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-4" aria-label="Primary navigation">
              <button
                onClick={() => scrollToSection('products')}
                className="px-2 py-1 text-foreground hover:text-primary transition-all duration-200 hover:scale-105 rounded-lg"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-2 py-1 text-foreground hover:text-primary transition-all duration-200 hover:scale-105 rounded-lg"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-grapherly-ghost hover:scale-105"
              >
                Contact
              </button>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};