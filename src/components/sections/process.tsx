
"use client";

export function Process() {
  return (
    <section className="py-32">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="text-center max-w-[600px] mx-auto mb-20 reveal">
          <div className="section-label">How we work</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-normal text-cream mb-4">
            From invisible to <span className="text-copper">indispensable</span>
          </h2>
          <p className="text-secondary font-light">A methodical, no-nonsense process that turns your expertise into undeniable authority.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-copper/10 border border-copper/10 reveal">
          <div className="bg-midnight p-10 relative">
            <div className="font-headline text-[0.85rem] italic text-copper mb-6 flex items-center gap-3">
              i
              <span className="flex-1 h-[1px] bg-copper/15" />
            </div>
            <h3 className="font-body font-medium text-[1rem] text-cream mb-4">Deep Discovery</h3>
            <p className="text-[0.85rem] text-secondary leading-[1.7] font-light">
              We interview you like a journalist. We uncover the ideas, frameworks, and hard-won lessons that only you carry. This becomes the raw material for everything.
            </p>
          </div>
          
          <div className="bg-midnight p-10 relative">
            <div className="font-headline text-[0.85rem] italic text-copper mb-6 flex items-center gap-3">
              ii
              <span className="flex-1 h-[1px] bg-copper/15" />
            </div>
            <h3 className="font-body font-medium text-[1rem] text-cream mb-4">Strategic Positioning</h3>
            <p className="text-[0.85rem] text-secondary leading-[1.7] font-light">
              We define your unique territory — the intersection of what you know, what your market needs, and what nobody else is saying. This is your competitive moat.
            </p>
          </div>
          
          <div className="bg-midnight p-10 relative">
            <div className="font-headline text-[0.85rem] italic text-copper mb-6 flex items-center gap-3">
              iii
              <span className="flex-1 h-[1px] bg-copper/15" />
            </div>
            <h3 className="font-body font-medium text-[1rem] text-cream mb-4">Content Architecture</h3>
            <p className="text-[0.85rem] text-secondary leading-[1.7] font-light">
              We build a system of pillar narratives, signature frameworks, and recurring themes that compound over time — creating recognition and trust with every post.
            </p>
          </div>
          
          <div className="bg-midnight p-10 relative">
            <div className="font-headline text-[0.85rem] italic text-copper mb-6 flex items-center gap-3">
              iv
              <span className="flex-1 h-[1px] bg-copper/15" />
            </div>
            <h3 className="font-body font-medium text-[1rem] text-cream mb-4">Execution & Amplification</h3>
            <p className="text-[0.85rem] text-secondary leading-[1.7] font-light">
              We write, refine, publish, and strategically engage — managing the entire engine so you can focus on running your company while your reputation builds itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
