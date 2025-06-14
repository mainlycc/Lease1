"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { cn } from '@/translations/cn';
import { pl } from '@/translations/pl';
import { uk } from '@/translations/uk';
import { en } from '@/translations/en';

type Language = 'pl' | 'cn' | 'ua' | 'en';

type TranslationValue = string | string[] | { [key: string]: TranslationValue };

interface TranslationsContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationsContext = createContext<TranslationsContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pl');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail) {
        setLanguage(customEvent.detail as Language);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  const t = (key: string): string => {
    let translations: { [key: string]: TranslationValue };
    switch (language) {
      case 'pl':
        translations = pl;
        break;
      case 'cn':
        translations = cn;
        break;
      case 'ua':
        translations = uk;
        break;
      case 'en':
        translations = en;
        break;
      default:
        return key;
    }

    const keys = key.split('.');
    let current: TranslationValue = translations;
    for (const k of keys) {
      if (typeof current !== 'object' || !(k in current)) return key;
      current = (current as { [key: string]: TranslationValue })[k];
    }
    return typeof current === 'string' ? current : key;
  };

  return (
    <TranslationsContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }
  return context;
} 