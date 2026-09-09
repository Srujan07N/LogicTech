import { motion } from 'framer-motion'
import logo from '../assets/L.jpeg'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
    >
      <motion.div
        animate={{ 
          scale: [0.95, 1.1, 0.95],
          opacity: [0.6, 1, 0.6] 
        }}
        transition={{ 
          duration: 1.8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="flex flex-col items-center gap-4"
      >
        <img 
          src={logo} 
          alt="LogicTech Solutions Loading..." 
          className="h-28 w-28 object-contain rounded-2xl shadow-xl shadow-navy-deep/10" 
        />
        <motion.div 
          className="flex gap-1.5 mt-2"
          initial="hidden"
          animate="visible"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-2 w-2 rounded-full bg-gold"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
