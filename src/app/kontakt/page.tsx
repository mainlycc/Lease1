"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslations } from "@/lib/language-context";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Schemat walidacji formularza
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useTranslations();

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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Sekcja kontaktowa */}
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-black text-center mb-12">{t('contactPage.title')}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formularz kontaktowy */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-black">
            <h2 className="text-2xl font-bold text-black mb-6">{t('contactPage.form.title')}</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-black font-medium mb-2">
                  {t('contactPage.form.name.label')}
                </label>
                <input
                  type="text"
                  id="name"
                  {...form.register('name')}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  placeholder={t('contactPage.form.name.placeholder')}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{t('contactPage.form.name.error')}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-black font-medium mb-2">
                  {t('contactPage.form.email.label')}
                </label>
                <input
                  type="email"
                  id="email"
                  {...form.register('email')}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  placeholder={t('contactPage.form.email.placeholder')}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{t('contactPage.form.email.error')}</p>
                )}
              </div>
              <div>
                <label htmlFor="company" className="block text-black font-medium mb-2">
                  {t('contactPage.form.company.label')}
                </label>
                <input
                  type="text"
                  id="company"
                  {...form.register('company')}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  placeholder={t('contactPage.form.company.placeholder')}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-black font-medium mb-2">
                  {t('contactPage.form.subject.label')}
                </label>
                <input
                  type="text"
                  id="subject"
                  {...form.register('subject')}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  placeholder={t('contactPage.form.subject.placeholder')}
                />
                {form.formState.errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{t('contactPage.form.subject.error')}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-black font-medium mb-2">
                  {t('contactPage.form.message.label')}
                </label>
                <textarea
                  id="message"
                  {...form.register('message')}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  placeholder={t('contactPage.form.message.placeholder')}
                ></textarea>
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{t('contactPage.form.message.error')}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2209B8] hover:bg-[#1A07A3] text-white py-2 rounded-md transition-colors disabled:opacity-50"
              >
                {t('contactPage.form.submit')}
              </button>
              {isSuccess && (
                <p className="text-green-500 text-center mt-4">{t('contactPage.success')}</p>
              )}
            </form>
          </div>

          {/* Dane kontaktowe */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-black">
            <h2 className="text-2xl font-bold text-black mb-6">{t('contactPage.contact.title')}</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4">
                  <h3 className="font-semibold text-black">{t('contactPage.contact.email.label')}</h3>
                  <p className="text-black/70">{t('contactPage.contact.email.value')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ml-4">
                  <h3 className="font-semibold text-black">{t('contactPage.contact.phone.label')}</h3>
                  <p className="text-black/70">{t('contactPage.contact.phone.value')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4">
                  <h3 className="font-semibold text-black">{t('contactPage.contact.address.label')}</h3>
                  <p className="text-black/70">
                    {t('contactPage.contact.address.line1')}<br />
                    {t('contactPage.contact.address.line2')}<br />
                    {t('contactPage.contact.address.line3')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="ml-4">
                  <h3 className="font-semibold text-black">{t('contactPage.contact.workingHours.label')}</h3>
                  <p className="text-black/70">
                    {t('contactPage.contact.workingHours.weekdays')}<br />
                    {t('contactPage.contact.workingHours.weekend')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <div className="ml-4">
                  <h3 className="font-semibold text-black">{t('contactPage.contact.social.label')}</h3>
                  <Link 
                    href="https://www.facebook.com/profile.php?id=61571088134057" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#1A07A3]"
                  >
                    {t('contactPage.contact.social.facebook')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 