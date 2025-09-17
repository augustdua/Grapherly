import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thanks for subscribing!",
        description: "We'll keep you posted on our latest updates.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section-grapherly" id="contact">
      <div className="container-narrow">
        <h2 className="section-title">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
          <div>
            <p className="text-lg mb-3">
              Get in touch: <a href="mailto:august@grapherly.com" className="text-primary hover:underline">august@grapherly.com</a>
            </p>
            <p className="text-lg text-muted-foreground">
              Based in Estonia 🇪🇪 · Building globally 🌍
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <label htmlFor="email" className="block font-semibold mb-2">
              Get product updates
            </label>
            <div className="flex gap-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 border border-input rounded-xl px-3 py-3 text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
                inputMode="email"
                autoComplete="email"
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                className="btn-grapherly-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Notify me'}
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};