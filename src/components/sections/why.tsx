
"use client";

export function Why() {
  return (
    <section className="py-32">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="reveal">
            <div className="section-label">Why us</div>
            <h2 className="font-headline text-3xl sm:text-4xl font-normal text-cream mb-8 leading-tight">
              We don&apos;t do personal branding. We build <span className="text-copper">thought leaders.</span>
            </h2>
            <p className="text-secondary text-[0.95rem] mb-8 leading-relaxed font-light">
              There&apos;s a fundamental difference between a polished personal brand and genuine thought leadership. One is a performance. The other is a position. We build the latter — grounded in your real expertise, your real experience, and the problems your audience actually loses sleep over.
            </p>
            <blockquote className="font-headline italic text-[1.15rem] text-copper-light border-l-2 border-copper/30 pl-6 my-8 leading-relaxed">
              When thought leadership is strong, brand recognition matters less. David can beat Goliath with well-crafted insights.
              <cite className="block font-body not-italic text-[0.75rem] text-muted mt-3 tracking-[0.1em] uppercase">— Edelman–LinkedIn B2B Thought Leadership Impact Report, 2025</cite>
            </blockquote>
          </div>
          
          <div className="reveal reveal-delay-2 pt-4">
            <div className="space-y-4">
              <div className="py-8 border-b border-copper/10">
                <h3 className="font-body font-normal text-[1rem] text-cream mb-3 flex items-center gap-3">
                  <span className="w-2 h-[1px] bg-copper flex-shrink-0" />
                  Substance over spectacle
                </h3>
                <p className="text-[0.9rem] text-secondary pl-6 leading-[1.75] font-light">
                  No engagement bait. No motivational clichés. We craft content that makes decision-makers stop scrolling, save the post, and bring it up in their next board meeting.
                </p>
              </div>
              <div className="py-8 border-b border-copper/10">
                <h3 className="font-body font-normal text-[1rem] text-cream mb-3 flex items-center gap-3">
                  <span className="w-2 h-[1px] bg-copper flex-shrink-0" />
                  Strategy before content
                </h3>
                <p className="text-[0.9rem] text-secondary pl-6 leading-[1.75] font-light">
                  We start with positioning — who you are to your market, what you uniquely see that others miss, and why your perspective deserves a permanent seat at the table.
                </p>
              </div>
              <div className="py-8 border-b border-copper/10">
                <h3 className="font-body font-normal text-[1rem] text-cream mb-3 flex items-center gap-3">
                  <span className="w-2 h-[1px] bg-copper flex-shrink-0" />
                  Algorithm-native, not algorithm-dependent
                </h3>
                <p className="text-[0.9rem] text-secondary pl-6 leading-[1.75] font-light">
                  We don&apos;t chase hacks. We build content so valuable that the algorithm has no choice but to surface it. Dwell time, saves, meaningful comments — the signals that matter now.
                </p>
              </div>
              <div className="py-8">
                <h3 className="font-body font-normal text-[1rem] text-cream mb-3 flex items-center gap-3">
                  <span className="w-2 h-[1px] bg-copper flex-shrink-0" />
                  Pipeline, not vanity metrics
                </h3>
                <p className="text-[0.9rem] text-secondary pl-6 leading-[1.75] font-light">
                  Impressions are flattering. Pipeline is everything. We measure success by the conversations your content starts and the deals it quietly accelerates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
