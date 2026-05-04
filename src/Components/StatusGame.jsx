import { useState } from "react";

export const StatusGame = () => {
  const [gemas, setGemas] = useState(0);
  const [vidas, setVidas] = useState(0);
return (
    <>
    <div className="vidas">
      <h1>❤️ Vidas: _____</h1>
      <button onClick={() => setVidas(prev => prev + 1)}>Vida 1</button>
      <button onClick={() => setVidas(prev => prev + 1)}>Vida 2</button>
      <button onClick={() => setVidas(prev => prev + 1)}>Vida 3</button>
    </div>

    <div className="gemas">
      <h1>💎 Gemas: _____</h1>
      <button onClick={() => setGemas(prev => prev + 1)}>Gemas del infinito</button>
      <button onClick={() => setGemas(prev => prev + 1)}>Gemas oscuras</button>
      <button onClick={() => setGemas(prev => prev + 1)}>Gemas de la luz</button>
    </div>
    </>
  )
}

