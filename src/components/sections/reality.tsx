
"use client";

export function Reality() {
  return (
    <section className="py-32 relative border-t border-copper/10">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="max-w-[700px] mx-auto text-center reveal">
          <div className="section-label">The shifting landscape</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-normal text-cream mb-8">
            The algorithm changed. <span className="text-copper">The opportunity didn&apos;t.</span>
          </h2>
          <p className="text-secondary text-[1rem] mb-6 leading-relaxed font-light">
            Richard van der Blom&apos;s 2025 Algorithm Insights Report — analysing 1.8 million posts — revealed a platform in transformation. Reach is down. But relevance is up. LinkedIn is no longer rewarding volume. It&apos;s rewarding the few who have something worth saying.
          </p>
          <p className="text-secondary text-[1rem] leading-relaxed font-light">
            That&apos;s not a crisis for founders with genuine expertise. It&apos;s the greatest advantage you&apos;ve ever had.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 py-12 border-y border-copper/10 reveal">
          <div className="text-center">
            <span className="font-headline text-4xl text-copper block italic mb-1">−50%</span>
            <span className="text-[0.78rem] text-secondary leading-relaxed block">Organic views have halved year over year</span>
            <span className="text-[0.6rem] text-muted mt-2 uppercase tracking-wide block">Van der Blom 2025</span>
          </div>
          <div className="text-center">
            <span className="font-headline text-4xl text-copper block italic mb-1">−59%</span>
            <span className="text-[0.78rem] text-secondary leading-relaxed block">Follower growth has slowed dramatically</span>
            <span className="text-[0.6rem] text-muted mt-2 uppercase tracking-wide block">Algorithm Insights 2025</span>
          </div>
          <div className="text-center">
            <span className="font-headline text-4xl text-copper block italic mb-1">90 min</span>
            <span className="text-[0.78rem] text-secondary leading-relaxed block">The critical window after posting that determines reach</span>
            <span className="text-[0.6rem] text-muted mt-2 uppercase tracking-wide block">Van der Blom 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
