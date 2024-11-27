import {useTranslation} from 'react-i18next';

import Logo from '@/assets/bosta-logo.png';
import styles from './header.module.css'
import useModal from "@/components/hooks/useModal.ts";
import {useEffect, useState} from "react";
import i18n from "i18next";

const {header, header_container, actions, lang_btn} = styles;
const Header = () => {

  const {openModal} = useModal();

  const [language, setLanguage] = useState('ar');

  const {t} = useTranslation();

  useEffect(() => {
    void i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);


  return (
    <header className={header}>
      <section className={`container ${header_container}`}>
        <div>
          <img src={Logo} alt="logo"/>
        </div>

        <nav>
          <menu className="flex-center" style={{gap: "5rem"}}>
            <li>{t('homeLink')}</li>
            <li>الأسعار</li>
            <li>كلم المبيعات</li>
          </menu>
        </nav>

        <section className="flex-center" style={{gap: "3rem"}}>
          <div className={`flex-center ${actions}`} style={{gap: "1rem"}}>
            <button onClick={() => openModal()}>تتبع شحنتك</button>

            <button>تسجيل الدخول</button>
          </div>
          <button className={lang_btn} onClick={() => setLanguage(
            prev => prev === 'ar' ? 'en' : 'ar')}>{language === 'ar' ? "EN" : "Ar"}</button>
        </section>
      </section>
    </header>
  )
}

export default Header;