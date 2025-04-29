'use client';

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from '@/lib/language-context';

export function Footer() {
  const { t } = useTranslations();

  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Business Care Logo"
                width={40}
                height={40}
                className="w-10 sm:w-12"
              />
              <span className="text-lg sm:text-xl font-bold">Business Care</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/leasing" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  {t('services.leasing.title')}
                </Link>
              </li>
              <li>
                <Link href="https://gapauto.pl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  {t('services.insurance.title')}
                </Link>
              </li>
              <li>
                <Link href="https://www.bcsc.pl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  {t('services.accounting.title')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm sm:text-base">
                  Przyszłości 6<br />
                  05-140 Skubianka<br />
                  Polska
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm sm:text-base">biuro@lease1.pl</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm sm:text-base">+48 603 086 580</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Business Care. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
} 