import LottieModule from "lottie-react"
import dataNey from "../assets/dataNey.json"

const Lottie = LottieModule.default;

export const LootieNey = () => {


const LottieRef = useRef()

const reproducir = () => {
  LottieRef.current.stop()
  LottieRef.current.play()
  

}


  return (
    <div clasename ="pantalla">
      <img className="fondo" src="./assets/animacionPolo/fondo.webp" alt="" />
      







        <Lottie
        animationData={dataNey}
        loop={true}
        style={{width: 500, height: 500}}
        />

    </div>
  )
}
