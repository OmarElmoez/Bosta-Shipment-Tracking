import {useTranslation} from 'react-i18next';

import Logo from '@/assets/bosta-logo.png';
import styles from './header.module.css'
import useModal from "@/components/hooks/useModal.ts";
import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

const {header, header_container, actions, lang_btn, en, left_section} = styles;
const Header = () => {

  const {openModal} = useModal();

  const [language, setLanguage] = useState('ar');

  const {t, i18n} = useTranslation();

  useEffect(() => {
    void i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.className = language
  }, [i18n, language]);

  const navigate = useNavigate();

  const goHome = () => {
    void navigate('/')
  }

  const onClickTrackHandler = () => {
    openModal();
    void navigate('/')
  }

  return (
    <header className={header}>
      <p>test paragraph</p>
      <section className={`container ${header_container}`}>
        <div onClick={goHome} style={{cursor: 'pointer'}}>
          <img src={Logo} alt="logo"/>
        </div>

        <nav className="hideInMobile">
          <menu className="flex-center" style={{gap: "5rem"}}>
            <NavLink to="home" className={({isActive}) => (isActive ? "selected" : "")}>{t('homeLink')}</NavLink>
            <NavLink to="pricing" className={({isActive}) => (isActive ? "selected" : "")}>{t('pricesLink')}</NavLink>
            <NavLink to="sales" className={({isActive}) => (isActive ? "selected" : "")}>{t('salesLink')}</NavLink>
          </menu>
        </nav>

        <section className={`flex-center ${left_section}`}>
          <div className={`flex-center ${actions} ${i18n.resolvedLanguage === 'en' ? en : ''}`} style={{gap: "1rem"}}>
            <button onClick={onClickTrackHandler}>{t('trackShipment')}</button>

            <NavLink to='login' className={({isActive}) => (isActive ? "selected hideInMobile" : "hideInMobile")}>{t(
              'login')}</NavLink>
          </div>
          <button className={lang_btn} onClick={() => setLanguage(
            prev => prev === 'ar' ? 'en' : 'ar')}>{language === 'ar' ? "EN" : "Ar"}</button>
        </section>
      </section>
    </header>
  )
}

export default Header;