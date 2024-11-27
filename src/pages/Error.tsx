import LottieFilesPaths from "../../public/lottie-files";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";

const Error = () => {
  return (
    <DotLottieReact
      loop
      autoplay
      src={`${LottieFilesPaths['notFound']}`}
    />
  )
}

export default Error