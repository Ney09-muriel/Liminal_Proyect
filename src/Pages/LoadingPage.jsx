import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import "../Stylesheets/LoadingPage.css"
export default function App() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const scale        = useTransform(scrollYProgress, [0, 1],   [1, 1.5])
  const opacity      = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const blur         = useTransform(scrollYProgress, [0, 0.8], [0, 16])
  const blurFilter   = useTransform(blur, (v) => `blur(${v}px)`)
  const titleY       = useTransform(scrollYProgress, [0, 0.5], [0, -60])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])

  return (
    <main>
      {/* ── Hero ── */}
      <section ref={containerRef} className="hero">

        {/* Fondo: reemplaza hero.jpg con tu imagen en /src/assets/ */}
        <motion.div
          className="hero-bg"
          style={{ scale, opacity, filter: blurFilter }}
        />

        <div className="hero-overlay" />

        <motion.div
          className="hero-content"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <h1 className="hero-title">LIMINAL</h1>
        </motion.div>
      </section>
    </main>
  )
}
