import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Polityka prywatności</h1>
        <p className="mb-4">Obowiązuje od dnia: 11 czerwca 2025 r.</p>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">§1. Informacje ogólne</h2>
          <p className="mb-4">Niniejszy dokument określa zasady przetwarzania danych osobowych Użytkowników serwisu Lease1.pl, zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).</p>
          <p className="mb-4">Administratorem danych osobowych jest:</p>
          <p className="mb-4">
            Business Care Daniel Piwowarczyk<br />
            ul. Przyszłości 6, 05‑140 Skubianka<br />
            NIP: 5361933707<br />
            E-mail: biuro@lease1.pl<br />
            Tel: +48 796 148 577
          </p>

          <h2 className="text-2xl font-semibold mb-4">§2. Zakres zbieranych danych</h2>
          <p className="mb-4">Zbieramy dane osobowe podane dobrowolnie przez Użytkownika w następujących sytuacjach:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>wypełnienie formularza kontaktowego,</li>
            <li>zapisanie się na newsletter,</li>
            <li>kontakt telefoniczny, e-mailowy lub przez inne kanały komunikacji.</li>
          </ul>
          <p className="mb-4">Mogą to być:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>imię i nazwisko,</li>
            <li>numer telefonu,</li>
            <li>adres e-mail,</li>
            <li>dane firmy (jeśli dotyczy),</li>
            <li>adres IP,</li>
            <li>informacje o przeglądarce i urządzeniu.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">§3. Cel przetwarzania danych</h2>
          <p className="mb-4">Dane osobowe są przetwarzane w następujących celach:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Obsługa zapytań i formularzy kontaktowych.</li>
            <li>Przygotowanie i przedstawienie ofert leasingowych, ubezpieczeniowych lub księgowych.</li>
            <li>Realizacja umów i kontakt z klientem.</li>
            <li>Marketing usług własnych (na podstawie zgody).</li>
            <li>Prowadzenie analiz statystycznych i optymalizacja działania strony.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">§4. Podstawa prawna przetwarzania</h2>
          <p className="mb-4">Dane przetwarzamy na podstawie:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>art. 6 ust. 1 lit. b RODO – wykonanie umowy lub działania przed jej zawarciem,</li>
            <li>art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes (kontakt, rozwój usług),</li>
            <li>art. 6 ust. 1 lit. a RODO – zgoda (np. na newsletter lub marketing).</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">§5. Prawa Użytkownika</h2>
          <p className="mb-4">Każda osoba, której dane dotyczą, ma prawo do:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>dostępu do swoich danych,</li>
            <li>ich sprostowania, usunięcia lub ograniczenia przetwarzania,</li>
            <li>wniesienia sprzeciwu wobec przetwarzania,</li>
            <li>przeniesienia danych,</li>
            <li>cofnięcia zgody w dowolnym momencie,</li>
            <li>złożenia skargi do Prezesa UODO.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">§6. Udostępnianie danych</h2>
          <p className="mb-4">Dane mogą być przekazywane podmiotom wspierającym Administratora w prowadzeniu działalności, np. firmom informatycznym, doradcom, firmom księgowym – wyłącznie w zakresie niezbędnym do realizacji usług.</p>
          <p className="mb-4">Dane nie są przekazywane poza Europejski Obszar Gospodarczy.</p>
          <p className="mb-4">Dane nie są sprzedawane osobom trzecim.</p>

          <h2 className="text-2xl font-semibold mb-4">§7. Pliki cookies</h2>
          <p className="mb-4">Strona Lease1.pl używa plików cookies w celach:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>poprawnego działania strony,</li>
            <li>analizowania ruchu (np. Google Analytics),</li>
            <li>remarketingu (np. Facebook Ads, Google Ads).</li>
          </ul>
          <p className="mb-4">Użytkownik może w każdej chwili zmienić ustawienia przeglądarki w zakresie cookies.</p>
          <p className="mb-4">Korzystanie ze strony bez zmiany ustawień oznacza zgodę na ich zapisywanie.</p>

          <h2 className="text-2xl font-semibold mb-4">§8. Okres przechowywania danych</h2>
          <p className="mb-4">Dane osobowe przechowujemy:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>przez czas niezbędny do realizacji celu,</li>
            <li>do momentu cofnięcia zgody (jeśli była podstawą przetwarzania),</li>
            <li>przez okres wynikający z przepisów prawa (np. podatkowego).</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">§9. Zabezpieczenia</h2>
          <p className="mb-4">Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych przed nieuprawnionym dostępem, utratą lub zniszczeniem.</p>

          <h2 className="text-2xl font-semibold mb-4">§10. Zmiany w Polityce Prywatności</h2>
          <p className="mb-4">Zastrzegamy sobie prawo do wprowadzenia zmian w niniejszej Polityce. Zmiany publikowane będą na stronie i wchodzą w życie w dniu ich opublikowania.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 