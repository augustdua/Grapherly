import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GraphBackground } from '@/components/GraphBackground';

export const Legal = () => {
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
        <section className="section-grapherly">
          <div className="container-narrow">
            <h1 className="section-title">Legal & Company Information</h1>
            <p className="tagline mb-6">Grapherly OÜ (17328242)</p>

            <div className="space-y-4">
              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Registration</h3>
                <ul className="space-y-1">
                  <li><span className="font-medium">Entered into the register:</span> 16.09.2025</li>
                  <li><span className="font-medium">Legal form:</span> Private limited company (OÜ)</li>
                  <li><span className="font-medium">Registry code:</span> 17328242</li>
                  <li><span className="font-medium">Share capital:</span> 1.00 €</li>
                </ul>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Registered address</h3>
                <p>Harju maakond, Tallinn, Lasnamäe linnaosa, Sepapaja tn 6, 15551</p>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Financial year</h3>
                <p>01.01 – 31.12</p>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Articles of association</h3>
                <p>Amended on 16.09.2025</p>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Means of communication</h3>
                <ul className="space-y-1">
                  <li>
                    <span className="font-medium">E-mail:</span> <a href="mailto:august@grapherly.com" className="text-primary hover:underline">august@grapherly.com</a>
                  </li>
                  <li>
                    <span className="font-medium">Mobile phone:</span> <a href="tel:+37253687119" className="text-primary hover:underline">+372 5368 7119</a>
                  </li>
                </ul>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Persons on registry card</h3>
                <ul className="space-y-2">
                  <li>
                    <div className="font-medium">Xolo OÜ — Contact person</div>
                    <div className="text-sm text-muted-foreground">Registry code 12844111 • authorised until 01.10.2027*</div>
                    <div className="text-sm"><a href="mailto:info@xolo.io" className="text-primary hover:underline">info@xolo.io</a></div>
                  </li>
                  <li>
                    <div className="font-medium">August Dua — Management board member</div>
                    <div className="text-sm text-muted-foreground">Personal ID code 50009170126</div>
                  </li>
                </ul>
                <p className="mt-2 text-sm">Every member of the Management Board may represent the private limited company in concluding all transactions.</p>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Shareholders & Participation</h3>
                <ul className="space-y-1">
                  <li>
                    <span className="font-medium">Participation:</span> 100.00% (1.00 EUR)
                  </li>
                  <li>
                    <span className="font-medium">Shareholder:</span> August Dua — Personal ID code 50009170126
                  </li>
                </ul>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Beneficial owners</h3>
                <ul className="space-y-1">
                  <li>
                    <span className="font-medium">August Dua</span> — Personal ID code 50009170126 — Residence: Germany — Manner of exercising control: Direct ownership
                  </li>
                </ul>
                <p className="mt-2 text-sm">The data of the beneficial owners are informative. Data of beneficial owners has been updated on 16.09.2025.</p>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Other persons</h3>
                <ul className="space-y-1">
                  <li>
                    <span className="font-medium">Founder:</span> August Dua — Contribution 1.00 € — Sole property
                  </li>
                </ul>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Tax information</h3>
                <p>The legal person has no tax debt as at 17.09.2025.</p>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Areas of activity</h3>
                <ul className="space-y-1">
                  <li>
                    <span className="font-medium">Computer programming activities</span> — Principal activity
                  </li>
                  <li>EMTAK code: 62101 (EMTAK 2025) • NACE code: 62.10</li>
                  <li>Source: Electronic submission (15.09.2025)</li>
                </ul>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Extract</h3>
                <p>Time of extract: 17.09.2025 15:13 • Source: <a href="https://ariregister.rik.ee/" target="_blank" rel="noreferrer" className="text-primary hover:underline">e-business register</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Legal;