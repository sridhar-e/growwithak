
"use client";

import { useEffect, useRef } from 'react';

const statsData = [
  { number: "44%", label: "of a company's market value is attributable to its CEO's reputation", source: "Weber Shandwick" },
  { number: "75%", label: "of decision-makers say thought leadership led them to research a product they weren't considering", source: "Edelman–LinkedIn" },
  { number: "95%", label: "of hidden buyers say strong thought leadership makes them more receptive to outreach", source: "Edelman–LinkedIn 2025" },
  { number: "82%", label: "more likely to trust a company when its senior executives are active on social media", source: "Entrepreneur" },
  { number: "1%", label: "of LinkedIn users post weekly — yet that 1% generates 9 billion impressions every week", source: "Buffer" },
  { number: "9/10", label: "decision-makers are more receptive to outreach from companies producing quality thought leadership", source: "Edelman–LinkedIn" },
  { number: "53%", label: "of B2B buyers say that when thought leadership is strong, brand recognition matters less", source: "Edelman–LinkedIn 2025" },
  { number: "1.3B", label: "professionals on LinkedIn — 3 new members join every single second of every day", source: "Microsoft FY2025" },
];

export function Stats() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('.stat-item');
          els.forEach((el, index) => {
            (el as HTMLElement).style.opacity = '1';
            (el as HTMLElement).style.transform = 'none';
            (el as HTMLElement).style.transitionDelay = `${index * 50}ms`;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 relative bg-gradient-to-b from-transparent via-copper/[0.03] to-transparent">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="text-center max-w-[650px] mx-auto mb-20 reveal">
          <div className="section-label">The numbers don&apos;t lie</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-normal text-cream mb-6">
            LinkedIn isn&apos;t optional for founders anymore. It&apos;s <em className="italic text-copper">existential.</em>
          </h2>
          <p className="text-secondary font-light">Data from Edelman, LinkedIn, Richard van der Blom, Weber Shandwick, and industry research paints an unambiguous picture.</p>
        </div>
        
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px] bg-copper/10 border border-copper/10 reveal">
          {statsData.map((stat, i) => (
            <div 
              key={i} 
              className="stat-item bg-midnight p-10 text-center hover:bg-midnight-light transition-all duration-400 opacity-0 translate-y-4"
              style={{ transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)' }}
            >
              <span className="font-headline text-5xl font-normal text-copper block mb-2 italic">
                {stat.number}
              </span>
              <div className="text-[0.88rem] text-secondary leading-[1.6] max-w-[220px] mx-auto font-light">
                {stat.label}
              </div>
              <div className="text-[0.62rem] tracking-[0.1em] text-muted mt-4 uppercase">
                {stat.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
