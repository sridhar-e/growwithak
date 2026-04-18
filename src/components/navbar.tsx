
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onAuditClick: () => void;
}

export function Navbar({ onAuditClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-400 border-b border-copper-glow/5 py-6",
      scrolled ? "bg-midnight/95 backdrop-blur-xl py-4" : "bg-midnight/85 backdrop-blur-lg"
    )}>
      <div className="max-w-[1100px] mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="font-body font-light text-2xl tracking-[0.3em] text-copper group">
          AK
          <span className="text-[0.6rem] block tracking-[0.25em] text-secondary mt-[-2px] uppercase">
            Building Thought Leaders
          </span>
        </Link>
        <button 
          onClick={onAuditClick}
          className="font-body text-[0.75rem] tracking-[0.15em] uppercase text-copper border border-copper/30 px-7 py-3 transition-all duration-400 hover:bg-copper hover:text-midnight cursor-pointer"
        >
          Free Audit
        </button>
      </div>
    </nav>
  );
}
