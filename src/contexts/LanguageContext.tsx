import { createContext } from 'preact/compat';
import { useState, useContext } from 'preact/hooks';
import { translations } from '../locales/locales'
import type { ReactNode } from 'preact/compat';

// Definition context structure
interface LanguageContextType {
    locale: string;
    setLocale: (locale: string) => void;
    t: Record<string, string>;
    toogleLocale: () => void;
}

// Create initial context with null value
const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode}) {
    const [locale, setLocale] = useState<string>('en');
    const t = translations[locale];

    function toogleLocale() {
        if (locale === 'en') {
            setLocale('pt');
        }
        else {
            setLocale('en');
        }
    }

    return(
        <LanguageContext.Provider value={{
            locale,
            setLocale,
            t,
            toogleLocale,
        }}>
            { children }
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
    }

    return context;
}   