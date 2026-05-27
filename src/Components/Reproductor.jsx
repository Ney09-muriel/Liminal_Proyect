import { div } from "motion/react-client"
import react, { useRef, useState } from "react"

export const Reproductor = () => {
    const [mostrarMensaje, setMostrarMensaje] = useState(false)
    const [detener, setDetener] = useState(false)





    const videoRef = useRef(null)


    const handlePlay =() => {
        videoRef.current.play()
    }

    const handlePause =() => {
        videoRef.current.pause()
    }

    const handleGo =() => {
        videoRef.current.currentTime = 5
    }

    const handleContinuar =() => {
        setMostrarMensaje(false)
        videoRef.current.play()
    }

    const handleUpdate =() => {
        if(videoRef.current.currentTime >= 5 && !detener){
            videoRef.current.pause()
            setMostrarMensaje(true)
            setDetener(true)
        }
    }
    return (
        <>
            <div>Reproductor Interactivo</div>
            <video 
            ref={videoRef}
            width={700}
            onTimeUpdate={handleUpdate}
            >
                <source src="https://www.w3schools.com/Html/mov_bbb.mp4"
                    type="Video/mp4" />
            </video>
            {
                mostrarMensaje && (
                    <div>
                        <h2>Video Detenido en el segundo 5 🤦‍♂️</h2>
                    </div>
                )
            }
            <div>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleContinuar}>Continuar</button>
                <button onClick={handleGo}>Avanzar al seg 5</button>
            </div>


        </>
    )
}
