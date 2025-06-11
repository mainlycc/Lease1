import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

export default function RegulaminPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-10 text-center tracking-tight">Regulamin strony</h1>
        <div className="prose prose-p:text-justify prose-h2:text-[#2209B8] prose-h2:font-bold prose-h2:text-2xl prose-h3:font-semibold prose-h3:text-lg prose-ul:pl-6 prose-li:mb-2 max-w-2xl w-full bg-white/80 rounded-xl shadow-lg p-6 sm:p-10">
          <h2>§1. Postanowienia ogólne</h2>
          <p><strong>Operatorem strony</strong> jest <b>Business Care Daniel Piwowarczyk</b>, z siedzibą przy ul. Przyszłości 6, 05‑140 Skubianka, Polska.</p>
          <p className="mt-2 mb-1 font-semibold">Kontakt:</p>
          <ul>
            <li><b>e‑mail:</b> <a href="mailto:biuro@lease1.pl" className="text-[#2209B8] underline">biuro@lease1.pl</a></li>
            <li><b>telefon:</b> <a href="tel:+48603086580" className="text-[#2209B8] underline">+48 603 086 580</a></li>
            <li><b>godziny pracy:</b> pon–pt 9:00–17:00; weekendy nieczynne</li>
          </ul>
          <h2>§2. Definicje</h2>
          <ul>
            <li><b>Użytkownik</b> – osoba odwiedzająca lub korzystająca z serwisu.</li>
            <li><b>Serwis</b> – strona internetowa Lease1.pl wraz z całą zawartością i funkcjonalnościami.</li>
          </ul>
          <h2>§3. Zakres świadczeń</h2>
          <p><b>Lease1</b> oferuje usługi: leasing samochodów, maszyn, nieruchomości, ubezpieczenia i księgowość, zgodnie z opisem na stronie.</p>
          <p>Wszystkie usługi świadczone są na zasadach indywidualnie ustalanych z klientem, zgodnie z procesem opisanym na stronie: <b>konsultacja, oferta, umowa, finansowanie, realizacja</b>.</p>
          <h2>§4. Warunki korzystania</h2>
          <ul>
            <li>Korzystanie ze strony oznacza <b>akceptację niniejszego regulaminu</b>.</li>
            <li>Użytkownik zobowiązuje się do korzystania z serwisu w sposób zgodny z prawem i niezakłócający działania serwisu.</li>
            <li><span className="text-red-600 font-semibold">Zabronione</span> jest umieszczanie treści o charakterze bezprawnym, obraźliwym lub naruszającym prawa osób trzecich.</li>
          </ul>
          <h2>§5. Ochrona danych osobowych i RODO</h2>
          <ul>
            <li><b>Administrator danych osobowych:</b> Business Care Daniel Piwowarczyk.</li>
            <li>Dane zbierane przez formularze kontaktowe są przetwarzane zgodnie z <a href="/polityka-prywatnosci" className="text-[#2209B8] underline">Polityką Prywatności</a> i RODO.</li>
            <li>Użytkownik wyraża zgodę na kontakt oraz na przetwarzanie swoich danych w celach marketingowych i obsługi zapytań.</li>
          </ul>
          <h2>§6. Odpowiedzialność</h2>
          <ul>
            <li>Operator dokłada starań, aby serwis działał poprawnie, jednak nie gwarantuje dostępności usług bez przerw.</li>
            <li>Operator nie ponosi odpowiedzialności za szkody wynikłe z korzystania lub braku możliwości korzystania z serwisu oraz za treści publikowane przez użytkowników.</li>
            <li>Wewnętrzne procesy leasingowe, ubezpieczeniowe i księgowe realizowane są przez kompetentny personel, jednak ostateczna odpowiedzialność pozostaje po stronie kontrahentów zgodnie z podpisanymi umowami.</li>
          </ul>
          <h2>§7. Prawa własności intelektualnej</h2>
          <ul>
            <li>Zawartość serwisu (teksty, grafiki, logo itp.) stanowi własność <b>Business Care</b> i jest chroniona prawem autorskim.</li>
            <li><span className="text-red-600 font-semibold">Niedozwolone</span> jest kopiowanie, powielanie, publikowanie lub modyfikacja jakichkolwiek elementów serwisu bez wyraźnej zgody właściciela.</li>
          </ul>
          <h2>§8. Postanowienia końcowe</h2>
          <ul>
            <li>Operator zastrzega sobie prawo do zmiany regulaminu. Zmiany wchodzą w życie z dniem publikacji na stronie.</li>
            <li>Wszelkie spory wynikające ze stosowania regulaminu podlegają prawu polskiemu i rozstrzygane będą przez sądy właściwe miejscowo dla siedziby operatora.</li>
            <li>Regulamin obowiązuje od daty jego publikacji (np. 1 czerwca 2025 r.).</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
} 