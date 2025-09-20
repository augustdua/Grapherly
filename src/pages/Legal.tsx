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
            <h1 className="section-title">Legal & MSME Information</h1>
            <p className="tagline mb-6">Grapherly — Udyam Registration: UDYAM-UP-28-0179492</p>

            <div className="space-y-4">
              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                <ul className="space-y-1">
                  <li><span className="font-medium">Enterprise Name:</span> Grapherly</li>
                  <li><span className="font-medium">Type of Enterprise:</span> Micro Enterprise (General category)</li>
                </ul>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Registration</h3>
                <ul className="space-y-1">
                  <li><span className="font-medium">Udyam Registration Number:</span> UDYAM-UP-28-0179492</li>
                  <li><span className="font-medium">Date of Incorporation/Registration:</span> 01/09/2025</li>
                  <li><span className="font-medium">Date of Commencement of Business:</span> 01/09/2025</li>
                  <li><span className="font-medium">Date of Udyam Registration:</span> 20/09/2025</li>
                </ul>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Official Address</h3>
                <p>
                  B-30, Sector ETA 1,<br />
                  Greater Noida, Gautam Buddha Nagar,<br />
                  Uttar Pradesh – 201310, India
                </p>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <ul className="space-y-1">
                  <li>
                    <span className="font-medium">Email:</span> <a href="mailto:august@grapherly.com" className="text-primary hover:underline">august@grapherly.com</a>
                  </li>
                  <li>
                    <span className="font-medium">Phone:</span> <a href="tel:+919971020699" className="text-primary hover:underline">+91 9971020699</a>
                  </li>
                </ul>
              </div>

              <div className="card-grapherly">
                <h3 className="text-lg font-semibold mb-2">Business Activity (NIC Code)</h3>
                <ul className="space-y-1">
                  <li>62 – Computer programming, consultancy, and related activities</li>
                  <li>6201 – Computer programming activities</li>
                  <li>62011 – Writing, modifying, testing of computer programs to meet client needs (excluding web-page designing)</li>
                </ul>
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