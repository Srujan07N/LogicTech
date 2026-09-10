import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import logo from '../assets/LG.png'

export default function Loader({ onComplete }) {
  const shouldReduceMotion = useReducedMotion()
  
  const [typingComplete, setTypingComplete] = useState(false)
  const [showShine, setShowShine] = useState(false)
  const [showLogo, setShowLogo] = useState(false)
  const [showTagline, setShowTagline] = useState(false)

  const text = "LOGICTECH"
  const typingDelay = 0.08 // 80ms per char

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypingComplete(true)
      setShowShine(false)
      setShowLogo(true)
      setShowTagline(true)
      
      const timer = setTimeout(() => {
        if (onComplete) onComplete()
      }, 2000)
      return () => clearTimeout(timer)
    }

    const typingDuration = text.length * (typingDelay * 1000) // 720ms
    const pauseBeforeShine = 300
    
    // 1. Typing complete
    const timer1 = setTimeout(() => {
      setTypingComplete(true)
    }, typingDuration + pauseBeforeShine) // ~1020ms
    
    // 2. Shine effect
    const timer2 = setTimeout(() => {
      setShowShine(true)
    }, typingDuration + pauseBeforeShine + 100) // ~1120ms
    
    // 3. Logo reveal (after shine)
    const timer3 = setTimeout(() => {
      setShowLogo(true)
    }, typingDuration + pauseBeforeShine + 100 + 1000) // ~2120ms
    
    // 4. Tagline reveal
    const timer4 = setTimeout(() => {
      setShowTagline(true)
    }, typingDuration + pauseBeforeShine + 100 + 1000 + 500) // ~2620ms

    // 5. Final Hold and exit
    const timer5 = setTimeout(() => {
      if (onComplete) onComplete()
    }, typingDuration + pauseBeforeShine + 100 + 1000 + 500 + 700 + 700) // 4020ms

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [shouldReduceMotion, onComplete])

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: typingDelay }
    }
  }

  const charVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center justify-center -mt-16">
        
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ 
            opacity: showLogo ? 1 : 0, 
            scale: showLogo ? 1 : 0.92,
            y: showLogo ? 0 : 10
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 h-20 flex items-center justify-center"
        >
          <img src={logo} alt="LogicTech" className="h-20 w-auto object-contain" />
        </motion.div>

        {/* LOGICTECH TEXT */}
        <div className="relative font-display font-bold text-5xl md:text-6xl tracking-[0.15em] flex items-center mb-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex"
          >
            {text.split('').map((char, i) => {
              const isLogic = i < 5
              return (
                <motion.span
                  key={i}
                  variants={charVariants}
                  className={`${isLogic ? "text-navy-deep" : "text-gold"}`}
                >
                  {char}
                </motion.span>
              )
            })}
          </motion.div>
          
          {/* Blinking Cursor */}
          {!typingComplete && !shouldReduceMotion && (
            <motion.div
              className="absolute -right-3 md:-right-4 top-[10%] bottom-[10%] w-[3px] bg-gold"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
          )}

          {/* Shine Effect Overlay */}
          {showShine && (
            <motion.div
              className="absolute -inset-y-4 -inset-x-8 z-10 pointer-events-none overflow-hidden"
            >
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '200%' }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-[60%] bg-gradient-to-r from-transparent via-white/90 to-transparent skew-x-[-20deg]"
              />
            </motion.div>
          )}
        </div>

        {/* TAGLINE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: showTagline ? 1 : 0,
            y: showTagline ? 0 : 10
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-8 flex items-center justify-center text-navy-deep/60 font-medium text-sm md:text-base tracking-widest uppercase"
        >
        
        </motion.div>

      </div>
    </motion.div>
  )
}
