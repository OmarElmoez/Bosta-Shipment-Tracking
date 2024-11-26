import Logo from '@/assets/bosta-logo.png';
import styles from './header.module.css'
import useModal from "@/components/hooks/useModal.ts";

const { header, header_container, actions, lang_btn } = styles;
const Header = ( ) => {

  const {openModal} = useModal();

  return (
    <header className={header}>
      <section className={`container ${header_container}`}>
        <div>
          <img src={Logo} alt="logo"/>
        </div>

        <nav>
          <menu className="flex-center" style={{ gap: "5rem" }}>
            <li>الرئيسية</li>
            <li>الأسعار</li>
            <li>كلم المبيعات</li>
          </menu>
        </nav>

        <section className="flex-center" style={{ gap: "3rem" }}>
          <div className={`flex-center ${actions}`} style={{ gap: "1rem" }}>
            <button onClick={() => openModal()}>تتبع شحنتك</button>

            <button>تسجيل الدخول</button>
          </div>
          <button className={lang_btn}>ENG</button>
        </section>
      </section>
    </header>
  )
}

export default Header;