import BrFlag from '../assets/br-flag.png';
import UsFlag from '../assets/us-flag.png';
import { useLanguage } from '../contexts/index';

export function LanguageButton () { 

    const { toogleLocale, locale } = useLanguage();

  return (
    <>
        <button className="language-button" onClick={toogleLocale}>
            {locale === 'en' ? <img src={BrFlag}/> : <img src={UsFlag}/>}
        </button>
    </>
    
  );
}