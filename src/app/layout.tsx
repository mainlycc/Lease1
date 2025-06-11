import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "flag-icons/css/flag-icons.min.css";
import { LanguageProvider } from "@/lib/language-context";
import { LanguageDialog } from '@/components/ui/LanguageDialog'
import { CallToActionPopup } from '@/components/CallToActionPopup';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lease1 - Twój globalny partner w leasingu",
  description: "Najlepsze rozwiązania leasingowe dla klientów z całego świata. Szybko, bezpiecznie i na najlepszych warunkach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lease1 Business Care",
              "url": "https://lease1.pl",
              "logo": "https://lease1.pl/BC.png",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+48 603 086 580",
                "contactType": "customer service",
                "areaServed": "PL",
                "availableLanguage": ["Polish", "English", "Ukrainian", "Chinese"]
              }],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Przyszłości 6",
                "addressLocality": "Skubianka",
                "postalCode": "05-140",
                "addressCountry": "PL"
              }
            })
          }}
        />
        <meta property="og:title" content="Lease1 - Twój globalny partner w leasingu" />
        <meta property="og:description" content="Najlepsze rozwiązania leasingowe dla klientów z całego świata. Szybko, bezpiecznie i na najlepszych warunkach." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lease1.pl/" />
        <meta property="og:image" content="https://lease1.pl/BC.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lease1 - Twój globalny partner w leasingu" />
        <meta name="twitter:description" content="Najlepsze rozwiązania leasingowe dla klientów z całego świata. Szybko, bezpiecznie i na najlepszych warunkach." />
        <meta name="twitter:image" content="https://lease1.pl/BC.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <LanguageDialog />
          {children}
          <CallToActionPopup />
          <Analytics />
          <Toaster position="top-center" />
        </LanguageProvider>
      </body>
    </html>
  );
}