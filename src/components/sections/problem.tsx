
"use client";

export function Problem() {
  return (
    <section className="py-32 relative border-t border-gradient-to-r from-transparent via-copper/20 to-transparent">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="section-label reveal">The problem</div>
        
        <h2 className="reveal font-headline text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-cream max-w-[700px] mb-12">
          LinkedIn is drowning in noise.<br />
          And your silence is costing you <span className="text-copper">everything.</span>
        </h2>
        
        <p className="text-secondary reveal max-w-[600px] text-[0.95rem] mb-20 leading-relaxed font-light">
          Every day, 1.8 million posts flood LinkedIn feeds. Most are forgettable. Meanwhile, the founders who actually have something valuable to say — the ones who've built companies, survived downturns, and carry real insight — remain invisible. That gap between expertise and visibility? It's not just a missed opportunity. It's a business risk.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="problem-card reveal reveal-delay-1 border border-copper/10 p-10 relative overflow-hidden bg-gradient-to-br from-midnight-light to-midnight hover:border-copper/25 transition-all duration-400">
            <div className="font-headline italic text-6xl text-copper opacity-[0.15] absolute top-4 right-6">01</div>
            <h3 className="font-body font-normal text-[1.1rem] text-cream mb-4">The Credibility Vacuum</h3>
            <p className="text-[0.92rem] text-secondary leading-[1.75] font-light">
              Your competitors are publishing. Your prospects are scrolling. And every week you stay silent, someone less qualified is becoming the perceived expert in your space. Perception becomes reality — fast.
            </p>
          </div>
          
          <div className="problem-card reveal reveal-delay-2 border border-copper/10 p-10 relative overflow-hidden bg-gradient-to-br from-midnight-light to-midnight hover:border-copper/25 transition-all duration-400">
            <div className="font-headline italic text-6xl text-copper opacity-[0.15] absolute top-4 right-6">02</div>
            <h3 className="font-body font-normal text-[1.1rem] text-cream mb-4">The Algorithm&apos;s New Rules</h3>
            <p className="text-[0.92rem] text-secondary leading-[1.75] font-light">
              Organic reach has plummeted 50% in a single year. Engagement is down 25%. The old playbook of posting links and hoping for the best is dead. LinkedIn now rewards depth, relevance, and genuine expertise — or it buries you.
            </p>
          </div>
          
          <div className="problem-card reveal reveal-delay-3 border border-copper/10 p-10 relative overflow-hidden bg-gradient-to-br from-midnight-light to-midnight hover:border-copper/25 transition-all duration-400">
            <div className="font-headline italic text-6xl text-copper opacity-[0.15] absolute top-4 right-6">03</div>
            <h3 className="font-body font-normal text-[1.1rem] text-cream mb-4">The Trust Deficit</h3>
            <p className="text-[0.92rem] text-secondary leading-[1.75] font-light">
              81% of B2B campaigns fail to even capture attention. Your buyers have become immune to corporate marketing. What they haven&apos;t become immune to is a founder who speaks with conviction, backed by experience they can feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
