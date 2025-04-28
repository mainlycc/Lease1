import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero section */}
      <div className="bg-white text-white py-12 sm:py-20 px-4 sm:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1E8449]">Twój globalny partner w leasingu</h1>
            <p className="text-xl mb-8 text-[#1E8449]/80">
              Najlepsze rozwiązania leasingowe dla klientów z całego świata. Szybko, bezpiecznie i na najlepszych warunkach.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#F58FA9] hover:bg-[#F06E91] text-white px-6 py-3 rounded-md transition-colors text-lg font-semibold">
                Sprawdź ofertę
              </button>
              <button className="border border-[#1E8449] text-[#1E8449] px-6 py-3 rounded-md hover:bg-[#1E8449]/20 transition-colors text-lg font-semibold">
                Kontakt z doradcą
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-md h-56 sm:h-64 md:h-96">
              <div className="absolute inset-0 bg-[#1E8449] rounded-lg opacity-20 transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-lg border-2 border-[#1E8449] flex items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-[#1E8449]">Globalne rozwiązania leasingowe</h3>
                  <p className="mb-6 text-[#1E8449]/80">Obsługujemy klientów w ponad 30 krajach, oferując elastyczne warunki i konkurencyjne stawki.</p>
                  <div className="flex justify-center space-x-3 sm:space-x-6">
                    <span className="flex flex-col items-center">
                      <span className="text-2xl sm:text-3xl font-bold text-[#F58FA9]">30+</span>
                      <span className="text-sm text-[#1E8449]">Krajów</span>
                    </span>
                    <span className="flex flex-col items-center">
                      <span className="text-2xl sm:text-3xl font-bold text-[#F58FA9]">5000+</span>
                      <span className="text-sm text-[#1E8449]">Klientów</span>
                    </span>
                    <span className="flex flex-col items-center">
                      <span className="text-2xl sm:text-3xl font-bold text-[#F58FA9]">15+</span>
                      <span className="text-sm text-[#1E8449]">Lat doświadczenia</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja z ofertami */}
      <div className="bg-[#F5F5F5] py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#1E8449] text-center mb-12">Nasze oferty leasingowe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Oferta 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#1E8449]">
              <div className="relative h-36 w-full">
                <Image
                  src="/fura.png"
                  alt="Leasing samochodowy"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform hover:scale-105 p-2"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E8449] mb-3">Leasing samochodowy</h3>
                <p className="text-[#1E8449]/70 mb-4">
                  Elastyczne warunki leasingu samochodów osobowych i dostawczych dla klientów indywidualnych i firm.
                </p>
                <ul className="space-y-2 mb-6 text-[#1E8449]/70">
                  <li className="flex items-center">
                    <span className="text-[#F58FA9] mr-2">✓</span> Niskie raty miesięczne
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F58FA9] mr-2">✓</span> Brak opłaty wstępnej
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F58FA9] mr-2">✓</span> Możliwość wykupu po okresie umowy
                  </li>
                </ul>
                <button className="w-full bg-[#F58FA9] hover:bg-[#F06E91] text-white py-2 rounded-md transition-colors">
                  Więcej szczegółów
                </button>
              </div>
            </div>
            
            {/* Oferta 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#1E8449]">
              <div className="relative h-36 w-full">
                <Image
                  src="/tir.png"
                  alt="Leasing maszyn i urządzeń"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform hover:scale-105 p-2"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E8449] mb-3">Leasing maszyn i urządzeń</h3>
                <p className="text-[#1E8449]/70 mb-4">
                  Finansowanie zakupu sprzętu i maszyn dla przedsiębiorstw każdej wielkości.
                </p>
                <ul className="space-y-2 mb-6 text-[#1E8449]/70">
                  <li className="flex items-center">
                    <span className="text-[#F58FA9] mr-2">✓</span> Indywidualne harmonogramy spłat
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F58FA9] mr-2">✓</span> Ubezpieczenie w cenie
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F58FA9] mr-2">✓</span> Dostępne dla firm z różnych krajów
                  </li>
                </ul>
                <button className="w-full bg-[#F58FA9] hover:bg-[#F06E91] text-white py-2 rounded-md transition-colors">
                  Więcej szczegółów
                </button>
              </div>
            </div>
            
            {/* Oferta 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#1E8449]">
              <div className="relative h-36 w-full">
                <Image
                  src="/dom.png"
                  alt="Leasing nieruchomości"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform hover:scale-105 p-2"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E8449] mb-3">Leasing nieruchomości</h3>
                <p className="text-[#1E8449]/70 mb-4">
                  Długoterminowe finansowanie nieruchomości komercyjnych i przemysłowych.
                </p>
                <ul className="space-y-2 mb-6 text-[#1E8449]/70">
                  <li className="flex items-center">
                    <span className="text-[#F58FA9] mr-2">✓</span> Długie okresy finansowania
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F58FA9] mr-2">✓</span> Konkurencyjne oprocentowanie
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F58FA9] mr-2">✓</span> Obsługa międzynarodowych transakcji
                  </li>
                </ul>
                <button className="w-full bg-[#F58FA9] hover:bg-[#F06E91] text-white py-2 rounded-md transition-colors">
                  Więcej szczegółów
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proces leasingowy */}
      <div className="bg-white py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#1E8449] text-center mb-4">Jak działa nasz proces leasingowy</h2>
          <p className="text-[#1E8449]/80 text-center mb-12 max-w-3xl mx-auto">
            Zrozumiały i przejrzysty proces leasingowy dostosowany do indywidualnych potrzeb klienta.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Krok 1 */}
            <div className="bg-[#1E8449] rounded-lg p-6 shadow-md border border-[#1E8449] relative overflow-hidden">
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
                <h3 className="text-xl font-bold text-white mb-2">Kontakt i konsultacja</h3>
                <p className="text-white/80">
                  Nawiązujemy kontakt, przeprowadzamy wstępną konsultację i poznajemy Twoje potrzeby leasingowe.
                </p>
              </div>
            </div>
            
            {/* Krok 2 */}
            <div className="bg-[#1E8449] rounded-lg p-6 shadow-md border border-[#1E8449] relative overflow-hidden">
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
                <h3 className="text-xl font-bold text-white mb-2">Oferta i dokumenty</h3>
                <p className="text-white/80">
                  Przygotowujemy dopasowaną ofertę leasingową i kompletujemy niezbędne dokumenty.
                </p>
              </div>
            </div>
            
            {/* Krok 3 */}
            <div className="bg-[#1E8449] rounded-lg p-6 shadow-md border border-[#1E8449] relative overflow-hidden">
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
                <h3 className="text-xl font-bold text-white mb-2">Umowa leasingowa</h3>
                <p className="text-white/80">
                  Podpisujemy umowę leasingową i załatwiamy wszelkie formalności prawne.
                </p>
              </div>
            </div>
            
            {/* Krok 4 */}
            <div className="bg-[#1E8449] rounded-lg p-6 shadow-md border border-[#1E8449] relative overflow-hidden">
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
                <h3 className="text-xl font-bold text-white mb-2">Finansowanie i realizacja</h3>
                <p className="text-white/80">
                  Uruchamiamy finansowanie i realizujemy leasing zgodnie z ustaleniami.
                </p>
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="hidden lg:block relative mt-10 max-w-4xl mx-auto">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#1E8449] rounded-full"></div>
            <div className="absolute top-0 left-0 h-2 bg-[#F58FA9] rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-[#F5F5F5] py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#1E8449] text-center mb-4">Najczęściej zadawane pytania</h2>
          <p className="text-[#1E8449]/80 text-center mb-12 max-w-3xl mx-auto">
            Odpowiedzi na pytania, które mogą pojawić się podczas rozważania leasingu.
          </p>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            {/* Pytanie 1 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-[#1E8449]">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="mb-3 sm:mb-0 sm:mr-4 sm:mt-1 flex justify-center sm:justify-start">
                  <div className="h-8 w-8 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                    <span className="text-[#F58FA9] font-bold">?</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E8449] mb-3">Czy potrzebuję firmy w Polsce?</h3>
                  <div className="text-[#1E8449]/70">
                    <p>Nie, nie jest to konieczne. Lease1 oferuje usługi leasingowe dla firm z różnych krajów. Posiadamy doświadczenie w obsłudze międzynarodowych klientów i dostosowujemy nasze oferty do specyfiki prawnej i podatkowej danego kraju.</p>
                    <p className="mt-2">Możliwa jest również rejestracja firmy w Polsce z naszą pomocą, jeśli klient byłby takim rozwiązaniem zainteresowany.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pytanie 2 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-[#1E8449]">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="mb-3 sm:mb-0 sm:mr-4 sm:mt-1 flex justify-center sm:justify-start">
                  <div className="h-8 w-8 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                    <span className="text-[#F58FA9] font-bold">?</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E8449] mb-3">Jakie dokumenty są wymagane?</h3>
                  <div className="text-[#1E8449]/70">
                    <p>Standardowo wymagamy następujących dokumentów:</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Dokumenty rejestrowe firmy (odpowiedniki KRS/CEIDG w danym kraju)</li>
                      <li>Sprawozdania finansowe za ostatni rok lub dwa lata</li>
                      <li>Dokumentacja przedmiotu leasingu (np. faktura pro-forma)</li>
                      <li>Identyfikacja przedstawicieli firmy (dokument tożsamości)</li>
                    </ul>
                    <p className="mt-2">Dokładny zakres dokumentacji może się różnić w zależności od rodzaju leasingu, wartości kontraktu i krajowych wymogów prawnych.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pytanie 3 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-[#1E8449]">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="mb-3 sm:mb-0 sm:mr-4 sm:mt-1 flex justify-center sm:justify-start">
                  <div className="h-8 w-8 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                    <span className="text-[#F58FA9] font-bold">?</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E8449] mb-3">Ile trwa proces leasingowy?</h3>
                  <div className="text-[#1E8449]/70">
                    <p>Czas realizacji procesu leasingowego zależy od kilku czynników:</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li><span className="font-medium">Leasing standardowy</span>: 3-5 dni roboczych od złożenia kompletnej dokumentacji</li>
                      <li><span className="font-medium">Leasing specjalistyczny</span>: 7-14 dni roboczych</li>
                      <li><span className="font-medium">Leasing nieruchomości</span>: 2-4 tygodnie</li>
                    </ul>
                    <p className="mt-2">Dążymy do maksymalnego skrócenia czasu realizacji, zapewniając jednocześnie najwyższą jakość obsługi i bezpieczeństwo transakcji.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-[#F58FA9] py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Gotowy na globalne możliwości?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Dołącz do tysięcy zadowolonych klientów z całego świata i skorzystaj z naszych wyjątkowych ofert leasingowych.
          </p>
          <Link href="/rejestracja" className="bg-white hover:bg-gray-100 text-[#F58FA9] px-6 sm:px-8 py-2 sm:py-3 rounded-md transition-colors text-base sm:text-lg font-semibold inline-block">
            Rozpocznij teraz
          </Link>
        </div>
      </div>

      {/* Stopka */}
      <footer className="bg-[#1E8449] text-white py-8 sm:py-10 px-4 sm:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Lease<span className="text-[#FFD1DC]">1</span></h2>
              <p className="text-gray-200">
                Twój globalny partner w rozwiązaniach leasingowych dla klientów indywidualnych i firm.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Oferty</h3>
              <ul className="space-y-2 text-gray-200">
                <li><Link href="#" className="hover:text-[#FFD1DC]">Leasing samochodowy</Link></li>
                <li><Link href="#" className="hover:text-[#FFD1DC]">Leasing maszyn</Link></li>
                <li><Link href="#" className="hover:text-[#FFD1DC]">Leasing nieruchomości</Link></li>
                <li><Link href="#" className="hover:text-[#FFD1DC]">Leasing specjalistyczny</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Firma</h3>
              <ul className="space-y-2 text-gray-200">
                <li><Link href="#" className="hover:text-[#FFD1DC]">O nas</Link></li>
                <li><Link href="#" className="hover:text-[#FFD1DC]">Kariera</Link></li>
                <li><Link href="#" className="hover:text-[#FFD1DC]">Aktualności</Link></li>
                <li><Link href="#" className="hover:text-[#FFD1DC]">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2 text-gray-200">
                <li>biuro@lease1.pl</li>
                <li>+48 536 011 590</li>
                <li>ul. Św. Józefa 1</li>
                <li>05-840 Brwinów, Polska</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#166F3C] mt-8 pt-8 text-center text-gray-200">
            <p>&copy; {new Date().getFullYear()} Lease1. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
