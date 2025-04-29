"use client"

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useTranslations } from '@/lib/language-context'

export function LanguageDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const { setLanguage } = useTranslations()

  useEffect(() => {
    // Sprawdź czy użytkownik już wybrał język
    const hasSelectedLanguage = localStorage.getItem('selectedLanguage')
    if (!hasSelectedLanguage) {
      setIsOpen(true)
    }

    // Dodaj nasłuchiwanie na zdarzenie otwierania dialogu
    const handleOpenDialog = () => setIsOpen(true)
    window.addEventListener('openLanguageDialog', handleOpenDialog)

    return () => {
      window.removeEventListener('openLanguageDialog', handleOpenDialog)
    }
  }, [])

  const handleLanguageSelect = (language: 'pl' | 'cn' | 'ua') => {
    localStorage.setItem('selectedLanguage', language)
    setLanguage(language)
    // Emituj zdarzenie zmiany języka
    const event = new CustomEvent('languageChanged', { detail: language })
    window.dispatchEvent(event)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl mb-4">
            Wybierz język / 选择语言 / Виберіть мову
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => handleLanguageSelect('pl')}
            className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-[#2209B8] hover:bg-gray-50 transition-all"
          >
            <span className="fi fi-pl text-5xl mb-2"></span>
            <span className="font-medium">Polski</span>
          </button>
          <button
            onClick={() => handleLanguageSelect('cn')}
            className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-[#2209B8] hover:bg-gray-50 transition-all"
          >
            <span className="fi fi-cn text-5xl mb-2"></span>
            <span className="font-medium">中文</span>
          </button>
          <button
            onClick={() => handleLanguageSelect('ua')}
            className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-[#2209B8] hover:bg-gray-50 transition-all"
          >
            <span className="fi fi-ua text-5xl mb-2"></span>
            <span className="font-medium">Українська</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Eksportujemy funkcję do otwierania dialogu
export function openLanguageDialog() {
  const event = new CustomEvent('openLanguageDialog')
  window.dispatchEvent(event)
} 