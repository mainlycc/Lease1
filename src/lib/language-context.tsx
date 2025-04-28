"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "pl" | "cn" | "ua";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, string>;
}

const defaultTranslations: Record<string, Record<string, string>> = {
  pl: {
    homepage: "Strona główna",
    offers: "Oferty",
    about: "O nas",
    contact: "Kontakt",
    register: "Rejestracja",
    login: "Logowanie",
    // Możesz dodać więcej tłumaczeń tutaj
  },
  cn: {
    homepage: "首页",
    offers: "优惠",
    about: "关于我们",
    contact: "联系我们",
    register: "注册",
    login: "登录",
    // Możesz dodać więcej tłumaczeń tutaj
  },
  ua: {
    homepage: "Головна сторінка",
    offers: "Пропозиції",
    about: "Про нас",
    contact: "Контакти",
    register: "Реєстрація",
    login: "Увійти",
    // Możesz dodać więcej tłumaczeń tutaj
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pl");

  const value = {
    language,
    setLanguage,
    translations: defaultTranslations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 