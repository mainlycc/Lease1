'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { openLanguageDialog } from "./ui/LanguageDialog";
import { useTranslations } from "@/lib/language-context";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslations();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-[#2209B8] text-white py-2 sm:py-4 px-4 sm:px-8 shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/BC.png"
                alt="Logo Business Care Lease1"
                width={140}
                height={140}
                className="w-36 sm:w-40"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="/" className="hover:text-[#FFD1DC] transition-colors">
              {t('navigation.home')}
            </Link>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-[#FFD1DC] transition-colors"
            >
              {t('navigation.offers')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-[#FFD1DC] transition-colors"
            >
              {t('navigation.about')}
            </button>
            <Link href="/kontakt" className="hover:text-[#FFD1DC] transition-colors">
              {t('navigation.contact')}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-1">
              <button
                onClick={() => openLanguageDialog()}
                className="p-1 hover:text-[#FFD1DC] transition-colors"
              >
                <span className="fi fi-pl text-2xl"></span>
              </button>
              <button
                onClick={() => openLanguageDialog()}
                className="p-1 hover:text-[#FFD1DC] transition-colors"
              >
                <span className="fi fi-cn text-2xl"></span>
              </button>
              <button
                onClick={() => openLanguageDialog()}
                className="p-1 hover:text-[#FFD1DC] transition-colors"
              >
                <span className="fi fi-ua text-2xl"></span>
              </button>
              <button
                onClick={() => openLanguageDialog()}
                className="p-1 hover:text-[#FFD1DC] transition-colors"
              >
                <span className="fi fi-gb text-2xl"></span>
              </button>
            </div>

            <Link 
              href="/kontakt" 
              className="hidden sm:block bg-[#F58FA9] hover:bg-[#F06E91] text-white px-3 py-2 rounded-md transition-colors text-sm"
            >
              {t('navigation.writeToUs')}
            </Link>

            <button
              className="md:hidden bg-[#1A07A3] hover:bg-[#15058C] p-2 rounded-md ml-2" 
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
          <div className="md:hidden bg-[#1A07A3] mt-4 p-4 rounded-md">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block hover:text-[#FFD1DC] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    scrollToSection('services');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left hover:text-[#FFD1DC] transition-colors"
                >
                  {t('navigation.offers')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    scrollToSection('about');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left hover:text-[#FFD1DC] transition-colors"
                >
                  {t('navigation.about')}
                </button>
              </li>
              <li>
                <Link 
                  href="/kontakt" 
                  className="block hover:text-[#FFD1DC] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('navigation.contact')}
                </Link>
              </li>
              <li>
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => openLanguageDialog()}
                    className="p-1 hover:text-[#FFD1DC] transition-colors"
                  >
                    <span className="fi fi-pl text-2xl"></span>
                  </button>
                  <button
                    onClick={() => openLanguageDialog()}
                    className="p-1 hover:text-[#FFD1DC] transition-colors"
                  >
                    <span className="fi fi-cn text-2xl"></span>
                  </button>
                  <button
                    onClick={() => openLanguageDialog()}
                    className="p-1 hover:text-[#FFD1DC] transition-colors"
                  >
                    <span className="fi fi-ua text-2xl"></span>
                  </button>
                  <button
                    onClick={() => openLanguageDialog()}
                    className="p-1 hover:text-[#FFD1DC] transition-colors"
                  >
                    <span className="fi fi-gb text-2xl"></span>
                  </button>
                </div>
              </li>
              <li>
                <Link 
                  href="/kontakt" 
                  className="block bg-[#F58FA9] hover:bg-[#F06E91] text-white px-4 py-2 rounded-md transition-colors text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('navigation.writeToUs')}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
} 