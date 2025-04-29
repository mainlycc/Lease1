'use client';

import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { useTranslations } from "@/lib/language-context";

export default function Home() {
  const { t } = useTranslations();
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero section */}
      <div className="bg-white py-8 sm:py-12 md:py-20 px-4 sm:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">{t('hero.title')}</h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-black/80">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#F58FA9] hover:bg-[#F06E91] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors text-base sm:text-lg font-semibold w-full sm:w-auto">
                {t('hero.checkOffer')}
              </button>
              <button className="border border-black text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-black/20 transition-colors text-base sm:text-lg font-semibold w-full sm:w-auto">
                {t('hero.contactAdvisor')}
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md h-48 sm:h-64 md:h-80">
              <Image
                src="/hero.png"
                alt={t('hero.title')}
                fill
                style={{ objectFit: 'contain' }}
                className="transition-transform hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Leasing offers section */}
      <div className="bg-white py-8 sm:py-12 md:py-20 px-4 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            {t('offers.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/tir.png"
                alt={t('offers.machineLeasing.title')}
                width={400}
                height={300}
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('offers.machineLeasing.title')}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{t('offers.machineLeasing.description')}</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/fura.png"
                alt={t('offers.carLeasing.title')}
                width={400}
                height={300}
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('offers.carLeasing.title')}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{t('offers.carLeasing.description')}</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/dom.png"
                alt={t('offers.propertyLeasing.title')}
                width={400}
                height={300}
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('offers.propertyLeasing.title')}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{t('offers.propertyLeasing.description')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Proces leasingowy */}
      <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2209B8] text-center mb-3 sm:mb-4">{t('process.title')}</h2>
          <p className="text-[#2209B8]/80 text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base">
            {t('process.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Krok 1 */}
            <div className="bg-[#2209B8] rounded-lg p-6 shadow-md border border-[#2209B8] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 bg-[#F58FA9] flex items-center justify-center rotate-12 -translate-y-4 -translate-x-4">
                <span className="text-white font-bold text-xl rotate-[-12deg]">1</span>
              </div>
              <div className="text-center mt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-[#2A1470] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t('process.steps.contact.title')}</h3>
                <p className="text-white/80">
                  {t('process.steps.contact.description')}
                </p>
              </div>
            </div>
            
            {/* Krok 2 */}
            <div className="bg-[#2209B8] rounded-lg p-6 shadow-md border border-[#2209B8] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 bg-[#F58FA9] flex items-center justify-center rotate-12 -translate-y-4 -translate-x-4">
                <span className="text-white font-bold text-xl rotate-[-12deg]">2</span>
              </div>
              <div className="text-center mt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-[#2A1470] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t('process.steps.documents.title')}</h3>
                <p className="text-white/80">
                  {t('process.steps.documents.description')}
                </p>
              </div>
            </div>
            
            {/* Krok 3 */}
            <div className="bg-[#2209B8] rounded-lg p-6 shadow-md border border-[#2209B8] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 bg-[#F58FA9] flex items-center justify-center rotate-12 -translate-y-4 -translate-x-4">
                <span className="text-white font-bold text-xl rotate-[-12deg]">3</span>
              </div>
              <div className="text-center mt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-[#2A1470] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t('process.steps.agreement.title')}</h3>
                <p className="text-white/80">
                  {t('process.steps.agreement.description')}
                </p>
              </div>
            </div>
            
            {/* Krok 4 */}
            <div className="bg-[#2209B8] rounded-lg p-6 shadow-md border border-[#2209B8] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 bg-[#F58FA9] flex items-center justify-center rotate-12 -translate-y-4 -translate-x-4">
                <span className="text-white font-bold text-xl rotate-[-12deg]">4</span>
              </div>
              <div className="text-center mt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-[#2A1470] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t('process.steps.financing.title')}</h3>
                <p className="text-white/80">
                  {t('process.steps.financing.description')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="hidden lg:block relative mt-10 max-w-4xl mx-auto">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#2209B8] rounded-full"></div>
            <div className="absolute top-0 left-0 h-2 bg-[#F58FA9] rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>

      {/* Sekcja usług */}
      <Services />

      {/* FAQ */}
      <div className="bg-white py-8 sm:py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            {t('faq.title')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:border-[#2209B8] hover:shadow-lg transition-all">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('faq.questions.company.question')}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{t('faq.questions.company.answer')}</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:border-[#2209B8] hover:shadow-lg transition-all">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('faq.questions.documents.question')}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{t('faq.questions.documents.answer')}</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:border-[#2209B8] hover:shadow-lg transition-all">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('faq.questions.duration.question')}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{t('faq.questions.duration.answer')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-[#F58FA9] py-8 sm:py-12 md:py-16 px-4 sm:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">{t('cta.title')}</h2>
          <p className="text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            {t('cta.subtitle')}
          </p>
          <Link href="/kontakt" className="bg-white hover:bg-gray-100 text-[#F58FA9] px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md transition-colors text-sm sm:text-base md:text-lg font-semibold inline-block">
            {t('cta.button')}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
