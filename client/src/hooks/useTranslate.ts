import { useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

const useTranslate = () => {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  const t = useCallback((en: string, ar: string, es?: string) => {
    if (language === 'ar') {
      return ar;
    }
    if (language === 'es' && es) {
      return es;
    }
    return en;
  }, [language]);

  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };
};

export default useTranslate;