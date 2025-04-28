"use client";

import { useState } from "react";
import { Check, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Language {
  code: string;
  name: string;
  flag: React.ReactNode;
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  const languages: Language[] = [
    {
      code: "pl",
      name: "Polski",
      flag: <span className="fi fi-pl text-2xl"></span>,
    },
    {
      code: "cn",
      name: "中文",
      flag: <span className="fi fi-cn text-2xl"></span>,
    },
    {
      code: "ua",
      name: "Українська",
      flag: <span className="fi fi-ua text-2xl"></span>,
    },
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as "pl" | "cn" | "ua");
  };

  return (
    <TooltipProvider>
      <div className="flex items-center gap-2 bg-[#300FE6]/20 p-2 rounded-lg">
        <Globe className="h-5 w-5 text-[#2209B8] mr-1" />
        <div className="flex gap-3">
          {languages.map((lang) => (
            <Tooltip key={lang.code}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={cn(
                    "relative flex items-center justify-center p-1 rounded-md transition-all",
                    language === lang.code 
                      ? "bg-[#300FE6]/40 shadow-sm" 
                      : "hover:bg-[#300FE6]/30"
                  )}
                  aria-label={`Zmień język na ${lang.name}`}
                >
                  {lang.flag}
                  {language === lang.code && (
                    <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#300FE6] rounded-full" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>{lang.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
} 