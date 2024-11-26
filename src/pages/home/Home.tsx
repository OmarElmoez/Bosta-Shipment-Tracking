import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import LottieFilesPaths from "../../../public/lottie-files";
import styles from './home.module.css'
import useModal from "@/components/hooks/useModal.ts";

const {instruction_text} = styles;

const Home = () => {

  const {openModal} = useModal();

  return (
    <>
      <DotLottieReact
        loop
        autoplay
        src={`${LottieFilesPaths['error']}`}
      />
      <p className={instruction_text}>إضغط على <span style={{ cursor: "pointer"}} onClick={openModal}>تتبع شحنتك</span> و أدخل <span>رقم التتبع</span></p>
    </>

  )
}

export default Home;