import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import LottieFilesPaths from "../../../public/lottie-files";

const Home = () => {
  return (
    <DotLottieReact
      loop
      autoplay
      src={`${LottieFilesPaths['error']}`}
    />
  )
}

export default Home;