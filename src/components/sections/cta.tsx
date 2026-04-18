
"use client";

interface CTAProps {
  onAuditClick: () => void;
}

export function CTA({ onAuditClick }: CTAProps) {
  return (
    <section className="py-32 relative" id="audit">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(192,122,78,0.06),transparent)] pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="max-w-[700px] mx-auto text-center border border-copper/15 p-12 md:p-20 relative bg-gradient-to-br from-midnight-surface/80 to-midnight/90 reveal">
          {/* Decorative corners */}
          <div className="absolute top-[-1px] left-[-1px] w-8 h-8 border-t border-l border-copper" />
          <div className="absolute bottom-[-1px] right-[-1px] w-8 h-8 border-b border-r border-copper" />
          
          <div className="section-label mb-8">Your next move</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-normal text-cream mb-6 leading-[1.35]">
            Get your free LinkedIn<br /><span className="text-copper">Thought Leadership Audit</span>
          </h2>
          <p className="text-secondary text-[0.95rem] mb-10 max-w-[500px] mx-auto leading-relaxed font-light">
            In 20 minutes, we&apos;ll dissect your current LinkedIn presence, identify what&apos;s working, what&apos;s invisible, and where the biggest opportunities lie to position you as the authority your market needs.
          </p>
          
          <button 
            onClick={onAuditClick}
            className="inline-block font-body text-[0.8rem] tracking-[0.2em] uppercase bg-copper text-midnight px-14 py-5 font-medium transition-all duration-400 hover:bg-copper-light hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(192,122,78,0.2)] cursor-pointer"
          >
            Book Your Free Audit
          </button>
          
          <p className="text-[0.72rem] text-muted mt-6 font-light">No pitch deck. No pressure. Just clarity on what&apos;s possible.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 pt-12 border-t border-copper/10">
            <div>
              <strong className="block font-normal text-cream text-[0.88rem] mb-1">20-Minute Deep Dive</strong>
              <span className="text-[0.75rem] text-muted font-light">Profile, content, and positioning review</span>
            </div>
            <div>
              <strong className="block font-normal text-cream text-[0.88rem] mb-1">Personalised Roadmap</strong>
              <span className="text-[0.75rem] text-muted font-light">Your unique path to thought leadership</span>
            </div>
            <div>
              <strong className="block font-normal text-cream text-[0.88rem] mb-1">Zero Obligation</strong>
              <span className="text-[0.75rem] text-muted font-light">Walk away with actionable insights either way</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
