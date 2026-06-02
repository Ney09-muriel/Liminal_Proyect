import Lottie from "lottie-react"
import dataNey from "../assets/dataNey.json"

export const LootieNey = () => {
  return (
    <div>
        <Lottie
        animacionData={dataNey}
        loop={true}
        style={{width: 500, height: 500}}
        />

    </div>
  )
}
