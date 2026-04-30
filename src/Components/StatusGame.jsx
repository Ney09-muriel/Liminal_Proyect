import { useState } from "react";

export const StatusGame = () => {
  const [gemas, setGemas] = useState("");
  const [vidas, setVidas] = useState("")
return (
    <>
    <div className="vidas">
      <button>Vida 1</button>
      <button>Vida 2</button>
      <button>Vida 3</button>
    </div>

    <div className="gemas">
      <button>Gema 1</button>
      <button>Gema 2</button>
      <button>Gema 3</button>
    </div>
    </>
  )
}

