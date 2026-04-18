
"use client";

interface HeroProps {
  onAuditClick: () => void;
}

export function Hero({ onAuditClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center text-center relative px-8 pt-32 pb-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,_rgba(192,122,78,0.06)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="relative max-w-[800px] animate-fadeInUp opacity-0 [animation-delay:0.3s]">
        <div className="text-[0.7rem] tracking-[0.35em] uppercase text-copper mb-10 flex items-center justify-center gap-4">
          <span className="w-10 h-px bg-copper opacity-40" />
          Thought Leadership for Founders
          <span className="w-10 h-px bg-copper opacity-40" />
        </div>
        
        <h1 className="font-headline font-normal text-4xl sm:text-5xl md:text-7xl leading-[1.15] mb-8 text-cream">
          Your expertise is <em className="italic text-copper">extraordinary.</em><br />
          Your LinkedIn presence<br />
          should be too.
        </h1>
        
        <p className="text-[1.1rem] text-secondary max-w-[560px] mx-auto mb-12 leading-[1.8] font-light">
          We position founders and leaders as the definitive voice of their industry — with substance, not spectacle. No gimmicks. No growth hacks. Just the kind of authority that opens doors, closes deals, and outlasts algorithms.
        </p>
        
        <button 
          onClick={onAuditClick}
          className="inline-block font-body text-[0.8rem] tracking-[0.2em] uppercase bg-copper text-midnight px-14 py-5 font-medium transition-all duration-400 hover:bg-copper-light hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(192,122,78,0.2)] cursor-pointer"
        >
          Get Your Free Audit
        </button>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-copper to-transparent animate-lineGrow origin-top opacity-0 [animation-delay:1.5s]" />
    </section>
  );
}
