import LottieModule from "lottie-react"
import Osito from "../assets/animacionPolo/Oso.json"
import { useRef } from "react";


const Lottie = LottieModule.default;

export const LottieNey = () => {


const LottieRef = useRef()

const reproducir = () => {
  LottieRef.current.stop()
  LottieRef.current.play()

}

  return (
    <div clasename ="pantalla">
      <img className="fondo" src="../assets/animacionPolo/fondo.webp" alt="" />
      <img className="nube1" src="../assets/animacionPolo/nube1.webp" alt="" />
      <img className="nube2" src="../assets/animacionPolo/nube2.webp" alt="" />
      <img className="osoPolar" src="" alt="" />
      

        <Lottie
        animationData={Osito}
        />

    </div>
  )
}
