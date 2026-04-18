
"use client";

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Stats } from '@/components/sections/stats';
import { Reality } from '@/components/sections/reality';
import { Why } from '@/components/sections/why';
import { Process } from '@/components/sections/process';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/footer';
import { AuditDialog } from '@/components/audit-dialog';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function Home() {
  const containerRef = useScrollReveal();
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  const openAudit = () => setIsAuditOpen(true);

  return (
    <main ref={containerRef as any} className="relative">
      <Navbar onAuditClick={openAudit} />
      <Hero onAuditClick={openAudit} />
      <Problem />
      <Stats />
      
      {/* Big Quote Section */}
      <section className="py-32 text-center relative reveal">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="font-headline text-[12rem] text-copper/[0.06] absolute top-4 left-1/2 -translate-x-1/2 leading-none pointer-events-none select-none">
            &ldquo;
          </div>
          <blockquote className="font-headline italic text-2xl sm:text-3xl md:text-4xl text-cream max-w-[700px] mx-auto leading-relaxed relative z-10">
            The founders who win the next decade won&apos;t just build great products — they&apos;ll build <em className="text-copper italic">undeniable reputations.</em> LinkedIn is where that reputation compounds, silently, relentlessly, in the background of every deal your buyer is evaluating.
          </blockquote>
        </div>
      </section>
      
      <Reality />
      <Why />
      <Process />
      <CTA onAuditClick={openAudit} />
      <Footer />

      <AuditDialog open={isAuditOpen} onOpenChange={setIsAuditOpen} />
    </main>
  );
}
