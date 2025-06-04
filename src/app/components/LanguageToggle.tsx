'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
    >
      {language === 'tr' ? 'EN' : 'TR'}
    </button>
  );
} 