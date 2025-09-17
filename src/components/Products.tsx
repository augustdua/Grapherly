export const Products = () => {
  return (
    <section className="section-grapherly" id="products">
      <div className="container-grapherly">
        <h2 className="section-title">Our products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <article className="card-grapherly animate-slide-up">
            <h3 className="text-xl font-semibold mb-2">komeant.ai</h3>
            <p className="text-muted-foreground mb-4">
              AI-powered comment analysis for YouTube creators
            </p>
            <a 
              href="https://komeant.ai" 
              className="btn-grapherly-primary"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit komeant dot ai"
            >
              Visit komeant.ai
            </a>
          </article>
          
          <article className="card-grapherly animate-slide-up opacity-85">
            <h3 className="text-xl font-semibold mb-2">Industrial RL (Coming Soon)</h3>
            <p className="text-muted-foreground mb-4">
              Reinforcement learning for factory optimization
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-grapherly-secondary"
            >
              Learn more
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};