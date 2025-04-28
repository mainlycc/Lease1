'use client';

import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1E8449] text-white py-4 px-4 sm:px-8 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Lease<span className="text-[#FFD1DC]">1</span></h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-[#FFD1DC] transition-colors">Strona główna</Link>
          <Link href="/oferty" className="hover:text-[#FFD1DC] transition-colors">Oferty</Link>
          <Link href="/o-nas" className="hover:text-[#FFD1DC] transition-colors">O nas</Link>
          <Link href="/kontakt" className="hover:text-[#FFD1DC] transition-colors">Kontakt</Link>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <LanguageSwitcher />
          <Link href="/kontakt" className="hidden sm:block bg-[#F58FA9] hover:bg-[#F06E91] text-white px-4 py-2 rounded-md transition-colors text-sm sm:text-base">
            Napisz do nas
          </Link>
          <button 
            className="md:hidden bg-[#166F3C] hover:bg-[#0E4725] p-2 rounded-md" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#166F3C] mt-4 p-4 rounded-md">
          <ul className="space-y-3">
            <li><Link href="/" className="block hover:text-[#FFD1DC] transition-colors">Strona główna</Link></li>
            <li><Link href="/oferty" className="block hover:text-[#FFD1DC] transition-colors">Oferty</Link></li>
            <li><Link href="/o-nas" className="block hover:text-[#FFD1DC] transition-colors">O nas</Link></li>
            <li><Link href="/kontakt" className="block hover:text-[#FFD1DC] transition-colors">Kontakt</Link></li>
            <li>
              <Link href="/kontakt" className="block bg-[#F58FA9] hover:bg-[#F06E91] text-white px-4 py-2 rounded-md transition-colors text-center">
                Napisz do nas
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
} 