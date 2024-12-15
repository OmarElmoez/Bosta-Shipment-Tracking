import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import LottieFilesPaths from "../../../public/lottie-files";
import styles from './home.module.css'
import useModal from "@/components/hooks/useModal.ts";
import {useTranslation} from "react-i18next";

const {instruction_text} = styles;

const Home = () => {

  const {openModal} = useModal();

  const {t} = useTranslation()

  return (
    <>
      <DotLottieReact
        loop
        autoplay
        src={`${LottieFilesPaths['track']}`}
      />
      <p className={instruction_text}>{t('clickOn')} <span style={{cursor: "pointer"}} onClick={openModal}>{t(
        'trackShipment')}</span> {t('enter')} <span>{t('trackingNumber')}</span></p>
      <p>{ import.meta.env["VITE_PRO_HEADER"] }</p>
    </>

  )
}

export default Home;