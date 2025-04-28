"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Schemat walidacji formularza
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Imię i nazwisko musi mieć co najmniej 2 znaki.",
  }),
  email: z.string().email({
    message: "Proszę podać prawidłowy adres email.",
  }),
  company: z.string().optional(),
  subject: z.string().min(5, {
    message: "Temat musi mieć co najmniej 5 znaków.",
  }),
  message: z.string().min(10, {
    message: "Wiadomość musi mieć co najmniej 10 znaków.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      // Tutaj będzie logika wysyłania formularza do API
      console.log(data);
      
      // Symulacja odpowiedzi z serwera
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Błąd podczas wysyłania formularza:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#300FE6]/10">
      {/* Nawigacja */}
      <nav className="bg-[#2209B8] text-white py-4 px-8 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-white">Lease<span className="text-[#7A66FF]">1</span></h1>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-[#7A66FF] transition-colors">Strona główna</Link>
            <Link href="/oferty" className="hover:text-[#7A66FF] transition-colors">Oferty</Link>
            <Link href="/o-nas" className="hover:text-[#7A66FF] transition-colors">O nas</Link>
            <Link href="/kontakt" className="hover:text-[#7A66FF] transition-colors font-semibold">Kontakt</Link>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Główna sekcja */}
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#2209B8] mb-4">Skontaktuj się z nami</h1>
            <p className="text-[#2209B8]/70 max-w-2xl mx-auto">
              Masz pytania dotyczące naszych usług leasingowych? Wypełnij formularz, a nasz zespół skontaktuje się z Tobą jak najszybciej.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formularz kontaktowy */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-[#300FE6]/20">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#300FE6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#300FE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2209B8] mb-3">Dziękujemy za wiadomość!</h3>
                  <p className="text-[#2209B8]/70 mb-6">
                    Twoja wiadomość została wysłana. Nasz zespół skontaktuje się z Tobą tak szybko, jak to możliwe.
                  </p>
                  <Button 
                    onClick={() => setIsSuccess(false)}
                    className="bg-[#300FE6] hover:bg-[#4A31FF] text-white"
                  >
                    Wyślij nową wiadomość
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2209B8]">Imię i nazwisko</FormLabel>
                          <FormControl>
                            <Input placeholder="Jan Kowalski" {...field} className="border-[#300FE6]/30 focus-visible:ring-[#300FE6]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2209B8]">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jan.kowalski@example.com" {...field} className="border-[#300FE6]/30 focus-visible:ring-[#300FE6]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2209B8]">Firma (opcjonalnie)</FormLabel>
                          <FormControl>
                            <Input placeholder="Nazwa Twojej firmy" {...field} className="border-[#300FE6]/30 focus-visible:ring-[#300FE6]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2209B8]">Temat</FormLabel>
                          <FormControl>
                            <Input placeholder="Zapytanie o leasing samochodowy" {...field} className="border-[#300FE6]/30 focus-visible:ring-[#300FE6]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2209B8]">Wiadomość</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Twoja wiadomość..." 
                              className="min-h-[120px] border-[#300FE6]/30 focus-visible:ring-[#300FE6]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#300FE6] hover:bg-[#4A31FF] text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
            
            {/* Informacje kontaktowe */}
            <div className="flex flex-col justify-between">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-[#300FE6]/20 mb-8">
                <h3 className="text-xl font-bold text-[#2209B8] mb-6">Dane kontaktowe</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="h-8 w-8 bg-[#300FE6]/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#300FE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-[#2209B8]">Email</p>
                      <p className="text-[#2209B8]/70">biuro@lease1.pl</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="h-8 w-8 bg-[#300FE6]/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#300FE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-[#2209B8]">Telefon</p>
                      <p className="text-[#2209B8]/70">+48 536 011 590</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="h-8 w-8 bg-[#300FE6]/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#300FE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-[#2209B8]">Adres</p>
                      <p className="text-[#2209B8]/70">ul. Św. Józefa 1</p>
                      <p className="text-[#2209B8]/70">05-840 Brwinów, Polska</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-[#300FE6]/20">
                <h3 className="text-xl font-bold text-[#2209B8] mb-6">Godziny pracy</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#2209B8]">Poniedziałek - Piątek</span>
                    <span className="text-[#2209B8]/70">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2209B8]">Sobota</span>
                    <span className="text-[#2209B8]/70">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2209B8]">Niedziela</span>
                    <span className="text-[#2209B8]/70">Zamknięte</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mapa - przykładowa lokalizacja */}
      <div className="w-full h-96 bg-[#E1EDFF] mt-12">
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-[#2209B8]/70">Tutaj będzie mapa z lokalizacją firmy</p>
        </div>
      </div>

      {/* Stopka */}
      <footer className="bg-[#2209B8] text-white py-10 px-8 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Lease<span className="text-[#7A66FF]">1</span></h2>
              <p className="text-gray-200">
                Twój globalny partner w rozwiązaniach leasingowych dla klientów indywidualnych i firm.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Oferty</h3>
              <ul className="space-y-2 text-gray-200">
                <li><Link href="#" className="hover:text-[#7A66FF]">Leasing samochodowy</Link></li>
                <li><Link href="#" className="hover:text-[#7A66FF]">Leasing maszyn</Link></li>
                <li><Link href="#" className="hover:text-[#7A66FF]">Leasing nieruchomości</Link></li>
                <li><Link href="#" className="hover:text-[#7A66FF]">Leasing specjalistyczny</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Firma</h3>
              <ul className="space-y-2 text-gray-200">
                <li><Link href="#" className="hover:text-[#7A66FF]">O nas</Link></li>
                <li><Link href="#" className="hover:text-[#7A66FF]">Kariera</Link></li>
                <li><Link href="#" className="hover:text-[#7A66FF]">Aktualności</Link></li>
                <li><Link href="/kontakt" className="hover:text-[#7A66FF]">Kontakt</Link></li>
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
          <div className="border-t border-[#4A31FF] mt-8 pt-8 text-center text-gray-200">
            <p>&copy; {new Date().getFullYear()} Lease1. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 