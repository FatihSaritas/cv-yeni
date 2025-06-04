'use client';

import React, { createContext, useContext, useState } from 'react';
import { en } from '../translations/en';
import { tr } from '../translations/tr';

type Language = 'tr' | 'en';
type Translations = typeof tr;

interface LanguageContextType {
  language: Language;
  translations: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const translations = language === 'tr' ? tr : en;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 