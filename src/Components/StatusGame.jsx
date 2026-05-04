import { useState } from "react";

export const StatusGame = () => {
  const [gemas, setGemas] = useState("");
  const [vidas, setVidas] = useState("")
return (
    <>
    <div className="vidas">
      <h1>Vidas: ____</h1>
      <button>Vida 1</button>
      <button>Vida 2</button>
      <button>Vida 3</button>
    </div>

    <div className="gemas">
      <h1>Gemas: ____</h1>
      <button>Gema 1</button>
      <button>Gema 2</button>
      <button>Gema 3</button>
    </div>
    </>
  )
}

